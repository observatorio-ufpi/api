/**
 * Recuperação dos cruzamentos 2D de matrículas/clássico com pee_por_categoria.
 *
 * A API SIMCAQ devolve esses cruzamentos num formato achatado: blocos de linhas
 * de categoria (só com pee_por_categoria_name) seguidos de pseudo-linhas de
 * rodapé que carregam a outra dimensão ("<dim>_id" / "<dim>_name" no campo
 * pee_por_categoria_name, com o valor no campo total). Ex.:
 *
 *   {"total": "204", "pee_por_categoria_name": "Cegueira",      "year": 2007}
 *   ...
 *   {"total": 1,        "pee_por_categoria_name": "location_id",   "year": 2007}
 *   {"total": "Urbana", "pee_por_categoria_name": "location_name", "year": 2007}
 *
 * Este script decodifica os blocos e VALIDA cada grupo (dims) inteiro contra a
 * série 1D de pee_por_categoria já importada e verificada: para cada
 * (ano, município, categoria), a soma dos blocos tem de bater exatamente com o
 * valor 1D. Qualquer anomalia ou divergência reprova o grupo inteiro — só
 * grupos 100% validados são importados.
 *
 * Uso:
 *   node scripts/import-pee-blocos.mjs            # só valida (dry-run)
 *   node scripts/import-pee-blocos.mjs --importar # valida e importa aprovados
 *
 * Depois de importar, rodar o backfill canônico (ver import-datasets.mjs).
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PrismaClient } from '../prisma/educacao-v2/generated/educacao-v2-client/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATASETS = path.resolve(__dirname, '../../datasets');
const MICRO = path.join(
  DATASETS,
  'dados_educacionais_basicos_microdados (2)',
  'dados_educacionais_basicos_microdados',
  'matriculas',
  'classico',
);
const AGREG = path.join(DATASETS, 'dados_educacionais_basicos', 'matriculas', 'classico');
const REFERENCIA = 'matriculas/classico';
const IMPORTAR = process.argv.includes('--importar');
const BATCH = 5000;

// mesmo hash do import-datasets.mjs: código sintético determinístico p/ valores sem id
function codigoSintetico(nome) {
  let h = 0x811c9dc5;
  for (let i = 0; i < nome.length; i++) {
    h ^= nome.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return -((h >>> 1) + 1);
}

/**
 * Decodifica um arquivo achatado. Retorna { blocos, anomalias }.
 * Cada bloco: { flatCodigo, flatNome, linhas: [{categoria, total, ano}] }
 */
function decodificar(result, flatDim) {
  const blocos = [];
  const anomalias = [];
  let linhas = [];
  let flatCodigo = null;
  let flatNome = null;

  const fechar = () => {
    if (!linhas.length && flatCodigo === null && flatNome === null) return;
    if (flatNome === null) {
      anomalias.push(`bloco sem ${flatDim}_name (${linhas.length} linhas)`);
    } else {
      const vistos = new Set();
      for (const l of linhas) {
        if (vistos.has(l.categoria)) anomalias.push(`categoria duplicada no bloco: ${l.categoria}`);
        vistos.add(l.categoria);
      }
      blocos.push({ flatCodigo, flatNome, linhas });
    }
    linhas = [];
    flatCodigo = null;
    flatNome = null;
  };

  // O rodapé pode vir em qualquer ordem (location_id,location_name ou
  // school_name,school_id). O bloco só fecha quando chega a próxima linha de
  // categoria ou o fim do arquivo.
  for (const item of result) {
    const nome = item.pee_por_categoria_name;
    if (nome === `${flatDim}_id`) {
      if (flatCodigo !== null) anomalias.push(`${flatDim}_id repetido sem fechar bloco`);
      const n = Number(item.total);
      if (Number.isFinite(n)) flatCodigo = n;
      else anomalias.push(`${flatDim}_id não numérico: ${item.total}`);
    } else if (nome === `${flatDim}_name`) {
      if (flatNome !== null) anomalias.push(`${flatDim}_name repetido sem fechar bloco`);
      flatNome = String(item.total ?? '').trim();
      if (!flatNome) anomalias.push(`${flatDim}_name vazio`);
    } else {
      // linha de categoria — se há rodapé pendente, ele fecha o bloco anterior
      if (flatCodigo !== null || flatNome !== null) fechar();
      const total = Number(item.total);
      const ano = Number(item.year);
      const categoria = String(nome ?? '').trim();
      if (!categoria || !Number.isFinite(total) || !Number.isFinite(ano)) {
        anomalias.push(`linha de categoria inválida: ${JSON.stringify(item).slice(0, 100)}`);
        continue;
      }
      linhas.push({ categoria, total, ano });
    }
  }
  if (flatCodigo !== null || flatNome !== null) fechar();
  if (linhas.length) anomalias.push(`arquivo terminou no meio de um bloco (${linhas.length} linhas)`);
  return { blocos, anomalias };
}

