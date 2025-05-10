console.log('Script iniciando...');
import axios from 'axios';
import {
  createWriteStream,
  existsSync,
  readFileSync,
  writeFileSync,
} from 'node:fs';
import pLimit from 'p-limit';
import path from 'path';
import { fileURLToPath } from 'url';
import { PrismaClient } from './prisma/educacao/generated/educacao-client/index.js';

const prisma = new PrismaClient();

const URL_BASE = 'https://simcaq.c3sl.ufpr.br/api/v1/';
const ESTADO_PIAUI = '22';

const TIPOS_DADOS = {
  enrollment: {
    min: 2007,
    max: 2023,
    dims: ['education_level_mod', 'location', 'adm_dependency_detailed'],
    getEndpoint: (ano) => (ano >= 2021 ? 'enrollmentAggregate' : 'enrollment'),
    mapearCampos: (item, ano) => {
      if (ano >= 2021) {
        return {
          ...item,
          education_level_mod_id: item.education_level_mod_agg_id,
          education_level_mod_name: item.education_level_mod_agg_name,
          total: Number(item.total),
        };
      }
      return { ...item, total: Number(item.total) };
    },
  },
  'school/count': {
    min: 2007,
    max: 2023,
    dims: ['arrangement', 'location', 'adm_dependency_detailed'],
    mapearCampos: (item) => ({ ...item, total: Number(item.total) }),
  },
  class: {
    min: 2007,
    max: 2023,
    dims: ['education_level_mod', 'location', 'adm_dependency_detailed'],
    mapearCampos: (item) => ({ ...item, total: Number(item.total) }),
  },
  teacher: {
    min: 2007,
    max: 2020,
    dims: [
      'education_level_mod',
      'location',
      'adm_dependency_detailed',
      'contract_type',
      'initial_training',
    ],
    mapearCampos: (item) => ({ ...item, total: Number(item.total) }),
  },
  auxiliar: {
    min: 2007,
    max: 2020,
    dims: ['education_level_mod', 'location', 'adm_dependency_detailed'],
    mapearCampos: (item) => ({ ...item, total: Number(item.total) }),
  },
  employees: {
    min: 2007,
    max: 2023,
    dims: ['location', 'adm_dependency_detailed'],
    mapearCampos: (item) => ({ ...item, total: Number(item.total) }),
  },
  out_of_school: {
    min: 2007,
    max: 2015,
    dims: ['location'],
    apenasNivelEstadual: true,
    mapearCampos: (item) => ({ ...item, total: Number(item.total) }),
  },
  liquid_enrollment_ratio: {
    min: 2007,
    max: 2015,
    dims: ['education_level_short', 'location'],
    apenasNivelEstadual: true,
    mapearCampos: (item) => ({ ...item, total: Number(item.total) }),
  },
  gloss_enrollment_ratio: {
    min: 2007,
    max: 2015,
    dims: ['education_level_short', 'location'],
    apenasNivelEstadual: true,
    mapearCampos: (item) => ({ ...item, total: Number(item.total) }),
  },
  rate_school_new: {
    min: 2019,
    max: 2023,
    dims: ['age_range'],
    apenasNivelEstadual: true,
    mapearCampos: (item) => ({ ...item, total: Number(item.total) }),
  },
};

const progressoPath = 'progresso-import.json';
let progresso = {};
if (existsSync(progressoPath)) {
  try {
    progresso = JSON.parse(readFileSync(progressoPath, 'utf-8'));
  } catch (e) {
    progresso = {};
  }
}

async function garantirEstadoPiaui() {
  await prisma.localidade.upsert({
    where: { id: Number(ESTADO_PIAUI) },
    create: {
      id: Number(ESTADO_PIAUI),
      nome: 'Piauí',
      tipo: 'estado',
      uf: 'PI',
      codigo_ibge: ESTADO_PIAUI,
    },
    update: {},
  });
  console.log('Estado do Piauí cadastrado no banco de dados.');
}

function gerarCombinacoesDimensoes(dimensoes) {
  const combinacoes = [];
  // Gera todas as combinações possíveis de 2 dimensões
  for (let i = 0; i < dimensoes.length; i++) {
    for (let j = i + 1; j < dimensoes.length; j++) {
      combinacoes.push([dimensoes[i], dimensoes[j]]);
    }
  }
  return combinacoes;
}

