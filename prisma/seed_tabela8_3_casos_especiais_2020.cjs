/* Tabela 8 — os 3 casos de "coluna especial" 2020 que ficaram de fora dos
   313 casos de fórmula (Nazaré do Piauí, Novo Oriente do Piauí, Porto não
   faziam parte da lista original). Mesmo bug de coluna deslocada já visto
   nas outras tabelas: despesasEmpenhadasAteBimestre/despesasLiquidadasAte
   Bimestre zerados, com o valor real "vazando" para despesasEmpenhadas
   Percentual, e "100" (um percentual) caindo em despesasLiquidadasAteBimestre.
   Valores conferidos visualmente na página 3 de cada PDF (não pelo texto
   extraído, que também sai desalinhado nesses 3 arquivos):
   - Nazaré do Piauí: conteúdo real está em
     "RREO_Municipal_Morro do Chapéu do Piauí_6_2020.pdf.pdf" (bug de
     arquivo trocado já documentado na correção dos 313 casos).
   - Novo Oriente do Piauí e Porto: arquivo próprio, sem troca.
   Novo Oriente do Piauí também precisou de ajuste na dedução 17.1: o
   RREO preencheu o valor na coluna 40% (17.2) em vez de 60% (17.1) —
   o mesmo tipo de "erro do RREO" que a OPEPI já documentou para esses 3
   municípios em outras tabelas. Valor usado: o da coluna 17 total (que é
   onde o PDF realmente tem o número), movido para 17.1 por protocolo,
   consistente com o resto do projeto.
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

const CASOS = [
  {
    municipio: 'Nazaré do Piauí', despesaId: 11929,
    despesa: { despesasEmpenhadasAteBimestre: 5378673.92, despesasEmpenhadasPercentual: 100.00, despesasLiquidadasAteBimestre: 5378673.92, despesasLiquidadasPercentual: 100.00 },
    deducao: { id: 2986, tipo: '17.1', valor: 122553.43 },
    valorTabela8Esperado: 5256120.49,
  },
  {
    municipio: 'Novo Oriente do Piauí', despesaId: 6945,
    despesa: { despesasEmpenhadasAteBimestre: 2367023.08, despesasEmpenhadasPercentual: 100.00, despesasLiquidadasAteBimestre: 2367023.08, despesasLiquidadasPercentual: 100.00 },
    deducao: { id: 1740, tipo: '17.1', valor: 361.20 },
    valorTabela8Esperado: 2366661.88,
  },
  {
    municipio: 'Porto', despesaId: 3977,
    despesa: { despesasEmpenhadasAteBimestre: 9877389.62, despesasEmpenhadasPercentual: 100.00, despesasLiquidadasAteBimestre: 9877389.62, despesasLiquidadasPercentual: 100.00 },
    deducao: { id: 995, tipo: '16.1', valor: 446953.63 },
    valorTabela8Esperado: 9430435.99,
  },
];

async function main() {
  const envFile = arg('env'); const reportFile = arg('report'); const apply = process.argv.includes('--apply');
  if (!envFile || !reportFile) throw new Error('Use --env e --report.');
  loadEnv(envFile);
  const { PrismaClient } = require('@prisma/client');
  const prisma = new PrismaClient();
  const plano = [];
  try {
    for (const caso of CASOS) {
      plano.push({ municipio: caso.municipio, tabela: 'despesa1920', id: caso.despesaId, dados: caso.despesa });
      plano.push({ municipio: caso.municipio, tabela: 'deducoesFinsLimiteFundeb1920', id: caso.deducao.id, dados: { valor: caso.deducao.valor }, obs: caso.deducao.tipo });
    }
    if (apply) {
      for (const item of plano) {
        if (item.tabela === 'despesa1920') await prisma.despesa1920.update({ where: { id: item.id }, data: item.dados });
        else await prisma.deducoesFinsLimiteFundeb1920.update({ where: { id: item.id }, data: item.dados });
      }
    }
  } finally { await prisma.$disconnect(); }
  const resultado = { geradoEm: new Date().toISOString(), modo: apply ? 'APLICADO' : 'DRY_RUN', fonte: 'PDF conferido visualmente (3 casos de coluna especial 2020, Tabela 8)', operacoes: plano.length, casos: CASOS.map((c) => ({ municipio: c.municipio, valorTabela8Esperado: c.valorTabela8Esperado })), plano };
  fs.mkdirSync(path.dirname(reportFile), { recursive: true });
  fs.writeFileSync(reportFile, JSON.stringify(resultado, null, 2), 'utf8');
  console.log(JSON.stringify({ modo: resultado.modo, operacoes: plano.length }, null, 2));
}
main().catch((e) => { console.error(e.stack || e.message); process.exitCode = 1; });
