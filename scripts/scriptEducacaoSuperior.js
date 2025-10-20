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

const MODALIDADE_ENSINO = [
  { codigo: '1', nome: 'Presencial' },
  { codigo: '2', nome: 'Curso a distância' },
];

const FAIXAS_ETARIAS = [
  { codigo: '1', nome: '0-17' },
  { codigo: '2', nome: '18-24' },
  { codigo: '3', nome: '25-29' },
  { codigo: '4', nome: '30-34' },
  { codigo: '5', nome: '35-39' },
  { codigo: '6', nome: '40-49' },
  { codigo: '7', nome: '50-59' },
  { codigo: '8', nome: '60+' },
];

// Mapeamento das colunas do Excel
// const COLUNAS_EXCEL = {
//   NOME_MUNICIPIO: 'G',
//   CODIGO_MUNICIPIO: 'H',
//   TP_ORGANIZACAO_ACADEMICA: 'K',
//   TP_CATEGORIA_ADMINISTRATIVA: 'L',
//   CODIGO_IES: 'N',
//   NOME_CURSO: 'O',
//   CODIGO_CURSO: 'P',
//   TP_MODALIDADE_ENSINO: 'AA',
//   QT_CURSOS: 'AC',
//   QT_MAT_0_17: 'CC',
//   QT_MAT_18_24: 'CD',
//   QT_MAT_25_29: 'CE',
//   QT_MAT_30_34: 'CF',
//   QT_MAT_35_39: 'CG',
//   QT_MAT_40_49: 'CH',
//   QT_MAT_50_59: 'CI',
//   QT_MAT_60_MAIS: 'CJ',
// };

//para 2023
const COLUNAS_EXCEL = {
  NOME_MUNICIPIO: 'G',
  CODIGO_MUNICIPIO: 'H',
  TP_ORGANIZACAO_ACADEMICA: 'K',
  TP_CATEGORIA_ADMINISTRATIVA: 'M',
  CODIGO_IES: 'P',
  NOME_CURSO: 'Q',
  CODIGO_CURSO: 'R',
  TP_MODALIDADE_ENSINO: 'AC',
  QT_CURSOS: 'AE',
  QT_MAT_0_17: 'CE',
  QT_MAT_18_24: 'CF',
  QT_MAT_25_29: 'CG',
  QT_MAT_30_34: 'CH',
  QT_MAT_35_39: 'CI',
  QT_MAT_40_49: 'CJ',
  QT_MAT_50_59: 'CK',
  QT_MAT_60_MAIS: 'CL',
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

  // Inserir modalidades de ensino
  for (const mod of MODALIDADE_ENSINO) {
    await prisma.modalidadeEnsinoSuperior.upsert({
      where: { codigo: mod.codigo },
      create: mod,
      update: mod,
    });
  }

  // Inserir faixas etárias
  for (const faixa of FAIXAS_ETARIAS) {
    await prisma.faixaEtariaSuperior.upsert({
      where: { codigo: faixa.codigo },
      create: faixa,
      update: faixa,
    });
  }

  console.log('Valores fixos inseridos com sucesso!');
}

/**
 * Converte coluna do Excel (ex: 'A', 'AA', 'CC') para índice numérico
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
 * Garante que o curso existe na base de dados
 */
