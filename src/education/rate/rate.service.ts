import { Injectable } from '@nestjs/common';
import { FilterParams } from '../../interfaces/education.interface';
import { PrismaEducacaoService } from '../prisma-educacao.service';

@Injectable()
export class RateService {
  constructor(private prisma: PrismaEducacaoService) {}

  async getOutOfSchool(dims: string, filter: string) {
    return this.queryData('pop_out_school', dims, filter);
  }

  private async queryData(tipo: string, dims: string, filter: string) {
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
