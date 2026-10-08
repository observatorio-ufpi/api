// Importa os 19 documentos de rreo_lote_importacao_2007_2024_v2.json que estao ausentes do banco.
// Uso: node importar_19_municipios_faltantes.cjs            (dry-run, nao grava nada)
//      node importar_19_municipios_faltantes.cjs --apply    (grava de verdade)
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

const JSON_PATH = 'C:/Users/ACER/Documents/observatorio/correcao-rreo/fontes/validação/validação/rreo_lote_importacao_2007_2024_v2.json';

// categoria (chave em entidadesRelacionadas) -> { delegate, campos (na ordem de valoresNaOrdemDoDocumento) }
const CATEGORIAS_0708 = {
  receita: { delegate: 'receita0708', campos: ['previsaoAtualizada', 'receitasRealizadasNoAno', 'receitasRealizadasPercentual'], previsaoInicial0: true },
  despesa: { delegate: 'despesa0708', campos: ['dotacaoAtualizada', 'despesasEmpenhadasNoAno', 'despesasEmpenhadasPercentual'], dotacaoInicial0: true },
  minimo60PorCentoFundeb: { delegate: 'minimo60PorCentoFundeb0708', campos: ['despesasRealizadasPercentual'] },
  deducoesAdicoesParaFinsLimiteConstitucional: { delegate: 'deducoesAdicoesParaFinsLimiteConstitucional0708', campos: ['valor'] },
  informacoesControleFinanceiro: { delegate: 'informacoesControleFinanceiro0708', campos: ['saldoAteBimeste', 'cancelado'] },
  fluxoFinanceiroRecursosFundeb: { delegate: 'fluxoFinanceiroRecursosFundeb0708', campos: ['valor'] },
};

const CATEGORIAS_23 = {
  receita: { delegate: 'receita23', campos: ['previsaoAtualizada', 'receitasRealizadasAteBimestre'] },
  despesa: { delegate: 'despesa23', campos: ['dotacaoAtualizada', 'despesasEmpenhadasAteBimestre', 'despesasLiquidadasAteBimestre', 'despesasPagasAteBimestre', 'inscritosEmRestosAPagarNaoProcessados'] },
  recursosRecebidosNaoUtilizados: { delegate: 'recursosRecebidosNaoUtilizados23', campos: ['valor'] },
  despesasCusteadasFundebExercicio: { delegate: 'despesasCusteadasFundebExercicio23', campos: ['despesasEmpenhadasAteBimestre', 'despesasLiquidadasAteBimestre', 'despesasPagasAteBimestre', 'inscritosEmRestosAPagarNaoProcessados', 'inscritasEmRestosAPagarSemCaixa', 'despesasSuperiorAoTotalDasReceitas'] },
  indicadoresArt212: { delegate: 'indicadores23Art212', campos: ['valorExigido', 'valorAplicado', 'valorConsideradoAposDeducoes', 'percentualAplicado'] },
  indicadorArt25Maximo10PorCentoDeSuperavit: { delegate: 'indicador23Art25Maximo10PorCentoDeSuperavit', campos: ['valorMaximoPermitido', 'valorNaoAplicado', 'valorNaoAplicadoAposAjuste', 'valorNaoAplicadoExcedenteMaximoPermitido', 'percentualNaoAplicado'] },
  indicadorArt25AplicacaoSuperavit: { delegate: 'indicador23Art25AplicacaoSuperavit', campos: ['valorSuperavitExercicioAnterior', 'valorNaoAplicadoExercicioAnterior', 'valorSuperavitAplicadoAtePrimeiroQuadrimestre', 'valorAplicadoAtePrimeiroQuadrimestre', 'valorTotalSuperavitNaoAplicadoAteFinalExercicio', 'valorAplicadoAtePrimeiroQuadrimestreLimiteConstitucional'] },
  apuracaoDespesasLimiteMinimoConstitucional: { delegate: 'apuracaoDespesasLimiteMinimoConstitucional23', campos: ['valor'] },
  apuracaoLimiteMinimoConstitucional: { delegate: 'apuracaoLimiteMinimoConstitucional23', campos: ['valorExigido', 'valorAplicado', 'percentualAplicado'] },
  restosAPagarParaCumprimentoDoLimite: { delegate: 'restosAPagarParaCumprimentoDoLimite23', campos: ['saldoInicial', 'rpLiquidados', 'rpPagos', 'rpCancelados', 'saldoFinal'] },
  controleDisponibilidadeFinanceiraEConciliacaoBancaria: { delegate: 'controleDisponibilidadeFinanceiraEConciliacaoBancaria23', campos: ['fundeb', 'salarioEducacao'] },
  emendaConstitucionalExclusivoSiope: { delegate: 'emendaConstitucionalExclusivoSiope23', campos: ['valorExigido', 'valorAplicado', 'diferencaCompensacao'] },
};

