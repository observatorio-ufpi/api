import { Injectable } from '@nestjs/common';
import { PrismaEducacaoService } from '../prisma-educacao.service';

interface FilterParams {
  years: number[];
  state: string;
  city?: string;
}

interface EducationResponse {
  result: any[];
  [key: string]: any;
}

@Injectable()
export class HigherService {
  constructor(private prisma: PrismaEducacaoService) {}

  async getEnrollment(dims: string, filter: string): Promise<EducationResponse> {
    return this.queryData('matriculas', dims, filter);
  }

  async getUniversityCount(dims: string, filter: string): Promise<EducationResponse> {
    return this.queryData('ies', dims, filter);
  }

  async getCourseCount(dims: string, filter: string): Promise<EducationResponse> {
    return this.queryData('cursos', dims, filter);
  }

  async getTeacher(dims: string, filter: string): Promise<EducationResponse> {
    return this.queryData('docentes', dims, filter);
  }

  // Série histórica
  async getEnrollmentTimeSeries(dims: string, filter: string): Promise<EducationResponse> {
    return this.serieHistoricaTwoDimensions('matriculas', dims, filter);
  }

  async getUniversityCountTimeSeries(dims: string, filter: string): Promise<EducationResponse> {
    return this.serieHistoricaTwoDimensions('ies', dims, filter);
  }

  async getCourseCountTimeSeries(dims: string, filter: string): Promise<EducationResponse> {
    return this.serieHistoricaTwoDimensions('cursos', dims, filter);
  }

  async getTeacherTimeSeries(dims: string, filter: string): Promise<EducationResponse> {
    return this.serieHistoricaTwoDimensions('docentes', dims, filter);
  }

