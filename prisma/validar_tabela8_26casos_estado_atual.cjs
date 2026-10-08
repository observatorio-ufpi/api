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

const casos = require('C:/Users/ACER/AppData/Local/Temp/claude/c--Users-ACER-Documents-observatorio/cd94d764-2611-4952-907c-919c05feaf28/scratchpad/tabela8_26casos_full.json');

function modeloPorAno(ano) {
  const a = parseInt(ano, 10);
  if (a <= 2006) return { despesa: 'despesa06', deducoes: null };
  if (a <= 2008) return { despesa: 'despesa0708', deducoes: 'deducoesFinsLimiteFundeb0708' };
  if (a <= 2012) return { despesa: 'despesa0912', deducoes: 'deducoesFinsLimiteFundeb0912' };
  if (a <= 2014) return { despesa: 'despesa1314', deducoes: 'deducoesFinsLimiteFundeb1314' };
  if (a <= 2016) return { despesa: 'despesa1516', deducoes: 'deducoesFinsLimiteFundeb1516' };
  if (a <= 2018) return { despesa: 'despesa1718', deducoes: 'deducoesFinsLimiteFundeb1718' };
  if (a <= 2020) return { despesa: 'despesa1920', deducoes: 'deducoesFinsLimiteFundeb1920' };
  return { despesa: 'despesa21', deducoes: 'deducoesFinsLimiteFundeb21' };
}

async function main() {
  let okCount = 0, mismatch = 0;
  for (const c of casos) {
    const { despesa, deducoes } = modeloPorAno(c.ano);
    const linhas = [];
    for (const op of c.ops) {
      const delegate = op.linha === '13' ? despesa : deducoes;
      const row = await prisma[delegate].findFirst({ where: { relatorioMunicialId: c.relatorioId, tipo: op.tipo } });
      const dbVal = row ? (row.despesasLiquidadasAteBimestre !== undefined && op.linha === '13' ? row.despesasLiquidadasAteBimestre : row.valor) : undefined;
      const bate = row && Math.abs(dbVal - op.valor) < 0.01;
      linhas.push({ linha: op.linha, tipo: op.tipo, esperado: op.valor, banco: dbVal, bate });
      if (bate) okCount++; else mismatch++;
    }
    const todosOk = linhas.every(l => l.bate);
    console.log(`${c.codigo} ${c.ano} relatorioId=${c.relatorioId} -> ${todosOk ? 'OK' : 'DIVERGENTE'}`);
    if (!todosOk) console.log('   ', JSON.stringify(linhas));
  }
  console.log(`\nResumo: ${okCount} campos OK, ${mismatch} divergentes`);
  await prisma.$disconnect();
}
main().catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
