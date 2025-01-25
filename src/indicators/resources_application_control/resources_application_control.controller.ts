import { Controller, Get, Param, Query } from '@nestjs/common';
import { PaginationDto } from 'src/dtos/pagination.dto';
import { GroupType } from 'src/utils/constants';
import { IndicatorsFiltersDto } from '../dto/indicators.dto';
import { ResourcesApplicationControlService } from './resources_application_control.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('indicators')
@Controller('resources-application-control')
export class ResourcesApplicationControlController {
  constructor(
    private readonly resourcesApplicationControlService: ResourcesApplicationControlService,
  ) {}

  @Get('mde/:groupType')
  async mdeApplicationControl(
    @Param('groupType') groupType: GroupType,
    @Query()
    {
      nomeMunicipio,
      aglomeradoMunicipio,
      faixaPopulacionalMunicipio,
      territorioDeDesenvolvimentoMunicipio,
      gerenciaRegionalMunicipio,
    }: IndicatorsFiltersDto,
    @Query()
    { page = 1, limit = 10 }: PaginationDto,
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
    return this.resourcesApplicationControlService.mdeApplicationControl(
      groupType,
      filters,
      {
        page: Number(page),
        limit: Number(limit),
      },
    );
  }

  @Get('fundeb/:groupType')
  async fundebApplicationControl(
    @Param('groupType') groupType: GroupType,
    @Query()
    {
      nomeMunicipio,
      aglomeradoMunicipio,
      faixaPopulacionalMunicipio,
      territorioDeDesenvolvimentoMunicipio,
      gerenciaRegionalMunicipio,
    }: IndicatorsFiltersDto,
    @Query()
    { page = 1, limit = 10 }: PaginationDto,
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
    return this.resourcesApplicationControlService.fundebApplicationControl(
      groupType,
      filters,
      {
        page: Number(page),
        limit: Number(limit),
      },
    );
  }

  @Get('ed-infantil-vaat/:groupType')
  async edInfantilVAATApplicationControl(
    @Param('groupType') groupType: GroupType,
    @Query()
    {
      nomeMunicipio,
      aglomeradoMunicipio,
      faixaPopulacionalMunicipio,
      territorioDeDesenvolvimentoMunicipio,
      gerenciaRegionalMunicipio,
    }: IndicatorsFiltersDto,
    @Query()
    { page = 1, limit = 10 }: PaginationDto,
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
    return this.resourcesApplicationControlService.edInfantilVAATApplicationControl(
      groupType,
      filters,
      {
        page: Number(page),
        limit: Number(limit),
      },
    );
  }

  @Get('despesa-capital-vaat/:groupType')
  async despesaCapitalVAATApplicationControl(
    @Param('groupType') groupType: GroupType,
    @Query()
    {
      nomeMunicipio,
      aglomeradoMunicipio,
      faixaPopulacionalMunicipio,
      territorioDeDesenvolvimentoMunicipio,
      gerenciaRegionalMunicipio,
    }: IndicatorsFiltersDto,
    @Query()
    { page = 1, limit = 10 }: PaginationDto,
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
    return this.resourcesApplicationControlService.despesaCapitalVAATApplicationControl(
      groupType,
      filters,
      {
        page: Number(page),
        limit: Number(limit),
      },
    );
  }
}
