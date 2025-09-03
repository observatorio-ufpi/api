import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  EducationResponseDto,
  ErrorResponseDto,
} from '../../dtos/common-response.dto';
import { RateService } from './rate.service';

@ApiTags('Taxas')
@Controller('rate')
export class RateController {
  constructor(private readonly rateService: RateService) {}

  @Get('pop_out_school')
  @ApiOperation({
    summary: 'Obter dados de fora da escola',
    description: 'Retorna dados sobre crianças e jovens fora da escola',
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
    description: 'Dados de fora da escola retornados com sucesso',
    type: EducationResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: ErrorResponseDto,
  })
  getOutOfSchool(@Query('dims') dims: string, @Query('filter') filter: string) {
    return this.rateService.getOutOfSchool(dims, filter);
  }

  @Get('adjusted_liquid_frequency')
  @ApiOperation({
    summary: 'Obter frequência líquida ajustada',
    description: 'Retorna frequência líquida ajustada',
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
    description: 'Frequência líquida ajustada retornada com sucesso',
    type: EducationResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: ErrorResponseDto,
  })
  getAdjustedLiquidFrequency(
    @Query('dims') dims: string,
    @Query('filter') filter: string,
  ) {
    return this.rateService.getAdjustedLiquidFrequency(dims, filter);
  }

  @Get('iliteracy_rate')
  @ApiOperation({
    summary: 'Obter taxa de analfabetismo',
    description: 'Retorna taxa de analfabetismo',
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
    description: 'Taxa de analfabetismo retornada com sucesso',
    type: EducationResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: ErrorResponseDto,
  })
  getIliteracyRate(
    @Query('dims') dims: string,
    @Query('filter') filter: string,
  ) {
    return this.rateService.getIliteracyRate(dims, filter);
  }

  @Get('superior_education_conclusion_tax')
  @ApiOperation({
    summary: 'Obter taxa de conclusão de ensino superior',
    description: 'Retorna taxa de conclusão de ensino superior',
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
    description: 'Taxa de conclusão de ensino superior retornada com sucesso',
    type: EducationResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: ErrorResponseDto,
  })
  getSuperiorEducationConclusionTax(
    @Query('dims') dims: string,
    @Query('filter') filter: string,
  ) {
    return this.rateService.getSuperiorEducationConclusionTax(dims, filter);
  }

  @Get('basic_education_conclusion')
  @ApiOperation({
    summary: 'Obter taxa de conclusão de ensino básico',
    description: 'Retorna taxa de conclusão de ensino básico',
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
    description: 'Taxa de conclusão de ensino básico retornada com sucesso',
    type: EducationResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: ErrorResponseDto,
  })
  getBasicEducationConclusion(
    @Query('dims') dims: string,
    @Query('filter') filter: string,
  ) {
    return this.rateService.getBasicEducationConclusion(dims, filter);
  }

  @Get('instruction_level')
  @ApiOperation({
    summary: 'Obter nível de instrução',
    description: 'Retorna dados de nível de instrução',
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
    description: 'Nível de instrução retornado com sucesso',
    type: EducationResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: ErrorResponseDto,
  })
  getInstructionLevel(
    @Query('dims') dims: string,
    @Query('filter') filter: string,
  ) {
    return this.rateService.getInstructionLevel(dims, filter);
  }

  // === ENDPOINTS DE SÉRIE HISTÓRICA ===

  @Get('pop_out_school/timeseries')
  @ApiOperation({
    summary: 'Obter série histórica de dados de fora da escola',
    description:
      'Retorna dados de série histórica sobre crianças e jovens fora da escola',
  })
  @ApiQuery({
    name: 'dims',
    required: false,
    description:
      'Dimensões para agrupamento dos dados (ex: age_range, location)',
    example: 'age_range',
  })
  @ApiQuery({
    name: 'filter',
    required: false,
    description:
      'Filtros para os dados no formato: min_year:"2020",max_year:"2023",state:"22"',
    example: 'min_year:"2020",max_year:"2023",state:"22"',
  })
  @ApiResponse({
    status: 200,
    description:
      'Série histórica de dados de fora da escola retornada com sucesso',
    type: EducationResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: ErrorResponseDto,
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno do servidor',
    type: ErrorResponseDto,
  })
  getOutOfSchoolTimeSeries(
    @Query('dims') dims: string,
    @Query('filter') filter: string,
  ) {
    return this.rateService.getOutOfSchoolTimeSeries(dims, filter);
  }

  @Get('adjusted_liquid_frequency/timeseries')
  @ApiOperation({
    summary: 'Obter série histórica de frequência líquida ajustada',
    description:
      'Retorna dados de série histórica de frequência líquida ajustada',
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
    description:
      'Série histórica de frequência líquida ajustada retornada com sucesso',
    type: EducationResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: ErrorResponseDto,
  })
  getAdjustedLiquidFrequencyTimeSeries(
    @Query('dims') dims: string,
    @Query('filter') filter: string,
  ) {
    return this.rateService.getAdjustedLiquidFrequencyTimeSeries(dims, filter);
  }

  @Get('iliteracy_rate/timeseries')
  @ApiOperation({
    summary: 'Obter série histórica de taxa de analfabetismo',
    description: 'Retorna dados de série histórica de taxa de analfabetismo',
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
    description:
      'Série histórica de taxa de analfabetismo retornada com sucesso',
    type: EducationResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: ErrorResponseDto,
  })
  getIliteracyRateTimeSeries(
    @Query('dims') dims: string,
    @Query('filter') filter: string,
  ) {
    return this.rateService.getIliteracyRateTimeSeries(dims, filter);
  }

  @Get('superior_education_conclusion_tax/timeseries')
  @ApiOperation({
    summary: 'Obter série histórica de taxa de conclusão de ensino superior',
    description:
      'Retorna dados de série histórica de taxa de conclusão de ensino superior',
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
    description:
      'Série histórica de taxa de conclusão de ensino superior retornada com sucesso',
    type: EducationResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: ErrorResponseDto,
  })
  getSuperiorEducationConclusionTaxTimeSeries(
    @Query('dims') dims: string,
    @Query('filter') filter: string,
  ) {
    return this.rateService.getSuperiorEducationConclusionTaxTimeSeries(
      dims,
      filter,
    );
  }

  @Get('basic_education_conclusion/timeseries')
  @ApiOperation({
    summary: 'Obter série histórica de taxa de conclusão de ensino básico',
    description:
      'Retorna dados de série histórica de taxa de conclusão de ensino básico',
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
    description:
      'Série histórica de taxa de conclusão de ensino básico retornada com sucesso',
    type: EducationResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: ErrorResponseDto,
  })
  getBasicEducationConclusionTimeSeries(
    @Query('dims') dims: string,
    @Query('filter') filter: string,
  ) {
    return this.rateService.getBasicEducationConclusionTimeSeries(dims, filter);
  }

  @Get('instruction_level/timeseries')
  @ApiOperation({
    summary: 'Obter série histórica de nível de instrução',
    description: 'Retorna dados de série histórica de nível de instrução',
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
    description: 'Série histórica de nível de instrução retornada com sucesso',
    type: EducationResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: ErrorResponseDto,
  })
  getInstructionLevelTimeSeries(
    @Query('dims') dims: string,
    @Query('filter') filter: string,
  ) {
    return this.rateService.getInstructionLevelTimeSeries(dims, filter);
  }
}
