import { Injectable } from '@nestjs/common';
import {
  AplicacaoDespesasFinsLimiteMinimoConstitucionalTipos21,
  ApuracaoLimiteMinimoConstitucionalTipos23,
  DeducoesAdicoesParaFinsLimiteConstitucionalTipo0708,
  DeducoesFinsLimiteFundebTipo1314,
  DeducoesFinsLimiteFundebTipo1516,
  DeducoesFinsLimiteFundebTipo1718,
  DeducoesFinsLimiteFundebTipo1920,
  DeducoesFundebMagisterioTipo0912,
  DeducoesParaFinsDeLimitesConstitucionalTipo0912,
  DeducoesParaFinsDeLimitesConstitucionalTipo1314,
  DeducoesParaFinsDeLimitesConstitucionalTipo1516,
  DeducoesParaFinsDeLimitesConstitucionalTipo1718,
  DeducoesParaFinsDeLimitesConstitucionalTipo1920,
  IndicadoresArt212Tipos23,
  IndicadoresTipos21Art212,
  ItemDespesaTipos0708,
  ItemDespesaTipos0912,
  ItemDespesaTipos1314,
  ItemDespesaTipos1516,
  ItemDespesaTipos1718,
  ItemDespesaTipos1920,
  ItemReceitaTipos0708,
  ItemReceitaTipos0912,
  ItemReceitaTipos1314,
  ItemReceitaTipos1516,
  ItemReceitaTipos1718,
  ItemReceitaTipos1920,
  ItemReceitaTipos21,
  ItemReceitaTipos23,
} from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { GroupType, PaginationParams } from 'src/utils/constants';

@Injectable()
export class ResourcesApplicationControlService {
  constructor(private readonly prismaService: PrismaService) {}

