import { Injectable } from '@nestjs/common';
import {
  ApuracaoLimiteMinimoConstitucionalTipos21,
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
  IndicadoresFundebTipo1314,
  IndicadoresFundebTipo1516,
  IndicadoresFundebTipo1718,
  IndicadoresFundebTipo1920,
  IndicadoresTipos21Art212,
  ItemDespesaTipos06,
  ItemDespesaTipos0708,
  ItemDespesaTipos0912,
  ItemDespesaTipos1314,
  ItemDespesaTipos1516,
  ItemDespesaTipos1718,
  ItemDespesaTipos1920,
  ItemDespesaTipos23,
  ItemDespesasTipos21,
  ItemReceitaTipos06,
  ItemReceitaTipos0708,
  ItemReceitaTipos0912,
  ItemReceitaTipos1314,
  ItemReceitaTipos1516,
  ItemReceitaTipos1718,
  ItemReceitaTipos1920,
  ItemReceitaTipos21,
  ItemReceitaTipos23,
  Minimo60PorCentoFundebTipo0708,
  TabelaCumprimentoLimitesConstitucionaisTipo06,
} from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { GroupType } from './dto/researches.dto';

@Injectable()
export class ResearchesService {
  constructor(private readonly prismaService: PrismaService) {}

  async municipalOwnTaxesRevenue(groupType: GroupType, filters?: object) {
    const revenues06 = await this.prismaService.relatorioMunicipal06.findMany({
      select: {
        ano: true,
        codigoMunicipio: true,
        receita: {
          where: {
            tipo: {
              in: [ItemReceitaTipos06.RECEITAS_DE_IMPOSTOS],
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

    const revenues0708 =
      await this.prismaService.relatorioMunicipal0708.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos0708.RECEITA_RESULTANTE_IMPOSTO_IPTU,
                  ItemReceitaTipos0708.RECEITA_RESULTANTE_ITBI,
                  ItemReceitaTipos0708.RECEITA_RESULTANTE_ISS,
                  ItemReceitaTipos0708.RECEITA_RESULTANTE_IRRF,
                  ItemReceitaTipos0708.RECEITAS_DE_IMPOSTO,
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

    const revenues09 = await this.prismaService.relatorioMunicipal0912.findMany(
      {
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos0912.IPTU_RECEITA_RESULTANTE,
                  ItemReceitaTipos0912.ITBI_RECEITA_RESULTANTE,
                  ItemReceitaTipos0912.ISS_RECEITA_RESULTANTE,
                  ItemReceitaTipos0912.IRRF_RECEITA_RESULTANTE,
                  ItemReceitaTipos0912.ITR_RECEITA_RESULTANTE,
                  ItemReceitaTipos0912.RECEITA_DE_IMPOSTOS,
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

    const revenues1012 =
      await this.prismaService.relatorioMunicipal0912.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos0912.IPTU_RECEITA_RESULTANTE,
                  ItemReceitaTipos0912.ITBI_RECEITA_RESULTANTE,
                  ItemReceitaTipos0912.ISS_RECEITA_RESULTANTE,
                  ItemReceitaTipos0912.IRRF_RECEITA_RESULTANTE,
                  ItemReceitaTipos0912.ITR_RECEITA_RESULTANTE,
                  ItemReceitaTipos0912.RECEITA_DE_IMPOSTOS,
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
                  ItemReceitaTipos1314.IPTU_RECEITA_RESULTANTE,
                  ItemReceitaTipos1314.ITBI_RECEITA_RESULTANTE,
                  ItemReceitaTipos1314.ISS_RECEITA_RESULTANTE,
                  ItemReceitaTipos1314.IRRF_RECEITA_RESULTANTE,
                  ItemReceitaTipos1314.ITR_RECEITA_RESULTANTE,
                  ItemReceitaTipos1314.RECEITA_DE_IMPOSTOS,
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

    const revenues1014 = [...revenues1012, ...revenues1314];

    const revenues1516 =
      await this.prismaService.relatorioMunicipal1516.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1516.IPTU_RECEITA_RESULTANTE,
                  ItemReceitaTipos1516.ITBI_RECEITA_RESULTANTE,
                  ItemReceitaTipos1516.ISS_RECEITA_RESULTANTE,
                  ItemReceitaTipos1516.IRRF_RECEITA_RESULTANTE,
                  ItemReceitaTipos1516.ITR_RECEITA_RESULTANTE,
                  ItemReceitaTipos1516.RECEITA_DE_IMPOSTOS,
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

    const revenues1718 =
      await this.prismaService.relatorioMunicipal1718.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1718.IPTU_RECEITA_RESULTANTE,
                  ItemReceitaTipos1718.ITBI_RECEITA_RESULTANTE,
                  ItemReceitaTipos1718.ISS_RECEITA_RESULTANTE,
                  ItemReceitaTipos1718.IRRF_RECEITA_RESULTANTE,
                  ItemReceitaTipos1718.ITR_RECEITA_RESULTANTE,
                  ItemReceitaTipos1718.RECEITA_DE_IMPOSTOS,
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

    const revenues1518 = [...revenues1516, ...revenues1718];

    const revenues1920 =
      await this.prismaService.relatorioMunicipal1920.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1920.IPTU_RECEITA_RESULTANTE,
                  ItemReceitaTipos1920.ITBI_RECEITA_RESULTANTE,
                  ItemReceitaTipos1920.ISS_RECEITA_RESULTANTE,
                  ItemReceitaTipos1920.IRRF_RECEITA_RESULTANTE,
                  ItemReceitaTipos1920.RECEITA_DE_IMPOSTOS,
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

    const revenues2122 = await this.prismaService.relatorioMunicipal21.findMany(
      {
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos21.RECEITA_IPTU,
                  ItemReceitaTipos21.RECEITA_ITBI,
                  ItemReceitaTipos21.RECEITA_ISS,
                  ItemReceitaTipos21.RECEITA_IRRF,
                  ItemReceitaTipos21.RECEITA_DE_IMPOSTOS,
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
                ItemReceitaTipos23.RECEITA_RESULTANTE_DO_IPTU,
                ItemReceitaTipos23.RECEITA_RESULTANTE_DO_ITBI,
                ItemReceitaTipos23.RECEITA_RESULTANTE_DO_ISS,
                ItemReceitaTipos23.RECEITA_RESULTANTE_DO_IRRF,
                ItemReceitaTipos23.RECEITA_DE_IMPOSTOS,
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

    const revenues2123 = [...revenues2122, ...revenues23];

    let groupedRevenues = {};

    if (groupType === GroupType.MUNICIPIO) {
      groupedRevenues = this.groupByMunicipio([
        { key: 'revenues06', data: revenues06 },
        { key: 'revenues0708', data: revenues0708 },
        { key: 'revenues09', data: revenues09 },
        { key: 'revenues1014', data: revenues1014 },
        { key: 'revenues1518', data: revenues1518 },
        { key: 'revenues1920', data: revenues1920 },
        { key: 'revenues2123', data: revenues2123 },
      ]);
    } else if (groupType == GroupType.ANO) {
      groupedRevenues = this.groupByAno([
        { key: 'revenues06', data: revenues06 },
        { key: 'revenues0708', data: revenues0708 },
        { key: 'revenues09', data: revenues09 },
        { key: 'revenues1014', data: revenues1014 },
        { key: 'revenues1518', data: revenues1518 },
        { key: 'revenues1920', data: revenues1920 },
        { key: 'revenues2123', data: revenues2123 },
      ]);
    } else {
      console.log('tipo de agrupamento não corresponde');
    }

    return groupedRevenues;
  }

  async constitutionalTransfersRevenue(groupType: GroupType, filters?: object) {
    const revenues06 = await this.prismaService.relatorioMunicipal06.findMany({
      select: {
        ano: true,
        codigoMunicipio: true,
        receita: {
          where: {
            tipo: {
              in: [
                ItemReceitaTipos06.COTA_PARTE_FPM_85_PORCENTO,
                ItemReceitaTipos06.COTA_PARTE_ICMS_85_PORCENTO,
                ItemReceitaTipos06.TRANSFERENCIA_FINANCEIRA_ICMS_DESONERACAO,
                ItemReceitaTipos06.COTA_PARTE_IPI_EXPORTACAO_85_PORCENTO,
                ItemReceitaTipos06.COTA_PARTE_ITR_100_PORCENTO,
                ItemReceitaTipos06.COTA_PARTE_IPVA_100_PORCENTO,
                ItemReceitaTipos06.COTA_PARTE_IOF_OURO_100_PORCENTO,
                ItemReceitaTipos06.RECEITAS_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAL,
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

    const modifiedRevenues06 = revenues06.map((item) => {
      const newReceita = item.receita.map((r) => {
        if (r.tipo === ItemReceitaTipos06.COTA_PARTE_FPM_85_PORCENTO) {
          const valorCorrigido = (
            (r.receitasRealizadasNoAno / 85) *
            100
          ).toFixed(4);
          return {
            tipo: 'FPM',
            receitasRealizadasNoAno: parseFloat(valorCorrigido),
          };
        } else if (r.tipo === ItemReceitaTipos06.COTA_PARTE_ICMS_85_PORCENTO) {
          const valorCorrigido = (
            (r.receitasRealizadasNoAno / 85) *
            100
          ).toFixed(4);
          return {
            tipo: 'COTA_PARTE_ICMS',
            receitasRealizadasNoAno: parseFloat(valorCorrigido),
          };
        } else if (
          r.tipo ===
          ItemReceitaTipos06.TRANSFERENCIA_FINANCEIRA_ICMS_DESONERACAO
        ) {
          const valorCorrigido = (
            (r.receitasRealizadasNoAno / 85) *
            100
          ).toFixed(4);
          return {
            tipo: 'ICMS_DESONERACAO',
            receitasRealizadasNoAno: parseFloat(valorCorrigido),
          };
        } else if (
          r.tipo === ItemReceitaTipos06.COTA_PARTE_IPI_EXPORTACAO_85_PORCENTO
        ) {
          const valorCorrigido = (
            (r.receitasRealizadasNoAno / 85) *
            100
          ).toFixed(4);
          return {
            tipo: 'IPI_EXPORTACAO',
            receitasRealizadasNoAno: parseFloat(valorCorrigido),
          };
        } else {
          return r;
        }
      });

      return {
        ...item,
        receita: newReceita,
      };
    });

    const revenues0708 =
      await this.prismaService.relatorioMunicipal0708.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos0708.COTA_PARTE_FPM,
                  ItemReceitaTipos0708.COTA_PARTE_ICMS,
                  ItemReceitaTipos0708.ICMS_DESONERACAO,
                  ItemReceitaTipos0708.COTA_PARTE_IPI_EXPORTACAO,
                  ItemReceitaTipos0708.COTA_PARTE_ITR,
                  ItemReceitaTipos0708.COTA_PARTE_IPVA,
                  ItemReceitaTipos0708.COTA_PARTE_IOF_OURO,
                  ItemReceitaTipos0708.RECEITAS_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAL,
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
                  ItemReceitaTipos0912.COTA_PARTE_FPM,
                  ItemReceitaTipos0912.COTA_PARTE_ICMS,
                  ItemReceitaTipos0912.ICMS_DESONERACAO_LC_87_1996,
                  ItemReceitaTipos0912.COTA_PARTE_IPI_EXPORTACAO,
                  ItemReceitaTipos0912.COTA_PARTE_ITR,
                  ItemReceitaTipos0912.COTA_PARTE_IPVA,
                  ItemReceitaTipos0912.COTA_PARTE_IOF_OURO,
                  ItemReceitaTipos0912.RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
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
                  ItemReceitaTipos1314.COTA_PARTE_FPM,
                  ItemReceitaTipos1314.COTA_PARTE_ICMS,
                  ItemReceitaTipos1314.ICMS_DESONERACAO_LC_87_1996,
                  ItemReceitaTipos1314.COTA_PARTE_IPI_EXPORTACAO,
                  ItemReceitaTipos1314.COTA_PARTE_ITR,
                  ItemReceitaTipos1314.COTA_PARTE_IPVA,
                  ItemReceitaTipos1314.COTA_PARTE_IOF_OURO,
                  ItemReceitaTipos1314.RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
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

    const revenues0714 = [...revenues0708, ...revenues0912, ...revenues1314];

    const revenues1516 =
      await this.prismaService.relatorioMunicipal1516.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1516.COTA_PARTE_FPM,
                  ItemReceitaTipos1516.COTA_PARTE_ICMS,
                  ItemReceitaTipos1516.ICMS_DESONERACAO_LC_87_1996,
                  ItemReceitaTipos1516.COTA_PARTE_IPI_EXPORTACAO,
                  ItemReceitaTipos1516.COTA_PARTE_ITR,
                  ItemReceitaTipos1516.COTA_PARTE_IPVA,
                  ItemReceitaTipos1516.COTA_PARTE_IOF_OURO,
                  ItemReceitaTipos1516.RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
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

    const revenues1718 =
      await this.prismaService.relatorioMunicipal1718.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1718.COTA_PARTE_FPM,
                  ItemReceitaTipos1718.COTA_PARTE_ICMS,
                  ItemReceitaTipos1718.ICMS_DESONERACAO_LC_87_1996,
                  ItemReceitaTipos1718.COTA_PARTE_IPI_EXPORTACAO,
                  ItemReceitaTipos1718.COTA_PARTE_ITR,
                  ItemReceitaTipos1718.COTA_PARTE_IPVA,
                  ItemReceitaTipos1718.COTA_PARTE_IOF_OURO,
                  ItemReceitaTipos1718.RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
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

    const revenues1920 =
      await this.prismaService.relatorioMunicipal1920.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1920.COTA_PARTE_FPM,
                  ItemReceitaTipos1920.COTA_PARTE_ICMS,
                  ItemReceitaTipos1920.ICMS_DESONERACAO_LC_87_1996,
                  ItemReceitaTipos1920.COTA_PARTE_IPI_EXPORTACAO,
                  ItemReceitaTipos1920.COTA_PARTE_ITR,
                  ItemReceitaTipos1920.COTA_PARTE_IPVA,
                  ItemReceitaTipos1920.COTA_PARTE_IOF_OURO,
                  ItemReceitaTipos1920.RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
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

    const revenues1520 = [...revenues1516, ...revenues1718, ...revenues1920];

    const revenues2122 = await this.prismaService.relatorioMunicipal21.findMany(
      {
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos21.COTA_PARTE_FPM,
                  ItemReceitaTipos21.COTA_PARTE_ICMS,
                  ItemReceitaTipos21.COTA_PARTE_IPI_EXPORTACAO,
                  ItemReceitaTipos21.COTA_PARTE_ITR,
                  ItemReceitaTipos21.COTA_PARTE_IPVA,
                  ItemReceitaTipos21.COTA_PARTE_IOF_OURO,
                  ItemReceitaTipos21.COMPENSACOES_FINANCEIRAS,
                  ItemReceitaTipos21.RECEITA_TRANSFERENCIAS_CONSTITUCIONAIS,
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
                ItemReceitaTipos23.COTA_PARTE_FPE,
                ItemReceitaTipos23.COTA_PARTE_ICMS,
                ItemReceitaTipos23.COTA_PARTE_IPI_EXPORTACAO,
                ItemReceitaTipos23.COTA_PARTE_ITR,
                ItemReceitaTipos23.COTA_PARTE_IPVA,
                ItemReceitaTipos23.COTA_PARTE_IOF_OURO,
                ItemReceitaTipos23.OUTRAS_TRANSFERENCIAS_IMPOSTOS_E_TRANSFERENCIAS_CONSTITUCIONAIS,
                ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
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

    const revenues2123 = [...revenues2122, ...revenues23];

    let groupedRevenues = {};

    if (groupType === GroupType.MUNICIPIO) {
      groupedRevenues = this.groupByMunicipio([
        { key: 'modifiedRevenues06', data: modifiedRevenues06 },
        { key: 'revenues0714', data: revenues0714 },
        { key: 'revenues1520', data: revenues1520 },
        { key: 'revenues2123', data: revenues2123 },
      ]);
    } else if (groupType == GroupType.ANO) {
      groupedRevenues = this.groupByAno([
        { key: 'modifiedRevenues06', data: modifiedRevenues06 },
        { key: 'revenues0714', data: revenues0714 },
        { key: 'revenues1520', data: revenues1520 },
        { key: 'revenues2123', data: revenues2123 },
      ]);
    } else {
      console.log('tipo de agrupamento não corresponde');
    }

    return groupedRevenues;
  }

  async municipalTaxesRevenue(groupType: GroupType, filters?: object) {
    const revenues06 = await this.prismaService.relatorioMunicipal06.findMany({
      select: {
        ano: true,
        codigoMunicipio: true,
        receita: {
          where: {
            tipo: {
              in: [
                ItemReceitaTipos06.RECEITAS_DE_IMPOSTOS,
                ItemReceitaTipos06.RECEITAS_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAL,
                ItemReceitaTipos06.RECEITA_RESULTANTE_DE_IMPOSTOS,
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

    const revenues0708 =
      await this.prismaService.relatorioMunicipal0708.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos0708.RECEITAS_DE_IMPOSTO,
                  ItemReceitaTipos0708.RECEITAS_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAL,
                  ItemReceitaTipos0708.TOTAL_RECEITA_BRUTA_IMPOSTOS,
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
                  ItemReceitaTipos0912.RECEITA_DE_IMPOSTOS,
                  ItemReceitaTipos0912.RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
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
                  ItemReceitaTipos1314.RECEITA_DE_IMPOSTOS,
                  ItemReceitaTipos1314.RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
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
      });

    const revenues0714 = [...revenues0708, ...revenues0912, ...revenues1314];

    const revenues1516 =
      await this.prismaService.relatorioMunicipal1516.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1516.RECEITA_DE_IMPOSTOS,
                  ItemReceitaTipos1516.RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
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
      });

    const revenues1718 =
      await this.prismaService.relatorioMunicipal1718.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1718.RECEITA_DE_IMPOSTOS,
                  ItemReceitaTipos1718.RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
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
      });

    const revenues1920 =
      await this.prismaService.relatorioMunicipal1920.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1920.RECEITA_DE_IMPOSTOS,
                  ItemReceitaTipos1920.RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
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
      });

    const revenues1520 = [...revenues1516, ...revenues1718, ...revenues1920];

    const revenues2122 = await this.prismaService.relatorioMunicipal21.findMany(
      {
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos21.RECEITA_DE_IMPOSTOS,
                  ItemReceitaTipos21.RECEITA_TRANSFERENCIAS_CONSTITUCIONAIS,
                  ItemReceitaTipos21.TOTAL_RECEITA_IMPOSTOS,
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
                ItemReceitaTipos23.RECEITA_DE_IMPOSTOS,
                ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
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

    const revenues2123 = [...revenues2122, ...revenues23];

    let groupedRevenues = {};

    if (groupType === GroupType.MUNICIPIO) {
      groupedRevenues = this.groupByMunicipio([
        { key: 'revenues06', data: revenues06 },
        { key: 'revenues0714', data: revenues0714 },
        { key: 'revenues1520', data: revenues1520 },
        { key: 'revenues2123', data: revenues2123 },
      ]);
    } else if (groupType == GroupType.ANO) {
      groupedRevenues = this.groupByAno([
        { key: 'revenues06', data: revenues06 },
        { key: 'revenues0714', data: revenues0714 },
        { key: 'revenues1520', data: revenues1520 },
        { key: 'revenues2123', data: revenues2123 },
      ]);
    } else {
      console.log('tipo de agrupamento não corresponde');
    }

    return groupedRevenues;
  }

  async additionalMunicipalEducationRevenue(
    groupType: GroupType,
    filters?: object,
  ) {
    const revenues06 = await this.prismaService.relatorioMunicipal06.findMany({
      select: {
        ano: true,
        codigoMunicipio: true,
        receita: {
          where: {
            tipo: {
              in: [
                ItemReceitaTipos06.TRANSFERENCIAS_DO_SALARIO_EDUCACAO,
                ItemReceitaTipos06.OUTRAS_TRANSFERENCIAS_DO_FNDE,
                ItemReceitaTipos06.TRANSFERENCIAS_DESTINADAS_A_PROGRAMAS_DE_EDUCACAO,
                ItemReceitaTipos06.RECEITA_DE_OPERACOES_DE_CREDITO_DESTINADAS_A_EDUCACAO,
                ItemReceitaTipos06.OUTRAS_RECEITAS_DESTINADAS_EDUCACAO,
                ItemReceitaTipos06.TRANSFERENCIAS_DO_FNDE,
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

    const modifiedRevenues06 = revenues06.map((item) => {
      let totalValue = 0;

      item.receita.forEach((r) => {
        if (
          r.tipo === ItemReceitaTipos06.TRANSFERENCIAS_DO_FNDE ||
          r.tipo === ItemReceitaTipos06.OUTRAS_RECEITAS_DESTINADAS_EDUCACAO ||
          r.tipo ===
            ItemReceitaTipos06.RECEITA_DE_OPERACOES_DE_CREDITO_DESTINADAS_A_EDUCACAO ||
          r.tipo ===
            ItemReceitaTipos06.TRANSFERENCIAS_DESTINADAS_A_PROGRAMAS_DE_EDUCACAO
        ) {
          totalValue += r.receitasRealizadasNoAno;
        }
      });

      totalValue = parseFloat(totalValue.toFixed(4));

      return {
        ...item,
        receita: [
          ...item.receita,
          {
            tipo: 'TOTAL',
            receitasRealizadasNoAno: totalValue,
          },
        ],
      };
    });

    const revenues0708 =
      await this.prismaService.relatorioMunicipal0708.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos0708.TRANSFERENCIAS_SALARIO_EDUCACAO,
                  ItemReceitaTipos0708.OUTRAS_TRANSFERENCIAS_FNDE,
                  ItemReceitaTipos0708.TRANSFERENCIAS_CONVENIOS_PROGRAMAS_EDUCACAO,
                  ItemReceitaTipos0708.RECEITA_OPERACOES_CREDITO_DESTINADA_EDUCACAO,
                  ItemReceitaTipos0708.OUTRAS_RECEITAS_DESTINADAS_EDUCACAO,
                  ItemReceitaTipos0708.TOTAL_OUTRAS_RECEITAS_DESTINADAS_ENSINO,
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
                  ItemReceitaTipos0912.TRANSFERENCIAS_SALARIO_EDUCACAO,
                  ItemReceitaTipos0912.OUTRAS_TRANSFERENCIAS_FNDE,
                  ItemReceitaTipos0912.APLICACAO_FINANCEIRA_FNDE,
                  ItemReceitaTipos0912.RECEITA_TRANSFERENCIAS_CONVENIOS,
                  ItemReceitaTipos0912.RECEITA_OPERACOES_CREDITO,
                  ItemReceitaTipos0912.OUTRAS_RECEITAS_FINANCIAMENTO_ENSINO,
                  ItemReceitaTipos0912.TOTAL_RECEITAS_ADICIONAIS_FINANCIAMENTO_ENSINO,
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
                  ItemReceitaTipos1314.TRANSFERENCIAS_SALARIO_EDUCACAO,
                  ItemReceitaTipos1314.OUTRAS_TRANSFERENCIAS_FNDE,
                  ItemReceitaTipos1314.APLICACAO_FINANCEIRA_FNDE,
                  ItemReceitaTipos1314.TRANSFERENCIAS_DIRETAS_PDDE,
                  ItemReceitaTipos1314.TRANSFERENCIAS_DIRETAS_PNAE,
                  ItemReceitaTipos1314.TRANSFERENCIAS_DIRETAS_PNATE,
                  ItemReceitaTipos1314.RECEITA_TRANSFERENCIAS_CONVENIOS,
                  ItemReceitaTipos1314.RECEITA_OPERACOES_CREDITO,
                  ItemReceitaTipos1314.OUTRAS_RECEITAS_FINANCIAMENTO_ENSINO,
                  ItemReceitaTipos1314.TOTAL_RECEITAS_ADICIONAIS_FINANCIAMENTO_ENSINO,
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

    const revenues1516 =
      await this.prismaService.relatorioMunicipal1516.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1516.TRANSFERENCIAS_SALARIO_EDUCACAO,
                  ItemReceitaTipos1516.OUTRAS_TRANSFERENCIAS_FNDE,
                  ItemReceitaTipos1516.APLICACAO_FINANCEIRA_FNDE,
                  ItemReceitaTipos1516.TRANSFERENCIAS_DIRETAS_PDDE,
                  ItemReceitaTipos1516.TRANSFERENCIAS_DIRETAS_PNAE,
                  ItemReceitaTipos1516.TRANSFERENCIAS_DIRETAS_PNATE,
                  ItemReceitaTipos1516.RECEITA_TRANSFERENCIAS_CONVENIOS,
                  ItemReceitaTipos1516.RECEITA_OPERACOES_CREDITO,
                  ItemReceitaTipos1516.OUTRAS_RECEITAS_FINANCIAMENTO_ENSINO,
                  ItemReceitaTipos1516.TOTAL_RECEITAS_ADICIONAIS_FINANCIAMENTO_ENSINO,
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

    const revenues1718 =
      await this.prismaService.relatorioMunicipal1718.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1718.TRANSFERENCIAS_SALARIO_EDUCACAO,
                  ItemReceitaTipos1718.OUTRAS_TRANSFERENCIAS_FNDE,
                  ItemReceitaTipos1718.APLICACAO_FINANCEIRA_FNDE,
                  ItemReceitaTipos1718.TRANSFERENCIAS_DIRETAS_PDDE,
                  ItemReceitaTipos1718.TRANSFERENCIAS_DIRETAS_PNAE,
                  ItemReceitaTipos1718.TRANSFERENCIAS_DIRETAS_PNATE,
                  ItemReceitaTipos1718.RECEITA_TRANSFERENCIAS_CONVENIOS,
                  ItemReceitaTipos1718.RECEITA_OPERACOES_CREDITO,
                  ItemReceitaTipos1718.OUTRAS_RECEITAS_FINANCIAMENTO_ENSINO,
                  ItemReceitaTipos1718.TOTAL_RECEITAS_ADICIONAIS_FINANCIAMENTO_ENSINO,
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

    const revenues1920 =
      await this.prismaService.relatorioMunicipal1920.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1920.TRANSFERENCIAS_SALARIO_EDUCACAO,
                  ItemReceitaTipos1920.OUTRAS_TRANSFERENCIAS_FNDE,
                  ItemReceitaTipos1920.APLICACAO_FINANCEIRA_FNDE,
                  ItemReceitaTipos1920.TRANSFERENCIAS_DIRETAS_PDDE,
                  ItemReceitaTipos1920.TRANSFERENCIAS_DIRETAS_PNAE,
                  ItemReceitaTipos1920.TRANSFERENCIAS_DIRETAS_PNATE,
                  ItemReceitaTipos1920.RECEITA_TRANSFERENCIAS_CONVENIOS,
                  ItemReceitaTipos1920.RECEITA_OPERACOES_CREDITO,
                  ItemReceitaTipos1920.OUTRAS_RECEITAS_FINANCIAMENTO_ENSINO,
                  ItemReceitaTipos1920.TOTAL_RECEITAS_ADICIONAIS_FINANCIAMENTO_ENSINO,
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

    const revenues1520 = [...revenues1516, ...revenues1718, ...revenues1920];

    const revenues2122 = await this.prismaService.relatorioMunicipal21.findMany(
      {
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos21.FIN_ENSINO_SALARIO_EDUCACAO,
                  ItemReceitaTipos21.FIN_ENSINO_OUTRAS_TRANSFERENCIAS_FNDE,
                  ItemReceitaTipos21.FIN_ENSINO_PDDE,
                  ItemReceitaTipos21.FIN_ENSINO_PNAE,
                  ItemReceitaTipos21.FIN_ENSINO_PNATE,
                  ItemReceitaTipos21.FIN_ENSINO_RECEITA_TRANSFERENCIAS_CONVENIOS,
                  ItemReceitaTipos21.FIN_ENSINO_RECEITA_OPERACOES_CREDITO_EDUCACAO,
                  ItemReceitaTipos21.FIN_ENSINO_RECEITA_ROYALTIES_DESTINADOS_EDUCACAO,
                  ItemReceitaTipos21.FIN_ENSINO_OUTRAS_RECEITAS,
                  ItemReceitaTipos21.FIN_ENSINO_TOTAL_RECEITAS_ADICIONAIS,
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
                ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_SALARIO_EDUCACAO,
                ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_OUTRAS_TRANSFERENCIAS,
                ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_PDDE,
                ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_PNAE,
                ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_PNATE,
                ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DE_CONVENIOS,
                ItemReceitaTipos23.RECEITA_DE_OPERACOES_DE_CREDITO_VINCULADAS_A_EDUCACAO,
                ItemReceitaTipos23.RECEITA_DE_ROYALTIES_DESTINADOS_A_EDUCACAO,
                ItemReceitaTipos23.OUTRAS_RECEITAS_PARA_FINANCIAMENTO_DO_ENSINO,
                ItemReceitaTipos23.TOTAL_DAS_RECEITAS_ADICIONAIS_PARA_FINANCIAMENTO_DO_ENSINO,
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

    let groupedRevenues = {};

    if (groupType === GroupType.MUNICIPIO) {
      groupedRevenues = this.groupByMunicipio([
        { key: 'modifiedRevenues06', data: modifiedRevenues06 },
        { key: 'revenues0708', data: revenues0708 },
        { key: 'revenues0912', data: revenues0912 },
        { key: 'revenues1314', data: revenues1314 },
        { key: 'revenues1520', data: revenues1520 },
        { key: 'revenues2122', data: revenues2122 },
        { key: 'revenues23', data: revenues23 },
      ]);
    } else if (groupType == GroupType.ANO) {
      groupedRevenues = this.groupByMunicipio([
        { key: 'modifiedRevenues06', data: modifiedRevenues06 },
        { key: 'revenues0708', data: revenues0708 },
        { key: 'revenues0912', data: revenues0912 },
        { key: 'revenues1314', data: revenues1314 },
        { key: 'revenues1520', data: revenues1520 },
        { key: 'revenues2122', data: revenues2122 },
        { key: 'revenues23', data: revenues23 },
      ]);
    } else {
      console.log('tipo de agrupamento não corresponde');
    }

    return groupedRevenues;
  }

  async municipalFundebFundefComposition(
    groupType: GroupType,
    filters?: object,
  ) {
    const revenues06 = await this.prismaService.relatorioMunicipal06.findMany({
      select: {
        ano: true,
        codigoMunicipio: true,
        receita: {
          where: {
            tipo: {
              in: [
                ItemReceitaTipos06.PARCELA_TRANSFERENCIAS_DESTINADAS_A_FORMACAO_DO_FUNDEF,
                ItemReceitaTipos06.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEF,
                ItemReceitaTipos06.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEF,
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

    const modifiedRevenues06 = revenues06.map((item) => {
      let resultadoLiquido = 0;
      let totalFunDeb = 0;

      item.receita.forEach((r) => {
        if (
          r.tipo ===
          ItemReceitaTipos06.PARCELA_TRANSFERENCIAS_DESTINADAS_A_FORMACAO_DO_FUNDEF
        ) {
          resultadoLiquido -= r.receitasRealizadasNoAno;
        }
        if (
          r.tipo === ItemReceitaTipos06.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEF
        ) {
          resultadoLiquido += r.receitasRealizadasNoAno;
          totalFunDeb += r.receitasRealizadasNoAno;
        }
        if (r.tipo === ItemReceitaTipos06.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEF) {
          totalFunDeb += r.receitasRealizadasNoAno;
        }
      });

      // Arredondar os valores para duas casas decimais
      resultadoLiquido = parseFloat(resultadoLiquido.toFixed(4));
      totalFunDeb = parseFloat(totalFunDeb.toFixed(4));

      // Adicionar os novos objetos ao array de receitas
      return {
        ...item,
        receita: [
          ...item.receita,
          {
            tipo: 'RESULTADO_LIQUIDO',
            receitasRealizadasNoAno: resultadoLiquido,
          },
          {
            tipo: 'TOTAL_FUNDEB',
            receitasRealizadasNoAno: totalFunDeb,
          },
        ],
      };
    });

    const revenues0708 =
      await this.prismaService.relatorioMunicipal0708.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos0708.RECEITAS_DESTINADAS_AO_FUNDEB,
                  ItemReceitaTipos0708.TRANSFERENCIAS_RECURSOS_FUNDEB,
                  ItemReceitaTipos0708.RESULTADO_LIQUIDO_TRANSFERENCIAS_FUNDEB,
                  ItemReceitaTipos0708.COMPLEMENTACAO_UNIAO_FUNDEB,
                  ItemReceitaTipos0708.RECEITA_APLICACAO_FINANCEIRA_RECURSOS_FUNDEB,
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

    const revenues0912 =
      await this.prismaService.relatorioMunicipal0912.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos0912.RECEITAS_DESTINADAS_AO_FUNDEB,
                  ItemReceitaTipos0912.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
                  ItemReceitaTipos0912.RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB,
                  ItemReceitaTipos0912.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
                  ItemReceitaTipos0912.RECEITA_DE_APLICACAO_FINANCEIRA_DOS_RECURSOS_DO_FUNDEB,
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
                  ItemReceitaTipos1314.RECEITAS_DESTINADAS_AO_FUNDEB,
                  ItemReceitaTipos1314.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
                  ItemReceitaTipos1314.RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB,
                  ItemReceitaTipos1314.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
                  ItemReceitaTipos1314.RECEITA_DE_APLICACAO_FINANCEIRA_DOS_RECURSOS_DO_FUNDEB,
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
      });

    const revenues0914 = [...revenues0912, ...revenues1314];

    const revenues1516 =
      await this.prismaService.relatorioMunicipal1516.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1516.RECEITAS_DESTINADAS_AO_FUNDEB,
                  ItemReceitaTipos1516.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
                  ItemReceitaTipos1516.RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB,
                  ItemReceitaTipos1516.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
                  ItemReceitaTipos1516.RECEITA_DE_APLICACAO_FINANCEIRA_DOS_RECURSOS_DO_FUNDEB,
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
      });

    const revenues1718 =
      await this.prismaService.relatorioMunicipal1718.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1718.RECEITAS_DESTINADAS_AO_FUNDEB,
                  ItemReceitaTipos1718.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
                  ItemReceitaTipos1718.RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB,
                  ItemReceitaTipos1718.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
                  ItemReceitaTipos1718.RECEITA_DE_APLICACAO_FINANCEIRA_DOS_RECURSOS_DO_FUNDEB,
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
      });

    const revenues1920 =
      await this.prismaService.relatorioMunicipal1920.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1920.RECEITAS_DESTINADAS_AO_FUNDEB,
                  ItemReceitaTipos1920.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
                  ItemReceitaTipos1920.RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB,
                  ItemReceitaTipos1920.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
                  ItemReceitaTipos1920.RECEITA_DE_APLICACAO_FINANCEIRA_DOS_RECURSOS_DO_FUNDEB,
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
      });

    const revenues1520 = [...revenues1516, ...revenues1718, ...revenues1920];

    const revenues2122 = await this.prismaService.relatorioMunicipal21.findMany(
      {
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos21.TOTAL_DESTINADO_FUNDEB,
                  ItemReceitaTipos21.FUNDEB_PRINCIPAL_6_1_1,
                  ItemReceitaTipos21.FUNDEB_PRINCIPAL_6_2_1,
                  ItemReceitaTipos21.FUNDEB_PRINCIPAL_6_3_1,
                  ItemReceitaTipos21.RESULTADO_LIQUIDO_TRANSFERENCIAS_FUNDEB,
                  ItemReceitaTipos21.FUNDEB_RENDIMENTO_APLICACAO_FINCANCEIRA_6_1_2,
                  ItemReceitaTipos21.FUNDEB_RENDIMENTO_APLICACAO_FINCANCEIRA_6_2_2,
                  ItemReceitaTipos21.FUNDEB_RENDIMENTO_APLICACAO_FINCANCEIRA_6_3_2,
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

    const modifiedRevenues2122 = revenues2122.map((item) => {
      let complementacaoUniao = 0;
      let receitaAplicacaoFinanceira = 0;

      item.receita.forEach((r) => {
        if (
          r.tipo === ItemReceitaTipos21.FUNDEB_PRINCIPAL_6_2_1 ||
          r.tipo === ItemReceitaTipos21.FUNDEB_PRINCIPAL_6_3_1
        ) {
          complementacaoUniao += r.receitasRealizadaAteBimestre;
        }
        if (
          r.tipo ===
            ItemReceitaTipos21.FUNDEB_RENDIMENTO_APLICACAO_FINCANCEIRA_6_1_2 ||
          r.tipo ===
            ItemReceitaTipos21.FUNDEB_RENDIMENTO_APLICACAO_FINCANCEIRA_6_2_2 ||
          r.tipo ===
            ItemReceitaTipos21.FUNDEB_RENDIMENTO_APLICACAO_FINCANCEIRA_6_3_2
        ) {
          receitaAplicacaoFinanceira += r.receitasRealizadaAteBimestre;
        }
      });

      // Arredondar os valores para duas casas decimais
      complementacaoUniao = parseFloat(complementacaoUniao.toFixed(4));
      receitaAplicacaoFinanceira = parseFloat(
        receitaAplicacaoFinanceira.toFixed(4),
      );

      // Filtrar para remover os tipos usados no cálculo
      const filteredReceita = item.receita.filter(
        (r) =>
          ![
            ItemReceitaTipos21.FUNDEB_PRINCIPAL_6_2_1,
            ItemReceitaTipos21.FUNDEB_PRINCIPAL_6_3_1,
            ItemReceitaTipos21.FUNDEB_RENDIMENTO_APLICACAO_FINCANCEIRA_6_1_2,
            ItemReceitaTipos21.FUNDEB_RENDIMENTO_APLICACAO_FINCANCEIRA_6_2_2,
            ItemReceitaTipos21.FUNDEB_RENDIMENTO_APLICACAO_FINCANCEIRA_6_3_2,
          ].includes(r.tipo as any),
      );

      return {
        ...item,
        receita: [
          ...filteredReceita,
          {
            tipo: 'COMPLEMENTACAO_UNIAO',
            receitasRealizadaAteBimestre: complementacaoUniao,
          },
          {
            tipo: 'RECEITA_APLICACAO_FINANCEIRA',
            receitasRealizadaAteBimestre: receitaAplicacaoFinanceira,
          },
        ],
      };
    });

    const revenues23 = await this.prismaService.relatorioMunicipal23.findMany({
      select: {
        ano: true,
        codigoMunicipio: true,
        receita: {
          where: {
            tipo: {
              in: [
                ItemReceitaTipos23.TOTAL_DESTINADO_AO_FUNDEB,
                ItemReceitaTipos23.FUNDEB_PRINCIPAL,
                ItemReceitaTipos23.RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB,
                ItemReceitaTipos23.FUNDEB_VAAF_PRINCIPAL,
                ItemReceitaTipos23.FUNDEB_VAAT_PRINCIPAL,
                ItemReceitaTipos23.FUNDEB_VAAR_PRINCIPAL,
                ItemReceitaTipos23.FUNDEB_RENDIMENTOS_DE_APLICACAO_FINANCEIRA,
                ItemReceitaTipos23.FUNDEB_VAAF_RENDIMENTOS_APLICACAO_FINANCEIRA,
                ItemReceitaTipos23.FUNDEB_VAAT_RENDIMENTOS_APLICACAO_FINANCEIRA,
                ItemReceitaTipos23.FUNDEB_VAAR_RENDIMENTO_APLICACAO_FINANCEIRA,
                ItemReceitaTipos23.FUNDEB__VAAF_RESSARCIMENTO_FUNDEB,
                ItemReceitaTipos23.FUNDEB_VAAT_RESSARCIMENTO_FUNDEB,
                ItemReceitaTipos23.FUNDEB_VAAR_RESSARCIMENTO_FUNDEB,
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

    const modifiedRevenues23 = revenues23.map((item) => {
      let complementacaoUniao = 0;
      let receitaAplicacaoFinanceira = 0;
      let ressarcimentoRecursosFundeb = 0;

      item.receita.forEach((r) => {
        if (
          r.tipo === ItemReceitaTipos23.FUNDEB_VAAF_PRINCIPAL ||
          r.tipo === ItemReceitaTipos23.FUNDEB_VAAT_PRINCIPAL ||
          r.tipo === ItemReceitaTipos23.FUNDEB_VAAR_PRINCIPAL
        ) {
          complementacaoUniao += r.receitasRealizadasAteBimestre;
        }
        if (
          r.tipo ===
            ItemReceitaTipos23.FUNDEB_RENDIMENTOS_DE_APLICACAO_FINANCEIRA ||
          r.tipo ===
            ItemReceitaTipos23.FUNDEB_VAAF_RENDIMENTOS_APLICACAO_FINANCEIRA ||
          r.tipo ===
            ItemReceitaTipos23.FUNDEB_VAAT_RENDIMENTOS_APLICACAO_FINANCEIRA ||
          r.tipo ===
            ItemReceitaTipos23.FUNDEB_VAAR_RENDIMENTO_APLICACAO_FINANCEIRA
        ) {
          receitaAplicacaoFinanceira += r.receitasRealizadasAteBimestre;
        }
        if (
          r.tipo === ItemReceitaTipos23.FUNDEB__VAAF_RESSARCIMENTO_FUNDEB ||
          r.tipo === ItemReceitaTipos23.FUNDEB_VAAT_RESSARCIMENTO_FUNDEB ||
          r.tipo === ItemReceitaTipos23.FUNDEB_VAAR_RESSARCIMENTO_FUNDEB
        ) {
          ressarcimentoRecursosFundeb += r.receitasRealizadasAteBimestre;
        }
      });

      // Arredondar os valores para duas casas decimais
      complementacaoUniao = parseFloat(complementacaoUniao.toFixed(4));
      receitaAplicacaoFinanceira = parseFloat(
        receitaAplicacaoFinanceira.toFixed(4),
      );
      ressarcimentoRecursosFundeb = parseFloat(
        ressarcimentoRecursosFundeb.toFixed(4),
      );

      // Filtrar para remover os tipos usados no cálculo
      const filteredReceita = item.receita.filter(
        (r) =>
          ![
            ItemReceitaTipos23.FUNDEB_VAAF_PRINCIPAL,
            ItemReceitaTipos23.FUNDEB_VAAT_PRINCIPAL,
            ItemReceitaTipos23.FUNDEB_VAAR_PRINCIPAL,
            ItemReceitaTipos23.FUNDEB_RENDIMENTOS_DE_APLICACAO_FINANCEIRA,
            ItemReceitaTipos23.FUNDEB_VAAF_RENDIMENTOS_APLICACAO_FINANCEIRA,
            ItemReceitaTipos23.FUNDEB_VAAT_RENDIMENTOS_APLICACAO_FINANCEIRA,
            ItemReceitaTipos23.FUNDEB_VAAR_RENDIMENTO_APLICACAO_FINANCEIRA,
            ItemReceitaTipos23.FUNDEB__VAAF_RESSARCIMENTO_FUNDEB,
            ItemReceitaTipos23.FUNDEB_VAAT_RESSARCIMENTO_FUNDEB,
            ItemReceitaTipos23.FUNDEB_VAAR_RESSARCIMENTO_FUNDEB,
          ].includes(r.tipo as any),
      );

      return {
        ...item,
        receita: [
          ...filteredReceita,
          {
            tipo: 'COMPLEMENTACAO_UNIAO',
            receitasRealizadaAteBimestre: complementacaoUniao,
          },
          {
            tipo: 'RECEITA_APLICACAO_FINANCEIRA',
            receitasRealizadaAteBimestre: receitaAplicacaoFinanceira,
          },
          {
            tipo: 'RESSARCIMENTO_RECURSOS_FUNDEB',
            receitasRealizadaAteBimestre: ressarcimentoRecursosFundeb,
          },
        ],
      };
    });

    let groupedRevenues = {};

    if (groupType === GroupType.MUNICIPIO) {
      groupedRevenues = this.groupByMunicipio([
        { key: 'modifiedRevenues06', data: modifiedRevenues06 },
        { key: 'revenues0708', data: revenues0708 },
        { key: 'revenues0914', data: revenues0914 },
        { key: 'revenues1520', data: revenues1520 },
        { key: 'modifiedRevenues2122', data: modifiedRevenues2122 },
        { key: 'modifiedRevenues23', data: modifiedRevenues23 },
      ]);
    } else if (groupType == GroupType.ANO) {
      groupedRevenues = this.groupByAno([
        { key: 'modifiedRevenues06', data: modifiedRevenues06 },
        { key: 'revenues0708', data: revenues0708 },
        { key: 'revenues0914', data: revenues0914 },
        { key: 'revenues1520', data: revenues1520 },
        { key: 'modifiedRevenues2122', data: modifiedRevenues2122 },
        { key: 'modifiedRevenues23', data: modifiedRevenues23 },
      ]);
    } else {
      console.log('tipo de agrupamento não corresponde');
    }

    return groupedRevenues;
  }

  async complementationFundebFundef(groupType: GroupType, filters?: object) {
    const revenues06 = await this.prismaService.relatorioMunicipal06.findMany({
      select: {
        ano: true,
        codigoMunicipio: true,
        receita: {
          where: {
            tipo: {
              in: [ItemReceitaTipos06.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEF],
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

    const modifiedRevenues06 = revenues06.map((item) => {
      let totalValue = 0;

      item.receita.forEach((r) => {
        if (r.tipo === ItemReceitaTipos06.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEF) {
          totalValue += r.receitasRealizadasNoAno;
        }
      });

      // Arredondar o totalValue para duas casas decimais
      totalValue = parseFloat(totalValue.toFixed(4));

      return {
        ...item,
        receita: [
          ...item.receita,
          {
            tipo: 'TOTAL',
            receitasRealizadaAteBimestre: totalValue,
          },
        ],
      };
    });

    const revenues0708 =
      await this.prismaService.relatorioMunicipal0708.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [ItemReceitaTipos0708.COMPLEMENTACAO_UNIAO_FUNDEB],
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

    const modifiedRevenues0708 = revenues0708.map((item) => {
      let totalValue = 0;

      item.receita.forEach((r) => {
        if (r.tipo === ItemReceitaTipos0708.COMPLEMENTACAO_UNIAO_FUNDEB) {
          totalValue += r.receitasRealizadasNoAno;
        }
      });

      // Arredondar o totalValue para duas casas decimais
      totalValue = parseFloat(totalValue.toFixed(4));

      return {
        ...item,
        receita: [
          ...item.receita,
          {
            tipo: 'TOTAL',
            receitasRealizadaAteBimestre: totalValue,
          },
        ],
      };
    });

    const revenues0912 =
      await this.prismaService.relatorioMunicipal0912.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [ItemReceitaTipos0912.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB],
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

    const modifiedRevenues0912 = revenues0912.map((item) => {
      let totalValue = 0;

      item.receita.forEach((r) => {
        if (r.tipo === ItemReceitaTipos0912.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB) {
          totalValue += r.receitasRealizadaAteBimestre;
        }
      });

      // Arredondar o totalValue para duas casas decimais
      totalValue = parseFloat(totalValue.toFixed(4));

      return {
        ...item,
        receita: [
          ...item.receita,
          {
            tipo: 'TOTAL',
            receitasRealizadaAteBimestre: totalValue,
          },
        ],
      };
    });

    const revenues1314 =
      await this.prismaService.relatorioMunicipal1314.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [ItemReceitaTipos1314.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB],
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

    const modifiedRevenues1314 = revenues1314.map((item) => {
      let totalValue = 0;

      item.receita.forEach((r) => {
        if (r.tipo === ItemReceitaTipos1314.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB) {
          totalValue += r.receitasRealizadaAteBimestre;
        }
      });

      // Arredondar o totalValue para duas casas decimais
      totalValue = parseFloat(totalValue.toFixed(4));

      return {
        ...item,
        receita: [
          ...item.receita,
          {
            tipo: 'TOTAL',
            receitasRealizadaAteBimestre: totalValue,
          },
        ],
      };
    });

    const modifiedRevenues0914 = [
      ...modifiedRevenues0912,
      ...modifiedRevenues1314,
    ];

    const revenues1516 =
      await this.prismaService.relatorioMunicipal1516.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [ItemReceitaTipos1516.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB],
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

    const modifiedRevenues1516 = revenues1516.map((item) => {
      let totalValue = 0;

      item.receita.forEach((r) => {
        if (r.tipo === ItemReceitaTipos1516.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB) {
          totalValue += r.receitasRealizadaAteBimestre;
        }
      });

      // Arredondar o totalValue para duas casas decimais
      totalValue = parseFloat(totalValue.toFixed(4));

      return {
        ...item,
        receita: [
          ...item.receita,
          {
            tipo: 'TOTAL',
            receitasRealizadaAteBimestre: totalValue,
          },
        ],
      };
    });

    const revenues1718 =
      await this.prismaService.relatorioMunicipal1718.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [ItemReceitaTipos1718.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB],
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

    const modifiedRevenues1718 = revenues1718.map((item) => {
      let totalValue = 0;

      item.receita.forEach((r) => {
        if (r.tipo === ItemReceitaTipos1718.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB) {
          totalValue += r.receitasRealizadaAteBimestre;
        }
      });

      // Arredondar o totalValue para duas casas decimais
      totalValue = parseFloat(totalValue.toFixed(4));

      return {
        ...item,
        receita: [
          ...item.receita,
          {
            tipo: 'TOTAL',
            receitasRealizadaAteBimestre: totalValue,
          },
        ],
      };
    });

    const revenues1920 =
      await this.prismaService.relatorioMunicipal1920.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [ItemReceitaTipos1920.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB],
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

    const modifiedRevenues1920 = revenues1920.map((item) => {
      let totalValue = 0;

      item.receita.forEach((r) => {
        if (r.tipo === ItemReceitaTipos1920.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB) {
          totalValue += r.receitasRealizadaAteBimestre;
        }
      });

      // Arredondar o totalValue para duas casas decimais
      totalValue = parseFloat(totalValue.toFixed(4));

      return {
        ...item,
        receita: [
          ...item.receita,
          {
            tipo: 'TOTAL',
            receitasRealizadaAteBimestre: totalValue,
          },
        ],
      };
    });

    const modifiedRevenues1520 = [
      ...modifiedRevenues1516,
      ...modifiedRevenues1718,
      ...modifiedRevenues1920,
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
                  ItemReceitaTipos21.FUNDEB_PRINCIPAL_6_2_1,
                  ItemReceitaTipos21.FUNDEB_PRINCIPAL_6_3_1,
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

    const modifiedRevenues2122 = revenues2122.map((item) => {
      let totalValue = 0;

      item.receita.forEach((r) => {
        if (
          r.tipo === ItemReceitaTipos21.FUNDEB_PRINCIPAL_6_2_1 ||
          r.tipo === ItemReceitaTipos21.FUNDEB_PRINCIPAL_6_3_1
        ) {
          totalValue += r.receitasRealizadaAteBimestre;
        }
      });

      // Arredondar o totalValue para duas casas decimais
      totalValue = parseFloat(totalValue.toFixed(4));

      return {
        ...item,
        receita: [
          ...item.receita,
          {
            tipo: 'TOTAL',
            receitasRealizadaAteBimestre: totalValue,
          },
        ],
      };
    });

    const revenues23 = await this.prismaService.relatorioMunicipal23.findMany({
      select: {
        ano: true,
        codigoMunicipio: true,
        receita: {
          where: {
            tipo: {
              in: [
                ItemReceitaTipos23.FUNDEB_VAAF_PRINCIPAL,
                ItemReceitaTipos23.FUNDEB_VAAT_PRINCIPAL,
                ItemReceitaTipos23.FUNDEB_VAAR_PRINCIPAL,
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

    const modifiedRevenues23 = revenues23.map((item) => {
      let totalValue = 0;

      item.receita.forEach((r) => {
        if (
          r.tipo === ItemReceitaTipos23.FUNDEB_VAAF_PRINCIPAL ||
          r.tipo === ItemReceitaTipos23.FUNDEB_VAAT_PRINCIPAL ||
          r.tipo === ItemReceitaTipos23.FUNDEB_VAAR_PRINCIPAL
        ) {
          totalValue += r.receitasRealizadasAteBimestre;
        }
      });

      totalValue = parseFloat(totalValue.toFixed(4));

      return {
        ...item,
        receita: [
          ...item.receita,
          {
            tipo: 'TOTAL',
            receitasRealizadaAteBimestre: totalValue,
          },
        ],
      };
    });

    let groupedRevenues = {};

    if (groupType === GroupType.MUNICIPIO) {
      groupedRevenues = this.groupByMunicipio([
        { key: 'modifiedRevenues06', data: modifiedRevenues06 },
        { key: 'modifiedRevenues0708', data: modifiedRevenues0708 },
        { key: 'modifiedRevenues0914', data: modifiedRevenues0914 },
        { key: 'modifiedRevenues1520', data: modifiedRevenues1520 },
        { key: 'modifiedRevenues2122', data: modifiedRevenues2122 },
        { key: 'modifiedRevenues23', data: modifiedRevenues23 },
      ]);
    } else if (groupType == GroupType.ANO) {
      groupedRevenues = this.groupByAno([
        { key: 'modifiedRevenues06', data: modifiedRevenues06 },
        { key: 'modifiedRevenues0708', data: modifiedRevenues0708 },
        { key: 'modifiedRevenues0914', data: modifiedRevenues0914 },
        { key: 'modifiedRevenues1520', data: modifiedRevenues1520 },
        { key: 'modifiedRevenues2122', data: modifiedRevenues2122 },
        { key: 'modifiedRevenues23', data: modifiedRevenues23 },
      ]);
    } else {
      console.log('tipo de agrupamento não corresponde');
    }

    return groupedRevenues;
  }

  async municipalConstitutionalLimitMde(
    groupType: GroupType,
    filters?: object,
  ) {
    const revenues06 = await this.prismaService.relatorioMunicipal06.findMany({
      select: {
        ano: true,
        codigoMunicipio: true,
        receita: {
          where: {
            tipo: {
              in: [ItemReceitaTipos06.RECEITA_RESULTANTE_DE_IMPOSTOS],
            },
          },
          select: {
            receitasRealizadasNoAno: true,
            tipo: true,
          },
        },
        tabelaCumprimentoLimitesConstitucionais: {
          where: {
            tipo: {
              in: [
                TabelaCumprimentoLimitesConstitucionaisTipo06.MINIMO_DE_25_PORCENTO_DAS_RECEITAS_RESULTANTES_DE_IMPOSTOS,
              ],
            },
          },
          select: {
            porcentagem: true,
            tipo: true,
          },
        },
      },
      where: {
        ...filters,
      },
    });

    const modifiedRevenues06 = revenues06.map((item) => {
      let receitaResultanteDeImpostos = 0;
      let minimo25PorcentoDasReceitasResultantesDeImpostos = 0;

      item.receita.forEach((r) => {
        if (r.tipo === ItemReceitaTipos06.RECEITA_RESULTANTE_DE_IMPOSTOS) {
          receitaResultanteDeImpostos = r.receitasRealizadasNoAno * 0.25;
        }
      });

      item.tabelaCumprimentoLimitesConstitucionais.forEach((t) => {
        if (
          t.tipo ===
          TabelaCumprimentoLimitesConstitucionaisTipo06.MINIMO_DE_25_PORCENTO_DAS_RECEITAS_RESULTANTES_DE_IMPOSTOS
        ) {
          minimo25PorcentoDasReceitasResultantesDeImpostos = t.porcentagem;
        }
      });

      const valorExigidoMde = parseFloat(
        receitaResultanteDeImpostos.toFixed(4),
      );
      const valorAplicadoMde = parseFloat(
        (
          (receitaResultanteDeImpostos / 100) *
          minimo25PorcentoDasReceitasResultantesDeImpostos
        ).toFixed(4),
      );

      const filteredReceitas = item.receita.filter(
        (r) => r.tipo !== ItemReceitaTipos06.RECEITA_RESULTANTE_DE_IMPOSTOS,
      );

      return {
        ...item,
        receita: [
          ...filteredReceitas,
          {
            tipo: 'VALOR_EXIGIDO_MDE',
            receitasRealizadasNoAno: valorExigidoMde,
          },
          {
            tipo: 'VALOR_APLICADO_MDE',
            receitasRealizadasNoAno: valorAplicadoMde,
          },
        ],
      };
    });

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
                ],
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
                  DeducoesAdicoesParaFinsLimiteConstitucionalTipo0708.MINIMO_DE_25_PORCENTO_DAS_RECEITAS_RESULTANTES_DE_IMPOSTOS,
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

    const modifiedRevenues0708 = revenues0708.map((item) => {
      let totalDespesasComAcoesTipicasMde = 0;
      let totalDeducoesAdicoesParaFinsDeLimiteConstitucional = 0;

      item.despesa.forEach((d) => {
        if (
          d.tipo === ItemDespesaTipos0708.TOTAL_DESPESAS_COM_ACOES_TIPICAS_MDE
        ) {
          totalDespesasComAcoesTipicasMde = d.despesasEmpenhadasNoAno;
        }
      });

      item.deducoesAdicoesParaFinsLimiteConstitucional.forEach((d) => {
        if (
          d.tipo ===
          DeducoesAdicoesParaFinsLimiteConstitucionalTipo0708.TOTAL_DE_DEDUCOES_ADICOES_PARA_FINS_DE_LIMITE_CONSTITUCIONAL
        ) {
          totalDeducoesAdicoesParaFinsDeLimiteConstitucional = d.valor;
        }
      });

      const valorAplicadoMdde = parseFloat(
        (
          totalDespesasComAcoesTipicasMde -
          totalDeducoesAdicoesParaFinsDeLimiteConstitucional
        ).toFixed(4),
      );

      const filteredDespesa = item.despesa.filter(
        (d) =>
          d.tipo !== ItemDespesaTipos0708.TOTAL_DESPESAS_COM_ACOES_TIPICAS_MDE,
      );
      const filteredDeducoes =
        item.deducoesAdicoesParaFinsLimiteConstitucional.filter(
          (d) =>
            d.tipo !==
            DeducoesAdicoesParaFinsLimiteConstitucionalTipo0708.TOTAL_DE_DEDUCOES_ADICOES_PARA_FINS_DE_LIMITE_CONSTITUCIONAL,
        );

      return {
        ...item,
        despesa: [
          ...filteredDespesa,
          {
            tipo: 'VALOR_APLICADO_MDE',
            despesasEmpenhadasNoAno: valorAplicadoMdde,
          },
        ],
        deducoesAdicoesParaFinsLimiteConstitucional: filteredDeducoes,
      };
    });

    const revenues0912 =
      await this.prismaService.relatorioMunicipal0912.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
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
          deducoesParaFinsDeLimitesConstitucional: {
            where: {
              tipo: {
                in: [
                  DeducoesParaFinsDeLimitesConstitucionalTipo0912.TOTAL_DE_DESPESAS_PARA_FINS_DE_LIMITE,
                  DeducoesParaFinsDeLimitesConstitucionalTipo0912.MINIMO_DE_25_PORCENTO_DAS_RECEITAS_RESULTANTES_DE_IMPOSTOS_MDE,
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

    const modifiedRevenues0912 = revenues0912.map((item) => {
      let totalReceitaImpostos = 0;

      item.receita.forEach((r) => {
        if (r.tipo === ItemReceitaTipos0912.TOTAL_RECEITA_IMPOSTOS) {
          totalReceitaImpostos = 0.25 * r.receitasRealizadaAteBimestre;
        }
      });

      const valorExigidoMde = parseFloat(totalReceitaImpostos.toFixed(4));

      const filteredReceita = item.receita.filter(
        (r) => r.tipo !== ItemReceitaTipos0912.TOTAL_RECEITA_IMPOSTOS,
      );

      return {
        ...item,
        receita: [
          ...filteredReceita,
          {
            tipo: 'VALOR_EXIGIDO_MDE',
            receitasRealizadaAteBimestre: valorExigidoMde,
          },
        ],
      };
    });

    const revenues1314 =
      await this.prismaService.relatorioMunicipal1314.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
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
          deducoesParaFinsDeLimitesConstitucional: {
            where: {
              tipo: {
                in: [
                  DeducoesParaFinsDeLimitesConstitucionalTipo1314.TOTAL_DE_DESPESAS_PARA_FINS_DE_LIMITE,
                  DeducoesParaFinsDeLimitesConstitucionalTipo1314.MINIMO_DE_25_PORCENTO_DAS_RECEITAS_RESULTANTES_DE_IMPOSTOS_MDE,
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

    const modifiedRevenues1314 = revenues1314.map((item) => {
      let totalReceitaImpostos = 0;

      item.receita.forEach((r) => {
        if (r.tipo === ItemReceitaTipos1314.TOTAL_RECEITA_IMPOSTOS) {
          totalReceitaImpostos = 0.25 * r.receitasRealizadaAteBimestre;
        }
      });

      const valorExigidoMde = parseFloat(totalReceitaImpostos.toFixed(4));

      const filteredReceita = item.receita.filter(
        (r) => r.tipo !== ItemReceitaTipos1314.TOTAL_RECEITA_IMPOSTOS,
      );

      return {
        ...item,
        receita: [
          ...filteredReceita,
          {
            tipo: 'VALOR_EXIGIDO_MDE',
            receitasRealizadaAteBimestre: valorExigidoMde,
          },
        ],
      };
    });

    const revenues1516 =
      await this.prismaService.relatorioMunicipal1516.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
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
          deducoesParaFinsDeLimitesConstitucional: {
            where: {
              tipo: {
                in: [
                  DeducoesParaFinsDeLimitesConstitucionalTipo1516.TOTAL_DE_DESPESAS_PARA_FINS_DE_LIMITE,
                  DeducoesParaFinsDeLimitesConstitucionalTipo1516.MINIMO_DE_25_PORCENTO_DAS_RECEITAS_RESULTANTES_DE_IMPOSTOS_MDE,
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

    const modifiedRevenues1516 = revenues1516.map((item) => {
      let totalReceitaImpostos = 0;

      item.receita.forEach((r) => {
        if (r.tipo === ItemReceitaTipos1516.TOTAL_RECEITA_IMPOSTOS) {
          totalReceitaImpostos = 0.25 * r.receitasRealizadaAteBimestre;
        }
      });

      const valorExigidoMde = parseFloat(totalReceitaImpostos.toFixed(4));

      const filteredReceita = item.receita.filter(
        (r) => r.tipo !== ItemReceitaTipos1516.TOTAL_RECEITA_IMPOSTOS,
      );

      return {
        ...item,
        receita: [
          ...filteredReceita,
          {
            tipo: 'VALOR_EXIGIDO_MDE',
            receitasRealizadaAteBimestre: valorExigidoMde,
          },
        ],
      };
    });

    const modifiedRevenues0916 = [
      ...modifiedRevenues0912,
      ...modifiedRevenues1314,
      ...modifiedRevenues1516,
    ];

    const revenues1718 =
      await this.prismaService.relatorioMunicipal1718.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
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
          deducoesParaFinsDeLimitesConstitucional: {
            where: {
              tipo: {
                in: [
                  DeducoesParaFinsDeLimitesConstitucionalTipo1718.TOTAL_DE_DESPESAS_PARA_FINS_DE_LIMITE,
                  DeducoesParaFinsDeLimitesConstitucionalTipo1718.PERCENTUAL_DE_APLICACAO_MDE_SOBRE_RECEITA_LIQUIDA_IMPOSTOS,
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

    const modifiedRevenues1718 = revenues1718.map((item) => {
      let totalReceitaImpostos = 0;

      item.receita.forEach((r) => {
        if (r.tipo === ItemReceitaTipos1718.TOTAL_RECEITA_IMPOSTOS) {
          totalReceitaImpostos = 0.25 * r.receitasRealizadaAteBimestre;
        }
      });

      const valorExigidoMde = parseFloat(totalReceitaImpostos.toFixed(4));

      const filteredReceita = item.receita.filter(
        (r) => r.tipo !== ItemReceitaTipos1718.TOTAL_RECEITA_IMPOSTOS,
      );

      return {
        ...item,
        receita: [
          ...filteredReceita,
          {
            tipo: 'VALOR_EXIGIDO_MDE',
            receitasRealizadaAteBimestre: valorExigidoMde,
          },
        ],
      };
    });

    const revenues1920 =
      await this.prismaService.relatorioMunicipal1920.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
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
          deducoesParaFinsDeLimitesConstitucional: {
            where: {
              tipo: {
                in: [
                  DeducoesParaFinsDeLimitesConstitucionalTipo1920.TOTAL_DE_DESPESAS_PARA_FINS_DE_LIMITE,
                  DeducoesParaFinsDeLimitesConstitucionalTipo1920.PERCENTUAL_DE_APLICACAO_MDE_SOBRE_RECEITA_LIQUIDA_IMPOSTOS,
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

    const modifiedRevenues1920 = revenues1920.map((item) => {
      let totalReceitaImpostos = 0;

      item.receita.forEach((r) => {
        if (r.tipo === ItemReceitaTipos1920.TOTAL_RECEITA_IMPOSTOS) {
          totalReceitaImpostos = 0.25 * r.receitasRealizadaAteBimestre;
          console.log(
            item.codigoMunicipio + ':' + r.receitasRealizadaAteBimestre,
            totalReceitaImpostos,
          );
        }
      });

      const valorExigidoMde = parseFloat(totalReceitaImpostos.toFixed(4));

      console.log(item.codigoMunicipio, valorExigidoMde);

      const filteredReceita = item.receita.filter(
        (r) => r.tipo !== ItemReceitaTipos1920.TOTAL_RECEITA_IMPOSTOS,
      );

      return {
        ...item,
        receita: [
          ...filteredReceita,
          {
            tipo: 'VALOR_EXIGIDO_MDE',
            receitasRealizadaAteBimestre: valorExigidoMde,
          },
        ],
      };
    });

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
              valorAplicado: true,
              percentualAplicado: true,
              tipo: true,
            },
          },
        },
        where: {
          ...filters,
        },
      },
    );

    const modifiedRevenues2122 = revenues2122.map((item) => {
      let valorExigidoMde = 0;
      let valorAplicadoMde = 0;
      let percentualAplicadoMde = 0;

      item.apuracaoLimiteMinimoConstitucional.forEach((r) => {
        if (
          r.tipo ===
          ApuracaoLimiteMinimoConstitucionalTipos21.APLICACAO_EM_MDE_SOBRE_RECEITA_DE_IMPOSTOS
        ) {
          valorExigidoMde = r.valorExigido;
          valorAplicadoMde = r.valorAplicado;
          percentualAplicadoMde = r.percentualAplicado;
        }
      });

      valorExigidoMde = parseFloat(valorExigidoMde.toFixed(4));
      valorAplicadoMde = parseFloat(valorAplicadoMde.toFixed(4));
      percentualAplicadoMde = parseFloat(percentualAplicadoMde.toFixed(4));

      const filteredApuracao = item.apuracaoLimiteMinimoConstitucional.filter(
        (r) =>
          r.tipo !==
          ApuracaoLimiteMinimoConstitucionalTipos21.APLICACAO_EM_MDE_SOBRE_RECEITA_DE_IMPOSTOS,
      );

      return {
        ...item,
        apuracaoLimiteMinimoConstitucional: [
          ...filteredApuracao,
          {
            tipo: 'VALOR_EXIGIDO_MDE',
            valor: valorExigidoMde,
          },
          {
            tipo: 'VALOR_APLICADO_MDE',
            valor: valorAplicadoMde,
          },
          {
            tipo: 'PERCENTUAL_APLICADO_MDE',
            valor: percentualAplicadoMde,
          },
        ],
      };
    });

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
            valorAplicado: true,
            percentualAplicado: true,
            tipo: true,
          },
        },
      },
      where: {
        ...filters,
      },
    });

    const modifiedRevenues23 = revenues23.map((item) => {
      let valorExigidoMde = 0;
      let valorAplicadoMde = 0;
      let percentualAplicado = 0;

      item.apuracaoLimiteMinimoConstitucional.forEach((r) => {
        if (
          r.tipo ===
          ApuracaoLimiteMinimoConstitucionalTipos23.APLICACAO_EM_MDE_SOBRE_RECEITA_LIQUIDA_DE_IMPOSTOS
        ) {
          valorExigidoMde = r.valorExigido;
          valorAplicadoMde = r.valorAplicado;
          percentualAplicado = r.percentualAplicado;
        }
      });

      valorExigidoMde = parseFloat(valorExigidoMde.toFixed(4));
      valorAplicadoMde = parseFloat(valorAplicadoMde.toFixed(4));

      const filteredApuracao = item.apuracaoLimiteMinimoConstitucional.filter(
        (r) =>
          r.tipo !==
          ApuracaoLimiteMinimoConstitucionalTipos23.APLICACAO_EM_MDE_SOBRE_RECEITA_LIQUIDA_DE_IMPOSTOS,
      );

      return {
        ...item,
        apuracaoLimiteMinimoConstitucional: [
          ...filteredApuracao,
          {
            tipo: 'VALOR_EXIGIDO_MDE',
            valor: valorExigidoMde,
          },
          {
            tipo: 'VALOR_APLICADO_MDE',
            valor: valorAplicadoMde,
          },
          {
            tipo: 'PERCENTUAL_APLICADO_MDE',
            valor: percentualAplicado,
          },
        ],
      };
    });

    let groupedRevenues = {};

    if (groupType === GroupType.MUNICIPIO) {
      groupedRevenues = this.groupByMunicipio([
        { key: 'modifiedRevenues06', data: modifiedRevenues06 },
        { key: 'modifiedRevenues0708', data: modifiedRevenues0708 },
        { key: 'modifiedRevenues0916', data: modifiedRevenues0916 },
        { key: 'modifiedRevenues1718', data: modifiedRevenues1718 },
        { key: 'modifiedRevenues1920', data: modifiedRevenues1920 },
        { key: 'modifiedRevenues2122', data: modifiedRevenues2122 },
        { key: 'modifiedRevenues23', data: modifiedRevenues23 },
      ]);
    } else if (groupType == GroupType.ANO) {
      groupedRevenues = this.groupByAno([
        { key: 'modifiedRevenues06', data: modifiedRevenues06 },
        { key: 'modifiedRevenues0708', data: modifiedRevenues0708 },
        { key: 'modifiedRevenues0916', data: modifiedRevenues0916 },
        { key: 'modifiedRevenues1718', data: modifiedRevenues1718 },
        { key: 'modifiedRevenues1920', data: modifiedRevenues1920 },
        { key: 'modifiedRevenues2122', data: modifiedRevenues2122 },
        { key: 'modifiedRevenues23', data: modifiedRevenues23 },
      ]);
    } else {
      console.log('tipo de agrupamento não corresponde');
    }

    return groupedRevenues;
  }

  async expensesBasicEducationFundeb(groupType: GroupType, filters?: object) {
    const revenues06 = await this.prismaService.relatorioMunicipal06.findMany({
      select: {
        ano: true,
        codigoMunicipio: true,
        despesa: {
          where: {
            tipo: {
              in: [
                ItemDespesaTipos06.PAGAMENTO_PROFISSIONAIS_MAGISTERIO_DO_ENSINO_FUNDAMENTAL,
              ],
            },
          },
          select: {
            despesasLiquidadasNoAno: true,
            tipo: true,
          },
        },
        tabelaCumprimentoLimitesConstitucionais: {
          where: {
            tipo: {
              in: [
                TabelaCumprimentoLimitesConstitucionaisTipo06.MINIMO_60_PORCENTO_DO_FUNDEF_NA_REMUNERACAO_ENSINO_FUNDAMENTAL,
              ],
            },
          },
          select: {
            porcentagem: true,
            tipo: true,
          },
        },
      },
      where: {
        ...filters,
      },
    });

    const revenues0708 =
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
          minimo60PorCentoFundeb: {
            where: {
              tipo: {
                in: [
                  Minimo60PorCentoFundebTipo0708.MINIMO_60_PORCENTO_FUNDEB_REMUNERACAO_MAGISTERIO_EDUCACAO,
                ],
              },
            },
            select: {
              despesasRealizadasPercentual: true,
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
                  DeducoesFundebMagisterioTipo0912.MINIMO_60_PORCENTO_FUNDEB_REMUNERACAO_MAGISTERIO_EDUCACAO,
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

    const modifiedRevenues0912 = revenues0912.map((item) => {
      let fundebPagamentoProfissionaisMagisterio = 0;
      let totalDeducoesParaFinsLimiteFundeb = 0;

      item.despesa.forEach((d) => {
        if (
          d.tipo ===
          ItemDespesaTipos0912.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO
        ) {
          fundebPagamentoProfissionaisMagisterio =
            d.despesasLiquidadasAteBimestre;
        }
      });

      item.deducoesFundebMagisterio.forEach((d) => {
        if (
          d.tipo ===
          DeducoesFundebMagisterioTipo0912.TOTAL_DEDUCOES_PARA_FINS_LIMITE_FUNDEB
        ) {
          totalDeducoesParaFinsLimiteFundeb = d.valor;
        }
      });

      const despesasProfissionaisEducacao = parseFloat(
        (
          fundebPagamentoProfissionaisMagisterio -
          totalDeducoesParaFinsLimiteFundeb
        ).toFixed(4),
      );

      // Remove os tipos que foram usados no cálculo
      const filteredDespesas = item.despesa.filter(
        (d) =>
          d.tipo !==
          ItemDespesaTipos0912.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO,
      );
      const filteredDeducoes = item.deducoesFundebMagisterio.filter(
        (d) =>
          d.tipo !==
          DeducoesFundebMagisterioTipo0912.TOTAL_DEDUCOES_PARA_FINS_LIMITE_FUNDEB,
      );

      return {
        ...item,
        despesa: [
          ...filteredDespesas,
          {
            tipo: 'DESPESAS_PROFISSIONAIS_EDUCACAO',
            despesasLiquidadasAteBimestre: despesasProfissionaisEducacao,
          },
        ],
        deducoesFundebMagisterio: filteredDeducoes,
      };
    });

    const revenues1314 =
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
          indicadoresFundeb: {
            where: {
              tipo: {
                in: [
                  IndicadoresFundebTipo1314.MINIMO_60_PORCENTO_FUNDEB_REMUNERACAO_MAGISTERIO,
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

    const modifiedRevenues1314 = revenues1314.map((item) => {
      let fundebPagamentoProfissionaisMagisterio = 0;
      let deducoesFundeb60Porcento16_1 = 0;
      let deducoesFundeb60Porcento17_1 = 0;

      item.despesa.forEach((d) => {
        if (
          d.tipo ===
          ItemDespesaTipos1314.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO
        ) {
          fundebPagamentoProfissionaisMagisterio =
            d.despesasLiquidadasAteBimestre;
        }
      });

      item.deducoesParaFinsLimiteFundeb.forEach((d) => {
        if (
          d.tipo === DeducoesFinsLimiteFundebTipo1314.FUNDEB_60_PORCENTO_16_1
        ) {
          deducoesFundeb60Porcento16_1 = d.valor;
        }
        if (
          d.tipo === DeducoesFinsLimiteFundebTipo1314.FUNDEB_60_PORCENTO_17_1
        ) {
          deducoesFundeb60Porcento17_1 = d.valor;
        }
      });

      const despesasProfissionaisEducacao = parseFloat(
        (
          fundebPagamentoProfissionaisMagisterio -
          (deducoesFundeb60Porcento16_1 + deducoesFundeb60Porcento17_1)
        ).toFixed(4),
      );

      // Remove os tipos que foram usados no cálculo
      const filteredDespesas = item.despesa.filter(
        (d) =>
          d.tipo !==
          ItemDespesaTipos1314.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO,
      );

      const filteredDeducoes = item.deducoesParaFinsLimiteFundeb.filter(
        (d) =>
          d.tipo !== DeducoesFinsLimiteFundebTipo1314.FUNDEB_60_PORCENTO_16_1 &&
          d.tipo !== DeducoesFinsLimiteFundebTipo1314.FUNDEB_60_PORCENTO_17_1,
      );

      return {
        ...item,
        despesa: [
          ...filteredDespesas,
          {
            tipo: 'DESPESAS_PROFISSIONAIS_EDUCACAO',
            despesasLiquidadasAteBimestre: despesasProfissionaisEducacao,
          },
        ],
        deducoesParaFinsLimiteFundeb: filteredDeducoes,
      };
    });

    const revenues1516 =
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
          indicadoresFundeb: {
            where: {
              tipo: {
                in: [
                  IndicadoresFundebTipo1516.MINIMO_60_PORCENTO_FUNDEB_REMUNERACAO_MAGISTERIO,
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

    const modifiedRevenues1516 = revenues1516.map((item) => {
      let fundebPagamentoProfissionaisMagisterio = 0;
      let deducoesFundeb60Porcento16_1 = 0;
      let deducoesFundeb60Porcento17_1 = 0;

      item.despesa.forEach((d) => {
        if (
          d.tipo ===
          ItemDespesaTipos1516.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO
        ) {
          fundebPagamentoProfissionaisMagisterio =
            d.despesasLiquidadasAteBimestre;
        }
      });

      item.deducoesParaFinsLimiteFundeb.forEach((d) => {
        if (
          d.tipo ===
          DeducoesFinsLimiteFundebTipo1516.RESTOS_A_PAGAR_SEM_DISPONIBILIDADE_FINANCEIRA_60_PORCENTO
        ) {
          deducoesFundeb60Porcento16_1 = d.valor;
        }
        if (
          d.tipo ===
          DeducoesFinsLimiteFundebTipo1516.DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR_60_PORCENTO
        ) {
          deducoesFundeb60Porcento17_1 = d.valor;
        }
      });

      const despesasProfissionaisEducacao = parseFloat(
        (
          fundebPagamentoProfissionaisMagisterio -
          (deducoesFundeb60Porcento16_1 + deducoesFundeb60Porcento17_1)
        ).toFixed(4),
      );

      // Remove os tipos que foram usados no cálculo
      const filteredDespesas = item.despesa.filter(
        (d) =>
          d.tipo !==
          ItemDespesaTipos1516.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO,
      );
      const filteredDeducoes = item.deducoesParaFinsLimiteFundeb.filter(
        (d) =>
          d.tipo !==
            DeducoesFinsLimiteFundebTipo1516.RESTOS_A_PAGAR_SEM_DISPONIBILIDADE_FINANCEIRA_60_PORCENTO &&
          d.tipo !==
            DeducoesFinsLimiteFundebTipo1516.DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR_60_PORCENTO,
      );

      return {
        ...item,
        despesa: [
          ...filteredDespesas,
          {
            tipo: 'DESPESAS_PROFISSIONAIS_EDUCACAO',
            despesasLiquidadasAteBimestre: despesasProfissionaisEducacao,
          },
        ],
        deducoesParaFinsLimiteFundeb: filteredDeducoes,
      };
    });

    const revenues1718 =
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
          indicadoresFundeb: {
            where: {
              tipo: {
                in: [
                  IndicadoresFundebTipo1718.MINIMO_60_PORCENTO_FUNDEB_REMUNERACAO_MAGISTERIO,
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

    const modifiedRevenues1718 = revenues1718.map((item) => {
      let fundebPagamentoProfissionaisMagisterio = 0;
      let deducoesFundeb60Porcento16_1 = 0;
      let deducoesFundeb60Porcento17_1 = 0;

      item.despesa.forEach((d) => {
        if (
          d.tipo ===
          ItemDespesaTipos1718.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO
        ) {
          fundebPagamentoProfissionaisMagisterio =
            d.despesasLiquidadasAteBimestre;
        }
      });

      if (item.codigoMunicipio == '220190') {
        console.log(item);
      }

      item.deducoesParaFinsLimiteFundeb.forEach((d) => {
        if (
          d.tipo ===
          DeducoesFinsLimiteFundebTipo1718.RESTOS_A_PAGAR_SEM_DISPONIBILIDADE_FINANCEIRA_60_PORCENTO
        ) {
          deducoesFundeb60Porcento16_1 = d.valor;
          console.log(
            item.codigoMunicipio + ' ' + deducoesFundeb60Porcento16_1,
          );
        }
        if (
          d.tipo ===
          DeducoesFinsLimiteFundebTipo1718.DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR_60_PORCENTO
        ) {
          deducoesFundeb60Porcento17_1 = d.valor;
          console.log(
            item.codigoMunicipio + ' ' + deducoesFundeb60Porcento17_1,
          );
        }
      });

      const despesasProfissionaisEducacao = parseFloat(
        (
          fundebPagamentoProfissionaisMagisterio -
          (deducoesFundeb60Porcento16_1 + deducoesFundeb60Porcento17_1)
        ).toFixed(4),
      );

      // Remove os tipos que foram usados no cálculo
      const filteredDespesas = item.despesa.filter(
        (d) =>
          d.tipo !==
          ItemDespesaTipos1718.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO,
      );
      const filteredDeducoes = item.deducoesParaFinsLimiteFundeb.filter(
        (d) =>
          d.tipo !==
            DeducoesFinsLimiteFundebTipo1718.RESTOS_A_PAGAR_SEM_DISPONIBILIDADE_FINANCEIRA_60_PORCENTO &&
          d.tipo !==
            DeducoesFinsLimiteFundebTipo1718.DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR_60_PORCENTO,
      );

      return {
        ...item,
        despesa: [
          ...filteredDespesas,
          {
            tipo: 'DESPESAS_PROFISSIONAIS_EDUCACAO',
            despesasLiquidadasAteBimestre: despesasProfissionaisEducacao,
          },
        ],
        deducoesParaFinsLimiteFundeb: filteredDeducoes,
      };
    });

    const revenues1920 =
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
          indicadoresFundeb: {
            where: {
              tipo: {
                in: [
                  IndicadoresFundebTipo1920.MINIMO_60_PORCENTO_FUNDEB_REMUNERACAO_MAGISTERIO,
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

    const modifiedRevenues1920 = revenues1920.map((item) => {
      let fundebPagamentoProfissionaisMagisterio = 0;
      let deducoesFundeb60Porcento16_1 = 0;
      let deducoesFundeb60Porcento17_1 = 0;

      item.despesa.forEach((d) => {
        if (
          d.tipo ===
          ItemDespesaTipos1920.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO
        ) {
          fundebPagamentoProfissionaisMagisterio =
            d.despesasLiquidadasAteBimestre;
        }
      });

      item.deducoesParaFinsLimiteFundeb.forEach((d) => {
        if (
          d.tipo ===
          DeducoesFinsLimiteFundebTipo1920.RESTOS_A_PAGAR_SEM_DISPONIBILIDADE_FINANCEIRA_60_PORCENTO
        ) {
          deducoesFundeb60Porcento16_1 = d.valor;
        }
        if (
          d.tipo ===
          DeducoesFinsLimiteFundebTipo1920.DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR_60_PORCENTO
        ) {
          deducoesFundeb60Porcento17_1 = d.valor;
        }
      });

      const despesasProfissionaisEducacao = parseFloat(
        (
          fundebPagamentoProfissionaisMagisterio -
          (deducoesFundeb60Porcento16_1 + deducoesFundeb60Porcento17_1)
        ).toFixed(4),
      );

      // Remove os tipos que foram usados no cálculo
      const filteredDespesas = item.despesa.filter(
        (d) =>
          d.tipo !==
          ItemDespesaTipos1920.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO,
      );
      const filteredDeducoes = item.deducoesParaFinsLimiteFundeb.filter(
        (d) =>
          d.tipo !==
            DeducoesFinsLimiteFundebTipo1920.RESTOS_A_PAGAR_SEM_DISPONIBILIDADE_FINANCEIRA_60_PORCENTO &&
          d.tipo !==
            DeducoesFinsLimiteFundebTipo1920.DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR_60_PORCENTO,
      );

      return {
        ...item,
        despesa: [
          ...filteredDespesas,
          {
            tipo: 'DESPESAS_PROFISSIONAIS_EDUCACAO',
            despesasLiquidadasAteBimestre: despesasProfissionaisEducacao,
          },
        ],
        deducoesParaFinsLimiteFundeb: filteredDeducoes,
      };
    });

    const modifiedRevenues1520 = [
      ...modifiedRevenues1516,
      ...modifiedRevenues1718,
      ...modifiedRevenues1920,
    ];

    const revenues2122 = await this.prismaService.relatorioMunicipal21.findMany(
      {
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
              percentualAplicado: true,
              tipo: true,
            },
          },
        },
        where: {
          ...filters,
        },
      },
    );

    const modifiedRevenues2122 = revenues2122.map((item) => {
      let despesasProfissionaisEducacaoBasica = 0;
      let porcentagemAplicadoProfissionaisEducacaoBasica = 0;

      item.indicadoresArt212.forEach((r) => {
        if (
          r.tipo ===
          IndicadoresTipos21Art212.MINIMO_70_FUNDEB_REMUNERACAO_PROFESSORES
        ) {
          despesasProfissionaisEducacaoBasica = r.valorConsideradoAposDeducoes;
          porcentagemAplicadoProfissionaisEducacaoBasica = r.percentualAplicado;
        }
      });

      despesasProfissionaisEducacaoBasica = parseFloat(
        despesasProfissionaisEducacaoBasica.toFixed(4),
      );
      porcentagemAplicadoProfissionaisEducacaoBasica = parseFloat(
        porcentagemAplicadoProfissionaisEducacaoBasica.toFixed(4),
      );

      const filteredReceita = item.indicadoresArt212.filter(
        (r) =>
          r.tipo !==
          IndicadoresTipos21Art212.MINIMO_70_FUNDEB_REMUNERACAO_PROFESSORES,
      );

      return {
        ...item,
        indicadoresArt212: [
          ...filteredReceita,
          {
            tipo: 'DESPESAS_PROFISSIONAIS_EDUCACAO',
            valor: despesasProfissionaisEducacaoBasica,
          },
          {
            tipo: 'PERCENTUAL_APLICADO_PROFISSIONAIS_EDUCACAO',
            valor: porcentagemAplicadoProfissionaisEducacaoBasica,
          },
        ],
      };
    });

    const revenues23 = await this.prismaService.relatorioMunicipal23.findMany({
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
            percentualAplicado: true,
            tipo: true,
          },
        },
      },
      where: {
        ...filters,
      },
    });

    const modifiedRevenues23 = revenues23.map((item) => {
      let despesasProfissionaisEducacaoBasica = 0;
      let porcentagemAplicadoProfissionaisEducacaoBasica = 0;

      item.indicadoresArt212.forEach((r) => {
        if (
          r.tipo ===
          IndicadoresArt212Tipos23.MINIMO_70_PORCENTO_FUNDEB_PROFISSIONAIS_EDUCACAO_BASICA
        ) {
          despesasProfissionaisEducacaoBasica = r.valorConsideradoAposDeducoes;
          porcentagemAplicadoProfissionaisEducacaoBasica = r.percentualAplicado;
        }
      });

      despesasProfissionaisEducacaoBasica = parseFloat(
        despesasProfissionaisEducacaoBasica.toFixed(4),
      );
      porcentagemAplicadoProfissionaisEducacaoBasica = parseFloat(
        porcentagemAplicadoProfissionaisEducacaoBasica.toFixed(4),
      );

      const filteredReceita = item.indicadoresArt212.filter(
        (r) =>
          r.tipo !==
          IndicadoresArt212Tipos23.MINIMO_70_PORCENTO_FUNDEB_PROFISSIONAIS_EDUCACAO_BASICA,
      );

      return {
        ...item,
        indicadoresArt212: [
          ...filteredReceita,
          {
            tipo: 'DESPESAS_PROFISSIONAIS_EDUCACAO',
            valor: despesasProfissionaisEducacaoBasica,
          },
          {
            tipo: 'PERCENTUAL_APLICADO_PROFISSIONAIS_EDUCACAO',
            valor: porcentagemAplicadoProfissionaisEducacaoBasica,
          },
        ],
      };
    });

    let groupedRevenues = {};

    if (groupType === GroupType.MUNICIPIO) {
      groupedRevenues = this.groupByMunicipio([
        { key: 'revenues06', data: revenues06 },
        { key: 'revenues0708', data: revenues0708 },
        { key: 'modifiedRenevues0912', data: modifiedRevenues0912 },
        { key: 'modifiedRenevues1314', data: modifiedRevenues1314 },
        { key: 'modifiedRevenues1520', data: modifiedRevenues1520 },
        { key: 'modifiedRevenues2122', data: modifiedRevenues2122 },
        { key: 'modifiedRevenues23', data: modifiedRevenues23 },
      ]);
    } else if (groupType == GroupType.ANO) {
      groupedRevenues = this.groupByAno([
        { key: 'revenues06', data: revenues06 },
        { key: 'revenues0708', data: revenues0708 },
        { key: 'modifiedRenevues0912', data: modifiedRevenues0912 },
        { key: 'modifiedRenevues1314', data: modifiedRevenues1314 },
        { key: 'modifiedRevenues1520', data: modifiedRevenues1520 },
        { key: 'modifiedRevenues2122', data: modifiedRevenues2122 },
        { key: 'modifiedRevenues23', data: modifiedRevenues23 },
      ]);
    } else {
      console.log('tipo de agrupamento não corresponde');
    }

    return groupedRevenues;
  }

  async expensesAreasOfActivityMde(groupType: GroupType, filters?: object) {
    const revenues06 = await this.prismaService.relatorioMunicipal06.findMany({
      select: {
        ano: true,
        codigoMunicipio: true,
        despesa: {
          where: {
            tipo: {
              in: [
                ItemDespesaTipos06.EDUCACAO_INFANTIL,
                ItemDespesaTipos06.ENSINO_FUNDAMENTAL,
                ItemDespesaTipos06.ENSINO_MEDIO,
                ItemDespesaTipos06.ENSINO_SUPERIOR,
                ItemDespesaTipos06.EDUCACAO_ESPECIAL,
                ItemDespesaTipos06.EDUCACAO_DE_JOVENS_E_ADULTOS,
                ItemDespesaTipos06.ENSINO_PROFISSIONAL,
                ItemDespesaTipos06.OUTRAS_SUBFUNCOES,
                ItemDespesaTipos06.TOTAL_DAS_DESPESAS_COM_ENSINO_POR_SUBFUNCAO,
              ],
            },
          },
          select: {
            despesasLiquidadasNoAno: true,
            tipo: true,
          },
        },
      },
      where: {
        ...filters,
      },
    });

    const revenues0708 =
      await this.prismaService.relatorioMunicipal0708.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          despesa: {
            where: {
              tipo: {
                in: [
                  ItemDespesaTipos0708.MDE_EDUCACAO_INFANTIL,
                  ItemDespesaTipos0708.MDE_ENSINO_FUNDAMENTAL,
                  ItemDespesaTipos0708.MDE_DESPESAS_ENSINO_MEDIO,
                  ItemDespesaTipos0708.MDE_DESPESAS_ENSINO_SUPERIOR,
                  ItemDespesaTipos0708.MDE_DESPESAS_ENSINO_PROFISSIONAL_NAO_INTEGRADO_ENSINO_REGULAR,
                  ItemDespesaTipos0708.MDE_OUTRAS_DESPESAS,
                  ItemDespesaTipos0708.TOTAL_DESPESAS_COM_ACOES_TIPICAS_MDE,
                ],
              },
            },
            select: {
              despesasEmpenhadasNoAno: true,
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
          despesa: {
            where: {
              tipo: {
                in: [
                  ItemDespesaTipos0912.MDE_DESPESAS_EDUCACAO_INFANTIL,
                  ItemDespesaTipos0912.MDE_DESPESAS_ENSINO_FUNDAMENTAL,
                  ItemDespesaTipos0912.MDE_DESPESAS_ENSINO_MEDIO,
                  ItemDespesaTipos0912.MDE_DESPESAS_ENSINO_SUPERIOR,
                  ItemDespesaTipos0912.MDE_DESPESAS_ENSINO_PROFISSIONAL_NAO_INTEGRADO_ENSINO_REGULAR,
                  ItemDespesaTipos0912.MDE_OUTRAS_DESPESAS,
                  ItemDespesaTipos0912.MDE_TOTAL_DESPESAS_ACOES_TIPICAS,
                ],
              },
            },
            select: {
              despesasLiquidadasAteBimestre: true,
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
          despesa: {
            where: {
              tipo: {
                in: [
                  ItemDespesaTipos1314.MDE_DESPESAS_EDUCACAO_INFANTIL,
                  ItemDespesaTipos1314.MDE_DESPESAS_CRECHE,
                  ItemDespesaTipos1314.MDE_DESPESAS_PRE_ESCOLA,
                  ItemDespesaTipos1314.MDE_DESPESAS_ENSINO_FUNDAMENTAL,
                  ItemDespesaTipos1314.MDE_DESPESAS_ENSINO_MEDIO,
                  ItemDespesaTipos1314.MDE_DESPESAS_ENSINO_SUPERIOR,
                  ItemDespesaTipos1314.MDE_DESPESAS_ENSINO_PROFISSIONAL_NAO_INTEGRADO_ENSINO_REGULAR,
                  ItemDespesaTipos1314.MDE_OUTRAS_DESPESAS,
                  ItemDespesaTipos1314.MDE_TOTAL_DESPESAS_ACOES_TIPICAS,
                ],
              },
            },
            select: {
              despesasLiquidadasAteBimestre: true,
              tipo: true,
            },
          },
        },
        where: {
          ...filters,
        },
      });

    const revenues1516 =
      await this.prismaService.relatorioMunicipal1516.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          despesa: {
            where: {
              tipo: {
                in: [
                  ItemDespesaTipos1516.MDE_DESPESAS_EDUCACAO_INFANTIL,
                  ItemDespesaTipos1516.MDE_DESPESAS_EDUCACAO_INFANTIL_CRECHE,
                  ItemDespesaTipos1516.MDE_DESPESAS_EDUCACAO_INFANTIL_PRE_ESCOLA,
                  ItemDespesaTipos1516.MDE_DESPESAS_ENSINO_FUNDAMENTAL,
                  ItemDespesaTipos1516.MDE_DESPESAS_ENSINO_MEDIO,
                  ItemDespesaTipos1516.MDE_DESPESAS_ENSINO_SUPERIOR,
                  ItemDespesaTipos1516.MDE_DESPESAS_ENSINO_PROFISSIONAL_NAO_INTEGRADO_ENSINO_REGULAR,
                  ItemDespesaTipos1516.MDE_OUTRAS_DESPESAS,
                  ItemDespesaTipos1516.MDE_TOTAL_DESPESAS_ACOES_TIPICAS,
                ],
              },
            },
            select: {
              despesasLiquidadasAteBimestre: true,
              tipo: true,
            },
          },
        },
        where: {
          ...filters,
        },
      });

    const revenues1718 =
      await this.prismaService.relatorioMunicipal1718.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          despesa: {
            where: {
              tipo: {
                in: [
                  ItemDespesaTipos1718.MDE_DESPESAS_EDUCACAO_INFANTIL,
                  ItemDespesaTipos1718.MDE_DESPESAS_EDUCACAO_INFANTIL_CRECHE,
                  ItemDespesaTipos1718.MDE_DESPESAS_EDUCACAO_INFANTIL_PRE_ESCOLA,
                  ItemDespesaTipos1718.MDE_DESPESAS_ENSINO_FUNDAMENTAL,
                  ItemDespesaTipos1718.MDE_DESPESAS_ENSINO_MEDIO,
                  ItemDespesaTipos1718.MDE_DESPESAS_ENSINO_SUPERIOR,
                  ItemDespesaTipos1718.MDE_DESPESAS_ENSINO_PROFISSIONAL_NAO_INTEGRADO_ENSINO_REGULAR,
                  ItemDespesaTipos1718.MDE_OUTRAS_DESPESAS,
                  ItemDespesaTipos1718.MDE_TOTAL_DESPESAS_ACOES_TIPICAS,
                ],
              },
            },
            select: {
              despesasLiquidadasAteBimestre: true,
              tipo: true,
            },
          },
        },
        where: {
          ...filters,
        },
      });

    const revenues1920 =
      await this.prismaService.relatorioMunicipal1920.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          despesa: {
            where: {
              tipo: {
                in: [
                  ItemDespesaTipos1920.MDE_DESPESAS_EDUCACAO_INFANTIL,
                  ItemDespesaTipos1920.MDE_DESPESAS_EDUCACAO_INFANTIL_CRECHE,
                  ItemDespesaTipos1920.MDE_DESPESAS_EDUCACAO_INFANTIL_PRE_ESCOLA,
                  ItemDespesaTipos1920.MDE_DESPESAS_ENSINO_FUNDAMENTAL,
                  ItemDespesaTipos1920.MDE_DESPESAS_ENSINO_MEDIO,
                  ItemDespesaTipos1920.MDE_DESPESAS_ENSINO_SUPERIOR,
                  ItemDespesaTipos1920.MDE_DESPESAS_ENSINO_PROFISSIONAL_NAO_INTEGRADO_ENSINO_REGULAR,
                  ItemDespesaTipos1920.MDE_OUTRAS_DESPESAS,
                  ItemDespesaTipos1920.MDE_TOTAL_DESPESAS_ACOES_TIPICAS,
                ],
              },
            },
            select: {
              despesasLiquidadasAteBimestre: true,
              tipo: true,
            },
          },
        },
        where: {
          ...filters,
        },
      });

    const revenues1720 = [...revenues1718, ...revenues1920];

    const revenues2122 = await this.prismaService.relatorioMunicipal21.findMany(
      {
        select: {
          ano: true,
          codigoMunicipio: true,
          despesa: {
            where: {
              tipo: {
                in: [
                  ItemDespesasTipos21.FUNDEB_EDUCACAO_INFANTIL,
                  ItemDespesasTipos21.FUNDEB_OUTRAS_DESPESAS_EDUCACAO_INFANTIL,
                  ItemDespesasTipos21.MDE_EDUCACAO_INFANTIL,
                  ItemDespesasTipos21.OUTRAS_DESPESAS_EDUCACAO_INFANTIL,
                  ItemDespesasTipos21.FUNDEB_CRECHE,
                  ItemDespesasTipos21.FUNDEB_OUTRAS_DESPESAS_EDUCACAO_CRECHE,
                  ItemDespesasTipos21.MDE_CRECHE,
                  ItemDespesasTipos21.OUTRAS_DESPESAS_CRECHE,
                  ItemDespesasTipos21.FUNDEB_PRE_ESCOLA,
                  ItemDespesasTipos21.FUNDEB_OUTRAS_DESPESAS_PRE_ESCOLA,
                  ItemDespesasTipos21.MDE_PRE_ESCOLA,
                  ItemDespesasTipos21.OUTRAS_DESPESAS_PRE_ESCOLA,
                  ItemDespesasTipos21.FUNDEB_ENSINO_FUNDAMENTAL,
                  ItemDespesasTipos21.FUNDEB_OUTRAS_DESPESAS_ENSINO_FUNDAMENTAL,
                  ItemDespesasTipos21.MDE_ENSINO_FUNDAMENTAL,
                  ItemDespesasTipos21.OUTRAS_DESPESAS_ENSINO_FUNDAMENTAL,
                  ItemDespesasTipos21.OUTRAS_DESPESAS_ENSINO_MEDIO,
                  ItemDespesasTipos21.OUTRAS_DESPESAS_ENSINO_SUPERIOR,
                  ItemDespesasTipos21.OUTRAS_DESPESAS_ENSINO_PROFISSIONAL_NAO_INTEGRADO,
                  ItemDespesasTipos21.TOTAL_DESPESAS_FUNDEB,
                  ItemDespesasTipos21.TOTAL_ACOES_TIPICAS_MDE,
                  ItemDespesasTipos21.TOTAL_OUTRAS_DESPESAS_EDUCACAO,
                ],
              },
            },
            select: {
              despesasLiquidadasAteBimestre: true,
              tipo: true,
            },
          },
        },
        where: {
          ...filters,
        },
      },
    );

    const modifiedRevenues2122 = revenues2122.map((item) => {
      let totalEducacaoInfantil = 0;
      let totalCreche = 0;
      let totalPreEscola = 0;
      let totalEnsinoFundamental = 0;
      let totalGeral = 0;

      item.despesa.forEach((d) => {
        if (
          [
            ItemDespesasTipos21.FUNDEB_EDUCACAO_INFANTIL,
            ItemDespesasTipos21.FUNDEB_OUTRAS_DESPESAS_EDUCACAO_INFANTIL,
            ItemDespesasTipos21.MDE_EDUCACAO_INFANTIL,
            ItemDespesasTipos21.OUTRAS_DESPESAS_EDUCACAO_INFANTIL,
          ].includes(d.tipo as any)
        ) {
          totalEducacaoInfantil += d.despesasLiquidadasAteBimestre;
        }
        if (
          [
            ItemDespesasTipos21.FUNDEB_CRECHE,
            ItemDespesasTipos21.FUNDEB_OUTRAS_DESPESAS_EDUCACAO_CRECHE,
            ItemDespesasTipos21.MDE_CRECHE,
            ItemDespesasTipos21.OUTRAS_DESPESAS_CRECHE,
          ].includes(d.tipo as any)
        ) {
          totalCreche += d.despesasLiquidadasAteBimestre;
        }
        if (
          [
            ItemDespesasTipos21.FUNDEB_PRE_ESCOLA,
            ItemDespesasTipos21.FUNDEB_OUTRAS_DESPESAS_PRE_ESCOLA,
            ItemDespesasTipos21.MDE_PRE_ESCOLA,
            ItemDespesasTipos21.OUTRAS_DESPESAS_PRE_ESCOLA,
          ].includes(d.tipo as any)
        ) {
          totalPreEscola += d.despesasLiquidadasAteBimestre;
        }
        if (
          [
            ItemDespesasTipos21.FUNDEB_ENSINO_FUNDAMENTAL,
            ItemDespesasTipos21.FUNDEB_OUTRAS_DESPESAS_ENSINO_FUNDAMENTAL,
            ItemDespesasTipos21.MDE_ENSINO_FUNDAMENTAL,
            ItemDespesasTipos21.OUTRAS_DESPESAS_ENSINO_FUNDAMENTAL,
          ].includes(d.tipo as any)
        ) {
          totalEnsinoFundamental += d.despesasLiquidadasAteBimestre;
        }
        if (
          [
            ItemDespesasTipos21.TOTAL_DESPESAS_FUNDEB,
            ItemDespesasTipos21.TOTAL_ACOES_TIPICAS_MDE,
            ItemDespesasTipos21.TOTAL_OUTRAS_DESPESAS_EDUCACAO,
          ].includes(d.tipo as any)
        ) {
          totalGeral += d.despesasLiquidadasAteBimestre;
        }
      });

      // Arredondar os valores para duas casas decimais
      totalEducacaoInfantil = parseFloat(totalEducacaoInfantil.toFixed(4));
      totalCreche = parseFloat(totalCreche.toFixed(4));
      totalPreEscola = parseFloat(totalPreEscola.toFixed(4));
      totalEnsinoFundamental = parseFloat(totalEnsinoFundamental.toFixed(4));
      totalGeral = parseFloat(totalGeral.toFixed(4));

      // Filtrar para remover os tipos usados no cálculo
      const filteredDespesas = item.despesa.filter(
        (d) =>
          ![
            ItemDespesasTipos21.FUNDEB_EDUCACAO_INFANTIL,
            ItemDespesasTipos21.FUNDEB_OUTRAS_DESPESAS_EDUCACAO_INFANTIL,
            ItemDespesasTipos21.MDE_EDUCACAO_INFANTIL,
            ItemDespesasTipos21.OUTRAS_DESPESAS_EDUCACAO_INFANTIL,
            ItemDespesasTipos21.FUNDEB_CRECHE,
            ItemDespesasTipos21.FUNDEB_OUTRAS_DESPESAS_EDUCACAO_CRECHE,
            ItemDespesasTipos21.MDE_CRECHE,
            ItemDespesasTipos21.OUTRAS_DESPESAS_CRECHE,
            ItemDespesasTipos21.FUNDEB_PRE_ESCOLA,
            ItemDespesasTipos21.FUNDEB_OUTRAS_DESPESAS_PRE_ESCOLA,
            ItemDespesasTipos21.MDE_PRE_ESCOLA,
            ItemDespesasTipos21.OUTRAS_DESPESAS_PRE_ESCOLA,
            ItemDespesasTipos21.FUNDEB_ENSINO_FUNDAMENTAL,
            ItemDespesasTipos21.FUNDEB_OUTRAS_DESPESAS_ENSINO_FUNDAMENTAL,
            ItemDespesasTipos21.MDE_ENSINO_FUNDAMENTAL,
            ItemDespesasTipos21.OUTRAS_DESPESAS_ENSINO_FUNDAMENTAL,
            ItemDespesasTipos21.TOTAL_DESPESAS_FUNDEB,
            ItemDespesasTipos21.TOTAL_ACOES_TIPICAS_MDE,
          ].includes(d.tipo as any),
      );

      return {
        ...item,
        despesa: [
          ...filteredDespesas,
          {
            tipo: 'EDUCACAO_INFANTIL',
            despesasLiquidadasAteBimestre: totalEducacaoInfantil,
          },
          {
            tipo: 'CRECHE',
            despesasLiquidadasAteBimestre: totalCreche,
          },
          {
            tipo: 'PRE_ESCOLA',
            despesasLiquidadasAteBimestre: totalPreEscola,
          },
          {
            tipo: 'ENSINO_FUNDAMENTAL',
            despesasLiquidadasAteBimestre: totalEnsinoFundamental,
          },
          {
            tipo: 'TOTAL',
            despesasLiquidadasAteBimestre: totalGeral,
          },
        ],
      };
    });

    const revenues23 = await this.prismaService.relatorioMunicipal23.findMany({
      select: {
        ano: true,
        codigoMunicipio: true,
        despesa: {
          where: {
            tipo: {
              in: [
                ItemDespesaTipos23.MDE_COM_RECEITAS_IMPOSTOS_FUNDEB_EDUCACAO_INFANTIL,
                ItemDespesaTipos23.TOTAL_OUTRAS_DESPESAS_COM_EDUCACAO_EDUCACAO_INFANTIL,
                ItemDespesaTipos23.MDE_COM_RECEITAS_IMPOSTOS_FUNDEB_EDUCACAO_INFANTIL_CRECHE,
                ItemDespesaTipos23.MDE_COM_RECEITAS_IMPOSTOS_FUNDEB_EDUCACAO_INFANTIL_PRE_ESCOLA,
                ItemDespesaTipos23.MDE_COM_RECEITAS_IMPOSTOS_FUNDEB_ENSINO_FUNDAMENTAL,
                ItemDespesaTipos23.TOTAL_OUTRAS_DESPESAS_COM_EDUCACAO_ENSINO_FUNDAMENTAL,
                ItemDespesaTipos23.TOTAL_OUTRAS_DESPESAS_COM_EDUCACAO_ENSINO_MEDIO,
                ItemDespesaTipos23.TOTAL_OUTRAS_DESPESAS_COM_EDUCACAO_ENSINO_SUPERIOR,
                ItemDespesaTipos23.TOTAL_OUTRAS_DESPESAS_COM_EDUCACAO_ESPECIAL,
                ItemDespesaTipos23.TOTAL_OUTRAS_DESPESAS_COM_EDUCACAO_DE_JOVENS_E_ADULTOS,
                ItemDespesaTipos23.TOTAL_OUTRAS_DESPESAS_COM_EDUCACAO_ENSINO_PROFISSIONAL,
                ItemDespesaTipos23.TOTAL_OUTRAS_DESPESAS_COM_EDUCACAO_OUTRAS,
                ItemDespesaTipos23.TOTAL_OUTRAS_DESPESAS_COM_EDUCACAO,
                ItemDespesaTipos23.TOTAL_DESPESAS_MDE_CUSTEADAS_COM_RECEITAS_IMPOSTOS_E_FUNDEB,
              ],
            },
          },
          select: {
            despesasLiquidadasAteBimestre: true,
            tipo: true,
          },
        },
      },
      where: {
        ...filters,
      },
    });

    const modifiedRevenues23 = revenues23.map((item) => {
      let totalEducacaoInfantil = 0;
      let totalEnsinoFundamental = 0;
      let totalGeral = 0;

      item.despesa.forEach((d) => {
        if (
          [
            ItemDespesaTipos23.MDE_COM_RECEITAS_IMPOSTOS_FUNDEB_EDUCACAO_INFANTIL,
            ItemDespesaTipos23.TOTAL_OUTRAS_DESPESAS_COM_EDUCACAO_EDUCACAO_INFANTIL,
          ].includes(d.tipo as any)
        ) {
          totalEducacaoInfantil += d.despesasLiquidadasAteBimestre;
        }
        if (
          [
            ItemDespesaTipos23.MDE_COM_RECEITAS_IMPOSTOS_FUNDEB_ENSINO_FUNDAMENTAL,
            ItemDespesaTipos23.TOTAL_OUTRAS_DESPESAS_COM_EDUCACAO_ENSINO_FUNDAMENTAL,
          ].includes(d.tipo as any)
        ) {
          totalEnsinoFundamental += d.despesasLiquidadasAteBimestre;
        }
        if (
          [
            ItemDespesaTipos23.TOTAL_OUTRAS_DESPESAS_COM_EDUCACAO,
            ItemDespesaTipos23.TOTAL_DESPESAS_MDE_CUSTEADAS_COM_RECEITAS_IMPOSTOS_E_FUNDEB,
          ].includes(d.tipo as any)
        ) {
          totalGeral += d.despesasLiquidadasAteBimestre;
        }
      });

      // Arredondar os valores para duas casas decimais
      totalEducacaoInfantil = parseFloat(totalEducacaoInfantil.toFixed(4));
      totalEnsinoFundamental = parseFloat(totalEnsinoFundamental.toFixed(4));
      totalGeral = parseFloat(totalGeral.toFixed(4));

      // Filtrar para remover os tipos usados no cálculo
      const filteredDespesas = item.despesa.filter(
        (d) =>
          ![
            ItemDespesaTipos23.MDE_COM_RECEITAS_IMPOSTOS_FUNDEB_EDUCACAO_INFANTIL,
            ItemDespesaTipos23.TOTAL_OUTRAS_DESPESAS_COM_EDUCACAO_EDUCACAO_INFANTIL,
            ItemDespesaTipos23.MDE_COM_RECEITAS_IMPOSTOS_FUNDEB_ENSINO_FUNDAMENTAL,
            ItemDespesaTipos23.TOTAL_OUTRAS_DESPESAS_COM_EDUCACAO_ENSINO_FUNDAMENTAL,
            ItemDespesaTipos23.TOTAL_OUTRAS_DESPESAS_COM_EDUCACAO,
            ItemDespesaTipos23.TOTAL_DESPESAS_MDE_CUSTEADAS_COM_RECEITAS_IMPOSTOS_E_FUNDEB,
          ].includes(d.tipo as any),
      );

      return {
        ...item,
        despesa: [
          ...filteredDespesas,
          {
            tipo: 'EDUCACAO_INFANTIL',
            despesasLiquidadasAteBimestre: totalEducacaoInfantil,
          },
          {
            tipo: 'ENSINO_FUNDAMENTAL',
            despesasLiquidadasAteBimestre: totalEnsinoFundamental,
          },
          {
            tipo: 'TOTAL',
            despesasLiquidadasAteBimestre: totalGeral,
          },
        ],
      };
    });

    let groupedRevenues = {};

    if (groupType === GroupType.MUNICIPIO) {
      groupedRevenues = this.groupByMunicipio([
        { key: 'revenues06', data: revenues06 },
        { key: 'revenues0708', data: revenues0708 },
        { key: 'revenues0912', data: revenues0912 },
        { key: 'revenues1314', data: revenues1314 },
        { key: 'revenues1516', data: revenues1516 },
        { key: 'revenues1720', data: revenues1720 },
        { key: 'modifiedRevenues2122', data: modifiedRevenues2122 },
        { key: 'modifiedRevenues23', data: modifiedRevenues23 },
      ]);
    } else if (groupType == GroupType.ANO) {
      groupedRevenues = this.groupByAno([
        { key: 'revenues06', data: revenues06 },
        { key: 'revenues0708', data: revenues0708 },
        { key: 'revenues0912', data: revenues0912 },
        { key: 'revenues1314', data: revenues1314 },
        { key: 'revenues1516', data: revenues1516 },
        { key: 'revenues1720', data: revenues1720 },
        { key: 'modifiedRevenues2122', data: modifiedRevenues2122 },
        { key: 'modifiedRevenues23', data: modifiedRevenues23 },
      ]);
    } else {
      console.log('tipo de agrupamento não corresponde');
    }

    return groupedRevenues;
  }

  async municipalBasicEducationMinimalPotentialRevenue(
    groupType: GroupType,
    filters?: object,
  ) {
    const revenues06 = await this.prismaService.relatorioMunicipal06.findMany({
      select: {
        ano: true,
        codigoMunicipio: true,
        receita: {
          where: {
            tipo: {
              in: [
                ItemReceitaTipos06.RECEITA_RESULTANTE_DE_IMPOSTOS,
                ItemReceitaTipos06.PARCELA_TRANSFERENCIAS_DESTINADAS_A_FORMACAO_DO_FUNDEF,
                ItemReceitaTipos06.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEF,
                ItemReceitaTipos06.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEF,
                ItemReceitaTipos06.TRANSFERENCIAS_DO_SALARIO_EDUCACAO,
                ItemReceitaTipos06.OUTRAS_TRANSFERENCIAS_DO_FNDE,
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

    const modifiedRevenues06 = revenues06.map((item) => {
      let receitaLiquidaImpostosMDE = 0;
      let total = 0;
      let totalDeductions = 0;
      let totalAdditions = 0;

      item.receita.forEach((r) => {
        if (r.tipo === ItemReceitaTipos06.RECEITA_RESULTANTE_DE_IMPOSTOS) {
          receitaLiquidaImpostosMDE = 0.25 * r.receitasRealizadasNoAno;
        } else if (
          [
            ItemReceitaTipos06.PARCELA_TRANSFERENCIAS_DESTINADAS_A_FORMACAO_DO_FUNDEF,
          ].includes(r.tipo as any)
        ) {
          totalDeductions += r.receitasRealizadasNoAno;
        } else if (
          [
            ItemReceitaTipos06.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEF,
            ItemReceitaTipos06.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEF,
            ItemReceitaTipos06.TRANSFERENCIAS_DO_SALARIO_EDUCACAO,
            ItemReceitaTipos06.OUTRAS_TRANSFERENCIAS_DO_FNDE,
          ].includes(r.tipo as any)
        ) {
          totalAdditions += r.receitasRealizadasNoAno;
        }
      });

      total = receitaLiquidaImpostosMDE - totalDeductions + totalAdditions;

      // Arredondar os valores para duas casas decimais
      receitaLiquidaImpostosMDE = parseFloat(
        receitaLiquidaImpostosMDE.toFixed(4),
      );
      total = parseFloat(total.toFixed(4));

      // Filtrar para remover o tipo RECEITA_RESULTANTE_DE_IMPOSTOS
      const filteredReceita = item.receita.filter(
        (r) => r.tipo !== ItemReceitaTipos06.RECEITA_RESULTANTE_DE_IMPOSTOS,
      );

      return {
        ...item,
        receita: [
          ...filteredReceita,
          {
            tipo: 'RECEITA_LIQUIDA_IMPOSTOS_MDE',
            receitasRealizadasNoAno: receitaLiquidaImpostosMDE,
          },
          {
            tipo: 'TOTAL',
            receitasRealizadasNoAno: total,
          },
        ],
      };
    });

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

    const modifiedRevenues0708 = revenues0708.map((item) => {
      let impostosETransferenciasMDE = 0;
      let totalDeductions = 0;
      let totalAdditions = 0;
      let total = 0;

      item.receita.forEach((r) => {
        if (
          r.tipo ===
          ItemReceitaTipos0708.IMPOSTOS_E_TRANSFERENCIAS_DESTINADAS_MDE
        ) {
          impostosETransferenciasMDE = r.receitasRealizadasNoAno;
        } else if (
          [ItemReceitaTipos0708.RECEITAS_DESTINADAS_AO_FUNDEB].includes(
            r.tipo as any,
          )
        ) {
          totalDeductions += r.receitasRealizadasNoAno;
        } else if (
          [
            ItemReceitaTipos0708.TRANSFERENCIAS_RECURSOS_FUNDEB,
            ItemReceitaTipos0708.COMPLEMENTACAO_UNIAO_FUNDEB,
            ItemReceitaTipos0708.TRANSFERENCIAS_SALARIO_EDUCACAO,
            ItemReceitaTipos0708.OUTRAS_TRANSFERENCIAS_FNDE,
          ].includes(r.tipo as any)
        ) {
          totalAdditions += r.receitasRealizadasNoAno;
        }
      });

      total = impostosETransferenciasMDE - totalDeductions + totalAdditions;

      total = parseFloat(total.toFixed(4));

      const modifiedReceita = [
        ...item.receita,
        {
          tipo: 'TOTAL',
          receitasRealizadasNoAno: total,
        },
      ];

      return {
        ...item,
        receita: modifiedReceita,
      };
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

    const modifiedRevenues0912 = revenues0912.map((item) => {
      let totalDeductions = 0;
      let totalAdditions = 0;
      let total = 0;
      let impostosETransferenciasMDE = 0;

      item.receita.forEach((r) => {
        if (r.tipo === ItemReceitaTipos0912.TOTAL_RECEITA_IMPOSTOS) {
          impostosETransferenciasMDE = 0.25 * r.receitasRealizadaAteBimestre;
        } else if (
          [ItemReceitaTipos0912.RECEITAS_DESTINADAS_AO_FUNDEB].includes(
            r.tipo as any,
          )
        ) {
          totalDeductions += r.receitasRealizadaAteBimestre;
        } else if (
          [
            ItemReceitaTipos0912.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
            ItemReceitaTipos0912.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
            ItemReceitaTipos0912.TRANSFERENCIAS_SALARIO_EDUCACAO,
            ItemReceitaTipos0912.OUTRAS_TRANSFERENCIAS_FNDE,
          ].includes(r.tipo as any)
        ) {
          totalAdditions += r.receitasRealizadaAteBimestre;
        }
      });

      total = impostosETransferenciasMDE - totalDeductions + totalAdditions;

      impostosETransferenciasMDE = parseFloat(
        impostosETransferenciasMDE.toFixed(4),
      );
      total = parseFloat(total.toFixed(4));

      const filteredReceitas = item.receita.filter(
        (r) => r.tipo !== ItemReceitaTipos0912.TOTAL_RECEITA_IMPOSTOS,
      );

      const modifiedReceita = [
        ...filteredReceitas,
        {
          tipo: 'IMPOSTOS_E_TRANSFERENCIAS_DESTINADAS_MDE',
          receitasRealizadaAteBimestre: impostosETransferenciasMDE,
        },
        {
          tipo: 'TOTAL',
          receitasRealizadaAteBimestre: total,
        },
      ];

      return {
        ...item,
        receita: modifiedReceita,
      };
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
                  ItemReceitaTipos1314.TRANSFERENCIAS_DIRETAS_PDDE,
                  ItemReceitaTipos1314.TRANSFERENCIAS_DIRETAS_PNAE,
                  ItemReceitaTipos1314.TRANSFERENCIAS_DIRETAS_PNATE,
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

    const modifiedRevenues1314 = revenues1314.map((item) => {
      let totalDeductions = 0;
      let totalAdditions = 0;
      let outrasTransferenciasFNDE = 0;
      let total = 0;
      let impostosETransferenciasMDE = 0;

      item.receita.forEach((r) => {
        if (r.tipo === ItemReceitaTipos1314.TOTAL_RECEITA_IMPOSTOS) {
          impostosETransferenciasMDE = 0.25 * r.receitasRealizadaAteBimestre;
        } else if (
          [ItemReceitaTipos1314.RECEITAS_DESTINADAS_AO_FUNDEB].includes(
            r.tipo as any,
          )
        ) {
          totalDeductions += r.receitasRealizadaAteBimestre;
        } else if (
          [
            ItemReceitaTipos1314.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
            ItemReceitaTipos1314.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
            ItemReceitaTipos1314.TRANSFERENCIAS_SALARIO_EDUCACAO,
          ].includes(r.tipo as any)
        ) {
          totalAdditions += r.receitasRealizadaAteBimestre;
        } else if (
          [
            ItemReceitaTipos1314.TRANSFERENCIAS_DIRETAS_PDDE,
            ItemReceitaTipos1314.TRANSFERENCIAS_DIRETAS_PNAE,
            ItemReceitaTipos1314.TRANSFERENCIAS_DIRETAS_PNATE,
          ].includes(r.tipo as any)
        ) {
          outrasTransferenciasFNDE += r.receitasRealizadaAteBimestre;
          totalAdditions += r.receitasRealizadaAteBimestre;
        }
      });

      total = impostosETransferenciasMDE - totalDeductions + totalAdditions;

      impostosETransferenciasMDE = parseFloat(
        impostosETransferenciasMDE.toFixed(4),
      );
      outrasTransferenciasFNDE = parseFloat(
        outrasTransferenciasFNDE.toFixed(4),
      );
      total = parseFloat(total.toFixed(4));

      const filteredReceitas = item.receita.filter(
        (r) =>
          ![
            ItemReceitaTipos1314.TOTAL_RECEITA_IMPOSTOS,
            ItemReceitaTipos1314.TRANSFERENCIAS_DIRETAS_PDDE,
            ItemReceitaTipos1314.TRANSFERENCIAS_DIRETAS_PNAE,
            ItemReceitaTipos1314.TRANSFERENCIAS_DIRETAS_PNATE,
          ].includes(r.tipo as any),
      );

      const modifiedReceita = [
        ...filteredReceitas,
        {
          tipo: 'IMPOSTOS_E_TRANSFERENCIAS_DESTINADAS_MDE',
          receitasRealizadaAteBimestre: impostosETransferenciasMDE,
        },
        {
          tipo: 'OUTRAS_TRANSFERENCIAS_FNDE',
          receitasRealizadaAteBimestre: outrasTransferenciasFNDE,
        },
        {
          tipo: 'TOTAL',
          receitasRealizadaAteBimestre: total,
        },
      ];

      return {
        ...item,
        receita: modifiedReceita,
      };
    });

    const revenues1516 =
      await this.prismaService.relatorioMunicipal1516.findMany({
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
      });

    const modifiedRevenues1516 = revenues1516.map((item) => {
      let totalDeductions = 0;
      let totalAdditions = 0;
      let outrasTransferenciasFNDE = 0;
      let total = 0;
      let impostosETransferenciasMDE = 0;

      item.receita.forEach((r) => {
        if (r.tipo === ItemReceitaTipos1516.TOTAL_RECEITA_IMPOSTOS) {
          impostosETransferenciasMDE = 0.25 * r.receitasRealizadaAteBimestre;
        } else if (
          [ItemReceitaTipos1516.RECEITAS_DESTINADAS_AO_FUNDEB].includes(
            r.tipo as any,
          )
        ) {
          totalDeductions += r.receitasRealizadaAteBimestre;
        } else if (
          [
            ItemReceitaTipos1516.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
            ItemReceitaTipos1516.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
            ItemReceitaTipos1516.TRANSFERENCIAS_SALARIO_EDUCACAO,
          ].includes(r.tipo as any)
        ) {
          totalAdditions += r.receitasRealizadaAteBimestre;
        } else if (
          [
            ItemReceitaTipos1516.TRANSFERENCIAS_DIRETAS_PDDE,
            ItemReceitaTipos1516.TRANSFERENCIAS_DIRETAS_PNAE,
            ItemReceitaTipos1516.TRANSFERENCIAS_DIRETAS_PNATE,
          ].includes(r.tipo as any)
        ) {
          outrasTransferenciasFNDE += r.receitasRealizadaAteBimestre;
          totalAdditions += r.receitasRealizadaAteBimestre;
        }
      });

      total = impostosETransferenciasMDE - totalDeductions + totalAdditions;

      impostosETransferenciasMDE = parseFloat(
        impostosETransferenciasMDE.toFixed(4),
      );
      outrasTransferenciasFNDE = parseFloat(
        outrasTransferenciasFNDE.toFixed(4),
      );
      total = parseFloat(total.toFixed(4));

      const filteredReceitas = item.receita.filter(
        (r) =>
          ![
            ItemReceitaTipos1516.TOTAL_RECEITA_IMPOSTOS,
            ItemReceitaTipos1516.TRANSFERENCIAS_DIRETAS_PDDE,
            ItemReceitaTipos1516.TRANSFERENCIAS_DIRETAS_PNAE,
            ItemReceitaTipos1516.TRANSFERENCIAS_DIRETAS_PNATE,
          ].includes(r.tipo as any),
      );

      const modifiedReceita = [
        ...filteredReceitas,
        {
          tipo: 'IMPOSTOS_E_TRANSFERENCIAS_DESTINADAS_MDE',
          receitasRealizadaAteBimestre: impostosETransferenciasMDE,
        },
        {
          tipo: 'OUTRAS_TRANSFERENCIAS_FNDE',
          receitasRealizadaAteBimestre: outrasTransferenciasFNDE,
        },
        {
          tipo: 'TOTAL',
          receitasRealizadaAteBimestre: total,
        },
      ];

      return {
        ...item,
        receita: modifiedReceita,
      };
    });

    const revenues1718 =
      await this.prismaService.relatorioMunicipal1718.findMany({
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
      });

    const modifiedRevenues1718 = revenues1718.map((item) => {
      let totalDeductions = 0;
      let totalAdditions = 0;
      let outrasTransferenciasFNDE = 0;
      let total = 0;
      let impostosETransferenciasMDE = 0;

      item.receita.forEach((r) => {
        if (r.tipo === ItemReceitaTipos1718.TOTAL_RECEITA_IMPOSTOS) {
          impostosETransferenciasMDE = 0.25 * r.receitasRealizadaAteBimestre;
        } else if (
          [ItemReceitaTipos1718.RECEITAS_DESTINADAS_AO_FUNDEB].includes(
            r.tipo as any,
          )
        ) {
          totalDeductions += r.receitasRealizadaAteBimestre;
        } else if (
          [
            ItemReceitaTipos1718.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
            ItemReceitaTipos1718.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
            ItemReceitaTipos1718.TRANSFERENCIAS_SALARIO_EDUCACAO,
          ].includes(r.tipo as any)
        ) {
          totalAdditions += r.receitasRealizadaAteBimestre;
        } else if (
          [
            ItemReceitaTipos1718.TRANSFERENCIAS_DIRETAS_PDDE,
            ItemReceitaTipos1718.TRANSFERENCIAS_DIRETAS_PNAE,
            ItemReceitaTipos1718.TRANSFERENCIAS_DIRETAS_PNATE,
          ].includes(r.tipo as any)
        ) {
          outrasTransferenciasFNDE += r.receitasRealizadaAteBimestre;
          totalAdditions += r.receitasRealizadaAteBimestre;
        }
      });

      total = impostosETransferenciasMDE - totalDeductions + totalAdditions;

      impostosETransferenciasMDE = parseFloat(
        impostosETransferenciasMDE.toFixed(4),
      );
      outrasTransferenciasFNDE = parseFloat(
        outrasTransferenciasFNDE.toFixed(4),
      );
      total = parseFloat(total.toFixed(4));

      const filteredReceitas = item.receita.filter(
        (r) =>
          ![
            ItemReceitaTipos1718.TOTAL_RECEITA_IMPOSTOS,
            ItemReceitaTipos1718.TRANSFERENCIAS_DIRETAS_PDDE,
            ItemReceitaTipos1718.TRANSFERENCIAS_DIRETAS_PNAE,
            ItemReceitaTipos1718.TRANSFERENCIAS_DIRETAS_PNATE,
          ].includes(r.tipo as any),
      );

      const modifiedReceita = [
        ...filteredReceitas,
        {
          tipo: 'IMPOSTOS_E_TRANSFERENCIAS_DESTINADAS_MDE',
          receitasRealizadaAteBimestre: impostosETransferenciasMDE,
        },
        {
          tipo: 'OUTRAS_TRANSFERENCIAS_FNDE',
          receitasRealizadaAteBimestre: outrasTransferenciasFNDE,
        },
        {
          tipo: 'TOTAL',
          receitasRealizadaAteBimestre: total,
        },
      ];

      return {
        ...item,
        receita: modifiedReceita,
      };
    });

    const revenues1920 =
      await this.prismaService.relatorioMunicipal1920.findMany({
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
      });

    const modifiedRevenues1920 = revenues1920.map((item) => {
      let totalDeductions = 0;
      let totalAdditions = 0;
      let outrasTransferenciasFNDE = 0;
      let total = 0;
      let impostosETransferenciasMDE = 0;

      item.receita.forEach((r) => {
        if (r.tipo === ItemReceitaTipos1920.TOTAL_RECEITA_IMPOSTOS) {
          impostosETransferenciasMDE = 0.25 * r.receitasRealizadaAteBimestre;
        } else if (
          [ItemReceitaTipos1920.RECEITAS_DESTINADAS_AO_FUNDEB].includes(
            r.tipo as any,
          )
        ) {
          totalDeductions += r.receitasRealizadaAteBimestre;
        } else if (
          [
            ItemReceitaTipos1920.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
            ItemReceitaTipos1920.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
            ItemReceitaTipos1920.TRANSFERENCIAS_SALARIO_EDUCACAO,
          ].includes(r.tipo as any)
        ) {
          totalAdditions += r.receitasRealizadaAteBimestre;
        } else if (
          [
            ItemReceitaTipos1920.TRANSFERENCIAS_DIRETAS_PDDE,
            ItemReceitaTipos1920.TRANSFERENCIAS_DIRETAS_PNAE,
            ItemReceitaTipos1920.TRANSFERENCIAS_DIRETAS_PNATE,
          ].includes(r.tipo as any)
        ) {
          outrasTransferenciasFNDE += r.receitasRealizadaAteBimestre;
          totalAdditions += r.receitasRealizadaAteBimestre;
        }
      });

      total = impostosETransferenciasMDE - totalDeductions + totalAdditions;

      impostosETransferenciasMDE = parseFloat(
        impostosETransferenciasMDE.toFixed(4),
      );
      outrasTransferenciasFNDE = parseFloat(
        outrasTransferenciasFNDE.toFixed(4),
      );
      total = parseFloat(total.toFixed(4));

      const filteredReceitas = item.receita.filter(
        (r) =>
          ![
            ItemReceitaTipos1920.TOTAL_RECEITA_IMPOSTOS,
            ItemReceitaTipos1920.TRANSFERENCIAS_DIRETAS_PDDE,
            ItemReceitaTipos1920.TRANSFERENCIAS_DIRETAS_PNAE,
            ItemReceitaTipos1920.TRANSFERENCIAS_DIRETAS_PNATE,
          ].includes(r.tipo as any),
      );

      const modifiedReceita = [
        ...filteredReceitas,
        {
          tipo: 'IMPOSTOS_E_TRANSFERENCIAS_DESTINADAS_MDE',
          receitasRealizadaAteBimestre: impostosETransferenciasMDE,
        },
        {
          tipo: 'OUTRAS_TRANSFERENCIAS_FNDE',
          receitasRealizadaAteBimestre: outrasTransferenciasFNDE,
        },
        {
          tipo: 'TOTAL',
          receitasRealizadaAteBimestre: total,
        },
      ];

      return {
        ...item,
        receita: modifiedReceita,
      };
    });

    const modifiedRevenues1520 = [
      ...modifiedRevenues1516,
      ...modifiedRevenues1718,
      ...modifiedRevenues1920,
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
                  ItemReceitaTipos21.FIN_ENSINO_PDDE,
                  ItemReceitaTipos21.FIN_ENSINO_PNAE,
                  ItemReceitaTipos21.FIN_ENSINO_PNATE,
                  ItemReceitaTipos21.FIN_ENSINO_SALARIO_EDUCACAO,
                  ItemReceitaTipos21.FIN_ENSINO_RECEITA_ROYALTIES_DESTINADOS_EDUCACAO,
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

    const modifiedRevenues2122 = revenues2122.map((item) => {
      let complementacaoUniaoFundef = 0;
      let outrasTransferenciasFnde = 0;
      let total = 0;

      // Calculando COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB
      complementacaoUniaoFundef = item.receita
        .filter((r) =>
          [
            ItemReceitaTipos21.FUNDEB_PRINCIPAL_6_2_1,
            ItemReceitaTipos21.FUNDEB_PRINCIPAL_6_3_1,
          ].includes(r.tipo as any),
        )
        .reduce((sum, r) => sum + r.receitasRealizadaAteBimestre, 0);

      // Calculando OUTRAS_TRANSFERENCIAS_FNDE
      outrasTransferenciasFnde = item.receita
        .filter((r) =>
          [
            ItemReceitaTipos21.FIN_ENSINO_PDDE,
            ItemReceitaTipos21.FIN_ENSINO_PNAE,
            ItemReceitaTipos21.FIN_ENSINO_PNATE,
          ].includes(r.tipo as any),
        )
        .reduce((sum, r) => sum + r.receitasRealizadaAteBimestre, 0);

      // Obtendo valorExigido de apuracaoLimiteMinimoConstitucional
      const valorExigido =
        item.apuracaoLimiteMinimoConstitucional.find(
          (a) =>
            a.tipo ===
            ApuracaoLimiteMinimoConstitucionalTipos21.APLICACAO_EM_MDE_SOBRE_RECEITA_DE_IMPOSTOS,
        )?.valorExigido || 0;

      // Calculando o valor que deve ser subtraído (Total destinado ao Fundeb)
      const totalDestinadoFundeb = item.receita
        .filter((r) =>
          [ItemReceitaTipos21.TOTAL_DESTINADO_FUNDEB].includes(r.tipo as any),
        )
        .reduce((sum, r) => sum + r.receitasRealizadaAteBimestre, 0);

      // Calculando o valor total final com a fórmula (I - II) + (III + IV + V + VI + VII)
      total =
        valorExigido -
        totalDestinadoFundeb +
        complementacaoUniaoFundef +
        outrasTransferenciasFnde +
        item.receita
          .filter((r) =>
            [
              ItemReceitaTipos21.FUNDEB_PRINCIPAL_6_1_1,
              ItemReceitaTipos21.FIN_ENSINO_SALARIO_EDUCACAO,
              ItemReceitaTipos21.FIN_ENSINO_RECEITA_ROYALTIES_DESTINADOS_EDUCACAO,
            ].includes(r.tipo as any),
          )
          .reduce((sum, r) => sum + r.receitasRealizadaAteBimestre, 0);

      complementacaoUniaoFundef = parseFloat(
        complementacaoUniaoFundef.toFixed(4),
      );
      outrasTransferenciasFnde = parseFloat(
        outrasTransferenciasFnde.toFixed(4),
      );
      total = parseFloat(total.toFixed(4));

      // Filtrando para remover os tipos usados no cálculo
      const filteredReceitas = item.receita.filter(
        (r) =>
          ![
            ItemReceitaTipos21.FUNDEB_PRINCIPAL_6_2_1,
            ItemReceitaTipos21.FUNDEB_PRINCIPAL_6_3_1,
            ItemReceitaTipos21.FIN_ENSINO_PDDE,
            ItemReceitaTipos21.FIN_ENSINO_PNAE,
            ItemReceitaTipos21.FIN_ENSINO_PNATE,
          ].includes(r.tipo as any),
      );

      return {
        ...item,
        receita: [
          ...filteredReceitas,
          {
            tipo: 'COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB',
            receitasRealizadaAteBimestre: complementacaoUniaoFundef,
          },
          {
            tipo: 'OUTRAS_TRANSFERENCIAS_FNDE',
            receitasRealizadaAteBimestre: outrasTransferenciasFnde,
          },
          {
            tipo: 'TOTAL',
            receitasRealizadaAteBimestre: total,
          },
        ],
      };
    });

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
                ItemReceitaTipos23.RECEITA_DE_ROYALTIES_DESTINADOS_A_EDUCACAO,
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

    const modifiedRevenues23 = revenues23.map((item) => {
      let complementacaoUniaoFundef = 0;
      let outrasTransferenciasFnde = 0;
      let total = 0;

      // Calculando COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB
      complementacaoUniaoFundef = item.receita
        .filter((r) =>
          [
            ItemReceitaTipos23.FUNDEB_VAAF_PRINCIPAL,
            ItemReceitaTipos23.FUNDEB_VAAT_PRINCIPAL,
            ItemReceitaTipos23.FUNDEB_VAAR_PRINCIPAL,
          ].includes(r.tipo as any),
        )
        .reduce((sum, r) => sum + r.receitasRealizadasAteBimestre, 0);

      // Calculando OUTRAS_TRANSFERENCIAS_FNDE
      outrasTransferenciasFnde = item.receita
        .filter((r) =>
          [
            ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_PDDE,
            ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_PNAE,
            ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_PNATE,
          ].includes(r.tipo as any),
        )
        .reduce((sum, r) => sum + r.receitasRealizadasAteBimestre, 0);

      // Obtendo valorExigido de apuracaoLimiteMinimoConstitucional
      const valorExigido =
        item.apuracaoLimiteMinimoConstitucional.find(
          (a) =>
            a.tipo ===
            ApuracaoLimiteMinimoConstitucionalTipos23.APLICACAO_EM_MDE_SOBRE_RECEITA_LIQUIDA_DE_IMPOSTOS,
        )?.valorExigido || 0;

      const totalDestinadoFundeb = item.receita
        .filter((r) =>
          [ItemReceitaTipos23.TOTAL_DESTINADO_AO_FUNDEB].includes(
            r.tipo as any,
          ),
        )
        .reduce((sum, r) => sum + r.receitasRealizadasAteBimestre, 0);

      // Calculando TOTAL
      total =
        valorExigido -
        totalDestinadoFundeb +
        complementacaoUniaoFundef +
        outrasTransferenciasFnde;
      item.receita
        .filter((r) =>
          [
            ItemReceitaTipos23.FUNDEB_PRINCIPAL,
            ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_SALARIO_EDUCACAO,
            ItemReceitaTipos23.RECEITA_DE_ROYALTIES_DESTINADOS_A_EDUCACAO,
          ].includes(r.tipo as any),
        )
        .reduce((sum, r) => sum + r.receitasRealizadasAteBimestre, 0);

      complementacaoUniaoFundef = parseFloat(
        complementacaoUniaoFundef.toFixed(4),
      );
      outrasTransferenciasFnde = parseFloat(
        outrasTransferenciasFnde.toFixed(4),
      );
      total = parseFloat(total.toFixed(4));

      // Filtrando para remover os tipos usados no cálculo
      const filteredReceitas = item.receita.filter(
        (r) =>
          ![
            ItemReceitaTipos23.FUNDEB_VAAF_PRINCIPAL,
            ItemReceitaTipos23.FUNDEB_VAAT_PRINCIPAL,
            ItemReceitaTipos23.FUNDEB_VAAR_PRINCIPAL,
            ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_PDDE,
            ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_PNAE,
            ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_PNATE,
          ].includes(r.tipo as any),
      );

      return {
        ...item,
        receita: [
          ...filteredReceitas,
          {
            tipo: 'COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB',
            receitasRealizadaAteBimestre: complementacaoUniaoFundef,
          },
          {
            tipo: 'OUTRAS_TRANSFERENCIAS_FNDE',
            receitasRealizadaAteBimestre: outrasTransferenciasFnde,
          },
          {
            tipo: 'TOTAL',
            receitasRealizadaAteBimestre: total,
          },
        ],
      };
    });

    let groupedRevenues = {};

    if (groupType === GroupType.MUNICIPIO) {
      groupedRevenues = this.groupByMunicipio([
        { key: 'modifiedRevenues06', data: modifiedRevenues06 },
        { key: 'modifiedRevenues0708', data: modifiedRevenues0708 },
        { key: 'modifiedRevenues0912', data: modifiedRevenues0912 },
        { key: 'modifiedRevenues1314', data: modifiedRevenues1314 },
        { key: 'modifiedRevenues1520', data: modifiedRevenues1520 },
        { key: 'modifiedRevenues2122', data: modifiedRevenues2122 },
        { key: 'modifiedRevenues23', data: modifiedRevenues23 },
      ]);
    } else if (groupType == GroupType.ANO) {
      groupedRevenues = this.groupByAno([
        { key: 'modifiedRevenues06', data: modifiedRevenues06 },
        { key: 'modifiedRevenues0708', data: modifiedRevenues0708 },
        { key: 'modifiedRevenues0912', data: modifiedRevenues0912 },
        { key: 'modifiedRevenues1314', data: modifiedRevenues1314 },
        { key: 'modifiedRevenues1520', data: modifiedRevenues1520 },
        { key: 'modifiedRevenues2122', data: modifiedRevenues2122 },
        { key: 'modifiedRevenues23', data: modifiedRevenues23 },
      ]);
    } else {
      console.log('tipo de agrupamento não corresponde');
    }

    return groupedRevenues;
  }

  private groupByMunicipio(
    revenueDataSets: { key: string; data: any[] }[],
  ): object {
    const groupedRevenues = {};

    revenueDataSets.forEach(({ key, data }) => {
      data.forEach((revenue) => {
        const { codigoMunicipio } = revenue;
        if (!groupedRevenues[codigoMunicipio]) {
          groupedRevenues[codigoMunicipio] = {};
        }
        if (!groupedRevenues[codigoMunicipio][key]) {
          groupedRevenues[codigoMunicipio][key] = [];
        }
        groupedRevenues[codigoMunicipio][key].push(revenue);
      });
    });

    return groupedRevenues;
  }

  private groupByAno(revenueDataSets: { key: string; data: any[] }[]): object {
    const groupedRevenues: { [ano: string]: { [key: string]: any[] } } = {};

    revenueDataSets.forEach(({ key, data }) => {
      data.forEach((revenue) => {
        const { ano } = revenue;
        if (!groupedRevenues[ano]) {
          groupedRevenues[ano] = {};
        }
        if (!groupedRevenues[ano][key]) {
          groupedRevenues[ano][key] = [];
        }
        groupedRevenues[ano][key].push(revenue);
      });
    });

    return groupedRevenues;
  }
}
