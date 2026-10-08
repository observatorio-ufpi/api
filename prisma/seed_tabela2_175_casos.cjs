/* Tabela 2 (Transferências Constitucionais) - correção dos 175 casos de
   valores trocados entre ICMS, ITR e IPVA em 2017 (fundo verde no
   Tabelão corrigido, aba T2). Cada linha só atualiza as colunas
   explicitamente marcadas para aquele município (nem sempre as 3).
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
  return nome
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
}
const COLUMN_TO_ENUM = {
  'Cota parte ICMS': 'COTA_PARTE_ICMS',
  'Cotaparte ITR': 'COTA_PARTE_ITR',
  'Cotaparte IPVA': 'COTA_PARTE_IPVA',
};

async function main() {
  const envFile = arg('env'); const reportFile = arg('report'); const apply = process.argv.includes('--apply');
  const casesFile = arg('cases'); const municipiosFile = arg('municipios');
  if (!envFile || !reportFile || !casesFile || !municipiosFile) throw new Error('Use --env, --report, --cases e --municipios.');
  loadEnv(envFile);
  const { PrismaClient } = require('@prisma/client');
  const prisma = new PrismaClient();

  const municipiosList = JSON.parse(fs.readFileSync(municipiosFile, 'utf8'));
  const byNormalized = new Map(municipiosList.map((m) => [normalizar(m.nome), m]));

  const cases = JSON.parse(fs.readFileSync(casesFile, 'utf8'));
  const plano = []; const erros = [];
  try {
    for (const item of cases) {
      const municipioNome = item.valores['Município'];
      const municipio = byNormalized.get(normalizar(municipioNome));
      if (!municipio) { erros.push({ municipio: municipioNome, mensagem: 'MUNICIPIO_NAO_ENCONTRADO_NO_MAPEAMENTO' }); continue; }
      const codigoMunicipio = municipio.codigoIbge.slice(0, -1);
      const relatorio = await prisma.relatorioMunicipal1718.findFirst({ where: { ano: '2017', codigoMunicipio }, select: { id: true } });
      if (!relatorio) { erros.push({ municipio: municipioNome, codigoMunicipio, mensagem: 'RELATORIO_NAO_ENCONTRADO' }); continue; }
      for (const coluna of item.colunasMarcadas) {
        const tipo = COLUMN_TO_ENUM[coluna];
        if (!tipo) { erros.push({ municipio: municipioNome, coluna, mensagem: 'COLUNA_SEM_MAPEAMENTO' }); continue; }
        const valorCorreto = item.valores[coluna];
        const existente = await prisma.receita1718.findFirst({ where: { relatorioMunicialId: relatorio.id, tipo } });
        if (!existente) { erros.push({ municipio: municipioNome, tipo, mensagem: 'LINHA_AUSENTE' }); continue; }
        plano.push({ municipio: municipioNome, codigoMunicipio, relatorioId: relatorio.id, tipo, antes: existente.receitasRealizadaAteBimestre, depois: valorCorreto, id: existente.id });
      }
    }
    if (apply && plano.length) {
      const BATCH = 100;
      for (let i = 0; i < plano.length; i += BATCH) {
        const slice = plano.slice(i, i + BATCH);
        await prisma.$transaction(slice.map((item) => prisma.receita1718.update({ where: { id: item.id }, data: { receitasRealizadaAteBimestre: item.depois } })));
      }
    }
  } finally { await prisma.$disconnect(); }
  const resultado = { geradoEm: new Date().toISOString(), modo: apply ? 'APLICADO' : 'DRY_RUN', fonte: 'Tabelão corrigido (aba T2, linhas verdes) - 175 casos de 2017', casosNoArquivo: cases.length, operacoes: plano.length, erros, plano };
  fs.mkdirSync(path.dirname(reportFile), { recursive: true });
  fs.writeFileSync(reportFile, JSON.stringify(resultado, null, 2), 'utf8');
  console.log(JSON.stringify({ modo: resultado.modo, casosNoArquivo: cases.length, operacoes: plano.length, erros: erros.length }, null, 2));
  if (erros.length) console.log('ERROS:', JSON.stringify(erros, null, 2));
}
main().catch((e) => { console.error(e.stack || e.message); process.exitCode = 1; });
