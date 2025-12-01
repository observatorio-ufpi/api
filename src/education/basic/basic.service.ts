import { Injectable } from '@nestjs/common';
import {
  DataSourceType,
  EducationResponse,
  FilterParams,
  MappingContext,
} from '../../interfaces/education.interface';
import { municipios } from '../../utils/citiesMapping';
import { PrismaEducacaoService } from '../prisma-educacao.service';
import { EducationResponseMapper } from './mappers/education-response.mapper';

@Injectable()
export class BasicService {
  // Mapeamento de IDs das etapas de matrícula (até 2020 -> 2021+)
  private readonly etapaMatriculaMapping = {
    1: 1, // Creche
    2: 2, // Pré-Escola
    4: 3, // Ensino Fundamental - anos iniciais
    5: 4, // Ensino Fundamental - anos finais
    7: 5, // Ensino Médio
    8: 6, // Ensino Médio Integrado ou Normal - técnico
    9: 7, // EJA - Ensino Fundamental
    10: 8, // EJA - Ensino Médio
    11: 9, // EJA - EF e EM Integrado - técnico
    12: 10, // Educação Profissional - concomitante e subsequente
  };

  constructor(
    private prisma: PrismaEducacaoService,
    private mapper: EducationResponseMapper,
  ) {}

  /**
   * Busca o nome do município pelo código
   * @param codigoMunicipio Código do município (ex: 2211001)
   * @returns Nome do município ou null se não encontrado
   */
  private getMunicipioName(codigoMunicipio: number | null): string | null {
    if (!codigoMunicipio) return null;
    const municipio = municipios[codigoMunicipio];
    return municipio?.nomeMunicipio || null;
  }

  /**
   * Normaliza o ID da etapa de matrícula baseado no ano
   * @param etapaId ID da etapa original
   * @param year Ano dos dados
   * @returns ID normalizado para comparação entre períodos
   */
  private normalizeEtapaId(etapaId: number, year: number): number {
    if (year <= 2020) {
      // Para dados até 2020, mapear para o ID do período 2021+
      return this.etapaMatriculaMapping[etapaId] || etapaId;
    }
    // Para dados de 2021+, retornar o ID original
    return etapaId;
  }

  /**
   * Normaliza os IDs das etapas em dados de matrícula para série histórica
   * @param data Dados mapeados
   * @param tipo Tipo dos dados
   * @param filterParams Parâmetros do filtro
   * @returns Dados com IDs normalizados
   */
  private normalizeEtapaIdsForHistoricalSeries(
    data: any[],
    tipo: string,
    filterParams: FilterParams,
  ): any[] {
    // Só aplicar normalização para enrollment com série histórica cruzando 2020/2021
    if (
      tipo !== 'enrollment' ||
      !filterParams.years.some((y) => y <= 2020) ||
      !filterParams.years.some((y) => y >= 2021)
    ) {
      return data;
    }

    return data.map((item) => {
      if (item.education_level_mod_id !== null) {
        const normalizedId = this.normalizeEtapaId(
          item.education_level_mod_id,
          item.year,
        );
        return {
          ...item,
          education_level_mod_id: normalizedId,
        };
      }
      return item;
    });
  }

  async getEnrollment(dims: string, filter: string) {
    return this.queryDataTwoDimensions('enrollment', dims, filter);
  }

  async getSchoolCount(dims: string, filter: string) {
    return this.queryDataTwoDimensions('school/count', dims, filter);
  }

  async getClass(dims: string, filter: string) {
    return this.queryDataTwoDimensions('class', dims, filter);
  }

  async getTeacher(dims: string, filter: string) {
    return this.queryDataTwoDimensions('teacher', dims, filter);
  }

  async getEmployees(dims: string, filter: string) {
    return this.queryDataTwoDimensions('employees', dims, filter);
  }

  // Métodos públicos para série histórica
  async getEnrollmentTimeSeries(dims: string, filter: string) {
    return this.serieHistorica('enrollment', dims, filter);
  }

  async getSchoolCountTimeSeries(dims: string, filter: string) {
    return this.serieHistorica('school/count', dims, filter);
  }

  async getClassTimeSeries(dims: string, filter: string) {
    return this.serieHistorica('class', dims, filter);
  }

  async getTeacherTimeSeries(dims: string, filter: string) {
    return this.serieHistorica('teacher', dims, filter);
  }

  async getEmployeesTimeSeries(dims: string, filter: string) {
    return this.serieHistorica('employees', dims, filter);
  }

