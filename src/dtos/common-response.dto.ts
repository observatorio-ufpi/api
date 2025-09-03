import { ApiProperty } from '@nestjs/swagger';

export class BaseEducationDataDto {
  @ApiProperty({ description: 'Ano dos dados', example: 2023 })
  year: number;

  @ApiProperty({ description: 'Total/valor do indicador', example: 150000 })
  total: number;
}

export class DetailedEducationDataDto extends BaseEducationDataDto {
  @ApiProperty({
    description:
      'ID do nível educacional (padronizado para todos os tipos de dados)',
    example: 1,
    required: false,
  })
  education_level_mod_id?: number;

  @ApiProperty({
    description:
      'Nome do nível educacional (padronizado para todos os tipos de dados)',
    example: 'Ensino Fundamental',
    required: false,
  })
  education_level_mod_name?: string;

  @ApiProperty({
    description: 'ID da dependência administrativa',
    example: 1,
    required: false,
  })
  adm_dependency_detailed_id?: number;

  @ApiProperty({
    description: 'Nome da dependência administrativa',
    example: 'Municipal',
    required: false,
  })
  adm_dependency_detailed_name?: string;

  @ApiProperty({
    description: 'ID da localização',
    example: 1,
    required: false,
  })
  location_id?: number;

  @ApiProperty({
    description: 'Nome da localização',
    example: 'Urbana',
    required: false,
  })
  location_name?: string;

  @ApiProperty({
    description: 'ID do tipo de contrato',
    example: 1,
    required: false,
  })
  contract_type_id?: number;

  @ApiProperty({
    description: 'Nome do tipo de contrato',
    example: 'Efetivo',
    required: false,
  })
  contract_type_name?: string;
}

export class EducationResponseDto {
  @ApiProperty({
    description: 'Resultado da consulta',
    type: [DetailedEducationDataDto],
  })
  result: DetailedEducationDataDto[];

  @ApiProperty({ description: 'Informações sobre paginação', required: false })
  pagination?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };

  @ApiProperty({ description: 'Metadados adicionais', required: false })
  metadata?: {
    filters: Record<string, any>;
    dimensions: string[];
    source: string;
    lastUpdated?: Date;
  };
}

export class SimpleEducationResponseDto {
  @ApiProperty({
    description: 'Resultado da consulta',
    type: [BaseEducationDataDto],
  })
  result: BaseEducationDataDto[];

  @ApiProperty({ description: 'Metadados adicionais', required: false })
  metadata?: {
    filters: Record<string, any>;
    dimensions: string[];
    source: string;
    lastUpdated?: Date;
  };
}

export class ErrorResponseDto {
  @ApiProperty({ description: 'Código de status HTTP', example: 400 })
  statusCode: number;

  @ApiProperty({
    description: 'Mensagem de erro',
    example: 'Parâmetros inválidos',
  })
  message: string;

  @ApiProperty({
    description: 'Timestamp do erro',
    example: '2024-01-01T00:00:00.000Z',
  })
  timestamp: string;

  @ApiProperty({
    description: 'Caminho da requisição',
    example: '/basicEducation/enrollment',
  })
  path: string;
}
