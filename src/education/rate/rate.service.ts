import { Injectable } from '@nestjs/common';
import { FilterParams } from '../../interfaces/education.interface';
import { PrismaEducacaoService } from '../prisma-educacao.service';

@Injectable()
export class RateService {
  constructor(private prisma: PrismaEducacaoService) {}

  async getOutOfSchool(dims: string, filter: string) {
    return this.queryDataTaxasPorFaixaEtaria('pop_out_school', dims, filter);
  }

  async getAdjustedLiquidFrequency(dims: string, filter: string) {
    return this.queryDataTaxasPorFaixaEtaria(
      'adjusted_liquid_frequency',
      dims,
      filter,
    );
  }

  async getIliteracyRate(dims: string, filter: string) {
    return this.queryDataTaxas('iliteracy_rate', dims, filter);
  }

  async getSuperiorEducationConclusionTax(dims: string, filter: string) {
    return this.queryDataTaxas(
      'superior_education_conclusion_tax',
      dims,
      filter,
    );
  }

  async getBasicEducationConclusion(dims: string, filter: string) {
    return this.queryDataTaxas('basic_education_conclusion', dims, filter);
  }

  async getInstructionLevel(dims: string, filter: string) {
    return this.queryDataTaxas('instruction_level', dims, filter);
  }

  // Métodos públicos para série histórica
  async getOutOfSchoolTimeSeries(dims: string, filter: string) {
    return this.queryDataTaxasPorFaixaEtariaTimeSeries(
      'pop_out_school',
      dims,
      filter,
    );
  }

  async getAdjustedLiquidFrequencyTimeSeries(dims: string, filter: string) {
    return this.queryDataTaxasPorFaixaEtariaTimeSeries(
      'adjusted_liquid_frequency',
      dims,
      filter,
    );
  }

  async getIliteracyRateTimeSeries(dims: string, filter: string) {
    return this.queryDataTaxasTimeSeries('iliteracy_rate', dims, filter);
  }

  async getSuperiorEducationConclusionTaxTimeSeries(
    dims: string,
    filter: string,
  ) {
    return this.queryDataTaxasTimeSeries(
      'superior_education_conclusion_tax',
      dims,
      filter,
    );
  }

  async getBasicEducationConclusionTimeSeries(dims: string, filter: string) {
    return this.queryDataTaxasTimeSeries(
      'basic_education_conclusion',
      dims,
      filter,
    );
  }

  async getInstructionLevelTimeSeries(dims: string, filter: string) {
    return this.queryDataTaxasTimeSeries('instruction_level', dims, filter);
  }

  private async queryDataTaxasPorFaixaEtariaTimeSeries(
    tipo: string,
    dims: string,
    filter: string,
  ) {
    const filterParams = this.parseFilter(filter);
    const dimensions = this.parseDims(dims);

    // Validar que apenas uma dimensão seja permitida para série histórica
    if (dimensions.length > 1) {
      throw new Error(
        'Para série histórica, apenas uma dimensão é permitida por vez. Dimensões selecionadas: ' +
          dimensions.join(', '),
      );
    }

    // Verificar se age_range está nas dimensões
    const hasAgeRange = dimensions.includes('age_range');

    if (!hasAgeRange) {
      // Retorna vazio quando não há dimensão age_range
      return { result: [] };
    }

    const results = await this.prisma.taxasPorFaixaEtaria.findMany({
      where: {
        tipo,
        ano: { in: filterParams.years },
        localidade_id: filterParams.city
          ? Number(filterParams.city)
          : Number(filterParams.state),
      },
      include: {
        localidade: true,
        faixa_etaria_taxas: true,
      },
    });

    // Retorna com age_range quando a dimensão está presente
    return {
      result: results.map((result) => ({
        age_range_id: result.faixa_etaria_taxas_id,
        age_range_name: result.faixa_etaria_taxas?.nome,
        total: Number(result.total),
        year: result.ano,
      })),
    };
  }

