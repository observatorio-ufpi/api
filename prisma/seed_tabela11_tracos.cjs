/* Tabela 11 (Protocolo Complementar):
   - 655 casos de traço em "Recursos de MDE fora do Fundeb" (2021, 2023, 2024)
     — linha ausente no banco. Para 2021 é campo armazenado (receita21,
     VALOR_MINIMO_APLICADO_MDE); para 2023/2024 também é armazenado
     (receita23, VALOR_MINIMO_A_SER_APLICADO_ALEM_DO_VALOR_DESTINADO_AO_FUNDEB)
     — diferente de 2006-2020, onde esse valor é CALCULADO no backend a
     partir da Tabela 1+2 (researches.service.ts, 5%/25% de grupos de
     impostos), não é campo próprio.
   - 203 casos de traço em "VAAT na educação infantil(%)" (2024) — linha
     ausente (model Indicadores23Art212, tipo
     PROPORCAO_50_PORCENTO_FUNDEB_VAAT_EDUCACAO_INFANTIL). Só temos o
     percentual do Tabelão; os demais campos obrigatórios do model
     (valorExigido, valorAplicado, valorConsideradoAposDeducoes) são Float
     sem default — gravados como 0, mesmo critério já usado em criações
     anteriores (Parnaíba 2009, etc.) quando só tínhamos o valor final.
   Default: dry-run. */
