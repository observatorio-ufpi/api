import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CensoEscolarInfraestruturaResponseDto } from '../../../dtos/censo-escolar-response.dto';
import { ErrorResponseDto } from '../../../dtos/common-response.dto';
import { CensoEscolarService } from './censo-escolar.service';
import { FilterDto } from './dto/filter.dto';

@ApiTags('Censo Escolar')
@Controller('censo-escolar')
export class CensoEscolarController {
  constructor(private readonly censoEscolarService: CensoEscolarService) {}

  // Mapping from frontend keys to DB labels (as uploaded from municipios_pi.csv)
  private readonly territoryMap: Record<string, string> = {
    CHAPADA_VALE_DO_RIO_ITAIM: 'Chapada Vale do Rio Itaim',
    ENTRE_RIOS: 'Entre Rios',
    VALE_DO_RIO_GUARIBAS: 'Vale do Rio Guaribas',
    CHAPADA_DAS_MANGABEIRAS: 'Chapada das Mangabeiras',
    SERRA_DA_CAPIVARA: 'Serra da Capivara',
    TABULEIROS_DO_ALTO_PARNAIBA: 'Tabuleiros do Alto Parnaiba',
    VALE_DO_SAMBITO: 'Vale do Sambito',
    VALE_DOS_RIOS_PIAUI_E_ITAUEIRAS: 'Vale dos Rios Piauí e Itaueiras',
    CARNAUBAIS: 'Carnaubais',
    COCAIS: 'Cocais',
    VALE_DO_CANINDE: 'Vale do Canindé',
    PLANICIE_LITORANEA: 'Planície Litorânea',
  };

  private readonly faixaPopMap: Record<string, string> = {
    MENOS_DE_5000_HABITANTES: 'Menos de 5.000 habitantes',
    DE_5001_A_10000_HABITANTES: '5.001 a 10.000 de habitantes',
    DE_10001_A_20000_HABITANTES: '10.001 a 20.000 de habitantes',
    DE_20001_A_50000_HABITANTES: '20.001 a 50.000 de habitantes',
    ACIMA_DE_50000_HABITANTES: 'Acima de 50.000 habitantes',
  };

