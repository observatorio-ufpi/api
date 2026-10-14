/**
 * Importador genérico dos datasets SIMCAQ (1D e 2D) para o schema Postgres
 * "educacao_v2" (ver prisma/educacao-v2/schema.prisma).
 *
 * Os datasets são dumps da API SIMCAQ por município:
 *   - 1D: datasets/dados_educacionais_basicos/<categoria>/[classico|moderno/]<ano>/<dim>/<ibge>_<NOME>.json
 *   - 2D: .../dados_educacionais_basicos_microdados/<categoria>/[classico|moderno/]<ano>/<dimA>_X_<dimB>/<ibge>_<NOME>.json
 *
 * O parser não precisa de mapeamento por categoria: lê meta.dims e extrai de cada
 * item de `result` os pares <dim>_id / <dim>_name. A coluna `referencia` do fato é
 * o diretório do dataset no nível categoria[/era] (ex.: "matriculas/classico").
 *
 * Paralelo por worker_threads: cada worker tem seu PrismaClient e processa um
 * subconjunto das pastas de dimensão. Progresso centralizado na thread principal.
 *
 * Uso:
 *   node scripts/import-datasets.mjs [--root=1d|2d|all] [--categoria=escolas,matriculas]
 *                                    [--ano=2020] [--dim=location] [--workers=10] [--dry-run]
 *
 * Progresso salvo em scripts/progresso-import-datasets.json (retomável por pasta).
 *
 * IMPORTANTE: após qualquer importação, rode o backfill da camada canônica
 * (preenche indicador, dims_canonico, nome_canonico e valor_canonico_id — é
 * idempotente e é a única fonte do mapeamento clássico/moderno):
 *   docker exec -i observatorio_educacao_container sh -c \
 *     'psql -U "$POSTGRES_USER" -d "$POSTGRES_DB" -v ON_ERROR_STOP=1' \
 *     < scripts/backfill-canonico.sql
 */

import { readdirSync, readFileSync, statSync, existsSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { Worker, isMainThread, parentPort, workerData } from 'node:worker_threads';
import { fileURLToPath } from 'node:url';
import { PrismaClient } from '../prisma/educacao-v2/generated/educacao-v2-client/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATASETS_BASE = path.resolve(__dirname, '../../datasets');
const ROOTS = {
  '1d': path.join(DATASETS_BASE, 'dados_educacionais_basicos'),
  '2d': path.join(
    DATASETS_BASE,
    'dados_educacionais_basicos_microdados (2)',
    'dados_educacionais_basicos_microdados',
  ),
};
const MUNICIPIOS_JSON = path.join(ROOTS['1d'], '_municipios_piaui.json');
const PROGRESSO_PATH = path.resolve(__dirname, 'progresso-import-datasets.json');
const BATCH_SIZE = 5000;

// ---------------------------------------------------------------- CLI args
const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, '').split('=');
    return [k, v ?? true];
  }),
);
const filtroRoot = args.root && args.root !== 'all' ? [String(args.root)] : ['1d', '2d'];
const filtroCategorias = args.categoria ? String(args.categoria).split(',') : null;
const filtroAnos = args.ano ? String(args.ano).split(',').map(Number) : null;
const filtroDims = args.dim ? String(args.dim).split(',') : null;
const dryRun = Boolean(args['dry-run']);
const numWorkers = Math.max(1, Number(args.workers ?? 10));

// ================================================================ WORKER
// Lógica de parsing/inserção; roda tanto no worker quanto inline (workers=1).