  private async queryDataTwoDimensions(
    tipo: string,
    dims: string,
    filter: string,
  ): Promise<EducationResponse> {
    const filterParams = this.parseFilter(filter);
    const dimensions = this.parseDims(dims);

    // Definir quais relacionamentos incluir com base nas dimensões passadas
    const include: any = {
      dependencia: true,
      dependencia_teacher: true,
      etapa: true,
      etapa_school: true,
      etapa_teacher: true,
      etapa_turma: true,
      etapa_matricula_ate2020: true,
      localizacao: true,
    };

    if (tipo === 'enrollment' && filterParams.years.some((y) => y >= 2021))
      tipo = 'enrollmentAggregate';

    // Condições para usar queryDataTwoDimensions (com filtro corrigido):
    // 1. Dados até 2023 (lógica original)
    // 2. Teacher em qualquer ano (2024+) - sempre tratado como 2023 para aplicar filtro correto
    //if (filterParams.years.some((y) => y <= 2023) || tipo === 'teacher') {
    try {
      // Tipo teacher >= 2021 está com nome federativeEntity no banco de dados
      if (tipo === 'teacher' && filterParams.years.some((y) => y >= 2021))
        tipo = 'federativeEntity';

      // Se a dimensão municipality estiver presente, buscar dados de todos os municípios do estado
      // Caso contrário, usar filtro normal (cidade específica ou estado)
      const whereClause: any = {
        tipo,
        ano: { in: filterParams.years },
      };

      if (dimensions.includes('municipality')) {
        // Se tem dimensão municipality, buscar todos os municípios do estado
        if (filterParams.city) {
          // Se foi especificada uma cidade, buscar apenas essa
          whereClause.localidade_id = Number(filterParams.city);
        } else {
          // Buscar todos os municípios do estado
          // Obter todos os códigos de municípios do mapeamento
          const municipioCodes = Object.keys(municipios).map(Number);
          whereClause.localidade_id = { in: municipioCodes };
        }
      } else {
        // Lógica normal: cidade específica ou estado
        whereClause.localidade_id = filterParams.city
          ? Number(filterParams.city)
          : Number(filterParams.state);
      }

      // Buscar todos os registros do tipo/ano/localidade
      const results = await this.prisma.dadoEducacaoBasica.findMany({
        where: whereClause,
        include,
      });

      // Filtrar dados originais antes do mapeamento para tipos sem dimensões
      let filteredResults = results;
      if (
        (tipo === 'teacher' || tipo === 'federativeEntity') &&
        filterParams.years.some((y) => y >= 2021) &&
        dimensions.length === 0
      ) {
        // Filtrar apenas registros com TODAS as dimensões null nos dados originais
        filteredResults = results.filter(
          (item) =>
            !item.dependencia_id &&
            !item.dependencia_teacher_id &&
            !item.etapa_id &&
            !item.etapa_school_id &&
            !item.etapa_teacher_id &&
            !item.etapa_turma_id &&
            !item.etapa_matricula_ate2020_id &&
            !item.localizacao_id &&
            !item.vinculo_id &&
            !item.formacao_id &&
            !item.faixa_etaria_id &&
            !item.contrato_id,
        );
      }

      // Criar contexto para o mapper
      const mappingContext: MappingContext = {
        tipo,
        filterParams,
        dimensions,
        dataSource: DataSourceType.DADOS_EDUCACAO_BASICA,
      };

      // Usar o mapper para padronizar a resposta
      const standardResponse = this.mapper.mapToStandardFormat(
        filteredResults,
        mappingContext,
      );

      // Enriquecer dados com nome do município se a dimensão municipality estiver presente
      if (dimensions.includes('municipality')) {
        standardResponse.result = standardResponse.result.map((item) => ({
          ...item,
          municipality_name: this.getMunicipioName(item.municipality_id),
        }));
      }

      // Remover itens excluídos
      const finalFilteredResults = this.mapper.removeExcludedItems(
        standardResponse.result,
        mappingContext,
      );
      standardResponse.result = finalFilteredResults;

      // Normalizar IDs das etapas para série histórica antes do processamento
      standardResponse.result = this.normalizeEtapaIdsForHistoricalSeries(
        standardResponse.result,
        tipo,
        filterParams,
      );

      // Lógica de agrupamento baseada nas dimensões
      if (dimensions.length === 0) {
        // Sem dimensões - usar combinação fixa para evitar dupla contagem
        standardResponse.result = this.processNoDimensions(
          standardResponse.result,
          tipo,
          filterParams,
        );
      } else if (dimensions.length === 1) {
        // Com uma dimensão - aplicar lógica específica baseada no tipo
        standardResponse.result = this.processSingleDimension(
          standardResponse.result,
          dimensions[0],
          tipo,
          filterParams,
        );
      } else if (dimensions.length === 2) {
        // Com duas dimensões - manter todos os dados detalhados
        standardResponse.result = this.processTwoDimensions(
          standardResponse.result,
          dimensions,
        );
      }

      return standardResponse;
    } catch (error) {
      console.error('Erro ao buscar dados da educação básica:', error);
      throw new Error('Falha ao recuperar dados da educação básica');
    }
    //}

    // Fallback para dados após 2023 (exceto teacher sem dimensões que já foi tratado acima)
    //return this.queryDataApos23(tipo, dims, filter);
  }

  private processNoDimensions(
    data: any[],
    tipo: string,
    filterParams: FilterParams,
  ): any[] {
    // CORREÇÃO: Usar a mesma lógica do queryDataTwoDimensions para 0 dimensões
    // Escolher uma combinação fixa para evitar dupla contagem

    if (
      (tipo === 'teacher' || tipo === 'federativeEntity') &&
      filterParams.years.some((y) => y >= 2021)
    ) {
      // Para teacher >= 2021, escolher uma dimensão para agrupar
      const filtered = data.filter((item) => item.location_id == null);

      const totalPorAno = {};
      for (const item of filtered) {
        totalPorAno[item.year] = (totalPorAno[item.year] || 0) + item.total;
      }
      return Object.entries(totalPorAno).map(([year, total]) => ({
        year: Number(year),
        total,
      }));
    }

    // Lógica específica para employees (que não tem education_level_mod)
    if (tipo === 'employees') {
      const filtered = data.filter((item) => item.location_id !== null);

      // console.log('Dados filtrados (employees 0 dims):', filtered);

      const totalPorAno = {};
      for (const item of filtered) {
        totalPorAno[item.year] = (totalPorAno[item.year] || 0) + item.total;
      }

      const result = Object.entries(totalPorAno).map(([year, total]) => ({
        year: Number(year),
        total,
      }));

      // console.log('Resultado final (employees 0 dimensões):', result);

      return result;
    }

    // Lógica padrão para os outros tipos
    const filtered = data.filter(
      (item) =>
        item.location_id !== null && item.education_level_mod_id !== null,
    );

    // console.log('Dados filtrados (0 dimensões):', filtered);

    // Agrupar por ano
    const totalPorAno = {};
    for (const item of filtered) {
      totalPorAno[item.year] = (totalPorAno[item.year] || 0) + item.total;
    }
    // console.log(totalPorAno);

    const result = Object.entries(totalPorAno).map(([year, total]) => ({
      year: Number(year),
      total,
    }));

    // console.log('Resultado final (0 dimensões):', result);

    return result;
  }

