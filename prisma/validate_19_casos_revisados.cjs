/* Read-only verification: recompute Table 8 from values now stored in the DB
   and compare against valorTabela8Validado (the PDF-based figure we chose to
   apply for these 19 cases), not valorCorretoRelatorio (the official report
   value, which these cases are known to diverge from by design). */
const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');
function arg(name) { const i = process.argv.indexOf(`--${name}`); return i >= 0 ? process.argv[i + 1] : undefined; }
function loadEnv(file) { for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) { const m = line.match(/^\s*DATABASE_URL\s*=\s*(.*?)\s*$/); if (m) process.env.DATABASE_URL = m[1].replace(/^"|"$/g, ''); } }
function same(a, b) { return Number.isFinite(a) && Number.isFinite(b) && Math.abs(a - b) < 0.011; }
const delegates = { RelatorioMunicipal1314: 'relatorioMunicipal1314', RelatorioMunicipal1516: 'relatorioMunicipal1516', RelatorioMunicipal1718: 'relatorioMunicipal1718', RelatorioMunicipal1920: 'relatorioMunicipal1920' };
async function main() {
  const payloadFile = arg('payload'), envFile = arg('env'), reportFile = arg('report');
  if (!payloadFile || !envFile || !reportFile) throw new Error('Use --payload, --env e --report.');
  loadEnv(envFile); const payload = JSON.parse(fs.readFileSync(payloadFile, 'utf8')); const prisma = new PrismaClient(); const results = [];
  try {
    for (const doc of payload.documentos.filter((x) => x.aplicacaoAutomatica)) {
      const code = doc.localizarRelatorioPor.codigoMunicipio.slice(0, -1);
      const report = await prisma[delegates[doc.modeloRelatorio]].findFirst({ where: { ano: doc.localizarRelatorioPor.ano, codigoMunicipio: code }, select: { id: true } });
      if (!report) { results.push({ fonte: doc.fonte, status: 'RELATORIO_AUSENTE' }); continue; }
      const byCode = Object.fromEntries(doc.atualizacoes.map((x) => [x.codigoLinhaRreo, x]));
      const expenseChange = byCode['13']; const d16 = byCode['16.1']; const d17 = byCode['17.1'];
      const expense = await prisma[expenseChange.delegatePrisma].findFirst({ where: { relatorioMunicialId: report.id, tipo: expenseChange.tipoEnum } });
      const deduction16 = await prisma[d16.delegatePrisma].findFirst({ where: { relatorioMunicialId: report.id, tipo: d16.tipoEnum } });
      const deduction17 = await prisma[d17.delegatePrisma].findFirst({ where: { relatorioMunicialId: report.id, tipo: d17.tipoEnum } });
      if (!expense || !deduction16 || !deduction17) { results.push({ fonte: doc.fonte, status: 'LINHA_AUSENTE' }); continue; }
      const calculated = expense.despesasLiquidadasAteBimestre - deduction16.valor - deduction17.valor;
      const expectedPdf = doc.valorTabela8Validado;
      results.push({
        fonte: doc.fonte, ano: doc.localizarRelatorioPor.ano, codigoMunicipio: code,
        calculadoNoBanco: calculated, valorTabela8Validado: expectedPdf, valorCorretoRelatorio: doc.valorCorretoRelatorio,
        status: same(calculated, expectedPdf) ? 'OK' : 'DIVERGENTE',
      });
    }
  } finally { await prisma.$disconnect(); }
  const summary = { documentosAutomaticos: results.length, ok: results.filter((x) => x.status === 'OK').length, divergentes: results.filter((x) => x.status === 'DIVERGENTE').length, ausentes: results.filter((x) => x.status !== 'OK' && x.status !== 'DIVERGENTE').length };
  const output = { geradoEm: new Date().toISOString(), modo: 'SOMENTE_LEITURA', comparacao: 'valorTabela8Validado (valor do PDF, nao do relatorio oficial)', resumo: summary, documentos: results };
  fs.mkdirSync(path.dirname(reportFile), { recursive: true }); fs.writeFileSync(reportFile, JSON.stringify(output, null, 2), 'utf8'); console.log(JSON.stringify(summary, null, 2)); if (summary.divergentes || summary.ausentes) process.exitCode = 1;
}
main().catch((e) => { console.error(e.stack || e.message); process.exitCode = 1; });