async function garantirCurso(codigoIes, codigoCurso, nomeCurso) {
  if (!codigoIes || !codigoCurso) return null;

  // Verificar se já existe
  const cursoExistente = await prisma.cursosSuperior.findFirst({
    where: {
      codigo_ies: parseInt(codigoIes),
      codigo: codigoCurso.toString(),
    },
  });

  let curso;
  if (cursoExistente) {
    curso = await prisma.cursosSuperior.update({
      where: { id: cursoExistente.id },
      data: {
        nome: nomeCurso || `Curso ${codigoCurso}`,
      },
    });
  } else {
    curso = await prisma.cursosSuperior.create({
      data: {
        codigo_ies: parseInt(codigoIes),
        codigo: codigoCurso.toString(),
        nome: nomeCurso || `Curso ${codigoCurso}`,
      },
    });
  }

  return curso.id;
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
      cursos_id: dados.cursos_id,
      faixa_etaria_id: dados.faixa_etaria_id,
      organizacao_academica_id: dados.organizacao_academica_id,
      categoria_administrativa_id: dados.categoria_administrativa_id,
      modalidade_ensino_id: dados.modalidade_ensino_id,
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
 * Processa uma linha do Excel
 */
async function processarLinha(linha, numeroLinha, ano = 2023) {
  try {
    console.log(`Processando linha ${numeroLinha}...`);

    // Extrair dados da linha
    const nomeMunicipio = obterValorCelula(linha, COLUNAS_EXCEL.NOME_MUNICIPIO);
    const codigoMunicipio = obterValorCelula(
      linha,
      COLUNAS_EXCEL.CODIGO_MUNICIPIO,
    );
    const codigoIes = obterValorCelula(linha, COLUNAS_EXCEL.CODIGO_IES);
    const nomeCurso = obterValorCelula(linha, COLUNAS_EXCEL.NOME_CURSO);
    const codigoCurso = obterValorCelula(linha, COLUNAS_EXCEL.CODIGO_CURSO);
    const tpOrgAcad = obterValorCelula(
      linha,
      COLUNAS_EXCEL.TP_ORGANIZACAO_ACADEMICA,
    );
    const tpCatAdm = obterValorCelula(
      linha,
      COLUNAS_EXCEL.TP_CATEGORIA_ADMINISTRATIVA,
    );
    const tpModalidade = obterValorCelula(
      linha,
      COLUNAS_EXCEL.TP_MODALIDADE_ENSINO,
    );
    const qtCursos = obterValorCelula(linha, COLUNAS_EXCEL.QT_CURSOS);

    // Quantidades de matrículas por faixa etária
    const matriculas = {
      1: obterValorCelula(linha, COLUNAS_EXCEL.QT_MAT_0_17),
      2: obterValorCelula(linha, COLUNAS_EXCEL.QT_MAT_18_24),
      3: obterValorCelula(linha, COLUNAS_EXCEL.QT_MAT_25_29),
      4: obterValorCelula(linha, COLUNAS_EXCEL.QT_MAT_30_34),
      5: obterValorCelula(linha, COLUNAS_EXCEL.QT_MAT_35_39),
      6: obterValorCelula(linha, COLUNAS_EXCEL.QT_MAT_40_49),
      7: obterValorCelula(linha, COLUNAS_EXCEL.QT_MAT_50_59),
      8: obterValorCelula(linha, COLUNAS_EXCEL.QT_MAT_60_MAIS),
    };

    // Garantir dimensões na base
    const localidadeId = await garantirMunicipio(
      codigoMunicipio,
      nomeMunicipio,
    );
    const cursosId = await garantirCurso(codigoIes, codigoCurso, nomeCurso);
    const orgAcadId = await obterIdDimensao(
      'organizacaoAcademicaSuperior',
      tpOrgAcad,
    );
    const catAdmId = await obterIdDimensao(
      'categoriaAdministrativaSuperior',
      tpCatAdm,
    );
    const modalidadeId = await obterIdDimensao(
      'modalidadeEnsinoSuperior',
      tpModalidade,
    );

    // Inserir registro para quantidade de cursos
    if (qtCursos && qtCursos > 0) {
      await inserirDadoEducacaoSuperior({
        ano,
        tipo: 'cursos',
        total: parseFloat(qtCursos),
        localidade_id: localidadeId,
        cursos_id: cursosId,
        faixa_etaria_id: null,
        organizacao_academica_id: orgAcadId,
        categoria_administrativa_id: catAdmId,
        modalidade_ensino_id: modalidadeId,
      });
    }

    // Inserir registros para matrículas por faixa etária
    for (const [faixaEtariaId, quantidade] of Object.entries(matriculas)) {
      if (quantidade && quantidade > 0) {
        const faixaId = await obterIdDimensao(
          'faixaEtariaSuperior',
          faixaEtariaId,
        );

        await inserirDadoEducacaoSuperior({
          ano,
          tipo: 'matriculas',
          total: parseFloat(quantidade),
          localidade_id: localidadeId,
          cursos_id: cursosId,
          faixa_etaria_id: faixaId,
          organizacao_academica_id: orgAcadId,
          categoria_administrativa_id: catAdmId,
          modalidade_ensino_id: modalidadeId,
        });
      }
    }

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
  ano = 2023,
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
  caminhoArquivo:
    'C:/Users/Ramon Matheus/Desktop/educacaoSuperior/cursos2023.xlsx', // Caminho do arquivo Excel
  nomePlanilha: null, // Nome da planilha (null = primeira planilha)
  ano: 2023, // Ano dos dados
};

/**
 * Função principal
 */
async function main() {
  try {
    console.log('=== SCRIPT EDUCAÇÃO SUPERIOR ===');
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