  private processSingleDimension(
    data: any[],
    dimension: string,
    tipo: string,
    filterParams: FilterParams,
  ): any[] {
    let mainDim: string, mainName: string;

    // Mapear dimensão para campos correspondentes padronizados
    if (
      tipo === 'federativeEntity' &&
      filterParams.years.some((y) => y >= 2021)
    ) {
      const dimensionMap = {
        education_level_mod: [
          'education_level_mod_id',
          'education_level_mod_name',
        ],
        adm_dependency_detailed: [
          'adm_dependency_detailed_id',
          'adm_dependency_detailed_name',
        ],
        location: ['location_id', 'location_name'],
        contract_type: ['contract_type_id', 'contract_type_name'],
        municipality: ['municipality_id', 'municipality_name'],
      };
      [mainDim, mainName] = dimensionMap[dimension] || ['', ''];
    } else {
      const dimensionMap = {
        education_level_mod: [
          'education_level_mod_id',
          'education_level_mod_name',
        ],
        adm_dependency_detailed: [
          'adm_dependency_detailed_id',
          'adm_dependency_detailed_name',
        ],
        location: ['location_id', 'location_name'],
        municipality: ['municipality_id', 'municipality_name'],
      };
      [mainDim, mainName] = dimensionMap[dimension] || ['', ''];
    }

    // CORREÇÃO: Usar a mesma lógica do queryDataTwoDimensions
    // Escolher uma combinação fixa de dimensões para evitar dupla contagem

    if (
      tipo === 'federativeEntity' &&
      filterParams.years.some((y) => y >= 2021)
    ) {
      // Para teacher >= 2021, filtrar apenas pela dimensão principal
      const filtered = data.filter((item) => item[mainDim] !== null);

      // console.log('Dados filtrados (federativeEntity):', filtered);

      // Agrupar por ano + valor da dimensão
      const groupMap = new Map();
      for (const item of filtered) {
        const key = `${item.year}|${item[mainDim]}`;
        if (!groupMap.has(key)) {
          groupMap.set(key, {
            year: item.year,
            [mainDim]: item[mainDim],
            [mainName]: item[mainName],
            total: 0,
          });
        }
        groupMap.get(key).total += item.total;
      }

      // console.log('Mapa agrupado (federativeEntity):', groupMap);

      return Array.from(groupMap.values()).sort((a, b) => {
        if (a.year !== b.year) return a.year - b.year;
        return a[mainDim] - b[mainDim];
      });
    } else if (tipo === 'employees') {
      // Para employees, que não tem education_level_mod, usar apenas a dimensão solicitada
      const filtered = data.filter((item) => item[mainDim] !== null);

      // console.log('Dados filtrados (employees):', filtered);

      // Agrupar por ano + valor da dimensão
      const groupMap = new Map();
      for (const item of filtered) {
        const key = `${item.year}|${item[mainDim]}`;
        if (!groupMap.has(key)) {
          groupMap.set(key, {
            year: item.year,
            [mainDim]: item[mainDim],
            [mainName]: item[mainName],
            total: 0,
          });
        }
        groupMap.get(key).total += item.total;
      }

      // console.log('Mapa agrupado (employees):', groupMap);

      return Array.from(groupMap.values()).sort((a, b) => {
        if (a.year !== b.year) return a.year - b.year;
        return a[mainDim] - b[mainDim];
      });
    } else {
      // Para outros tipos, usar combinação fixa de dimensões
      let fixedCombo: [string, string];

      if (dimension === 'education_level_mod') {
        fixedCombo = ['education_level_mod_id', 'adm_dependency_detailed_id'];
      } else if (dimension === 'adm_dependency_detailed') {
        fixedCombo = ['adm_dependency_detailed_id', 'education_level_mod_id'];
      } else if (dimension === 'municipality') {
        // Para municipality, usar combinação fixa de outras dimensões (etapa + localidade)
        // para calcular o total por município, evitando dupla contagem
        // municipality é o localidade_id, então precisamos combinar com outras dimensões
        const filtered = data.filter(
          (item) =>
            item.municipality_id !== null &&
            item.education_level_mod_id !== null &&
            item.location_id !== null,
        );

        // Agrupar apenas por ano + municipality_id, somando todos os valores
        // da combinação etapa + localidade para cada município
        const groupMap = new Map();
        for (const item of filtered) {
          const key = `${item.year}|${item.municipality_id}`;
          if (!groupMap.has(key)) {
            groupMap.set(key, {
              year: item.year,
              municipality_id: item.municipality_id,
              municipality_name: item.municipality_name,
              // Garantir que outras dimensões sejam null
              education_level_mod_id: null,
              education_level_mod_name: null,
              adm_dependency_detailed_id: null,
              adm_dependency_detailed_name: null,
              location_id: null,
              location_name: null,
              total: 0,
            });
          }
          groupMap.get(key).total += item.total;
        }

        return Array.from(groupMap.values()).sort((a, b) => {
          if (a.year !== b.year) return a.year - b.year;
          return a.municipality_id - b.municipality_id;
        });
      } else {
        fixedCombo = ['location_id', 'education_level_mod_id'];
      }

      const [mainDimFixed, otherDim] = fixedCombo;
      const mainNameFixed = mainDimFixed.replace('_id', '_name');

      // Filtrar registros onde ambas as dimensões da combinação estão presentes
      const filtered = data.filter(
        (item) => item[mainDimFixed] !== null && item[otherDim] !== null,
      );

      //console.log('Dados filtrados com combinação fixa:', filtered);

      // Agrupar por ano + valor da dimensão desejada
      const groupMap = new Map();
      for (const item of filtered) {
        const key = `${item.year}|${item[mainDimFixed]}`;
        if (!groupMap.has(key)) {
          groupMap.set(key, {
            year: item.year,
            [mainDimFixed]: item[mainDimFixed],
            [mainNameFixed]: item[mainNameFixed],
            total: 0,
          });
        }
        groupMap.get(key).total += item.total;
      }

      // console.log('Mapa de agrupamento final:', groupMap);

      return Array.from(groupMap.values()).sort((a, b) => {
        if (a.year !== b.year) return a.year - b.year;
        return a[mainDimFixed] - b[mainDimFixed];
      });
    }
  }

