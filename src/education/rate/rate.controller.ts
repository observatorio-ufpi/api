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
}
