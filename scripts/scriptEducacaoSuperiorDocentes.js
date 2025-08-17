import xlsx from 'xlsx';
import { PrismaClient } from '../prisma/educacao/generated/educacao-client/index.js';

const prisma = new PrismaClient();

// Dados fixos das dimensões conforme especificação
const ORGANIZACAO_ACADEMICA = [
  { codigo: '1', nome: 'Universidade' },
  { codigo: '2', nome: 'Centro Universitário' },
  { codigo: '3', nome: 'Faculdade' },
  { codigo: '4', nome: 'Instituto Federal de Educação, Ciência e Tecnologia' },
  { codigo: '5', nome: 'Centro Federal de Educação Tecnológica' },
];

const CATEGORIA_ADMINISTRATIVA = [
  { codigo: '1', nome: 'Pública Federal' },
  { codigo: '2', nome: 'Pública Estadual' },
  { codigo: '3', nome: 'Pública Municipal' },
  { codigo: '4', nome: 'Privada com fins lucrativos' },
  { codigo: '5', nome: 'Privada sem fins lucrativos' },
  { codigo: '6', nome: 'Privada - Particular em sentido estrito' },
  { codigo: '7', nome: 'Especial' },
  { codigo: '8', nome: 'Privada comunitária' },
  { codigo: '9', nome: 'Privada confessional' },
];

const FORMACAO_DOCENTE = [
  { codigo: '1', nome: 'Sem graduação' },
  { codigo: '2', nome: 'Com graduação' },
  { codigo: '3', nome: 'Com especialização' },
  { codigo: '4', nome: 'Com mestrado' },
  { codigo: '5', nome: 'Com doutorado' },
];

const REGIME_TRABALHO = [
  { codigo: '1', nome: 'Tempo integral' },
  { codigo: '2', nome: 'Tempo integral com dedicação exclusiva' },
  { codigo: '3', nome: 'Tempo integral sem dedicação exclusiva' },
  { codigo: '4', nome: 'Tempo parcial' },
  { codigo: '5', nome: 'Horista' },
];

// Mapeamento das colunas do Excel
const COLUNAS_EXCEL = {
  NOME_MUNICIPIO: 'G',
  CODIGO_MUNICIPIO: 'H',
  TP_ORGANIZACAO_ACADEMICA: 'N',
  TP_CATEGORIA_ADMINISTRATIVA: 'O',
  CODIGO_IES: 'R',
  NOME_IES: 'S',

  // Formação dos docentes
  QT_DOC_EX_SEM_GRAD: 'BC', // Sem graduação
  QT_DOC_EX_GRAD: 'BD', // Com graduação
  QT_DOC_EX_ESP: 'BE', // Com especialização
  QT_DOC_EX_MEST: 'BF', // Com mestrado
  QT_DOC_EX_DOUT: 'BG', // Com doutorado

  // Regime de trabalho
  QT_DOC_EX_INT: 'BH', // Tempo integral
  QT_DOC_EX_INT_DE: 'BI', // Tempo integral com dedicação exclusiva
  QT_DOC_EX_INT_SEM_DE: 'BJ', // Tempo integral sem dedicação exclusiva
  QT_DOC_EX_PARC: 'BK', // Tempo parcial
  QT_DOC_EX_HOR: 'BL', // Horista
};

/**
 * Insere valores fixos nas tabelas de dimensões
 */
async function inserirValoresFixos() {
  console.log('Inserindo valores fixos das dimensões...');

  // Inserir organizações acadêmicas
  for (const org of ORGANIZACAO_ACADEMICA) {
    await prisma.organizacaoAcademicaSuperior.upsert({
      where: { codigo: org.codigo },
      create: org,
      update: org,
    });
  }

  // Inserir categorias administrativas
  for (const cat of CATEGORIA_ADMINISTRATIVA) {
    await prisma.categoriaAdministrativaSuperior.upsert({
      where: { codigo: cat.codigo },
      create: cat,
      update: cat,
    });
  }

  // Inserir formações docentes
  for (const form of FORMACAO_DOCENTE) {
    await prisma.formacaoDocenteEnsinoSuperior.upsert({
      where: { codigo: form.codigo },
      create: form,
      update: form,
    });
  }

  // Inserir regimes de trabalho
  for (const regime of REGIME_TRABALHO) {
    await prisma.regimeDocenteEnsinoSuperior.upsert({
      where: { codigo: regime.codigo },
      create: regime,
      update: regime,
    });
  }

  console.log('Valores fixos inseridos com sucesso!');
}

/**
 * Converte coluna do Excel (ex: 'A', 'AA', 'BC') para índice numérico
 */
