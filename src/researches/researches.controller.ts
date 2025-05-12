import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GroupType } from 'src/utils/constants';
import { PaginationDto } from '../dtos/pagination.dto';
import { ResearchesFiltersDto } from './dto/researches.dto';
import { ResearchesService } from './researches.service';

@ApiTags('researches')
@Controller('researches')
export class ResearchesController {
  constructor(private readonly researchesService: ResearchesService) {}

  @Get('/mot-revenue/:groupType')
  municipalOwnTaxesRevenues(
    @Param('groupType') groupType: GroupType,
    @Query()
    {
      nomeMunicipio,
      aglomeradoMunicipio,
      faixaPopulacionalMunicipio,
      territorioDeDesenvolvimentoMunicipio,
      gerenciaRegionalMunicipio,
      anoInicial,
      anoFinal,
    }: ResearchesFiltersDto,
    @Query()
    { page = 1, limit = 10 }: PaginationDto,
  ) {
    console.log(anoInicial, anoFinal);
    const filters = {
      ...(nomeMunicipio && { nomeMunicipio }),
      ...(aglomeradoMunicipio && { aglomeradoMunicipio }),
      ...(faixaPopulacionalMunicipio && { faixaPopulacionalMunicipio }),
      ...(territorioDeDesenvolvimentoMunicipio && {
        territorioDeDesenvolvimentoMunicipio,
      }),
      ...(gerenciaRegionalMunicipio && { gerenciaRegionalMunicipio }),
      ...(anoInicial && { anoInicial }),
      ...(anoFinal && { anoFinal }),
    };

    console.log(filters);

    return this.researchesService.municipalOwnTaxesRevenue(groupType, filters, {
      page: Number(page),
      limit: Number(limit),
    });
  }

  @Get('/ct-revenue/:groupType')
  constitutionalTransfersRevenue(
    @Param('groupType') groupType: GroupType,
    @Query()
    {
      nomeMunicipio,
      aglomeradoMunicipio,
      faixaPopulacionalMunicipio,
      territorioDeDesenvolvimentoMunicipio,
      gerenciaRegionalMunicipio,
      anoInicial,
      anoFinal,
    }: ResearchesFiltersDto,
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
      ...(anoInicial && { anoInicial }),
      ...(anoFinal && { anoFinal }),
    };