function construirUrl(
  tipo,
  ano,
  localidadeId = null,
  dimensoesEspecificas = null,
) {
  const tipoInfo = TIPOS_DADOS[tipo];
  const endpoint = tipoInfo.getEndpoint ? tipoInfo.getEndpoint(ano) : tipo;

  // Se dimensoesEspecificas for fornecido, usa apenas essas dimensões
  const dims = dimensoesEspecificas
    ? `dims=${dimensoesEspecificas.join(',')}`
    : `dims=${tipoInfo.dims.join(',')}`;

  const filter = !localidadeId
    ? `min_year:"${ano}",max_year:"${ano}",state:"${ESTADO_PIAUI}"`
    : `min_year:"${ano}",max_year:"${ano}",state:"${ESTADO_PIAUI}",city:"${localidadeId}"`;

  return `${URL_BASE}${endpoint}?${dims}&filter=${encodeURIComponent(filter)}`;
}

async function buscarDados(url) {
  try {
    console.log(`Buscando dados: ${url}`);
    const response = await axios.get(url);
    return response.data.result || [];
  } catch (error) {
    console.error(`Erro ao buscar dados: ${error.message}`);
    return [];
  }
}

async function salvarDimensao(modelo, id, dados) {
  if (!id || !dados) return null;

  try {
    const resultado = await prisma[modelo].upsert({
      where: { id },
      create: dados,
      update: dados,
    });
    return resultado;
  } catch (error) {
    console.error(`Erro ao salvar dimensão ${modelo}:`, error);
    return null;
  }
}

