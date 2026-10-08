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
async function main() {
  for (const codigo of ['220670', '220667', '220680', '220675']) {
    const r = await prisma.relatorioMunicipal1718.findFirst({ where: { ano: '2017', codigoMunicipio: codigo } });
    if (!r) { console.log(codigo, 'SEM RELATORIO'); continue; }
    const rows = await prisma.receita1718.findMany({ where: { relatorioMunicialId: r.id, tipo: { in: ['IPTU_RECEITA_RESULTANTE', 'ITBI_RECEITA_RESULTANTE', 'ISS_RECEITA_RESULTANTE', 'IRRF_RECEITA_RESULTANTE', 'COTA_PARTE_ICMS'] } } });
    const byTipo = Object.fromEntries(rows.map(r => [r.tipo, r.receitasRealizadaAteBimestre]));
    console.log(codigo, r.nomeMunicipio, JSON.stringify(byTipo));
  }
  await prisma.$disconnect();
}
main().catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
