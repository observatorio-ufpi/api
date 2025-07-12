import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  EducationResponseDto,
  ErrorResponseDto,
} from '../../dtos/common-response.dto';
import { BasicService } from './basic.service';

@ApiTags('Educação Básica')
@Controller('basicEducation')
export class BasicController {
  constructor(private readonly basicService: BasicService) {}

  @Get('enrollment')
  @ApiOperation({
    summary: 'Obter dados de matrícula',
    description:
      'Retorna dados de matrícula na educação básica filtrados por dimensões e parâmetros específicos',
  })
  @ApiQuery({
    name: 'dims',
    required: false,
    description:
      'Dimensões para agrupamento dos dados (ex: education_level_mod, adm_dependency_detailed, location)',
    example: 'education_level_mod,adm_dependency_detailed',
  })
  @ApiQuery({
    name: 'filter',
    required: false,
    description:
      'Filtros para os dados no formato: years=2023,2022&state=22&city=2211001',
    example: 'years=2023,2022&state=22',
  })
  @ApiResponse({
    status: 200,
    description: 'Dados de matrícula retornados com sucesso',
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
  getEnrollment(@Query('dims') dims: string, @Query('filter') filter: string) {
    return this.basicService.getEnrollment(dims, filter);
  }

  @Get('school/count')
  @ApiOperation({
    summary: 'Contar escolas',
    description: 'Retorna a contagem de escolas na educação básica',
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
    description: 'Contagem de escolas retornada com sucesso',
    type: EducationResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: ErrorResponseDto,
  })
  getSchoolCount(@Query('dims') dims: string, @Query('filter') filter: string) {
    return this.basicService.getSchoolCount(dims, filter);
  }

  @Get('class')
  @ApiOperation({
    summary: 'Obter dados de turmas',
    description: 'Retorna dados sobre turmas na educação básica',
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
    description: 'Dados de turmas retornados com sucesso',
    type: EducationResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: ErrorResponseDto,
  })
  getClass(@Query('dims') dims: string, @Query('filter') filter: string) {
    return this.basicService.getClass(dims, filter);
  }

  @Get('teacher')
  @ApiOperation({
    summary: 'Obter dados de professores',
    description: 'Retorna dados sobre professores na educação básica',
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
    description: 'Dados de professores retornados com sucesso',
    type: EducationResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: ErrorResponseDto,
  })
  getTeacher(@Query('dims') dims: string, @Query('filter') filter: string) {
    return this.basicService.getTeacher(dims, filter);
  }

  // === ENDPOINTS DE SÉRIE HISTÓRICA ===

  @Get('enrollment/timeseries')
  @ApiOperation({
    summary: 'Obter série histórica de matrícula',
    description:
      'Retorna dados de série histórica de matrícula na educação básica com suporte a múltiplas dimensões',
  })
  @ApiQuery({
    name: 'dims',
    required: false,
    description:
      'Dimensões para agrupamento dos dados (ex: education_level_mod, adm_dependency_detailed, location)',
    example: 'education_level_mod',
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
    description: 'Série histórica de matrícula retornada com sucesso',
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
  getEnrollmentTimeSeries(
    @Query('dims') dims: string,
    @Query('filter') filter: string,
  ) {
    return this.basicService.getEnrollmentTimeSeries(dims, filter);
  }

  @Get('school/count/timeseries')
  @ApiOperation({
    summary: 'Obter série histórica de contagem de escolas',
    description:
      'Retorna dados de série histórica da contagem de escolas na educação básica',
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
    description: 'Série histórica de contagem de escolas retornada com sucesso',
    type: EducationResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: ErrorResponseDto,
  })
  getSchoolCountTimeSeries(
    @Query('dims') dims: string,
    @Query('filter') filter: string,
  ) {
    return this.basicService.getSchoolCountTimeSeries(dims, filter);
  }

  @Get('class/timeseries')
  @ApiOperation({
    summary: 'Obter série histórica de turmas',
    description:
      'Retorna dados de série histórica sobre turmas na educação básica',
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
    description: 'Série histórica de turmas retornada com sucesso',
    type: EducationResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: ErrorResponseDto,
  })
  getClassTimeSeries(
    @Query('dims') dims: string,
    @Query('filter') filter: string,
  ) {
    return this.basicService.getClassTimeSeries(dims, filter);
  }

  @Get('teacher/timeseries')
  @ApiOperation({
    summary: 'Obter série histórica de professores',
    description:
      'Retorna dados de série histórica sobre professores na educação básica',
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
    description: 'Série histórica de professores retornada com sucesso',
    type: EducationResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: ErrorResponseDto,
  })
  getTeacherTimeSeries(
    @Query('dims') dims: string,
    @Query('filter') filter: string,
  ) {
    return this.basicService.getTeacherTimeSeries(dims, filter);
  }

  @Get('employees/timeseries')
  @ApiOperation({
    summary: 'Obter série histórica de funcionários',
    description:
      'Retorna dados de série histórica sobre funcionários na educação básica',
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
    description: 'Série histórica de funcionários retornada com sucesso',
    type: EducationResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: ErrorResponseDto,
  })
  getEmployeesTimeSeries(
    @Query('dims') dims: string,
    @Query('filter') filter: string,
  ) {
    return this.basicService.getEmployeesTimeSeries(dims, filter);
  }

  // @Get('auxiliar')
  // @ApiOperation({
  //   summary: 'Obter dados de auxiliares',
  //   description: 'Retorna dados sobre pessoal auxiliar na educação básica',
  // })
  // @ApiQuery({
  //   name: 'dims',
  //   required: false,
  //   description: 'Dimensões para agrupamento dos dados',
  // })
  // @ApiQuery({
  //   name: 'filter',
  //   required: false,
  //   description: 'Filtros para os dados',
  // })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Dados de auxiliares retornados com sucesso',
  //   type: EducationResponseDto,
  // })
  // @ApiResponse({
  //   status: 400,
  //   description: 'Parâmetros inválidos',
  //   type: ErrorResponseDto,
  // })
  // getAuxiliar(@Query('dims') dims: string, @Query('filter') filter: string) {
  //   return this.basicService.getAuxiliar(dims, filter);
  // }

  // @Get('employees')
  // @ApiOperation({
  //   summary: 'Obter dados de funcionários',
  //   description: 'Retorna dados sobre funcionários na educação básica',
  // })
  // @ApiQuery({
  //   name: 'dims',
  //   required: false,
  //   description: 'Dimensões para agrupamento dos dados',
  // })
  // @ApiQuery({
  //   name: 'filter',
  //   required: false,
  //   description: 'Filtros para os dados',
  // })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Dados de funcionários retornados com sucesso',
  //   type: EducationResponseDto,
  // })
  // @ApiResponse({
  //   status: 400,
  //   description: 'Parâmetros inválidos',
  //   type: ErrorResponseDto,
  // })
  // getEmployees(@Query('dims') dims: string, @Query('filter') filter: string) {
  //   return this.basicService.getEmployees(dims, filter);
  // }

  // @Get('out_of_school')
  // @ApiOperation({
  //   summary: 'Obter dados de fora da escola',
  //   description: 'Retorna dados sobre crianças e jovens fora da escola',
  // })
  // @ApiQuery({
  //   name: 'dims',
  //   required: false,
  //   description: 'Dimensões para agrupamento dos dados',
  // })
  // @ApiQuery({
  //   name: 'filter',
  //   required: false,
  //   description: 'Filtros para os dados',
  // })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Dados de fora da escola retornados com sucesso',
  //   type: EducationResponseDto,
  // })
  // @ApiResponse({
  //   status: 400,
  //   description: 'Parâmetros inválidos',
  //   type: ErrorResponseDto,
  // })
  // getOutOfSchool(@Query('dims') dims: string, @Query('filter') filter: string) {
  //   return this.basicService.getOutOfSchool(dims, filter);
  // }

  // @Get('liquid_enrollment_ratio')
  // @ApiOperation({
  //   summary: 'Taxa de matrícula líquida',
  //   description: 'Retorna a taxa de matrícula líquida na educação básica',
  // })
  // @ApiQuery({
  //   name: 'dims',
  //   required: false,
  //   description: 'Dimensões para agrupamento dos dados',
  // })
  // @ApiQuery({
  //   name: 'filter',
  //   required: false,
  //   description: 'Filtros para os dados',
  // })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Taxa de matrícula líquida retornada com sucesso',
  //   type: EducationResponseDto,
  // })
  // @ApiResponse({
  //   status: 400,
  //   description: 'Parâmetros inválidos',
  //   type: ErrorResponseDto,
  // })
  // getLiquidEnrollmentRatio(
  //   @Query('dims') dims: string,
  //   @Query('filter') filter: string,
  // ) {
  //   return this.basicService.getLiquidEnrollmentRatio(dims, filter);
  // }

  // @Get('gloss_enrollment_ratio')
  // @ApiOperation({
  //   summary: 'Taxa de matrícula bruta',
  //   description: 'Retorna a taxa de matrícula bruta na educação básica',
  // })
  // @ApiQuery({
  //   name: 'dims',
  //   required: false,
  //   description: 'Dimensões para agrupamento dos dados',
  // })
  // @ApiQuery({
  //   name: 'filter',
  //   required: false,
  //   description: 'Filtros para os dados',
  // })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Taxa de matrícula bruta retornada com sucesso',
  //   type: EducationResponseDto,
  // })
  // @ApiResponse({
  //   status: 400,
  //   description: 'Parâmetros inválidos',
  //   type: ErrorResponseDto,
  // })
  // getGlossEnrollmentRatio(
  //   @Query('dims') dims: string,
  //   @Query('filter') filter: string,
  // ) {
  //   return this.basicService.getGlossEnrollmentRatio(dims, filter);
  // }

  // @Get('rate_school_new')
  // @ApiOperation({
  //   summary: 'Taxa de escolas novas',
  //   description: 'Retorna dados sobre taxa de novas escolas na educação básica',
  // })
  // @ApiQuery({
  //   name: 'dims',
  //   required: false,
  //   description: 'Dimensões para agrupamento dos dados',
  // })
  // @ApiQuery({
  //   name: 'filter',
  //   required: false,
  //   description: 'Filtros para os dados',
  // })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Taxa de escolas novas retornada com sucesso',
  //   type: EducationResponseDto,
  // })
  // @ApiResponse({
  //   status: 400,
  //   description: 'Parâmetros inválidos',
  //   type: ErrorResponseDto,
  // })
  // getRateSchoolNew(
  //   @Query('dims') dims: string,
  //   @Query('filter') filter: string,
  // ) {
  //   return this.basicService.getRateSchoolNew(dims, filter);
  // }
}
