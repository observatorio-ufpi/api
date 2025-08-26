import axios from 'axios';
import { PrismaClient } from '../prisma/educacao/generated/educacao-client/index.js';

const prisma = new PrismaClient();
const URL_BASE = 'https://simcaq.c3sl.ufpr.br/api/v1/';
const ESTADO_PIAUI = 22;

// Configurações para cada tipo de taxa
const TIPOS_TAXAS = {
  iliteracy_rate: {
    dimensoes: ['location', 'age_range_all'],
    faixa_etaria: 'age_range_all',
    faixa_etaria_model: 'FaixaEtariaTaxaConcEdlSupEAnafal',
    anos: [2019, 2020, 2021, 2022, 2023],
  },
  superior_education_conclusion_tax: {
    dimensoes: ['location', 'age_range_all'],
    faixa_etaria: 'age_range_all',
    faixa_etaria_model: 'FaixaEtariaTaxaConcEdlSupEAnafal',
    anos: [2019, 2020, 2021, 2022, 2023],
  },
  basic_education_conclusion: {
    dimensoes: ['location', 'age_range_19_to_64'],
    faixa_etaria: 'age_range_19_to_64',
    faixa_etaria_model: 'FaixaEtariaTaxaConclEdBasica',
    anos: [2019, 2020, 2021, 2022, 2023],
  },
  instruction_level: {
    dimensoes: ['instruction_level', 'location', 'age_range_all'],
    faixa_etaria: 'age_range_all',
    faixa_etaria_model: 'FaixaEtariaTaxaConcEdlSupEAnafal',
    anos: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    dimensao_obrigatoria: 'instruction_level',
  },
};

// Função para extrair idade inicial e final do nome da faixa etária
function extrairIdadesDoNome(nome) {
  // Padrões comuns para faixas etárias
  const padroes = [
    // "19 a 23 anos", "19-23 anos", "19 até 23 anos"
    /(\d+)\s*(?:a|-|até)\s*(\d+)\s*anos?/i,
    // "19 a 23", "19-23", "19 até 23"
    /(\d+)\s*(?:a|-|até)\s*(\d+)/,
    // "Acima de 24 anos", "Mais de 24 anos"
    /(?:acima|mais)\s+de\s+(\d+)\s*anos?/i,
    // "Até 18 anos", "Menos de 18 anos"
    /(?:até|menos\s+de)\s+(\d+)\s*anos?/i,
  ];

  for (const padrao of padroes) {
    const match = nome.match(padrao);
    if (match) {
      if (match[2]) {
        // Padrão com duas idades (ex: "19 a 23")
        return {
          idade_inicial: parseInt(match[1]),
          idade_final: parseInt(match[2]),
        };
      } else {
        // Padrão com uma idade (ex: "Acima de 24")
        const idade = parseInt(match[1]);
        if (
          nome.toLowerCase().includes('acima') ||
          nome.toLowerCase().includes('mais')
        ) {
          return {
            idade_inicial: idade + 1,
            idade_final: null,
          };
        } else {
          return {
            idade_inicial: null,
            idade_final: idade,
          };
        }
      }
    }
  }

  // Se não conseguir extrair, retorna null
  return {
    idade_inicial: null,
    idade_final: null,
  };
}

