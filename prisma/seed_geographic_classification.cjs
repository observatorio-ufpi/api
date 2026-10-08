/* Correct geographic reference metadata listed in the 14 May 2026 report. Default: dry-run. */
const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

const CORRECTIONS = [
  ['2202653', 'Caxingó', 'PLANICIE_LITORANEA', '2', '1ª', 5496, 'DE_5001_A_10000_HABITANTES'],
  ['2202711', 'Cocal de Telha', 'CARNAUBAIS', '5', '5ª', 4911, 'MENOS_DE_5000_HABITANTES'],
  ['2203008', 'Cristalândia do Piauí', 'CHAPADA_DAS_MANGABEIRAS', '28', '15ª', 7356, 'DE_5001_A_10000_HABITANTES'],
  ['2203230', 'Currais', 'CHAPADA_DAS_MANGABEIRAS', '26', '14ª', 4854, 'MENOS_DE_5000_HABITANTES'],
  ['2205151', 'Jacobina do Piauí', 'CHAPADA_VALE_DO_RIO_ITAIM', '14', '17ª', 5613, 'DE_5001_A_10000_HABITANTES'],
  ['2205201', 'Jaicós', 'CHAPADA_VALE_DO_RIO_ITAIM', '13', '9ª', 17527, 'DE_10001_A_20000_HABITANTES'],
  ['2205250', 'Jardim do Mulato', 'ENTRE_RIOS', '9', '6ª', 4180, 'MENOS_DE_5000_HABITANTES'],
  ['2205276', 'Jatobá do Piauí', 'CARNAUBAIS', '5', '5ª', 4494, 'MENOS_DE_5000_HABITANTES'],
  ['2205300', 'Jerumenha', 'TABULEIROS_DO_ALTO_PARNAIBA', '24', '10ª', 4497, 'MENOS_DE_5000_HABITANTES'],
  ['2205573', 'Lagoa de São Francisco', 'COCAIS', '4', '3ª', 6331, 'DE_5001_A_10000_HABITANTES'],
  ['2205565', 'Lagoa do Barro do Piauí', 'SERRA_DA_CAPIVARA', '18', '12ª', 4995, 'MENOS_DE_5000_HABITANTES'],
  ['2205581', 'Lagoa do Piauí', 'ENTRE_RIOS', '8', '18ª', 4810, 'MENOS_DE_5000_HABITANTES'],
].map(([codigoIbge, nomeMunicipio, territorioDeDesenvolvimentoMunicipio, aglomeradoMunicipio, gerenciaRegionalMunicipio, populacaoMunicipio, faixaPopulacionalMunicipio]) => ({
  codigoIbge, codigoMunicipio: codigoIbge.slice(0, -1), nomeMunicipio, territorioDeDesenvolvimentoMunicipio, aglomeradoMunicipio, gerenciaRegionalMunicipio, populacaoMunicipio, faixaPopulacionalMunicipio,
}));
const DELEGATES = ['relatorioMunicipal06', 'relatorioMunicipal0708', 'relatorioMunicipal0912', 'relatorioMunicipal1314', 'relatorioMunicipal1516', 'relatorioMunicipal1718', 'relatorioMunicipal1920', 'relatorioMunicipal21', 'relatorioMunicipal23'];
const FIELDS = ['territorioDeDesenvolvimentoMunicipio', 'aglomeradoMunicipio', 'gerenciaRegionalMunicipio', 'populacaoMunicipio', 'faixaPopulacionalMunicipio'];

function arg(name) { const i = process.argv.indexOf(`--${name}`); return i >= 0 ? process.argv[i + 1] : undefined; }
function loadEnv(file) {
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*DATABASE_URL\s*=\s*(.*?)\s*$/);
    if (m) process.env.DATABASE_URL = m[1].replace(/^"|"$/g, '');
  }
}
function different(row, expected) { return FIELDS.some((field) => row[field] !== expected[field]); }

async function main() {
  const env = arg('env'); const report = arg('report'); const apply = process.argv.includes('--apply');
  if (!env || !report) throw new Error('Use --env e --report.');
  loadEnv(env);
  const prisma = new PrismaClient();
  const plan = []; const found = []; const missing = [];
  try {
    for (const delegate of DELEGATES) {
      for (const expected of CORRECTIONS) {
        const rows = await prisma[delegate].findMany({
          where: { codigoMunicipio: expected.codigoMunicipio },
          select: { id: true, ano: true, codigoMunicipio: true, nomeMunicipio: true, territorioDeDesenvolvimentoMunicipio: true, aglomeradoMunicipio: true, gerenciaRegionalMunicipio: true, populacaoMunicipio: true, faixaPopulacionalMunicipio: true },
        });
        if (!rows.length) missing.push({ delegate, codigoIbge: expected.codigoIbge, municipio: expected.nomeMunicipio });
        for (const row of rows) {
          found.push({ delegate, id: row.id, ano: row.ano, codigoMunicipio: row.codigoMunicipio, municipioBanco: row.nomeMunicipio, municipioReferencia: expected.nomeMunicipio });
          if (different(row, expected)) plan.push({ delegate, id: row.id, ano: row.ano, codigoMunicipio: row.codigoMunicipio, municipio: expected.nomeMunicipio, antes: Object.fromEntries(FIELDS.map((f) => [f, row[f]])), depois: Object.fromEntries(FIELDS.map((f) => [f, expected[f]])) });
        }
      }
    }
    if (apply && plan.length) await prisma.$transaction(plan.map((item) => prisma[item.delegate].update({ where: { id: item.id }, data: item.depois })));
  } finally { await prisma.$disconnect(); }
  const output = { geradoEm: new Date().toISOString(), modo: apply ? 'APLICADO' : 'DRY_RUN', municipiosReferencia: CORRECTIONS.length, registrosEncontrados: found.length, registrosSemCorrespondencia: missing.length, registrosParaAtualizar: plan.length, registrosJaCorretos: found.length - plan.length, ausentes: missing, plano: plan };
  fs.mkdirSync(path.dirname(report), { recursive: true }); fs.writeFileSync(report, JSON.stringify(output, null, 2), 'utf8');
  console.log(JSON.stringify({ modo: output.modo, encontrados: output.registrosEncontrados, paraAtualizar: output.registrosParaAtualizar, jaCorretos: output.registrosJaCorretos, semCorrespondencia: output.registrosSemCorrespondencia }, null, 2));
}
main().catch((error) => { console.error(error.stack || error.message); process.exitCode = 1; });
