import { ApiPropertyOptional } from '@nestjs/swagger';
import { FaixaPopulacional, Regioes } from '@prisma/client';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class GeneralFiltersDto {
  @IsOptional()
  @ApiPropertyOptional()
  @IsString()
  nomeMunicipio?: string;

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
}
