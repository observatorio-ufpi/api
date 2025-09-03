import { PrismaClient } from '../prisma/educacao/generated/educacao-client/index.js';

const prisma = new PrismaClient();

// ID do estado do Piauí
const ESTADO_PIAUI_ID = 22;
const ANO_PROCESSAMENTO = 2024;

/**
 * Script para pré-processar dados agregados do estado do Piauí para 2024
 *
 * Este script soma todos os dados das cidades do Piauí para criar registros
 * agregados do estado, evitando consultas lentas nas APIs.
 *
 * Tipos de dados processados:
 * - enrollment (matrículas)
 * - school/count (quantidade de escolas) - contagem única de entidades
 * - class (turmas)
 * - teacher (professores)
 * - employees (funcionários)
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
 * Remove dados antigos do estado para o ano especificado
 */
async function limparDadosEstadoAntigos() {
  const deletados = await prisma.dadoEducacaoBasicaApos23.deleteMany({
    where: {
      ano: ANO_PROCESSAMENTO,
      localidade_id: ESTADO_PIAUI_ID,
    },
  });

  console.log(`🗑️ Removidos ${deletados.count} registros antigos do estado`);
}

/**
 * Processa dados de school/count - contagem única de escolas
 */
async function processarSchoolCount(cidadesIds) {
  console.log('🏫 Processando school/count...');

  // Buscar todos os dados de school/count das cidades
  const dadosCidades = await prisma.dadoEducacaoBasicaApos23.findMany({
    where: {
      ano: ANO_PROCESSAMENTO,
      localidade_id: { in: cidadesIds },
      entidade_id: { not: null },
    },
    include: {
      dependencia: true,
      etapa: true,
      localizacao: true,
      entidade: true,
    },
  });

  console.log(
    `📊 Encontrados ${dadosCidades.length} registros de school/count das cidades`,
  );

  // Agrupar por dimensões e contar escolas únicas
  const grupos = new Map();

  dadosCidades.forEach((item) => {
    if (!item.entidade?.id) return;

    // Criar chave baseada nas dimensões
    const chave = [
      item.dependencia?.id || 'null',
      item.etapa?.id || 'null',
      item.localizacao?.id || 'null',
    ].join('|');

    if (!grupos.has(chave)) {
      grupos.set(chave, {
        dependencia_id: item.dependencia?.id || null,
        etapa_id: item.etapa?.id || null,
        localizacao_id: item.localizacao?.id || null,
        escolas: new Set(),
      });
    }

    grupos.get(chave).escolas.add(item.entidade.id);
  });

  // Inserir registros agregados
  let contadorInseridos = 0;
  for (const chave of grupos.keys()) {
    const grupo = grupos.get(chave);
    await prisma.dadoEducacaoBasicaApos23.create({
      data: {
        ano: ANO_PROCESSAMENTO,
        tipo: 'school/count',
        total: grupo.escolas.size,
        localidade_id: ESTADO_PIAUI_ID,
        dependencia_id: grupo.dependencia_id,
        etapa_id: grupo.etapa_id,
        localizacao_id: grupo.localizacao_id,
        entidade_id: null, // Para agregados do estado, não vinculamos a entidade específica
      },
    });
    contadorInseridos++;
  }

  console.log(
    `✅ School/count processado: ${contadorInseridos} registros criados`,
  );
}

/**
 * Processa outros tipos de dados (enrollment, class, teacher, employees)
 */