  private async queryDataTaxasTimeSeries(
    tipo: string,
    dims: string,
    filter: string,
  ) {
    const filterParams = this.parseFilter(filter);
    const dimensions = this.parseDims(dims);

    // Validar que apenas uma dimensão seja permitida para série histórica
    if (dimensions.length > 1) {
      throw new Error(
        'Para série histórica, apenas uma dimensão é permitida por vez. Dimensões selecionadas: ' +
          dimensions.join(', '),
      );
    }

    // Construir where clause baseado nas dimensões solicitadas
    const whereClause: any = {
      tipo,
      ano: { in: filterParams.years },
      localidade_id: filterParams.city
        ? Number(filterParams.city)
        : Number(filterParams.state),
    };

    // Verificar se é o tipo instruction_level (que tem dimensão obrigatória)
    const isInstructionLevel = tipo === 'instruction_level';
    const hasInstructionLevel = dimensions.includes('instruction_level');
    const hasLocation = dimensions.includes('location');
    const hasAgeRange =
      dimensions.includes('age_range') || dimensions.includes('age_range_all');

    // Para instruction_level, a dimensão instruction_level é obrigatória
    if (isInstructionLevel && !hasInstructionLevel) {
      throw new Error(
        'Para o tipo instruction_level, a dimensão instruction_level é obrigatória',
      );
    }

    // Se não há dimensões, buscar apenas dados consolidados
    if (!dimensions || dimensions.length === 0) {
      if (isInstructionLevel) {
        // Para instruction_level, mesmo sem dimensões adicionais, instruction_level é obrigatório
        whereClause.nivel_instrucao_id = { not: null };
        whereClause.localizacao_id = null;
        whereClause.faixa_etaria_taxas_concl_sup_e_anafal_id = null;
        whereClause.faixa_etaria_taxas_concl_ed_basica_id = null;
      } else {
        // Para outros tipos, dados consolidados sem nenhuma dimensão
        whereClause.localizacao_id = null;
        whereClause.faixa_etaria_taxas_concl_sup_e_anafal_id = null;
        whereClause.faixa_etaria_taxas_concl_ed_basica_id = null;
        whereClause.nivel_instrucao_id = null;
      }
    } else {
      // Se há dimensões, aplicar filtros específicos baseado no que foi selecionado
      // Como só pode ter uma dimensão, simplificar a lógica

      if (hasLocation) {
        // Se localização foi selecionada, buscar registros com localização
        whereClause.localizacao_id = { not: null };
        whereClause.faixa_etaria_taxas_concl_sup_e_anafal_id = null;
        whereClause.faixa_etaria_taxas_concl_ed_basica_id = null;
        whereClause.nivel_instrucao_id = null;
      } else if (hasAgeRange) {
        // Se faixa etária foi selecionada, buscar registros com faixa etária
        whereClause.localizacao_id = null;
        whereClause.OR = [
          { faixa_etaria_taxas_concl_sup_e_anafal_id: { not: null } },
          { faixa_etaria_taxas_concl_ed_basica_id: { not: null } },
        ];
        whereClause.nivel_instrucao_id = null;
      } else if (hasInstructionLevel) {
        // Se instruction_level foi selecionada, buscar registros com instruction_level
        whereClause.nivel_instrucao_id = { not: null };
        whereClause.localizacao_id = null;
        whereClause.faixa_etaria_taxas_concl_sup_e_anafal_id = null;
        whereClause.faixa_etaria_taxas_concl_ed_basica_id = null;
      }
    }

    const results = await this.prisma.taxas.findMany({
      where: whereClause,
      include: {
        localidade: true,
        localizacao: true,
        faixa_etaria_taxas_concl_sup_e_anafal: true,
        faixa_etaria_taxas_concl_ed_basica: true,
        nivel_instrucao: true,
      },
    });

    return {
      result: results.map((result) => {
        // Padronizar o retorno para age_range, independente do modelo
        let ageRangeId = null;
        let ageRangeName = null;

        if (result.faixa_etaria_taxas_concl_sup_e_anafal) {
          ageRangeId = result.faixa_etaria_taxas_concl_sup_e_anafal_id;
          ageRangeName = result.faixa_etaria_taxas_concl_sup_e_anafal.nome;
        } else if (result.faixa_etaria_taxas_concl_ed_basica) {
          ageRangeId = result.faixa_etaria_taxas_concl_ed_basica_id;
          ageRangeName = result.faixa_etaria_taxas_concl_ed_basica.nome;
        }

        return {
          age_range_id: ageRangeId,
          age_range_name: ageRangeName,
          location_id: result.localizacao_id,
          location_name: result.localizacao?.nome,
          instruction_level_id: result.nivel_instrucao_id,
          instruction_level_name: result.nivel_instrucao?.nome,
          total: Number(result.total),
          year: result.ano,
        };
      }),
    };
  }

