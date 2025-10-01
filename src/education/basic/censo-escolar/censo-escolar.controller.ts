import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CensoEscolarInfraestruturaResponseDto } from '../../../dtos/censo-escolar-response.dto';
import { ErrorResponseDto } from '../../../dtos/common-response.dto';
import { CensoEscolarService } from './censo-escolar.service';

@ApiTags('Censo Escolar')
@Controller('censo-escolar')
export class CensoEscolarController {
  constructor(private readonly censoEscolarService: CensoEscolarService) {}

  @Get('infraestrutura')
  @ApiOperation({
    summary: 'Obter dados de infraestrutura do Censo Escolar',
    description: 'Retorna dados de infraestrutura das escolas do Censo Escolar',
  })
  @ApiQuery({
    name: 'dims',
    required: false,
    description: 'Dimensões para agrupamento dos dados',
  })
  @ApiQuery({
    name: 'filter',
    required: false,
    description: 'Filtros para os dados',
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
  getInfraestrutura(
    @Query('dims') dims: string,
    @Query('filter') filter: string,
  ) {
    return this.censoEscolarService.getInfraestrutura(dims, filter);
  }
  
  @Get('infraestrutura/timeseries')
  @ApiOperation({
    summary: 'Obter uma série histórica para um indicador de infraestrutura',
    description: 'Retorna o total de um indicador específico, agrupado por ano, dentro de um intervalo de tempo.',
  })
  @ApiQuery({ name: 'indicador', required: true, description: 'A coluna do indicador a ser agregada (ex: IN_LABORATORIO_INFORMATICA)' })
  @ApiQuery({ name: 'startYear', required: false, description: 'O ano inicial do intervalo' })
  @ApiQuery({ name: 'endYear', required: false, description: 'O ano final do intervalo' })
  @ApiResponse({ status: 200, description: 'Série histórica retornada com sucesso.' })
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