function colunaParaIndice(coluna) {
  let indice = 0;
  for (let i = 0; i < coluna.length; i++) {
    indice = indice * 26 + (coluna.charCodeAt(i) - 65 + 1);
  }
  return indice - 1;
}

/**
 * Obtém valor da célula do Excel usando a letra da coluna
 */
function obterValorCelula(linha, coluna) {
  const indice = colunaParaIndice(coluna);
  return linha[indice] || null;
}

/**
 * Garante que o município existe na base de dados
 */
async function garantirMunicipio(codigoMunicipio, nomeMunicipio) {
  if (!codigoMunicipio) return null;

  const municipio = await prisma.localidade.upsert({
    where: { id: parseInt(codigoMunicipio) },
    create: {
      id: parseInt(codigoMunicipio),
      nome: nomeMunicipio || `Município ${codigoMunicipio}`,
      tipo: 'municipio',
      uf: 'PI',
      codigo_ibge: codigoMunicipio.toString(),
    },
    update: {
      nome: nomeMunicipio || `Município ${codigoMunicipio}`,
    },
  });

  return municipio.id;
}

/**
 * Garante que a IES existe na base de dados
 */
async function garantirIES(codigoIes, nomeIes) {
  if (!codigoIes) return null;

  const ies = await prisma.instituicaoEnsinoSuperior.upsert({
    where: { codigo: codigoIes.toString() },
    create: {
      codigo: codigoIes.toString(),
      nome: nomeIes || `IES ${codigoIes}`,
    },
    update: {
      nome: nomeIes || `IES ${codigoIes}`,
    },
  });

  return ies.id;
}

/**
 * Obtém ID da dimensão por código
 */
async function obterIdDimensao(modelo, codigo) {
  if (!codigo) return null;

  const registro = await prisma[modelo].findUnique({
    where: { codigo: codigo.toString() },
  });

  return registro?.id || null;
}

/**
 * Insere ou atualiza registro na tabela de fatos
 */
async function inserirDadoEducacaoSuperior(dados) {
  const registroExistente = await prisma.dadoEducacaoSuperior.findFirst({
    where: {
      ano: dados.ano,
      tipo: dados.tipo,
      localidade_id: dados.localidade_id,
      organizacao_academica_id: dados.organizacao_academica_id,
      categoria_administrativa_id: dados.categoria_administrativa_id,
      instituicao_ensino_id: dados.instituicao_ensino_id,
      formacao_docente_id: dados.formacao_docente_id,
      regime_docente_id: dados.regime_docente_id,
    },
  });

  if (registroExistente) {
    return await prisma.dadoEducacaoSuperior.update({
      where: { id: registroExistente.id },
      data: { total: dados.total },
    });
  } else {
    return await prisma.dadoEducacaoSuperior.create({
      data: dados,
    });
  }
}

/**
 * Processa dados de IES (apenas categoria administrativa e organização acadêmica)
 */
async function processarDadosIES(linha, numeroLinha, ano) {
  try {
    const codigoIes = obterValorCelula(linha, COLUNAS_EXCEL.CODIGO_IES);
    const nomeIes = obterValorCelula(linha, COLUNAS_EXCEL.NOME_IES);
    const codigoMunicipio = obterValorCelula(
      linha,
      COLUNAS_EXCEL.CODIGO_MUNICIPIO,
    );
    const nomeMunicipio = obterValorCelula(linha, COLUNAS_EXCEL.NOME_MUNICIPIO);
    const tpOrgAcad = obterValorCelula(
      linha,
      COLUNAS_EXCEL.TP_ORGANIZACAO_ACADEMICA,
    );
    const tpCatAdm = obterValorCelula(
      linha,
      COLUNAS_EXCEL.TP_CATEGORIA_ADMINISTRATIVA,
    );

    if (!codigoIes) return; // Pular se não tem código da IES

    // Garantir que a IES existe e obter o ID
    const iesId = await garantirIES(codigoIes, nomeIes);

    // Garantir que o município existe
    const localidadeId = await garantirMunicipio(
      codigoMunicipio,
      nomeMunicipio,
    );

    const orgAcadId = await obterIdDimensao(
      'organizacaoAcademicaSuperior',
      tpOrgAcad,
    );
    const catAdmId = await obterIdDimensao(
      'categoriaAdministrativaSuperior',
      tpCatAdm,
    );

    // Inserir registro de IES com localidade
    await inserirDadoEducacaoSuperior({
      ano,
      tipo: 'ies',
      total: 1, // Contagem de IES
      localidade_id: localidadeId,
      cursos_id: null,
      faixa_etaria_id: null,
      organizacao_academica_id: orgAcadId,
      categoria_administrativa_id: catAdmId,
      modalidade_ensino_id: null,
      instituicao_ensino_id: iesId,
    });

    console.log(`Dados de IES processados para linha ${numeroLinha}`);
  } catch (error) {
    console.error(
      `Erro ao processar dados de IES na linha ${numeroLinha}:`,
      error.message,
    );
  }
}

