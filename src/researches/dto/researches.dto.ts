import { IsNumber, IsOptional } from 'class-validator';
import { GeneralFiltersDto } from 'src/dtos/filters.dto';

export class ResearchesFiltersDto extends GeneralFiltersDto {
  @IsOptional()
  @IsNumber()
  anoInicial?: number;

  @IsOptional()
  @IsNumber()
  anoFinal?: number;
}
