/* Tabela 4 (Receitas Adicionais da Educação) - Parnaíba 2009: o total não
   tinha linha no banco (RREO mostrou traço em vez de valor). Cria a linha
   com o valor do Tabelão corrigido (aba T4, fundo azul), consistente com os
   componentes já existentes (Salário Educação 539.869,95 + Outras
   Transferências FNDE 1.201.471,26 = 1.741.341,21). Default: dry-run. */
const fs = require('fs');
const path = require('path');
function arg(name) { const i = process.argv.indexOf(`--${name}`); return i >= 0 ? process.argv[i + 1] : undefined; }
function loadEnv(file) {
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*DATABASE_URL\s*=\s*(.*?)\s*$/);
    if (m) process.env.DATABASE_URL = m[1].replace(/^"|"$/g, '');
  }
}

async function main() {
  const envFile = arg('env'); const reportFile = arg('report'); const apply = process.argv.includes('--apply');
  if (!envFile || !reportFile) throw new Error('Use --env e --report.');
  loadEnv(envFile);
  const { PrismaClient } = require('@prisma/client');
  const prisma = new PrismaClient();
  const plano = []; const erros = [];
  try {
    // findMany, não findFirst: havia 2 registros duplicados de RelatorioMunicipal0912
    // para Parnaíba/2009 (ids 61 e 460, mesmos dados) — corrige todos os que existirem.
    const relatorios = await prisma.relatorioMunicipal0912.findMany({ where: { ano: '2009', codigoMunicipio: '220770' }, select: { id: true } });
    if (!relatorios.length) { erros.push({ mensagem: 'RELATORIO_NAO_ENCONTRADO' }); }
    for (const relatorio of relatorios) {
      const existente = await prisma.receita0912.findFirst({ where: { relatorioMunicialId: relatorio.id, tipo: 'TOTAL_RECEITAS_ADICIONAIS_FINANCIAMENTO_ENSINO' } });
      const dados = { previsaoInicial: 0, previsaoAtualizada: 1914000, receitasRealizadaBimestre: 0, receitasRealizadaAteBimestre: 1741341.21, percentual: 0 };
      plano.push({ municipio: 'Parnaíba', ano: '2009', relatorioId: relatorio.id, tipo: 'TOTAL_RECEITAS_ADICIONAIS_FINANCIAMENTO_ENSINO', operacao: existente ? 'update' : 'create', dados });
      if (apply) {
        await prisma.receita0912.upsert({
          where: { relatorioMunicialId_tipo: { relatorioMunicialId: relatorio.id, tipo: 'TOTAL_RECEITAS_ADICIONAIS_FINANCIAMENTO_ENSINO' } },
          update: dados,
          create: { ...dados, relatorioMunicialId: relatorio.id, tipo: 'TOTAL_RECEITAS_ADICIONAIS_FINANCIAMENTO_ENSINO' },
        });
      }
    }
  } finally { await prisma.$disconnect(); }
  const resultado = { geradoEm: new Date().toISOString(), modo: apply ? 'APLICADO' : 'DRY_RUN', fonte: 'Tabelão corrigido (aba T4, fundo azul) - Parnaíba 2009', operacoes: plano.length, erros, plano };
  fs.mkdirSync(path.dirname(reportFile), { recursive: true });
  fs.writeFileSync(reportFile, JSON.stringify(resultado, null, 2), 'utf8');
  console.log(JSON.stringify({ modo: resultado.modo, operacoes: plano.length, erros: erros.length }, null, 2));
  if (erros.length) process.exitCode = 1;
}
main().catch((e) => { console.error(e.stack || e.message); process.exitCode = 1; });