  async mdeApplicationControl(
    groupType: GroupType,
    filters?: object,
    pagination?: PaginationParams,
  ) {
    const mdeApplicationControl0708 =
      await this.prismaService.relatorioMunicipal0708.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          despesa: {
            where: {
              tipo: {
                in: [ItemDespesaTipos0708.TOTAL_DESPESAS_COM_ACOES_TIPICAS_MDE],
              },
            },
            select: {
              despesasEmpenhadasNoAno: true,
              tipo: true,
            },
          },
          deducoesAdicoesParaFinsLimiteConstitucional: {
            where: {
              tipo: {
                in: [
                  DeducoesAdicoesParaFinsLimiteConstitucionalTipo0708.TOTAL_DE_DEDUCOES_ADICOES_PARA_FINS_DE_LIMITE_CONSTITUCIONAL,
                ],
              },
            },
            select: {
              valor: true,
              tipo: true,
            },
          },
          receita: {
            where: {
              tipo: {
                in: [ItemReceitaTipos0708.TOTAL_RECEITA_BRUTA_IMPOSTOS],
              },
            },
            select: {
              receitasRealizadasNoAno: true,
              tipo: true,
            },
          },
        },
        where: {
          ...filters,
        },
      });
    const mdeApplicationControl0912 =
      await this.prismaService.relatorioMunicipal0912.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          deducoesParaFinsDeLimitesConstitucional: {
            where: {
              tipo: {
                in: [
                  DeducoesParaFinsDeLimitesConstitucionalTipo0912.TOTAL_DE_DESPESAS_PARA_FINS_DE_LIMITE,
                ],
              },
            },
            select: {
              valor: true,
              tipo: true,
            },
          },
          receita: {
            where: {
              tipo: {
                in: [ItemReceitaTipos0912.TOTAL_RECEITA_IMPOSTOS],
              },
            },
            select: {
              receitasRealizadaAteBimestre: true,
              tipo: true,
            },
          },
        },
        where: {
          ...filters,
        },
      });
    const mdeApplicationControl1314 =
      await this.prismaService.relatorioMunicipal1314.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          deducoesParaFinsDeLimitesConstitucional: {
            where: {
              tipo: {
                in: [
                  DeducoesParaFinsDeLimitesConstitucionalTipo1314.TOTAL_DE_DESPESAS_PARA_FINS_DE_LIMITE,
                ],
              },
            },
            select: {
              valor: true,
              tipo: true,
            },
          },
          receita: {
            where: {
              tipo: {
                in: [ItemReceitaTipos1314.TOTAL_RECEITA_IMPOSTOS],
              },
            },
            select: {
              receitasRealizadaAteBimestre: true,
              tipo: true,
            },
          },
        },
        where: {
          ...filters,
        },
      });

    const mdeApplicationControl1516 =
      await this.prismaService.relatorioMunicipal1516.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          deducoesParaFinsDeLimitesConstitucional: {
            where: {
              tipo: {
                in: [
                  DeducoesParaFinsDeLimitesConstitucionalTipo1516.TOTAL_DE_DESPESAS_PARA_FINS_DE_LIMITE,
                ],
              },
            },
            select: {
              valor: true,
              tipo: true,
            },
          },
          receita: {
            where: {
              tipo: {
                in: [ItemReceitaTipos1516.TOTAL_RECEITA_IMPOSTOS],
              },
            },
            select: {
              receitasRealizadaAteBimestre: true,
              tipo: true,
            },
          },
        },
        where: {
          ...filters,
        },
      });

    const mdeApplicationControl1718 =
      await this.prismaService.relatorioMunicipal1718.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          deducoesParaFinsDeLimitesConstitucional: {
            where: {
              tipo: {
                in: [
                  DeducoesParaFinsDeLimitesConstitucionalTipo1718.TOTAL_DE_DESPESAS_PARA_FINS_DE_LIMITE,
                ],
              },
            },
            select: {
              valor: true,
              tipo: true,
            },
          },
          receita: {
            where: {
              tipo: {
                in: [ItemReceitaTipos1718.TOTAL_RECEITA_IMPOSTOS],
              },
            },
            select: {
              receitasRealizadaAteBimestre: true,
              tipo: true,
            },
          },
        },
        where: {
          ...filters,
        },
      });

    const mdeApplicationControl1920 =
      await this.prismaService.relatorioMunicipal1920.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          deducoesParaFinsDeLimitesConstitucional: {
            where: {
              tipo: {
                in: [
                  DeducoesParaFinsDeLimitesConstitucionalTipo1920.TOTAL_DE_DESPESAS_PARA_FINS_DE_LIMITE,
                ],
              },
            },
            select: {
              valor: true,
              tipo: true,
            },
          },
          receita: {
            where: {
              tipo: {
                in: [ItemReceitaTipos1920.TOTAL_RECEITA_IMPOSTOS],
              },
            },
            select: {
              receitasRealizadaAteBimestre: true,
              tipo: true,
            },
          },
        },
        where: {
          ...filters,
        },
      });

    const mdeApplicationControl2122 =
      await this.prismaService.relatorioMunicipal21.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          aplicacaoDespesasFinsLimiteMinimoConstitucional: {
            where: {
              tipo: {
                in: [
                  AplicacaoDespesasFinsLimiteMinimoConstitucionalTipos21.TOTAL_DESPESAS_PARA_FINS_LIMITE,
                ],
              },
            },
            select: {
              valor: true,
              tipo: true,
            },
          },
          receita: {
            where: {
              tipo: {
                in: [ItemReceitaTipos21.TOTAL_RECEITA_IMPOSTOS],
              },
            },
            select: {
              receitasRealizadaAteBimestre: true,
              tipo: true,
            },
          },
        },
        where: {
          ...filters,
        },
      });

    const mdeApplicationControl23 =
      await this.prismaService.relatorioMunicipal23.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          apuracaoLimiteMinimoConstitucional: {
            where: {
              tipo: {
                in: [
                  ApuracaoLimiteMinimoConstitucionalTipos23.APLICACAO_EM_MDE_SOBRE_RECEITA_LIQUIDA_DE_IMPOSTOS,
                ],
              },
            },
            select: {
              valorAplicado: true,
              tipo: true,
            },
          },
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos23.TOTAL_DA_RECEITA_RESULTANTE_DE_IMPOSTOS,
                ],
              },
            },
            select: {
              receitasRealizadasAteBimestre: true,
              tipo: true,
            },
          },
        },
        where: {
          ...filters,
        },
      });

    // Calculate the percentage using the formula (23E – 30B) / 3E * 100
    const modifiedMdeApplicationControl0708 = mdeApplicationControl0708.map(
      (item) => {
        const despesaItem =
          item.despesa.find(
            (despesa) =>
              despesa.tipo ===
              ItemDespesaTipos0708.TOTAL_DESPESAS_COM_ACOES_TIPICAS_MDE,
          )?.despesasEmpenhadasNoAno || 0;

        const deducaoItem =
          item.deducoesAdicoesParaFinsLimiteConstitucional.find(
            (deducao) =>
              deducao.tipo ===
              DeducoesAdicoesParaFinsLimiteConstitucionalTipo0708.TOTAL_DE_DEDUCOES_ADICOES_PARA_FINS_DE_LIMITE_CONSTITUCIONAL,
          )?.valor || 0;

        const receitaItem =
          item.receita.find(
            (receita) =>
              receita.tipo ===
              ItemReceitaTipos0708.TOTAL_RECEITA_BRUTA_IMPOSTOS,
          )?.receitasRealizadasNoAno || 0;

        // Calcular a porcentagem (23E – 30B) / 3E * 100
        const percentage =
          receitaItem !== 0
            ? ((despesaItem - deducaoItem) / receitaItem) * 100
            : 0;

        return {
          ano: item.ano,
          codigoMunicipio: item.codigoMunicipio,
          indicador: [
            {
              tipo: 'APLICACAO_MDE',
              valor: parseFloat(percentage.toFixed(2)),
            },
          ],
        };
      },
    );

    const modifiedMdeApplicationControl0912 = mdeApplicationControl0912.map(
      (item) => {
        const deducaoItem =
          item.deducoesParaFinsDeLimitesConstitucional.find(
            (deducao) =>
              deducao.tipo ===
              DeducoesParaFinsDeLimitesConstitucionalTipo0912.TOTAL_DE_DESPESAS_PARA_FINS_DE_LIMITE,
          )?.valor || 0;

        const receitaItem =
          item.receita.find(
            (receita) =>
              receita.tipo === ItemReceitaTipos0912.TOTAL_RECEITA_IMPOSTOS,
          )?.receitasRealizadaAteBimestre || 0;

        // Calcular a porcentagem 38B / 3E * 100
        const percentage =
          receitaItem !== 0 ? (deducaoItem / receitaItem) * 100 : 0;

        return {
          ano: item.ano,
          codigoMunicipio: item.codigoMunicipio,
          indicador: [
            {
              tipo: 'APLICACAO_MDE',
              valor: parseFloat(percentage.toFixed(2)),
            },
          ],
        };
      },
    );

    const modifiedMdeApplicationControl1314 = mdeApplicationControl1314.map(
      (item) => {
        const deducaoItem =
          item.deducoesParaFinsDeLimitesConstitucional.find(
            (deducao) =>
              deducao.tipo ===
              DeducoesParaFinsDeLimitesConstitucionalTipo1314.TOTAL_DE_DESPESAS_PARA_FINS_DE_LIMITE,
          )?.valor || 0;

        const receitaItem =
          item.receita.find(
            (receita) =>
              receita.tipo === ItemReceitaTipos1314.TOTAL_RECEITA_IMPOSTOS,
          )?.receitasRealizadaAteBimestre || 0;

        // Calcular a porcentagem 38B / 3E * 100
        const percentage =
          receitaItem !== 0 ? (deducaoItem / receitaItem) * 100 : 0;

        return {
          ano: item.ano,
          codigoMunicipio: item.codigoMunicipio,
          indicador: [
            {
              tipo: 'APLICACAO_MDE',
              valor: parseFloat(percentage.toFixed(2)),
            },
          ],
        };
      },
    );

    const modifiedMdeApplicationControl1516 = mdeApplicationControl1516.map(
      (item) => {
        const deducaoItem =
          item.deducoesParaFinsDeLimitesConstitucional.find(
            (deducao) =>
              deducao.tipo ===
              DeducoesParaFinsDeLimitesConstitucionalTipo1516.TOTAL_DE_DESPESAS_PARA_FINS_DE_LIMITE,
          )?.valor || 0;

        const receitaItem =
          item.receita.find(
            (receita) =>
              receita.tipo === ItemReceitaTipos1516.TOTAL_RECEITA_IMPOSTOS,
          )?.receitasRealizadaAteBimestre || 0;

        // Calcular a porcentagem 38B / 3D * 100
        const percentage =
          receitaItem !== 0 ? (deducaoItem / receitaItem) * 100 : 0;

        return {
          ano: item.ano,
          codigoMunicipio: item.codigoMunicipio,
          indicador: [
            {
              tipo: 'APLICACAO_MDE',
              valor: parseFloat(percentage.toFixed(2)),
            },
          ],
        };
      },
    );

    const modifiedMdeApplicationControl1718 = mdeApplicationControl1718.map(
      (item) => {
        const deducaoItem =
          item.deducoesParaFinsDeLimitesConstitucional.find(
            (deducao) =>
              deducao.tipo ===
              DeducoesParaFinsDeLimitesConstitucionalTipo1718.TOTAL_DE_DESPESAS_PARA_FINS_DE_LIMITE,
          )?.valor || 0;

        const receitaItem =
          item.receita.find(
            (receita) =>
              receita.tipo === ItemReceitaTipos1718.TOTAL_RECEITA_IMPOSTOS,
          )?.receitasRealizadaAteBimestre || 0;

        // Calcular a porcentagem 37B / 3D * 100
        const percentage =
          receitaItem !== 0 ? (deducaoItem / receitaItem) * 100 : 0;

        return {
          ano: item.ano,
          codigoMunicipio: item.codigoMunicipio,
          indicador: [
            {
              tipo: 'APLICACAO_MDE',
              valor: parseFloat(percentage.toFixed(2)),
            },
          ],
        };
      },
    );

    const modifiedMdeApplicationControl1920 = mdeApplicationControl1920.map(
      (item) => {
        const deducaoItem =
          item.deducoesParaFinsDeLimitesConstitucional.find(
            (deducao) =>
              deducao.tipo ===
              DeducoesParaFinsDeLimitesConstitucionalTipo1920.TOTAL_DE_DESPESAS_PARA_FINS_DE_LIMITE,
          )?.valor || 0;

        const receitaItem =
          item.receita.find(
            (receita) =>
              receita.tipo === ItemReceitaTipos1920.TOTAL_RECEITA_IMPOSTOS,
          )?.receitasRealizadaAteBimestre || 0;

        // Calcular a porcentagem 36B / 3D * 100
        const percentage =
          receitaItem !== 0 ? (deducaoItem / receitaItem) * 100 : 0;

        return {
          ano: item.ano,
          codigoMunicipio: item.codigoMunicipio,
          indicador: [
            {
              tipo: 'APLICACAO_MDE',
              valor: parseFloat(percentage.toFixed(2)),
            },
          ],
        };
      },
    );

    const modifiedMdeApplicationControl2122 = mdeApplicationControl2122.map(
      (item) => {
        const deducaoItem =
          item.aplicacaoDespesasFinsLimiteMinimoConstitucional.find(
            (deducao) =>
              deducao.tipo ===
              AplicacaoDespesasFinsLimiteMinimoConstitucionalTipos21.TOTAL_DESPESAS_PARA_FINS_LIMITE,
          )?.valor || 0;

        const receitaItem =
          item.receita.find(
            (receita) =>
              receita.tipo === ItemReceitaTipos21.TOTAL_RECEITA_IMPOSTOS,
          )?.receitasRealizadaAteBimestre || 0;

        // Calcular a porcentagem 32B / 3C * 100
        const percentage =
          receitaItem !== 0 ? (deducaoItem / receitaItem) * 100 : 0;

        return {
          ano: item.ano,
          codigoMunicipio: item.codigoMunicipio,
          indicador: [
            {
              tipo: 'APLICACAO_MDE',
              valor: parseFloat(percentage.toFixed(2)),
            },
          ],
        };
      },
    );

    const modifiedMdeApplicationControl23 = mdeApplicationControl23.map(
      (item) => {
        const apuracaoItem =
          item.apuracaoLimiteMinimoConstitucional.find(
            (apuracao) =>
              apuracao.tipo ===
              ApuracaoLimiteMinimoConstitucionalTipos23.APLICACAO_EM_MDE_SOBRE_RECEITA_LIQUIDA_DE_IMPOSTOS,
          )?.valorAplicado || 0;

        const receitaItem =
          item.receita.find(
            (receita) =>
              receita.tipo ===
              ItemReceitaTipos23.TOTAL_DA_RECEITA_RESULTANTE_DE_IMPOSTOS,
          )?.receitasRealizadasAteBimestre || 0;

        // Calcular a porcentagem 29C / 3C * 100
        const percentage =
          receitaItem !== 0 ? (apuracaoItem / receitaItem) * 100 : 0;

        return {
          ano: item.ano,
          codigoMunicipio: item.codigoMunicipio,
          indicador: [
            {
              tipo: 'APLICACAO_MDE',
              valor: parseFloat(percentage.toFixed(2)),
            },
          ],
        };
      },
    );

    let groupedData = {};

    if (groupType === GroupType.MUNICIPIO) {
      groupedData = this.groupByMunicipio([
        {
          key: 'mdeApplicationControl0708',
          data: modifiedMdeApplicationControl0708,
        },
        {
          key: 'mdeApplicationControl0912',
          data: modifiedMdeApplicationControl0912,
        },
        {
          key: 'mdeApplicationControl1314',
          data: modifiedMdeApplicationControl1314,
        },
        {
          key: 'mdeApplicationControl1516',
          data: modifiedMdeApplicationControl1516,
        },
        {
          key: 'mdeApplicationControl1718',
          data: modifiedMdeApplicationControl1718,
        },
        {
          key: 'mdeApplicationControl1920',
          data: modifiedMdeApplicationControl1920,
        },
        {
          key: 'mdeApplicationControl2122',
          data: modifiedMdeApplicationControl2122,
        },
        {
          key: 'mdeApplicationControl23',
          data: modifiedMdeApplicationControl23,
        },
      ]);
    } else if (groupType === GroupType.ANO) {
      groupedData = this.groupByAno([
        {
          key: 'mdeApplicationControl0708',
          data: modifiedMdeApplicationControl0708,
        },
        {
          key: 'mdeApplicationControl0912',
          data: modifiedMdeApplicationControl0912,
        },
        {
          key: 'mdeApplicationControl1314',
          data: modifiedMdeApplicationControl1314,
        },
        {
          key: 'mdeApplicationControl1516',
          data: modifiedMdeApplicationControl1516,
        },
        {
          key: 'mdeApplicationControl1718',
          data: modifiedMdeApplicationControl1718,
        },
        {
          key: 'mdeApplicationControl1920',
          data: modifiedMdeApplicationControl1920,
        },
        {
          key: 'mdeApplicationControl2122',
          data: modifiedMdeApplicationControl2122,
        },
        {
          key: 'mdeApplicationControl23',
          data: modifiedMdeApplicationControl23,
        },
      ]);
    }

    if (pagination) {
      const { page, limit } = pagination;
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;

      // Apply pagination to the grouped results
      if (groupType === GroupType.MUNICIPIO) {
        const municipios = Object.keys(groupedData);
        const paginatedMunicipios = municipios.slice(startIndex, endIndex);

        const paginatedResults = {
          data: {},
          pagination: {
            total: municipios.length,
            page,
            limit,
            totalPages: Math.ceil(municipios.length / limit),
          },
        };

        paginatedMunicipios.forEach((municipio) => {
          paginatedResults.data[municipio] = groupedData[municipio];
        });

        return paginatedResults;
      } else if (groupType === GroupType.ANO) {
        const anos = Object.keys(groupedData);
        const paginatedAnos = anos.slice(startIndex, endIndex);

        const paginatedResults = {
          data: {},
          pagination: {
            total: anos.length,
            page,
            limit,
            totalPages: Math.ceil(anos.length / limit),
          },
        };

        paginatedAnos.forEach((ano) => {
          paginatedResults.data[ano] = groupedData[ano];
        });

        return paginatedResults;
      }
    }

    return groupedData;
  }

  async fundebApplicationControl(
    groupType: GroupType,
    filters?: object,
    pagination?: PaginationParams,
  ) {
    const fundebApplicationControl0708 =
      await this.prismaService.relatorioMunicipal0708.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          despesa: {
            where: {
              tipo: {
                in: [
                  ItemDespesaTipos0708.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO,
                ],
              },
            },
            select: {
              despesasEmpenhadasNoAno: true,
              tipo: true,
            },
          },
          receita: {
            where: {
              tipo: {
                in: [ItemReceitaTipos0708.RECEITAS_RECEBIDAS_DO_FUNDEB],
              },
            },
            select: {
              receitasRealizadasNoAno: true,
              tipo: true,
            },
          },
        },
        where: {
          ...filters,
        },
      });

    const fundebApplicationControl0912 =
      await this.prismaService.relatorioMunicipal0912.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          despesa: {
            where: {
              tipo: {
                in: [
                  ItemDespesaTipos0912.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO,
                ],
              },
            },
            select: {
              despesasLiquidadasAteBimestre: true,
              tipo: true,
            },
          },
          deducoesFundebMagisterio: {
            where: {
              tipo: {
                in: [
                  DeducoesFundebMagisterioTipo0912.TOTAL_DEDUCOES_PARA_FINS_LIMITE_FUNDEB,
                ],
              },
            },
            select: {
              valor: true,
              tipo: true,
            },
          },
          receita: {
            where: {
              tipo: {
                in: [ItemReceitaTipos0912.RECEITAS_RECEBIDAS_DO_FUNDEB],
              },
            },
            select: {
              receitasRealizadaAteBimestre: true,
              tipo: true,
            },
          },
        },
        where: {
          ...filters,
        },
      });

    const fundebApplicationControl1314 =
      await this.prismaService.relatorioMunicipal1314.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          despesa: {
            where: {
              tipo: {
                in: [
                  ItemDespesaTipos1314.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO,
                ],
              },
            },
            select: {
              despesasLiquidadasAteBimestre: true,
              tipo: true,
            },
          },
          deducoesParaFinsLimiteFundeb: {
            where: {
              tipo: {
                in: [
                  DeducoesFinsLimiteFundebTipo1314.FUNDEB_60_PORCENTO_16_1,
                  DeducoesFinsLimiteFundebTipo1314.FUNDEB_60_PORCENTO_17_1,
                ],
              },
            },
            select: {
              valor: true,
              tipo: true,
            },
          },
          receita: {
            where: {
              tipo: {
                in: [ItemReceitaTipos1314.RECEITAS_RECEBIDAS_DO_FUNDEB],
              },
            },
            select: {
              receitasRealizadaAteBimestre: true,
              tipo: true,
            },
          },
        },
        where: {
          ...filters,
        },
      });

    const fundebApplicationControl1516 =
      await this.prismaService.relatorioMunicipal1516.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          despesa: {
            where: {
              tipo: {
                in: [
                  ItemDespesaTipos1516.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO,
                ],
              },
            },
            select: {
              despesasLiquidadasAteBimestre: true,
              tipo: true,
            },
          },
          deducoesParaFinsLimiteFundeb: {
            where: {
              tipo: {
                in: [
                  DeducoesFinsLimiteFundebTipo1516.RESTOS_A_PAGAR_SEM_DISPONIBILIDADE_FINANCEIRA_60_PORCENTO,
                  DeducoesFinsLimiteFundebTipo1516.DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR_60_PORCENTO,
                ],
              },
            },
            select: {
              valor: true,
              tipo: true,
            },
          },
          receita: {
            where: {
              tipo: {
                in: [ItemReceitaTipos1516.RECEITAS_RECEBIDAS_DO_FUNDEB],
              },
            },
            select: {
              receitasRealizadaAteBimestre: true,
              tipo: true,
            },
          },
        },
        where: {
          ...filters,
        },
      });

    const fundebApplicationControl1718 =
      await this.prismaService.relatorioMunicipal1718.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          despesa: {
            where: {
              tipo: {
                in: [
                  ItemDespesaTipos1718.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO,
                ],
              },
            },
            select: {
              despesasLiquidadasAteBimestre: true,
              tipo: true,
            },
          },
          deducoesParaFinsLimiteFundeb: {
            where: {
              tipo: {
                in: [
                  DeducoesFinsLimiteFundebTipo1718.RESTOS_A_PAGAR_SEM_DISPONIBILIDADE_FINANCEIRA_60_PORCENTO,
                  DeducoesFinsLimiteFundebTipo1718.DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR_60_PORCENTO,
                ],
              },
            },
            select: {
              valor: true,
              tipo: true,
            },
          },
          receita: {
            where: {
              tipo: {
                in: [ItemReceitaTipos1718.RECEITAS_RECEBIDAS_DO_FUNDEB],
              },
            },
            select: {
              receitasRealizadaAteBimestre: true,
              tipo: true,
            },
          },
        },
        where: {
          ...filters,
        },
      });

    const fundebApplicationControl1920 =
      await this.prismaService.relatorioMunicipal1920.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          despesa: {
            where: {
              tipo: {
                in: [
                  ItemDespesaTipos1920.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO,
                ],
              },
            },
            select: {
              despesasLiquidadasAteBimestre: true,
              tipo: true,
            },
          },
          deducoesParaFinsLimiteFundeb: {
            where: {
              tipo: {
                in: [
                  DeducoesFinsLimiteFundebTipo1920.RESTOS_A_PAGAR_SEM_DISPONIBILIDADE_FINANCEIRA_60_PORCENTO,
                  DeducoesFinsLimiteFundebTipo1920.DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR_60_PORCENTO,
                ],
              },
            },
            select: {
              valor: true,
              tipo: true,
            },
          },
          receita: {
            where: {
              tipo: {
                in: [ItemReceitaTipos1920.RECEITAS_RECEBIDAS_DO_FUNDEB],
              },
            },
            select: {
              receitasRealizadaAteBimestre: true,
              tipo: true,
            },
          },
        },
        where: {
          ...filters,
        },
      });

    const fundebApplicationControl2122 =
      await this.prismaService.relatorioMunicipal21.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          indicadoresArt212: {
            where: {
              tipo: {
                in: [
                  IndicadoresTipos21Art212.MINIMO_70_FUNDEB_REMUNERACAO_PROFESSORES,
                ],
              },
            },
            select: {
              valorConsideradoAposDeducoes: true,
              tipo: true,
            },
          },
          receita: {
            where: {
              tipo: {
                in: [ItemReceitaTipos21.RECEITAS_RECEBIDAS_FUNDEB],
              },
            },
            select: {
              receitasRealizadaAteBimestre: true,
              tipo: true,
            },
          },
        },
        where: {
          ...filters,
        },
      });

    const fundebApplicationControl23 =
      await this.prismaService.relatorioMunicipal23.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          indicadoresArt212: {
            where: {
              tipo: {
                in: [
                  IndicadoresArt212Tipos23.MINIMO_70_PORCENTO_FUNDEB_PROFISSIONAIS_EDUCACAO_BASICA,
                ],
              },
            },
            select: {
              valorConsideradoAposDeducoes: true,
              tipo: true,
            },
          },
          receita: {
            where: {
              tipo: {
                in: [ItemReceitaTipos23.TOTAL_DAS_RECEITAS_DO_FUNDEB_RECEBIDAS],
              },
            },
            select: {
              receitasRealizadasAteBimestre: true,
              tipo: true,
            },
          },
        },
        where: {
          ...filters,
        },
      });

    const modifiedFundeApplicationControl0708 =
      fundebApplicationControl0708.map((item) => {
        const despesaItem =
          item.despesa.find(
            (despesa) =>
              despesa.tipo ===
              ItemDespesaTipos0708.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO,
          )?.despesasEmpenhadasNoAno || 0;

        const receitaItem =
          item.receita.find(
            (receita) =>
              receita.tipo ===
              ItemReceitaTipos0708.RECEITAS_RECEBIDAS_DO_FUNDEB,
          )?.receitasRealizadasNoAno || 0;

        // Calcular a porcentagem 12E / 10E * 100
        const percentage =
          receitaItem !== 0 ? (despesaItem / receitaItem) * 100 : 0;

        return {
          ano: item.ano,
          codigoMunicipio: item.codigoMunicipio,
          indicador: [
            {
              tipo: 'APLICACAO_FUNDEB_PAG_PROFISSIONAIS_EDUCACAO',
              valor: parseFloat(percentage.toFixed(2)),
            },
          ],
        };
      });

    const modifiedFundeApplicationControl0912 =
      fundebApplicationControl0912.map((item) => {
        const despesaItem =
          item.despesa.find(
            (despesa) =>
              despesa.tipo ===
              ItemDespesaTipos0912.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO,
          )?.despesasLiquidadasAteBimestre || 0;

        const deducaoItem =
          item.deducoesFundebMagisterio.find(
            (deducao) =>
              deducao.tipo ===
              DeducoesFundebMagisterioTipo0912.TOTAL_DEDUCOES_PARA_FINS_LIMITE_FUNDEB,
          )?.valor || 0;

        const receitaItem =
          item.receita.find(
            (receita) =>
              receita.tipo ===
              ItemReceitaTipos0912.RECEITAS_RECEBIDAS_DO_FUNDEB,
          )?.receitasRealizadaAteBimestre || 0;

        // Calcular a porcentagem (13E / 18B)/11E * 100
        const percentage =
          receitaItem !== 0 && deducaoItem !== 0
            ? (despesaItem / deducaoItem / receitaItem) * 100
            : 0;

        return {
          ano: item.ano,
          codigoMunicipio: item.codigoMunicipio,
          indicador: [
            {
              tipo: 'APLICACAO_FUNDEB_PAG_PROFISSIONAIS_EDUCACAO',
              valor: parseFloat(percentage.toFixed(2)),
            },
          ],
        };
      });

    const modifiedFundeApplicationControl1314 =
      fundebApplicationControl1314.map((item) => {
        const despesaItem =
          item.despesa.find(
            (despesa) =>
              despesa.tipo ===
              ItemDespesaTipos1314.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO,
          )?.despesasLiquidadasAteBimestre || 0;

        const deducao16Item =
          item.deducoesParaFinsLimiteFundeb.find(
            (deducao) =>
              deducao.tipo ===
              DeducoesFinsLimiteFundebTipo1314.FUNDEB_60_PORCENTO_16_1,
          )?.valor || 0;

        const deducao17Item =
          item.deducoesParaFinsLimiteFundeb.find(
            (deducao) =>
              deducao.tipo ===
              DeducoesFinsLimiteFundebTipo1314.FUNDEB_60_PORCENTO_17_1,
          )?.valor || 0;

        const receitaItem =
          item.receita.find(
            (receita) =>
              receita.tipo ===
              ItemReceitaTipos1314.RECEITAS_RECEBIDAS_DO_FUNDEB,
          )?.receitasRealizadaAteBimestre || 0;

        // Calcular a porcentagem 13E - (16.1B + 17.1B)/11E * 100
        const percentage =
          receitaItem !== 0
            ? ((despesaItem - (deducao16Item + deducao17Item)) / receitaItem) *
              100
            : 0;

        return {
          ano: item.ano,
          codigoMunicipio: item.codigoMunicipio,
          indicador: [
            {
              tipo: 'APLICACAO_FUNDEB_PAG_PROFISSIONAIS_EDUCACAO',
              valor: parseFloat(percentage.toFixed(2)),
            },
          ],
        };
      });

    const modifiedFundeApplicationControl1516 =
      fundebApplicationControl1516.map((item) => {
        const despesaItem =
          item.despesa.find(
            (despesa) =>
              despesa.tipo ===
              ItemDespesaTipos1516.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO,
          )?.despesasLiquidadasAteBimestre || 0;

        const deducao16Item =
          item.deducoesParaFinsLimiteFundeb.find(
            (deducao) =>
              deducao.tipo ===
              DeducoesFinsLimiteFundebTipo1516.RESTOS_A_PAGAR_SEM_DISPONIBILIDADE_FINANCEIRA_60_PORCENTO,
          )?.valor || 0;

        const deducao17Item =
          item.deducoesParaFinsLimiteFundeb.find(
            (deducao) =>
              deducao.tipo ===
              DeducoesFinsLimiteFundebTipo1516.DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR_60_PORCENTO,
          )?.valor || 0;

        const receitaItem =
          item.receita.find(
            (receita) =>
              receita.tipo ===
              ItemReceitaTipos1516.RECEITAS_RECEBIDAS_DO_FUNDEB,
          )?.receitasRealizadaAteBimestre || 0;

        // Calcular a porcentagem 13F - (16.1B + 17.1B)/11D * 100
        const percentage =
          receitaItem !== 0
            ? ((despesaItem - (deducao16Item + deducao17Item)) / receitaItem) *
              100
            : 0;

        return {
          ano: item.ano,
          codigoMunicipio: item.codigoMunicipio,
          indicador: [
            {
              tipo: 'APLICACAO_FUNDEB_PAG_PROFISSIONAIS_EDUCACAO',
              valor: parseFloat(percentage.toFixed(2)),
            },
          ],
        };
      });

    const modifiedFundeApplicationControl1718 =
      fundebApplicationControl1718.map((item) => {
        const despesaItem =
          item.despesa.find(
            (despesa) =>
              despesa.tipo ===
              ItemDespesaTipos1718.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO,
          )?.despesasLiquidadasAteBimestre || 0;

        const deducao16Item =
          item.deducoesParaFinsLimiteFundeb.find(
            (deducao) =>
              deducao.tipo ===
              DeducoesFinsLimiteFundebTipo1718.RESTOS_A_PAGAR_SEM_DISPONIBILIDADE_FINANCEIRA_60_PORCENTO,
          )?.valor || 0;

        const deducao17Item =
          item.deducoesParaFinsLimiteFundeb.find(
            (deducao) =>
              deducao.tipo ===
              DeducoesFinsLimiteFundebTipo1718.DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR_60_PORCENTO,
          )?.valor || 0;

        const receitaItem =
          item.receita.find(
            (receita) =>
              receita.tipo ===
              ItemReceitaTipos1718.RECEITAS_RECEBIDAS_DO_FUNDEB,
          )?.receitasRealizadaAteBimestre || 0;

        // Calcular a porcentagem 13F - (16.1B + 17.1B)/11D * 100
        const percentage =
          receitaItem !== 0
            ? ((despesaItem - (deducao16Item + deducao17Item)) / receitaItem) *
              100
            : 0;

        return {
          ano: item.ano,
          codigoMunicipio: item.codigoMunicipio,
          indicador: [
            {
              tipo: 'APLICACAO_FUNDEB_PAG_PROFISSIONAIS_EDUCACAO',
              valor: parseFloat(percentage.toFixed(2)),
            },
          ],
        };
      });

    const modifiedFundeApplicationControl1920 =
      fundebApplicationControl1920.map((item) => {
        const despesaItem =
          item.despesa.find(
            (despesa) =>
              despesa.tipo ===
              ItemDespesaTipos1920.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO,
          )?.despesasLiquidadasAteBimestre || 0;

        const deducao16Item =
          item.deducoesParaFinsLimiteFundeb.find(
            (deducao) =>
              deducao.tipo ===
              DeducoesFinsLimiteFundebTipo1920.RESTOS_A_PAGAR_SEM_DISPONIBILIDADE_FINANCEIRA_60_PORCENTO,
          )?.valor || 0;

        const deducao17Item =
          item.deducoesParaFinsLimiteFundeb.find(
            (deducao) =>
              deducao.tipo ===
              DeducoesFinsLimiteFundebTipo1920.DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR_60_PORCENTO,
          )?.valor || 0;

        const receitaItem =
          item.receita.find(
            (receita) =>
              receita.tipo ===
              ItemReceitaTipos1920.RECEITAS_RECEBIDAS_DO_FUNDEB,
          )?.receitasRealizadaAteBimestre || 0;

        // Calcular a porcentagem 13F - (16.1B + 17.1B)/11D * 100
        const percentage =
          receitaItem !== 0
            ? ((despesaItem - (deducao16Item + deducao17Item)) / receitaItem) *
              100
            : 0;

        return {
          ano: item.ano,
          codigoMunicipio: item.codigoMunicipio,
          indicador: [
            {
              tipo: 'APLICACAO_FUNDEB_PAG_PROFISSIONAIS_EDUCACAO',
              valor: parseFloat(percentage.toFixed(2)),
            },
          ],
        };
      });

    const modifiedFundeApplicationControl2122 =
      fundebApplicationControl2122.map((item) => {
        const indicadorArt212 =
          item.indicadoresArt212.find(
            (indicadorArt212) =>
              indicadorArt212.tipo ===
              IndicadoresTipos21Art212.MINIMO_70_FUNDEB_REMUNERACAO_PROFESSORES,
          )?.valorConsideradoAposDeducoes || 0;

        const receitaItem =
          item.receita.find(
            (receita) =>
              receita.tipo === ItemReceitaTipos21.RECEITAS_RECEBIDAS_FUNDEB,
          )?.receitasRealizadaAteBimestre || 0;

        // Calcular a porcentagem 19D / 6C * 100
        const percentage =
          receitaItem !== 0 ? (indicadorArt212 / receitaItem) * 100 : 0;

        return {
          ano: item.ano,
          codigoMunicipio: item.codigoMunicipio,
          indicador: [
            {
              tipo: 'APLICACAO_FUNDEB_PAG_PROFISSIONAIS_EDUCACAO',
              valor: parseFloat(percentage.toFixed(2)),
            },
          ],
        };
      });
    const modifiedFundeApplicationControl23 = fundebApplicationControl23.map(
      (item) => {
        const indicadorArt212 =
          item.indicadoresArt212.find(
            (indicadorArt212) =>
              indicadorArt212.tipo ===
              IndicadoresArt212Tipos23.MINIMO_70_PORCENTO_FUNDEB_PROFISSIONAIS_EDUCACAO_BASICA,
          )?.valorConsideradoAposDeducoes || 0;

        const receitaItem =
          item.receita.find(
            (receita) =>
              receita.tipo ===
              ItemReceitaTipos23.TOTAL_DAS_RECEITAS_DO_FUNDEB_RECEBIDAS,
          )?.receitasRealizadasAteBimestre || 0;

        // Calcular a porcentagem 15D / 6C * 100
        const percentage =
          receitaItem !== 0 ? (indicadorArt212 / receitaItem) * 100 : 0;

        return {
          ano: item.ano,
          codigoMunicipio: item.codigoMunicipio,
          indicador: [
            {
              tipo: 'APLICACAO_FUNDEB_PAG_PROFISSIONAIS_EDUCACAO',
              valor: parseFloat(percentage.toFixed(2)),
            },
          ],
        };
      },
    );

    let groupedData = {};

    if (groupType === GroupType.MUNICIPIO) {
      groupedData = this.groupByMunicipio([
        {
          key: 'fundebApplicationControl0708',
          data: modifiedFundeApplicationControl0708,
        },
        {
          key: 'fundebApplicationControl0912',
          data: modifiedFundeApplicationControl0912,
        },
        {
          key: 'fundebApplicationControl1314',
          data: modifiedFundeApplicationControl1314,
        },
        {
          key: 'fundebApplicationControl1516',
          data: modifiedFundeApplicationControl1516,
        },
        {
          key: 'fundebApplicationControl1718',
          data: modifiedFundeApplicationControl1718,
        },
        {
          key: 'fundebApplicationControl1920',
          data: modifiedFundeApplicationControl1920,
        },
        {
          key: 'fundebApplicationControl2122',
          data: modifiedFundeApplicationControl2122,
        },
        {
          key: 'fundebApplicationControl23',
          data: modifiedFundeApplicationControl23,
        },
      ]);
    } else if (groupType === GroupType.ANO) {
      groupedData = this.groupByAno([
        {
          key: 'fundebApplicationControl0708',
          data: modifiedFundeApplicationControl0708,
        },
        {
          key: 'fundebApplicationControl0912',
          data: modifiedFundeApplicationControl0912,
        },
        {
          key: 'fundebApplicationControl1314',
          data: modifiedFundeApplicationControl1314,
        },
        {
          key: 'fundebApplicationControl1516',
          data: modifiedFundeApplicationControl1516,
        },
        {
          key: 'fundebApplicationControl1718',
          data: modifiedFundeApplicationControl1718,
        },
        {
          key: 'fundebApplicationControl1920',
          data: modifiedFundeApplicationControl1920,
        },
        {
          key: 'fundebApplicationControl2122',
          data: modifiedFundeApplicationControl2122,
        },
        {
          key: 'fundebApplicationControl23',
          data: modifiedFundeApplicationControl23,
        },
      ]);
    }

    if (pagination) {
      const { page, limit } = pagination;
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;

      // Apply pagination to the grouped results
      if (groupType === GroupType.MUNICIPIO) {
        const municipios = Object.keys(groupedData);
        const paginatedMunicipios = municipios.slice(startIndex, endIndex);

        const paginatedResults = {
          data: {},
          pagination: {
            total: municipios.length,
            page,
            limit,
            totalPages: Math.ceil(municipios.length / limit),
          },
        };

        paginatedMunicipios.forEach((municipio) => {
          paginatedResults.data[municipio] = groupedData[municipio];
        });

        return paginatedResults;
      } else if (groupType === GroupType.ANO) {
        const anos = Object.keys(groupedData);
        const paginatedAnos = anos.slice(startIndex, endIndex);

        const paginatedResults = {
          data: {},
          pagination: {
            total: anos.length,
            page,
            limit,
            totalPages: Math.ceil(anos.length / limit),
          },
        };

        paginatedAnos.forEach((ano) => {
          paginatedResults.data[ano] = groupedData[ano];
        });

        return paginatedResults;
      }
    }

    return groupedData;
  }

  async edInfantilVAATApplicationControl(
    groupType: GroupType,
    filters?: object,
    pagination?: PaginationParams,
  ) {
    const edInfantilVAATApplicationControl2122 =
      await this.prismaService.relatorioMunicipal21.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          indicadoresArt212: {
            where: {
              tipo: {
                in: [
                  IndicadoresTipos21Art212.PERCENTUAL_50_COMPLEMENTACAO_UNIAO_VAAT_EDUCACAO_INFANTIL,
                ],
              },
            },
            select: {
              valorAplicado: true,
              tipo: true,
            },
          },
          receita: {
            where: {
              tipo: {
                in: [ItemReceitaTipos21.FUNDEB_COMPLEMENTACAO_UNIAO_VAAT],
              },
            },
            select: {
              receitasRealizadaAteBimestre: true,
              tipo: true,
            },
          },
        },
        where: {
          ...filters,
        },
      });

    const edInfantilVAATApplicationControl23 =
      await this.prismaService.relatorioMunicipal23.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          indicadoresArt212: {
            where: {
              tipo: {
                in: [
                  IndicadoresArt212Tipos23.PROPORCAO_50_PORCENTO_FUNDEB_VAAT_EDUCACAO_INFANTIL,
                ],
              },
            },
            select: {
              valorAplicado: true,
              tipo: true,
            },
          },
          receita: {
            where: {
              tipo: {
                in: [ItemReceitaTipos23.FUNDEB_COMPLEMENTACAO_DA_UNIAO_VAAT],
              },
            },
            select: {
              receitasRealizadasAteBimestre: true,
              tipo: true,
            },
          },
        },
        where: {
          ...filters,
        },
      });

    const modifiedEdInfantilVAATApplicationControl2122 =
      edInfantilVAATApplicationControl2122.map((item) => {
        const indicadorArt212 =
          item.indicadoresArt212.find(
            (indicadorArt212) =>
              indicadorArt212.tipo ===
              IndicadoresTipos21Art212.PERCENTUAL_50_COMPLEMENTACAO_UNIAO_VAAT_EDUCACAO_INFANTIL,
          )?.valorAplicado || 0;

        const receitaItem =
          item.receita.find(
            (receita) =>
              receita.tipo ===
              ItemReceitaTipos21.FUNDEB_COMPLEMENTACAO_UNIAO_VAAT,
          )?.receitasRealizadaAteBimestre || 0;

        // Calcular a porcentagem 20E / 6.3C * 100
        const percentage =
          receitaItem !== 0 ? (indicadorArt212 / receitaItem) * 100 : 0;

        return {
          ano: item.ano,
          codigoMunicipio: item.codigoMunicipio,
          indicador: [
            {
              tipo: 'APLICACAO_VAAT_EDUCACAO_INFANTIL',
              valor: parseFloat(percentage.toFixed(2)),
            },
          ],
        };
      });

    const modifiedEdInfantilVAATApplicationControl23 =
      edInfantilVAATApplicationControl23.map((item) => {
        const indicadorArt212 =
          item.indicadoresArt212.find(
            (indicadorArt212) =>
              indicadorArt212.tipo ===
              IndicadoresArt212Tipos23.PROPORCAO_50_PORCENTO_FUNDEB_VAAT_EDUCACAO_INFANTIL,
          )?.valorAplicado || 0;

        const receitaItem =
          item.receita.find(
            (receita) =>
              receita.tipo ===
              ItemReceitaTipos23.FUNDEB_COMPLEMENTACAO_DA_UNIAO_VAAT,
          )?.receitasRealizadasAteBimestre || 0;

        // Calcular a porcentagem 16E / 6.3C * 100
        const percentage =
          receitaItem !== 0 ? (indicadorArt212 / receitaItem) * 100 : 0;

        return {
          ano: item.ano,
          codigoMunicipio: item.codigoMunicipio,
          indicador: [
            {
              tipo: 'APLICACAO_VAAT_EDUCACAO_INFANTIL',
              valor: parseFloat(percentage.toFixed(2)),
            },
          ],
        };
      });

    let groupedData = {};

    if (groupType === GroupType.MUNICIPIO) {
      groupedData = this.groupByMunicipio([
        {
          key: 'edInfantilVAATApplicationControl2122',
          data: modifiedEdInfantilVAATApplicationControl2122,
        },
        {
          key: 'edInfantilVAATApplicationControl23',
          data: modifiedEdInfantilVAATApplicationControl23,
        },
      ]);
    } else if (groupType === GroupType.ANO) {
      groupedData = this.groupByAno([
        {
          key: 'edInfantilVAATApplicationControl2122',
          data: modifiedEdInfantilVAATApplicationControl2122,
        },
        {
          key: 'edInfantilVAATApplicationControl23',
          data: modifiedEdInfantilVAATApplicationControl23,
        },
      ]);
    }

    if (pagination) {
      const { page, limit } = pagination;
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;

      // Apply pagination to the grouped results
      if (groupType === GroupType.MUNICIPIO) {
        const municipios = Object.keys(groupedData);
        const paginatedMunicipios = municipios.slice(startIndex, endIndex);

        const paginatedResults = {
          data: {},
          pagination: {
            total: municipios.length,
            page,
            limit,
            totalPages: Math.ceil(municipios.length / limit),
          },
        };

        paginatedMunicipios.forEach((municipio) => {
          paginatedResults.data[municipio] = groupedData[municipio];
        });

        return paginatedResults;
      } else if (groupType === GroupType.ANO) {
        const anos = Object.keys(groupedData);
        const paginatedAnos = anos.slice(startIndex, endIndex);

        const paginatedResults = {
          data: {},
          pagination: {
            total: anos.length,
            page,
            limit,
            totalPages: Math.ceil(anos.length / limit),
          },
        };

        paginatedAnos.forEach((ano) => {
          paginatedResults.data[ano] = groupedData[ano];
        });

        return paginatedResults;
      }
    }

    return groupedData;
  }

  async despesaCapitalVAATApplicationControl(
    groupType: GroupType,
    filters?: object,
    pagination?: PaginationParams,
  ) {
    const despesaCapitalVAATApplicationControl2122 =
      await this.prismaService.relatorioMunicipal21.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          aplicacaoDespesasFinsLimiteMinimoConstitucional: {
            where: {
              tipo: {
                in: [
                  AplicacaoDespesasFinsLimiteMinimoConstitucionalTipos21.TOTAL_DESPESAS_PARA_FINS_LIMITE,
                ],
              },
            },
            select: {
              valor: true,
              tipo: true,
            },
          },
          receita: {
            where: {
              tipo: {
                in: [ItemReceitaTipos21.TOTAL_RECEITA_IMPOSTOS],
              },
            },
            select: {
              receitasRealizadaAteBimestre: true,
              tipo: true,
            },
          },
        },
        where: {
          ...filters,
        },
      });

    const despesaCapitalVAATApplicationControl23 =
      await this.prismaService.relatorioMunicipal23.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          indicadoresArt212: {
            where: {
              tipo: {
                in: [
                  IndicadoresArt212Tipos23.MINIMO_15_PORCENTO_FUNDEB_VAAT_DESPESAS_CAPITAL,
                ],
              },
            },
            select: {
              valorAplicado: true,
              tipo: true,
            },
          },
          receita: {
            where: {
              tipo: {
                in: [ItemReceitaTipos23.FUNDEB_COMPLEMENTACAO_DA_UNIAO_VAAT],
              },
            },
            select: {
              receitasRealizadasAteBimestre: true,
              tipo: true,
            },
          },
        },
        where: {
          ...filters,
        },
      });

    const modifiedDespesaCapitalVAATApplicationControl2122 =
      despesaCapitalVAATApplicationControl2122.map((item) => {
        const aplicacaoItem =
          item.aplicacaoDespesasFinsLimiteMinimoConstitucional.find(
            (aplicacao) =>
              aplicacao.tipo ===
              AplicacaoDespesasFinsLimiteMinimoConstitucionalTipos21.TOTAL_DESPESAS_PARA_FINS_LIMITE,
          )?.valor || 0;

        const receitaItem =
          item.receita.find(
            (receita) =>
              receita.tipo === ItemReceitaTipos21.TOTAL_RECEITA_IMPOSTOS,
          )?.receitasRealizadaAteBimestre || 0;

        // Calcular a porcentagem 32B / 3C * 100
        const percentage =
          receitaItem !== 0 ? (aplicacaoItem / receitaItem) * 100 : 0;

        return {
          ano: item.ano,
          codigoMunicipio: item.codigoMunicipio,
          indicador: [
            {
              tipo: 'APLICACAO_VAAT_DESPESA_CAPITAL',
              valor: parseFloat(percentage.toFixed(2)),
            },
          ],
        };
      });

    const modifiedDespesaCapitalVAATApplicationControl23 =
      despesaCapitalVAATApplicationControl23.map((item) => {
        const indicadorArt212 =
          item.indicadoresArt212.find(
            (indicadorArt212) =>
              indicadorArt212.tipo ===
              IndicadoresArt212Tipos23.MINIMO_15_PORCENTO_FUNDEB_VAAT_DESPESAS_CAPITAL,
          )?.valorAplicado || 0;

        const receitaItem =
          item.receita.find(
            (receita) =>
              receita.tipo ===
              ItemReceitaTipos23.FUNDEB_COMPLEMENTACAO_DA_UNIAO_VAAT,
          )?.receitasRealizadasAteBimestre || 0;

        // Calcular a porcentagem 17E / 6.3C * 100
        const percentage =
          receitaItem !== 0 ? (indicadorArt212 / receitaItem) * 100 : 0;

        return {
          ano: item.ano,
          codigoMunicipio: item.codigoMunicipio,
          indicador: [
            {
              tipo: 'APLICACAO_VAAT_DESPESA_CAPITAL',
              valor: parseFloat(percentage.toFixed(2)),
            },
          ],
        };
      });

    let groupedData = {};

    if (groupType === GroupType.MUNICIPIO) {
      groupedData = this.groupByMunicipio([
        {
          key: 'despesaCapitalVAATApplicationControl2122',
          data: modifiedDespesaCapitalVAATApplicationControl2122,
        },
        {
          key: 'despesaCapitalVAATApplicationControl23',
          data: modifiedDespesaCapitalVAATApplicationControl23,
        },
      ]);
    } else if (groupType === GroupType.ANO) {
      groupedData = this.groupByAno([
        {
          key: 'despesaCapitalVAATApplicationControl2122',
          data: modifiedDespesaCapitalVAATApplicationControl2122,
        },
        {
          key: 'despesaCapitalVAATApplicationControl23',
          data: modifiedDespesaCapitalVAATApplicationControl23,
        },
      ]);
    }

    if (pagination) {
      const { page, limit } = pagination;
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;

      // Apply pagination to the grouped results
      if (groupType === GroupType.MUNICIPIO) {
        const municipios = Object.keys(groupedData);
        const paginatedMunicipios = municipios.slice(startIndex, endIndex);

        const paginatedResults = {
          data: {},
          pagination: {
            total: municipios.length,
            page,
            limit,
            totalPages: Math.ceil(municipios.length / limit),
          },
        };

        paginatedMunicipios.forEach((municipio) => {
          paginatedResults.data[municipio] = groupedData[municipio];
        });

        return paginatedResults;
      } else if (groupType === GroupType.ANO) {
        const anos = Object.keys(groupedData);
        const paginatedAnos = anos.slice(startIndex, endIndex);

        const paginatedResults = {
          data: {},
          pagination: {
            total: anos.length,
            page,
            limit,
            totalPages: Math.ceil(anos.length / limit),
          },
        };

        paginatedAnos.forEach((ano) => {
          paginatedResults.data[ano] = groupedData[ano];
        });

        return paginatedResults;
      }
    }

    return groupedData;
  }

  private groupByMunicipio(
    applicationControlDataSets: { key: string; data: any[] }[],
  ): object {
    const groupedApplicationControls = {};

    applicationControlDataSets.forEach(({ key, data }) => {
      data.forEach((applicationControl) => {
        const { codigoMunicipio } = applicationControl;
        if (!groupedApplicationControls[codigoMunicipio]) {
          groupedApplicationControls[codigoMunicipio] = {};
        }
        if (!groupedApplicationControls[codigoMunicipio][key]) {
          groupedApplicationControls[codigoMunicipio][key] = [];
        }
        groupedApplicationControls[codigoMunicipio][key].push(
          applicationControl,
        );
      });
    });

    return groupedApplicationControls;
  }

  private groupByAno(
    applicationControlDataSets: { key: string; data: any[] }[],
  ): object {
    const groupedApplicationControls: {
      [ano: string]: { [key: string]: any[] };
    } = {};

    applicationControlDataSets.forEach(({ key, data }) => {
      data.forEach((applicationControl) => {
        const { ano } = applicationControl;
        if (!groupedApplicationControls[ano]) {
          groupedApplicationControls[ano] = {};
        }
        if (!groupedApplicationControls[ano][key]) {
          groupedApplicationControls[ano][key] = [];
        }
        groupedApplicationControls[ano][key].push(applicationControl);
      });
    });

    return groupedApplicationControls;
  }
}
