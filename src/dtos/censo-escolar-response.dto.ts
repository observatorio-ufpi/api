import { ApiProperty } from '@nestjs/swagger';

export class CensoEscolarInfraestruturaDto {
  @ApiProperty({ description: 'Ano do censo', example: 2023 })
  ANO: number;

  @ApiProperty({ description: 'Prédio escolar', example: 1 })
  IN_LOCAL_FUNC_PREDIO_ESCOLAR: number;

  @ApiProperty({ description: 'Água potável', example: 1 })
  IN_AGUA_POTAVEL: number;

  @ApiProperty({ description: 'Energia da rede pública', example: 1 })
  IN_ENERGIA_REDE_PUBLICA: number;

  @ApiProperty({ description: 'Esgoto da rede pública', example: 1 })
  IN_ESGOTO_REDE_PUBLICA: number;

  @ApiProperty({ description: 'Coleta de lixo', example: 1 })
  IN_LIXO_SERVICO_COLETA: number;
}

export class CensoEscolarInfraestruturaResponseDto {
  @ApiProperty({
    description: 'Resultado da consulta',
    type: [CensoEscolarInfraestruturaDto],
  })
  result: CensoEscolarInfraestruturaDto[];
}