async function inserirDados(tipo, dados, ano) {
  const tipoInfo = TIPOS_DADOS[tipo];

  let contador = 0;
  let dimensoesSalvas = {
    localidades: 0,
    dependencias: 0,
    etapas: 0,
    localizacoes: 0,
    vinculos: 0,
    formacoes: 0,
    faixas: 0,
  };

  for (const item of dados) {
    try {
      const dadoProcessado = tipoInfo.mapearCampos(item, ano);

      // Construir o objeto para inserção
      const dadoParaInserir = {
        tipo: tipo,
        ano: ano,
        total: dadoProcessado.total,
      };

      if (dadoProcessado.city) {
        await salvarDimensao('Localidade', Number(dadoProcessado.city), {
          id: Number(dadoProcessado.city),
          nome: dadoProcessado.cityName || 'Município desconhecido',
          tipo: 'municipio',
          uf: 'PI',
          codigo_ibge: dadoProcessado.city,
        });
        dadoParaInserir.localidade_id = Number(dadoProcessado.city);
        dimensoesSalvas.localidades++;
      } else {
        dadoParaInserir.localidade_id = Number(ESTADO_PIAUI);
      }

      if (dadoProcessado.adm_dependency_detailed_id) {
        await salvarDimensao(
          'dependenciaAdministrativaBasica',
          dadoProcessado.adm_dependency_detailed_id,
          {
            id: dadoProcessado.adm_dependency_detailed_id,
            nome: dadoProcessado.adm_dependency_detailed_name || 'Desconhecido',
            tipo:
              dadoProcessado.adm_dependency_detailed_name?.toLowerCase() ||
              null,
          },
        );
        dadoParaInserir.dependencia_id =
          dadoProcessado.adm_dependency_detailed_id;
        dimensoesSalvas.dependencias++;
      }

      if (tipo === 'school/count' && dadoProcessado.arrangement_id) {
        await salvarDimensao(
          'etapaEnsinoBasicaSchool',
          dadoProcessado.arrangement_id,
          {
            id: dadoProcessado.arrangement_id,
            nome: dadoProcessado.arrangement_name || 'Desconhecido',
          },
        );
        dadoParaInserir.etapa_school_id = dadoProcessado.arrangement_id;
        dimensoesSalvas.etapas++;
      } else if (
        (tipo === 'liquid_enrollment_ratio' ||
          tipo === 'gloss_enrollment_ratio') &&
        dadoProcessado.education_level_short_id
      ) {
        await salvarDimensao(
          'etapaEnsinoBasica',
          dadoProcessado.education_level_short_id,
          {
            id: dadoProcessado.education_level_short_id,
            nome: dadoProcessado.education_level_short_name || 'Desconhecido',
            nome_curto: dadoProcessado.education_level_short_name,
          },
        );
        dadoParaInserir.etapa_id = dadoProcessado.education_level_short_id;
        dimensoesSalvas.etapas++;
      } else if (dadoProcessado.education_level_mod_id) {
        await salvarDimensao(
          'etapaEnsinoBasica',
          dadoProcessado.education_level_mod_id,
          {
            id: dadoProcessado.education_level_mod_id,
            nome: dadoProcessado.education_level_mod_name || 'Desconhecido',
          },
        );
        dadoParaInserir.etapa_id = dadoProcessado.education_level_mod_id;
        dimensoesSalvas.etapas++;
      }

      if (dadoProcessado.location_id) {
        await salvarDimensao('localizacao', dadoProcessado.location_id, {
          id: dadoProcessado.location_id,
          nome: dadoProcessado.location_name || 'Desconhecido',
        });
        dadoParaInserir.localizacao_id = dadoProcessado.location_id;
        dimensoesSalvas.localizacoes++;
      }

      if (dadoProcessado.contract_type_id) {
        await salvarDimensao(
          'vinculoFuncional',
          dadoProcessado.contract_type_id,
          {
            id: dadoProcessado.contract_type_id,
            nome: dadoProcessado.contract_type_name || 'Desconhecido',
          },
        );
        dadoParaInserir.vinculo_id = dadoProcessado.contract_type_id;
        dimensoesSalvas.vinculos++;
      }

      if (dadoProcessado.initial_training_id) {
        await salvarDimensao(
          'formacaoDocente',
          dadoProcessado.initial_training_id,
          {
            id: dadoProcessado.initial_training_id,
            nome: dadoProcessado.initial_training_name || 'Desconhecido',
          },
        );
        dadoParaInserir.formacao_id = dadoProcessado.initial_training_id;
        dimensoesSalvas.formacoes++;
      }

      if (dadoProcessado.age_range_id) {
        const nome = dadoProcessado.age_range_name || 'Desconhecido';
        let idadeInicial = null;
        let idadeFinal = null;

        const match = nome.match(/(\d+)\s*(a|e|à)\s*(\d+)/);
        if (match) {
          idadeInicial = parseInt(match[1]);
          idadeFinal = parseInt(match[3]);
        }

        await salvarDimensao('faixaEtaria', dadoProcessado.age_range_id, {
          id: dadoProcessado.age_range_id,
          nome: nome,
          idade_inicial: idadeInicial,
          idade_final: idadeFinal,
        });
        dadoParaInserir.faixa_etaria_id = dadoProcessado.age_range_id;
        dimensoesSalvas.faixas++;
      }

      // Em vez de usar upsert, primeiro procuramos o registro
      const registroExistente = await prisma.DadoEducacaoBasica.findFirst({
        where: {
          tipo,
          ano,
          localidade_id: dadoParaInserir.localidade_id,
          ...(dadoParaInserir.dependencia_id
            ? { dependencia_id: dadoParaInserir.dependencia_id }
            : {}),
          ...(dadoParaInserir.etapa_id
            ? { etapa_id: dadoParaInserir.etapa_id }
            : {}),
          ...(dadoParaInserir.etapa_school_id
            ? { etapa_school_id: dadoParaInserir.etapa_school_id }
            : {}),
          ...(dadoParaInserir.localizacao_id
            ? { localizacao_id: dadoParaInserir.localizacao_id }
            : {}),
          ...(dadoParaInserir.vinculo_id
            ? { vinculo_id: dadoParaInserir.vinculo_id }
            : {}),
          ...(dadoParaInserir.formacao_id
            ? { formacao_id: dadoParaInserir.formacao_id }
            : {}),
          ...(dadoParaInserir.faixa_etaria_id
            ? { faixa_etaria_id: dadoParaInserir.faixa_etaria_id }
            : {}),
        },
      });

      if (registroExistente) {
        // Se o registro existe, atualizamos
        await prisma.DadoEducacaoBasica.update({
          where: { id: registroExistente.id },
          data: { total: dadoProcessado.total },
        });
      } else {
        // Se não existe, criamos um novo
        await prisma.DadoEducacaoBasica.create({
          data: dadoParaInserir,
        });
      }

      contador++;
    } catch (error) {
      console.error(`Erro ao inserir dado: ${error.message}`);
    }
  }

  return { registros: contador, dimensoes: dimensoesSalvas };
}

