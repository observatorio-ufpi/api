import { Injectable } from '@nestjs/common';
import { municipios } from '../../utils/citiesMapping';
import { PrismaEducacaoService } from '../prisma-educacao.service';

interface FilterParams {
  years: number[];
  state: string;
  city?: string;
}

interface EducationResponse {
  result: any[];
  pagination?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
  [key: string]: any;
}

@Injectable()
export class HigherService {
  constructor(private prisma: PrismaEducacaoService) {}

  async getEnrollment(
    dims: string,
    filter: string,
    page?: number,
    limit?: number,
  ): Promise<EducationResponse> {
    return this.queryData('matriculas', dims, filter, page, limit);
  }

  async getUniversityCount(
    dims: string,
    filter: string,
    page?: number,
    limit?: number,
  ): Promise<EducationResponse> {
    return this.queryData('ies', dims, filter, page, limit);
  }

  async getCourseCount(
    dims: string,
    filter: string,
    page?: number,
    limit?: number,
  ): Promise<EducationResponse> {
    return this.queryData('cursos', dims, filter, page, limit);
  }

  async getTeacher(
    dims: string,
    filter: string,
    page?: number,
    limit?: number,
  ): Promise<EducationResponse> {
    return this.queryData('docentes', dims, filter, page, limit);
  }

  // Série histórica
  async getEnrollmentTimeSeries(
    dims: string,
    filter: string,
    page?: number,
    limit?: number,
  ): Promise<EducationResponse> {
    return this.serieHistoricaTwoDimensions('matriculas', dims, filter, page, limit);
  }

  async getUniversityCountTimeSeries(
    dims: string,
    filter: string,
    page?: number,
    limit?: number,
  ): Promise<EducationResponse> {
    return this.serieHistoricaTwoDimensions('ies', dims, filter, page, limit);
  }

  async getCourseCountTimeSeries(
    dims: string,
    filter: string,
    page?: number,
    limit?: number,
  ): Promise<EducationResponse> {
    return this.serieHistoricaTwoDimensions('cursos', dims, filter, page, limit);
  }

  async getTeacherTimeSeries(
    dims: string,
    filter: string,
    page?: number,
    limit?: number,
  ): Promise<EducationResponse> {
    return this.serieHistoricaTwoDimensions('docentes', dims, filter, page, limit);
  }