// valores 1D de pee_por_categoria por (ano, cid): Map<categoria, valor>
function lerUmD(ano, cid) {
  const dir = path.join(AGREG, String(ano), 'pee_por_categoria');
  if (!existsSync(dir)) return null;
  const arq = readdirSync(dir).find((f) => f.startsWith(cid + '_'));
  if (!arq) return null;
  const j = JSON.parse(readFileSync(path.join(dir, arq), 'utf-8'));
  const m = new Map();
  for (const r of j.result ?? []) {
    const nome = String(r.pee_por_categoria_name ?? '').trim();
    const t = Number(r.total);
    if (nome && Number.isFinite(t)) m.set(nome, (m.get(nome) ?? 0) + t);
  }
  return m;
}

// ---------------------------------------------------------------- descoberta
const anos = readdirSync(MICRO).filter((d) => /^\d{4}$/.test(d)).sort();
const gruposSet = new Set();
for (const ano of anos) {
  for (const d of readdirSync(path.join(MICRO, ano))) {
    if (d.includes('pee_por_categoria') && d.includes('_X_')) gruposSet.add(d);
  }
}
// pasta A_X_B -> dimensão achatada = a que não é pee_por_categoria
const grupos = [...gruposSet].sort().map((pasta) => {
  const [a, b] = pasta.split('_X_');
  const flatDim = a === 'pee_por_categoria' ? b : a;
  return { pasta, flatDim, dims: [flatDim, 'pee_por_categoria'].sort() };
});
console.log(`Grupos candidatos: ${grupos.map((g) => g.pasta).join(', ')}\n`);

// ---------------------------------------------------------------- validação
const veredito = new Map(); // pasta -> { ok, arquivos, categoriasOk, detalhe }
for (const g of grupos) {
  let arquivos = 0;
  let categoriasOk = 0;
  const problemas = [];
  for (const ano of anos) {
    const dir = path.join(MICRO, ano, g.pasta);
    if (!existsSync(dir)) continue;
    for (const arq of readdirSync(dir).filter((f) => f.endsWith('.json'))) {
      arquivos++;
      const cid = arq.split('_')[0];
      const j = JSON.parse(readFileSync(path.join(dir, arq), 'utf-8'));
      const { blocos, anomalias } = decodificar(j.result ?? [], g.flatDim);
      if (anomalias.length) {
        problemas.push(`${ano}/${arq}: ${anomalias[0]} (+${anomalias.length - 1})`);
        continue;
      }
      const soma = new Map();
      for (const b of blocos)
        for (const l of b.linhas) soma.set(l.categoria, (soma.get(l.categoria) ?? 0) + l.total);
      const umd = lerUmD(ano, cid);
      if (!umd) {
        problemas.push(`${ano}/${arq}: sem 1D para conferir`);
        continue;
      }
      for (const cat of new Set([...soma.keys(), ...umd.keys()])) {
        if ((soma.get(cat) ?? 0) === (umd.get(cat) ?? 0)) categoriasOk++;
        else problemas.push(`${ano}/${arq}: ${cat} soma=${soma.get(cat) ?? 0} 1D=${umd.get(cat) ?? 0}`);
      }
    }
  }
  const ok = problemas.length === 0;
  veredito.set(g.pasta, { ok, arquivos, categoriasOk, problemas });
  console.log(
    `${ok ? 'APROVADO ' : 'REPROVADO'} ${g.pasta.padEnd(50)} arquivos=${arquivos} categorias conferidas=${categoriasOk} problemas=${problemas.length}`,
  );
  for (const p of problemas.slice(0, 5)) console.log('   ', p);
}