function criarContextoWorker() {
  const prisma = new PrismaClient();
  const stats = {
    arquivos: 0,
    fatosLidos: 0,
    fatosInseridos: 0,
    itensIgnorados: 0,
    valoresCriados: 0,
    erros: [],
  };
  const cacheDimensoes = new Map();
  const localidadesConhecidas = new Set();
  let bufferFatos = [];

  // upsert tolerante a corrida entre workers (P2002 = unique violada)
  async function upsertComRetry(fn, refetch) {
    try {
      return await fn();
    } catch (e) {
      if (e?.code === 'P2002') {
        const existente = await refetch();
        if (existente) return existente;
      }
      throw e;
    }
  }

  async function getDimensao(nome) {
    if (cacheDimensoes.has(nome)) return cacheDimensoes.get(nome);
    const dim = await upsertComRetry(
      () => prisma.dimensao.upsert({ where: { nome }, create: { nome }, update: {} }),
      () => prisma.dimensao.findUnique({ where: { nome } }),
    );
    const entry = { id: dim.id, valores: new Map(), porNome: new Map() };
    const valores = await prisma.valorDimensao.findMany({ where: { dimensao_id: dim.id } });
    for (const v of valores) {
      entry.valores.set(v.codigo_api, v.id);
      if (!entry.porNome.has(v.nome)) entry.porNome.set(v.nome, v.id);
    }
    cacheDimensoes.set(nome, entry);
    return entry;
  }

  // hash FNV-1a 31 bits do nome -> código sintético negativo DETERMINÍSTICO,
  // para que workers paralelos gerem o mesmo código para o mesmo nome.
  function codigoSintetico(nome) {
    let h = 0x811c9dc5;
    for (let i = 0; i < nome.length; i++) {
      h ^= nome.charCodeAt(i);
      h = Math.imul(h, 0x01000193);
    }
    return -((h >>> 1) + 1); // sempre negativo, nunca colide com ids reais da API
  }

  async function getValorDimensaoId(nomeDim, codigoApi, nomeValor) {
    const dim = await getDimensao(nomeDim);

    // Alguns endpoints retornam itens sem <dim>_id (ex.: pee_por_categoria) ou com
    // id null (ex.: contract_type "Não classificado"). Resolvemos pelo nome,
    // com código sintético negativo determinístico (hash do nome).
    const semCodigo = codigoApi === undefined || codigoApi === null || Number.isNaN(codigoApi);
    if (semCodigo) {
      const nome = String(nomeValor ?? '').trim();
      if (!nome) return null;
      if (dim.porNome.has(nome)) return dim.porNome.get(nome);
      codigoApi = codigoSintetico(nome);
    }

    if (dim.valores.has(codigoApi)) return dim.valores.get(codigoApi);
    const valor = await upsertComRetry(
      () =>
        prisma.valorDimensao.upsert({
          where: { dimensao_id_codigo_api: { dimensao_id: dim.id, codigo_api: codigoApi } },
          create: { dimensao_id: dim.id, codigo_api: codigoApi, nome: String(nomeValor ?? codigoApi) },
          update: {},
        }),
      () =>
        prisma.valorDimensao.findUnique({
          where: { dimensao_id_codigo_api: { dimensao_id: dim.id, codigo_api: codigoApi } },
        }),
    );
    dim.valores.set(codigoApi, valor.id);
    if (!dim.porNome.has(valor.nome)) dim.porNome.set(valor.nome, valor.id);
    stats.valoresCriados++;
    return valor.id;
  }

  async function garantirLocalidade(id, nomeArquivo) {
    if (localidadesConhecidas.has(id)) return;
    const existente = await prisma.localidade.findUnique({ where: { id } });
    if (!existente) {
      const nome = nomeArquivo.replace(/^\d+_/, '').replace(/\.json$/, '').replace(/_/g, ' ');
      await upsertComRetry(
        () =>
          prisma.localidade.upsert({
            where: { id },
            create: {
              id,
              codigo_ibge: String(id),
              nome,
              tipo: String(id).length <= 2 ? 'estado' : 'municipio',
            },
            update: {},
          }),
        () => prisma.localidade.findUnique({ where: { id } }),
      );
    }
    localidadesConhecidas.add(id);
  }

  async function flushFatos() {
    if (bufferFatos.length === 0 || dryRun) {
      bufferFatos = [];
      return;
    }
    const res = await prisma.fatoEducacao.createMany({ data: bufferFatos, skipDuplicates: true });
    stats.fatosInseridos += res.count;
    bufferFatos = [];
  }

  async function processarArquivo(caminhoArquivo, referencia) {
    let json;
    try {
      json = JSON.parse(readFileSync(caminhoArquivo, 'utf-8'));
    } catch (e) {
      stats.erros.push(`JSON inválido: ${caminhoArquivo} (${e.message})`);
      return;
    }
    const meta = json.meta ?? {};
    const result = json.result ?? [];
    const dims = String(meta.dims ?? '')
      .split(',')
      .map((d) => d.trim())
      .filter(Boolean);
    if (dims.length === 0 || dims.length > 2) {
      stats.erros.push(`meta inesperada em ${caminhoArquivo}`);
      return;
    }

    const cityId = Number(meta.city_id);
    if (!Number.isFinite(cityId)) {
      stats.erros.push(`city_id ausente em ${caminhoArquivo}`);
      return;
    }
    await garantirLocalidade(cityId, path.basename(caminhoArquivo));

    // normaliza ordem do par (alfabética) para evitar duplicidade A×B / B×A;
    // slug com separador "_", ex.: "adm_dependency_detailed_location"
    const dimsOrdenadas = [...dims].sort();
    const dimsStr = dimsOrdenadas.join('_');

    for (const item of result) {
      stats.fatosLidos++;
      const ano = Number(item.year);
      const total = Number(item.total);
      if (!Number.isFinite(ano) || !Number.isFinite(total)) {
        stats.itensIgnorados++;
        continue;
      }

      const valorIds = [];
      let incompleto = false;
      for (const d of dimsOrdenadas) {
        const codigoBruto = item[`${d}_id`];
        const codigo = codigoBruto === undefined || codigoBruto === null ? null : Number(codigoBruto);
        const nome = item[`${d}_name`];
        const valorId = await getValorDimensaoId(d, codigo, nome);
        if (valorId === null || valorId === undefined) {
          incompleto = true;
          break;
        }
        valorIds.push(valorId);
      }
      if (incompleto) {
        stats.itensIgnorados++;
        continue;
      }

      bufferFatos.push({
        referencia,
        dims: dimsStr,
        ano,
        total,
        localidade_id: cityId,
        valor_dim1_id: valorIds[0],
        valor_dim2_id: valorIds[1] ?? 0,
      });
      if (bufferFatos.length >= BATCH_SIZE) await flushFatos();
    }
  }

  async function processarPasta(pasta) {
    const antes = { ...stats, erros: undefined };
    // referencia = diretório no nível categoria[/era]: "matriculas/classico", "escolas"...
    const caminhoRel = pasta.chave.split(':')[1];
    const segmentos = caminhoRel.split('/');
    const referencia =
      segmentos[1] === 'classico' || segmentos[1] === 'moderno'
        ? `${pasta.categoria}/${segmentos[1]}`
        : pasta.categoria;
    const arquivos = readdirSync(pasta.caminho).filter((f) => f.endsWith('.json'));
    for (const arquivo of arquivos) {
      await processarArquivo(path.join(pasta.caminho, arquivo), referencia);
      stats.arquivos++;
    }
    await flushFatos(); // consistência antes de marcar a pasta como concluída
    return {
      chave: pasta.chave,
      arquivos: arquivos.length,
      delta: {
        arquivos: stats.arquivos - antes.arquivos,
        fatosLidos: stats.fatosLidos - antes.fatosLidos,
        fatosInseridos: stats.fatosInseridos - antes.fatosInseridos,
        itensIgnorados: stats.itensIgnorados - antes.itensIgnorados,
        valoresCriados: stats.valoresCriados - antes.valoresCriados,
      },
    };
  }

  return { prisma, stats, processarPasta };
}

