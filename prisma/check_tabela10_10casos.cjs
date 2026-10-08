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

const codigos = {
  Altos: '220040',
  Barras: '220120',
  'Parnaíba': '220770',
  Teresina: '221100',
  Piripiri: '220840',
  'União': '221110',
};

const casos = [
  { municipio: 'Altos', ano: '2023', destFundeb: 9726092.42 },
  { municipio: 'Barras', ano: '2023', destFundeb: 9359016.84 },
  { municipio: 'Parnaíba', ano: '2023', destFundeb: 41847384.77 },
  { municipio: 'Teresina', ano: '2023', destFundeb: 320679472.35 },
  { municipio: 'Altos', ano: '2024', destFundeb: 11504605.38 },
  { municipio: 'Barras', ano: '2024', destFundeb: 10959854.76 },
  { municipio: 'Parnaíba', ano: '2024', destFundeb: 45689692.86 },
  { municipio: 'Piripiri', ano: '2024', destFundeb: 14865543.33 },
  { municipio: 'Teresina', ano: '2024', destFundeb: 348426105.02 },
  { municipio: 'União', ano: '2024', destFundeb: 13749177.36 },
];

async function main() {
  for (const c of casos) {
    const codigo = codigos[c.municipio];
    const rs = await prisma.relatorioMunicipal23.findMany({ where: { ano: c.ano, codigoMunicipio: codigo } });
    if (rs.length === 0) { console.log(c.municipio, c.ano, codigo, 'SEM RELATORIO'); continue; }
    for (const r of rs) {
      const row = await prisma.receita23.findFirst({ where: { relatorioMunicialId: r.id, tipo: 'TOTAL_DESTINADO_AO_FUNDEB' } });
      const dbVal = row ? row.receitasRealizadasAteBimestre : 'AUSENTE';
      const bate = row && Math.abs(row.receitasRealizadasAteBimestre - c.destFundeb) < 0.01;
      console.log(c.municipio, c.ano, 'relatorioId=', r.id, 'DB=', dbVal, 'Tabelão=', c.destFundeb, 'bate?', bate);
    }
  }
  await prisma.$disconnect();
}
main().catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