async function preencherDimensoes() {
  console.log('Preenchendo dimensões com base nos dados da API...');

  // Conjuntos para armazenar dimensões únicas encontradas
  const localizacoesEncontradas = new Set();
  const faixasEtariasSupAnafalEncontradas = new Set();
  const faixasEtariasEdBasicaEncontradas = new Set();
  const niveisInstrucaoEncontrados = new Set();

  // Buscar dados de exemplo para cada tipo para extrair as dimensões
  for (const [tipo, config] of Object.entries(TIPOS_TAXAS)) {
    try {
      // Buscar dados sem dimensões (consolidado) - apenas para tipos que não são instruction_level
      let dadosSemDimensoes = [];
      if (tipo !== 'instruction_level') {
        const urlSemDimensoes = construirUrl(tipo, config.anos[0], []);
        console.log(
          `Buscando dados consolidados para ${tipo}:`,
          urlSemDimensoes,
        );

        const responseSemDimensoes = await axios.get(urlSemDimensoes);
        dadosSemDimensoes = responseSemDimensoes.data.result || [];
      }

      // Buscar dados com dimensão individual: location
      let dadosLocation = [];
      if (tipo === 'instruction_level') {
        // Para instruction_level, location deve sempre vir com instruction_level
        const urlLocation = construirUrl(tipo, 2023, [
          'instruction_level',
          'location',
        ]);
        console.log(
          `Buscando dados por localização para ${tipo}:`,
          urlLocation,
        );

        try {
          const responseLocation = await axios.get(urlLocation);
          dadosLocation = responseLocation.data.result || [];
        } catch (error) {
          console.log(`Dados por localização não disponíveis para ${tipo}`);
        }
      } else {
        const urlLocation = construirUrl(tipo, config.anos[0], ['location']);
        console.log(
          `Buscando dados por localização para ${tipo}:`,
          urlLocation,
        );

        const responseLocation = await axios.get(urlLocation);
        dadosLocation = responseLocation.data.result || [];
      }

      // Buscar dados com dimensão individual: faixa etária
      let dadosFaixaEtaria = [];
      if (tipo === 'instruction_level') {
        // Para instruction_level, faixa etária deve sempre vir com instruction_level
        const urlFaixaEtaria = construirUrl(tipo, 2023, [
          'instruction_level',
          config.faixa_etaria,
        ]);
        console.log(
          `Buscando dados por faixa etária para ${tipo}:`,
          urlFaixaEtaria,
        );

        try {
          const responseFaixaEtaria = await axios.get(urlFaixaEtaria);
          dadosFaixaEtaria = responseFaixaEtaria.data.result || [];
        } catch (error) {
          console.log(`Dados por faixa etária não disponíveis para ${tipo}`);
        }
      } else {
        const urlFaixaEtaria = construirUrl(tipo, config.anos[0], [
          config.faixa_etaria,
        ]);
        console.log(
          `Buscando dados por faixa etária para ${tipo}:`,
          urlFaixaEtaria,
        );

        const responseFaixaEtaria = await axios.get(urlFaixaEtaria);
        dadosFaixaEtaria = responseFaixaEtaria.data.result || [];
      }

      // Buscar dados com dimensão individual: instruction_level (apenas para instruction_level)
      let dadosInstructionLevel = [];
      if (tipo === 'instruction_level') {
        // Usar 2023 que sabemos que tem dados
        const urlInstructionLevel = construirUrl(tipo, 2023, [
          'instruction_level',
        ]);
        console.log(
          `Buscando dados por nível de instrução para ${tipo}:`,
          urlInstructionLevel,
        );

        try {
          const responseInstructionLevel = await axios.get(urlInstructionLevel);
          dadosInstructionLevel = responseInstructionLevel.data.result || [];
        } catch (error) {
          console.log(
            `Dados por nível de instrução não disponíveis para ${tipo}`,
          );
        }
      }

      // Buscar dados com combinação de dimensões
      let dadosCombinacao = [];
      if (tipo === 'instruction_level') {
        // Para instruction_level, buscar as combinações que sabemos que funcionam
        const combinacoes = [
          ['instruction_level', 'location'],
          ['instruction_level', 'age_range_all'],
        ];

        for (const combinacao of combinacoes) {
          const urlCombinacao = construirUrl(tipo, 2023, combinacao);
          console.log(`Buscando dados combinados para ${tipo}:`, urlCombinacao);

          try {
            const responseCombinacao = await axios.get(urlCombinacao);
            dadosCombinacao = [
              ...dadosCombinacao,
              ...(responseCombinacao.data.result || []),
            ];
          } catch (error) {
            console.log(
              `Dados combinados não disponíveis para ${tipo} - ${combinacao.join(
                ',',
              )}`,
            );
          }
        }
      } else {
        const urlCombinacao = construirUrl(
          tipo,
          config.anos[0],
          config.dimensoes,
        );
        console.log(`Buscando dados combinados para ${tipo}:`, urlCombinacao);

        const responseCombinacao = await axios.get(urlCombinacao);
        dadosCombinacao = responseCombinacao.data.result || [];
      }

      // Processar todos os dados coletados
      const todosDados = [
        ...dadosSemDimensoes,
        ...dadosLocation,
        ...dadosFaixaEtaria,
        ...dadosInstructionLevel,
        ...dadosCombinacao,
      ];

      for (const item of todosDados) {
        // Coletar localizações
        if (item.location_id) {
          localizacoesEncontradas.add(
            JSON.stringify({
              id: item.location_id,
              nome: item.location_name || `Localização ${item.location_id}`,
            }),
          );
        }

        // Coletar níveis de instrução (apenas para instruction_level)
        if (tipo === 'instruction_level' && item.instruction_level_id) {
          niveisInstrucaoEncontrados.add(
            JSON.stringify({
              id: item.instruction_level_id,
              nome:
                item.instruction_level_name ||
                `Nível ${item.instruction_level_id}`,
            }),
          );
        }

        // Coletar faixas etárias baseado no tipo
        if (config.faixa_etaria_model === 'FaixaEtariaTaxaConcEdlSupEAnafal') {
          const faixaId = item.age_range_all_id || item.age_range_19_to_64_id;
          if (faixaId) {
            const nome =
              item.age_range_all_name ||
              item.age_range_19_to_64_name ||
              `Faixa ${faixaId}`;
            const { idade_inicial, idade_final } = extrairIdadesDoNome(nome);

            faixasEtariasSupAnafalEncontradas.add(
              JSON.stringify({
                id: faixaId,
                nome: nome,
                idade_inicial: idade_inicial,
                idade_final: idade_final,
              }),
            );
          }
        } else if (
          config.faixa_etaria_model === 'FaixaEtariaTaxaConclEdBasica'
        ) {
          const faixaId = item.age_range_19_to_64_id;
          if (faixaId) {
            const nome = item.age_range_19_to_64_name || `Faixa ${faixaId}`;
            const { idade_inicial, idade_final } = extrairIdadesDoNome(nome);

            faixasEtariasEdBasicaEncontradas.add(
              JSON.stringify({
                id: faixaId,
                nome: nome,
                idade_inicial: idade_inicial,
                idade_final: idade_final,
              }),
            );
          }
        }
      }

      // Pequena pausa entre tipos
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`Erro ao buscar dimensões para ${tipo}:`, error.message);
    }
  }

  // Preencher localizações encontradas
  for (const localizacaoJson of localizacoesEncontradas) {
    const localizacao = JSON.parse(localizacaoJson);
    await prisma.localizacao.upsert({
      where: { id: localizacao.id },
      create: localizacao,
      update: localizacao,
    });
  }
  console.log(
    `Localizações preenchidas: ${localizacoesEncontradas.size} registros`,
  );

  // Preencher faixas etárias para superior e anafal
  for (const faixaJson of faixasEtariasSupAnafalEncontradas) {
    const faixa = JSON.parse(faixaJson);
    await prisma.faixaEtariaTaxaConcEdlSupEAnafal.upsert({
      where: { id: faixa.id },
      create: faixa,
      update: faixa,
    });
  }
  console.log(
    `Faixas etárias para superior e anafal preenchidas: ${faixasEtariasSupAnafalEncontradas.size} registros`,
  );

  // Preencher faixas etárias para educação básica
  for (const faixaJson of faixasEtariasEdBasicaEncontradas) {
    const faixa = JSON.parse(faixaJson);
    await prisma.faixaEtariaTaxaConclEdBasica.upsert({
      where: { id: faixa.id },
      create: faixa,
      update: faixa,
    });
  }
  console.log(
    `Faixas etárias para educação básica preenchidas: ${faixasEtariasEdBasicaEncontradas.size} registros`,
  );

  // Preencher níveis de instrução
  for (const nivelJson of niveisInstrucaoEncontrados) {
    const nivel = JSON.parse(nivelJson);
    await prisma.nivelInstrucao.upsert({
      where: { id: nivel.id },
      create: nivel,
      update: nivel,
    });
  }
  console.log(
    `Níveis de instrução preenchidos: ${niveisInstrucaoEncontrados.size} registros`,
  );
}

