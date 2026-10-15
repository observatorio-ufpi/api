// Corrige o resíduo do bug de coluna deslocada de 2020 (Nazaré do Piauí, Novo Oriente do Piauí, Porto).
// O próprio PDF oficial do SIOPE desses 3 municípios/2020 foi publicado com as colunas deslocadas
// (conferido visualmente em 14/10/2026):
//   - Receitas: o realizado aparece na coluna "Previsão Atualizada" e o % na coluna "Até o Bimestre".
//     O banco ficou com receitasRealizadaAteBimestre = % e o valor real em previsaoAtualizada.
//   - Despesas: o valor aparece na coluna "% (f)" e o % na coluna "Liquidadas (g)".
//     O banco ficou com despesasEmpenhadasAteBimestre = 0, despesasEmpenhadasPercentual = valor,
//     despesasLiquidadasAteBimestre = %.
// A rodada do Tabelão só corrigiu as células que a planilha marcava (totais, Fundeb, linha 13);
// este script corrige todas as linhas restantes com o mesmo padrão já usado na linha 13.
// Busca pela chave natural (codigoMunicipio + ano), sem IDs fixos — seguro para rodar em produção.
// Previsão atualizada verdadeira das receitas não aparece no PDF; fica como está (= realizado).
// Uso: node fix_colunas_deslocadas_2020.cjs           (dry-run)
//      node fix_colunas_deslocadas_2020.cjs --apply   (grava)
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

const APPLY = process.argv.includes('--apply');
const ANO = '2020';
const MUNICIPIOS = ['220670', '220690', '220850']; // Nazaré do Piauí, Novo Oriente do Piauí, Porto

async function main() {
  const relatorios = await prisma.relatorioMunicipal1920.findMany({
    where: { ano: ANO, codigoMunicipio: { in: MUNICIPIOS } },
  });
  if (relatorios.length !== MUNICIPIOS.length) {
    console.log('Relatórios encontrados:', relatorios.map((r) => r.codigoMunicipio));
    throw new Error(`Esperava ${MUNICIPIOS.length} relatórios, achei ${relatorios.length}`);
  }

  const ops = [];
  for (const rel of relatorios) {
    const receitas = await prisma.receita1920.findMany({ where: { relatorioMunicialId: rel.id } });
    for (const r of receitas) {
      if (r.receitasRealizadaAteBimestre === r.previsaoAtualizada) continue;
      ops.push({
        municipio: rel.nomeMunicipio, modelo: 'receita1920', id: r.id, tipo: r.tipo,
        antes: { receitasRealizadaAteBimestre: r.receitasRealizadaAteBimestre, percentual: r.percentual },
        depois: { receitasRealizadaAteBimestre: r.previsaoAtualizada, percentual: r.receitasRealizadaAteBimestre },
      });
    }
    const despesas = await prisma.despesa1920.findMany({ where: { relatorioMunicialId: rel.id } });
    for (const d of despesas) {
      if (d.despesasEmpenhadasAteBimestre !== 0 || d.despesasEmpenhadasPercentual === 0) continue;
      const valor = d.despesasEmpenhadasPercentual;
      const pct = d.despesasLiquidadasAteBimestre;
      ops.push({
        municipio: rel.nomeMunicipio, modelo: 'despesa1920', id: d.id, tipo: d.tipo,
        antes: {
          despesasEmpenhadasAteBimestre: d.despesasEmpenhadasAteBimestre, despesasEmpenhadasPercentual: d.despesasEmpenhadasPercentual,
          despesasLiquidadasAteBimestre: d.despesasLiquidadasAteBimestre, despesasLiquidadasPercentual: d.despesasLiquidadasPercentual,
        },
        depois: {
          despesasEmpenhadasAteBimestre: valor, despesasEmpenhadasPercentual: pct,
          despesasLiquidadasAteBimestre: valor, despesasLiquidadasPercentual: pct,
        },
      });
    }
  }

  for (const op of ops) {
    console.log(`${op.municipio} | ${op.modelo} | ${op.tipo}\n   antes:  ${JSON.stringify(op.antes)}\n   depois: ${JSON.stringify(op.depois)}`);
  }
  console.log(`\nTotal de operações: ${ops.length}`);

  if (APPLY) {
    await prisma.$transaction(ops.map((op) => prisma[op.modelo].update({ where: { id: op.id }, data: op.depois })));
    console.log('APLICADO.');
    fs.writeFileSync(
      path.join(__dirname, '..', 'reports', 'aplicacao_fix_colunas_deslocadas_2020.json'),
      JSON.stringify({ geradoEm: new Date().toISOString(), ops }, null, 2),
    );
  } else {
    console.log('\n(dry-run - nada foi gravado. Rode com --apply para gravar.)');
  }
  await prisma.$disconnect();
}
main().catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