  private async queryData(
    tipo: string,
    dims: string,
    filter: string,
    page?: number,
    limit?: number,
  ): Promise<EducationResponse> {
    const filterParams = this.parseFilter(filter);
    const dimensions = this.parseDims(dims);

    // Para docentes, precisamos de lógica especial para evitar duplicação
    if (tipo === 'docentes') {
      return this.queryTeacherData(dimensions, filterParams, page, limit);
    }

    // Se a dimensão municipality estiver selecionada, buscar todos os municípios do estado
    const hasMunicipalityDimension = dimensions.includes('municipality');

    let whereCondition: any = {
      tipo,
      ano: { in: filterParams.years },
    };

    let municipioIdsComDados: number[] = [];
    let totalMunicipios = 0;

    if (hasMunicipalityDimension && !filterParams.city) {
      // Buscar municípios únicos que têm dados no banco
      municipioIdsComDados = await this.getMunicipiosComDados(
        tipo,
        filterParams.years,
        filterParams.state,
      );

      totalMunicipios = municipioIdsComDados.length;

      // Se paginação foi solicitada, aplicar slice nos IDs
      if (page !== undefined && limit !== undefined) {
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedIds = municipioIdsComDados.slice(startIndex, endIndex);
        whereCondition.localidade_id = { in: paginatedIds };
      } else {
        whereCondition.localidade_id = { in: municipioIdsComDados };
      }
    } else {
      whereCondition.localidade_id = filterParams.city
        ? Number(filterParams.city)
        : Number(filterParams.state);
    }

    // Buscar dados básicos sempre incluindo todas as relações
    const results = await this.prisma.dadoEducacaoSuperior.findMany({
      where: whereCondition,
      include: {
        localidade: true,
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

    const response = await this.processResults(results, dimensions, tipo);

    // Adicionar paginação quando solicitada
    if (hasMunicipalityDimension && !filterParams.city && page !== undefined && limit !== undefined) {
      const totalPages = Math.ceil(totalMunicipios / limit);
      response.pagination = {
        total: totalMunicipios,
        page: page,
        limit: limit,
        totalPages: totalPages,
      };
    }

    return response;
  }

  private async queryTeacherData(
    dimensions: string[],
    filterParams: FilterParams,
    page?: number,
    limit?: number,
  ): Promise<EducationResponse> {
    // Docentes só aceita uma dimensão (ou nenhuma para total)
    if (dimensions.length > 1) {
      return { result: [] };
    }

    const hasMunicipalityDimension = dimensions.includes('municipality');

    const whereConditions: any = {
      tipo: 'docentes',
      ano: { in: filterParams.years },
    };

    let municipioIdsComDados: number[] = [];
    let totalMunicipios = 0;

    if (hasMunicipalityDimension && !filterParams.city) {
      // Buscar municípios únicos que têm dados no banco
      municipioIdsComDados = await this.getMunicipiosComDados(
        'docentes',
        filterParams.years,
        filterParams.state,
        dimensions,
      );

      totalMunicipios = municipioIdsComDados.length;

      // Se paginação foi solicitada, aplicar slice nos IDs
      if (page !== undefined && limit !== undefined) {
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedIds = municipioIdsComDados.slice(startIndex, endIndex);
        whereConditions.localidade_id = { in: paginatedIds };
      } else {
        whereConditions.localidade_id = { in: municipioIdsComDados };
      }
    } else {
      whereConditions.localidade_id = filterParams.city
        ? Number(filterParams.city)
        : Number(filterParams.state);
    }

    // Se não há dimensões, buscar apenas registros com valores totais (ambos NULL)
    if (dimensions.length === 0) {
      whereConditions.regime_docente_id = null;
      whereConditions.formacao_docente_id = null;
    } else {
      const dimension = dimensions[0];

      // Definir condições baseadas na dimensão
      if (dimension === 'work_regime') {
        // Para regime de trabalho: buscar onde regime_docente_id NÃO é null E NÃO é 1
        whereConditions.regime_docente_id = { not: 1, gte: 2 };
        whereConditions.formacao_docente_id = null;
      } else if (dimension === 'initial_training') {
        // Para formação docente: buscar onde formacao_docente_id NÃO é null
        whereConditions.formacao_docente_id = { not: null };
        whereConditions.regime_docente_id = null;
      } else if (
        dimension === 'upper_adm_dependency' ||
        dimension === 'academic_level'
      ) {
        // Para categoria administrativa e organização acadêmica: buscar onde ambos são NULL (valor total)
        whereConditions.regime_docente_id = null;
        whereConditions.formacao_docente_id = null;
      } else {
        // Para outras dimensões: usar valor total (ambos NULL)
        whereConditions.regime_docente_id = null;
        whereConditions.formacao_docente_id = null;
      }
    }

    const results = await this.prisma.dadoEducacaoSuperior.findMany({
      where: whereConditions,
      include: {
        localidade: true,
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

    const response = await this.processResults(results, dimensions, 'docentes');

    // Adicionar paginação quando solicitada
    if (hasMunicipalityDimension && !filterParams.city && page !== undefined && limit !== undefined) {
      const totalPages = Math.ceil(totalMunicipios / limit);
      response.pagination = {
        total: totalMunicipios,
        page: page,
        limit: limit,
        totalPages: totalPages,
      };
    }

    return response;
  }

  private async serieHistoricaTwoDimensions(
    tipo: string,
    dims: string,
    filter: string,
    page?: number,
    limit?: number,
  ): Promise<EducationResponse> {
    const filterParams = this.parseFilter(filter);
    const dimensions = this.parseDims(dims);

    // Para docentes, usar lógica especial
    if (tipo === 'docentes') {
      return this.queryTeacherDataTimeSeries(dimensions, filterParams, page, limit);
    }

    // Se a dimensão municipality estiver selecionada, buscar todos os municípios do estado
    const hasMunicipalityDimension = dimensions.includes('municipality');

    let whereCondition: any = {
      tipo,
      ano: {
        gte: filterParams.years[0],
        lte: filterParams.years[filterParams.years.length - 1],
      },
    };

    let municipioIdsComDados: number[] = [];
    let totalMunicipios = 0;

    // Para série histórica, NÃO aplicar paginação na query (buscar todos)
    // A paginação será aplicada DEPOIS do processamento
    if (hasMunicipalityDimension && !filterParams.city) {
      // Buscar municípios únicos que têm dados no banco
      municipioIdsComDados = await this.getMunicipiosComDados(
        tipo,
        filterParams.years,
        filterParams.state,
        undefined,
        true, // isTimeSeries
      );

      totalMunicipios = municipioIdsComDados.length;
      whereCondition.localidade_id = { in: municipioIdsComDados };
    } else {
      whereCondition.localidade_id = filterParams.city
        ? Number(filterParams.city)
        : Number(filterParams.state);
    }

    const results = await this.prisma.dadoEducacaoSuperior.findMany({
      where: whereCondition,
      include: {
        localidade: true,
        cursos: true,
        faixa_etaria: true,
        organizacao_academica: true,
        categoria_administrativa: true,
        modalidade_ensino: true,
        instituicao_ensino: true,
        formacao_docente: true,
        regime_docente: true,
      },
      orderBy: { ano: 'asc' },
    });

    const response = await this.processResults(results, dimensions, tipo);

    // Garantir que os resultados estejam ordenados antes da paginação
    // Ordenar por municipality_id (menor para maior) e depois por year
    if (hasMunicipalityDimension && response.result.length > 0) {
      response.result.sort((a, b) => {
        const aId = Number(a.municipality_id) || 0;
        const bId = Number(b.municipality_id) || 0;

        if (aId !== bId) {
          return aId - bId;
        }

        const aYear = Number(a.year) || 0;
        const bYear = Number(b.year) || 0;
        return aYear - bYear;
      });
    }

    // Para série histórica, aplicar paginação DEPOIS do processamento
    if (hasMunicipalityDimension && !filterParams.city && page !== undefined && limit !== undefined) {
      return this.applyPaginationToMunicipalityResults(
        response,
        page,
        limit,
        municipioIdsComDados,
      );
    }

    return response;
  }

  private async queryTeacherDataTimeSeries(
    dimensions: string[],
    filterParams: FilterParams,
    page?: number,
    limit?: number,
  ): Promise<EducationResponse> {
    // Docentes só aceita uma dimensão (ou nenhuma para total)
    if (dimensions.length > 1) {
      return { result: [] };
    }

    const hasMunicipalityDimension = dimensions.includes('municipality');

    const whereConditions: any = {
      tipo: 'docentes',
      ano: {
        gte: filterParams.years[0],
        lte: filterParams.years[filterParams.years.length - 1],
      },
    };

    let municipioIdsComDados: number[] = [];
    let totalMunicipios = 0;

    // Para série histórica, NÃO aplicar paginação na query (buscar todos)
    // A paginação será aplicada DEPOIS do processamento
    if (hasMunicipalityDimension && !filterParams.city) {
      // Buscar municípios únicos que têm dados no banco
      municipioIdsComDados = await this.getMunicipiosComDados(
        'docentes',
        filterParams.years,
        filterParams.state,
        dimensions,
        true, // isTimeSeries
      );

      totalMunicipios = municipioIdsComDados.length;
      whereConditions.localidade_id = { in: municipioIdsComDados };
    } else {
      whereConditions.localidade_id = filterParams.city
        ? Number(filterParams.city)
        : Number(filterParams.state);
    }

    // Se não há dimensões, buscar apenas registros com valores totais (ambos NULL)
    if (dimensions.length === 0) {
      whereConditions.regime_docente_id = null;
      whereConditions.formacao_docente_id = null;
    } else {
      const dimension = dimensions[0];

      // Definir condições baseadas na dimensão
      if (dimension === 'work_regime') {
        // Para regime de trabalho: buscar onde regime_docente_id NÃO é null E NÃO é 1
        whereConditions.regime_docente_id = { not: 1, gte: 2 };
        whereConditions.formacao_docente_id = null;
      } else if (dimension === 'initial_training') {
        // Para formação docente: buscar onde formacao_docente_id NÃO é null
        whereConditions.formacao_docente_id = { not: null };
        whereConditions.regime_docente_id = null;
      } else if (
        dimension === 'upper_adm_dependency' ||
        dimension === 'academic_level'
      ) {
        // Para categoria administrativa e organização acadêmica: buscar onde ambos são NULL (valor total)
        whereConditions.regime_docente_id = null;
        whereConditions.formacao_docente_id = null;
      } else {
        // Para outras dimensões: usar valor total (ambos NULL)
        whereConditions.regime_docente_id = null;
        whereConditions.formacao_docente_id = null;
      }
    }

    const results = await this.prisma.dadoEducacaoSuperior.findMany({
      where: whereConditions,
      include: {
        localidade: true,
        cursos: true,
        faixa_etaria: true,
        organizacao_academica: true,
        categoria_administrativa: true,
        modalidade_ensino: true,
        instituicao_ensino: true,
        formacao_docente: true,
        regime_docente: true,
      },
      orderBy: { ano: 'asc' },
    });

    const response = await this.processResults(results, dimensions, 'docentes');

    // Garantir que os resultados estejam ordenados antes da paginação
    // Ordenar por municipality_id (menor para maior) e depois por year
    if (hasMunicipalityDimension && response.result.length > 0) {
      response.result.sort((a, b) => {
        const aId = Number(a.municipality_id) || 0;
        const bId = Number(b.municipality_id) || 0;

        if (aId !== bId) {
          return aId - bId;
        }

        const aYear = Number(a.year) || 0;
        const bYear = Number(b.year) || 0;
        return aYear - bYear;
      });
    }

    // Para série histórica, aplicar paginação DEPOIS do processamento
    if (hasMunicipalityDimension && !filterParams.city && page !== undefined && limit !== undefined) {
      return this.applyPaginationToMunicipalityResults(
        response,
        page,
        limit,
        municipioIdsComDados,
      );
    }

    return response;
  }

  private async processResults(
    results: any[],
    dimensions: string[],
    tipo: string,
  ): Promise<EducationResponse> {
    if (!dimensions || dimensions.length === 0) {
      // Sem dimensões - somar o campo 'total' de cada registro por ano
      const yearTotals = new Map();

      results.forEach((item) => {
        const year = item.ano;

        // Para docentes sem dimensão, considerar apenas registros com regime e formação NULL (valor total correto)
        if (tipo === 'docentes') {
          if (
            item.regime_docente_id === null &&
            item.formacao_docente_id === null
          ) {
            yearTotals.set(
              year,
              (yearTotals.get(year) || 0) + Number(item.total),
            );
          }
        } else {
          // Para matrículas, cursos e IES, somar o campo 'total' de cada linha
          yearTotals.set(
            year,
            (yearTotals.get(year) || 0) + Number(item.total),
          );
        }
      });

      const aggregated = Array.from(yearTotals.entries()).map(
        ([year, total]) => ({
          year,
          total,
        }),
      );

      return { result: aggregated };
    }

    if (dimensions.length === 1) {
      // Uma dimensão - agrupar pela dimensão selecionada
      return await this.processOneDimension(results, dimensions[0], tipo);
    }

    if (dimensions.length === 2) {
      // Duas dimensões - criar tabela cruzada
      return await this.processTwoDimensions(results, dimensions, tipo);
    }

    // Mais de duas dimensões não suportado
    return { result: [] };
  }

  private async processOneDimension(
    results: any[],
    dimension: string,
    tipo: string,
  ): Promise<EducationResponse> {
    const dimensionYearTotals = new Map();

    results.forEach((item) => {
      const dimValue = this.getDimensionValue(item, dimension);
      if (dimValue) {
        const year = item.ano;
        const key = `${dimValue.id}_${dimValue.name}`;

        if (!dimensionYearTotals.has(key)) {
          dimensionYearTotals.set(key, new Map());
        }

        const yearMap = dimensionYearTotals.get(key);
        yearMap.set(year, (yearMap.get(year) || 0) + Number(item.total));
      }
    });

    // Se a dimensão for 'institution', buscar os nomes das IES
    let iesNamesMap = new Map();
    if (dimension === 'institution') {
      const codigosIes = Array.from(dimensionYearTotals.keys()).map(key =>
        key.split('_')[0]
      );

      const iesRecords = await this.prisma['instituicaoEnsinoSuperior'].findMany({
        where: {
          codigo: { in: codigosIes },
        },
      });

      iesRecords.forEach(ies => {
        iesNamesMap.set(ies.codigo, ies.nome);
      });
    }

    const processedResults = [];

    // Converter para array e ordenar por ID quando for municipality
    const sortedEntries = Array.from(dimensionYearTotals.entries());

    if (dimension === 'municipality') {
      // Ordenar por ID do município (menor para maior)
      sortedEntries.sort((a, b) => {
        const aId = Number(a[0].split('_')[0]);
        const bId = Number(b[0].split('_')[0]);
        return aId - bId;
      });
    }

    sortedEntries.forEach(([key, yearMap]) => {
      const [id, name] = key.split('_', 2);

      // Se for institution, usar o nome real da IES
      const finalName = dimension === 'institution'
        ? (iesNamesMap.get(id) || `IES ${id}`)
        : name;

      // Converter yearMap para array e ordenar por ano
      const sortedYears = Array.from(yearMap.entries() as IterableIterator<[number, number]>).sort((a, b) => a[0] - b[0]);

      // Para cada ano da dimensão, criar um registro separado
      sortedYears.forEach(([year, total]) => {
        const result: any = {
          year,
          total,
        };

        // Adicionar campos específicos da dimensão
        this.addDimensionFields(result, dimension, Number(id), finalName);

        processedResults.push(result);
      });
    });

    return { result: processedResults };
  }

  private async processTwoDimensions(
    results: any[],
    dimensions: string[],
    tipo: string,
  ): Promise<EducationResponse> {
    const [dim1, dim2] = dimensions;

    // Para docentes, não permitir duas dimensões
    if (tipo === 'docentes') {
      return { result: [] };
    }

    const crossData = new Map();
    const dim1Values = new Set();
    const dim2Values = new Set();

    results.forEach((item) => {
      const dim1Value = this.getDimensionValue(item, dim1);
      const dim2Value = this.getDimensionValue(item, dim2);

      if (dim1Value && dim2Value) {
        const year = item.ano;
        const key = `${dim1Value.id}-${dim2Value.id}`;
        dim1Values.add(`${dim1Value.id}_${dim1Value.name}`);
        dim2Values.add(`${dim2Value.id}_${dim2Value.name}`);

        if (!crossData.has(key)) {
          crossData.set(key, new Map());
        }

        const yearMap = crossData.get(key);
        yearMap.set(year, (yearMap.get(year) || 0) + Number(item.total));
      }
    });

    // Mapear nomes corretos de IES quando uma das dimensões for 'institution'
    let iesNamesMap = new Map<string, string>();
    if (dim1 === 'institution' || dim2 === 'institution') {
      const extractIds = (valuesSet: Set<any>) =>
        Array.from(valuesSet)
          .map((v: any) => String(v as string))
          .map((s) => s.split('_')[0])
          .filter((id) => !!id);
      const codesDim1 = dim1 === 'institution' ? extractIds(dim1Values) : [];
      const codesDim2 = dim2 === 'institution' ? extractIds(dim2Values) : [];
      const allCodes = Array.from(new Set([...(codesDim1 as string[]), ...(codesDim2 as string[])]));
      if (allCodes.length > 0) {
        const iesRecords = await this.prisma['instituicaoEnsinoSuperior'].findMany({
          where: { codigo: { in: allCodes } },
        });
        iesRecords.forEach((ies) => iesNamesMap.set(String(ies.codigo), ies.nome));
      }
    }

    // Criar dados para a tabela cruzada
    const crossTableData = [];
    crossData.forEach((yearMap, key) => {
      const [dim1Id, dim2Id] = key.split('-');
      const dim1Info = Array.from(dim1Values).find((v) =>
        (v as string).startsWith(dim1Id + '_'),
      );
      const dim2Info = Array.from(dim2Values).find((v) =>
        (v as string).startsWith(dim2Id + '_'),
      );

      if (dim1Info && dim2Info) {
        let dim1Name = (dim1Info as string).split('_', 2)[1];
        let dim2Name = (dim2Info as string).split('_', 2)[1];

        if (dim1 === 'institution') {
          dim1Name = iesNamesMap.get(dim1Id) || `IES ${dim1Id}`;
        }
        if (dim2 === 'institution') {
          dim2Name = iesNamesMap.get(dim2Id) || `IES ${dim2Id}`;
        }

        // Para cada ano, criar um registro separado
        yearMap.forEach((total, year) => {
          const item: any = {
            year,
            total,
          };

          this.addDimensionFields(item, dim1, Number(dim1Id), dim1Name);
          this.addDimensionFields(item, dim2, Number(dim2Id), dim2Name);

          crossTableData.push(item);
        });
      }
    });

    // Criar chave para dados cruzados
    const crossKey = this.getCrossKey(dim1, dim2);
    const response: EducationResponse = { result: crossTableData };

    if (crossKey) {
      response[crossKey] = crossTableData;
    }

    return response;
  }

  private getDimensionValue(
    item: any,
    dimension: string,
  ): { id: number; name: string } | null {
    switch (dimension) {
      case 'upper_education_mod':
        return item.modalidade_ensino
          ? { id: item.modalidade_ensino.id, name: item.modalidade_ensino.nome }
          : null;

      case 'upper_adm_dependency':
        return item.categoria_administrativa
          ? {
              id: item.categoria_administrativa.id,
              name: item.categoria_administrativa.nome,
            }
          : null;

      case 'age_student_code':
        return item.faixa_etaria
          ? { id: item.faixa_etaria.id, name: item.faixa_etaria.nome }
          : null;

      case 'academic_level':
        return item.organizacao_academica
          ? {
              id: item.organizacao_academica.id,
              name: item.organizacao_academica.nome,
            }
          : null;

      case 'work_regime':
        return item.regime_docente
          ? { id: item.regime_docente.id, name: item.regime_docente.nome }
          : null;

      case 'initial_training':
        return item.formacao_docente
          ? { id: item.formacao_docente.id, name: item.formacao_docente.nome }
          : null;

      case 'institution':
        // Obtém o codigo_ies do curso
        if (item.cursos && item.cursos.codigo_ies) {
          // Retorna o codigo_ies como ID
          // O nome será buscado posteriormente via join ou query adicional
          return {
            id: item.cursos.codigo_ies,
            name: item.cursos.codigo_ies.toString(), // Temporário, será substituído
          };
        }
        return null;

      case 'municipality':
        // Obtém o ID e nome do município da localidade
        if (item.localidade_id && item.localidade) {
          const municipioCode = item.localidade_id.toString();
          const municipioInfo = municipios[municipioCode];
          return {
            id: item.localidade_id,
            name: municipioInfo
              ? municipioInfo.nomeMunicipio
              : item.localidade.nome,
          };
        }
        return null;

      default:
        return null;
    }
  }

  private addDimensionFields(
    result: any,
    dimension: string,
    id: number,
    name: string,
  ): void {
    switch (dimension) {
      case 'upper_education_mod':
        result.upper_education_mod_id = id;
        result.upper_education_mod_name = name;
        break;

      case 'upper_adm_dependency':
        result.upper_adm_dependency_id = id;
        result.upper_adm_dependency_name = name;
        break;

      case 'age_student_code':
        result.age_student_code_id = id;
        result.age_student_code_name = name;
        break;

      case 'academic_level':
        result.academic_level_id = id;
        result.academic_level_name = name;
        break;

      case 'work_regime':
        result.work_regime_id = id;
        result.work_regime_name = name;
        break;

      case 'initial_training':
        result.initial_training_id = id;
        result.initial_training_name = name;
        break;

      case 'institution':
        result.institution_id = id;
        result.institution_name = name;
        break;

      case 'municipality':
        result.municipality_id = id;
        result.municipality_name = name;
        break;
    }
  }

  private getCrossKey(dim1: string, dim2: string): string | null {
    const combinations = [
      [
        'upper_education_mod',
        'age_student_code',
        'byModalidadeAndFaixaEtariaSuperior',
      ],
      [
        'upper_education_mod',
        'academic_level',
        'byModalidadeAndOrganizacaoAcademica',
      ],
      [
        'upper_education_mod',
        'upper_adm_dependency',
        'byModalidadeAndCategoriaAdministrativa',
      ],
      [
        'upper_adm_dependency',
        'age_student_code',
        'byCategoriaAdministrativaAndFaixaEtariaSuperior',
      ],
      [
        'upper_adm_dependency',
        'academic_level',
        'byCategoriaAdministrativaAndOrganizacaoAcademica',
      ],
      [
        'academic_level',
        'age_student_code',
        'byOrganizacaoAcademicaAndFaixaEtariaSuperior',
      ],
      [
        'upper_adm_dependency',
        'work_regime',
        'byCategoriaAdministrativaAndRegime',
      ],
      [
        'upper_adm_dependency',
        'initial_training',
        'byCategoriaAdministrativaAndFormacaoDocente',
      ],
      ['academic_level', 'work_regime', 'byOrganizacaoAcademicaAndRegime'],
      [
        'academic_level',
        'initial_training',
        'byOrganizacaoAcademicaAndFormacaoDocente',
      ],
      // Combinações envolvendo instituição de ensino
      ['institution', 'upper_education_mod', 'byInstitutionAndModalidade'],
      [
        'institution',
        'upper_adm_dependency',
        'byInstitutionAndCategoriaAdministrativa',
      ],
      ['institution', 'academic_level', 'byInstitutionAndOrganizacaoAcademica'],
      ['institution', 'age_student_code', 'byInstitutionAndFaixaEtariaSuperior'],
      // Combinações envolvendo município
      ['municipality', 'upper_education_mod', 'byMunicipioAndModalidade'],
      [
        'municipality',
        'upper_adm_dependency',
        'byMunicipioAndCategoriaAdministrativa',
      ],
      [
        'municipality',
        'academic_level',
        'byMunicipioAndOrganizacaoAcademica',
      ],
      [
        'municipality',
        'age_student_code',
        'byMunicipioAndFaixaEtariaSuperior',
      ],
    ];

    for (const [d1, d2, key] of combinations) {
      if ((dim1 === d1 && dim2 === d2) || (dim1 === d2 && dim2 === d1)) {
        return key;
      }
    }

    return null;
  }

  private parseFilter(filter: string): FilterParams {
    if (!filter) {
      return { years: [2023], state: '22' };
    }

    const params: FilterParams = { years: [], state: '22' };

    // Parse filter format: min_year:"2020",max_year:"2023",state:"22",city:"2211001"
    const filterParts = filter.split(',');

    let minYear: number | null = null;
    let maxYear: number | null = null;

    filterParts.forEach((part) => {
      const [key, value] = part.split(':');
      const cleanValue = value?.replace(/"/g, '');

      switch (key) {
        case 'min_year':
          minYear = parseInt(cleanValue);
          break;
        case 'max_year':
          maxYear = parseInt(cleanValue);
          break;
        case 'state':
          params.state = cleanValue;
          break;
        case 'city':
          params.city = cleanValue;
          break;
      }
    });

    // Gerar anos no intervalo
    if (minYear && maxYear) {
      for (let year = minYear; year <= maxYear; year++) {
        params.years.push(year);
      }
    } else if (minYear) {
      params.years.push(minYear);
    } else {
      params.years.push(2023);
    }

    return params;
  }

  private parseDims(dims: string): string[] {
    if (!dims) return [];
    return dims.split(',').map((d) => d.trim());
  }

  /**
   * Busca municípios únicos que têm dados no banco para os filtros especificados
   */
  private async getMunicipiosComDados(
    tipo: string,
    years: number[],
    stateCode: string,
    dimensions?: string[],
    isTimeSeries?: boolean,
  ): Promise<number[]> {
    const whereCondition: any = {
      tipo,
    };

    // Para série histórica, usar intervalo de anos
    if (isTimeSeries && years.length > 0) {
      whereCondition.ano = {
        gte: years[0],
        lte: years[years.length - 1],
      };
    } else {
      whereCondition.ano = { in: years };
    }

    // Para docentes, aplicar condições específicas baseadas nas dimensões
    if (tipo === 'docentes' && dimensions && dimensions.length > 0) {
      const dimension = dimensions[0];
      if (dimension === 'work_regime') {
        whereCondition.regime_docente_id = { not: 1, gte: 2 };
        whereCondition.formacao_docente_id = null;
      } else if (dimension === 'initial_training') {
        whereCondition.formacao_docente_id = { not: null };
        whereCondition.regime_docente_id = null;
      } else {
        whereCondition.regime_docente_id = null;
        whereCondition.formacao_docente_id = null;
      }
    } else if (tipo === 'docentes') {
      whereCondition.regime_docente_id = null;
      whereCondition.formacao_docente_id = null;
    }

    // Buscar municípios únicos que têm dados
    const municipiosComDados = await this.prisma.dadoEducacaoSuperior.findMany({
      where: whereCondition,
      select: { localidade_id: true },
      distinct: ['localidade_id'],
    });

    // Filtrar apenas os que começam com o código do estado, excluir o próprio estado (ID = stateCode)
    // e ordenar do menor para o maior
    const stateCodeNum = Number(stateCode);
    const municipioIds = municipiosComDados
      .map((item) => item.localidade_id)
      .filter((id) => {
        if (!id) return false;
        const idStr = id.toString();
        const idNum = Number(id);
        // Incluir apenas municípios (que começam com stateCode mas não são o próprio estado)
        return idStr.startsWith(stateCode) && idNum !== stateCodeNum;
      })
      .map((id) => Number(id))
      .sort((a, b) => a - b); // Ordenar do menor para o maior

    return municipioIds;
  }

  /**
   * Aplica paginação aos resultados agrupando por município (para série histórica)
   */
  private applyPaginationToMunicipalityResults(
    response: EducationResponse,
    page: number,
    limit: number,
    municipioIdsComDados: number[],
  ): EducationResponse {
    const totalMunicipios = municipioIdsComDados.length;
    const totalPages = Math.ceil(totalMunicipios / limit);

    // Calcular índices de paginação (por município, não por registro)
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedMunicipioIds = municipioIdsComDados.slice(startIndex, endIndex);

    // Criar um Set para busca rápida
    const paginatedMunicipioIdsSet = new Set(paginatedMunicipioIds);

    // Filtrar resultados para incluir TODOS os registros dos municípios da página atual
    // Garantir que a comparação seja feita com números
    const paginatedResults = response.result.filter((item) => {
      const municipalityId = Number(item.municipality_id);
      return municipalityId && paginatedMunicipioIdsSet.has(municipalityId);
    });

    // Ordenar resultados por municipality_id (menor para maior) e depois por year
    // Garantir que os IDs sejam tratados como números para ordenação correta
    paginatedResults.sort((a, b) => {
      const aId = Number(a.municipality_id) || 0;
      const bId = Number(b.municipality_id) || 0;

      if (aId !== bId) {
        return aId - bId;
      }

      const aYear = Number(a.year) || 0;
      const bYear = Number(b.year) || 0;
      return aYear - bYear;
    });

    // Criar nova resposta com resultados paginados
    const paginatedResponse: EducationResponse = {
      result: paginatedResults,
      pagination: {
        total: totalMunicipios,
        page: page,
        limit: limit,
        totalPages: totalPages,
      },
    };

    // Preservar outras chaves da resposta original (como chaves de tabela cruzada)
    Object.keys(response).forEach((key) => {
      if (key !== 'result' && key !== 'pagination') {
        if (Array.isArray(response[key])) {
          const filteredArray = (response[key] as any[]).filter((item) => {
            const municipalityId = Number(item.municipality_id);
            return municipalityId && paginatedMunicipioIdsSet.has(municipalityId);
          });
          filteredArray.sort((a, b) => {
            const aId = Number(a.municipality_id) || 0;
            const bId = Number(b.municipality_id) || 0;

            if (aId !== bId) {
              return aId - bId;
            }

            const aYear = Number(a.year) || 0;
            const bYear = Number(b.year) || 0;
            return aYear - bYear;
          });
          paginatedResponse[key] = filteredArray;
        } else {
          paginatedResponse[key] = response[key];
        }
      }
    });

    return paginatedResponse;
  }
}
