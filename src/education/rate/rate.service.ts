import { Injectable } from '@nestjs/common';
import { FilterParams } from '../../interfaces/education.interface';
import { EducationResponseMapper } from '../basic/mappers/education-response.mapper';
import { PrismaEducacaoService } from '../prisma-educacao.service';

@Injectable()
export class RateService {
  constructor(
    private prisma: PrismaEducacaoService,
    private mapper: EducationResponseMapper,
  ) {}

  async getOutOfSchool(dims: string, filter: string) {
    return {
      data: [],
      error: null,
    };
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
