import { Controller, Get, Param, Query } from '@nestjs/common';
import { PaginationDto } from 'src/dtos/pagination.dto';
import { GroupType } from 'src/utils/constants';
import { IndicatorsFiltersDto } from '../dto/indicators.dto';
import { FinancingCapacityService } from './financing_capacity.service';

@Controller('financing-capacity')
export class FinancingCapacityController {
  constructor(
    private readonly financingCapacityService: FinancingCapacityService,
  ) {}

  @Get('rpeb/:groupType')
  async mdeFinancingCapacity(
    @Param('groupType') groupType: GroupType,
    @Query()
    {
      codigoMunicipio,
      aglomeradoMunicipio,
      faixaPopulacionalMunicipio,
      territorioDeDesenvolvimentoMunicipio,
      gerenciaRegionalMunicipio,
    }: IndicatorsFiltersDto,
    @Query()
    { page = 1, limit = 10 }: PaginationDto,
  ) {
    const filters = {
      ...(codigoMunicipio && { codigoMunicipio }),
      ...(aglomeradoMunicipio && { aglomeradoMunicipio }),
      ...(faixaPopulacionalMunicipio && { faixaPopulacionalMunicipio }),
      ...(territorioDeDesenvolvimentoMunicipio && {
        territorioDeDesenvolvimentoMunicipio,
      }),
      ...(gerenciaRegionalMunicipio && { gerenciaRegionalMunicipio }),
    };

    return this.financingCapacityService.rpebFinancingCapacity(
      groupType,
      filters,
      {
        page: Number(page),
        limit: Number(limit),
      },
    );
  }

  @Get('fundeb/:groupType')
  async fundebFinancingCapacity(
    @Param('groupType') groupType: GroupType,
    @Query()
    {
      codigoMunicipio,
      aglomeradoMunicipio,
      faixaPopulacionalMunicipio,
      territorioDeDesenvolvimentoMunicipio,
      gerenciaRegionalMunicipio,
    }: IndicatorsFiltersDto,
    @Query()
    { page = 1, limit = 10 }: PaginationDto,
  ) {
    const filters = {
      ...(codigoMunicipio && { codigoMunicipio }),
      ...(aglomeradoMunicipio && { aglomeradoMunicipio }),
      ...(faixaPopulacionalMunicipio && { faixaPopulacionalMunicipio }),
      ...(territorioDeDesenvolvimentoMunicipio && {
        territorioDeDesenvolvimentoMunicipio,
      }),
      ...(gerenciaRegionalMunicipio && { gerenciaRegionalMunicipio }),
    };

    return this.financingCapacityService.fundebFinancingCapacity(
      groupType,
      filters,
      {
        page: Number(page),
        limit: Number(limit),
      },
    );
  }
}
