import { Controller, Get, Param, Query } from '@nestjs/common';
import { PaginationDto } from 'src/dtos/pagination.dto';
import { GroupType } from 'src/utils/constants';
import { IndicatorsFiltersDto } from '../dto/indicators.dto';
import { FinancingCapacityService } from './financing_capacity.service';
import { buildFilters } from 'src/utils/filter-builder';

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
      anoInicial,
      anoFinal,
    }: IndicatorsFiltersDto,
    @Query()
    { page = 1, limit = 10 }: PaginationDto,
  ) {
    const filters = buildFilters({
      codigoMunicipio,
      aglomeradoMunicipio,
      faixaPopulacionalMunicipio,
      territorioDeDesenvolvimentoMunicipio,
      gerenciaRegionalMunicipio,
    });

    return this.financingCapacityService.rpebFinancingCapacity(
      groupType,
      filters,
      anoInicial,
      anoFinal,
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
      anoInicial,
      anoFinal,
    }: IndicatorsFiltersDto,
    @Query()
    { page = 1, limit = 10 }: PaginationDto,
  ) {
    const filters = buildFilters({
      codigoMunicipio,
      aglomeradoMunicipio,
      faixaPopulacionalMunicipio,
      territorioDeDesenvolvimentoMunicipio,
      gerenciaRegionalMunicipio,
    });

    return this.financingCapacityService.fundebFinancingCapacity(
      groupType,
      filters,
      anoInicial,
      anoFinal,
      {
        page: Number(page),
        limit: Number(limit),
      },
    );
  }
}