async function rodarWorker(pastas, enviar) {
  const ctx = criarContextoWorker();
  for (const pasta of pastas) {
    const resultado = await ctx.processarPasta(pasta);
    enviar({ type: 'pasta-concluida', ...resultado });
  }
  enviar({ type: 'fim', erros: ctx.stats.erros.slice(0, 50) });
  await ctx.prisma.$disconnect();
}

if (!isMainThread) {
  rodarWorker(workerData.pastas, (msg) => parentPort.postMessage(msg)).catch((e) => {
    parentPort.postMessage({ type: 'erro-fatal', mensagem: String(e?.stack ?? e) });
    process.exit(1);
  });
}

// ================================================================ MAIN
async function main() {
  console.log(
    `Roots: ${filtroRoot.join(', ')} | categorias: ${filtroCategorias ?? 'todas'} | anos: ${filtroAnos ?? 'todos'} | dims: ${filtroDims ?? 'todas'} | workers: ${numWorkers}${dryRun ? ' | DRY-RUN' : ''}`,
  );

  const prisma = new PrismaClient();

  // sentinela usado como valor_dim2 nos fatos 1D
  await prisma.dimensao.upsert({ where: { id: 0 }, create: { id: 0, nome: '(nenhuma)' }, update: {} });
  await prisma.valorDimensao.upsert({
    where: { id: 0 },
    create: { id: 0, dimensao_id: 0, codigo_api: 0, nome: 'TOTAL' },
    update: {},
  });

  // localidades a partir do JSON de municípios (codigo_ibge = id do JSON)
  const municipiosData = JSON.parse(readFileSync(MUNICIPIOS_JSON, 'utf-8'));
  const municipios = municipiosData.result.map((m) => ({
    id: m.id,
    codigo_ibge: String(m.id),
    nome: m.name,
    tipo: 'municipio',
    uf: 'PI',
    latitude: m.latitude ?? null,
    longitude: m.longitude ?? null,
  }));
  municipios.push({ id: 22, codigo_ibge: '22', nome: 'Piauí', tipo: 'estado', uf: 'PI', latitude: null, longitude: null });
  await prisma.localidade.createMany({ data: municipios, skipDuplicates: true });
  console.log(`Localidades garantidas: ${municipios.length}`);
  await prisma.$disconnect();

  // progresso
  let progresso = {};
  if (existsSync(PROGRESSO_PATH)) {
    try {
      progresso = JSON.parse(readFileSync(PROGRESSO_PATH, 'utf-8'));
    } catch {
      progresso = {};
    }
  }
  const salvarProgresso = () => writeFileSync(PROGRESSO_PATH, JSON.stringify(progresso, null, 2));

  // lista de pastas de dimensão
  const pastas = [];
  for (const rootKey of filtroRoot) {
    const root = ROOTS[rootKey];
    for (const categoria of readdirSync(root)) {
      const catPath = path.join(root, categoria);
      if (!statSync(catPath).isDirectory() || categoria.startsWith('.') || categoria.startsWith('_'))
        continue;
      if (filtroCategorias && !filtroCategorias.includes(categoria)) continue;

      const pastasAno = [];
      for (const filho of readdirSync(catPath)) {
        const p = path.join(catPath, filho);
        if (!statSync(p).isDirectory()) continue;
        if (/^\d{4}$/.test(filho)) pastasAno.push({ ano: Number(filho), caminho: p });
        else if (filho === 'classico' || filho === 'moderno') {
          for (const anoDir of readdirSync(p)) {
            if (/^\d{4}$/.test(anoDir))
              pastasAno.push({ ano: Number(anoDir), caminho: path.join(p, anoDir) });
          }
        }
      }
      for (const { ano, caminho } of pastasAno) {
        if (filtroAnos && !filtroAnos.includes(ano)) continue;
        for (const dimDir of readdirSync(caminho)) {
          const dimPath = path.join(caminho, dimDir);
          if (!statSync(dimPath).isDirectory()) continue;
          if (filtroDims && !filtroDims.includes(dimDir)) continue;
          const chave = `${rootKey}:${path.relative(root, dimPath)}`;
          if (progresso[chave]) continue;
          pastas.push({ rootKey, categoria, ano, dimDir, caminho: dimPath, chave });
        }
      }
    }
  }
  console.log(`Pastas de dimensão a processar: ${pastas.length}`);
  if (pastas.length === 0) {
    console.log('Nada a fazer (tudo já consta no progresso).');
    return;
  }

  // particiona round-robin entre os workers
  const efetivos = Math.min(numWorkers, pastas.length);
  const particoes = Array.from({ length: efetivos }, () => []);
  pastas.forEach((p, i) => particoes[i % efetivos].push(p));

  const totais = { arquivos: 0, fatosLidos: 0, fatosInseridos: 0, itensIgnorados: 0, valoresCriados: 0 };
  const errosGerais = [];
  let concluidas = 0;
  const inicio = Date.now();

  await Promise.all(
    particoes.map(
      (particao) =>
        new Promise((resolve, reject) => {
          const worker = new Worker(__filename, {
            workerData: { pastas: particao },
            argv: process.argv.slice(2),
          });
          worker.on('message', (msg) => {
            if (msg.type === 'pasta-concluida') {
              concluidas++;
              for (const k of Object.keys(totais)) totais[k] += msg.delta[k] ?? 0;
              if (!dryRun) {
                progresso[msg.chave] = { arquivos: msg.arquivos, em: new Date().toISOString() };
                salvarProgresso();
              }
              if (concluidas % 50 === 0 || concluidas === pastas.length) {
                const seg = ((Date.now() - inicio) / 1000).toFixed(0);
                console.log(
                  `[${concluidas}/${pastas.length}] arquivos: ${totais.arquivos} | fatos: ${totais.fatosInseridos} | ${seg}s`,
                );
              }
            } else if (msg.type === 'fim') {
              errosGerais.push(...(msg.erros ?? []));
            } else if (msg.type === 'erro-fatal') {
              reject(new Error(msg.mensagem));
            }
          });
          worker.on('error', reject);
          worker.on('exit', (code) =>
            code === 0 ? resolve() : reject(new Error(`worker saiu com código ${code}`)),
          );
        }),
    ),
  );

  console.log('\n===== RESUMO =====');
  console.log(`Pastas processadas:    ${concluidas}`);
  console.log(`Arquivos processados:  ${totais.arquivos}`);
  console.log(`Itens lidos:           ${totais.fatosLidos}`);
  console.log(`Fatos inseridos:       ${totais.fatosInseridos} (skipDuplicates ativo)`);
  console.log(`Itens ignorados:       ${totais.itensIgnorados}`);
  console.log(`Valores de dimensão:   ${totais.valoresCriados} novos`);
  if (errosGerais.length) {
    console.log(`Erros (${errosGerais.length}):`);
    for (const e of errosGerais.slice(0, 20)) console.log(`  - ${e}`);
  }
  const seg = ((Date.now() - inicio) / 1000).toFixed(0);
  console.log(`Tempo total: ${seg}s`);
}

if (isMainThread) {
  main().catch((e) => {
    console.error(e);
    process.exitCode = 1;
  });
}
