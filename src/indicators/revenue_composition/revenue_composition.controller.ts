import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RevenueCompositionService } from './revenue_composition.service';
import { GroupType } from 'src/utils/constants';
import { IndicatorsFiltersDto } from '../dto/indicators.dto';

@ApiTags('indicators')
@Controller('revenue-composition')
export class RevenueCompositionController {
  constructor(
    private readonly revenueCompositionService: RevenueCompositionService,
  ) {}

  @Get('iptu/:groupType')
  async iptuComposition(
    @Param('groupType') groupType: GroupType,
    @Query()
    {
      nomeMunicipio,
      aglomeradoMunicipio,
      faixaPopulacionalMunicipio,
      territorioDeDesenvolvimentoMunicipio,
      gerenciaRegionalMunicipio,
    }: IndicatorsFiltersDto,
  ) {
    const filters = {
      ...(nomeMunicipio && { nomeMunicipio }),
      ...(aglomeradoMunicipio && { aglomeradoMunicipio }),
      ...(faixaPopulacionalMunicipio && { faixaPopulacionalMunicipio }),
      ...(territorioDeDesenvolvimentoMunicipio && {
        territorioDeDesenvolvimentoMunicipio,
      }),
      ...(gerenciaRegionalMunicipio && { gerenciaRegionalMunicipio }),
    };

    return this.revenueCompositionService.iptuComposition(groupType, filters);
  }
}
