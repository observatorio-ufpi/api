const fs = require('fs');
const path = require('path');
function loadEnv(file) {
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*DATABASE_URL\s*=\s*(.*?)\s*$/);
    if (m) process.env.DATABASE_URL = m[1].replace(/^"|"$/g, '');
  }
}
loadEnv(path.join(__dirname, '..', '.env'));
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const FIRST_GROUP = [
  'COTA_PARTE_FPM_PARCELA_CF_ART_159_I_ALINEA_B',
  'COTA_PARTE_ICMS',
  'ICMS_DESONERACAO_LC_87_1996',
  'COTA_PARTE_IPI_EXPORTACAO',
  'COTA_PARTE_ITR',
  'COTA_PARTE_IPVA',
];
const SECOND_GROUP = [
  'COTA_PARTE_FPM_PARCELA_CF_ART_159_I_ALINEA_D',
  'COTA_PARTE_FPM_PARCELA_CF_ART_159_I_ALINEA_E',
  'COTA_PARTE_IOF_OURO',
  'IPTU_RECEITA_RESULTANTE',
  'ITBI_RECEITA_RESULTANTE',
  'ISS_RECEITA_RESULTANTE',
  'IRRF_RECEITA_RESULTANTE',
  'ITR_RECEITA_RESULTANTE',
];

async function main() {
  for (const codigo of ['220670', '220667', '220680', '220675']) {
    const r = await prisma.relatorioMunicipal1718.findFirst({ where: { ano: '2017', codigoMunicipio: codigo } });
    if (!r) { console.log(codigo, 'SEM RELATORIO'); continue; }
    const rows = await prisma.receita1718.findMany({ where: { relatorioMunicialId: r.id, tipo: { in: [...FIRST_GROUP, ...SECOND_GROUP] } } });
    const byTipo = Object.fromEntries(rows.map(x => [x.tipo, x.receitasRealizadaAteBimestre]));
    const firstGroupSum = FIRST_GROUP.reduce((s, t) => s + (byTipo[t] || 0), 0);
    const secondGroupSum = SECOND_GROUP.reduce((s, t) => s + (byTipo[t] || 0), 0);
    const recursosMDEForaFundeb = firstGroupSum * 0.05 + secondGroupSum * 0.25;
    console.log(codigo, r.nomeMunicipio, 'MDE_FORA_FUNDEB=', recursosMDEForaFundeb.toFixed(2));
    console.log('   raw=', JSON.stringify(byTipo));
  }
  await prisma.$disconnect();
}
main().catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