function construirUrl(tipo, ano, dimensoes) {
  const dims = dimensoes.map((d) => d).join(',');
  const filter = `min_year:%22${ano}%22,max_year:%22${ano}%22,state:%22${ESTADO_PIAUI}%22`;
  return `${URL_BASE}${tipo}?dims=${dims}&filter=${filter}`;
}

async function importarTaxaAno(tipo, ano) {
  const config = TIPOS_TAXAS[tipo];
  let totalCount = 0;

  try {
    // Para instruction_level, buscar as três combinações que funcionam
    if (tipo === 'instruction_level') {
      // 1. Buscar dados apenas com instruction_level (obrigatório)
      const urlInstructionLevel = construirUrl(tipo, ano, [
        'instruction_level',
      ]);
      console.log(
        `Buscando ${tipo} por nível de instrução para ${ano}:`,
        urlInstructionLevel,
      );

      try {
        const responseInstructionLevel = await axios.get(urlInstructionLevel);
        const dadosInstructionLevel =
          responseInstructionLevel.data.result || [];
        totalCount += await processarDados(
          tipo,
          ano,
          dadosInstructionLevel,
          config,
        );
      } catch (error) {
        console.log(
          `Dados por nível de instrução não disponíveis para ${tipo} - ${ano}`,
        );
      }

      await new Promise((resolve) => setTimeout(resolve, 500));

      // 2. Buscar dados com instruction_level + location
      const urlInstructionLocation = construirUrl(tipo, ano, [
        'instruction_level',
        'location',
      ]);
      console.log(
        `Buscando ${tipo} por nível de instrução + localização para ${ano}:`,
        urlInstructionLocation,
      );

      try {
        const responseInstructionLocation = await axios.get(
          urlInstructionLocation,
        );
        const dadosInstructionLocation =
          responseInstructionLocation.data.result || [];
        totalCount += await processarDados(
          tipo,
          ano,
          dadosInstructionLocation,
          config,
        );
      } catch (error) {
        console.log(
          `Dados por nível de instrução + localização não disponíveis para ${tipo} - ${ano}`,
        );
      }

      await new Promise((resolve) => setTimeout(resolve, 500));

      // 3. Buscar dados com instruction_level + age_range_all
      const urlInstructionAgeRange = construirUrl(tipo, ano, [
        'instruction_level',
        'age_range_all',
      ]);
      console.log(
        `Buscando ${tipo} por nível de instrução + faixa etária para ${ano}:`,
        urlInstructionAgeRange,
      );

      try {
        const responseInstructionAgeRange = await axios.get(
          urlInstructionAgeRange,
        );
        const dadosInstructionAgeRange =
          responseInstructionAgeRange.data.result || [];
        totalCount += await processarDados(
          tipo,
          ano,
          dadosInstructionAgeRange,
          config,
        );
      } catch (error) {
        console.log(
          `Dados por nível de instrução + faixa etária não disponíveis para ${tipo} - ${ano}`,
        );
      }
    } else {
      // Para outros tipos, manter a lógica original
      // 1. Buscar dados sem dimensões (consolidado)
      const urlSemDimensoes = construirUrl(tipo, ano, []);
      console.log(`Buscando ${tipo} consolidado para ${ano}:`, urlSemDimensoes);

      const responseSemDimensoes = await axios.get(urlSemDimensoes);
      const dadosSemDimensoes = responseSemDimensoes.data.result || [];
      totalCount += await processarDados(tipo, ano, dadosSemDimensoes, config);

      await new Promise((resolve) => setTimeout(resolve, 500));

      // 2. Buscar dados com dimensão individual: location
      const urlLocation = construirUrl(tipo, ano, ['location']);
      console.log(`Buscando ${tipo} por localização para ${ano}:`, urlLocation);

      const responseLocation = await axios.get(urlLocation);
      const dadosLocation = responseLocation.data.result || [];
      totalCount += await processarDados(tipo, ano, dadosLocation, config);

      await new Promise((resolve) => setTimeout(resolve, 500));

      // 3. Buscar dados com dimensão individual: faixa etária
      const urlFaixaEtaria = construirUrl(tipo, ano, [config.faixa_etaria]);
      console.log(
        `Buscando ${tipo} por faixa etária para ${ano}:`,
        urlFaixaEtaria,
      );

      const responseFaixaEtaria = await axios.get(urlFaixaEtaria);
      const dadosFaixaEtaria = responseFaixaEtaria.data.result || [];
      totalCount += await processarDados(tipo, ano, dadosFaixaEtaria, config);

      await new Promise((resolve) => setTimeout(resolve, 500));

      // 4. Buscar dados com combinação de dimensões
      const urlCombinacao = construirUrl(tipo, ano, config.dimensoes);
      console.log(`Buscando ${tipo} combinado para ${ano}:`, urlCombinacao);

      const responseCombinacao = await axios.get(urlCombinacao);
      const dadosCombinacao = responseCombinacao.data.result || [];
      totalCount += await processarDados(tipo, ano, dadosCombinacao, config);
    }

    console.log(
      `${tipo} - Ano ${ano}: ${totalCount} registros importados no total.`,
    );
  } catch (error) {
    console.error(`Erro ao importar ${tipo} para ${ano}:`, error.message);
  }
}

