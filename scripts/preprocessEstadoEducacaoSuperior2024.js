import { PrismaClient } from '../prisma/educacao/generated/educacao-client/index.js';

const prisma = new PrismaClient();

// ID do estado do Piauí
const ESTADO_PIAUI_ID = 22;
const ANOS_PROCESSAMENTO = [2020, 2021, 2022, 2023];

/**
 * Script para pré-processar dados agregados do estado do Piauí para educação superior
 *
 * Este script soma todos os dados das cidades do Piauí para criar registros
 * agregados do estado, evitando consultas lentas nas APIs.
 *
 * Tipos de dados processados:
 * - matriculas
 * - ies (instituições de ensino superior)
 * - cursos
 * - docentes
 *
 * Anos processados: 2020, 2021, 2022, 2023
 */

/**
 * Obtém todas as cidades do Piauí
 */
async function obterCidadesPiaui() {
  const cidades = await prisma.localidade.findMany({
    where: {
      tipo: 'municipio',
      uf: 'PI',
    },
    select: { id: true },
  });

  console.log(`📍 Encontradas ${cidades.length} cidades do Piauí`);
  return cidades.map((c) => c.id);
}

/**
 * Garante que o registro do estado existe
 */
async function garantirEstadoPiaui() {
  const estado = await prisma.localidade.upsert({
    where: { id: ESTADO_PIAUI_ID },
    create: {
      id: ESTADO_PIAUI_ID,
      nome: 'Piauí',
      tipo: 'estado',
      uf: 'PI',
      codigo_ibge: '22',
    },
    update: {
      nome: 'Piauí',
      tipo: 'estado',
    },
  });

  console.log(`🏛️ Estado garantido: ${estado.nome} (ID: ${estado.id})`);
  return estado.id;
}

/**
 * Remove dados antigos do estado para os anos especificados
 */
async function limparDadosEstadoAntigos() {
  const deletados = await prisma.dadoEducacaoSuperior.deleteMany({
    where: {
      ano: { in: ANOS_PROCESSAMENTO },
      localidade_id: ESTADO_PIAUI_ID,
    },
  });

  console.log(`🗑️ Removidos ${deletados.count} registros antigos do estado`);
}

/**
 * Processa dados de docentes - requer lógica especial baseada no higher.service.ts
 */