async function processarOutrosTipos(cidadesIds, tipo) {
  console.log(`📈 Processando ${tipo}...`);

  // Buscar dados das cidades para o tipo específico
  const dadosCidades = await prisma.dadoEducacaoBasicaApos23.findMany({
    where: {
      ano: ANO_PROCESSAMENTO,
      tipo: tipo,
      localidade_id: { in: cidadesIds },
    },
    include: {
      dependencia: true,
      etapa: true,
      etapa_teacher_class: true,
      localizacao: true,
    },
  });

  console.log(
    `📊 Encontrados ${dadosCidades.length} registros de ${tipo} das cidades`,
  );

  // Agrupar por dimensões
  const grupos = new Map();

  dadosCidades.forEach((item) => {
    // Para teacher e class, usar etapa_teacher_class se disponível
    const etapaId =
      (tipo === 'teacher' || tipo === 'class') && item.etapa_teacher_class
        ? item.etapa_teacher_class.id
        : item.etapa?.id || null;

    // Criar chave baseada nas dimensões
    const chave = [
      item.dependencia?.id || 'null',
      etapaId || 'null',
      item.localizacao?.id || 'null',
    ].join('|');

    if (!grupos.has(chave)) {
      grupos.set(chave, {
        dependencia_id: item.dependencia?.id || null,
        etapa_id: etapaId,
        localizacao_id: item.localizacao?.id || null,
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
      // Para teacher e class, usar etapa_teacher_class_id em vez de etapa_id
      const dadosInsercao = {
        ano: ANO_PROCESSAMENTO,
        tipo: tipo,
        total: grupo.total,
        localidade_id: ESTADO_PIAUI_ID,
        dependencia_id: grupo.dependencia_id,
        localizacao_id: grupo.localizacao_id,
      };

      if (tipo === 'teacher' || tipo === 'class') {
        dadosInsercao.etapa_teacher_class_id = grupo.etapa_id;
        dadosInsercao.etapa_id = null;
      } else {
        dadosInsercao.etapa_id = grupo.etapa_id;
        dadosInsercao.etapa_teacher_class_id = null;
      }

      await prisma.dadoEducacaoBasicaApos23.create({
        data: dadosInsercao,
      });
      contadorInseridos++;
    }
  }

  console.log(`✅ ${tipo} processado: ${contadorInseridos} registros criados`);
}

/**
 * Processa dados sem dimensões (totais gerais)
 * COMENTADO: Não processa mais totais sem dimensões
 */
/*
async function processarTotaisGerais(cidadesIds) {
  console.log('📊 Processando totais gerais (sem dimensões)...');

  const tipos = ['enrollment', 'school/count', 'class', 'teacher', 'employees'];

  for (const tipo of tipos) {
    console.log(`📈 Processando total geral de ${tipo}...`);

    let total = 0;

    if (tipo === 'school/count') {
      // Para school/count, contar escolas únicas
      const escolasUnicas = await prisma.dadoEducacaoBasicaApos23.findMany({
        where: {
          ano: ANO_PROCESSAMENTO,
          localidade_id: { in: cidadesIds },
          entidade_id: { not: null },
        },
        select: { entidade_id: true },
        distinct: ['entidade_id'],
      });
      total = escolasUnicas.length;
    } else {
      // Para outros tipos, somar totais
      const resultado = await prisma.dadoEducacaoBasicaApos23.aggregate({
        where: {
          ano: ANO_PROCESSAMENTO,
          tipo: tipo,
          localidade_id: { in: cidadesIds },
        },
        _sum: { total: true },
      });
      total = Number(resultado._sum.total || 0);
    }

    if (total > 0) {
      await prisma.dadoEducacaoBasicaApos23.create({
        data: {
          ano: ANO_PROCESSAMENTO,
          tipo: tipo,
          total: total,
          localidade_id: ESTADO_PIAUI_ID,
          dependencia_id: null,
          etapa_id: null,
          etapa_teacher_class_id: null,
          localizacao_id: null,
          entidade_id: null,
        },
      });

      console.log(`✅ Total geral de ${tipo}: ${total}`);
    }
  }
}
*/

/**
 * Função principal
 */
async function main() {
  try {
    console.log('=== PRÉ-PROCESSAMENTO ESTADO EDUCAÇÃO BÁSICA 2024 ===');
    console.log(`📅 Ano: ${ANO_PROCESSAMENTO}`);
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

    // 3. Verificar se existem dados das cidades para processar
    const dadosExistentes = await prisma.dadoEducacaoBasicaApos23.count({
      where: {
        ano: ANO_PROCESSAMENTO,
        localidade_id: { in: cidadesIds },
      },
    });

    if (dadosExistentes === 0) {
      console.log(
        '⚠️ Nenhum dado das cidades encontrado para o ano especificado',
      );
      console.log(
        '💡 Certifique-se de que os dados das cidades já foram importados',
      );
      return;
    }

    console.log(
      `📊 Encontrados ${dadosExistentes} registros das cidades para processar`,
    );

    // 4. Limpar dados antigos do estado
    await limparDadosEstadoAntigos();

    // 5. Processar cada tipo de dado
    await processarSchoolCount(cidadesIds);
    await processarOutrosTipos(cidadesIds, 'enrollment');
    await processarOutrosTipos(cidadesIds, 'class');
    await processarOutrosTipos(cidadesIds, 'teacher');
    await processarOutrosTipos(cidadesIds, 'employees');

    // 6. Processar totais gerais (sem dimensões)
    // COMENTADO: Não processa mais totais sem dimensões
    // await processarTotaisGerais(cidadesIds);

    console.log('');
    console.log('🎉 PRÉ-PROCESSAMENTO CONCLUÍDO COM SUCESSO!');
    console.log(
      '✅ Dados agregados do estado disponíveis para consultas rápidas',
    );

    // Verificar total de registros criados
    const totalCriado = await prisma.dadoEducacaoBasicaApos23.count({
      where: {
        ano: ANO_PROCESSAMENTO,
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

export { main, processarOutrosTipos, processarSchoolCount };