  private processTwoDimensions(data: any[], dimensions: string[]): any[] {
    // Para duas dimensões, retornar dados detalhados agrupados
    // IMPORTANTE: Município não é uma dimensão no banco, então os dados podem vir
    // com outras dimensões preenchidas (etapa, dependência, etc). Precisamos
    // agrupar pelas dimensões solicitadas e retornar APENAS esses campos.
    // ATENÇÃO: Quando municipality está envolvido, usar combinação fixa para evitar dupla contagem
    const groupMap = new Map();

    // Mapear dimensões para seus campos correspondentes
    const dimensionFields: Record<string, { id: string; name: string }> = {
      education_level_mod: {
        id: 'education_level_mod_id',
        name: 'education_level_mod_name',
      },
      adm_dependency_detailed: {
        id: 'adm_dependency_detailed_id',
        name: 'adm_dependency_detailed_name',
      },
      location: {
        id: 'location_id',
        name: 'location_name',
      },
      contract_type: {
        id: 'contract_type_id',
        name: 'contract_type_name',
      },
      municipality: {
        id: 'municipality_id',
        name: 'municipality_name',
      },
    };

    // Verificar se municipality está envolvido
    const hasMunicipality = dimensions.includes('municipality');
    const hasLocation = dimensions.includes('location');
    const hasEducationLevel = dimensions.includes('education_level_mod');
    const hasAdmDependency = dimensions.includes('adm_dependency_detailed');

    // Se municipality está envolvido, precisamos usar uma combinação fixa para evitar dupla contagem
    if (hasMunicipality) {
      let filtered: any[];

      if (hasLocation) {
        // municipality + location: usar combinação fixa etapa + localidade
        filtered = data.filter(
          (item) =>
            item.municipality_id !== null &&
            item.location_id !== null &&
            item.education_level_mod_id !== null,
        );
      } else if (hasEducationLevel) {
        // municipality + education_level_mod: usar combinação fixa etapa + localidade
        // (etapa já está nas dimensões, então só precisamos garantir localidade)
        filtered = data.filter(
          (item) =>
            item.municipality_id !== null &&
            item.education_level_mod_id !== null &&
            item.location_id !== null,
        );
      } else if (hasAdmDependency) {
        // municipality + adm_dependency_detailed: usar combinação fixa dependência + localidade
        // (dependência já está nas dimensões, então só precisamos garantir localidade)
        filtered = data.filter(
          (item) =>
            item.municipality_id !== null &&
            item.adm_dependency_detailed_id !== null &&
            item.location_id !== null,
        );
      } else {
        // municipality + outra dimensão: usar combinação fixa etapa + localidade (padrão)
        filtered = data.filter(
          (item) =>
            item.municipality_id !== null &&
            item.education_level_mod_id !== null &&
            item.location_id !== null,
        );
      }

      for (const item of filtered) {
        // Criar chave única baseada no ano e valores das dimensões selecionadas
        const keys = dimensions.map((dim) => {
          const field = dimensionFields[dim];
          return field ? item[field.id] : null;
        });

        const shouldInclude = keys.every((k) => k !== null);

        if (shouldInclude) {
          const key = `${item.year}|${keys.join('|')}`;
          if (!groupMap.has(key)) {
            // Criar objeto apenas com os campos das dimensões selecionadas
            const resultItem: any = {
              year: item.year,
              total: 0,
            };

            // Adicionar apenas os campos das dimensões selecionadas
            dimensions.forEach((dim) => {
              const field = dimensionFields[dim];
              if (field) {
                resultItem[field.id] = item[field.id];
                resultItem[field.name] = item[field.name];
              }
            });

            // Garantir que outras dimensões sejam null
            Object.keys(dimensionFields).forEach((dim) => {
              if (!dimensions.includes(dim)) {
                const field = dimensionFields[dim];
                resultItem[field.id] = null;
                resultItem[field.name] = null;
              }
            });

            groupMap.set(key, resultItem);
          }
          groupMap.get(key).total += item.total;
        }
      }
    } else {
      // Para outras combinações de dimensões (sem municipality), usar lógica normal
      for (const item of data) {
        // Criar chave única baseada no ano e valores das dimensões selecionadas
        const keys = dimensions.map((dim) => {
          const field = dimensionFields[dim];
          return field ? item[field.id] : null;
        });

        // Para employees, não exigir que todas as dimensões tenham valores não nulos
        // já que employees não tem education_level_mod
        const shouldInclude = keys.every((k) => k !== null);

        if (shouldInclude) {
          const key = `${item.year}|${keys.join('|')}`;
          if (!groupMap.has(key)) {
            // Criar objeto apenas com os campos das dimensões selecionadas
            const resultItem: any = {
              year: item.year,
              total: 0,
            };

            // Adicionar apenas os campos das dimensões selecionadas
            dimensions.forEach((dim) => {
              const field = dimensionFields[dim];
              if (field) {
                resultItem[field.id] = item[field.id];
                resultItem[field.name] = item[field.name];
              }
            });

            // Garantir que outras dimensões sejam null
            Object.keys(dimensionFields).forEach((dim) => {
              if (!dimensions.includes(dim)) {
                const field = dimensionFields[dim];
                resultItem[field.id] = null;
                resultItem[field.name] = null;
              }
            });

            groupMap.set(key, resultItem);
          }
          groupMap.get(key).total += item.total;
        }
      }
    }

    return Array.from(groupMap.values()).sort((a, b) => {
      if (a.year !== b.year) return a.year - b.year;
      return 0; // Manter ordem original para outras dimensões
    });
  }

