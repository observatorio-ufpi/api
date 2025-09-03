import { Controller, Get, Param, Query } from '@nestjs/common';
import { EducationExpenseCompositionService } from './education_expense_composition.service';
import { GroupType } from 'src/utils/constants';
import { IndicatorsFiltersDto } from '../dto/indicators.dto';
import { PaginationDto } from 'src/dtos/pagination.dto';

@Controller('education-expense-composition')
export class EducationExpenseCompositionController {
  constructor(
    private readonly educationExpenseCompositionService: EducationExpenseCompositionService,
  ) {}

  @Get('mde_total_expense/:groupType')
  async mdeTotalExpense(
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
    const filters = {
      ...(codigoMunicipio && { codigoMunicipio }),
      ...(aglomeradoMunicipio && { aglomeradoMunicipio }),
      ...(faixaPopulacionalMunicipio && { faixaPopulacionalMunicipio }),
      ...(territorioDeDesenvolvimentoMunicipio && {
        territorioDeDesenvolvimentoMunicipio,
      }),
      ...(gerenciaRegionalMunicipio && { gerenciaRegionalMunicipio }),
    };

    return this.educationExpenseCompositionService.despesaTotalMde(
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

  @Get('mde_pessoal_ativo/:groupType')
  async mdePessoalAtivo(
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
    const filters = {
      ...(codigoMunicipio && { codigoMunicipio }),
      ...(aglomeradoMunicipio && { aglomeradoMunicipio }),
      ...(faixaPopulacionalMunicipio && { faixaPopulacionalMunicipio }),
      ...(territorioDeDesenvolvimentoMunicipio && {
        territorioDeDesenvolvimentoMunicipio,
      }),
      ...(gerenciaRegionalMunicipio && { gerenciaRegionalMunicipio }),
    };

    return this.educationExpenseCompositionService.despesasPessoalAtivoMde(
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

  @Get('mde_pessoal_inativo/:groupType')
  async mdePessoalInativo(
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
    const filters = {
      ...(codigoMunicipio && { codigoMunicipio }),
      ...(aglomeradoMunicipio && { aglomeradoMunicipio }),
      ...(faixaPopulacionalMunicipio && { faixaPopulacionalMunicipio }),
      ...(territorioDeDesenvolvimentoMunicipio && {
        territorioDeDesenvolvimentoMunicipio,
      }),
      ...(gerenciaRegionalMunicipio && { gerenciaRegionalMunicipio }),
    };

    return this.educationExpenseCompositionService.despesasPessoalInativoMde(
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

  @Get('mde_capital/:groupType')
  async mdeCapital(
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
    const filters = {
      ...(codigoMunicipio && { codigoMunicipio }),
      ...(aglomeradoMunicipio && { aglomeradoMunicipio }),
      ...(faixaPopulacionalMunicipio && { faixaPopulacionalMunicipio }),
      ...(territorioDeDesenvolvimentoMunicipio && {
        territorioDeDesenvolvimentoMunicipio,
      }),
      ...(gerenciaRegionalMunicipio && { gerenciaRegionalMunicipio }),
    };

    return this.educationExpenseCompositionService.despesasCapitalMde(
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

  @Get('mde_transferencias_instituicoes_privadas/:groupType')
  async mdeTransferenciasInstituicoesPrivadas(
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
    const filters = {
      ...(codigoMunicipio && { codigoMunicipio }),
      ...(aglomeradoMunicipio && { aglomeradoMunicipio }),
      ...(faixaPopulacionalMunicipio && { faixaPopulacionalMunicipio }),
      ...(territorioDeDesenvolvimentoMunicipio && {
        territorioDeDesenvolvimentoMunicipio,
      }),
      ...(gerenciaRegionalMunicipio && { gerenciaRegionalMunicipio }),
    };

    return this.educationExpenseCompositionService.transferenciasInstituicoesPrivadas(
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
