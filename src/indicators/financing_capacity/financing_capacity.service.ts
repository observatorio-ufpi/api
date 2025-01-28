import { Injectable } from '@nestjs/common';
import {
  ApuracaoLimiteMinimoConstitucionalTipos21,
  ApuracaoLimiteMinimoConstitucionalTipos23,
  ItemReceitaTipos0708,
  ItemReceitaTipos0912,
  ItemReceitaTipos1314,
  ItemReceitaTipos1516,
  ItemReceitaTipos1718,
  ItemReceitaTipos1920,
  ItemReceitaTipos21,
  ItemReceitaTipos23,
} from '@prisma/client';
import { GroupType } from 'src/utils/constants';
import { IndicatorsFiltersDto } from '../dto/indicators.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationParams } from 'src/utils/constants';
import { groupByAno, groupByMunicipio } from 'src/utils/groupFunctions';

@Injectable()
export class FinancingCapacityService {
  constructor(private readonly prismaService: PrismaService) {}

  async rpebFinancingCapacity(
    groupType: GroupType,
    filters: IndicatorsFiltersDto,
    pagination: PaginationParams,
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
                  ItemReceitaTipos0708.IMPOSTOS_E_TRANSFERENCIAS_DESTINADAS_MDE,
                  ItemReceitaTipos0708.RECEITAS_DESTINADAS_AO_FUNDEB,
                  ItemReceitaTipos0708.TRANSFERENCIAS_RECURSOS_FUNDEB,
                  ItemReceitaTipos0708.COMPLEMENTACAO_UNIAO_FUNDEB,
                  ItemReceitaTipos0708.TRANSFERENCIAS_SALARIO_EDUCACAO,
                  ItemReceitaTipos0708.OUTRAS_TRANSFERENCIAS_FNDE,
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

    const revenues0912 =
      await this.prismaService.relatorioMunicipal0912.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos0912.TOTAL_RECEITA_IMPOSTOS,
                  ItemReceitaTipos0912.RECEITAS_DESTINADAS_AO_FUNDEB,
                  ItemReceitaTipos0912.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
                  ItemReceitaTipos0912.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
                  ItemReceitaTipos0912.TRANSFERENCIAS_SALARIO_EDUCACAO,
                  ItemReceitaTipos0912.OUTRAS_TRANSFERENCIAS_FNDE,
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
      });

    const revenues1314 =
      await this.prismaService.relatorioMunicipal1314.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1314.TOTAL_RECEITA_IMPOSTOS,
                  ItemReceitaTipos1314.RECEITAS_DESTINADAS_AO_FUNDEB,
                  ItemReceitaTipos1314.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
                  ItemReceitaTipos1314.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
                  ItemReceitaTipos1314.TRANSFERENCIAS_SALARIO_EDUCACAO,
                  ItemReceitaTipos1314.OUTRAS_TRANSFERENCIAS_FNDE,
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
      });

    const revenues1520 = [
      ...(await this.prismaService.relatorioMunicipal1516.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1516.TOTAL_RECEITA_IMPOSTOS,
                  ItemReceitaTipos1516.RECEITAS_DESTINADAS_AO_FUNDEB,
                  ItemReceitaTipos1516.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
                  ItemReceitaTipos1516.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
                  ItemReceitaTipos1516.TRANSFERENCIAS_SALARIO_EDUCACAO,
                  ItemReceitaTipos1516.OUTRAS_TRANSFERENCIAS_FNDE,
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
                  ItemReceitaTipos1718.TOTAL_RECEITA_IMPOSTOS,
                  ItemReceitaTipos1718.RECEITAS_DESTINADAS_AO_FUNDEB,
                  ItemReceitaTipos1718.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
                  ItemReceitaTipos1718.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
                  ItemReceitaTipos1718.TRANSFERENCIAS_SALARIO_EDUCACAO,
                  ItemReceitaTipos1718.OUTRAS_TRANSFERENCIAS_FNDE,
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
                  ItemReceitaTipos1920.TOTAL_RECEITA_IMPOSTOS,
                  ItemReceitaTipos1920.RECEITAS_DESTINADAS_AO_FUNDEB,
                  ItemReceitaTipos1920.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
                  ItemReceitaTipos1920.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
                  ItemReceitaTipos1920.TRANSFERENCIAS_SALARIO_EDUCACAO,
                  ItemReceitaTipos1920.OUTRAS_TRANSFERENCIAS_FNDE,
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
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos21.TOTAL_DESTINADO_FUNDEB,
                  ItemReceitaTipos21.FUNDEB_PRINCIPAL_6_1_1,
                  ItemReceitaTipos21.FUNDEB_PRINCIPAL_6_2_1,
                  ItemReceitaTipos21.FUNDEB_PRINCIPAL_6_3_1,
                  ItemReceitaTipos21.FIN_ENSINO_SALARIO_EDUCACAO,
                  ItemReceitaTipos21.FIN_ENSINO_PDDE,
                  ItemReceitaTipos21.FIN_ENSINO_PNAE,
                  ItemReceitaTipos21.FIN_ENSINO_PNATE,
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
        receita: {
          where: {
            tipo: {
              in: [
                ItemReceitaTipos23.TOTAL_DESTINADO_AO_FUNDEB,
                ItemReceitaTipos23.FUNDEB_PRINCIPAL,
                ItemReceitaTipos23.FUNDEB_VAAF_PRINCIPAL,
                ItemReceitaTipos23.FUNDEB_VAAT_PRINCIPAL,
                ItemReceitaTipos23.FUNDEB_VAAR_PRINCIPAL,
                ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_SALARIO_EDUCACAO,
                ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_PDDE,
                ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_PNAE,
                ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_PNATE,
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
      const impostosMde =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos0708.IMPOSTOS_E_TRANSFERENCIAS_DESTINADAS_MDE,
        )?.receitasRealizadasNoAno || 0;

      const receitasFundeb =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.RECEITAS_DESTINADAS_AO_FUNDEB,
        )?.receitasRealizadasNoAno || 0;

      const transferenciasRecursosFundeb =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.TRANSFERENCIAS_RECURSOS_FUNDEB,
        )?.receitasRealizadasNoAno || 0;

      const complementacaoUniao =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.COMPLEMENTACAO_UNIAO_FUNDEB,
        )?.receitasRealizadasNoAno || 0;

      const salarioEducacao =
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos0708.TRANSFERENCIAS_SALARIO_EDUCACAO,
        )?.receitasRealizadasNoAno || 0;

      const outrasTransferenciasFnde =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.OUTRAS_TRANSFERENCIAS_FNDE,
        )?.receitasRealizadasNoAno || 0;

      const valor =
        impostosMde -
        receitasFundeb +
        transferenciasRecursosFundeb +
        complementacaoUniao +
        salarioEducacao +
        outrasTransferenciasFnde;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'RPEB_FINANCING_CAPACITY',
            valor: parseFloat(valor.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues0912 = revenues0912.map((item) => {
      const totalImpostos =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const receitasFundeb =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.RECEITAS_DESTINADAS_AO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const transferenciasRecursosFundeb =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos0912.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const complementacaoUniao =
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos0912.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const salarioEducacao =
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos0912.TRANSFERENCIAS_SALARIO_EDUCACAO,
        )?.receitasRealizadaAteBimestre || 0;

      const outrasTransferenciasFnde =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.OUTRAS_TRANSFERENCIAS_FNDE,
        )?.receitasRealizadaAteBimestre || 0;

      const valor =
        totalImpostos * 0.25 -
        receitasFundeb +
        transferenciasRecursosFundeb +
        complementacaoUniao +
        salarioEducacao +
        outrasTransferenciasFnde;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'RPEB_FINANCING_CAPACITY',
            valor: parseFloat(valor.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues1314 = revenues1314.map((item) => {
      const totalImpostos =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1314.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const receitasFundeb =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1314.RECEITAS_DESTINADAS_AO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const transferenciasRecursosFundeb =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos1314.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const complementacaoUniao =
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos1314.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const salarioEducacao =
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos1314.TRANSFERENCIAS_SALARIO_EDUCACAO,
        )?.receitasRealizadaAteBimestre || 0;

      const pdde =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1314.TRANSFERENCIAS_DIRETAS_PDDE,
        )?.receitasRealizadaAteBimestre || 0;

      const pnae =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1314.TRANSFERENCIAS_DIRETAS_PNAE,
        )?.receitasRealizadaAteBimestre || 0;

      const pnate =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1314.TRANSFERENCIAS_DIRETAS_PNATE,
        )?.receitasRealizadaAteBimestre || 0;

      const valor =
        totalImpostos * 0.25 -
        receitasFundeb +
        transferenciasRecursosFundeb +
        complementacaoUniao +
        salarioEducacao +
        pdde +
        pnae +
        pnate;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'RPEB_FINANCING_CAPACITY',
            valor: parseFloat(valor.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues1520 = revenues1520.map((item) => {
      const totalImpostos =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const receitasFundeb =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.RECEITAS_DESTINADAS_AO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const transferenciasRecursosFundeb =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos1516.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const complementacaoUniao =
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos1516.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const salarioEducacao =
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos1516.TRANSFERENCIAS_SALARIO_EDUCACAO,
        )?.receitasRealizadaAteBimestre || 0;

      const pdde =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.TRANSFERENCIAS_DIRETAS_PDDE,
        )?.receitasRealizadaAteBimestre || 0;

      const pnae =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.TRANSFERENCIAS_DIRETAS_PNAE,
        )?.receitasRealizadaAteBimestre || 0;

      const pnate =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.TRANSFERENCIAS_DIRETAS_PNATE,
        )?.receitasRealizadaAteBimestre || 0;

      const valor =
        totalImpostos * 0.25 -
        receitasFundeb +
        transferenciasRecursosFundeb +
        complementacaoUniao +
        salarioEducacao +
        pdde +
        pnae +
        pnate;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'RPEB_FINANCING_CAPACITY',
            valor: parseFloat(valor.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues2122 = revenues2122.map((item) => {
      const valorMinimo =
        item.apuracaoLimiteMinimoConstitucional.find(
          (a) =>
            a.tipo ===
            ApuracaoLimiteMinimoConstitucionalTipos21.APLICACAO_EM_MDE_SOBRE_RECEITA_DE_IMPOSTOS,
        )?.valorExigido || 0;

      const deducaoFundeb =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos21.TOTAL_DESTINADO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const fundebPrincipal611 =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos21.FUNDEB_PRINCIPAL_6_1_1,
        )?.receitasRealizadaAteBimestre || 0;

      const fundebPrincipal621 =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos21.FUNDEB_PRINCIPAL_6_2_1,
        )?.receitasRealizadaAteBimestre || 0;

      const fundebPrincipal631 =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos21.FUNDEB_PRINCIPAL_6_3_1,
        )?.receitasRealizadaAteBimestre || 0;

      const salarioEducacao =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos21.FIN_ENSINO_SALARIO_EDUCACAO,
        )?.receitasRealizadaAteBimestre || 0;

      const pdde =
        item.receita.find((r) => r.tipo === ItemReceitaTipos21.FIN_ENSINO_PDDE)
          ?.receitasRealizadaAteBimestre || 0;

      const pnae =
        item.receita.find((r) => r.tipo === ItemReceitaTipos21.FIN_ENSINO_PNAE)
          ?.receitasRealizadaAteBimestre || 0;

      const pnate =
        item.receita.find((r) => r.tipo === ItemReceitaTipos21.FIN_ENSINO_PNATE)
          ?.receitasRealizadaAteBimestre || 0;

      const valor =
        valorMinimo -
        deducaoFundeb +
        fundebPrincipal611 +
        fundebPrincipal621 +
        fundebPrincipal631 +
        salarioEducacao +
        pdde +
        pnae +
        pnate;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'RPEB_FINANCING_CAPACITY',
            valor: parseFloat(valor.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues23 = revenues23.map((item) => {
      const valorMinimo =
        item.apuracaoLimiteMinimoConstitucional.find(
          (a) =>
            a.tipo ===
            ApuracaoLimiteMinimoConstitucionalTipos23.APLICACAO_EM_MDE_SOBRE_RECEITA_LIQUIDA_DE_IMPOSTOS,
        )?.valorExigido || 0;

      const deducoesFundeb =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos23.TOTAL_DESTINADO_AO_FUNDEB,
        )?.receitasRealizadasAteBimestre || 0;

      const fundebPrincipal =
        item.receita.find((r) => r.tipo === ItemReceitaTipos23.FUNDEB_PRINCIPAL)
          ?.receitasRealizadasAteBimestre || 0;

      const complementacaoVaaf =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos23.FUNDEB_VAAF_PRINCIPAL,
        )?.receitasRealizadasAteBimestre || 0;

      const complementacaoVaat =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos23.FUNDEB_VAAT_PRINCIPAL,
        )?.receitasRealizadasAteBimestre || 0;

      const complementacaoVaar =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos23.FUNDEB_VAAR_PRINCIPAL,
        )?.receitasRealizadasAteBimestre || 0;

      const salarioEducacao =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_SALARIO_EDUCACAO,
        )?.receitasRealizadasAteBimestre || 0;

      const pdde =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_PDDE,
        )?.receitasRealizadasAteBimestre || 0;

      const pnae =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_PNAE,
        )?.receitasRealizadasAteBimestre || 0;

      const pnate =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_PNATE,
        )?.receitasRealizadasAteBimestre || 0;

      const valor =
        valorMinimo -
        deducoesFundeb +
        fundebPrincipal +
        complementacaoVaaf +
        complementacaoVaat +
        complementacaoVaar +
        salarioEducacao +
        pdde +
        pnae +
        pnate;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'RPEB_FINANCING_CAPACITY',
            valor: parseFloat(valor.toFixed(2)),
          },
        ],
      };
    });

    let groupedData = {};

    if (groupType === GroupType.MUNICIPIO) {
      groupedData = groupByMunicipio([
        { key: 'revenues0708', data: modifiedRevenues0708 },
        { key: 'revenues0912', data: modifiedRevenues0912 },
        { key: 'revenues1314', data: modifiedRevenues1314 },
        { key: 'revenues1520', data: modifiedRevenues1520 },
        { key: 'revenues2122', data: modifiedRevenues2122 },
        { key: 'revenues23', data: modifiedRevenues23 },
      ]);
    } else if (groupType === GroupType.ANO) {
      groupedData = groupByAno([
        { key: 'revenues0708', data: modifiedRevenues0708 },
        { key: 'revenues0912', data: modifiedRevenues0912 },
        { key: 'revenues1314', data: modifiedRevenues1314 },
        { key: 'revenues1520', data: modifiedRevenues1520 },
        { key: 'revenues2122', data: modifiedRevenues2122 },
        { key: 'revenues23', data: modifiedRevenues23 },
      ]);
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

  async participacaoFundebComposicao(
    groupType: GroupType,
    filters: IndicatorsFiltersDto,
    pagination: PaginationParams,
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
                  ItemReceitaTipos0708.IMPOSTOS_E_TRANSFERENCIAS_DESTINADAS_MDE,
                  ItemReceitaTipos0708.RECEITAS_DESTINADAS_AO_FUNDEB,
                  ItemReceitaTipos0708.TRANSFERENCIAS_RECURSOS_FUNDEB,
                  ItemReceitaTipos0708.COMPLEMENTACAO_UNIAO_FUNDEB,
                  ItemReceitaTipos0708.TRANSFERENCIAS_SALARIO_EDUCACAO,
                  ItemReceitaTipos0708.OUTRAS_TRANSFERENCIAS_FNDE,
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

    const revenues0912 =
      await this.prismaService.relatorioMunicipal0912.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos0912.RECEITAS_RECEBIDAS_DO_FUNDEB,
                  ItemReceitaTipos0912.TOTAL_RECEITA_IMPOSTOS,
                  ItemReceitaTipos0912.RECEITAS_DESTINADAS_AO_FUNDEB,
                  ItemReceitaTipos0912.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
                  ItemReceitaTipos0912.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
                  ItemReceitaTipos0912.TRANSFERENCIAS_SALARIO_EDUCACAO,
                  ItemReceitaTipos0912.OUTRAS_TRANSFERENCIAS_FNDE,
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
      });

    const revenues1314 =
      await this.prismaService.relatorioMunicipal1314.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1314.RECEITAS_RECEBIDAS_DO_FUNDEB,
                  ItemReceitaTipos1314.TOTAL_RECEITA_IMPOSTOS,
                  ItemReceitaTipos1314.RECEITAS_DESTINADAS_AO_FUNDEB,
                  ItemReceitaTipos1314.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
                  ItemReceitaTipos1314.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
                  ItemReceitaTipos1314.TRANSFERENCIAS_SALARIO_EDUCACAO,
                  ItemReceitaTipos1314.OUTRAS_TRANSFERENCIAS_FNDE,
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
      });

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
                  ItemReceitaTipos1516.TOTAL_RECEITA_IMPOSTOS,
                  ItemReceitaTipos1516.RECEITAS_DESTINADAS_AO_FUNDEB,
                  ItemReceitaTipos1516.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
                  ItemReceitaTipos1516.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
                  ItemReceitaTipos1516.TRANSFERENCIAS_SALARIO_EDUCACAO,
                  ItemReceitaTipos1516.TRANSFERENCIAS_DIRETAS_PDDE,
                  ItemReceitaTipos1516.TRANSFERENCIAS_DIRETAS_PNAE,
                  ItemReceitaTipos1516.TRANSFERENCIAS_DIRETAS_PNATE,
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
                  ItemReceitaTipos1718.TOTAL_RECEITA_IMPOSTOS,
                  ItemReceitaTipos1718.RECEITAS_DESTINADAS_AO_FUNDEB,
                  ItemReceitaTipos1718.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
                  ItemReceitaTipos1718.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
                  ItemReceitaTipos1718.TRANSFERENCIAS_SALARIO_EDUCACAO,
                  ItemReceitaTipos1718.TRANSFERENCIAS_DIRETAS_PDDE,
                  ItemReceitaTipos1718.TRANSFERENCIAS_DIRETAS_PNAE,
                  ItemReceitaTipos1718.TRANSFERENCIAS_DIRETAS_PNATE,
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
                  ItemReceitaTipos1920.TOTAL_RECEITA_IMPOSTOS,
                  ItemReceitaTipos1920.RECEITAS_DESTINADAS_AO_FUNDEB,
                  ItemReceitaTipos1920.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
                  ItemReceitaTipos1920.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
                  ItemReceitaTipos1920.TRANSFERENCIAS_SALARIO_EDUCACAO,
                  ItemReceitaTipos1920.TRANSFERENCIAS_DIRETAS_PDDE,
                  ItemReceitaTipos1920.TRANSFERENCIAS_DIRETAS_PNAE,
                  ItemReceitaTipos1920.TRANSFERENCIAS_DIRETAS_PNATE,
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
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos21.RECEITAS_RECEBIDAS_FUNDEB,
                  ItemReceitaTipos21.TOTAL_DESTINADO_FUNDEB,
                  ItemReceitaTipos21.FUNDEB_PRINCIPAL_6_1_1,
                  ItemReceitaTipos21.FUNDEB_PRINCIPAL_6_2_1,
                  ItemReceitaTipos21.FUNDEB_PRINCIPAL_6_3_1,
                  ItemReceitaTipos21.FIN_ENSINO_SALARIO_EDUCACAO,
                  ItemReceitaTipos21.FIN_ENSINO_PDDE,
                  ItemReceitaTipos21.FIN_ENSINO_PNAE,
                  ItemReceitaTipos21.FIN_ENSINO_PNATE,
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
        receita: {
          where: {
            tipo: {
              in: [
                ItemReceitaTipos23.TOTAL_DAS_RECEITAS_DO_FUNDEB_RECEBIDAS,
                ItemReceitaTipos23.TOTAL_DESTINADO_AO_FUNDEB,
                ItemReceitaTipos23.FUNDEB_PRINCIPAL,
                ItemReceitaTipos23.FUNDEB_VAAF_PRINCIPAL,
                ItemReceitaTipos23.FUNDEB_VAAT_PRINCIPAL,
                ItemReceitaTipos23.FUNDEB_VAAR_PRINCIPAL,
                ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_SALARIO_EDUCACAO,
                ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_PDDE,
                ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_PNAE,
                ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_PNATE,
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
      const receitasFundeb =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.RECEITAS_DESTINADAS_AO_FUNDEB,
        )?.receitasRealizadasNoAno || 0;

      const impostosMde =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos0708.IMPOSTOS_E_TRANSFERENCIAS_DESTINADAS_MDE,
        )?.receitasRealizadasNoAno || 0;

      const deducoesFundeb =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.DEDUCOES_FUNDEB,
        )?.receitasRealizadasNoAno || 0;

      const transferenciasRecursosFundeb =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.TRANSFERENCIAS_RECURSOS_FUNDEB,
        )?.receitasRealizadasNoAno || 0;

      const complementacaoUniao =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.COMPLEMENTACAO_UNIAO_FUNDEB,
        )?.receitasRealizadasNoAno || 0;

      const salarioEducacao =
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos0708.TRANSFERENCIAS_SALARIO_EDUCACAO,
        )?.receitasRealizadasNoAno || 0;

      const outrasTransferenciasFnde =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.OUTRAS_TRANSFERENCIAS_FNDE,
        )?.receitasRealizadasNoAno || 0;

      const denominador =
        impostosMde -
        deducoesFundeb +
        transferenciasRecursosFundeb +
        complementacaoUniao +
        salarioEducacao +
        outrasTransferenciasFnde;

      const percentage =
        denominador !== 0 ? (receitasFundeb / denominador) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'PARTICIPACAO_FUNDEB_COMPOSICAO',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues0912 = revenues0912.map((item) => {
      const receitasFundeb =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.RECEITAS_RECEBIDAS_DO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const totalImpostos =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const deducoesFundeb =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.RECEITAS_DESTINADAS_AO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const transferenciasRecursosFundeb =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos0912.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const complementacaoUniao =
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos0912.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const salarioEducacao =
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos0912.TRANSFERENCIAS_SALARIO_EDUCACAO,
        )?.receitasRealizadaAteBimestre || 0;

      const outrasTransferenciasFnde =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.OUTRAS_TRANSFERENCIAS_FNDE,
        )?.receitasRealizadaAteBimestre || 0;

      const denominador =
        totalImpostos * 0.25 -
        deducoesFundeb +
        transferenciasRecursosFundeb +
        complementacaoUniao +
        salarioEducacao +
        outrasTransferenciasFnde;

      const percentage =
        denominador !== 0 ? (receitasFundeb / denominador) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'PARTICIPACAO_FUNDEB_COMPOSICAO',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    // O período 2013-2014 segue a mesma fórmula do período 2009-2012
    const modifiedRevenues1314 = revenues1314.map((item) => {
      const receitasFundeb =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1314.RECEITAS_RECEBIDAS_DO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const totalImpostos =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1314.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const deducoesFundeb =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1314.RECEITAS_DESTINADAS_AO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const transferenciasRecursosFundeb =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos1314.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const complementacaoUniao =
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos1314.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const salarioEducacao =
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos1314.TRANSFERENCIAS_SALARIO_EDUCACAO,
        )?.receitasRealizadaAteBimestre || 0;

      const outrasTransferenciasFnde =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1314.OUTRAS_TRANSFERENCIAS_FNDE,
        )?.receitasRealizadaAteBimestre || 0;

      const denominador =
        totalImpostos * 0.25 -
        deducoesFundeb +
        transferenciasRecursosFundeb +
        complementacaoUniao +
        salarioEducacao +
        outrasTransferenciasFnde;

      const percentage =
        denominador !== 0 ? (receitasFundeb / denominador) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'PARTICIPACAO_FUNDEB_COMPOSICAO',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    // Período 2015-2020
    const modifiedRevenues1520 = revenues1520.map((item) => {
      const receitasFundeb =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.RECEITAS_RECEBIDAS_DO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const totalImpostos =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const deducoesFundeb =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.RECEITAS_DESTINADAS_AO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const transferenciasRecursosFundeb =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos1516.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const complementacaoUniao =
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos1516.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const salarioEducacao =
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos1516.TRANSFERENCIAS_SALARIO_EDUCACAO,
        )?.receitasRealizadaAteBimestre || 0;

      const outrasTransferenciasFnde =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.OUTRAS_TRANSFERENCIAS_FNDE,
        )?.receitasRealizadaAteBimestre || 0;

      const royalties =
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos1516.ROYALTIES_DESTINADOS_A_EDUCACAO,
        )?.receitasRealizadaAteBimestre || 0;

      const operacoesCredito =
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos1516.RECEITAS_DE_OPERACOES_DE_CREDITO,
        )?.receitasRealizadaAteBimestre || 0;

      const denominador =
        totalImpostos * 0.25 -
        deducoesFundeb +
        transferenciasRecursosFundeb +
        complementacaoUniao +
        salarioEducacao +
        outrasTransferenciasFnde +
        royalties +
        operacoesCredito;

      const percentage =
        denominador !== 0 ? (receitasFundeb / denominador) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'PARTICIPACAO_FUNDEB_COMPOSICAO',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    // Períodos 2021-2022
    const modifiedRevenues2122 = revenues2122.map((item) => {
      const fundebPrincipal =
        item.receita.find((r) => r.tipo === ItemReceitaTipos21.FUNDEB_PRINCIPAL)
          ?.receitasRealizadaAteBimestre || 0;

      const valorMinimo =
        item.apuracaoLimiteMinimoConstitucional.find(
          (a) =>
            a.tipo ===
            ApuracaoLimiteMinimoConstitucionalTipos21.APLICACAO_EM_MDE_SOBRE_RECEITA_DE_IMPOSTOS,
        )?.valorExigido || 0;

      const deducoesFundeb =
        item.receita.find((r) => r.tipo === ItemReceitaTipos21.FUNDEB_DEDUCOES)
          ?.receitasRealizadaAteBimestre || 0;

      const complementacaoVaaf =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos21.FUNDEB_COMPLEMENTACAO_UNIAO_VAAF,
        )?.receitasRealizadaAteBimestre || 0;

      const complementacaoVaat =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos21.FUNDEB_COMPLEMENTACAO_UNIAO_VAAT,
        )?.receitasRealizadaAteBimestre || 0;

      const salarioEducacao =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos21.FIN_ENSINO_SALARIO_EDUCACAO,
        )?.receitasRealizadaAteBimestre || 0;

      const pdde =
        item.receita.find((r) => r.tipo === ItemReceitaTipos21.FIN_ENSINO_PDDE)
          ?.receitasRealizadaAteBimestre || 0;

      const pnae =
        item.receita.find((r) => r.tipo === ItemReceitaTipos21.FIN_ENSINO_PNAE)
          ?.receitasRealizadaAteBimestre || 0;

      const pnate =
        item.receita.find((r) => r.tipo === ItemReceitaTipos21.FIN_ENSINO_PNATE)
          ?.receitasRealizadaAteBimestre || 0;

      const denominador =
        valorMinimo -
        deducoesFundeb +
        fundebPrincipal +
        complementacaoVaaf +
        complementacaoVaat +
        salarioEducacao +
        pdde +
        pnae +
        pnate;

      const percentage =
        denominador !== 0 ? (fundebPrincipal / denominador) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'PARTICIPACAO_FUNDEB_COMPOSICAO',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    // Período 2023
    const modifiedRevenues23 = revenues23.map((item) => {
      const fundebPrincipal =
        item.receita.find((r) => r.tipo === ItemReceitaTipos23.FUNDEB_PRINCIPAL)
          ?.receitasRealizadasAteBimestre || 0;

      const valorMinimo =
        item.apuracaoLimiteMinimoConstitucional.find(
          (a) =>
            a.tipo ===
            ApuracaoLimiteMinimoConstitucionalTipos23.APLICACAO_EM_MDE_SOBRE_RECEITA_LIQUIDA_DE_IMPOSTOS,
        )?.valorExigido || 0;

      const deducoesFundeb =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos23.TOTAL_DESTINADO_AO_FUNDEB,
        )?.receitasRealizadasAteBimestre || 0;

      const complementacaoVaaf =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos23.FUNDEB_VAAF_PRINCIPAL,
        )?.receitasRealizadasAteBimestre || 0;

      const complementacaoVaat =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos23.FUNDEB_VAAT_PRINCIPAL,
        )?.receitasRealizadasAteBimestre || 0;

      const complementacaoVaar =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos23.FUNDEB_VAAR_PRINCIPAL,
        )?.receitasRealizadasAteBimestre || 0;

      const salarioEducacao =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_SALARIO_EDUCACAO,
        )?.receitasRealizadasAteBimestre || 0;

      const pdde =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_PDDE,
        )?.receitasRealizadasAteBimestre || 0;

      const pnae =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_PNAE,
        )?.receitasRealizadasAteBimestre || 0;

      const pnate =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_PNATE,
        )?.receitasRealizadasAteBimestre || 0;

      const denominador =
        valorMinimo -
        deducoesFundeb +
        fundebPrincipal +
        complementacaoVaaf +
        complementacaoVaat +
        complementacaoVaar +
        salarioEducacao +
        pdde +
        pnae +
        pnate;

      const percentage =
        denominador !== 0 ? (fundebPrincipal / denominador) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'PARTICIPACAO_FUNDEB_COMPOSICAO',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    let groupedData = {};

    if (groupType === GroupType.MUNICIPIO) {
      groupedData = groupByMunicipio([
        { key: 'revenues0708', data: modifiedRevenues0708 },
        { key: 'revenues0912', data: modifiedRevenues0912 },
        { key: 'revenues1314', data: modifiedRevenues1314 },
        { key: 'revenues1520', data: modifiedRevenues1520 },
        { key: 'revenues2122', data: modifiedRevenues2122 },
        { key: 'revenues23', data: modifiedRevenues23 },
      ]);
    } else if (groupType === GroupType.ANO) {
      groupedData = groupByAno([
        { key: 'revenues0708', data: modifiedRevenues0708 },
        { key: 'revenues0912', data: modifiedRevenues0912 },
        { key: 'revenues1314', data: modifiedRevenues1314 },
        { key: 'revenues1520', data: modifiedRevenues1520 },
        { key: 'revenues2122', data: modifiedRevenues2122 },
        { key: 'revenues23', data: modifiedRevenues23 },
      ]);
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
