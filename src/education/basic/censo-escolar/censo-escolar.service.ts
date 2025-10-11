import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaEducacaoService } from '../../prisma-educacao.service';
import { CensoEscolarMapper } from './mappers/censo-escolar.mapper';
import { FilterDto } from './dto/filter.dto';

@Injectable()
export class CensoEscolarService {
  constructor(
    private readonly prisma: PrismaEducacaoService,
    private readonly mapper: CensoEscolarMapper,
  ) {}

  async getInfraestrutura(filterDto: FilterDto) {
    const where: any = {};

    if (filterDto.min_year && filterDto.max_year) {
      const minYear = parseInt(filterDto.min_year, 10);
      const maxYear = parseInt(filterDto.max_year, 10);
      const years = [];
      for (let year = minYear; year <= maxYear; year++) years.push(year);
      where.ANO = { in: years };
    } else if (filterDto.min_year) {
      where.ANO = { gte: parseInt(filterDto.min_year, 10) };
    } else if (filterDto.max_year) {
      where.ANO = { lte: parseInt(filterDto.max_year, 10) };
    }

    if (filterDto.filters) {
      let filters = filterDto.filters;
      if (typeof filters === 'string') {
        try {
          filters = JSON.parse(filters);
        } catch (error) {
          throw new BadRequestException('Invalid filters format. Expected a JSON string.');
        }
      }

      if (Array.isArray(filters) && filters.length > 0) {
        const localidadeFilters: any = {};
        for (const filter of filters) {
          switch (filter.type) {
            case 'cidade':
              localidadeFilters.nome = filter.value;
              break;
            case 'territorio':
              localidadeFilters.territorio_desenvolvimento = filter.value;
              break;
            case 'aglomerado':
              localidadeFilters.aglomerado = filter.value;
              break;
            case 'gre':
              localidadeFilters.gerencia_regional = filter.value;
              break;
            case 'faixa_populacional':
              localidadeFilters.faixa_populacional = filter.value;
              break;
          }
        }
        if (Object.keys(localidadeFilters).length > 0) {
          where.localidade = { is: localidadeFilters };
        }
      }
    }

    const results = await this.prisma.censoEscolarInfraestrutura.findMany({
      where,
      include: {
        localidade: {
          select: {
            nome: true,
            codigo_ibge: true,
            territorio_desenvolvimento: true,
            aglomerado: true,
            gerencia_regional: true,
            faixa_populacional: true,
          },
        },
      },
      take: 1000,
    });

    const context = {
      dimensions: filterDto.dimensions || [],
      filterParams: filterDto.filters || [],
    };

    return this.mapper.mapToStandardFormat(results, context);
  }

  async getInfraestruturaTimeSeries(options: {
    indicador: string;
    startYear?: string;
    endYear?: string;
  }) {
    const { indicador, startYear, endYear } = options;

    if (!indicador) {
      throw new BadRequestException('O parâmetro "indicador" é obrigatório.');
    }

    const startYearNum = parseInt(startYear, 10) || 2007;
    const endYearNum = parseInt(endYear, 10) || 2024;

    try {
      const result = await this.prisma.censoEscolarInfraestrutura.groupBy({
        by: ['ANO'],
        _sum: { [indicador]: true },
        where: {
          ANO: { gte: startYearNum, lte: endYearNum },
        },
        orderBy: { ANO: 'asc' },
      });

      const formattedResult = result.map((item) => ({
        ano: item.ANO,
        total: item._sum[indicador] || 0,
      }));

      return { result: formattedResult };
    } catch (error) {
      console.error('Erro no serviço ao buscar série histórica:', error);
      if (error.code === 'P2009' || error.message.includes('Invalid field')) {
        throw new BadRequestException(`Indicador inválido: ${indicador}`);
      }
      throw new Error('Não foi possível processar a sua requisição.');
    }
  }
}
