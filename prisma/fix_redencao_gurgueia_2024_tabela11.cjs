// Corrige Redenção do Gurguéia/2024, Tabela 11 (VALOR_MINIMO_A_SER_APLICADO_ALEM_DO_VALOR_DESTINADO_AO_FUNDEB):
// achado durante reconferência visual contra o PDF real (07/10/2026).
// DB tinha previsaoAtualizada=0 (deveria ser 1.279.092,44) e receitasRealizadasAteBimestre=190.815,27 (deveria ser 1.908.015,27)
// - mesmo padrão dos outros 4 erros já corrigidos (dígito da casa das centenas de milhar faltando/zerado).
// Fórmula recalculada a partir das linhas 1.1 a 2.7 do PDF bate exatamente com os dois valores corrigidos.
// Uso: node fix_redencao_gurgueia_2024_tabela11.cjs           (dry-run)
//      node fix_redencao_gurgueia_2024_tabela11.cjs --apply   (grava)
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
  relatorioMunicialId: 597,
  tipo: 'VALOR_MINIMO_A_SER_APLICADO_ALEM_DO_VALOR_DESTINADO_AO_FUNDEB',
  previsaoAtualizada: 1279092.44,
  receitasRealizadasAteBimestre: 1908015.27,
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
    fs.writeFileSync(path.join(__dirname, '..', 'reports', 'aplicacao_fix_redencao_gurgueia_2024_tabela11.json'), JSON.stringify({ geradoEm: new Date().toISOString(), antes, depois }, null, 2));
  } else {
    console.log('\n(dry-run - nada foi gravado. Rode com --apply para gravar.)');
  }
  await prisma.$disconnect();
}
main().catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
