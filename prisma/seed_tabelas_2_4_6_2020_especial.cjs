/* Tabelas 2, 4 e 6 - correção dos 3 casos recorrentes de 2020
   (Nazaré do Piauí, Novo Oriente do Piauí, Porto), mesmo bug de coluna
   deslocada confirmado na Tabela 1: receitasRealizadaAteBimestre guarda
   um percentual residual, e o valor real está em previsaoAtualizada.
   Valores vêm do Tabelão corrigido (TABELAS MUNIC PARA CORREÇÃO ANDERSON
   19jun26, abas T2/T4/T6, linhas marrom). Default: dry-run. */
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
  {
    municipio: 'Nazaré do Piauí', codigoMunicipio: '220670',
    valores: {
      // Tabela 2
      COTA_PARTE_FPM: 7549728.56, COTA_PARTE_ICMS: 1163494.32, ICMS_DESONERACAO_LC_87_1996: 0,
      COTA_PARTE_IPI_EXPORTACAO: 246.09, COTA_PARTE_ITR: 3885.55, COTA_PARTE_IPVA: 97695.58,
      COTA_PARTE_IOF_OURO: 0, RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS: 8815050.10,
      // Tabela 4
      RECEITA_APLICACAO_FINANCEIRA: 0, TRANSFERENCIAS_SALARIO_EDUCACAO: 77011.69, OUTRAS_TRANSFERENCIAS_FNDE: 0,
      APLICACAO_FINANCEIRA_FNDE: 1372.41, TRANSFERENCIAS_DIRETAS_PDDE: 0, TRANSFERENCIAS_DIRETAS_PNAE: 211952.4,
      TRANSFERENCIAS_DIRETAS_PNATE: 65653.53, RECEITA_TRANSFERENCIAS_CONVENIOS: 66612.8, RECEITA_OPERACOES_CREDITO: 0,
      OUTRAS_RECEITAS_FINANCIAMENTO_ENSINO: 0, TOTAL_RECEITAS_ADICIONAIS_FINANCIAMENTO_ENSINO: 422602.83,
      // Tabela 6
      COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB: 1384294.31,
    },
  },
  {
    municipio: 'Novo Oriente do Piauí', codigoMunicipio: '220690',
    valores: {
      COTA_PARTE_FPM: 7549728.56, COTA_PARTE_ICMS: 704001.88, ICMS_DESONERACAO_LC_87_1996: 0,
      COTA_PARTE_IPI_EXPORTACAO: 136.39, COTA_PARTE_ITR: 2233.53, COTA_PARTE_IPVA: 105428.26,
      COTA_PARTE_IOF_OURO: 0, RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS: 8361528.62,
      RECEITA_APLICACAO_FINANCEIRA: 0, TRANSFERENCIAS_SALARIO_EDUCACAO: 46293.47, OUTRAS_TRANSFERENCIAS_FNDE: 0,
      APLICACAO_FINANCEIRA_FNDE: 4217.61, TRANSFERENCIAS_DIRETAS_PDDE: 0, TRANSFERENCIAS_DIRETAS_PNAE: 78806.2,
      TRANSFERENCIAS_DIRETAS_PNATE: 0, RECEITA_TRANSFERENCIAS_CONVENIOS: 747.18, RECEITA_OPERACOES_CREDITO: 0,
      OUTRAS_RECEITAS_FINANCIAMENTO_ENSINO: 0, TOTAL_RECEITAS_ADICIONAIS_FINANCIAMENTO_ENSINO: 130064.46,
      COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB: 767384.74,
    },
  },
  {
    municipio: 'Porto', codigoMunicipio: '220850',
    valores: {
      COTA_PARTE_FPM: 10066304.74, COTA_PARTE_ICMS: 925183.22, ICMS_DESONERACAO_LC_87_1996: 0,
      COTA_PARTE_IPI_EXPORTACAO: 183.09, COTA_PARTE_ITR: 1778.75, COTA_PARTE_IPVA: 63167.89,
      COTA_PARTE_IOF_OURO: 0, RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS: 11056617.69,
      RECEITA_APLICACAO_FINANCEIRA: 538.91, TRANSFERENCIAS_SALARIO_EDUCACAO: 215255.13, OUTRAS_TRANSFERENCIAS_FNDE: 0,
      APLICACAO_FINANCEIRA_FNDE: 0, TRANSFERENCIAS_DIRETAS_PDDE: 4080, TRANSFERENCIAS_DIRETAS_PNAE: 487799.4,
      TRANSFERENCIAS_DIRETAS_PNATE: 152076.58, RECEITA_TRANSFERENCIAS_CONVENIOS: 0, RECEITA_OPERACOES_CREDITO: 0,
      OUTRAS_RECEITAS_FINANCIAMENTO_ENSINO: 0, TOTAL_RECEITAS_ADICIONAIS_FINANCIAMENTO_ENSINO: 859750.02,
      COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB: 3609159.64,
    },
  },
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
  const resultado = { geradoEm: new Date().toISOString(), modo: apply ? 'APLICADO' : 'DRY_RUN', fonte: 'Tabelão corrigido (abas T2/T4/T6, linhas marrom) - 3 casos recorrentes 2020', operacoes: plano.length, erros, plano };
  fs.mkdirSync(path.dirname(reportFile), { recursive: true });
  fs.writeFileSync(reportFile, JSON.stringify(resultado, null, 2), 'utf8');
  console.log(JSON.stringify({ modo: resultado.modo, operacoes: plano.length, erros: erros.length }, null, 2));
  if (erros.length) process.exitCode = 1;
}
main().catch((e) => { console.error(e.stack || e.message); process.exitCode = 1; });
