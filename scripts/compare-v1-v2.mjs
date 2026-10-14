/**
 * Comparador de dados: API v1 × API v2 × datasets locais × simcaq (fonte da verdade).
 *
 * Uso:
 *   node scripts/compare-v1-v2.mjs            # fases locais (v1 × v2 × dataset)
 *   node scripts/compare-v1-v2.mjs --simcaq   # inclui consultas à API do LDE/simcaq
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const V1 = 'http://localhost:3003/basicEducation';
const V2 = 'http://localhost:3003/v2/educacao';
const SIMCAQ = 'https://simcaq.c3sl.ufpr.br/api/v1';
const DATASETS_ROOT = '/home/marcos/projects/personal/observatorio-ufpi/datasets';
const AGREGADOS = join(DATASETS_ROOT, 'dados_educacionais_basicos');
const MICRODADOS = join(
  DATASETS_ROOT,
  'dados_educacionais_basicos_microdados (2)',
  'dados_educacionais_basicos_microdados',
);

const COM_SIMCAQ = process.argv.includes('--simcaq');

// v1 endpoint ↔ v2 indicador ↔ pasta do dataset
const INDICADORES = {
  escolas: { v1: 'school/count', dataset: 'escolas' },
  matriculas: { v1: 'enrollment', dataset: 'matriculas' },
  turmas: { v1: 'class', dataset: 'turmas' },
  docentes: { v1: 'teacher', dataset: 'docentes' },
  funcionarios: { v1: 'employees', dataset: 'funcionarios' },
  auxiliares: { v1: null, dataset: 'auxiliares' }, // v1 não expõe auxiliares
};

const ANOS = [2008, 2013, 2019, 2021, 2023];
const CIDADES = [
  { id: '2211001', nome: 'Teresina' },
  { id: '2200053', nome: 'Acauã' },
];

// Dimensões que a v1 (front) realmente usa + total
const DIMS_V1 = ['', 'location', 'adm_dependency_detailed', 'education_level_mod'];
// Dimensões extras só para v2 × dataset × simcaq (a v1 não suporta)
const DIMS_EXTRA = { matriculas: ['gender', 'ethnic_group'], auxiliares: ['location', 'gender'] };
// Cruzamentos 2D para v2 × microdados × simcaq
const CASOS_2D = [
  { ind: 'matriculas', dims: ['location', 'gender'] },
  { ind: 'turmas', dims: ['adm_dependency_detailed', 'location'] },
  { ind: 'escolas', dims: ['adm_dependency_detailed', 'location'] },
];

const norm = (s) =>
  String(s ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();

async function jfetch(url) {
  try {
    const r = await fetch(url, { signal: AbortSignal.timeout(30000) });
    if (!r.ok) return { erro: `HTTP ${r.status}` };
    return await r.json();
  } catch (e) {
    return { erro: e.message };
  }
}

// ---------- extratores: devolvem Map<categoria, total> ou null ----------
function mapaV1(json, dim) {
  if (!json || json.erro || !Array.isArray(json.result)) return null;
  if (!json.result.length) return null;
  const m = new Map();
  for (const row of json.result) {
    const chave = dim ? row[`${dim}_name`] : 'Total';
    if (dim && chave === undefined) return { mislabeled: true }; // v1 devolveu outra dimensão
    m.set(norm(chave), (m.get(norm(chave)) ?? 0) + Number(row.total));
  }
  return m;
}

function mapaV2(json) {
  if (!json || json.erro) return null;
  const dados = json.segmentos ? json.segmentos.flatMap((s) => s.dados) : json.dados;
  if (!dados || !dados.length) return null;
  const m = new Map();
  for (const row of dados) {
    const partes = [row.dim1?.valor ?? 'Total'];
    if (row.dim2) partes.push(row.dim2.valor);
    const chave = norm(partes.join(' | '));
    m.set(chave, (m.get(chave) ?? 0) + Number(row.total));
  }
  return m;
}

function mapaDataset(json, dims) {
  if (!json || !Array.isArray(json.result) || !json.result.length) return null;
  const m = new Map();
  for (const row of json.result) {
    const partes = dims.length ? dims.map((d) => row[`${d}_name`]) : ['Total'];
    const chave = norm(partes.join(' | '));
    m.set(chave, (m.get(chave) ?? 0) + Number(row.total));
  }
  return m;
}

// ---------- dataset no disco ----------
function lerDatasetLocal(pastaInd, ano, dimFolder, cityId, micro = false) {
  const root = micro ? MICRODADOS : AGREGADOS;
  const candidatos = [
    join(root, pastaInd, String(ano), dimFolder),
    join(root, pastaInd, 'classico', String(ano), dimFolder),
    join(root, pastaInd, 'moderno', String(ano), dimFolder),
  ];
  for (const dir of candidatos) {
    if (!existsSync(dir)) continue;
    const arq = readdirSync(dir).find((f) => f.startsWith(cityId + '_'));
    if (arq) return JSON.parse(readFileSync(join(dir, arq), 'utf8'));
  }
  return null;
}

// ---------- catálogo v2: resolve recorte por conjunto de dims ----------
const catalogos = {};
async function recorteV2(ind, dims) {
  if (!catalogos[ind]) catalogos[ind] = await jfetch(`${V2}/catalogo?indicador=${ind}`);
  const cat = catalogos[ind];
  if (!cat?.recortes) return null;
  if (!dims.length) return cat.recortes.find((r) => r.recorte === 'total');
  const alvo = new Set(dims);
  return cat.recortes.find(
    (r) =>
      r.dimensoes.length === dims.length &&
      r.dimensoes.every((d) => alvo.has(d.nome)),
  );
}

// ---------- comparação ----------
function comparar(mapas) {
  // mapas: {origem: Map|null|{mislabeled}}
  const presentes = Object.entries(mapas).filter(
    ([, m]) => m instanceof Map,
  );
  if (presentes.length < 2) return { status: 'INSUFICIENTE', detalhes: [] };
  const [ref, mapaRef] = presentes[0];
  const detalhes = [];
  let ok = true;
  for (const [nome, m] of presentes.slice(1)) {
    const chaves = new Set([...mapaRef.keys(), ...m.keys()]);
    for (const k of chaves) {
      const a = mapaRef.get(k);
      const b = m.get(k);
      if (a === undefined || b === undefined || Math.abs(a - b) > 0.001) {
        ok = false;
        detalhes.push(`  [${ref}=${a ?? '—'} × ${nome}=${b ?? '—'}] ${k}`);
      }
    }
  }
  return { status: ok ? 'OK' : 'DIVERGE', detalhes };
}

const soma = (m) => (m instanceof Map ? [...m.values()].reduce((a, b) => a + b, 0) : null);

let casos = 0;
const falhas = [];
const lacunas = [];

async function rodarCaso({ ind, dims, ano, cidade, incluirV1 = true }) {
  const rotulo = `${ind} ${dims.length ? dims.join('×') : 'total'} ${ano} ${cidade.nome}`;
  const cfg = INDICADORES[ind];
  const mapas = {};

  // v2
  const rec = await recorteV2(ind, dims);
  if (!rec) {
    lacunas.push(`${rotulo}: recorte inexistente no catálogo v2`);
    return;
  }
  if (ano < rec.anoMin || ano > rec.anoMax) return; // fora do alcance declarado — nada a comparar
  const v2 = await jfetch(
    `${V2}/fatos?indicador=${ind}&recorte=${rec.recorte}&anoInicio=${ano}&anoFim=${ano}&localidades=${cidade.id}`,
  );
  mapas.v2 = mapaV2(v2);

  // v1 (só dims de 1 nível que o front usa)
  if (incluirV1 && cfg.v1 && dims.length <= 1 && DIMS_V1.includes(dims[0] ?? '')) {
    const filtro = `min_year:"${ano}",max_year:"${ano}",state:"22",city:"${cidade.id}"`;
    const url = `${V1}/${cfg.v1}?${dims.length ? `dims=${dims[0]}&` : ''}filter=${encodeURIComponent(filtro)}`;
    mapas.v1 = mapaV1(await jfetch(url), dims[0]);
    if (mapas.v1?.mislabeled) {
      lacunas.push(`${rotulo}: v1 devolveu outra dimensão (sem suporte real)`);
      delete mapas.v1;
    }
  }

  // dataset local
  if (dims.length) {
    const folder = dims.length === 2 ? null : dims[0];
    if (dims.length === 1) {
      const ds = lerDatasetLocal(cfg.dataset, ano, folder, cidade.id);
      mapas.dataset = mapaDataset(ds, dims);
    } else {
      // microdados testam as duas ordens A_X_B / B_X_A
      for (const [a, b] of [[dims[0], dims[1]], [dims[1], dims[0]]]) {
        const ds = lerDatasetLocal(cfg.dataset, ano, `${a}_X_${b}`, cidade.id, true);
        if (ds) {
          mapas.dataset = mapaDataset(ds, [a, b]);
          // reordena chaves do v2 se necessário (dim1|dim2 na mesma ordem do dataset)
          if (mapas.v2 && a !== rec.dimensoes[0]?.nome) {
            const re = new Map();
            for (const [k, v] of mapas.v2) {
              const [p1, p2] = k.split(' | ');
              re.set(`${p2} | ${p1}`, v);
            }
            mapas.v2 = re;
          }
          break;
        }
      }
    }
  }

  // simcaq (fonte da verdade)
  if (COM_SIMCAQ) {
    const dimsParam = dims.length ? `dims=${dims.join(',')}&` : '';
    const filtro = `state:"22",city:"${cidade.id}",min_year:"${ano}",max_year:"${ano}"`;
    const endpoint = cfg.v1 ?? 'auxiliar';
    const sq = await jfetch(
      `${SIMCAQ}/${endpoint}?${dimsParam}filter=${encodeURIComponent(filtro)}`,
    );
    mapas.simcaq = mapaDataset(sq, dims);
    await new Promise((r) => setTimeout(r, 400));
  }

  casos++;
  const { status, detalhes } = comparar(mapas);
  const somas = Object.entries(mapas)
    .map(([k, m]) => `${k}=${m instanceof Map ? soma(m) : '—'}`)
    .join(' ');
  const linha = `${status.padEnd(12)} ${rotulo.padEnd(55)} ${somas}`;
  console.log(linha);
  if (status !== 'OK') {
    falhas.push(linha);
    detalhes.slice(0, 8).forEach((d) => console.log(d));
  }
}

console.log('=== FASE 1: v1 × v2 × dataset (1D e total) ===');
for (const ind of Object.keys(INDICADORES)) {
  const dimsBase = [...DIMS_V1.map((d) => (d ? [d] : []))];
  for (const extra of DIMS_EXTRA[ind] ?? []) {
    if (!dimsBase.some((d) => d[0] === extra)) dimsBase.push([extra]);
  }
  for (const dims of dimsBase)
    for (const ano of ANOS)
      for (const cidade of CIDADES) await rodarCaso({ ind, dims, ano, cidade });
}

console.log('\n=== FASE 2: v2 × microdados (2D) ===');
for (const { ind, dims } of CASOS_2D)
  for (const ano of [2013, 2019, 2023])
    for (const cidade of CIDADES) await rodarCaso({ ind, dims, ano, cidade });

console.log(`\n=== RESUMO: ${casos} casos, ${falhas.length} divergências, ${lacunas.length} lacunas ===`);
if (falhas.length) {
  console.log('\nDivergências:');
  falhas.forEach((f) => console.log(' ' + f));
}
if (lacunas.length) {
  console.log('\nLacunas (sem comparação possível):');
  lacunas.forEach((l) => console.log(' ' + l));
}