  // Método para retornar série histórica com duas dimensões
  /**
  private async serieHistoricaTwoDimensions(
    tipo: string,
    dims: string,
    filter: string,
  ): Promise<EducationResponse> {
    const filterParams = this.parseFilter(filter);

    // Verificar se precisa consultar dados de ambos os períodos
    const hasYearsUntil2023 = filterParams.years.some((y) => y <= 2023);
    const hasYearsAfter2023 = filterParams.years.some((y) => y > 2023);

    // Caso especial: teacher em qualquer ano sempre usa lógica até 2023 (com filtro corrigido)
    if (tipo === 'teacher') {
      return this.serieHistorica(tipo, dims, filter);
    }

    // Se tem anos de ambos os períodos, usar método unificado
    if (hasYearsUntil2023 && hasYearsAfter2023) {
      return this.serieHistoricaUnificada(tipo, dims, filter);
    }

    // Se só tem anos até 2023, usar lógica original
    if (hasYearsUntil2023) {
      return this.serieHistorica(tipo, dims, filter);
    }

    // Se só tem anos após 2023, usar método específico
    if (hasYearsAfter2023) {
      return this.serieHistoricaApos2023(tipo, dims, filter);
    }

    // Fallback para lógica original
    return this.serieHistorica(tipo, dims, filter);
  }
  */

