/* Targeted Table 8 correction. Default mode is read-only dry-run. */
const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

function arg(name) {
  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 ? process.argv[index + 1] : undefined;
}
function loadEnv(file) {
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const match = line.match(/^\s*DATABASE_URL\s*=\s*(.*?)\s*$/);
    if (match) process.env.DATABASE_URL = match[1].replace(/^"|"$/g, '');
  }
}
function codeInDatabase(ibgeCode) {
  return /^\d{7}$/.test(ibgeCode) ? ibgeCode.slice(0, -1) : ibgeCode;
}

const delegates = {
  RelatorioMunicipal1314: 'relatorioMunicipal1314',
  RelatorioMunicipal1516: 'relatorioMunicipal1516',
  RelatorioMunicipal1718: 'relatorioMunicipal1718',
  RelatorioMunicipal1920: 'relatorioMunicipal1920',
};

async function main() {
  const payloadFile = arg('payload');
  const envFile = arg('env');
  const reportFile = arg('report');
  const apply = process.argv.includes('--apply');
  if (!payloadFile || !envFile || !reportFile) throw new Error('Use --payload, --env e --report.');
  loadEnv(envFile);
  const payload = JSON.parse(fs.readFileSync(payloadFile, 'utf8'));
  const documents = payload.documentos.filter((document) => document.aplicacaoAutomatica === true);
  const prisma = new PrismaClient();
  const actions = [];
  const errors = [];

  async function prepareDocument(client, document) {
    const reportDelegate = delegates[document.modeloRelatorio];
    if (!reportDelegate) throw new Error(`Modelo não suportado: ${document.modeloRelatorio}`);
    const key = document.localizarRelatorioPor;
    const legacyCode = codeInDatabase(key.codigoMunicipio);
    const report = await client[reportDelegate].findFirst({
      where: { ano: key.ano, codigoMunicipio: legacyCode }, select: { id: true },
    });
    if (!report) throw new Error(`Relatório não encontrado: ${document.modeloRelatorio} ${key.ano}/${legacyCode}`);
    const operations = [];
    for (const change of document.atualizacoes) {
      const existing = await client[change.delegatePrisma].findFirst({
        where: { [change.chaveEstrangeira]: report.id, tipo: change.tipoEnum }, select: { id: true },
      });
      operations.push({ ...change, relatorioId: report.id, operacao: existing ? 'update' : 'create' });
    }
    return { fonte: document.fonte, modeloRelatorio: document.modeloRelatorio, ano: key.ano, codigoIbgeOrigem: key.codigoMunicipio, codigoMunicipioNoBanco: legacyCode, relatorioId: report.id, operations };
  }

  try {
    for (const document of documents) {
      try {
        const plan = await prepareDocument(prisma, document);
        actions.push(plan);
        if (apply) {
          await prisma.$transaction(async (tx) => {
            for (const operation of plan.operations) {
              const data = { ...operation.dados };
              const where = { relatorioMunicialId_tipo: { relatorioMunicialId: operation.relatorioId, tipo: operation.tipoEnum } };
              const create = { ...data, relatorioMunicialId: operation.relatorioId, tipo: operation.tipoEnum };
              await tx[operation.delegatePrisma].upsert({ where, update: data, create });
            }
          });
        }
      } catch (error) {
        errors.push({ fonte: document.fonte, mensagem: error.message });
      }
    }
  } finally {
    await prisma.$disconnect();
  }
  const allOperations = actions.flatMap((action) => action.operations);
  const result = {
    geradoEm: new Date().toISOString(),
    modo: apply ? 'APLICADO' : 'DRY_RUN',
    politica: 'Somente documentos com aplicacaoAutomatica=true; 26 casos em revisão manual não são processados.',
    documentosPlanejados: documents.length,
    documentosProcessados: actions.length,
    operacoes: { total: allOperations.length, update: allOperations.filter((op) => op.operacao === 'update').length, create: allOperations.filter((op) => op.operacao === 'create').length },
    erros: errors,
    plano: actions,
  };
  fs.mkdirSync(path.dirname(reportFile), { recursive: true });
  fs.writeFileSync(reportFile, JSON.stringify(result, null, 2), 'utf8');
  console.log(JSON.stringify({ modo: result.modo, documentos: result.documentosProcessados, operacoes: result.operacoes, erros: errors.length }, null, 2));
  if (errors.length) process.exitCode = 1;
}
main().catch((error) => { console.error(error.stack || error.message); process.exitCode = 1; });
