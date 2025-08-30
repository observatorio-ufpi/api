import { Injectable } from '@nestjs/common';
import {
  DetailedEducationData,
  EducationResponse,
  FilterParams,
  MappingContext,
} from '../../../interfaces/education.interface';

@Injectable()
export class EducationResponseMapper {
  mapToStandardFormat(data: any[], context: MappingContext): EducationResponse {
    const mappedResults = this.mapDataByType(data, context);

    return {
      result: mappedResults,
      metadata: {
        filters: this.extractFilters(context.filterParams),
        dimensions: context.dimensions,
        source: context.dataSource,
        lastUpdated: new Date(),
      },
    };
  }

  private mapDataByType(
    data: any[],
    context: MappingContext,
  ): DetailedEducationData[] {
    const { tipo, filterParams } = context;

    return data.map((item) => {
      // Mapeamento base comum a todos os tipos
      const baseData: DetailedEducationData = {
        year: item.ano,
        total: Number(item.total),
      };

      // Normalizar education_level_mod para todos os tipos
      let educationLevelId: number | null = null;
      let educationLevelName: string | null = null;

      // Determinar qual campo de etapa usar baseado no tipo REAL do item no banco
      // Para enrollment, precisamos verificar o tipo real do registro
      if (item.tipo === 'enrollmentAggregate') {
        educationLevelId = item.etapa?.id ?? null;
        educationLevelName = item.etapa?.nome ?? null;
      } else if (
        tipo === 'federativeEntity' &&
        filterParams.years.some((y) => y >= 2021)
      ) {
        educationLevelId = item.etapa_teacher?.id ?? null;
        educationLevelName = item.etapa_teacher?.nome ?? null;
      } else if (tipo === 'school/count') {
        educationLevelId = item.etapa_school?.id ?? null;
        educationLevelName = item.etapa_school?.nome ?? null;
      } else if (tipo === 'class') {
        // Para tipo class, usar etapa_turma
        educationLevelId = item.etapa_turma?.id ?? null;
        educationLevelName = item.etapa_turma?.nome ?? null;
      } else if (
        tipo === 'enrollment' &&
        filterParams.years.some((y) => y <= 2020)
      ) {
        // Para enrollment até 2020, usar etapa_matricula_ate2020
        educationLevelId = item.etapa_matricula_ate2020?.id ?? null;
        educationLevelName = item.etapa_matricula_ate2020?.nome ?? null;
      } else if (tipo === 'employees') {
        // Para employees, não há education_level_mod, então manter como null
        educationLevelId = null;
        educationLevelName = null;
      } else {
        // Para outros tipos, usar o campo padrão etapa
        educationLevelId = item.etapa?.id ?? null;
        educationLevelName = item.etapa?.nome ?? null;
      }

      // Estrutura padronizada com education_level_mod sempre presente
      const standardData: DetailedEducationData = {
        ...baseData,
        education_level_mod_id: educationLevelId,
        education_level_mod_name: educationLevelName,
        adm_dependency_detailed_id: null,
        adm_dependency_detailed_name: null,
        location_id: item.localizacao?.id ?? null,
        location_name: item.localizacao?.nome ?? null,
      };

      // Mapeamento específico por tipo para campos adicionais
      if (
        tipo === 'federativeEntity' &&
        filterParams.years.some((y) => y >= 2021)
      ) {
        standardData.adm_dependency_detailed_id =
          item.dependencia_teacher?.id ?? null;
        standardData.adm_dependency_detailed_name =
          item.dependencia_teacher?.nome ?? null;
        standardData.contract_type_id = item.contrato?.id ?? null;
        standardData.contract_type_name = item.contrato?.nome ?? null;
      } else {
        // Para todos os outros tipos
        standardData.adm_dependency_detailed_id = item.dependencia?.id ?? null;
        standardData.adm_dependency_detailed_name =
          item.dependencia?.nome ?? null;
      }

      return standardData;
    });
  }

  private extractFilters(filterParams: FilterParams): Record<string, any> {
    return {
      years: filterParams.years,
      state: filterParams.state,
      ...(filterParams.city && { city: filterParams.city }),
      ...(filterParams.isHistorical && {
        isHistorical: filterParams.isHistorical,
      }),
    };
  }

  /**
   * Agrupa dados por ano quando não há dimensões específicas
   */
  aggregateByYear(data: DetailedEducationData[]): DetailedEducationData[] {
    const groupedByYear = data.reduce(
      (acc, item) => {
        const year = item.year;
        if (!acc[year]) {
          acc[year] = { year, total: 0 };
        }
        acc[year].total += item.total;
        return acc;
      },
      {} as Record<number, DetailedEducationData>,
    );

    return Object.values(groupedByYear).sort((a, b) => a.year - b.year);
  }

  /**
   * Filtra dados por critérios específicos
   */
  filterByCriteria(
    data: DetailedEducationData[],
    criteria: { [key: string]: any },
  ): DetailedEducationData[] {
    return data.filter((item) => {
      return Object.entries(criteria).every(([key, value]) => {
        if (value === null || value === undefined) return true;
        return item[key] === value;
      });
    });
  }

  /**
   * Remove itens com IDs específicos que devem ser excluídos
   */
  removeExcludedItems(
    data: DetailedEducationData[],
    context: MappingContext,
  ): DetailedEducationData[] {
    const { tipo } = context;

    if (tipo === 'enrollment' || tipo === 'enrollmentAggregate') {
      return data.filter((item) => {
        // Remover apenas se o ano for maior que 2020 E o education_level_mod_id for 11
        if (item.year > 2020 && item.education_level_mod_id === 11) {
          return false;
        }
        return true;
      });
    } else {
      return data;
    }
  }
}