const MODELO_PRISMA_PARA_CONFIG = {
  RelatorioMunicipal0708: { relatorioDelegate: 'relatorioMunicipal0708', categorias: CATEGORIAS_0708 },
  RelatorioMunicipal23: { relatorioDelegate: 'relatorioMunicipal23', categorias: CATEGORIAS_23 },
};

async function resolverClassificacaoGeografica(relatorioDelegate, codigoMunicipio) {
  const existente = await prisma[relatorioDelegate].findFirst({ where: { codigoMunicipio } });
  if (existente) {
    return {
      territorioDeDesenvolvimentoMunicipio: existente.territorioDeDesenvolvimentoMunicipio,
      aglomeradoMunicipio: existente.aglomeradoMunicipio,
      gerenciaRegionalMunicipio: existente.gerenciaRegionalMunicipio,
      populacaoMunicipio: existente.populacaoMunicipio,
      faixaPopulacionalMunicipio: existente.faixaPopulacionalMunicipio,
      fonte: `${relatorioDelegate}/mesmo periodo, ano=${existente.ano}`,
    };
  }
  // procura em qualquer outro periodo
  const outrosModelos = ['relatorioMunicipal23', 'relatorioMunicipal21', 'relatorioMunicipal1920', 'relatorioMunicipal1718', 'relatorioMunicipal1516', 'relatorioMunicipal1314', 'relatorioMunicipal0912', 'relatorioMunicipal0708', 'relatorioMunicipal06'];
  for (const modelo of outrosModelos) {
    const r = await prisma[modelo].findFirst({ where: { codigoMunicipio } });
    if (r) {
      return {
        territorioDeDesenvolvimentoMunicipio: r.territorioDeDesenvolvimentoMunicipio,
        aglomeradoMunicipio: r.aglomeradoMunicipio,
        gerenciaRegionalMunicipio: r.gerenciaRegionalMunicipio,
        populacaoMunicipio: r.populacaoMunicipio,
        faixaPopulacionalMunicipio: r.faixaPopulacionalMunicipio,
        fonte: `${modelo}/outro periodo, ano=${r.ano}`,
      };
    }
  }
  return null;
}