const fs = require('fs');
const path = require('path');
function arg(name) { const i = process.argv.indexOf(`--${name}`); return i >= 0 ? process.argv[i + 1] : undefined; }
function loadEnv(file) {
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*DATABASE_URL\s*=\s*(.*?)\s*$/);
    if (m) process.env.DATABASE_URL = m[1].replace(/^"|"$/g, '');
  }
}
function normalizar(nome) {
  return nome.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

async function main() {
  const envFile = arg('env'); const reportFile = arg('report'); const dadosFile = arg('dados'); const municipiosFile = arg('municipios');
  const apply = process.argv.includes('--apply');
  if (!envFile || !reportFile || !dadosFile || !municipiosFile) throw new Error('Use --env, --report, --dados e --municipios.');
  loadEnv(envFile);
  const { PrismaClient } = require('@prisma/client');
  const prisma = new PrismaClient();

  const municipiosList = JSON.parse(fs.readFileSync(municipiosFile, 'utf8'));
  const byNormalized = new Map(municipiosList.map((m) => [normalizar(m.nome), m]));
  function codigoDe(nome) {
    const m = byNormalized.get(normalizar(nome));
    if (!m) throw new Error('Município não encontrado: ' + nome);
    return m.codigoIbge.slice(0, -1);
  }

  const dados = JSON.parse(fs.readFileSync(dadosFile, 'utf8'));
  const plano = []; const erros = [];

  // --- Recursos de MDE fora do Fundeb (traço), 2021/2023/2024 ---
  for (const caso of dados.recursos_mde_traco) {
    const codigo = codigoDe(caso.municipio);
    if (caso.ano === '2021' || caso.ano === '2022') {
      const relatorios = await prisma.relatorioMunicipal21.findMany({ where: { ano: caso.ano, codigoMunicipio: codigo } });
      if (!relatorios.length) { erros.push({ ...caso, mensagem: 'SEM_RELATORIO_21' }); continue; }
      for (const r of relatorios) {
        const existente = await prisma.receita21.findFirst({ where: { relatorioMunicialId: r.id, tipo: 'VALOR_MINIMO_APLICADO_MDE' } });
        plano.push({ grupo: 'recursos_mde_21', municipio: caso.municipio, ano: caso.ano, modelo: 'receita21', relatorioId: r.id, tipo: 'VALOR_MINIMO_APLICADO_MDE', operacao: existente ? 'update' : 'create', valor: caso.valor, id: existente ? existente.id : null });
      }
    } else if (caso.ano === '2023' || caso.ano === '2024') {
      const relatorios = await prisma.relatorioMunicipal23.findMany({ where: { ano: caso.ano, codigoMunicipio: codigo } });
      if (!relatorios.length) { erros.push({ ...caso, mensagem: 'SEM_RELATORIO_23' }); continue; }
      for (const r of relatorios) {
        const existente = await prisma.receita23.findFirst({ where: { relatorioMunicialId: r.id, tipo: 'VALOR_MINIMO_A_SER_APLICADO_ALEM_DO_VALOR_DESTINADO_AO_FUNDEB' } });
        plano.push({ grupo: 'recursos_mde_23', municipio: caso.municipio, ano: caso.ano, modelo: 'receita23', relatorioId: r.id, tipo: 'VALOR_MINIMO_A_SER_APLICADO_ALEM_DO_VALOR_DESTINADO_AO_FUNDEB', operacao: existente ? 'update' : 'create', valor: caso.valor, id: existente ? existente.id : null });
      }
    } else {
      erros.push({ ...caso, mensagem: 'ANO_NAO_TRATADO' });
    }
  }

  // --- VAAT educação infantil (traço), 2024 ---
  for (const caso of dados.vaat_infantil_traco) {
    const codigo = codigoDe(caso.municipio);
    const relatorios = await prisma.relatorioMunicipal23.findMany({ where: { ano: caso.ano, codigoMunicipio: codigo } });
    if (!relatorios.length) { erros.push({ ...caso, mensagem: 'SEM_RELATORIO_23' }); continue; }
    for (const r of relatorios) {
      const existente = await prisma.indicadores23Art212.findFirst({ where: { relatorioMunicialId: r.id, tipo: 'PROPORCAO_50_PORCENTO_FUNDEB_VAAT_EDUCACAO_INFANTIL' } });
      plano.push({ grupo: 'vaat_infantil_23', municipio: caso.municipio, ano: caso.ano, modelo: 'indicadores23Art212', relatorioId: r.id, tipo: 'PROPORCAO_50_PORCENTO_FUNDEB_VAAT_EDUCACAO_INFANTIL', operacao: existente ? 'update' : 'create', valor: caso.valor, id: existente ? existente.id : null });
    }
  }

  if (apply) {
    for (const item of plano) {
      if (item.modelo === 'receita21') {
        await prisma.receita21.upsert({
          where: { relatorioMunicialId_tipo: { relatorioMunicialId: item.relatorioId, tipo: item.tipo } },
          update: { receitasRealizadaAteBimestre: item.valor },
          create: { relatorioMunicialId: item.relatorioId, tipo: item.tipo, previsaoAtualizada: 0, receitasRealizadaAteBimestre: item.valor },
        });
      } else if (item.modelo === 'receita23') {
        await prisma.receita23.upsert({
          where: { relatorioMunicialId_tipo: { relatorioMunicialId: item.relatorioId, tipo: item.tipo } },
          update: { receitasRealizadasAteBimestre: item.valor },
          create: { relatorioMunicialId: item.relatorioId, tipo: item.tipo, previsaoAtualizada: 0, receitasRealizadasAteBimestre: item.valor },
        });
      } else if (item.modelo === 'indicadores23Art212') {
        await prisma.indicadores23Art212.upsert({
          where: { relatorioMunicialId_tipo: { relatorioMunicialId: item.relatorioId, tipo: item.tipo } },
          update: { percentualAplicado: item.valor },
          create: { relatorioMunicialId: item.relatorioId, tipo: item.tipo, valorExigido: 0, valorAplicado: 0, valorConsideradoAposDeducoes: 0, percentualAplicado: item.valor },
        });
      }
    }
  }
  await prisma.$disconnect();

  const resultado = { geradoEm: new Date().toISOString(), modo: apply ? 'APLICADO' : 'DRY_RUN', fonte: 'Tabelão corrigido (aba T11) - 655 traço Recursos MDE fora Fundeb + 203 traço VAAT educação infantil', operacoes: plano.length, erros: erros.length, erroDetalhe: erros, plano };
  fs.mkdirSync(path.dirname(reportFile), { recursive: true });
  fs.writeFileSync(reportFile, JSON.stringify(resultado, null, 2), 'utf8');
  console.log(JSON.stringify({ modo: resultado.modo, operacoes: plano.length, erros: erros.length }, null, 2));
  if (erros.length) console.log('ERROS (primeiros 10):', JSON.stringify(erros.slice(0, 10), null, 2));
}
main().catch((e) => { console.error(e.stack || e.message); process.exitCode = 1; });
