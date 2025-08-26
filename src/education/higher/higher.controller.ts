import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  EducationResponseDto,
  ErrorResponseDto,
} from '../../dtos/common-response.dto';
import { HigherService } from './higher.service';

@ApiTags('Educação Superior')
@Controller('higherEducation')
export class HigherController {
  constructor(private readonly higherService: HigherService) {}

  @Get('university_enrollment')
  @ApiOperation({
    summary: 'Obter dados de matrícula do ensino superior',
    description: 'Retorna dados de matrícula na educação superior filtrados por dimensões e parâmetros específicos',
  })
  @ApiQuery({
    name: 'dims',
    required: false,
    description: 'Dimensões para agrupamento dos dados (ex: upper_education_mod, upper_adm_dependency, age_student_code, academic_level)',
    example: 'upper_education_mod,upper_adm_dependency',
  })
  @ApiQuery({
    name: 'filter',
    required: false,
    description: 'Filtros para os dados no formato: min_year:"2020",max_year:"2023",state:"22",city:"2211001"',
    example: 'min_year:"2020",max_year:"2023",state:"22"',
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
  getEnrollment(@Query('dims') dims: string, @Query('filter') filter: string): Promise<EducationResponseDto> {
    return this.higherService.getEnrollment(dims, filter);
  }

  @Get('university/count')
  @ApiOperation({
    summary: 'Contar instituições de ensino superior',
    description: 'Retorna a contagem de instituições de ensino superior',
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
    description: 'Contagem de instituições retornada com sucesso',
    type: EducationResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: ErrorResponseDto,
  })
  getUniversityCount(@Query('dims') dims: string, @Query('filter') filter: string): Promise<EducationResponseDto> {
    return this.higherService.getUniversityCount(dims, filter);
  }

  @Get('course_count')
  @ApiOperation({
    summary: 'Contar cursos superiores',
    description: 'Retorna a contagem de cursos do ensino superior',
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
    description: 'Contagem de cursos retornada com sucesso',
    type: EducationResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: ErrorResponseDto,
  })
  getCourseCount(@Query('dims') dims: string, @Query('filter') filter: string): Promise<EducationResponseDto> {
    return this.higherService.getCourseCount(dims, filter);
  }

  @Get('course_aggregate')
  @ApiOperation({
    summary: 'Agregação de cursos superiores',
    description: 'Retorna dados agregados de cursos do ensino superior (alias para course_count)',
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
    description: 'Dados agregados de cursos retornados com sucesso',
    type: EducationResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: ErrorResponseDto,
  })
  getCourseAggregate(@Query('dims') dims: string, @Query('filter') filter: string): Promise<EducationResponseDto> {
    return this.higherService.getCourseCount(dims, filter);
  }

  @Get('university_teacher')
  @ApiOperation({
    summary: 'Obter dados de docentes do ensino superior',
    description: 'Retorna dados sobre docentes na educação superior',
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
    description: 'Dados de docentes retornados com sucesso',
    type: EducationResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: ErrorResponseDto,
  })
  getTeacher(@Query('dims') dims: string, @Query('filter') filter: string): Promise<EducationResponseDto> {
    return this.higherService.getTeacher(dims, filter);
  }

  // === ENDPOINTS DE SÉRIE HISTÓRICA ===

  @Get('university_enrollment/timeseries')
  @ApiOperation({
    summary: 'Obter série histórica de matrícula do ensino superior',
    description: 'Retorna dados de série histórica de matrícula na educação superior',
  })
  @ApiQuery({
    name: 'dims',
    required: false,
    description: 'Dimensões para agrupamento dos dados',
  })
  @ApiQuery({
    name: 'filter',
    required: false,
    description: 'Filtros para os dados no formato: min_year:"2020",max_year:"2023",state:"22"',
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
  getEnrollmentTimeSeries(@Query('dims') dims: string, @Query('filter') filter: string): Promise<EducationResponseDto> {
    return this.higherService.getEnrollmentTimeSeries(dims, filter);
  }

  @Get('university/count/timeseries')
  @ApiOperation({
    summary: 'Obter série histórica de contagem de instituições',
    description: 'Retorna dados de série histórica da contagem de instituições de ensino superior',
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
    description: 'Série histórica de contagem de instituições retornada com sucesso',
    type: EducationResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: ErrorResponseDto,
  })
  getUniversityCountTimeSeries(@Query('dims') dims: string, @Query('filter') filter: string): Promise<EducationResponseDto> {
    return this.higherService.getUniversityCountTimeSeries(dims, filter);
  }

  @Get('course_count/timeseries')
  @ApiOperation({
    summary: 'Obter série histórica de cursos',
    description: 'Retorna dados de série histórica sobre cursos na educação superior',
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
    description: 'Série histórica de cursos retornada com sucesso',
    type: EducationResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: ErrorResponseDto,
  })
  getCourseCountTimeSeries(@Query('dims') dims: string, @Query('filter') filter: string): Promise<EducationResponseDto> {
    return this.higherService.getCourseCountTimeSeries(dims, filter);
  }

  @Get('course_aggregate/timeseries')
  @ApiOperation({
    summary: 'Obter série histórica de cursos agregados',
    description: 'Retorna dados de série histórica sobre cursos agregados na educação superior',
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
    description: 'Série histórica de cursos agregados retornada com sucesso',
    type: EducationResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: ErrorResponseDto,
  })
  getCourseAggregateTimeSeries(@Query('dims') dims: string, @Query('filter') filter: string): Promise<EducationResponseDto> {
    return this.higherService.getCourseCountTimeSeries(dims, filter);
  }

  @Get('university_teacher/timeseries')
  @ApiOperation({
    summary: 'Obter série histórica de docentes',
    description: 'Retorna dados de série histórica sobre docentes na educação superior',
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
    description: 'Série histórica de docentes retornada com sucesso',
    type: EducationResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: ErrorResponseDto,
  })
  getTeacherTimeSeries(@Query('dims') dims: string, @Query('filter') filter: string): Promise<EducationResponseDto> {
    return this.higherService.getTeacherTimeSeries(dims, filter);
  }
}
