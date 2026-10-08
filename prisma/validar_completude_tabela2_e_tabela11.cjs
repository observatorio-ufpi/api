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

function valorDoRegistro(row, op) {
  if (op.tipo === 'PROPORCAO_50_PORCENTO_FUNDEB_VAAT_EDUCACAO_INFANTIL') return row.percentualAplicado;
  if (row.receitasRealizadaAteBimestre !== undefined) return row.receitasRealizadaAteBimestre;
  if (row.receitasRealizadasAteBimestre !== undefined) return row.receitasRealizadasAteBimestre;
  if (row.valor !== undefined) return row.valor;
  if (row.valorAplicado !== undefined) return row.valorAplicado;
  return undefined;
}

async function checarLote(nome, modeloFixo, operacoes) {
  let ok = 0, faltando = 0, divergente = 0;
  for (const op of operacoes) {
    const modelo = op.modelo || modeloFixo;
    let row;
    try {
      if (op.id) {
        row = await prisma[modelo].findUnique({ where: { id: op.id } });
      } else {
        row = await prisma[modelo].findFirst({ where: { relatorioMunicialId: op.relatorioId, tipo: op.tipo } });
      }
    } catch (e) {
      console.log(`  [${nome}] ERRO consultando modelo ${modelo} id=${op.id}: ${e.message.split('\n')[0]}`);
      faltando++;
      continue;
    }
    if (!row) {
      console.log(`  [${nome}] FALTANDO: ${op.municipio || ''} ${op.tipo} id=${op.id} modelo=${modelo}`);
      faltando++;
      continue;
    }
    const valorBanco = valorDoRegistro(row, op);
    const esperado = op.depois !== undefined ? op.depois : (op.valor !== undefined ? op.valor : undefined);
    if (esperado !== undefined && Math.abs(valorBanco - esperado) > 0.01) {
      console.log(`  [${nome}] DIVERGENTE: ${op.municipio || ''} ${op.tipo} id=${op.id} banco=${valorBanco} esperado=${esperado}`);
      divergente++;
    } else {
      ok++;
    }
  }
  console.log(`[${nome}] total=${operacoes.length} ok=${ok} faltando=${faltando} divergente=${divergente}`);
}

async function main() {
  const t2 = require('../reports/aplicacao_tabela2_175_casos.json');
  await checarLote('Tabela 2 (175 casos)', 'receita1718', t2.plano);

  const t11 = require('../reports/aplicacao_tabela11_tracos.json');
  await checarLote('Tabela 11 (900 casos)', null, t11.plano);

  const t5 = require('../reports/aplicacao_tabela5_casos.json');
  await checarLote('Tabela 5 (18 casos, todas as etapas)', null, t5.plano);

  await prisma.$disconnect();
}
main().catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