async function processarDocentes(cidadesIds, ano) {
  console.log(`👨‍🏫 Processando docentes para ${ano}...`);

  // Buscar dados de docentes das cidades
  const dadosCidades = await prisma.dadoEducacaoSuperior.findMany({
    where: {
      ano: ano,
      tipo: 'docentes',
      localidade_id: { in: cidadesIds },
    },
    include: {
      cursos: true,
      faixa_etaria: true,
      organizacao_academica: true,
      categoria_administrativa: true,
      modalidade_ensino: true,
      instituicao_ensino: true,
      formacao_docente: true,
      regime_docente: true,
    },
  });

  console.log(
    `📊 Encontrados ${dadosCidades.length} registros de docentes das cidades para ${ano}`,
  );

  // Agrupar dados seguindo a lógica do higher.service.ts
  const grupos = new Map();

  dadosCidades.forEach((item) => {
    // Para docentes, usar apenas registros com valor total correto
    // Baseado na lógica do queryTeacherData
    const isValidTotal =
      item.regime_docente_id === null && item.formacao_docente_id === null;

    if (!isValidTotal) return;

    const chave = [
      item.organizacao_academica?.id || 'null',
      item.categoria_administrativa?.id || 'null',
      item.modalidade_ensino?.id || 'null',
      item.faixa_etaria?.id || 'null',
    ].join('|');

    if (!grupos.has(chave)) {
      grupos.set(chave, {
        organizacao_academica_id: item.organizacao_academica?.id || null,
        categoria_administrativa_id: item.categoria_administrativa?.id || null,
        modalidade_ensino_id: item.modalidade_ensino?.id || null,
        faixa_etaria_id: item.faixa_etaria?.id || null,
        total: 0,
      });
    }

    grupos.get(chave).total += Number(item.total);
  });

  // Inserir registros agregados
  let contadorInseridos = 0;
  for (const chave of grupos.keys()) {
    const grupo = grupos.get(chave);
    if (grupo.total > 0) {
      await prisma.dadoEducacaoSuperior.create({
        data: {
          ano: ano,
          tipo: 'docentes',
          total: grupo.total,
          localidade_id: ESTADO_PIAUI_ID,
          cursos_id: null,
          faixa_etaria_id: grupo.faixa_etaria_id,
          organizacao_academica_id: grupo.organizacao_academica_id,
          categoria_administrativa_id: grupo.categoria_administrativa_id,
          modalidade_ensino_id: grupo.modalidade_ensino_id,
          instituicao_ensino_id: null,
          formacao_docente_id: null, // Para totais gerais
          regime_docente_id: null, // Para totais gerais
        },
      });
      contadorInseridos++;
    }
  }

  // Inserir registros específicos para work_regime (regime de trabalho)
  const dadosRegime = dadosCidades.filter(
    (item) =>
      item.regime_docente_id &&
      item.regime_docente_id >= 2 &&
      item.formacao_docente_id === null,
  );

  const gruposRegime = new Map();
  dadosRegime.forEach((item) => {
    const chave = [
      item.regime_docente?.id || 'null',
      item.organizacao_academica?.id || 'null',
      item.categoria_administrativa?.id || 'null',
    ].join('|');

    if (!gruposRegime.has(chave)) {
      gruposRegime.set(chave, {
        regime_docente_id: item.regime_docente?.id || null,
        organizacao_academica_id: item.organizacao_academica?.id || null,
        categoria_administrativa_id: item.categoria_administrativa?.id || null,
        total: 0,
      });
    }

    gruposRegime.get(chave).total += Number(item.total);
  });

  for (const chave of gruposRegime.keys()) {
    const grupo = gruposRegime.get(chave);
    if (grupo.total > 0) {
      await prisma.dadoEducacaoSuperior.create({
        data: {
          ano: ano,
          tipo: 'docentes',
          total: grupo.total,
          localidade_id: ESTADO_PIAUI_ID,
          cursos_id: null,
          faixa_etaria_id: null,
          organizacao_academica_id: grupo.organizacao_academica_id,
          categoria_administrativa_id: grupo.categoria_administrativa_id,
          modalidade_ensino_id: null,
          instituicao_ensino_id: null,
          formacao_docente_id: null,
          regime_docente_id: grupo.regime_docente_id,
        },
      });
      contadorInseridos++;
    }
  }

  // Inserir registros específicos para initial_training (formação docente)
  const dadosFormacao = dadosCidades.filter(
    (item) => item.formacao_docente_id && item.regime_docente_id === null,
  );

  const gruposFormacao = new Map();
  dadosFormacao.forEach((item) => {
    const chave = [
      item.formacao_docente?.id || 'null',
      item.organizacao_academica?.id || 'null',
      item.categoria_administrativa?.id || 'null',
    ].join('|');

    if (!gruposFormacao.has(chave)) {
      gruposFormacao.set(chave, {
        formacao_docente_id: item.formacao_docente?.id || null,
        organizacao_academica_id: item.organizacao_academica?.id || null,
        categoria_administrativa_id: item.categoria_administrativa?.id || null,
        total: 0,
      });
    }

    gruposFormacao.get(chave).total += Number(item.total);
  });

  for (const chave of gruposFormacao.keys()) {
    const grupo = gruposFormacao.get(chave);
    if (grupo.total > 0) {
      await prisma.dadoEducacaoSuperior.create({
        data: {
          ano: ano,
          tipo: 'docentes',
          total: grupo.total,
          localidade_id: ESTADO_PIAUI_ID,
          cursos_id: null,
          faixa_etaria_id: null,
          organizacao_academica_id: grupo.organizacao_academica_id,
          categoria_administrativa_id: grupo.categoria_administrativa_id,
          modalidade_ensino_id: null,
          instituicao_ensino_id: null,
          formacao_docente_id: grupo.formacao_docente_id,
          regime_docente_id: null,
        },
      });
      contadorInseridos++;
    }
  }

  console.log(
    `✅ Docentes processados para ${ano}: ${contadorInseridos} registros criados`,
  );
}

/**
 * Processa outros tipos de dados (matriculas, ies, cursos)
 */