async function main() {
  const data = JSON.parse(fs.readFileSync(JSON_PATH, 'utf8'));
  const plano = [];
  const avisos = [];

  for (const doc of data.documentos) {
    const { modeloPrisma, ano, codigoMunicipio, nomeMunicipio } = doc.registroPrincipal;
    const config = MODELO_PRISMA_PARA_CONFIG[modeloPrisma];
    if (!config) { avisos.push(`modeloPrisma desconhecido: ${modeloPrisma} (${nomeMunicipio})`); continue; }

    const codigo6 = codigoMunicipio.slice(0, 6);
    const existeRelatorio = await prisma[config.relatorioDelegate].findFirst({ where: { ano, codigoMunicipio: codigo6 } });
    if (existeRelatorio) {
      avisos.push(`${nomeMunicipio}/${ano}: JA EXISTE relatorio (id=${existeRelatorio.id}) - PULANDO`);
      continue;
    }

    const classificacao = await resolverClassificacaoGeografica(config.relatorioDelegate, codigo6);
    if (!classificacao) {
      avisos.push(`${nomeMunicipio}/${ano}: NAO achei classificacao geografica em nenhum periodo - BLOQUEADO`);
      continue;
    }

    const relatorioPlano = {
      nomeMunicipio,
      ano,
      codigoMunicipio: codigo6,
      modeloPrisma,
      relatorioDelegate: config.relatorioDelegate,
      dadosRelatorio: {
        ano,
        codigoMunicipio: codigo6,
        nomeMunicipio,
        ...classificacao,
      },
      classificacaoFonte: classificacao.fonte,
      filhos: [],
    };
    delete relatorioPlano.dadosRelatorio.fonte;

    for (const [categoria, itens] of Object.entries(doc.entidadesRelacionadas)) {
      const catConfig = config.categorias[categoria];
      if (!catConfig) { avisos.push(`${nomeMunicipio}/${ano}: categoria desconhecida "${categoria}"`); continue; }
      for (const item of itens) {
        const valores = item.valoresNaOrdemDoDocumento;
        if (valores.length !== catConfig.campos.length) {
          avisos.push(`${nomeMunicipio}/${ano}/${categoria}/${item.tipoEnumBanco}: esperava ${catConfig.campos.length} valores, veio ${valores.length} - PULANDO ITEM`);
          continue;
        }
        const dados = {};
        catConfig.campos.forEach((campo, i) => { dados[campo] = valores[i]; });
        if (catConfig.previsaoInicial0) dados.previsaoInicial = 0;
        if (catConfig.dotacaoInicial0) dados.dotacaoInicial = 0;
        relatorioPlano.filhos.push({
          categoria,
          delegate: catConfig.delegate,
          tipo: item.tipoEnumBanco,
          codigoLinhaRreo: item.codigoLinhaRreo,
          dados,
        });
      }
    }

    plano.push(relatorioPlano);
  }

  console.log(`\n=== ${APPLY ? 'APLICANDO' : 'DRY-RUN'} ===`);
  console.log(`Documentos no JSON: ${data.documentos.length}`);
  console.log(`Relatorios a criar: ${plano.length}`);
  console.log(`Total de linhas filhas a criar: ${plano.reduce((s, p) => s + p.filhos.length, 0)}`);
  console.log(`\nAvisos (${avisos.length}):`);
  avisos.forEach(a => console.log('  - ' + a));

  console.log('\nResumo por município:');
  for (const p of plano) {
    console.log(`  ${p.nomeMunicipio} / ${p.ano} (${p.modeloPrisma}) - ${p.filhos.length} linhas - classificação de: ${p.classificacaoFonte}`);
  }

  const relatorio = {
    geradoEm: new Date().toISOString(),
    modo: APPLY ? 'APLICADO' : 'DRY_RUN',
    documentosNoJson: data.documentos.length,
    relatoriosCriados: plano.length,
    totalLinhasFilhas: plano.reduce((s, p) => s + p.filhos.length, 0),
    avisos,
    plano: plano.map(p => ({ nomeMunicipio: p.nomeMunicipio, ano: p.ano, codigoMunicipio: p.codigoMunicipio, modeloPrisma: p.modeloPrisma, classificacaoFonte: p.classificacaoFonte, numFilhos: p.filhos.length })),
  };

  if (APPLY) {
    for (const p of plano) {
      const criado = await prisma[p.relatorioDelegate].create({ data: p.dadosRelatorio });
      for (const filho of p.filhos) {
        await prisma[filho.delegate].create({ data: { ...filho.dados, tipo: filho.tipo, relatorioMunicialId: criado.id } });
      }
      console.log(`  OK: ${p.nomeMunicipio}/${p.ano} -> relatorioId=${criado.id}, ${p.filhos.length} linhas criadas`);
    }
    fs.writeFileSync(path.join(__dirname, '..', 'reports', 'aplicacao_19_municipios_faltantes.json'), JSON.stringify(relatorio, null, 2));
    console.log('\nRelatório salvo em api/reports/aplicacao_19_municipios_faltantes.json');
  } else {
    fs.writeFileSync(path.join(__dirname, '..', 'reports', 'dry_run_19_municipios_faltantes.json'), JSON.stringify({ ...relatorio, planoCompleto: plano }, null, 2));
    console.log('\nDry-run salvo em api/reports/dry_run_19_municipios_faltantes.json (inclui plano completo com todos os valores)');
  }

  await prisma.$disconnect();
}
main().catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