const aprovados = grupos.filter((g) => veredito.get(g.pasta).ok);
console.log(`\n${aprovados.length}/${grupos.length} grupos aprovados.`);

if (!IMPORTAR) {
  console.log('Dry-run (sem --importar): nada foi gravado.');
  process.exit(0);
}
if (!aprovados.length) process.exit(0);

// ---------------------------------------------------------------- importação
const prisma = new PrismaClient();

async function getDim(nome) {
  return prisma.dimensao.upsert({ where: { nome }, create: { nome }, update: {} });
}
const dimPee = await getDim('pee_por_categoria');
const valoresPee = new Map(
  (await prisma.valorDimensao.findMany({ where: { dimensao_id: dimPee.id } })).map((v) => [v.nome, v.id]),
);
async function valorPee(nome) {
  if (valoresPee.has(nome)) return valoresPee.get(nome);
  const v = await prisma.valorDimensao.upsert({
    where: { dimensao_id_codigo_api: { dimensao_id: dimPee.id, codigo_api: codigoSintetico(nome) } },
    create: { dimensao_id: dimPee.id, codigo_api: codigoSintetico(nome), nome },
    update: {},
  });
  valoresPee.set(nome, v.id);
  return v.id;
}

let inseridosTotal = 0;
for (const g of aprovados) {
  const dimFlat = await getDim(g.flatDim);
  const valoresFlat = new Map(
    (await prisma.valorDimensao.findMany({ where: { dimensao_id: dimFlat.id } })).map((v) => [v.codigo_api, v.id]),
  );
  async function valorFlat(codigo, nome) {
    const cod = Number.isFinite(codigo) ? codigo : codigoSintetico(nome);
    if (valoresFlat.has(cod)) return valoresFlat.get(cod);
    const v = await prisma.valorDimensao.upsert({
      where: { dimensao_id_codigo_api: { dimensao_id: dimFlat.id, codigo_api: cod } },
      create: { dimensao_id: dimFlat.id, codigo_api: cod, nome },
      update: {},
    });
    valoresFlat.set(cod, v.id);
    return v.id;
  }

  const dimsStr = g.dims.join('_');
  // ordem alfabética das dims define dim1/dim2 (mesma convenção do importador)
  const flatPrimeiro = g.dims[0] === g.flatDim;
  let buffer = [];
  let inseridos = 0;
  const flush = async () => {
    if (!buffer.length) return;
    const r = await prisma.fatoEducacao.createMany({ data: buffer, skipDuplicates: true });
    inseridos += r.count;
    buffer = [];
  };

  for (const ano of anos) {
    const dir = path.join(MICRO, ano, g.pasta);
    if (!existsSync(dir)) continue;
    for (const arq of readdirSync(dir).filter((f) => f.endsWith('.json'))) {
      const cid = Number(arq.split('_')[0]);
      const j = JSON.parse(readFileSync(path.join(dir, arq), 'utf-8'));
      const { blocos } = decodificar(j.result ?? [], g.flatDim);
      for (const b of blocos) {
        const idFlat = await valorFlat(b.flatCodigo, b.flatNome);
        for (const l of b.linhas) {
          const idPee = await valorPee(l.categoria);
          buffer.push({
            referencia: REFERENCIA,
            dims: dimsStr,
            ano: l.ano,
            total: l.total,
            localidade_id: cid,
            valor_dim1_id: flatPrimeiro ? idFlat : idPee,
            valor_dim2_id: flatPrimeiro ? idPee : idFlat,
          });
          if (buffer.length >= BATCH) await flush();
        }
      }
    }
  }
  await flush();
  inseridosTotal += inseridos;
  console.log(`importado ${g.pasta}: ${inseridos} fatos (dims=${dimsStr})`);
}

console.log(`\nTotal inserido: ${inseridosTotal} fatos.`);
console.log('Agora rode o backfill canônico (scripts/backfill-canonico.sql).');
await prisma.$disconnect();