  @Get('infraestrutura')
  @ApiOperation({
    summary: 'Obter dados de infraestrutura do Censo Escolar com filtros',
    description: 'Retorna dados de infraestrutura das escolas do Censo Escolar com base nos filtros fornecidos.',
  })
  @ApiResponse({
    status: 200,
    description: 'Dados de infraestrutura retornados com sucesso',
    type: CensoEscolarInfraestruturaResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: ErrorResponseDto,
  })
  @ApiQuery({ name: 'filter', required: false, description: 'Filter string (ex: min_year:"2023",max_year:"2023",state:"22",city:"2203008")' })
  @ApiQuery({ name: 'dims', required: false, description: 'Comma separated dimensions (ex: infraestrutura_basica,espacos_pedagogicos)' })
  getInfraestrutura(@Query() query: any, @Query('filter') rawFilter?: string, @Query('dims') rawDims?: string) {
    // If frontend sent the compact `filter` string, parse basic parts and build a FilterDto
    const filterDto: any = { ...(query || {}) } as FilterDto;

    // If min_year/max_year not present but rawFilter exists, try to extract them
    if (rawFilter) {
      try {
        const yearPattern = /min_year:"?(\d{4})"?,?max_year:"?(\d{4})"?/;
        const statePattern = /state:"?(\d+)"?/;
        const cityPattern = /city:"?(\d+)"?/;
        const yearMatch = rawFilter.match(yearPattern);
        const stateMatch = rawFilter.match(statePattern);
        const cityMatch = rawFilter.match(cityPattern);

        if (yearMatch) {
          filterDto.min_year = filterDto.min_year || yearMatch[1];
          filterDto.max_year = filterDto.max_year || yearMatch[2];
        }

        // preserve raw state/city to pass to service (service will use CO_UF / CO_MUNICIPIO)
        const rawParams: any = {};
        if (stateMatch) rawParams.state = stateMatch[1];
        if (cityMatch) rawParams.city = cityMatch[1];

        // Parse dims if provided as raw param
        if (rawDims && !filterDto.dimensions) {
          filterDto.dimensions = rawDims.split(',').map((d: string) => d.trim()).filter(Boolean);
        }

  // Also merge explicit locality query params (if any) into filterDto.filters so service applies them
        const normalizeLabel = (v: string) => (typeof v === 'string' ? v.replace(/_/g, ' ').trim() : v);
        const localityFilters = [] as any[];
        if (query.territory) {
          const mapped = this.territoryMap[query.territory] || normalizeLabel(query.territory);
          localityFilters.push({ type: 'territorio', value: mapped });
        }
        if (query.aglomerado) localityFilters.push({ type: 'aglomerado', value: query.aglomerado });
        if (query.gerencia) localityFilters.push({ type: 'gre', value: query.gerencia });
        if (query.faixa_populacional) {
          const mapped = this.faixaPopMap[query.faixa_populacional] || normalizeLabel(query.faixa_populacional);
          localityFilters.push({ type: 'faixa_populacional', value: mapped });
        }

        if (localityFilters.length > 0) {
          const existing = Array.isArray(filterDto.filters) ? filterDto.filters : (filterDto.filters ? JSON.parse(filterDto.filters) : []);
          filterDto.filters = JSON.stringify([...existing, ...localityFilters]);
        }

        return this.censoEscolarService.getInfraestrutura(filterDto, rawParams);
      } catch (err) {
        return this.censoEscolarService.getInfraestrutura(filterDto);
      }
    }

    // If no rawFilter, we assume query was mapped by Nest to FilterDto fields
    // also support dims passed as query param
    if (rawDims && !filterDto.dimensions) {
      filterDto.dimensions = rawDims.split(',').map((d: string) => d.trim()).filter(Boolean);
    }

    // Support explicit locality filters passed as query params: territory, aglomerado, gerencia, faixa_populacional
    const normalizeLabel = (v: string) => (typeof v === 'string' ? v.replace(/_/g, ' ').trim() : v);
    const localityFilters = [] as any[];
    if (query.territory) {
      const mapped = this.territoryMap[query.territory] || normalizeLabel(query.territory);
      localityFilters.push({ type: 'territorio', value: mapped });
    }
    if (query.aglomerado) {
      localityFilters.push({ type: 'aglomerado', value: query.aglomerado });
    }
    if (query.gerencia) {
      localityFilters.push({ type: 'gre', value: query.gerencia });
    }
    if (query.faixa_populacional) {
      const mapped = this.faixaPopMap[query.faixa_populacional] || normalizeLabel(query.faixa_populacional);
      localityFilters.push({ type: 'faixa_populacional', value: mapped });
    }

    if (localityFilters.length > 0) {
      // Merge with existing filters if present
      const existing = Array.isArray(filterDto.filters) ? filterDto.filters : (filterDto.filters ? JSON.parse(filterDto.filters) : []);
      filterDto.filters = JSON.stringify([...existing, ...localityFilters]);
    }

    return this.censoEscolarService.getInfraestrutura(filterDto);
  }

  @Get('infraestrutura/timeseries')
  @ApiOperation({
    summary: 'Obter uma série histórica para um indicador de infraestrutura',
    description:
      'Retorna o total de um indicador específico, agrupado por ano, dentro de um intervalo de tempo.',
  })
  @ApiQuery({
    name: 'indicador',
    required: true,
    description:
      'A coluna do indicador a ser agregada (ex: IN_LABORATORIO_INFORMATICA)',
  })
  @ApiQuery({
    name: 'startYear',
    required: false,
    description: 'O ano inicial do intervalo',
  })
  @ApiQuery({
    name: 'endYear',
    required: false,
    description: 'O ano final do intervalo',
  })
  @ApiResponse({
    status: 200,
    description: 'Série histórica retornada com sucesso.',
  })
  @ApiResponse({ status: 400, description: 'Parâmetro "indicador" em falta.' })
  getTimeSeries(
    @Query('indicador') indicador: string,
    @Query('startYear') startYear: string,
    @Query('endYear') endYear: string,
  ) {
    // Chama o novo método no seu serviço
    return this.censoEscolarService.getInfraestruturaTimeSeries({
      indicador,
      startYear,
      endYear,
    });
  }
}