/**
 * Processa dados de docentes (com todas as dimensões)
 */
async function processarDadosDocentes(linha, numeroLinha, ano) {
  try {
    const codigoIes = obterValorCelula(linha, COLUNAS_EXCEL.CODIGO_IES);
    const codigoMunicipio = obterValorCelula(
      linha,
      COLUNAS_EXCEL.CODIGO_MUNICIPIO,
    );
    const nomeMunicipio = obterValorCelula(linha, COLUNAS_EXCEL.NOME_MUNICIPIO);
    const tpOrgAcad = obterValorCelula(
      linha,
      COLUNAS_EXCEL.TP_ORGANIZACAO_ACADEMICA,
    );
    const tpCatAdm = obterValorCelula(
      linha,
      COLUNAS_EXCEL.TP_CATEGORIA_ADMINISTRATIVA,
    );

    if (!codigoIes) return; // Pular se não tem código da IES

    // Garantir que a IES existe e obter o ID
    const iesId = await garantirIES(codigoIes, null);

    // Garantir que o município existe
    const localidadeId = await garantirMunicipio(
      codigoMunicipio,
      nomeMunicipio,
    );

    const orgAcadId = await obterIdDimensao(
      'organizacaoAcademicaSuperior',
      tpOrgAcad,
    );
    const catAdmId = await obterIdDimensao(
      'categoriaAdministrativaSuperior',
      tpCatAdm,
    );

    // Dados de formação docente
    const formacoes = {
      1: obterValorCelula(linha, COLUNAS_EXCEL.QT_DOC_EX_SEM_GRAD), // Sem graduação
      2: obterValorCelula(linha, COLUNAS_EXCEL.QT_DOC_EX_GRAD), // Com graduação
      3: obterValorCelula(linha, COLUNAS_EXCEL.QT_DOC_EX_ESP), // Com especialização
      4: obterValorCelula(linha, COLUNAS_EXCEL.QT_DOC_EX_MEST), // Com mestrado
      5: obterValorCelula(linha, COLUNAS_EXCEL.QT_DOC_EX_DOUT), // Com doutorado
    };

    // Dados de regime de trabalho
    const regimes = {
      1: obterValorCelula(linha, COLUNAS_EXCEL.QT_DOC_EX_INT), // Tempo integral
      2: obterValorCelula(linha, COLUNAS_EXCEL.QT_DOC_EX_INT_DE), // Tempo integral com dedicação exclusiva
      3: obterValorCelula(linha, COLUNAS_EXCEL.QT_DOC_EX_INT_SEM_DE), // Tempo integral sem dedicação exclusiva
      4: obterValorCelula(linha, COLUNAS_EXCEL.QT_DOC_EX_PARC), // Tempo parcial
      5: obterValorCelula(linha, COLUNAS_EXCEL.QT_DOC_EX_HOR), // Horista
    };

    // Inserir registros para formação docente (tipo único, dados separados)
    for (const [formacaoId, quantidade] of Object.entries(formacoes)) {
      if (quantidade && quantidade > 0) {
        const formacaoDocenteId = await obterIdDimensao(
          'formacaoDocenteEnsinoSuperior',
          formacaoId,
        );

        await inserirDadoEducacaoSuperior({
          ano,
          tipo: 'docentes',
          total: parseFloat(quantidade),
          localidade_id: localidadeId,
          cursos_id: null,
          faixa_etaria_id: null,
          organizacao_academica_id: orgAcadId,
          categoria_administrativa_id: catAdmId,
          modalidade_ensino_id: null,
          instituicao_ensino_id: iesId,
          formacao_docente_id: formacaoDocenteId,
          regime_docente_id: null, // Null para formação
        });
      }
    }

    // Inserir registros para regime de trabalho (tipo único, dados separados)
    for (const [regimeId, quantidade] of Object.entries(regimes)) {
      if (quantidade && quantidade > 0) {
        const regimeDocenteId = await obterIdDimensao(
          'regimeDocenteEnsinoSuperior',
          regimeId,
        );

        await inserirDadoEducacaoSuperior({
          ano,
          tipo: 'docentes',
          total: parseFloat(quantidade),
          localidade_id: localidadeId,
          cursos_id: null,
          faixa_etaria_id: null,
          organizacao_academica_id: orgAcadId,
          categoria_administrativa_id: catAdmId,
          modalidade_ensino_id: null,
          instituicao_ensino_id: iesId,
          formacao_docente_id: null, // Null para regime
          regime_docente_id: regimeDocenteId,
        });
      }
    }

    console.log(`Dados de docentes processados para linha ${numeroLinha}`);
  } catch (error) {
    console.error(
      `Erro ao processar dados de docentes na linha ${numeroLinha}:`,
      error.message,
    );
  }
}

