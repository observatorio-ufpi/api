console.log('Script de total de docentes iniciando...');
import axios from 'axios';
import {
    createWriteStream,
    existsSync,
    readFileSync,
    writeFileSync,
} from 'node:fs';
// import pLimit from 'p-limit';
import path from 'path';
import { fileURLToPath } from 'url';
import { PrismaClient } from '../prisma/educacao/generated/educacao-client/index.js';

const prisma = new PrismaClient();

const URL_BASE = 'https://simcaq.c3sl.ufpr.br/api/v1/';
const ESTADO_PIAUI = '22';

// Configuração específica para federativeEntity (total de docentes)
const CONFIG_FEDERATIVE_ENTITY = {
  min: 2021,
  max: 2024,
  endpoint: 'federativeEntity',
  mapearCampos: (item) => ({
    ...item,
    total: Number(item.total),
  }),
};

const progressoPath = 'progresso-total-docentes.json';
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

function construirUrl(ano, localidadeId = null) {
  const filter = !localidadeId
    ? `min_year:"${ano}",max_year:"${ano}",state:"${ESTADO_PIAUI}"`
    : `min_year:"${ano}",max_year:"${ano}",state:"${ESTADO_PIAUI}",city:"${localidadeId}"`;

  return `${URL_BASE}${CONFIG_FEDERATIVE_ENTITY.endpoint}?filter=${encodeURIComponent(filter)}`;
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

async function inserirDados(dados, ano, localidadeId = null) {
  let contador = 0;
  let dimensoesSalvas = {
    localidades: 0,
  };

  for (const item of dados) {
    try {
      const dadoProcessado = CONFIG_FEDERATIVE_ENTITY.mapearCampos(item);

      // Construir o objeto para inserção
      const dadoParaInserir = {
        tipo: 'federativeEntity',
        ano: ano,
        total: dadoProcessado.total,
      };

      // Definir localidade
      if (localidadeId) {
        await salvarDimensao('Localidade', Number(localidadeId), {
          id: Number(localidadeId),
          nome: dadoProcessado.cityName || `Município ${localidadeId}`,
          tipo: 'municipio',
          uf: 'PI',
          codigo_ibge: localidadeId,
        });
        dadoParaInserir.localidade_id = Number(localidadeId);
        dimensoesSalvas.localidades++;
      } else {
        dadoParaInserir.localidade_id = Number(ESTADO_PIAUI);
      }

      // Deixar outras dimensões como null (foco apenas no total geral)
      dadoParaInserir.etapa_teacher_id = null;
      dadoParaInserir.localizacao_id = null;
      dadoParaInserir.vinculo_id = null;
      dadoParaInserir.dependencia_teacher_id = null;

      // Verificar se o registro já existe (apenas localidade e ano, outras dimensões são null)
      const registroExistente = await prisma.DadoEducacaoBasica.findFirst({
        where: {
          tipo: 'federativeEntity',
          ano,
          localidade_id: dadoParaInserir.localidade_id,
          etapa_teacher_id: null,
          localizacao_id: null,
          vinculo_id: null,
          dependencia_teacher_id: null,
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

async function importarTotalDocentes(options = {}) {
  const { anos = null, municipios = null, logToFile = true } = options;

  await garantirEstadoPiaui();

  const anosParaImportar = anos || [2021, 2022, 2023, 2024];

  const logStream = logToFile
    ? createWriteStream('import-total-docentes-log.txt', { flags: 'a' })
    : null;

  const log = (message) => {
    console.log(message);
    if (logStream) logStream.write(message + '\n');
  };

  log(
    `=== Iniciando importação de total de docentes === ${new Date().toISOString()}`,
  );

  let totalRegistrosImportados = 0;
  const estatisticas = { total: 0, erros: 0 };
  const dimensoesImportadas = {
    localidades: 0,
  };

  // const limit = pLimit(3); // Limite de 3 consultas simultâneas

  let skipAno = progresso.ano;
  for (const ano of anosParaImportar) {
    // Se já processou esse ano, pula
    if (skipAno && ano < progresso.ano) continue;
    skipAno = false;
    log(`\nAno: ${ano}`);

    // Salva progresso após iniciar o ano
    writeFileSync(progressoPath, JSON.stringify({ ano, municipio: null }));

    // Importar dados do estado
    log(`  Importando dados para o estado do Piauí...`);
    const urlEstado = construirUrl(ano);
    const dadosEstado = await buscarDados(urlEstado);

    if (dadosEstado.length > 0) {
      const resultadoEstado = await inserirDados(dadosEstado, ano);
      log(
        `  Estado: Piauí - ${resultadoEstado.registros} registros importados`,
      );

      estatisticas.total += resultadoEstado.registros;
      totalRegistrosImportados += resultadoEstado.registros;

      Object.keys(resultadoEstado.dimensoes).forEach((key) => {
        dimensoesImportadas[key] += resultadoEstado.dimensoes[key];
      });
    } else {
      log(`  Estado: Piauí - Nenhum dado encontrado`);
    }

    // Importar dados dos municípios
    let municipiosParaImportar;

    if (!municipios) {
      try {
        const citiesMappingPath = await import('../src/utils/citiesMapping.js');
        municipiosParaImportar = Object.keys(
          citiesMappingPath.municipios || {},
        );
      } catch (e) {
        municipiosParaImportar = [
          '2211001', // Teresina
          '2200202', // Altos
          '2207702', // Parnaíba
          '2207900', // Picos
        ];
        log(
          'Arquivo citiesMapping.js não encontrado. Usando lista limitada de municípios para teste.',
        );
      }
    } else {
      municipiosParaImportar = municipios;
    }

    let skipMunicipio = progresso.municipio && progresso.ano === ano;
    for (const municipioId of municipiosParaImportar) {
      // Se já processou esse município, pula
      if (skipMunicipio && municipioId < progresso.municipio) continue;
      skipMunicipio = false;
      log(`  Importando dados para o município ${municipioId}...`);

      // Salva progresso após iniciar o município
      writeFileSync(
        progressoPath,
        JSON.stringify({ ano, municipio: municipioId }),
      );

      const urlMunicipio = construirUrl(ano, municipioId);
      const dadosMunicipio = await buscarDados(urlMunicipio);

      if (dadosMunicipio.length > 0) {
        const dadosComCityName = dadosMunicipio.map((item) => ({
          ...item,
          city: municipioId,
          cityName: item.cityName || `Município ${municipioId}`,
        }));

        const resultadoMunicipio = await inserirDados(
          dadosComCityName,
          ano,
          municipioId,
        );
        log(
          `  Município: ${municipioId} - ${resultadoMunicipio.registros} registros importados`,
        );

        estatisticas.total += resultadoMunicipio.registros;
        totalRegistrosImportados += resultadoMunicipio.registros;

        Object.keys(resultadoMunicipio.dimensoes).forEach((key) => {
          dimensoesImportadas[key] += resultadoMunicipio.dimensoes[key];
        });
      } else {
        log(`  Município: ${municipioId} - Nenhum dado encontrado`);
      }
    }
  }

  // Registrar a importação
  await prisma.ImportacaoAPI.create({
    data: {
      tipo_dado: 'federativeEntity',
      anos_importados: anosParaImportar,
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

  log(`\nEstatísticas:`);
  log(`  Total: ${estatisticas.total} registros`);

  if (logStream) logStream.end();

  return {
    totalRegistrosImportados,
    estatisticas,
    dimensoesImportadas,
  };
}

export { importarTotalDocentes };

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
  console.log('Iniciando importação de total de docentes...');
  importarTotalDocentes({
    anos: [2021, 2022, 2023, 2024],
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
