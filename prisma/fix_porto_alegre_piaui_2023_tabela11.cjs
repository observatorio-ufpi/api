// Corrige Porto Alegre do Piauí/2023, Tabela 11 (VALOR_MINIMO_A_SER_APLICADO_ALEM_DO_VALOR_DESTINADO_AO_FUNDEB):
// achado durante reconferência visual contra o PDF real (07/10/2026).
// DB tinha previsaoAtualizada=0 (deveria ser 1.100.391,09) e receitasRealizadasAteBimestre=154.222,92 (deveria ser 1.154.222,92)
// - ambos com o dígito "1" das centenas de milhar faltando. Fórmula recalculada a partir do PDF bate exatamente
// com os dois valores corrigidos.
// Uso: node fix_porto_alegre_piaui_2023_tabela11.cjs           (dry-run)
//      node fix_porto_alegre_piaui_2023_tabela11.cjs --apply   (grava)
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

const CORRECAO = {
  relatorioMunicialId: 231,
  tipo: 'VALOR_MINIMO_A_SER_APLICADO_ALEM_DO_VALOR_DESTINADO_AO_FUNDEB',
  previsaoAtualizada: 1100391.09,
  receitasRealizadasAteBimestre: 1154222.92,
};

async function main() {
  const antes = await prisma.receita23.findFirst({ where: { relatorioMunicialId: CORRECAO.relatorioMunicialId, tipo: CORRECAO.tipo } });
  console.log('ANTES:', JSON.stringify(antes));
  console.log('DEPOIS (planejado):', JSON.stringify(CORRECAO));

  if (APPLY) {
    const depois = await prisma.receita23.update({
      where: { id: antes.id },
      data: { previsaoAtualizada: CORRECAO.previsaoAtualizada, receitasRealizadasAteBimestre: CORRECAO.receitasRealizadasAteBimestre },
    });
    console.log('APLICADO:', JSON.stringify(depois));
    fs.writeFileSync(path.join(__dirname, '..', 'reports', 'aplicacao_fix_porto_alegre_piaui_2023_tabela11.json'), JSON.stringify({ geradoEm: new Date().toISOString(), antes, depois }, null, 2));
  } else {
    console.log('\n(dry-run - nada foi gravado. Rode com --apply para gravar.)');
  }
  await prisma.$disconnect();
}
main().catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