  // Método unificado para série histórica que combina dados até 2023 e após 2023
  /**
  private async serieHistoricaUnificada(
    tipo: string,
    dims: string,
    filter: string,
  ): Promise<EducationResponse> {
    const filterParams = this.parseFilter(filter);
    const dimensions = this.parseDims(dims);

    try {
      // Separar anos em dois grupos
      const yearsUntil2023 = filterParams.years.filter((y) => y <= 2023);
      const yearsAfter2023 = filterParams.years.filter((y) => y > 2023);

      let allResults: any[] = [];

      // Consulta para dados até 2023
      if (yearsUntil2023.length > 0) {
        const filterUntil2023 = this.buildFilterString({
          ...filterParams,
          years: yearsUntil2023,
        });
        const resultsUntil2023 = await this.serieHistorica(
          tipo,
          dims,
          filterUntil2023,
        );
        allResults = allResults.concat(resultsUntil2023.result || []);
      }

      // Consulta para dados após 2023
      if (yearsAfter2023.length > 0) {
        const filterAfter2023 = this.buildFilterString({
          ...filterParams,
          years: yearsAfter2023,
        });
        const resultsAfter2023 = await this.serieHistoricaApos2023(
          tipo,
          dims,
          filterAfter2023,
        );
        allResults = allResults.concat(resultsAfter2023.result || []);
      }

      // Ordenar resultados por ano
      allResults.sort((a, b) => a.year - b.year);

      return {
        result: allResults,
        metadata: {
          filters: this.mapper['extractFilters'](filterParams),
          dimensions,
          source: DataSourceType.DADOS_EDUCACAO_BASICA,
          lastUpdated: new Date(),
        },
      };
    } catch (error) {
      console.error(
        `Erro ao consultar série histórica unificada de ${tipo}:`,
        error,
      );
      return {
        result: [],
        metadata: {
          filters: this.mapper['extractFilters'](filterParams),
          dimensions,
          source: DataSourceType.DADOS_EDUCACAO_BASICA,
          lastUpdated: new Date(),
        },
      };
    }
  }
  */
  // Método específico para série histórica (lógica original)
  private async serieHistorica(
    tipo: string,
    dims: string,
    filter: string,
  ): Promise<EducationResponse> {
    const filterParams = this.parseFilter(filter);
    const dimensions = this.parseDims(dims);

    // Definir quais relacionamentos incluir com base nas dimensões passadas
    const include: any = {
      dependencia: true,
      dependencia_teacher: true,
      etapa: true,
      etapa_school: true,
      etapa_teacher: true,
      etapa_turma: true,
      etapa_matricula_ate2020: true,
      localizacao: true,
    };

    try {
      let allResults: any[] = [];

      // Verificar se precisa fazer consultas separadas para enrollment
      if (
        tipo === 'enrollment' &&
        this.needsSeparateQueries(filterParams.years)
      ) {
        // Separar anos em dois grupos
        const yearsUntil2020 = filterParams.years.filter((y) => y <= 2020);
        const yearsFrom2021 = filterParams.years.filter((y) => y >= 2021);

        // Se a dimensão municipality estiver presente, buscar dados de todos os municípios
        const whereClauseUntil2020: any = {
          tipo: 'enrollment',
          ano: { in: yearsUntil2020 },
        };
        const whereClauseFrom2021: any = {
          tipo: 'enrollmentAggregate',
          ano: { in: yearsFrom2021 },
        };

        if (dimensions.includes('municipality')) {
          if (filterParams.city) {
            whereClauseUntil2020.localidade_id = Number(filterParams.city);
            whereClauseFrom2021.localidade_id = Number(filterParams.city);
          } else {
            // Buscar todos os municípios do estado
            const municipioCodes = Object.keys(municipios).map(Number);
            whereClauseUntil2020.localidade_id = { in: municipioCodes };
            whereClauseFrom2021.localidade_id = { in: municipioCodes };
          }
        } else {
          whereClauseUntil2020.localidade_id = filterParams.city
            ? Number(filterParams.city)
            : Number(filterParams.state);
          whereClauseFrom2021.localidade_id = filterParams.city
            ? Number(filterParams.city)
            : Number(filterParams.state);
        }

        // Consulta para dados até 2020 (tipo = 'enrollment')
        if (yearsUntil2020.length > 0) {
          const resultsUntil2020 =
            await this.prisma.dadoEducacaoBasica.findMany({
              where: whereClauseUntil2020,
              include,
            });
          allResults = allResults.concat(resultsUntil2020);
        }

        // Consulta para dados de 2021 em diante (tipo = 'enrollmentAggregate')
        if (yearsFrom2021.length > 0) {
          const resultsFrom2021 = await this.prisma.dadoEducacaoBasica.findMany(
            {
              where: whereClauseFrom2021,
              include,
            },
          );
          allResults = allResults.concat(resultsFrom2021);
        }
      }
      // Consulta normal para outros tipos ou quando não há necessidade de separar
      else {
        // Lógica original para determinar o tipo
        let queryType = tipo;
        if (tipo === 'teacher' && filterParams.years.some((y) => y >= 2021)) {
          queryType = 'federativeEntity';
          tipo = queryType;
        }

        if (tipo === 'enrollment' && filterParams.years.some((y) => y >= 2021))
          queryType = 'enrollmentAggregate';

        // Se a dimensão municipality estiver presente, buscar dados de todos os municípios
        const whereClause: any = {
          tipo: queryType,
          ano: { in: filterParams.years },
        };

        if (dimensions.includes('municipality')) {
          if (filterParams.city) {
            whereClause.localidade_id = Number(filterParams.city);
          } else {
            // Buscar todos os municípios do estado
            const municipioCodes = Object.keys(municipios).map(Number);
            whereClause.localidade_id = { in: municipioCodes };
          }
        } else {
          whereClause.localidade_id = filterParams.city
            ? Number(filterParams.city)
            : Number(filterParams.state);
        }

        allResults = await this.prisma.dadoEducacaoBasica.findMany({
          where: whereClause,
          include,
        });
      }

      // Filtrar dados originais antes do mapeamento para tipos sem dimensões (série histórica)
      // NOTA: Só aplicar filtro quando NÃO há dimensões (dimensions.length === 0)
      if (
        (tipo === 'teacher' || tipo === 'federativeEntity') &&
        filterParams.years.some((y) => y >= 2021) &&
        dimensions.length === 0
      ) {
        // Filtrar apenas registros com TODAS as dimensões null nos dados originais
        allResults = allResults.filter(
          (item) =>
            !item.dependencia_id &&
            !item.dependencia_teacher_id &&
            !item.etapa_id &&
            !item.etapa_school_id &&
            !item.etapa_teacher_id &&
            !item.etapa_turma_id &&
            !item.etapa_matricula_ate2020_id &&
            !item.localizacao_id &&
            !item.vinculo_id &&
            !item.formacao_id &&
            !item.faixa_etaria_id &&
            !item.contrato_id,
        );
      }

      // Criar contexto para o mapper
      const mappingContext: MappingContext = {
        tipo,
        filterParams,
        dimensions,
        dataSource: DataSourceType.DADOS_EDUCACAO_BASICA,
      };

      // Usar o mapper para padronizar a resposta
      const standardResponse = this.mapper.mapToStandardFormat(
        allResults,
        mappingContext,
      );

      // Enriquecer dados com nome do município se a dimensão municipality estiver presente
      if (dimensions.includes('municipality')) {
        standardResponse.result = standardResponse.result.map((item) => ({
          ...item,
          municipality_name: this.getMunicipioName(item.municipality_id),
        }));
      }

      // Remover itens excluídos
      const filteredResults = this.mapper.removeExcludedItems(
        standardResponse.result,
        mappingContext,
      );
      standardResponse.result = filteredResults;

      // Normalizar IDs das etapas para série histórica antes do processamento
      standardResponse.result = this.normalizeEtapaIdsForHistoricalSeries(
        standardResponse.result,
        tipo,
        filterParams,
      );

      // Lógica de agrupamento baseada nas dimensões
      if (dimensions.length === 0) {
        // Sem dimensões - usar combinação fixa para evitar dupla contagem
        standardResponse.result = this.processNoDimensions(
          standardResponse.result,
          tipo,
          filterParams,
        );
      } else if (dimensions.length === 1) {
        // Com uma dimensão - aplicar lógica específica baseada no tipo
        standardResponse.result = this.processSingleDimension(
          standardResponse.result,
          dimensions[0],
          tipo,
          filterParams,
        );
      } else if (dimensions.length === 2) {
        // Com duas dimensões - manter todos os dados detalhados
        standardResponse.result = this.processTwoDimensions(
          standardResponse.result,
          dimensions,
        );
      }

      return standardResponse;
    } catch (error) {
      console.error(
        `Erro ao consultar série histórica até 2023 de ${tipo}:`,
        error,
      );
      return {
        result: [],
        metadata: {
          filters: this.mapper['extractFilters'](filterParams),
          dimensions,
          source: DataSourceType.DADOS_EDUCACAO_BASICA,
          lastUpdated: new Date(),
        },
      };
    }
  }

