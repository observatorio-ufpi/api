import { Injectable } from '@nestjs/common';
import {
  DataSourceType,
  EducationResponse,
  FilterParams,
  MappingContext,
} from '../../interfaces/education.interface';
import { PrismaEducacaoService } from '../prisma-educacao.service';
import { EducationResponseMapper } from './mappers/education-response.mapper';

@Injectable()
export class BasicService {
  // Cache para melhorar performance das consultas de estado
  private piauiCitiesCache: number[] | null = null;
  private cacheExpiry: Date | null = null;

  constructor(
    private prisma: PrismaEducacaoService,
    private mapper: EducationResponseMapper,
  ) {}

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
    return this.serieHistoricaTwoDimensions('enrollment', dims, filter);
  }

  async getSchoolCountTimeSeries(dims: string, filter: string) {
    return this.serieHistoricaTwoDimensions('school/count', dims, filter);
  }

  async getClassTimeSeries(dims: string, filter: string) {
    return this.serieHistoricaTwoDimensions('class', dims, filter);
  }

  async getTeacherTimeSeries(dims: string, filter: string) {
    return this.serieHistoricaTwoDimensions('teacher', dims, filter);
  }

  async getEmployeesTimeSeries(dims: string, filter: string) {
    return this.serieHistoricaTwoDimensions('employees', dims, filter);
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

    if (filterParams.years.some((y) => y <= 2023)) {
      try {
        // Tipo teacher >= 2021 está com nome federativeEntity no banco de dados
        if (tipo === 'teacher' && filterParams.years.some((y) => y >= 2021))
          tipo = 'federativeEntity';

        // Buscar todos os registros do tipo/ano/localidade
        const results = await this.prisma.dadoEducacaoBasica.findMany({
          where: {
            tipo,
            ano: { in: filterParams.years },
            localidade_id: filterParams.city
              ? Number(filterParams.city)
              : Number(filterParams.state),
          },
          include,
        });

        // Criar contexto para o mapper
        const mappingContext: MappingContext = {
          tipo,
          filterParams,
          dimensions,
          dataSource: DataSourceType.DADOS_EDUCACAO_BASICA,
        };

        // Usar o mapper para padronizar a resposta
        const standardResponse = this.mapper.mapToStandardFormat(
          results,
          mappingContext,
        );

        // Remover itens excluídos
        const filteredResults = this.mapper.removeExcludedItems(
          standardResponse.result,
          mappingContext,
        );
        standardResponse.result = filteredResults;

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
    }

    // Fallback para dados após 2023
    return this.queryDataApos23(tipo, dims, filter);
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
      const filtered = data.filter((item) => item.location_id !== null);

      // console.log('Dados filtrados (federativeEntity 0 dims):', filtered);

      const totalPorAno = {};
      for (const item of filtered) {
        totalPorAno[item.year] = (totalPorAno[item.year] || 0) + item.total;
      }
      return Object.entries(totalPorAno).map(([year, total]) => ({
        year: Number(year),
        total,
      }));
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
    } else {
      // Para outros tipos, usar combinação fixa de dimensões
      let fixedCombo: [string, string];

      if (dimension === 'education_level_mod') {
        fixedCombo = ['education_level_mod_id', 'adm_dependency_detailed_id'];
      } else if (dimension === 'adm_dependency_detailed') {
        fixedCombo = ['adm_dependency_detailed_id', 'education_level_mod_id'];
      } else {
        fixedCombo = ['location_id', 'education_level_mod_id'];
      }

      const [mainDimFixed, otherDim] = fixedCombo;
      const mainNameFixed = mainDimFixed.replace('_id', '_name');

      // Filtrar registros onde ambas as dimensões da combinação estão presentes
      const filtered = data.filter(
        (item) => item[mainDimFixed] !== null && item[otherDim] !== null,
      );

      // console.log('Dados filtrados com combinação fixa:', filtered);

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
    const groupMap = new Map();

    for (const item of data) {
      // Criar chave única baseada no ano e valores das dimensões
      const keys = dimensions.map((dim) => {
        if (dim === 'education_level_mod') return item.education_level_mod_id;
        if (dim === 'adm_dependency_detailed')
          return item.adm_dependency_detailed_id;
        if (dim === 'location') return item.location_id;
        if (dim === 'contract_type') return item.contract_type_id;
        return null;
      });

      if (keys.every((k) => k !== null)) {
        const key = `${item.year}|${keys.join('|')}`;
        if (!groupMap.has(key)) {
          groupMap.set(key, { ...item });
        } else {
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
  private async serieHistoricaTwoDimensions(
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

        // Consulta para dados até 2020 (tipo = 'enrollment')
        if (yearsUntil2020.length > 0) {
          console.log('entrou aqui 1');
          const resultsUntil2020 =
            await this.prisma.dadoEducacaoBasica.findMany({
              where: {
                tipo: 'enrollment',
                ano: { in: yearsUntil2020 },
                localidade_id: filterParams.city
                  ? Number(filterParams.city)
                  : Number(filterParams.state),
              },
              include,
            });
          allResults = allResults.concat(resultsUntil2020);
        }

        // Consulta para dados de 2021 em diante (tipo = 'enrollmentAggregate')
        if (yearsFrom2021.length > 0) {
          console.log('entrou aqui 2');
          const resultsFrom2021 = await this.prisma.dadoEducacaoBasica.findMany(
            {
              where: {
                tipo: 'enrollmentAggregate',
                ano: { in: yearsFrom2021 },
                localidade_id: filterParams.city
                  ? Number(filterParams.city)
                  : Number(filterParams.state),
              },
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
        if (tipo === 'teacher' && filterParams.years.some((y) => y >= 2021))
          queryType = 'federativeEntity';

        if (tipo === 'enrollment' && filterParams.years.some((y) => y >= 2021))
          queryType = 'enrollmentAggregate';

        allResults = await this.prisma.dadoEducacaoBasica.findMany({
          where: {
            tipo: queryType,
            ano: { in: filterParams.years },
            localidade_id: filterParams.city
              ? Number(filterParams.city)
              : Number(filterParams.state),
          },
          include,
        });
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

      // Remover itens excluídos
      const filteredResults = this.mapper.removeExcludedItems(
        standardResponse.result,
        mappingContext,
      );
      standardResponse.result = filteredResults;

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
      console.error(`Erro ao consultar série histórica de ${tipo}:`, error);
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

  // Método auxiliar para verificar se precisa fazer consultas separadas
  private needsSeparateQueries(years: number[]): boolean {
    const hasYearsUntil2020 = years.some((y) => y <= 2020);
    const hasYearsFrom2021 = years.some((y) => y >= 2021);
    return hasYearsUntil2020 && hasYearsFrom2021;
  }

  /**
   * Limpa o cache de cidades (útil para testes ou quando há mudanças nas localidades)
   */
  public clearCitiesCache(): void {
    this.piauiCitiesCache = null;
    this.cacheExpiry = null;
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

    // Se é uma cidade específica, buscar apenas essa cidade
    if (filterParams.city) {
      whereClause.localidade_id = Number(filterParams.city);
    } else {
      // Se é o estado (localidade_id 22), buscar todas as cidades do estado
      const stateId = Number(filterParams.state);
      if (stateId === 22) {
        // OTIMIZAÇÃO 1: Usar subconsulta JOIN em vez de consulta separada + IN
        // Isso reduz o número de consultas de 2 para 1 e é mais eficiente
        whereClause.localidade = {
          tipo: 'municipio',
          uf: 'PI',
        };

        // OTIMIZAÇÃO 2: Alternativa com cache para casos de múltiplas consultas
        // Descomente as linhas abaixo se houver muitas consultas consecutivas para o estado
        // const cityIds = await this.getPiauiCitiesIds();
        // whereClause.localidade_id = { in: cityIds };
      } else {
        whereClause.localidade_id = stateId;
      }
    }

    const results = await this.prisma.dadoEducacaoBasicaApos23.findMany({
      where: whereClause,
      include: {
        dependencia: dimensions.includes('adm_dependency_detailed'),
        etapa:
          dimensions.includes('arrangement') ||
          (tipo === 'enrollment' &&
            dimensions.includes('education_level_mod_agg')),
        etapa_teacher_class:
          (tipo === 'teacher' || tipo === 'class') &&
          dimensions.includes('education_level_mod'),
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
        if (dimensions.includes('arrangement') && item.total <= 0) return;

        // Validar se todas as dimensões requeridas têm valores válidos
        if (dimensions.includes('adm_dependency_detailed') && !item.dependencia)
          return;
        if (dimensions.includes('arrangement') && !item.etapa) return;
        if (dimensions.includes('location') && !item.localizacao) return;

        const obj: any = {
          year: item.ano,
        };

        if (dimensions.includes('adm_dependency_detailed')) {
          obj.adm_dependency_detailed_id = item.dependencia.id;
          obj.adm_dependency_detailed_name = item.dependencia.nome;
        }
        if (dimensions.includes('arrangement')) {
          obj.arrangement_id = item.etapa.id;
          obj.arrangement_name = item.etapa.nome;
        }
        if (dimensions.includes('location')) {
          obj.location_id = item.localizacao.id;
          obj.location_name = item.localizacao.nome;
        }

        // Criar chave para agrupamento baseada apenas nas dimensões selecionadas
        const keys = ['year'];
        if (dimensions.includes('adm_dependency_detailed'))
          keys.push('adm_dependency_detailed_id');
        if (dimensions.includes('arrangement')) keys.push('arrangement_id');
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

    // Para outros tipos, usar a lógica original
    const mappedResults = results.map((item) => {
      const obj: any = {
        year: item.ano,
        total: Number(item.total),
      };
      if (dimensions.includes('adm_dependency_detailed') && item.dependencia) {
        obj.adm_dependency_detailed_id = item.dependencia.id;
        obj.adm_dependency_detailed_name = item.dependencia.nome;
      }
      if (
        tipo === 'enrollment' &&
        dimensions.includes('education_level_mod_agg') &&
        item.etapa
      ) {
        obj.education_level_mod_agg_id = item.etapa.id;
        obj.education_level_mod_agg_name = item.etapa.nome;
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

    const groupedMap = new Map();
    mappedResults.forEach((item) => {
      const keys = ['year'];
      if (dimensions.includes('adm_dependency_detailed'))
        keys.push('adm_dependency_detailed_id');
      if (
        tipo === 'enrollment' &&
        dimensions.includes('education_level_mod_agg')
      )
        keys.push('education_level_mod_agg_id');
      if (
        (tipo === 'teacher' || tipo === 'class') &&
        dimensions.includes('education_level_mod')
      )
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
}
