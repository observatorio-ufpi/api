import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaEducacaoService } from '../../prisma-educacao.service';
import { CensoEscolarMapper } from './mappers/censo-escolar.mapper';

interface FilterParams {
  years: number[];
  state: string;
  city?: string;
  isHistorical?: boolean;
}

@Injectable()
export class CensoEscolarService {
  constructor(
    private readonly prisma: PrismaEducacaoService,
    private readonly mapper: CensoEscolarMapper,
  ) {}

  async getInfraestrutura(dims: string, filter: string) {
    const filterParams = this.parseFilter(filter);
    const dimensions = this.parseDims(dims);

    const results = await this.prisma.censoEscolarInfraestrutura.findMany({
      where: {
        ANO: { in: filterParams.years },
        ...(filterParams.city && { CO_MUNICIPIO: Number(filterParams.city) }),
        ...(!filterParams.city && { CO_UF: Number(filterParams.state) }),
      },
    });

    return this.mapper.mapToStandardFormat(results, {
      dimensions,
      filterParams,
    });
  }
  // --- ✅ NOVO MÉTODO PARA A LÓGICA DA SÉRIE HISTÓRICA ---
  async getInfraestruturaTimeSeries(options: {
    indicador: string;
    startYear?: string;
    endYear?: string;
  }) {
    const { indicador, startYear, endYear } = options;

    if (!indicador) {
      throw new BadRequestException('O parâmetro "indicador" é obrigatório.');
    }

    const startYearNum = parseInt(startYear, 10) || 2007; // Ano padrão inicial
    const endYearNum = parseInt(endYear, 10) || 2024;   // Ano padrão final

    try {
      // Usamos o Prisma Client da educação
      const result = await this.prisma.censoEscolarInfraestrutura.groupBy({
        by: ['ANO'],
        _sum: {
          [indicador]: true, // Agrega dinamicamente a coluna do indicador
        },
        where: {
          ANO: {
            gte: startYearNum,
            lte: endYearNum,
          },
        },
        orderBy: {
          ANO: 'asc',
        },
      });

      // Formata a resposta para ser amigável para o frontend
      const formattedResult = result.map(item => ({
        ano: item.ANO,
        total: item._sum[indicador] || 0,
      }));
      
      return { result: formattedResult };

    } catch (error) {
      console.error("Erro no serviço ao buscar série histórica:", error);
      // Lide com o erro - ex: verifique se a coluna 'indicador' é válida
      if (error.code === 'P2009' || error.message.includes('Invalid field')) {
        throw new BadRequestException(`Indicador inválido: ${indicador}`);
      }
      throw new Error("Não foi possível processar a sua requisição.");
    }
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
    } catch (error) {
      console.error('Erro ao analisar filtro:', error);
      return { years: [2022], state: '22', isHistorical: false };
    }
  }

  private parseDims(dims: string): string[] {
    if (!dims || typeof dims !== 'string') {
      return [];
    }
    return dims
      .split(',')
      .map((dim) => dim.trim())
      .filter((dim) => dim.length > 0);
  }

  private buildFilterString(filterParams: FilterParams): string {
    const minYear = Math.min(...filterParams.years);
    const maxYear = Math.max(...filterParams.years);

    let filter = `min_year:"${minYear}",max_year:"${maxYear}",state:"${filterParams.state}"`;

    if (filterParams.city) {
      filter += `,city:"${filterParams.city}"`;
    }

    return filter;
  }

  
}