/**
 * Processa uma linha do Excel
 */
async function processarLinha(linha, numeroLinha, ano = 2023) {
  try {
    console.log(`Processando linha ${numeroLinha}...`);

    // Processar dados de IES
    await processarDadosIES(linha, numeroLinha, ano);

    // Processar dados de docentes
    await processarDadosDocentes(linha, numeroLinha, ano);

    console.log(`Linha ${numeroLinha} processada com sucesso`);
  } catch (error) {
    console.error(`Erro ao processar linha ${numeroLinha}:`, error.message);
  }
}

/**
 * Lê e processa arquivo Excel
 */
async function processarArquivoExcel(
  caminhoArquivo,
  nomePlanilha = null,
  ano = 2020,
) {
  console.log(`Lendo arquivo Excel: ${caminhoArquivo}`);

  try {
    // Ler arquivo Excel
    const workbook = xlsx.readFile(caminhoArquivo);
    const nomesPlanilhas = workbook.SheetNames;

    console.log(`Planilhas disponíveis: ${nomesPlanilhas.join(', ')}`);

    // Usar primeira planilha se não especificada
    const nomePlanilhaUsada = nomePlanilha || nomesPlanilhas[0];
    const planilha = workbook.Sheets[nomePlanilhaUsada];

    console.log(`Usando planilha: ${nomePlanilhaUsada}`);

    // Converter para array de arrays (preserva índices das colunas)
    const dados = xlsx.utils.sheet_to_json(planilha, { header: 1 });

    console.log(`Total de linhas encontradas: ${dados.length}`);

    // Processar cada linha (pular cabeçalho na linha 0)
    let linhasProcessadas = 0;
    for (let i = 1; i < dados.length; i++) {
      const linha = dados[i];

      // Pular linhas vazias
      if (!linha || linha.length === 0) continue;

      await processarLinha(linha, i + 1, ano);
      linhasProcessadas++;

      // Log a cada 100 linhas processadas
      if (linhasProcessadas % 100 === 0) {
        console.log(`${linhasProcessadas} linhas processadas...`);
      }
    }

    console.log(
      `Processamento concluído! ${linhasProcessadas} linhas processadas.`,
    );
  } catch (error) {
    console.error('Erro ao processar arquivo Excel:', error);
    throw error;
  }
}

// CONFIGURAÇÕES - MODIFIQUE AQUI
const CONFIGURACOES = {
  caminhoArquivo: 'C:/Users/Ramon Matheus/Desktop/educacaoSuperior/ies.xlsx', // Caminho do arquivo Excel
  nomePlanilha: null, // Nome da planilha (null = primeira planilha)
  ano: 2020, // Ano dos dados
};

/**
 * Função principal
 */
async function main() {
  try {
    console.log('=== SCRIPT EDUCAÇÃO SUPERIOR - DOCENTES E IES ===');
    console.log(`Caminho do arquivo: ${CONFIGURACOES.caminhoArquivo}`);
    console.log(`Ano dos dados: ${CONFIGURACOES.ano}`);

    // Verificar se o arquivo existe
    const fs = await import('fs');
    if (!fs.existsSync(CONFIGURACOES.caminhoArquivo)) {
      console.log('⚠️ Arquivo Excel não encontrado. Criando dados de teste...');

      // Criar dados de teste para simular o processamento
      await inserirValoresFixos();
      console.log('✅ Valores fixos inseridos com sucesso!');
      console.log(
        '📝 Para processar um arquivo real, coloque o arquivo Excel no caminho especificado.',
      );
      return;
    }

    // Inserir valores fixos das dimensões
    console.log('🔧 Inserindo valores fixos das dimensões...');
    await inserirValoresFixos();
    console.log('✅ Valores fixos inseridos com sucesso!');

    // Processar arquivo Excel
    console.log('📊 Processando arquivo Excel...');
    await processarArquivoExcel(
      CONFIGURACOES.caminhoArquivo,
      CONFIGURACOES.nomePlanilha,
      CONFIGURACOES.ano,
    );

    console.log('🎉 Processamento concluído com sucesso!');
  } catch (error) {
    console.error('❌ Erro durante execução:', error);
    process.exit(1);
  } finally {
    console.log('🔌 Desconectando do banco...');
    await prisma.$disconnect();
    console.log('✅ Desconectado do banco de dados');
  }
}

// Executar se chamado diretamente
console.log('🚀 Script carregado. Iniciando execução...');
main().catch(console.error);

export { inserirValoresFixos, main, processarArquivoExcel };