async function processarDados(tipo, ano, dados, config) {
  let count = 0;

  for (const item of dados) {
    // Determinar o modelo de faixa etária baseado no tipo
    let faixaEtariaSupAnafalId = null;
    let faixaEtariaEdBasicaId = null;

    if (config.faixa_etaria_model === 'FaixaEtariaTaxaConcEdlSupEAnafal') {
      faixaEtariaSupAnafalId =
        item.age_range_all_id || item.age_range_19_to_64_id;
    } else if (config.faixa_etaria_model === 'FaixaEtariaTaxaConclEdBasica') {
      faixaEtariaEdBasicaId = item.age_range_19_to_64_id;
    }

    // Determinar localização
    const localizacaoId = item.location_id;

    // Determinar nível de instrução (apenas para instruction_level)
    const nivelInstrucaoId =
      tipo === 'instruction_level' ? item.instruction_level_id : null;

    // Verificar se o registro já existe
    const registroExistente = await prisma.taxas.findFirst({
      where: {
        tipo: tipo,
        ano: ano,
        localidade_id: ESTADO_PIAUI,
        localizacao_id: localizacaoId,
        faixa_etaria_taxas_concl_sup_e_anafal_id: faixaEtariaSupAnafalId,
        faixa_etaria_taxas_concl_ed_basica_id: faixaEtariaEdBasicaId,
        nivel_instrucao_id: nivelInstrucaoId,
      },
    });

    const dadosParaSalvar = {
      tipo: tipo,
      ano: ano,
      total: Number(item.total),
      localidade_id: ESTADO_PIAUI,
      localizacao_id: localizacaoId,
      faixa_etaria_taxas_concl_sup_e_anafal_id: faixaEtariaSupAnafalId,
      faixa_etaria_taxas_concl_ed_basica_id: faixaEtariaEdBasicaId,
      nivel_instrucao_id: nivelInstrucaoId,
    };

    if (registroExistente) {
      // Atualizar registro existente
      await prisma.taxas.update({
        where: { id: registroExistente.id },
        data: {
          total: dadosParaSalvar.total,
        },
      });
    } else {
      // Criar novo registro
      await prisma.taxas.create({
        data: dadosParaSalvar,
      });
    }
    count++;
  }

  return count;
}

async function main() {
  try {
    console.log('Iniciando importação de taxas para instruction_level...');

    // Preencher dimensões primeiro
    await preencherDimensoes();

    // Importar dados para cada tipo
    // for (const [tipo, config] of Object.entries(TIPOS_TAXAS)) {
    //   console.log(`\nImportando dados para ${tipo}...`);
    //   for (const ano of config.anos) {
    //     await importarTaxaAno(tipo, ano);
    //     // Pequena pausa para não sobrecarregar a API
    //     await new Promise((resolve) => setTimeout(resolve, 1000));
    //   }
    // Importar dados apenas para instruction_level
    const tipo = 'instruction_level';
    const config = TIPOS_TAXAS[tipo];

    console.log(`\nImportando dados para ${tipo}...`);
    for (const ano of config.anos) {
      await importarTaxaAno(tipo, ano);
      // Pequena pausa para não sobrecarregar a API
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    console.log('\nImportação concluída com sucesso!');
  } catch (error) {
    console.error('Erro durante a importação:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error('Erro fatal:', e);
  prisma.$disconnect();
  process.exit(1);
});
