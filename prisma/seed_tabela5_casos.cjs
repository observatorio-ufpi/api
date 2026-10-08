/* Tabela 5 (Composição do Fundeb):
   - Etapa 2 (3 casos recorrentes de 2020: Nazaré do Piauí, Novo Oriente do
     Piauí, Porto) — bug de coluna deslocada, mesmo padrão já corrigido nas
     Tabelas 1/2/4/6/7/10. RECEITAS_DESTINADAS_AO_FUNDEB,
     TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB e COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB
     já estavam corretos (corrigidos antes); faltava RESULTADO_LIQUIDO_DAS_
     TRANSFERENCIAS_DO_FUNDEB e RECEITA_DE_APLICACAO_FINANCEIRA_DOS_
     RECURSOS_DO_FUNDEB (model receita1920).
   - Etapa 1 (10 casos de 2023/2024) — linha TOTAL_DESTINADO_AO_FUNDEB
     ausente no banco (RREO mostrou traço em vez de valor na coluna
     "Contribuição na formação do Fundef/Fundeb"). Outras colunas da mesma
     linha já estavam corretas. Cria a linha (model receita23).
   Valores do Tabelão corrigido (aba T5). Default: dry-run. */
const fs = require('fs');
const path = require('path');
function arg(name) { const i = process.argv.indexOf(`--${name}`); return i >= 0 ? process.argv[i + 1] : undefined; }
function loadEnv(file) {
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*DATABASE_URL\s*=\s*(.*?)\s*$/);
    if (m) process.env.DATABASE_URL = m[1].replace(/^"|"$/g, '');
  }
}

const CASOS_2020 = [
  { municipio: 'Nazaré do Piauí', codigoMunicipio: '220670', valores: { RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB: 2556916.70, RECEITA_DE_APLICACAO_FINANCEIRA_DOS_RECURSOS_DO_FUNDEB: 1892.22, RECEITAS_RECEBIDAS_DO_FUNDEB: 5581322.11 } },
  { municipio: 'Novo Oriente do Piauí', codigoMunicipio: '220690', valores: { RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB: 859670.31, RECEITA_DE_APLICACAO_FINANCEIRA_DOS_RECURSOS_DO_FUNDEB: 35.42, RECEITAS_RECEBIDAS_DO_FUNDEB: 3174598.28 } },
  { municipio: 'Porto', codigoMunicipio: '220850', valores: { RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB: 8968887.55, RECEITA_DE_APLICACAO_FINANCEIRA_DOS_RECURSOS_DO_FUNDEB: 584.43, RECEITAS_RECEBIDAS_DO_FUNDEB: 14623558 } },
];

const CASOS_TRACO_2023_2024 = [
  { municipio: 'Altos', codigoMunicipio: '220040', ano: '2023', valor: 9726092.42 },
  { municipio: 'Barras', codigoMunicipio: '220120', ano: '2023', valor: 9359016.84 },
  { municipio: 'Parnaíba', codigoMunicipio: '220770', ano: '2023', valor: 41847384.77 },
  { municipio: 'Teresina', codigoMunicipio: '221100', ano: '2023', valor: 320679472.35 },
  { municipio: 'Altos', codigoMunicipio: '220040', ano: '2024', valor: 11504605.38 },
  { municipio: 'Barras', codigoMunicipio: '220120', ano: '2024', valor: 10959854.76 },
  { municipio: 'Parnaíba', codigoMunicipio: '220770', ano: '2024', valor: 45689692.86 },
  { municipio: 'Piripiri', codigoMunicipio: '220840', ano: '2024', valor: 14865543.33 },
  { municipio: 'Teresina', codigoMunicipio: '221100', ano: '2024', valor: 348426105.02 },
  { municipio: 'União', codigoMunicipio: '221110', ano: '2024', valor: 13749177.36 },
];