  private async queryDataTaxasPorFaixaEtaria(
    tipo: string,
    dims: string,
    filter: string,
  ) {
    const filterParams = this.parseFilter(filter);
    const dimensions = this.parseDims(dims);

    // Verificar se age_range está nas dimensões
    const hasAgeRange = dimensions.includes('age_range');

    if (!hasAgeRange) {
      // Retorna vazio quando não há dimensão age_range
      return [];
    }

    const results = await this.prisma.taxasPorFaixaEtaria.findMany({
      where: {
        tipo,
        ano: { in: filterParams.years },
        localidade_id: filterParams.city
          ? Number(filterParams.city)
          : Number(filterParams.state),
      },
      include: {
        localidade: true,
        faixa_etaria_taxas: true,
      },
    });

    // Retorna com age_range quando a dimensão está presente
    return results.map((result) => ({
      age_range_id: result.faixa_etaria_taxas_id,
      age_range_name: result.faixa_etaria_taxas?.nome,
      total: Number(result.total),
      year: result.ano,
    }));
  }

  private async queryDataTaxas(tipo: string, dims: string, filter: string) {
    const filterParams = this.parseFilter(filter);
    const dimensions = this.parseDims(dims);

    // Construir where clause baseado nas dimensões solicitadas
    const whereClause: any = {
      tipo,
      ano: { in: filterParams.years },
      localidade_id: filterParams.city
        ? Number(filterParams.city)
        : Number(filterParams.state),
    };

    // Verificar se é o tipo instruction_level (que tem dimensão obrigatória)
    const isInstructionLevel = tipo === 'instruction_level';
    const hasInstructionLevel = dimensions.includes('instruction_level');
    const hasLocation = dimensions.includes('location');
    const hasAgeRange =
      dimensions.includes('age_range') || dimensions.includes('age_range_all');

    // Para instruction_level, a dimensão instruction_level é obrigatória
    if (isInstructionLevel && !hasInstructionLevel) {
      throw new Error(
        'Para o tipo instruction_level, a dimensão instruction_level é obrigatória',
      );
    }

    // Se não há dimensões, buscar apenas dados consolidados
    if (!dimensions || dimensions.length === 0) {
      if (isInstructionLevel) {
        // Para instruction_level, mesmo sem dimensões adicionais, instruction_level é obrigatório
        whereClause.nivel_instrucao_id = { not: null };
        whereClause.localizacao_id = null;
        whereClause.faixa_etaria_taxas_concl_sup_e_anafal_id = null;
        whereClause.faixa_etaria_taxas_concl_ed_basica_id = null;
      } else {
        // Para outros tipos, dados consolidados sem nenhuma dimensão
        whereClause.localizacao_id = null;
        whereClause.faixa_etaria_taxas_concl_sup_e_anafal_id = null;
        whereClause.faixa_etaria_taxas_concl_ed_basica_id = null;
        whereClause.nivel_instrucao_id = null;
      }
    } else {
      // Se há dimensões, aplicar filtros específicos baseado no que foi selecionado

      // Lógica para localização e faixa etária
      if (hasLocation && hasAgeRange) {
        // Se ambas as dimensões foram selecionadas, buscar registros com ambas preenchidas
        whereClause.localizacao_id = { not: null };
        whereClause.OR = [
          { faixa_etaria_taxas_concl_sup_e_anafal_id: { not: null } },
          { faixa_etaria_taxas_concl_ed_basica_id: { not: null } },
        ];
      } else if (hasLocation && !hasAgeRange) {
        // Se apenas localização foi selecionada, buscar registros com localização mas sem faixa etária
        whereClause.localizacao_id = { not: null };
        whereClause.faixa_etaria_taxas_concl_sup_e_anafal_id = null;
        whereClause.faixa_etaria_taxas_concl_ed_basica_id = null;
      } else if (!hasLocation && hasAgeRange) {
        // Se apenas faixa etária foi selecionada, buscar registros com faixa etária mas sem localização
        whereClause.localizacao_id = null;
        whereClause.OR = [
          { faixa_etaria_taxas_concl_sup_e_anafal_id: { not: null } },
          { faixa_etaria_taxas_concl_ed_basica_id: { not: null } },
        ];
      }
      // Casos específicos para instruction_level com combinações individuais
      if (isInstructionLevel) {
        if (hasInstructionLevel && hasLocation && !hasAgeRange) {
          // instruction_level + location (sem faixa etária)
          whereClause.nivel_instrucao_id = { not: null };
          whereClause.localizacao_id = { not: null };
          whereClause.faixa_etaria_taxas_concl_sup_e_anafal_id = null;
          whereClause.faixa_etaria_taxas_concl_ed_basica_id = null;
        } else if (hasInstructionLevel && !hasLocation && hasAgeRange) {
          // instruction_level + age_range (sem localização)
          whereClause.nivel_instrucao_id = { not: null };
          whereClause.localizacao_id = null;
          whereClause.OR = [
            { faixa_etaria_taxas_concl_sup_e_anafal_id: { not: null } },
            { faixa_etaria_taxas_concl_ed_basica_id: { not: null } },
          ];
        } else if (hasInstructionLevel && !hasLocation && !hasAgeRange) {
          // Apenas instruction_level (sem location e age_range)
          whereClause.nivel_instrucao_id = { not: null };
          whereClause.localizacao_id = null;
          whereClause.faixa_etaria_taxas_concl_sup_e_anafal_id = null;
          whereClause.faixa_etaria_taxas_concl_ed_basica_id = null;
        }
      }
    }

    const results = await this.prisma.taxas.findMany({
      where: whereClause,
      include: {
        localidade: true,
        localizacao: true,
        faixa_etaria_taxas_concl_sup_e_anafal: true,
        faixa_etaria_taxas_concl_ed_basica: true,
        nivel_instrucao: true,
      },
    });

    return results.map((result) => {
      // Padronizar o retorno para age_range, independente do modelo
      let ageRangeId = null;
      let ageRangeName = null;

      if (result.faixa_etaria_taxas_concl_sup_e_anafal) {
        ageRangeId = result.faixa_etaria_taxas_concl_sup_e_anafal_id;
        ageRangeName = result.faixa_etaria_taxas_concl_sup_e_anafal.nome;
      } else if (result.faixa_etaria_taxas_concl_ed_basica) {
        ageRangeId = result.faixa_etaria_taxas_concl_ed_basica_id;
        ageRangeName = result.faixa_etaria_taxas_concl_ed_basica.nome;
      }

      return {
        age_range_id: ageRangeId,
        age_range_name: ageRangeName,
        location_id: result.localizacao_id,
        location_name: result.localizacao?.nome,
        instruction_level_id: result.nivel_instrucao_id,
        instruction_level_name: result.nivel_instrucao?.nome,
        total: Number(result.total),
        year: result.ano,
      };
    });
  }

  private parseFilter(filter: string): FilterParams {
    try {
      if (!filter || typeof filter !== 'string') {
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
    } catch {
      return { years: [2022], state: '22', isHistorical: false };
    }
  }

  private parseDims(dims: string): string[] {
    if (!dims) return [];
    return dims
      .split(',')
      .map((d) => d.trim())
      .filter(Boolean);
  }
}
