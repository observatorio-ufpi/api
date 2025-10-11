
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class Filter {
  @ApiProperty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsString()
  value: string;
}

export class FilterDto {
  @ApiProperty({ type: [Filter], required: false })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Filter)
  filters?: Filter[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  min_year?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  max_year?: string;

  @ApiProperty({
    description: 'As dimensões de infraestrutura a serem retornadas.',
    example: ['infraestrutura_basica', 'espacos_pedagogicos'],
    required: false,
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  dimensions?: string[];
}