async function main() {
  const envFile = arg('env'); const reportFile = arg('report'); const apply = process.argv.includes('--apply');
  if (!envFile || !reportFile) throw new Error('Use --env e --report.');
  loadEnv(envFile);
  const { PrismaClient } = require('@prisma/client');
  const prisma = new PrismaClient();
  const plano = []; const erros = [];
  try {
    for (const caso of CASOS_2020) {
      const relatorio = await prisma.relatorioMunicipal1920.findFirst({ where: { ano: '2020', codigoMunicipio: caso.codigoMunicipio }, select: { id: true } });
      if (!relatorio) { erros.push({ municipio: caso.municipio, mensagem: 'RELATORIO_NAO_ENCONTRADO_1920' }); continue; }
      for (const [tipo, valorCorreto] of Object.entries(caso.valores)) {
        const existente = await prisma.receita1920.findFirst({ where: { relatorioMunicialId: relatorio.id, tipo } });
        if (!existente) { erros.push({ municipio: caso.municipio, tipo, mensagem: 'LINHA_AUSENTE_1920' }); continue; }
        plano.push({ grupo: 'etapa2_2020', municipio: caso.municipio, ano: '2020', modelo: 'receita1920', relatorioId: relatorio.id, tipo, antes: existente.receitasRealizadaAteBimestre, depois: valorCorreto, id: existente.id });
      }
    }
    for (const caso of CASOS_TRACO_2023_2024) {
      const relatorios = await prisma.relatorioMunicipal23.findMany({ where: { ano: caso.ano, codigoMunicipio: caso.codigoMunicipio }, select: { id: true } });
      if (!relatorios.length) { erros.push({ municipio: caso.municipio, ano: caso.ano, mensagem: 'RELATORIO_NAO_ENCONTRADO_23' }); continue; }
      for (const relatorio of relatorios) {
        const existente = await prisma.receita23.findFirst({ where: { relatorioMunicialId: relatorio.id, tipo: 'TOTAL_DESTINADO_AO_FUNDEB' } });
        plano.push({ grupo: 'etapa1_traco_2023_2024', municipio: caso.municipio, ano: caso.ano, modelo: 'receita23', relatorioId: relatorio.id, tipo: 'TOTAL_DESTINADO_AO_FUNDEB', operacao: existente ? 'update' : 'create', antes: existente ? existente.receitasRealizadasAteBimestre : null, depois: caso.valor, id: existente ? existente.id : null });
      }
    }
    if (apply) {
      for (const item of plano) {
        if (item.modelo === 'receita1920') {
          await prisma.receita1920.update({ where: { id: item.id }, data: { receitasRealizadaAteBimestre: item.depois } });
        } else {
          await prisma.receita23.upsert({
            where: { relatorioMunicialId_tipo: { relatorioMunicialId: item.relatorioId, tipo: 'TOTAL_DESTINADO_AO_FUNDEB' } },
            update: { receitasRealizadasAteBimestre: item.depois },
            create: { relatorioMunicialId: item.relatorioId, tipo: 'TOTAL_DESTINADO_AO_FUNDEB', receitasRealizadasAteBimestre: item.depois, previsaoAtualizada: 0 },
          });
        }
      }
    }
  } finally { await prisma.$disconnect(); }
  const resultado = { geradoEm: new Date().toISOString(), modo: apply ? 'APLICADO' : 'DRY_RUN', fonte: 'Tabelão corrigido (aba T5) - etapa 2 (3 casos 2020) + etapa 1 (10 casos traço 2023/2024)', operacoes: plano.length, erros, plano };
  fs.mkdirSync(path.dirname(reportFile), { recursive: true });
  fs.writeFileSync(reportFile, JSON.stringify(resultado, null, 2), 'utf8');
  console.log(JSON.stringify({ modo: resultado.modo, operacoes: plano.length, erros: erros.length }, null, 2));
  if (erros.length) console.log('ERROS:', JSON.stringify(erros, null, 2));
}
main().catch((e) => { console.error(e.stack || e.message); process.exitCode = 1; });