    return this.researchesService.constitutionalTransfersRevenue(
      groupType,
      filters,
      { page: Number(page), limit: Number(limit) },
    );
  }

  @Get('/mt-revenue/:groupType')
  municipalTaxesRevenues(
    @Param('groupType') groupType: GroupType,
    @Query()
    {
      nomeMunicipio,
      aglomeradoMunicipio,
      faixaPopulacionalMunicipio,
      territorioDeDesenvolvimentoMunicipio,
      gerenciaRegionalMunicipio,
      anoInicial,
      anoFinal,
    }: ResearchesFiltersDto,
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
      ...(anoInicial && { anoInicial }),
      ...(anoFinal && { anoFinal }),
    };

    return this.researchesService.municipalTaxesRevenue(groupType, filters, {
      page: Number(page),
      limit: Number(limit),
    });
  }

  @Get('/addtional-education-revenue/:groupType')
  additionalMunicipalEducationRevenue(
    @Param('groupType') groupType: GroupType,
    @Query()
    {
      nomeMunicipio,
      aglomeradoMunicipio,
      faixaPopulacionalMunicipio,
      territorioDeDesenvolvimentoMunicipio,
      gerenciaRegionalMunicipio,
      anoInicial,
      anoFinal,
    }: ResearchesFiltersDto,
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
      ...(anoInicial && { anoInicial }),
      ...(anoFinal && { anoFinal }),
    };

    return this.researchesService.additionalMunicipalEducationRevenue(
      groupType,
      filters,
      { page: Number(page), limit: Number(limit) },
    );
  }

  @Get('/mfc-revenue/:groupType')
  municipalFundebFundefComposition(
    @Param('groupType') groupType: GroupType,
    @Query()
    {
      nomeMunicipio,
      aglomeradoMunicipio,
      faixaPopulacionalMunicipio,
      territorioDeDesenvolvimentoMunicipio,
      gerenciaRegionalMunicipio,
      anoInicial,
      anoFinal,
    }: ResearchesFiltersDto,
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
      ...(anoInicial && { anoInicial }),
      ...(anoFinal && { anoFinal }),
    };

    return this.researchesService.municipalFundebFundefComposition(
      groupType,
      filters,
      { page: Number(page), limit: Number(limit) },
    );
  }

  @Get('/cf-revenue/:groupType')
  complementationFundebFundef(
    @Param('groupType') groupType: GroupType,
    @Query()
    {
      nomeMunicipio,
      aglomeradoMunicipio,
      faixaPopulacionalMunicipio,
      territorioDeDesenvolvimentoMunicipio,
      gerenciaRegionalMunicipio,
      anoInicial,
      anoFinal,
    }: ResearchesFiltersDto,
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
      ...(anoInicial && { anoInicial }),
      ...(anoFinal && { anoFinal }),
    };

    return this.researchesService.complementationFundebFundef(
      groupType,
      filters,
      { page: Number(page), limit: Number(limit) },
    );
  }

  @Get('/mc-limit-revenue/:groupType')
  municipalConstitutionalLimitMde(
    @Param('groupType') groupType: GroupType,
    @Query()
    {
      nomeMunicipio,
      aglomeradoMunicipio,
      faixaPopulacionalMunicipio,
      territorioDeDesenvolvimentoMunicipio,
      gerenciaRegionalMunicipio,
      anoInicial,
      anoFinal,
    }: ResearchesFiltersDto,
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
      ...(anoInicial && { anoInicial }),
      ...(anoFinal && { anoFinal }),
    };

    return this.researchesService.municipalConstitutionalLimitMde(
      groupType,
      filters,
      { page: Number(page), limit: Number(limit) },
    );
  }

  @Get('/basic-education-expense/:groupType')
  expensesBasicEducationFundeb(
    @Param('groupType') groupType: GroupType,
    @Query()
    {
      nomeMunicipio,
      aglomeradoMunicipio,
      faixaPopulacionalMunicipio,
      territorioDeDesenvolvimentoMunicipio,
      gerenciaRegionalMunicipio,
      anoInicial,
      anoFinal,
    }: ResearchesFiltersDto,
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
      ...(anoInicial && { anoInicial }),
      ...(anoFinal && { anoFinal }),
    };

    return this.researchesService.expensesBasicEducationFundeb(
      groupType,
      filters,
      { page: Number(page), limit: Number(limit) },
    );
  }

  @Get('/areas-activity-expense/:groupType')
  expensesAreasOfActivityMde(
    @Param('groupType') groupType: GroupType,
    @Query()
    {
      nomeMunicipio,
      aglomeradoMunicipio,
      faixaPopulacionalMunicipio,
      territorioDeDesenvolvimentoMunicipio,
      gerenciaRegionalMunicipio,
      anoInicial,
      anoFinal,
    }: ResearchesFiltersDto,
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
      ...(anoInicial && { anoInicial }),
      ...(anoFinal && { anoFinal }),
    };

    return this.researchesService.expensesAreasOfActivityMde(
      groupType,
      filters,
      { page: Number(page), limit: Number(limit) },
    );
  }

  @Get('/basic-education-minimal-potential-revenue/:groupType')
  municipalBasicEducationMinimalPotentialRevenue(
    @Param('groupType') groupType: GroupType,
    @Query()
    {
      nomeMunicipio,
      aglomeradoMunicipio,
      faixaPopulacionalMunicipio,
      territorioDeDesenvolvimentoMunicipio,
      gerenciaRegionalMunicipio,
      anoInicial,
      anoFinal,
    }: ResearchesFiltersDto,
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
      ...(anoInicial && { anoInicial }),
      ...(anoFinal && { anoFinal }),
    };

    return this.researchesService.municipalBasicEducationMinimalPotentialRevenue(
      groupType,
      filters,
      { page: Number(page), limit: Number(limit) },
    );
  }

  @Get('/complementary-protocol/:groupType')
  municipalComplementaryProtocol(
    @Param('groupType') groupType: GroupType,
    @Query()
    {
      nomeMunicipio,
      aglomeradoMunicipio,
      faixaPopulacionalMunicipio,
      territorioDeDesenvolvimentoMunicipio,
      gerenciaRegionalMunicipio,
      anoInicial,
      anoFinal,
    }: ResearchesFiltersDto,
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
      ...(anoInicial && { anoInicial }),
      ...(anoFinal && { anoFinal }),
    };

    return this.researchesService.municipalComplementaryProtocol(
      groupType,
      filters,
      { page: Number(page), limit: Number(limit) },
    );
  }

  @Get('/all-revenues-expenses/:groupType')
  async allRevenuesAndExpenses(
    @Param('groupType') groupType: GroupType,
    @Query()
    {
      nomeMunicipio,
      aglomeradoMunicipio,
      faixaPopulacionalMunicipio,
      territorioDeDesenvolvimentoMunicipio,
      gerenciaRegionalMunicipio,
      anoInicial,
      anoFinal,
    }: ResearchesFiltersDto,
  ) {
    const filters = {
      ...(nomeMunicipio && { nomeMunicipio }),
      ...(aglomeradoMunicipio && { aglomeradoMunicipio }),
      ...(faixaPopulacionalMunicipio && { faixaPopulacionalMunicipio }),
      ...(territorioDeDesenvolvimentoMunicipio && {
        territorioDeDesenvolvimentoMunicipio,
      }),
      ...(gerenciaRegionalMunicipio && { gerenciaRegionalMunicipio }),
      ...(anoInicial && { anoInicial }),
      ...(anoFinal && { anoFinal }),
    };

    // Usando Promise.all para buscar todos os registros de forma paralela
    const [
      municipalOwnTaxesRevenue,
      constitutionalTransfersRevenue,
      municipalTaxesRevenue,
      additionalEducationRevenue,
      fundebFundefComposition,
      fundebComplementation,
      constitutionalLimitMde,
      basicEducationExpenses,
      activityExpenses,
      minimalPotentialRevenue,
    ] = await Promise.all([
      this.researchesService.municipalOwnTaxesRevenue(groupType, filters),
      this.researchesService.constitutionalTransfersRevenue(groupType, filters),
      this.researchesService.municipalTaxesRevenue(groupType, filters),
      this.researchesService.municipalFundebFundefComposition(
        groupType,
        filters,
      ),
      this.researchesService.additionalMunicipalEducationRevenue(
        groupType,
        filters,
      ),
      this.researchesService.complementationFundebFundef(groupType, filters),
      this.researchesService.municipalConstitutionalLimitMde(
        groupType,
        filters,
      ),
      this.researchesService.expensesBasicEducationFundeb(groupType, filters),
      this.researchesService.expensesAreasOfActivityMde(groupType, filters),
      this.researchesService.municipalBasicEducationMinimalPotentialRevenue(
        groupType,
        filters,
      ),
    ]);

    // Combine todos os resultados em um único objeto ou array
    return {
      municipalOwnTaxesRevenue,
      constitutionalTransfersRevenue,
      municipalTaxesRevenue,
      additionalEducationRevenue,
      fundebFundefComposition,
      fundebComplementation,
      constitutionalLimitMde,
      basicEducationExpenses,
      activityExpenses,
      minimalPotentialRevenue,
    };
  }
}
