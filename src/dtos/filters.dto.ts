import { ApiPropertyOptional } from '@nestjs/swagger';
import { FaixaPopulacional, Regioes } from '@prisma/client';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

export class GeneralFiltersDto {
  @IsOptional()
  @ApiPropertyOptional()
  @IsString()
  codigoMunicipio?: string;

  @IsOptional()
  @ApiPropertyOptional({
    enum: Regioes,
  })
  @IsEnum(Regioes)
  territorioDeDesenvolvimentoMunicipio?: Regioes;

  @IsOptional()
  @ApiPropertyOptional({
    enum: FaixaPopulacional,
  })
  @IsEnum(FaixaPopulacional)
  faixaPopulacionalMunicipio?: FaixaPopulacional;

  @IsOptional()
  @ApiPropertyOptional()
  @IsString()
  aglomeradoMunicipio?: string;

  @IsOptional()
  @ApiPropertyOptional()
  @IsString()
  gerenciaRegionalMunicipio?: string;

  @IsOptional()
  @ApiPropertyOptional()
  @IsNumber()
  anoInicial?: number;

  @IsOptional()
  @ApiPropertyOptional()
  @IsNumber()
  anoFinal?: number;
}