async function combinarDados(dadosCombinacoes) {
  const dadosCombinados = new Map();

  for (const dados of dadosCombinacoes) {
    for (const item of dados) {
      // Criar uma chave única baseada nas dimensões comuns
      const chave = [
        item.year,
        item.city || 'estado',
        item.adm_dependency_detailed_id || 'null',
        item.education_level_mod_id ||
          item.education_level_mod_agg_id ||
          item.arrangement_id ||
          'null',
        item.location_id || 'null',
        item.contract_type_id || 'null',
        item.initial_training_id || 'null',
        item.age_range_id || 'null',
      ].join('|');

      if (!dadosCombinados.has(chave)) {
        dadosCombinados.set(chave, { ...item });
      } else {
        // Se já existe, atualiza apenas as dimensões que faltam
        const existente = dadosCombinados.get(chave);
        dadosCombinados.set(chave, {
          ...existente,
          ...item,
          // Garante que o total seja o mesmo em todas as combinações
          total: existente.total,
        });
      }
    }
  }

  return Array.from(dadosCombinados.values());
}

async function importarDados(options = {}) {
  const {
    tipo = null,
    anos = null,
    municipios = null,
    logToFile = true,
  } = options;

  await garantirEstadoPiaui();

  const tiposParaImportar = tipo ? [tipo] : Object.keys(TIPOS_DADOS);

  const logStream = logToFile
    ? createWriteStream('import-log.txt', { flags: 'a' })
    : null;

  const log = (message) => {
    console.log(message);
    if (logStream) logStream.write(message + '\n');
  };

  log(
    `=== Iniciando importação de dados educacionais === ${new Date().toISOString()}`,
  );

  let totalRegistrosImportados = 0;
  const estatisticas = {};
  const dimensoesImportadas = {
    localidades: 0,
    dependencias: 0,
    etapas: 0,
    localizacoes: 0,
    vinculos: 0,
    formacoes: 0,
    faixas: 0,
  };

  const limit = pLimit(3); // Limite de 3 consultas simultâneas

  for (const tipoAtual of tiposParaImportar) {
    // Se já processou esse tipo, pula
    if (
      progresso.tipo &&
      tiposParaImportar.length === 1 &&
      tipoAtual !== progresso.tipo
    )
      continue;
    const tipoInfo = TIPOS_DADOS[tipoAtual];
    estatisticas[tipoAtual] = { total: 0, erros: 0 };

    const anosParaImportar =
      anos ||
      Array.from(
        { length: tipoInfo.max - tipoInfo.min + 1 },
        (_, i) => tipoInfo.min + i,
      );

    log(`\nImportando dados do tipo: ${tipoAtual}`);
    log(`Anos: ${anosParaImportar.join(', ')}`);

    let skipAno = progresso.ano && progresso.tipo === tipoAtual;
    for (const ano of anosParaImportar) {
      // Se já processou esse ano, pula
      if (skipAno && ano < progresso.ano) continue;
      skipAno = false;
      log(`\n  Ano: ${ano}`);

      // Salva progresso após iniciar o ano
      writeFileSync(
        progressoPath,
        JSON.stringify({ tipo: tipoAtual, ano, municipio: null }),
      );

      // Importar dados do estado usando combinações de dimensões
      log(`    Importando dados para o estado do Piauí...`);
      const combinacoesDimensoes = gerarCombinacoesDimensoes(tipoInfo.dims);

      // Paralelismo controlado para as consultas
      const promises = combinacoesDimensoes.map((dimensoes) =>
        limit(async () => {
          const urlCombinacao = construirUrl(tipoAtual, ano, null, dimensoes);
          return buscarDados(urlCombinacao);
        }),
      );
      const dadosCombinacoes = await Promise.all(promises);

      if (dadosCombinacoes.length > 0) {
        const dadosParaSalvar = await combinarDados(dadosCombinacoes);
        const resultadoEstado = await inserirDados(
          tipoAtual,
          dadosParaSalvar,
          ano,
        );
        log(
          `    Estado: Piauí - ${resultadoEstado.registros} registros importados`,
        );

        estatisticas[tipoAtual].total += resultadoEstado.registros;
        totalRegistrosImportados += resultadoEstado.registros;

        Object.keys(resultadoEstado.dimensoes).forEach((key) => {
          dimensoesImportadas[key] += resultadoEstado.dimensoes[key];
        });
      } else {
        log(`    Estado: Piauí - Nenhum dado encontrado`);
      }

      // Mesmo processo para municípios
      if (!tipoInfo.apenasNivelEstadual) {
        let municipiosParaImportar;

        if (!municipios) {
          try {
            const citiesMappingPath = await import(
              './src/utils/citiesMapping.js'
            );
            municipiosParaImportar = Object.keys(
              citiesMappingPath.municipios || {},
            );
          } catch (e) {
            municipiosParaImportar = [
              '2211001',
              '2200202',
              '2207702',
              '2207900',
            ];
            log(
              'Arquivo citiesMapping.js não encontrado. Usando lista limitada de municípios para teste.',
            );
          }
        } else {
          municipiosParaImportar = municipios;
        }

        let skipMunicipio =
          progresso.municipio &&
          progresso.tipo === tipoAtual &&
          progresso.ano === ano;
        for (const municipioId of municipiosParaImportar) {
          // Se já processou esse município, pula
          if (skipMunicipio && municipioId < progresso.municipio) continue;
          skipMunicipio = false;
          log(`    Importando dados para o município ${municipioId}...`);

          // Salva progresso após iniciar o município
          writeFileSync(
            progressoPath,
            JSON.stringify({ tipo: tipoAtual, ano, municipio: municipioId }),
          );

          const dadosCombinacoes = [];

          for (const dimensoes of combinacoesDimensoes) {
            const urlCombinacao = construirUrl(
              tipoAtual,
              ano,
              municipioId,
              dimensoes,
            );
            const dadosCombinacao = await buscarDados(urlCombinacao);
            if (dadosCombinacao.length > 0) {
              dadosCombinacoes.push(dadosCombinacao);
            }
          }

          if (dadosCombinacoes.length > 0) {
            const dadosMunicipio = await combinarDados(dadosCombinacoes);
            const dadosComCityName = dadosMunicipio.map((item) => ({
              ...item,
              city: municipioId,
              cityName: item.cityName || `Município ${municipioId}`,
            }));

            const resultadoMunicipio = await inserirDados(
              tipoAtual,
              dadosComCityName,
              ano,
            );
            log(
              `    Município: ${municipioId} - ${resultadoMunicipio.registros} registros importados`,
            );

            estatisticas[tipoAtual].total += resultadoMunicipio.registros;
            totalRegistrosImportados += resultadoMunicipio.registros;

            Object.keys(resultadoMunicipio.dimensoes).forEach((key) => {
              dimensoesImportadas[key] += resultadoMunicipio.dimensoes[key];
            });
          } else {
            log(`    Município: ${municipioId} - Nenhum dado encontrado`);
          }
        }
      }
    }
  }

  // Registrar a importação
  await prisma.ImportacaoAPI.create({
    data: {
      tipo_dado: tiposParaImportar.join(','),
      anos_importados: anos || [],
      filtros_aplicados: JSON.stringify({
        ...options,
        dimensoesImportadas,
      }),
      total_registros: totalRegistrosImportados,
      status: 'sucesso',
    },
  });

  // Limpa o progresso ao finalizar
  if (existsSync(progressoPath)) {
    writeFileSync(progressoPath, '');
  }

  log(`\n=== Importação concluída === ${new Date().toISOString()}`);
  log(`Total de registros importados: ${totalRegistrosImportados}`);

  log(`\nDimensões importadas:`);
  for (const [categoria, total] of Object.entries(dimensoesImportadas)) {
    log(`  ${categoria}: ${total}`);
  }

  log(`\nEstatísticas por tipo:`);
  for (const [tipo, { total }] of Object.entries(estatisticas)) {
    log(`  ${tipo}: ${total} registros`);
  }

  if (logStream) logStream.end();

  return {
    totalRegistrosImportados,
    estatisticas,
    dimensoesImportadas,
  };
}

export { importarDados };

console.log('Script carregado!');
console.log('import.meta.url:', import.meta.url);
console.log('process.argv[1]:', process.argv[1]);
console.log('file path:', `file://${process.argv[1]}`);

// Obtenha o caminho normalizado do arquivo atual
const scriptPath = fileURLToPath(import.meta.url);
// Obtenha o caminho normalizado do arquivo sendo executado
const executedPath = path.resolve(process.argv[1]);

console.log('scriptPath normalizado:', scriptPath);
console.log('executedPath normalizado:', executedPath);

// Compare os caminhos normalizados
if (scriptPath === executedPath) {
  console.log('Iniciando importação...');
  importarDados({
    tipo: 'school/count',
    anos: [2022, 2023],
  })
    .then((resultado) => {
      console.log('Importação finalizada com sucesso!');
      console.log(`Total de registros: ${resultado.totalRegistrosImportados}`);
      prisma.$disconnect();
    })
    .catch((error) => {
      console.error('Erro na importação:', error);
      prisma.$disconnect();
      process.exit(1);
    });
}