async function processarOutrosTipos(cidadesIds, tipo, ano) {
  console.log(`📈 Processando ${tipo} para ${ano}...`);

  // Buscar dados das cidades para o tipo específico
  const dadosCidades = await prisma.dadoEducacaoSuperior.findMany({
    where: {
      ano: ano,
      tipo: tipo,
      localidade_id: { in: cidadesIds },
    },
    include: {
      cursos: true,
      faixa_etaria: true,
      organizacao_academica: true,
      categoria_administrativa: true,
      modalidade_ensino: true,
      instituicao_ensino: true,
    },
  });

  console.log(
    `📊 Encontrados ${dadosCidades.length} registros de ${tipo} das cidades para ${ano}`,
  );

  // Agrupar por dimensões
  const grupos = new Map();

  dadosCidades.forEach((item) => {
    // Criar chave baseada nas dimensões disponíveis
    const chave = [
      item.organizacao_academica?.id || 'null',
      item.categoria_administrativa?.id || 'null',
      item.modalidade_ensino?.id || 'null',
      item.faixa_etaria?.id || 'null',
      item.cursos?.id || 'null',
    ].join('|');

    if (!grupos.has(chave)) {
      grupos.set(chave, {
        organizacao_academica_id: item.organizacao_academica?.id || null,
        categoria_administrativa_id: item.categoria_administrativa?.id || null,
        modalidade_ensino_id: item.modalidade_ensino?.id || null,
        faixa_etaria_id: item.faixa_etaria?.id || null,
        cursos_id: item.cursos?.id || null,
        total: 0,
      });
    }

    grupos.get(chave).total += Number(item.total);
  });

  // Inserir registros agregados
  let contadorInseridos = 0;
  for (const chave of grupos.keys()) {
    const grupo = grupos.get(chave);
    if (grupo.total > 0) {
      await prisma.dadoEducacaoSuperior.create({
        data: {
          ano: ano,
          tipo: tipo,
          total: grupo.total,
          localidade_id: ESTADO_PIAUI_ID,
          cursos_id: grupo.cursos_id,
          faixa_etaria_id: grupo.faixa_etaria_id,
          organizacao_academica_id: grupo.organizacao_academica_id,
          categoria_administrativa_id: grupo.categoria_administrativa_id,
          modalidade_ensino_id: grupo.modalidade_ensino_id,
          instituicao_ensino_id: null,
          formacao_docente_id: null,
          regime_docente_id: null,
        },
      });
      contadorInseridos++;
    }
  }

  console.log(
    `✅ ${tipo} processado para ${ano}: ${contadorInseridos} registros criados`,
  );
}

/**
 * Processa um ano específico
 */
async function processarAno(cidadesIds, ano) {
  console.log(`\n📅 === PROCESSANDO ANO ${ano} ===`);

  // Verificar se existem dados das cidades para o ano
  const dadosExistentes = await prisma.dadoEducacaoSuperior.count({
    where: {
      ano: ano,
      localidade_id: { in: cidadesIds },
    },
  });

  if (dadosExistentes === 0) {
    console.log(`⚠️ Nenhum dado das cidades encontrado para ${ano}`);
    return;
  }

  console.log(
    `📊 Encontrados ${dadosExistentes} registros das cidades para ${ano}`,
  );

  // Processar cada tipo
  await processarOutrosTipos(cidadesIds, 'matriculas', ano);
  await processarOutrosTipos(cidadesIds, 'ies', ano);
  await processarOutrosTipos(cidadesIds, 'cursos', ano);
  await processarDocentes(cidadesIds, ano);

  console.log(`✅ Ano ${ano} processado com sucesso!`);
}

/**
 * Função principal
 */
async function main() {
  try {
    console.log('=== PRÉ-PROCESSAMENTO ESTADO EDUCAÇÃO SUPERIOR ===');
    console.log(`📅 Anos: ${ANOS_PROCESSAMENTO.join(', ')}`);
    console.log(`🏛️ Estado: Piauí (ID: ${ESTADO_PIAUI_ID})`);
    console.log('');

    // 1. Garantir que o estado existe
    await garantirEstadoPiaui();

    // 2. Obter cidades do Piauí
    const cidadesIds = await obterCidadesPiaui();

    if (cidadesIds.length === 0) {
      console.error('❌ Nenhuma cidade do Piauí encontrada!');
      return;
    }

    // 3. Limpar dados antigos do estado
    await limparDadosEstadoAntigos();

    // 4. Processar cada ano
    for (const ano of ANOS_PROCESSAMENTO) {
      await processarAno(cidadesIds, ano);
    }

    console.log('\n🎉 PRÉ-PROCESSAMENTO CONCLUÍDO COM SUCESSO!');
    console.log(
      '✅ Dados agregados do estado disponíveis para consultas rápidas',
    );

    // Verificar total de registros criados
    const totalCriado = await prisma.dadoEducacaoSuperior.count({
      where: {
        ano: { in: ANOS_PROCESSAMENTO },
        localidade_id: ESTADO_PIAUI_ID,
      },
    });

    console.log(`📈 Total de registros criados para o estado: ${totalCriado}`);
  } catch (error) {
    console.error('❌ Erro durante o pré-processamento:', error);
    process.exit(1);
  } finally {
    console.log('🔌 Desconectando do banco...');
    await prisma.$disconnect();
    console.log('✅ Desconectado do banco de dados');
  }
}

// Executar se chamado diretamente
console.log('🚀 Script iniciado...');
main().catch(console.error);

export { main, processarAno, processarDocentes, processarOutrosTipos };
