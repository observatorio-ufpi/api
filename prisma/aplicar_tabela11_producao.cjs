/* Aplica os 900 casos corrigidos da Tabela 11 (Protocolo Complementar) em
   QUALQUER banco (local ou produção), identificando cada linha por chave
   natural (codigoMunicipio + ano + tipo) — nunca por ID interno do banco,
   que não é portável entre bancos diferentes.

   Fonte dos dados: tabela11_dados_producao_20261014.json (exportado do banco
   local já com os 7 erros pontuais corrigidos — ver docs/progresso.md).

   Cobre os 3 grupos da Tabela 11:
   - recursos_mde_21 (2021): receita21, tipo VALOR_MINIMO_APLICADO_MDE
   - recursos_mde_23 (2023/2024): receita23, tipo
     VALOR_MINIMO_A_SER_APLICADO_ALEM_DO_VALOR_DESTINADO_AO_FUNDEB
   - vaat_infantil_23 (2024): indicadores23Art212, tipo
     PROPORCAO_50_PORCENTO_FUNDEB_VAAT_EDUCACAO_INFANTIL

   Se o município/ano tiver relatório duplicado (caso conhecido em alguns
   municípios), aplica em TODAS as cópias — mesmo critério já usado no
   restante do projeto.

   Uso: node aplicar_tabela11_producao.cjs --env <caminho .env do alvo>            (dry-run)
        node aplicar_tabela11_producao.cjs --env <caminho .env do alvo> --apply    (grava)
*/
const fs = require('fs');
const path = require('path');

function arg(name) {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : undefined;
}
function loadEnv(file) {
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*DATABASE_URL\s*=\s*(.*?)\s*$/);
    if (m) process.env.DATABASE_URL = m[1].replace(/^"|"$/g, '');
  }
}

async function main() {
  const envFile = arg('env');
  const apply = process.argv.includes('--apply');
  if (!envFile) throw new Error('Use --env <caminho para o .env do banco-alvo>');
  loadEnv(envFile);

  const { PrismaClient } = require('@prisma/client');
  const prisma = new PrismaClient();

  const dados = JSON.parse(
    fs.readFileSync(path.join(__dirname, '..', '..', '..', 'correcao-rreo', 'dumps_para_producao', 'tabela11_dados_producao_20261014.json'), 'utf8'),
  );

  const plano = [];
  const erros = [];

  for (const caso of dados.recursos_mde_21) {
    const relatorios = await prisma.relatorioMunicipal21.findMany({ where: { ano: caso.ano, codigoMunicipio: caso.codigoMunicipio } });
    if (!relatorios.length) { erros.push({ ...caso, grupo: 'recursos_mde_21', mensagem: 'SEM_RELATORIO_21' }); continue; }
    for (const r of relatorios) {
      plano.push({ grupo: 'recursos_mde_21', modelo: 'receita21', municipio: caso.municipio, ano: caso.ano, relatorioId: r.id, tipo: 'VALOR_MINIMO_APLICADO_MDE', previsaoAtualizada: caso.previsaoAtualizada, valor: caso.valor });
    }
  }

  for (const caso of dados.recursos_mde_23) {
    const relatorios = await prisma.relatorioMunicipal23.findMany({ where: { ano: caso.ano, codigoMunicipio: caso.codigoMunicipio } });
    if (!relatorios.length) { erros.push({ ...caso, grupo: 'recursos_mde_23', mensagem: 'SEM_RELATORIO_23' }); continue; }
    for (const r of relatorios) {
      plano.push({ grupo: 'recursos_mde_23', modelo: 'receita23', municipio: caso.municipio, ano: caso.ano, relatorioId: r.id, tipo: 'VALOR_MINIMO_A_SER_APLICADO_ALEM_DO_VALOR_DESTINADO_AO_FUNDEB', previsaoAtualizada: caso.previsaoAtualizada, valor: caso.valor });
    }
  }

  for (const caso of dados.vaat_infantil_23) {
    const relatorios = await prisma.relatorioMunicipal23.findMany({ where: { ano: caso.ano, codigoMunicipio: caso.codigoMunicipio } });
    if (!relatorios.length) { erros.push({ ...caso, grupo: 'vaat_infantil_23', mensagem: 'SEM_RELATORIO_23' }); continue; }
    for (const r of relatorios) {
      plano.push({ grupo: 'vaat_infantil_23', modelo: 'indicadores23Art212', municipio: caso.municipio, ano: caso.ano, relatorioId: r.id, tipo: 'PROPORCAO_50_PORCENTO_FUNDEB_VAAT_EDUCACAO_INFANTIL', valorExigido: caso.valorExigido, valorAplicado: caso.valorAplicado, valorConsideradoAposDeducoes: caso.valorConsideradoAposDeducoes, valor: caso.valor });
    }
  }

  if (apply) {
    for (const item of plano) {
      if (item.modelo === 'receita21') {
        await prisma.receita21.upsert({
          where: { relatorioMunicialId_tipo: { relatorioMunicialId: item.relatorioId, tipo: item.tipo } },
          update: { previsaoAtualizada: item.previsaoAtualizada, receitasRealizadaAteBimestre: item.valor },
          create: { relatorioMunicialId: item.relatorioId, tipo: item.tipo, previsaoAtualizada: item.previsaoAtualizada, receitasRealizadaAteBimestre: item.valor },
        });
      } else if (item.modelo === 'receita23') {
        await prisma.receita23.upsert({
          where: { relatorioMunicialId_tipo: { relatorioMunicialId: item.relatorioId, tipo: item.tipo } },
          update: { previsaoAtualizada: item.previsaoAtualizada, receitasRealizadasAteBimestre: item.valor },
          create: { relatorioMunicialId: item.relatorioId, tipo: item.tipo, previsaoAtualizada: item.previsaoAtualizada, receitasRealizadasAteBimestre: item.valor },
        });
      } else if (item.modelo === 'indicadores23Art212') {
        await prisma.indicadores23Art212.upsert({
          where: { relatorioMunicialId_tipo: { relatorioMunicialId: item.relatorioId, tipo: item.tipo } },
          update: { valorExigido: item.valorExigido, valorAplicado: item.valorAplicado, valorConsideradoAposDeducoes: item.valorConsideradoAposDeducoes, percentualAplicado: item.valor },
          create: { relatorioMunicialId: item.relatorioId, tipo: item.tipo, valorExigido: item.valorExigido, valorAplicado: item.valorAplicado, valorConsideradoAposDeducoes: item.valorConsideradoAposDeducoes, percentualAplicado: item.valor },
        });
      }
    }
  }

  await prisma.$disconnect();

  const resultado = {
    geradoEm: new Date().toISOString(),
    modo: apply ? 'APLICADO' : 'DRY_RUN',
    operacoes: plano.length,
    esperado: 900,
    erros: erros.length,
    erroDetalhe: erros,
  };
  console.log(JSON.stringify(resultado, null, 2));
  if (erros.length) console.log('ERROS (detalhe completo acima em erroDetalhe)');
  if (plano.length !== 900) console.log('ATENÇÃO: esperava 900 operações, encontrou', plano.length);
}

main().catch((e) => { console.error(e.stack || e.message); process.exitCode = 1; });
