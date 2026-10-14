/**
 * Auditoria da importação: compara os datasets em disco com o banco educacao_v2.
 *
 * Para cada grupo (referencia, dims, ano):
 *   - esperado: itens válidos nos JSONs (mesmos critérios do import-datasets.mjs)
 *   - banco: COUNT(*) em FatoEducacao
 * Reporta grupos ausentes e contagens divergentes.
 *
 * Uso: node scripts/audit-import.mjs
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PrismaClient } from '../prisma/educacao-v2/generated/educacao-v2-client/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATASETS_BASE = path.resolve(__dirname, '../../datasets');
const ROOTS = {
  '1d': path.join(DATASETS_BASE, 'dados_educacionais_basicos'),
  '2d': path.join(
    DATASETS_BASE,
    'dados_educacionais_basicos_microdados (2)',
    'dados_educacionais_basicos_microdados',
  ),
};

// esperado[referencia|dims|ano] = { itens, ignorados, arquivos }
const esperado = new Map();
let arquivosTotal = 0;

function contarArquivo(caminho, referencia) {
  let json;
  try {
    json = JSON.parse(readFileSync(caminho, 'utf-8'));
  } catch {
    console.log(`JSON inválido: ${caminho}`);
    return;
  }
  const dims = String(json.meta?.dims ?? '')
    .split(',')
    .map((d) => d.trim())
    .filter(Boolean);
  if (dims.length === 0 || dims.length > 2) return;
  const dimsStr = [...dims].sort().join('_');

  for (const item of json.result ?? []) {
    const ano = Number(item.year);
    const total = Number(item.total);
    const chave = `${referencia}|${dimsStr}|${ano}`;
    if (!esperado.has(chave)) esperado.set(chave, { itens: 0, ignorados: 0 });
    const g = esperado.get(chave);
    if (!Number.isFinite(ano) || !Number.isFinite(total)) {
      g.ignorados++;
      continue;
    }
    // item só entra se toda dim tiver id numérico OU nome não vazio
    const ok = dims.every((d) => {
      const id = item[`${d}_id`];
      const temId = id !== undefined && id !== null && Number.isFinite(Number(id));
      const nome = String(item[`${d}_name`] ?? '').trim();
      return temId || nome;
    });
    ok ? g.itens++ : g.ignorados++;
  }
}

for (const rootKey of ['1d', '2d']) {
  const root = ROOTS[rootKey];
  for (const categoria of readdirSync(root)) {
    const catPath = path.join(root, categoria);
    if (!statSync(catPath).isDirectory() || categoria.startsWith('.') || categoria.startsWith('_'))
      continue;
    const pastasAno = [];
    for (const filho of readdirSync(catPath)) {
      const p = path.join(catPath, filho);
      if (!statSync(p).isDirectory()) continue;
      if (/^\d{4}$/.test(filho)) pastasAno.push({ era: null, caminho: p });
      else if (filho === 'classico' || filho === 'moderno') {
        for (const anoDir of readdirSync(p)) {
          if (/^\d{4}$/.test(anoDir)) pastasAno.push({ era: filho, caminho: path.join(p, anoDir) });
        }
      }
    }
    for (const { era, caminho } of pastasAno) {
      const referencia = era ? `${categoria}/${era}` : categoria;
      for (const dimDir of readdirSync(caminho)) {
        const dimPath = path.join(caminho, dimDir);
        if (!statSync(dimPath).isDirectory()) continue;
        for (const arq of readdirSync(dimPath)) {
          if (!arq.endsWith('.json')) continue;
          contarArquivo(path.join(dimPath, arq), referencia);
          arquivosTotal++;
          if (arquivosTotal % 20000 === 0) console.log(`  ...${arquivosTotal} arquivos lidos`);
        }
      }
    }
  }
}
console.log(`Arquivos lidos: ${arquivosTotal} | grupos esperados: ${esperado.size}`);

const prisma = new PrismaClient();
const rows = await prisma.$queryRaw`
  SELECT referencia, dims, ano, COUNT(*)::int AS n
  FROM "FatoEducacao"
  GROUP BY referencia, dims, ano
`;
await prisma.$disconnect();

const banco = new Map(rows.map((r) => [`${r.referencia}|${r.dims}|${r.ano}`, r.n]));
console.log(`Grupos no banco: ${banco.size}`);

let faltando = 0,
  divergentes = 0,
  sobrando = 0,
  okGrupos = 0,
  itensEsperados = 0,
  itensBanco = 0;

const problemas = [];
for (const [chave, g] of esperado) {
  itensEsperados += g.itens;
  const n = banco.get(chave);
  if (n === undefined) {
    if (g.itens > 0) {
      faltando++;
      problemas.push(`AUSENTE NO BANCO  ${chave}  esperado=${g.itens}`);
    }
    continue;
  }
  itensBanco += n;
  if (n !== g.itens) {
    divergentes++;
    problemas.push(
      `CONTAGEM DIFERE   ${chave}  esperado=${g.itens} banco=${n} (ignorados no parse: ${g.ignorados})`,
    );
  } else okGrupos++;
}
for (const chave of banco.keys()) {
  if (!esperado.has(chave)) {
    sobrando++;
    problemas.push(`SÓ NO BANCO       ${chave}  banco=${banco.get(chave)}`);
  }
}

console.log(`\n===== RESUMO =====`);
console.log(`Grupos OK:               ${okGrupos}`);
console.log(`Grupos ausentes no banco: ${faltando}`);
console.log(`Grupos com contagem !=:   ${divergentes}`);
console.log(`Grupos só no banco:       ${sobrando}`);
console.log(`Itens esperados (válidos): ${itensEsperados}`);
console.log(`Fatos no banco (grupos comuns): ${itensBanco}`);
if (problemas.length) {
  console.log(`\nProblemas (${problemas.length}):`);
  for (const p of problemas.slice(0, 60)) console.log('  ' + p);
  if (problemas.length > 60) console.log(`  ... +${problemas.length - 60}`);
}
