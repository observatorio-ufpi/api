// Corrige Luzilândia/2024, Tabela 11 (PROPORCAO_50_PORCENTO_FUNDEB_VAAT_EDUCACAO_INFANTIL):
// achado durante reconferência visual contra o PDF real (07/10/2026).
// DB tinha percentualAplicado=84.92; o PDF mostra 50,46% na linha 16 (coluna %Aplicado (m)).
// Uso: node fix_luzilandia_2024_tabela11.cjs           (dry-run)
//      node fix_luzilandia_2024_tabela11.cjs --apply   (grava)
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
  relatorioMunicialId: 554,
  tipo: 'PROPORCAO_50_PORCENTO_FUNDEB_VAAT_EDUCACAO_INFANTIL',
  percentualAplicado: 50.46,
};

async function main() {
  const antes = await prisma.indicadores23Art212.findFirst({ where: { relatorioMunicialId: CORRECAO.relatorioMunicialId, tipo: CORRECAO.tipo } });
  console.log('ANTES:', JSON.stringify(antes));
  console.log('DEPOIS (planejado): percentualAplicado =', CORRECAO.percentualAplicado);

  if (APPLY) {
    const depois = await prisma.indicadores23Art212.update({
      where: { id: antes.id },
      data: { percentualAplicado: CORRECAO.percentualAplicado },
    });
    console.log('APLICADO:', JSON.stringify(depois));
    fs.writeFileSync(path.join(__dirname, '..', 'reports', 'aplicacao_fix_luzilandia_2024_tabela11.json'), JSON.stringify({ geradoEm: new Date().toISOString(), antes, depois }, null, 2));
  } else {
    console.log('\n(dry-run - nada foi gravado. Rode com --apply para gravar.)');
  }
  await prisma.$disconnect();
}
main().catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
