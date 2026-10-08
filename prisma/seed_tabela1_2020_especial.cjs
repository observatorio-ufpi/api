/* Tabela 1 (Impostos Próprios) - correção dos 3 casos recorrentes de 2020
   (Nazaré do Piauí, Novo Oriente do Piauí, Porto) usando os valores do
   Tabelão corrigido (TABELAS MUNIC PARA CORREÇÃO ANDERSON 19jun26, aba T1,
   linhas marcadas em marrom). O RREO dessas 3 prefeituras em 2020 preencheu
   a tabela com a receita realizada na coluna errada; aqui só corrigimos
   receitasRealizadaAteBimestre, sem tocar em previsão inicial/atualizada
   (que não fazem parte do erro reportado). Default: dry-run. */
const fs = require('fs');
const path = require('path');
function arg(name) { const i = process.argv.indexOf(`--${name}`); return i >= 0 ? process.argv[i + 1] : undefined; }
function loadEnv(file) {
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*DATABASE_URL\s*=\s*(.*?)\s*$/);
    if (m) process.env.DATABASE_URL = m[1].replace(/^"|"$/g, '');
  }
}
const CASOS = [
  { municipio: 'Nazaré do Piauí', codigoMunicipio: '220670', valores: { IPTU_RECEITA_RESULTANTE: 2500, ITBI_RECEITA_RESULTANTE: 2500, ISS_RECEITA_RESULTANTE: 173068.69, IRRF_RECEITA_RESULTANTE: 191382.37, RECEITA_DE_IMPOSTOS: 369451.06 } },
  { municipio: 'Novo Oriente do Piauí', codigoMunicipio: '220690', valores: { IPTU_RECEITA_RESULTANTE: 3174.57, ITBI_RECEITA_RESULTANTE: 216.52, ISS_RECEITA_RESULTANTE: 359341.59, IRRF_RECEITA_RESULTANTE: 284674.24, RECEITA_DE_IMPOSTOS: 647406.92 } },
  { municipio: 'Porto', codigoMunicipio: '220850', valores: { IPTU_RECEITA_RESULTANTE: 13124.96, ITBI_RECEITA_RESULTANTE: 20087.05, ISS_RECEITA_RESULTANTE: 161234.45, IRRF_RECEITA_RESULTANTE: 988097.70, RECEITA_DE_IMPOSTOS: 1182544.16 } },
];

async function main() {
  const envFile = arg('env'); const reportFile = arg('report'); const apply = process.argv.includes('--apply');
  if (!envFile || !reportFile) throw new Error('Use --env e --report.');
  loadEnv(envFile);
  const { PrismaClient } = require('@prisma/client');
  const prisma = new PrismaClient();
  const plano = []; const erros = [];
  try {
    for (const caso of CASOS) {
      const relatorio = await prisma.relatorioMunicipal1920.findFirst({ where: { ano: '2020', codigoMunicipio: caso.codigoMunicipio }, select: { id: true } });
      if (!relatorio) { erros.push({ municipio: caso.municipio, mensagem: 'RELATORIO_NAO_ENCONTRADO' }); continue; }
      for (const [tipo, valorCorreto] of Object.entries(caso.valores)) {
        const existente = await prisma.receita1920.findFirst({ where: { relatorioMunicialId: relatorio.id, tipo } });
        if (!existente) { erros.push({ municipio: caso.municipio, tipo, mensagem: 'LINHA_AUSENTE' }); continue; }
        plano.push({ municipio: caso.municipio, relatorioId: relatorio.id, tipo, antes: existente.receitasRealizadaAteBimestre, depois: valorCorreto, id: existente.id });
      }
    }
    if (apply && plano.length) {
      await prisma.$transaction(plano.map((item) => prisma.receita1920.update({ where: { id: item.id }, data: { receitasRealizadaAteBimestre: item.depois } })));
    }
  } finally { await prisma.$disconnect(); }
  const resultado = { geradoEm: new Date().toISOString(), modo: apply ? 'APLICADO' : 'DRY_RUN', fonte: 'Tabelão corrigido (aba T1, linhas marrom) - 3 casos recorrentes 2020', operacoes: plano.length, erros, plano };
  fs.mkdirSync(path.dirname(reportFile), { recursive: true });
  fs.writeFileSync(reportFile, JSON.stringify(resultado, null, 2), 'utf8');
  console.log(JSON.stringify({ modo: resultado.modo, operacoes: plano.length, erros: erros.length }, null, 2));
  if (erros.length) process.exitCode = 1;
}
main().catch((e) => { console.error(e.stack || e.message); process.exitCode = 1; });