  // Método específico para série histórica após 2023
  /**
  private async serieHistoricaApos2023(
    tipo: string,
    dims: string,
    filter: string,
  ): Promise<EducationResponse> {
    const filterParams = this.parseFilter(filter);

    try {
      // Usar o método queryDataApos23 existente
      const results = await this.queryDataApos23(tipo, dims, filter);

      return {
        result: results.result || [],
        metadata: {
          filters: this.mapper['extractFilters'](filterParams),
          dimensions: this.parseDims(dims),
          source: DataSourceType.DADOS_EDUCACAO_BASICA,
          lastUpdated: new Date(),
        },
      };
    } catch (error) {
      console.error(
        `Erro ao consultar série histórica após 2023 de ${tipo}:`,
        error,
      );
      return {
        result: [],
        metadata: {
          filters: this.mapper['extractFilters'](filterParams),
          dimensions: this.parseDims(dims),
          source: DataSourceType.DADOS_EDUCACAO_BASICA,
          lastUpdated: new Date(),
        },
      };
    }
  }
  */
  // Método auxiliar para verificar se precisa fazer consultas separadas
  private needsSeparateQueries(years: number[]): boolean {
    const hasYearsUntil2020 = years.some((y) => y <= 2020);
    const hasYearsFrom2021 = years.some((y) => y >= 2021);
    return hasYearsUntil2020 && hasYearsFrom2021;
  }

  /**
   * CONSULTA OTIMIZADA PARA DADOS APÓS 2023
   *
   * Otimizações implementadas:
   * 1. Subconsulta JOIN em vez de busca separada de IDs de municípios
   * 2. Include seletivo - só carrega relacionamentos necessários baseado nas dimensões
   * 3. Índices compostos no schema para melhor performance
   * 4. Cache opcional para IDs de municípios em consultas consecutivas
   *
   * Performance esperada: Redução de ~50-70% no tempo de consulta para estado completo
   */
  private async queryDataApos23(tipo: string, dims: string, filter: string) {
    const filterParams = this.parseFilter(filter);

    if (tipo === 'enrollmentAggregate') tipo = 'enrollment';

    const dimensions = this.parseDims(dims);

    const whereClause: any = {
      ano: { in: filterParams.years },
    };

    // Para school/count, buscar registros que tenham entidade_id (escolas)
    if (tipo === 'school/count') {
      whereClause.entidade_id = { not: null };
    } else {
      whereClause.tipo = tipo;
    }

    // Para school/count, sempre buscar por todas as cidades quando for estado
    // Para outros tipos, usar filtro normal pois os totais já estão consolidados no banco
    if (tipo === 'school/count') {
      // Se é uma cidade específica, buscar apenas essa cidade
      if (filterParams.city) {
        whereClause.localidade_id = Number(filterParams.city);
      } else {
        // Se é o estado (localidade_id 22), buscar todas as cidades do estado
        const stateId = Number(filterParams.state);
        if (stateId === 22) {
          // OTIMIZAÇÃO: Usar subconsulta JOIN para buscar todas as cidades do Piauí
          whereClause.localidade = {
            tipo: 'municipio',
            uf: 'PI',
          };
        } else {
          whereClause.localidade_id = stateId;
        }
      }
    } else {
      // Para outros tipos (enrollment, teacher, class), usar filtro normal
      // pois os totais já estão consolidados no banco
      if (filterParams.city) {
        whereClause.localidade_id = Number(filterParams.city);
      } else {
        whereClause.localidade_id = Number(filterParams.state);
      }
    }

    const results = await this.prisma.dadoEducacaoBasicaApos23.findMany({
      where: whereClause,
      include: {
        dependencia: dimensions.includes('adm_dependency_detailed'),
        etapa: dimensions.includes('education_level_mod'),
        etapa_teacher_class: dimensions.includes('education_level_mod'),
        localizacao: dimensions.includes('location'),
        entidade: tipo === 'school/count',
        localidade: !filterParams.city, // Só incluir se não for cidade específica
      },
    });

    // Para school/count, contar escolas únicas em vez de somar totais
    if (tipo === 'school/count') {
      // Agrupar por dimensões e contar escolas únicas
      const schoolCountMap = new Map();

      results.forEach((item) => {
        if (!item.entidade?.id) return;
        if (dimensions.includes('education_level_mod') && item.total <= 0)
          return;
        // Validar se todas as dimensões requeridas têm valores válidos
        if (dimensions.includes('adm_dependency_detailed') && !item.dependencia)
          return;
        if (dimensions.includes('education_level_mod') && !item.etapa) return;
        if (dimensions.includes('location') && !item.localizacao) return;

        const obj: any = {
          year: item.ano,
        };

        if (dimensions.includes('adm_dependency_detailed')) {
          obj.adm_dependency_detailed_id = item.dependencia.id;
          obj.adm_dependency_detailed_name = item.dependencia.nome;
        }
        if (dimensions.includes('education_level_mod')) {
          obj.education_level_mod_id = item.etapa.id;
          obj.education_level_mod_name = item.etapa.nome;
        }
        if (dimensions.includes('location')) {
          obj.location_id = item.localizacao.id;
          obj.location_name = item.localizacao.nome;
        }

        // Criar chave para agrupamento baseada apenas nas dimensões selecionadas
        const keys = ['year'];
        if (dimensions.includes('adm_dependency_detailed'))
          keys.push('adm_dependency_detailed_id');
        if (dimensions.includes('education_level_mod'))
          keys.push('education_level_mod_id');
        if (dimensions.includes('location')) keys.push('location_id');

        const key = keys.map((k) => `${k}:${obj[k]}`).join('|');

        if (!schoolCountMap.has(key)) {
          schoolCountMap.set(key, {
            ...obj,
            schools: new Set(),
          });
        }

        // Adicionar escola ao conjunto
        schoolCountMap.get(key).schools.add(item.entidade.id);
      });

      // Converter conjuntos em contagens
      const finalResults = Array.from(schoolCountMap.values()).map((item) => {
        const { schools, ...rest } = item;
        return {
          ...rest,
          total: schools.size,
        };
      });

      return { result: finalResults };
    }

    // Para outros tipos, usar diretamente os totais do banco (já consolidados)
    const mappedResults = results.map((item) => {
      const obj: any = {
        year: item.ano,
        total: Number(item.total),
      };
      if (dimensions.includes('adm_dependency_detailed') && item.dependencia) {
        obj.adm_dependency_detailed_id = item.dependencia.id;
        obj.adm_dependency_detailed_name = item.dependencia.nome;
      }
      if (dimensions.includes('education_level_mod') && item.etapa) {
        obj.education_level_mod_id = item.etapa.id;
        obj.education_level_mod_name = item.etapa.nome;
      }
      if (
        (tipo === 'teacher' || tipo === 'class') &&
        dimensions.includes('education_level_mod') &&
        item.etapa_teacher_class
      ) {
        obj.education_level_mod_id = item.etapa_teacher_class.id;
        obj.education_level_mod_name = item.etapa_teacher_class.nome;
      }
      if (dimensions.includes('location') && item.localizacao) {
        obj.location_id = item.localizacao.id;
        obj.location_name = item.localizacao.nome;
      }
      if (dimensions.includes('localidade') && item.localidade) {
        obj.localidade_id = item.localidade.id;
        obj.localidade_name = item.localidade.nome;
      }
      return obj;
    });

    // Para outros tipos, agrupar por dimensões mas somar os totais já consolidados
    const groupedMap = new Map();
    mappedResults.forEach((item) => {
      const keys = ['year'];
      if (dimensions.includes('adm_dependency_detailed'))
        keys.push('adm_dependency_detailed_id');
      if (dimensions.includes('education_level_mod'))
        keys.push('education_level_mod_id');
      if (dimensions.includes('location')) keys.push('location_id');
      if (dimensions.includes('localidade')) keys.push('localidade_id');
      const key = keys.map((k) => `${k}:${item[k] ?? 'null'}`).join('|');
      if (!groupedMap.has(key)) {
        groupedMap.set(key, { ...item });
      } else {
        groupedMap.get(key).total += item.total;
      }
    });
    const groupedResults = Array.from(groupedMap.values());
    return { result: groupedResults };
  }

