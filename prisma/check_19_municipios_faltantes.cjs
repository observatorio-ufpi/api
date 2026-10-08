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

const casos = [
  { municipio: 'Arraial', codigo: '220100', ano: '2007', modelo: 'relatorioMunicipal06' },
  { municipio: 'Belém do Piauí', codigo: '220157', ano: '2007', modelo: 'relatorioMunicipal06' },
  { municipio: 'Murici dos Portelas', codigo: '220669', ano: '2023', modelo: 'relatorioMunicipal23' },
  { municipio: 'Queimada Nova', codigo: '220865', ano: '2023', modelo: 'relatorioMunicipal23' },
  { municipio: 'São João da Varjota', codigo: '220995', ano: '2023', modelo: 'relatorioMunicipal23' },
  { municipio: 'Acauã', codigo: '220005', ano: '2024', modelo: 'relatorioMunicipal23' },
  { municipio: 'Antônio Almeida', codigo: '220080', ano: '2024', modelo: 'relatorioMunicipal23' },
  { municipio: 'Bom Princípio do Piauí', codigo: '220191', ano: '2024', modelo: 'relatorioMunicipal23' },
  { municipio: 'Caraúbas do Piauí', codigo: '220253', ano: '2024', modelo: 'relatorioMunicipal23' },
  { municipio: 'Caxingó', codigo: '220265', ano: '2024', modelo: 'relatorioMunicipal23' },
  { municipio: 'João Costa', codigo: '220535', ano: '2024', modelo: 'relatorioMunicipal23' },
  { municipio: 'Madeiro', codigo: '220585', ano: '2024', modelo: 'relatorioMunicipal23' },
  { municipio: 'Matias Olímpio', codigo: '220610', ano: '2024', modelo: 'relatorioMunicipal23' },
  { municipio: "Olho D'Água do Piauí", codigo: '220710', ano: '2024', modelo: 'relatorioMunicipal23' },
  { municipio: 'Parnaguá', codigo: '220760', ano: '2024', modelo: 'relatorioMunicipal23' },
  { municipio: 'Patos do Piauí', codigo: '220777', ano: '2024', modelo: 'relatorioMunicipal23' },
  { municipio: "Pau D'Arco do Piauí", codigo: '220779', ano: '2024', modelo: 'relatorioMunicipal23' },
  { municipio: 'Santa Luz', codigo: '220930', ano: '2024', modelo: 'relatorioMunicipal23' },
  { municipio: 'São Francisco do Piauí', codigo: '220970', ano: '2024', modelo: 'relatorioMunicipal23' },
];

async function main() {
  for (const c of casos) {
    const rs = await prisma[c.modelo].findMany({ where: { ano: c.ano, codigoMunicipio: c.codigo } });
    console.log(c.municipio.padEnd(25), c.ano, c.modelo.padEnd(22), rs.length === 0 ? 'AUSENTE (confirma faltando)' : `JA EXISTE (${rs.length} registro(s), id(s): ${rs.map(r=>r.id).join(',')})`);
  }
  await prisma.$disconnect();
}
main().catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