  private async queryData(tipo: string, dims: string, filter: string): Promise<EducationResponse> {
    const filterParams = this.parseFilter(filter);
    const dimensions = this.parseDims(dims);

    // Para docentes, precisamos de lógica especial para evitar duplicação
    if (tipo === 'docentes') {
      return this.queryTeacherData(dimensions, filterParams);
    }

    // Buscar dados básicos sempre incluindo todas as relações
    const results = await this.prisma.dadoEducacaoSuperior.findMany({
      where: {
        tipo,
        ano: { in: filterParams.years },
        localidade_id: filterParams.city ? Number(filterParams.city) : Number(filterParams.state),
      },
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

    return this.processResults(results, dimensions, tipo);
  }

  private async queryTeacherData(dimensions: string[], filterParams: FilterParams): Promise<EducationResponse> {
    // Docentes só aceita uma dimensão (ou nenhuma para total)
    if (dimensions.length > 1) {
      return { result: [] };
    }

    let whereConditions: any = {
      tipo: 'docentes',
      ano: { in: filterParams.years },
      localidade_id: filterParams.city ? Number(filterParams.city) : Number(filterParams.state),
    };

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
      } else if (dimension === 'upper_adm_dependency' || dimension === 'academic_level') {
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

    return this.processResults(results, dimensions, 'docentes');
  }

  private async serieHistoricaTwoDimensions(tipo: string, dims: string, filter: string): Promise<EducationResponse> {
    const filterParams = this.parseFilter(filter);
    const dimensions = this.parseDims(dims);

    // Para docentes, usar lógica especial
    if (tipo === 'docentes') {
      return this.queryTeacherDataTimeSeries(dimensions, filterParams);
    }

    const results = await this.prisma.dadoEducacaoSuperior.findMany({
      where: {
        tipo,
        ano: { gte: filterParams.years[0], lte: filterParams.years[filterParams.years.length - 1] },
        localidade_id: filterParams.city ? Number(filterParams.city) : Number(filterParams.state),
      },
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

    return this.processResults(results, dimensions, tipo);
  }

  private async queryTeacherDataTimeSeries(dimensions: string[], filterParams: FilterParams): Promise<EducationResponse> {
    // Docentes só aceita uma dimensão (ou nenhuma para total)
    if (dimensions.length > 1) {
      return { result: [] };
    }

    let whereConditions: any = {
      tipo: 'docentes',
      ano: { gte: filterParams.years[0], lte: filterParams.years[filterParams.years.length - 1] },
      localidade_id: filterParams.city ? Number(filterParams.city) : Number(filterParams.state),
    };

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
      } else if (dimension === 'upper_adm_dependency' || dimension === 'academic_level') {
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

    return this.processResults(results, dimensions, 'docentes');
  }

  private processResults(results: any[], dimensions: string[], tipo: string): EducationResponse {
    if (!dimensions || dimensions.length === 0) {
      // Sem dimensões - somar o campo 'total' de cada registro por ano
      const yearTotals = new Map();

      results.forEach(item => {
        const year = item.ano;

        // Para docentes sem dimensão, considerar apenas registros com regime e formação NULL (valor total correto)
        if (tipo === 'docentes') {
          if (item.regime_docente_id === null && item.formacao_docente_id === null) {
            yearTotals.set(year, (yearTotals.get(year) || 0) + Number(item.total));
          }
        } else {
          // Para matrículas, cursos e IES, somar o campo 'total' de cada linha
          yearTotals.set(year, (yearTotals.get(year) || 0) + Number(item.total));
        }
      });

      const aggregated = Array.from(yearTotals.entries()).map(([year, total]) => ({
        year,
        total,
      }));

      console.log(aggregated);

      return { result: aggregated };
    }

    if (dimensions.length === 1) {
      // Uma dimensão - agrupar pela dimensão selecionada
      return this.processOneDimension(results, dimensions[0], tipo);
    }

    if (dimensions.length === 2) {
      // Duas dimensões - criar tabela cruzada
      return this.processTwoDimensions(results, dimensions, tipo);
    }

    // Mais de duas dimensões não suportado
    return { result: [] };
  }

  private processOneDimension(results: any[], dimension: string, tipo: string): EducationResponse {
    const dimensionYearTotals = new Map();

    results.forEach(item => {
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

    const processedResults = [];

    dimensionYearTotals.forEach((yearMap, key) => {
      const [id, name] = key.split('_', 2);

      // Para cada ano da dimensão, criar um registro separado
      yearMap.forEach((total, year) => {
        const result: any = {
          year,
          total,
        };

        // Adicionar campos específicos da dimensão
        this.addDimensionFields(result, dimension, Number(id), name);

        processedResults.push(result);
      });
    });

    return { result: processedResults };
  }

  private processTwoDimensions(results: any[], dimensions: string[], tipo: string): EducationResponse {
    const [dim1, dim2] = dimensions;

    // Para docentes, não permitir duas dimensões
    if (tipo === 'docentes') {
      return { result: [] };
    }

    const crossData = new Map();
    const dim1Values = new Set();
    const dim2Values = new Set();

    results.forEach(item => {
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

    // Criar dados para a tabela cruzada
    const crossTableData = [];
    crossData.forEach((yearMap, key) => {
      const [dim1Id, dim2Id] = key.split('-');
      const dim1Info = Array.from(dim1Values).find(v => (v as string).startsWith(dim1Id + '_'));
      const dim2Info = Array.from(dim2Values).find(v => (v as string).startsWith(dim2Id + '_'));

      if (dim1Info && dim2Info) {
        const dim1Name = (dim1Info as string).split('_', 2)[1];
        const dim2Name = (dim2Info as string).split('_', 2)[1];

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

  private getDimensionValue(item: any, dimension: string): { id: number; name: string } | null {
    switch (dimension) {
      case 'upper_education_mod':
        return item.modalidade_ensino ?
          { id: item.modalidade_ensino.id, name: item.modalidade_ensino.nome } : null;

      case 'upper_adm_dependency':
        return item.categoria_administrativa ?
          { id: item.categoria_administrativa.id, name: item.categoria_administrativa.nome } : null;

      case 'age_student_code':
        return item.faixa_etaria ?
          { id: item.faixa_etaria.id, name: item.faixa_etaria.nome } : null;

      case 'academic_level':
        return item.organizacao_academica ?
          { id: item.organizacao_academica.id, name: item.organizacao_academica.nome } : null;

      case 'work_regime':
        return item.regime_docente ?
          { id: item.regime_docente.id, name: item.regime_docente.nome } : null;

      case 'initial_training':
        return item.formacao_docente ?
          { id: item.formacao_docente.id, name: item.formacao_docente.nome } : null;

      default:
        return null;
    }
  }

  private addDimensionFields(result: any, dimension: string, id: number, name: string): void {
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
    }
  }

  private getCrossKey(dim1: string, dim2: string): string | null {
    const combinations = [
      ['upper_education_mod', 'age_student_code', 'byModalidadeAndFaixaEtariaSuperior'],
      ['upper_education_mod', 'academic_level', 'byModalidadeAndOrganizacaoAcademica'],
      ['upper_education_mod', 'upper_adm_dependency', 'byModalidadeAndCategoriaAdministrativa'],
      ['upper_adm_dependency', 'age_student_code', 'byCategoriaAdministrativaAndFaixaEtariaSuperior'],
      ['upper_adm_dependency', 'academic_level', 'byCategoriaAdministrativaAndOrganizacaoAcademica'],
      ['academic_level', 'age_student_code', 'byOrganizacaoAcademicaAndFaixaEtariaSuperior'],
      ['upper_adm_dependency', 'work_regime', 'byCategoriaAdministrativaAndRegime'],
      ['upper_adm_dependency', 'initial_training', 'byCategoriaAdministrativaAndFormacaoDocente'],
      ['academic_level', 'work_regime', 'byOrganizacaoAcademicaAndRegime'],
      ['academic_level', 'initial_training', 'byOrganizacaoAcademicaAndFormacaoDocente'],
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

    filterParts.forEach(part => {
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
    return dims.split(',').map(d => d.trim());
  }
}