  // Função auxiliar para analisar o filtro no formato específico
  private parseFilter(filter: string): {
    years: number[];
    state: string;
    city?: string;
    isHistorical?: boolean;
  } {
    try {
      // CORREÇÃO: Verificar se filter existe e não é undefined/null
      if (!filter || typeof filter !== 'string') {
        console.warn('Filter is undefined or not a string, using defaults');
        return { years: [2022], state: '22', isHistorical: false };
      }

      const yearPattern = /min_year:"(\d+)",max_year:"(\d+)"/;
      const statePattern = /state:"(\d+)"/;
      const cityPattern = /city:"(\d+)"/;

      const yearMatch = filter.match(yearPattern);
      const stateMatch = filter.match(statePattern);
      const cityMatch = filter.match(cityPattern);

      const minYear = yearMatch?.[1] ? parseInt(yearMatch[1]) : 2022;
      const maxYear = yearMatch?.[2] ? parseInt(yearMatch[2]) : 2022;
      const years = [];
      for (let year = minYear; year <= maxYear; year++) {
        years.push(year);
      }

      return {
        years,
        state: stateMatch?.[1] || '22',
        city: cityMatch?.[1],
        isHistorical: minYear !== maxYear,
      };
    } catch (error) {
      console.error('Erro ao analisar filtro:', error);
      return { years: [2022], state: '22', isHistorical: false };
    }
  }

  // Função auxiliar para analisar as dimensões
  private parseDims(dims: string): string[] {
    if (!dims || typeof dims !== 'string') {
      return [];
    }
    // CORREÇÃO: Remover espaços em branco das dimensões após split
    return dims
      .split(',')
      .map((dim) => dim.trim())
      .filter((dim) => dim.length > 0);
  }

  // Função auxiliar para construir string de filtro
  private buildFilterString(filterParams: {
    years: number[];
    state: string;
    city?: string;
    isHistorical?: boolean;
  }): string {
    const minYear = Math.min(...filterParams.years);
    const maxYear = Math.max(...filterParams.years);

    let filter = `min_year:"${minYear}",max_year:"${maxYear}",state:"${filterParams.state}"`;

    if (filterParams.city) {
      filter += `,city:"${filterParams.city}"`;
    }

    return filter;
  }
}
