import { Injectable } from '@nestjs/common';
import {
  ApuracaoLimiteMinimoConstitucionalTipos21,
  ApuracaoLimiteMinimoConstitucionalTipos23,
  DeducoesAdicoesParaFinsLimiteConstitucionalTipo0708,
  DeducoesParaFinsDeLimitesConstitucionalTipo0912,
  DeducoesParaFinsDeLimitesConstitucionalTipo1314,
  DeducoesParaFinsDeLimitesConstitucionalTipo1516,
  DeducoesParaFinsDeLimitesConstitucionalTipo1718,
  DeducoesParaFinsDeLimitesConstitucionalTipo1920,
  ItemDespesaTipos0708,
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
import { groupByAno, groupByMunicipio } from 'src/utils/groupFunctions';
import { IndicatorsFiltersDto } from '../dto/indicators.dto';

@Injectable()
export class RpebCompositionService {
  constructor(private readonly prismaService: PrismaService) {}

  async fundebParticipationMde(
    groupType: GroupType,
    filters: IndicatorsFiltersDto,
    anoInicial?: number,
    anoFinal?: number,
    pagination?: PaginationParams,
  ) {
    const revenues0708 =
      await this.prismaService.relatorioMunicipal0708.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
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
        },
        where: {
          ...filters,
        },
      });

    // Buscar dados 2009-2014
    const revenues0914 = [
      ...(await this.prismaService.relatorioMunicipal0912.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
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
        },
        where: {
          ...filters,
        },
      })),
      ...(await this.prismaService.relatorioMunicipal1314.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
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
        },
        where: {
          ...filters,
        },
      })),
    ];

    // Buscar dados 2015-2020
    const revenues1520 = [
      ...(await this.prismaService.relatorioMunicipal1516.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
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
        },
        where: {
          ...filters,
        },
      })),
      ...(await this.prismaService.relatorioMunicipal1718.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
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
        },
        where: {
          ...filters,
        },
      })),
      ...(await this.prismaService.relatorioMunicipal1920.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
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
        },
        where: {
          ...filters,
        },
      })),
    ];

    // Buscar dados 2021-2023
    const revenues2122 = await this.prismaService.relatorioMunicipal21.findMany(
      {
        select: {
          ano: true,
          codigoMunicipio: true,
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
          apuracaoLimiteMinimoConstitucional: {
            where: {
              tipo: {
                in: [
                  ApuracaoLimiteMinimoConstitucionalTipos21.APLICACAO_EM_MDE_SOBRE_RECEITA_DE_IMPOSTOS,
                ],
              },
            },
            select: {
              valorAplicado: true,
              tipo: true,
            },
          },
        },
        where: {
          ...filters,
        },
      },
    );

    const revenues23 = await this.prismaService.relatorioMunicipal23.findMany({
      select: {
        ano: true,
        codigoMunicipio: true,
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
      },
      where: {
        ...filters,
      },
    });

    // Processar dados 2007-2008
    const modifiedRevenues0708 = revenues0708.map((item) => {
      const fundebRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.RECEITAS_RECEBIDAS_DO_FUNDEB,
        )?.receitasRealizadasNoAno || 0;

      const totalMde =
        item.despesa.find(
          (d) =>
            d.tipo ===
            ItemDespesaTipos0708.TOTAL_DESPESAS_COM_ACOES_TIPICAS_MDE,
        )?.despesasEmpenhadasNoAno || 0;

      const deducoes =
        item.deducoesAdicoesParaFinsLimiteConstitucional.find(
          (d) =>
            d.tipo ===
            DeducoesAdicoesParaFinsLimiteConstitucionalTipo0708.TOTAL_DE_DEDUCOES_ADICOES_PARA_FINS_DE_LIMITE_CONSTITUCIONAL,
        )?.valor || 0;

      const percentage =
        totalMde - deducoes !== 0
          ? (fundebRevenue / (totalMde - deducoes)) * 100
          : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'PARTICIPACAO_FUNDEB_MDE',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    // Processar dados 2009-2014
    const modifiedRevenues0914 = revenues0914.map((item) => {
      const fundebRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.RECEITAS_RECEBIDAS_DO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const totalDespesas =
        item.deducoesParaFinsDeLimitesConstitucional.find(
          (d) =>
            d.tipo ===
            DeducoesParaFinsDeLimitesConstitucionalTipo0912.TOTAL_DE_DESPESAS_PARA_FINS_DE_LIMITE,
        )?.valor || 0;

      const percentage =
        totalDespesas !== 0 ? (fundebRevenue / totalDespesas) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'PARTICIPACAO_FUNDEB_MDE',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    // Processar dados 2015-2020
    const modifiedRevenues1520 = revenues1520.map((item) => {
      const fundebRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.RECEITAS_RECEBIDAS_DO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const totalDespesas =
        item.deducoesParaFinsDeLimitesConstitucional.find(
          (d) =>
            d.tipo ===
            DeducoesParaFinsDeLimitesConstitucionalTipo1516.TOTAL_DE_DESPESAS_PARA_FINS_DE_LIMITE,
        )?.valor || 0;

      const percentage =
        totalDespesas !== 0 ? (fundebRevenue / totalDespesas) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'PARTICIPACAO_FUNDEB_MDE',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    // Processar dados 2021-2023
    const modifiedRevenues2123 = [
      ...revenues2122.map((item) => {
        const fundebRevenue =
          item.receita.find(
            (r) => r.tipo === ItemReceitaTipos21.RECEITAS_RECEBIDAS_FUNDEB,
          )?.receitasRealizadaAteBimestre || 0;

        const valorAplicado =
          item.apuracaoLimiteMinimoConstitucional.find(
            (a) =>
              a.tipo ===
              ApuracaoLimiteMinimoConstitucionalTipos21.APLICACAO_EM_MDE_SOBRE_RECEITA_DE_IMPOSTOS,
          )?.valorAplicado || 0;

        const percentage =
          valorAplicado !== 0 ? (fundebRevenue / valorAplicado) * 100 : 0;

        return {
          ano: item.ano,
          codigoMunicipio: item.codigoMunicipio,
          indicador: [
            {
              tipo: 'PARTICIPACAO_FUNDEB_MDE',
              valor: parseFloat(percentage.toFixed(2)),
            },
          ],
        };
      }),
      ...revenues23.map((item) => {
        const fundebRevenue =
          item.receita.find(
            (r) =>
              r.tipo ===
              ItemReceitaTipos23.TOTAL_DAS_RECEITAS_DO_FUNDEB_RECEBIDAS,
          )?.receitasRealizadasAteBimestre || 0;

        const valorAplicado =
          item.apuracaoLimiteMinimoConstitucional.find(
            (a) =>
              a.tipo ===
              ApuracaoLimiteMinimoConstitucionalTipos23.APLICACAO_EM_MDE_SOBRE_RECEITA_LIQUIDA_DE_IMPOSTOS,
          )?.valorAplicado || 0;

        const percentage =
          valorAplicado !== 0 ? (fundebRevenue / valorAplicado) * 100 : 0;

        return {
          ano: item.ano,
          codigoMunicipio: item.codigoMunicipio,
          indicador: [
            {
              tipo: 'PARTICIPACAO_FUNDEB_MDE',
              valor: parseFloat(percentage.toFixed(2)),
            },
          ],
        };
      }),
    ];

    let groupedData = {};

    if (groupType === GroupType.MUNICIPIO) {
      groupedData = groupByMunicipio([
        { key: 'revenues0708', data: modifiedRevenues0708 },
        { key: 'revenues0914', data: modifiedRevenues0914 },
        { key: 'revenues1520', data: modifiedRevenues1520 },
        { key: 'revenues2123', data: modifiedRevenues2123 },
      ]);
    } else if (groupType === GroupType.ANO) {
      groupedData = groupByAno([
        { key: 'revenues0708', data: modifiedRevenues0708 },
        { key: 'revenues0914', data: modifiedRevenues0914 },
        { key: 'revenues1520', data: modifiedRevenues1520 },
        { key: 'revenues2123', data: modifiedRevenues2123 },
      ]);
    }

    // Aplicar filtro por ano se especificado
    if (anoInicial || anoFinal) {
      if (groupType === GroupType.MUNICIPIO) {
        Object.keys(groupedData).forEach((municipio) => {
          Object.keys(groupedData[municipio]).forEach((periodo) => {
            groupedData[municipio][periodo] = groupedData[municipio][
              periodo
            ].filter((item) => {
              const ano = parseInt(item.ano);
              if (anoInicial && ano < anoInicial) return false;
              if (anoFinal && ano > anoFinal) return false;
              return true;
            });
          });
        });
      } else if (groupType === GroupType.ANO) {
        Object.keys(groupedData).forEach((ano) => {
          const anoNum = parseInt(ano);
          if (anoInicial && anoNum < anoInicial) {
            delete groupedData[ano];
          } else if (anoFinal && anoNum > anoFinal) {
            delete groupedData[ano];
          }
        });
      }
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

  async resultadoLiquidoFundeb(
    groupType: GroupType,
    filters: IndicatorsFiltersDto,
    anoInicial?: number,
    anoFinal?: number,
    pagination?: PaginationParams,
  ) {
    const revenues0708 =
      await this.prismaService.relatorioMunicipal0708.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos0708.RECEITAS_RECEBIDAS_DO_FUNDEB,
                  ItemReceitaTipos0708.RESULTADO_LIQUIDO_TRANSFERENCIAS_FUNDEB,
                ],
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

    const revenues0914 = [
      ...(await this.prismaService.relatorioMunicipal0912.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos0912.RECEITAS_RECEBIDAS_DO_FUNDEB,
                  ItemReceitaTipos0912.RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB,
                ],
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
      })),
      ...(await this.prismaService.relatorioMunicipal1314.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1314.RECEITAS_RECEBIDAS_DO_FUNDEB,
                  ItemReceitaTipos1314.RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB,
                ],
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
      })),
    ];

    const revenues1520 = [
      ...(await this.prismaService.relatorioMunicipal1516.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1516.RECEITAS_RECEBIDAS_DO_FUNDEB,
                  ItemReceitaTipos1516.RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB,
                ],
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
      })),
      ...(await this.prismaService.relatorioMunicipal1718.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1718.RECEITAS_RECEBIDAS_DO_FUNDEB,
                  ItemReceitaTipos1718.RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB,
                ],
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
      })),
      ...(await this.prismaService.relatorioMunicipal1920.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1920.RECEITAS_RECEBIDAS_DO_FUNDEB,
                  ItemReceitaTipos1920.RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB,
                ],
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
      })),
    ];

    const revenues2123 = [
      ...(await this.prismaService.relatorioMunicipal21.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos21.RECEITAS_RECEBIDAS_FUNDEB,
                  ItemReceitaTipos21.RESULTADO_LIQUIDO_TRANSFERENCIAS_FUNDEB,
                ],
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
      })),
      ...(await this.prismaService.relatorioMunicipal23.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos23.TOTAL_DAS_RECEITAS_DO_FUNDEB_RECEBIDAS,
                  ItemReceitaTipos23.RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB,
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
      })),
    ];

    const modifiedRevenues0708 = revenues0708.map((item) => {
      const recebidas =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.RECEITAS_RECEBIDAS_DO_FUNDEB,
        )?.receitasRealizadasNoAno || 0;

      const resultado =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos0708.RESULTADO_LIQUIDO_TRANSFERENCIAS_FUNDEB,
        )?.receitasRealizadasNoAno || 0;

      const percentage = recebidas !== 0 ? (resultado / recebidas) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'RESULTADO_LIQUIDO_FUNDEB',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues0914 = revenues0914.map((item) => {
      const recebidas =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.RECEITAS_RECEBIDAS_DO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const resultado =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos0912.RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage = recebidas !== 0 ? (resultado / recebidas) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'RESULTADO_LIQUIDO_FUNDEB',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues1520 = revenues1520.map((item) => {
      const recebidas =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.RECEITAS_RECEBIDAS_DO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const resultado =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos1516.RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage = recebidas !== 0 ? (resultado / recebidas) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'RESULTADO_LIQUIDO_FUNDEB',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues2123 = revenues2123.map((item) => {
      const recebidas =
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos21.RECEITAS_RECEBIDAS_FUNDEB ||
            r.tipo ===
              ItemReceitaTipos23.TOTAL_DAS_RECEITAS_DO_FUNDEB_RECEBIDAS,
        )?.['receitasRealizadaAteBimestre'] ||
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos21.RECEITAS_RECEBIDAS_FUNDEB ||
            r.tipo ===
              ItemReceitaTipos23.TOTAL_DAS_RECEITAS_DO_FUNDEB_RECEBIDAS,
        )?.['receitasRealizadasAteBimestre'] ||
        0;

      const resultado =
        item.receita.find(
          (r) =>
            r.tipo ===
              ItemReceitaTipos21.RESULTADO_LIQUIDO_TRANSFERENCIAS_FUNDEB ||
            r.tipo ===
              ItemReceitaTipos23.RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB,
        )?.['receitasRealizadaAteBimestre'] ||
        item.receita.find(
          (r) =>
            r.tipo ===
              ItemReceitaTipos21.RESULTADO_LIQUIDO_TRANSFERENCIAS_FUNDEB ||
            r.tipo ===
              ItemReceitaTipos23.RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB,
        )?.['receitasRealizadasAteBimestre'] ||
        0;

      const percentage = recebidas !== 0 ? (resultado / recebidas) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'RESULTADO_LIQUIDO_FUNDEB',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    let groupedData = {};

    if (groupType === GroupType.MUNICIPIO) {
      groupedData = groupByMunicipio([
        { key: 'revenues0708', data: modifiedRevenues0708 },
        { key: 'revenues0914', data: modifiedRevenues0914 },
        { key: 'revenues1520', data: modifiedRevenues1520 },
        { key: 'revenues2123', data: modifiedRevenues2123 },
      ]);
    } else if (groupType === GroupType.ANO) {
      groupedData = groupByAno([
        { key: 'revenues0708', data: modifiedRevenues0708 },
        { key: 'revenues0914', data: modifiedRevenues0914 },
        { key: 'revenues1520', data: modifiedRevenues1520 },
        { key: 'revenues2123', data: modifiedRevenues2123 },
      ]);
    }

    // Aplicar filtro por ano se especificado
    if (anoInicial || anoFinal) {
      if (groupType === GroupType.MUNICIPIO) {
        Object.keys(groupedData).forEach((municipio) => {
          Object.keys(groupedData[municipio]).forEach((periodo) => {
            groupedData[municipio][periodo] = groupedData[municipio][
              periodo
            ].filter((item) => {
              const ano = parseInt(item.ano);
              if (anoInicial && ano < anoInicial) return false;
              if (anoFinal && ano > anoFinal) return false;
              return true;
            });
          });
        });
      } else if (groupType === GroupType.ANO) {
        Object.keys(groupedData).forEach((ano) => {
          const anoNum = parseInt(ano);
          if (anoInicial && anoNum < anoInicial) {
            delete groupedData[ano];
          } else if (anoFinal && anoNum > anoFinal) {
            delete groupedData[ano];
          }
        });
      }
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

  async participacaoComplementacaoUniao(
    groupType: GroupType,
    filters: IndicatorsFiltersDto,
    anoInicial?: number,
    anoFinal?: number,
    pagination?: PaginationParams,
  ) {
    const revenues0708 =
      await this.prismaService.relatorioMunicipal0708.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos0708.COMPLEMENTACAO_UNIAO_FUNDEB,
                  ItemReceitaTipos0708.RECEITAS_RECEBIDAS_DO_FUNDEB,
                ],
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

    const revenues0914 = [
      ...(await this.prismaService.relatorioMunicipal0912.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos0912.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
                  ItemReceitaTipos0912.RECEITAS_RECEBIDAS_DO_FUNDEB,
                ],
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
      })),
      ...(await this.prismaService.relatorioMunicipal1314.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1314.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
                  ItemReceitaTipos1314.RECEITAS_RECEBIDAS_DO_FUNDEB,
                ],
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
      })),
    ];

    const revenues1520 = [
      ...(await this.prismaService.relatorioMunicipal1516.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1516.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
                  ItemReceitaTipos1516.RECEITAS_RECEBIDAS_DO_FUNDEB,
                ],
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
      })),
      ...(await this.prismaService.relatorioMunicipal1718.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1718.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
                  ItemReceitaTipos1718.RECEITAS_RECEBIDAS_DO_FUNDEB,
                ],
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
      })),
      ...(await this.prismaService.relatorioMunicipal1920.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1920.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
                  ItemReceitaTipos1920.RECEITAS_RECEBIDAS_DO_FUNDEB,
                ],
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
      })),
    ];

    const revenues2122 = await this.prismaService.relatorioMunicipal21.findMany(
      {
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos21.FUNDEB_COMPLEMENTACAO_UNIAO_VAAF,
                  ItemReceitaTipos21.FUNDEB_COMPLEMENTACAO_UNIAO_VAAT,
                  ItemReceitaTipos21.RECEITAS_RECEBIDAS_FUNDEB,
                ],
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
      },
    );

    const revenues23 = await this.prismaService.relatorioMunicipal23.findMany({
      select: {
        ano: true,
        codigoMunicipio: true,
        receita: {
          where: {
            tipo: {
              in: [
                ItemReceitaTipos23.FUNDEB_COMPLEMENTACAO_DA_UNIAO_VAAF,
                ItemReceitaTipos23.FUNDEB_COMPLEMENTACAO_DA_UNIAO_VAAT,
                ItemReceitaTipos23.FUNDEB_COMPLEMENTACAO_DA_UNIAO_VAAR,
                ItemReceitaTipos23.TOTAL_DAS_RECEITAS_DO_FUNDEB_RECEBIDAS,
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

    const modifiedRevenues0708 = revenues0708.map((item) => {
      const complementacao =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.COMPLEMENTACAO_UNIAO_FUNDEB,
        )?.receitasRealizadasNoAno || 0;

      const totalFundeb =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.RECEITAS_RECEBIDAS_DO_FUNDEB,
        )?.receitasRealizadasNoAno || 0;

      const percentage =
        totalFundeb !== 0 ? (complementacao / totalFundeb) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'PARTICIPACAO_COMPLEMENTACAO_UNIAO',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues0914 = revenues0914.map((item) => {
      const complementacao =
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos0912.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const totalFundeb =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.RECEITAS_RECEBIDAS_DO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage =
        totalFundeb !== 0 ? (complementacao / totalFundeb) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'PARTICIPACAO_COMPLEMENTACAO_UNIAO',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues1520 = revenues1520.map((item) => {
      const complementacao =
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos1516.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const totalFundeb =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.RECEITAS_RECEBIDAS_DO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage =
        totalFundeb !== 0 ? (complementacao / totalFundeb) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'PARTICIPACAO_COMPLEMENTACAO_UNIAO',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues2122 = revenues2122.map((item) => {
      const complementacaoVAAF =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos21.FUNDEB_COMPLEMENTACAO_UNIAO_VAAF,
        )?.receitasRealizadaAteBimestre || 0;

      const complementacaoVAAT =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos21.FUNDEB_COMPLEMENTACAO_UNIAO_VAAT,
        )?.receitasRealizadaAteBimestre || 0;

      const totalFundeb =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos21.RECEITAS_RECEBIDAS_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const totalComplementacao = complementacaoVAAF + complementacaoVAAT;

      const percentage =
        totalFundeb !== 0 ? (totalComplementacao / totalFundeb) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'PARTICIPACAO_COMPLEMENTACAO_UNIAO',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues23 = revenues23.map((item) => {
      const complementacaoVAAF =
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos23.FUNDEB_COMPLEMENTACAO_DA_UNIAO_VAAF,
        )?.receitasRealizadasAteBimestre || 0;

      const complementacaoVAAT =
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos23.FUNDEB_COMPLEMENTACAO_DA_UNIAO_VAAT,
        )?.receitasRealizadasAteBimestre || 0;

      const complementacaoVAAR =
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos23.FUNDEB_COMPLEMENTACAO_DA_UNIAO_VAAR,
        )?.receitasRealizadasAteBimestre || 0;

      const totalFundeb =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos23.TOTAL_DAS_RECEITAS_DO_FUNDEB_RECEBIDAS,
        )?.receitasRealizadasAteBimestre || 0;

      const totalComplementacao =
        complementacaoVAAF + complementacaoVAAT + complementacaoVAAR;

      const percentage =
        totalFundeb !== 0 ? (totalComplementacao / totalFundeb) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'PARTICIPACAO_COMPLEMENTACAO_UNIAO',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    let groupedData = {};

    if (groupType === GroupType.MUNICIPIO) {
      groupedData = groupByMunicipio([
        { key: 'revenues0708', data: modifiedRevenues0708 },
        { key: 'revenues0914', data: modifiedRevenues0914 },
        { key: 'revenues1520', data: modifiedRevenues1520 },
        { key: 'revenues2122', data: modifiedRevenues2122 },
        { key: 'revenues23', data: modifiedRevenues23 },
      ]);
    } else if (groupType === GroupType.ANO) {
      groupedData = groupByAno([
        { key: 'revenues0708', data: modifiedRevenues0708 },
        { key: 'revenues0914', data: modifiedRevenues0914 },
        { key: 'revenues1520', data: modifiedRevenues1520 },
        { key: 'revenues2122', data: modifiedRevenues2122 },
        { key: 'revenues23', data: modifiedRevenues23 },
      ]);
    }

    // Aplicar filtro por ano se especificado
    if (anoInicial || anoFinal) {
      if (groupType === GroupType.MUNICIPIO) {
        Object.keys(groupedData).forEach((municipio) => {
          Object.keys(groupedData[municipio]).forEach((periodo) => {
            groupedData[municipio][periodo] = groupedData[municipio][
              periodo
            ].filter((item) => {
              const ano = parseInt(item.ano);
              if (anoInicial && ano < anoInicial) return false;
              if (anoFinal && ano > anoFinal) return false;
              return true;
            });
          });
        });
      } else if (groupType === GroupType.ANO) {
        Object.keys(groupedData).forEach((ano) => {
          const anoNum = parseInt(ano);
          if (anoInicial && anoNum < anoInicial) {
            delete groupedData[ano];
          } else if (anoFinal && anoNum > anoFinal) {
            delete groupedData[ano];
          }
        });
      }
    }

    if (pagination) {
      const { page, limit } = pagination;
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;

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

  async participacaoReceitasAdicionaisComposition(
    groupType: GroupType,
    filters?: object,
    anoInicial?: number,
    anoFinal?: number,
    pagination?: PaginationParams,
  ) {
    // Buscar dados 2007-2008
    const revenues0708 =
      await this.prismaService.relatorioMunicipal0708.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos0708.TOTAL_OUTRAS_RECEITAS_DESTINADAS_ENSINO,
                  ItemReceitaTipos0708.IMPOSTOS_E_TRANSFERENCIAS_DESTINADAS_MDE,
                ],
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

    // Buscar dados 2009-2014
    const revenues0914 = [
      ...(await this.prismaService.relatorioMunicipal0912.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos0912.TOTAL_RECEITAS_ADICIONAIS_FINANCIAMENTO_ENSINO,
                  ItemReceitaTipos0912.TOTAL_RECEITA_IMPOSTOS,
                ],
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
      })),
      ...(await this.prismaService.relatorioMunicipal1314.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1314.TOTAL_RECEITAS_ADICIONAIS_FINANCIAMENTO_ENSINO,
                  ItemReceitaTipos1314.TOTAL_RECEITA_IMPOSTOS,
                ],
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
      })),
    ];

    // Buscar dados 2015-2020
    const revenues1520 = [
      ...(await this.prismaService.relatorioMunicipal1516.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1516.TOTAL_RECEITAS_ADICIONAIS_FINANCIAMENTO_ENSINO,
                  ItemReceitaTipos1516.TOTAL_RECEITA_IMPOSTOS,
                ],
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
      })),
      ...(await this.prismaService.relatorioMunicipal1718.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1718.TOTAL_RECEITAS_ADICIONAIS_FINANCIAMENTO_ENSINO,
                  ItemReceitaTipos1718.TOTAL_RECEITA_IMPOSTOS,
                ],
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
      })),
      ...(await this.prismaService.relatorioMunicipal1920.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1920.TOTAL_RECEITAS_ADICIONAIS_FINANCIAMENTO_ENSINO,
                  ItemReceitaTipos1920.TOTAL_RECEITA_IMPOSTOS,
                ],
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
      })),
    ];

    // Buscar dados 2021-2023
    const revenues2123 = [
      ...(await this.prismaService.relatorioMunicipal21.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [ItemReceitaTipos21.FIN_ENSINO_TOTAL_RECEITAS_ADICIONAIS],
              },
            },
            select: {
              receitasRealizadaAteBimestre: true,
              tipo: true,
            },
          },
          apuracaoLimiteMinimoConstitucional: {
            where: {
              tipo: {
                in: [
                  ApuracaoLimiteMinimoConstitucionalTipos21.APLICACAO_EM_MDE_SOBRE_RECEITA_DE_IMPOSTOS,
                ],
              },
            },
            select: {
              valorExigido: true,
              tipo: true,
            },
          },
        },
        where: {
          ...filters,
        },
      })),
      ...(await this.prismaService.relatorioMunicipal23.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos23.TOTAL_DAS_RECEITAS_ADICIONAIS_PARA_FINANCIAMENTO_DO_ENSINO,
                ],
              },
            },
            select: {
              receitasRealizadasAteBimestre: true,
              tipo: true,
            },
          },
          apuracaoLimiteMinimoConstitucional: {
            where: {
              tipo: {
                in: [
                  ApuracaoLimiteMinimoConstitucionalTipos23.APLICACAO_EM_MDE_SOBRE_RECEITA_LIQUIDA_DE_IMPOSTOS,
                ],
              },
            },
            select: {
              valorExigido: true,
              tipo: true,
            },
          },
        },
        where: {
          ...filters,
        },
      })),
    ];

    console.log(revenues2123);

    // Processar os dados
    const modifiedRevenues0708 = revenues0708.map((item) => {
      const receitasAdicionais =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos0708.TOTAL_OUTRAS_RECEITAS_DESTINADAS_ENSINO,
        )?.receitasRealizadasNoAno || 0;

      const vinculacaoMinima =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos0708.IMPOSTOS_E_TRANSFERENCIAS_DESTINADAS_MDE,
        )?.receitasRealizadasNoAno || 0;

      const percentage = vinculacaoMinima
        ? (receitasAdicionais / vinculacaoMinima) * 100
        : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'PARTICIPACAO_RECEITAS_ADICIONAIS',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues0914 = revenues0914.map((item) => {
      const receitasAdicionais =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos0912.TOTAL_RECEITAS_ADICIONAIS_FINANCIAMENTO_ENSINO,
        )?.receitasRealizadaAteBimestre || 0;

      const totalReceita =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const vinculacaoMinima = totalReceita * 0.25; // 25% do total
      const percentage = vinculacaoMinima
        ? (receitasAdicionais / vinculacaoMinima) * 100
        : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'PARTICIPACAO_RECEITAS_ADICIONAIS',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues1520 = revenues1520.map((item) => {
      const receitasAdicionais =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos1516.TOTAL_RECEITAS_ADICIONAIS_FINANCIAMENTO_ENSINO,
        )?.receitasRealizadaAteBimestre || 0;

      const totalReceita =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const vinculacaoMinima = totalReceita * 0.25; // 25% do total
      const percentage = vinculacaoMinima
        ? (receitasAdicionais / vinculacaoMinima) * 100
        : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'PARTICIPACAO_RECEITAS_ADICIONAIS',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues2123 = revenues2123.map((item) => {
      const receitasAdicionais =
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos21.FIN_ENSINO_TOTAL_RECEITAS_ADICIONAIS,
        )?.['receitasRealizadaAteBimestre'] ||
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos23.TOTAL_DAS_RECEITAS_ADICIONAIS_PARA_FINANCIAMENTO_DO_ENSINO,
        )?.['receitasRealizadasAteBimestre'] ||
        0;

      const vinculacaoMinima =
        item.apuracaoLimiteMinimoConstitucional.find(
          (r) =>
            r.tipo ===
            ApuracaoLimiteMinimoConstitucionalTipos21.APLICACAO_EM_MDE_SOBRE_RECEITA_DE_IMPOSTOS,
        )?.['valorExigido'] ||
        item.apuracaoLimiteMinimoConstitucional.find(
          (r) =>
            r.tipo ===
            ApuracaoLimiteMinimoConstitucionalTipos23.APLICACAO_EM_MDE_SOBRE_RECEITA_LIQUIDA_DE_IMPOSTOS,
        )?.['valorExigido'] ||
        0;

      const percentage = vinculacaoMinima
        ? (receitasAdicionais / vinculacaoMinima) * 100
        : 0;

      console.log(
        item.codigoMunicipio,
        receitasAdicionais,
        vinculacaoMinima,
        percentage,
      );

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'PARTICIPACAO_RECEITAS_ADICIONAIS',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    let groupedData = {};

    if (groupType === GroupType.MUNICIPIO) {
      groupedData = groupByMunicipio([
        { key: 'revenues0708', data: modifiedRevenues0708 },
        { key: 'revenues0914', data: modifiedRevenues0914 },
        { key: 'revenues1520', data: modifiedRevenues1520 },
        { key: 'revenues2123', data: modifiedRevenues2123 },
      ]);
    } else if (groupType === GroupType.ANO) {
      groupedData = groupByAno([
        { key: 'revenues0708', data: modifiedRevenues0708 },
        { key: 'revenues0914', data: modifiedRevenues0914 },
        { key: 'revenues1520', data: modifiedRevenues1520 },
        { key: 'revenues2123', data: modifiedRevenues2123 },
      ]);
    }

    // Aplicar filtro por ano se especificado
    if (anoInicial || anoFinal) {
      if (groupType === GroupType.MUNICIPIO) {
        Object.keys(groupedData).forEach((municipio) => {
          Object.keys(groupedData[municipio]).forEach((periodo) => {
            groupedData[municipio][periodo] = groupedData[municipio][
              periodo
            ].filter((item) => {
              const ano = parseInt(item.ano);
              if (anoInicial && ano < anoInicial) return false;
              if (anoFinal && ano > anoFinal) return false;
              return true;
            });
          });
        });
      } else if (groupType === GroupType.ANO) {
        Object.keys(groupedData).forEach((ano) => {
          const anoNum = parseInt(ano);
          if (anoInicial && anoNum < anoInicial) {
            delete groupedData[ano];
          } else if (anoFinal && anoNum > anoFinal) {
            delete groupedData[ano];
          }
        });
      }
    }

    if (pagination) {
      const { page, limit } = pagination;
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;

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
}
