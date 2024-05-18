import { Injectable } from '@nestjs/common';
import {
  ItemReceitaTipos06,
  ItemReceitaTipos0708,
  ItemReceitaTipos0912,
  ItemReceitaTipos1314,
  ItemReceitaTipos1516,
  ItemReceitaTipos1718,
  ItemReceitaTipos1920,
  ItemReceitaTipos21,
} from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ResearchesService {
  constructor(private readonly prismaService: PrismaService) {}

  async municipalTaxesRevenue() {
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
                  ItemReceitaTipos1516.IPTU_RECEITA_RESULTANTE,
                  ItemReceitaTipos1516.ITBI_RECEITA_RESULTANTE,
                  ItemReceitaTipos1516.ISS_RECEITA_RESULTANTE,
                  ItemReceitaTipos1516.IRRF_RECEITA_RESULTANTE,
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
      });

    const revenues2123 = await this.prismaService.relatorioMunicipal21.findMany(
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
      },
    );

    const groupedRevenues = {};

    if (revenues06) {
      revenues06.forEach((revenue) => {
        const { codigoMunicipio } = revenue;
        if (!groupedRevenues[codigoMunicipio]) {
          groupedRevenues[codigoMunicipio] = { revenues06: [] };
        }
        if (!groupedRevenues[codigoMunicipio].revenues06) {
          groupedRevenues[codigoMunicipio].revenues06 = [];
        }
        groupedRevenues[codigoMunicipio].revenues06.push(revenue);
      });
    }

    if (revenues0708) {
      revenues0708.forEach((revenue) => {
        const { codigoMunicipio } = revenue;
        if (!groupedRevenues[codigoMunicipio]) {
          groupedRevenues[codigoMunicipio] = { revenues0708: [] };
        }
        if (!groupedRevenues[codigoMunicipio].revenues0708) {
          groupedRevenues[codigoMunicipio].revenues0708 = [];
        }
        groupedRevenues[codigoMunicipio].revenues0708.push(revenue);
      });
    }

    if (revenues0914) {
      revenues0914.forEach((revenue) => {
        const { codigoMunicipio } = revenue;
        if (!groupedRevenues[codigoMunicipio]) {
          groupedRevenues[codigoMunicipio] = { revenues0914: [] };
        }
        if (!groupedRevenues[codigoMunicipio].revenues0914) {
          groupedRevenues[codigoMunicipio].revenues0914 = [];
        }
        groupedRevenues[codigoMunicipio].revenues0914.push(revenue);
      });
    }

    if (revenues1518) {
      revenues1518.forEach((revenue) => {
        const { codigoMunicipio } = revenue;
        if (!groupedRevenues[codigoMunicipio]) {
          groupedRevenues[codigoMunicipio] = { revenues1518: [] };
        }
        if (!groupedRevenues[codigoMunicipio].revenues1518) {
          groupedRevenues[codigoMunicipio].revenues1518 = [];
        }
        groupedRevenues[codigoMunicipio].revenues1518.push(revenue);
      });
    }

    if (revenues1920) {
      revenues1920.forEach((revenue) => {
        const { codigoMunicipio } = revenue;
        if (!groupedRevenues[codigoMunicipio]) {
          groupedRevenues[codigoMunicipio] = { revenues1920: [] };
        }
        if (!groupedRevenues[codigoMunicipio].revenues1920) {
          groupedRevenues[codigoMunicipio].revenues1920 = [];
        }
        groupedRevenues[codigoMunicipio].revenues1920.push(revenue);
      });
    }

    if (revenues2123) {
      revenues2123.forEach((revenue) => {
        const { codigoMunicipio } = revenue;
        if (!groupedRevenues[codigoMunicipio]) {
          groupedRevenues[codigoMunicipio] = { revenues2123: [] };
        }
        if (!groupedRevenues[codigoMunicipio].revenues2123) {
          groupedRevenues[codigoMunicipio].revenues2123 = [];
        }
        groupedRevenues[codigoMunicipio].revenues2123.push(revenue);
      });
    }

    return groupedRevenues;
  }

  async constitutionalTransfersRevenue() {
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
    });

    const adjustValues = (revenues) => {
      revenues.forEach((revenue) => {
        const { receita } = revenue;
        if (receita) {
          // Verifica se 'receita' não é undefined
          receita.forEach((item) => {
            switch (item.tipo) {
              case ItemReceitaTipos06.COTA_PARTE_FPM_85_PORCENTO:
              case ItemReceitaTipos06.COTA_PARTE_ICMS_85_PORCENTO:
              case ItemReceitaTipos06.TRANSFERENCIA_FINANCEIRA_ICMS_DESONERACAO:
              case ItemReceitaTipos06.COTA_PARTE_IPI_EXPORTACAO_85_PORCENTO:
                item.receitasRealizadasNoAno =
                  (item.receitasRealizadasNoAno / 85) * 100;
                break;
              // Outras condições, se necessário
            }
          });
        }
      });
    };

    adjustValues(revenues06);

    const revenues0714 =
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
      });

    const revenues1520 =
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
      });

    const revenues2123 = await this.prismaService.relatorioMunicipal21.findMany(
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
      },
    );

    const groupedRevenues = {};

    revenues06.forEach((revenue) => {
      const { codigoMunicipio } = revenue;
      if (!groupedRevenues[codigoMunicipio]) {
        groupedRevenues[codigoMunicipio] = { revenues06: [] };
      }
      if (!groupedRevenues[codigoMunicipio].revenues06) {
        groupedRevenues[codigoMunicipio].revenues06 = [];
      }
      groupedRevenues[codigoMunicipio].revenues06.push(revenue);
    });

    revenues0714.forEach((revenue) => {
      const { codigoMunicipio } = revenue;
      if (!groupedRevenues[codigoMunicipio]) {
        groupedRevenues[codigoMunicipio] = { revenues0714: [] };
      }
      if (!groupedRevenues[codigoMunicipio].revenues0714) {
        groupedRevenues[codigoMunicipio].revenues0714 = [];
      }
      groupedRevenues[codigoMunicipio].revenues0714.push(revenue);
    });

    revenues1520.forEach((revenue) => {
      const { codigoMunicipio } = revenue;
      if (!groupedRevenues[codigoMunicipio]) {
        groupedRevenues[codigoMunicipio] = { revenues1520: [] };
      }
      if (!groupedRevenues[codigoMunicipio].revenues1520) {
        groupedRevenues[codigoMunicipio].revenues1520 = [];
      }
      groupedRevenues[codigoMunicipio].revenues1520.push(revenue);
    });

    revenues2123.forEach((revenue) => {
      const { codigoMunicipio } = revenue;
      if (!groupedRevenues[codigoMunicipio]) {
        groupedRevenues[codigoMunicipio] = { revenues2123: [] };
      }
      if (!groupedRevenues[codigoMunicipio].revenues2123) {
        groupedRevenues[codigoMunicipio].revenues2123 = [];
      }
      groupedRevenues[codigoMunicipio].revenues2123.push(revenue);
    });

    return groupedRevenues;
  }

  async municipalRevenue() {
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
    });

    const revenues0714 =
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
      });

    const revenues1520 =
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
      });

    const revenues2123 = await this.prismaService.relatorioMunicipal21.findMany(
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
      },
    );

    const groupedRevenues = {};

    revenues06.forEach((revenue) => {
      const { codigoMunicipio } = revenue;
      if (!groupedRevenues[codigoMunicipio]) {
        groupedRevenues[codigoMunicipio] = { revenues06: [] };
      }
      if (!groupedRevenues[codigoMunicipio].revenues06) {
        groupedRevenues[codigoMunicipio].revenues06 = [];
      }
      groupedRevenues[codigoMunicipio].revenues06.push(revenue);
    });

    revenues0714.forEach((revenue) => {
      const { codigoMunicipio } = revenue;
      if (!groupedRevenues[codigoMunicipio]) {
        groupedRevenues[codigoMunicipio] = { revenues0714: [] };
      }
      if (!groupedRevenues[codigoMunicipio].revenues0714) {
        groupedRevenues[codigoMunicipio].revenues0714 = [];
      }
      groupedRevenues[codigoMunicipio].revenues0714.push(revenue);
    });

    revenues1520.forEach((revenue) => {
      const { codigoMunicipio } = revenue;
      if (!groupedRevenues[codigoMunicipio]) {
        groupedRevenues[codigoMunicipio] = { revenues1520: [] };
      }
      if (!groupedRevenues[codigoMunicipio].revenues1520) {
        groupedRevenues[codigoMunicipio].revenues1520 = [];
      }
      groupedRevenues[codigoMunicipio].revenues1520.push(revenue);
    });

    revenues2123.forEach((revenue) => {
      const { codigoMunicipio } = revenue;
      if (!groupedRevenues[codigoMunicipio]) {
        groupedRevenues[codigoMunicipio] = { revenues2123: [] };
      }
      if (!groupedRevenues[codigoMunicipio].revenues2123) {
        groupedRevenues[codigoMunicipio].revenues2123 = [];
      }
      groupedRevenues[codigoMunicipio].revenues2123.push(revenue);
    });

    return groupedRevenues;
  }

  async municipalFundeb() {
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
      });

    const revenues0914 =
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
              receitasRealizadaBimestre: true,
              tipo: true,
            },
          },
        },
      });

    const revenues1520 =
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
                  ItemReceitaTipos21.TOTAL_DESTINADO_FUNDEB,
                  ItemReceitaTipos21.FUNDEB_PRINCIPAL_6_1_1,
                  ItemReceitaTipos21.RESULTADO_LIQUIDO_TRANSFERENCIAS_FUNDEB,
                  ItemReceitaTipos21.FUNDEB_COMPLEMENTACAO_UNIAO_VAAF,
                  ItemReceitaTipos21.FUNDEB_COMPLEMENTACAO_UNIAO_VAAT,
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
      },
    );

    const groupedRevenues = {};

    revenues06.forEach((revenue) => {
      const { codigoMunicipio } = revenue;
      if (!groupedRevenues[codigoMunicipio]) {
        groupedRevenues[codigoMunicipio] = { revenues06: [] };
      }
      if (!groupedRevenues[codigoMunicipio].revenues06) {
        groupedRevenues[codigoMunicipio].revenues06 = [];
      }
      groupedRevenues[codigoMunicipio].revenues06.push(revenue);
    });

    revenues0708.forEach((revenue) => {
      const { codigoMunicipio } = revenue;
      if (!groupedRevenues[codigoMunicipio]) {
        groupedRevenues[codigoMunicipio] = { revenues0708: [] };
      }
      if (!groupedRevenues[codigoMunicipio].revenues0708) {
        groupedRevenues[codigoMunicipio].revenues0708 = [];
      }
      groupedRevenues[codigoMunicipio].revenues0708.push(revenue);
    });

    revenues0914.forEach((revenue) => {
      const { codigoMunicipio } = revenue;
      if (!groupedRevenues[codigoMunicipio]) {
        groupedRevenues[codigoMunicipio] = { revenues0914: [] };
      }
      if (!groupedRevenues[codigoMunicipio].revenues0914) {
        groupedRevenues[codigoMunicipio].revenues0914 = [];
      }
      groupedRevenues[codigoMunicipio].revenues0914.push(revenue);
    });

    revenues1520.forEach((revenue) => {
      const { codigoMunicipio } = revenue;
      if (!groupedRevenues[codigoMunicipio]) {
        groupedRevenues[codigoMunicipio] = { revenues1520: [] };
      }
      if (!groupedRevenues[codigoMunicipio].revenues1520) {
        groupedRevenues[codigoMunicipio].revenues1520 = [];
      }
      groupedRevenues[codigoMunicipio].revenues1520.push(revenue);
    });

    revenues2122.forEach((revenue) => {
      const { codigoMunicipio } = revenue;
      if (!groupedRevenues[codigoMunicipio]) {
        groupedRevenues[codigoMunicipio] = { revenues2123: [] };
      }
      if (!groupedRevenues[codigoMunicipio].revenues2123) {
        groupedRevenues[codigoMunicipio].revenues2123 = [];
      }
      groupedRevenues[codigoMunicipio].revenues2123.push(revenue);
    });

    return groupedRevenues;
  }

  async complementationFundeb() {
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
      });

    const revenues0914 =
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
              receitasRealizadaBimestre: true,
              tipo: true,
            },
          },
        },
      });

    const revenues1520 =
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
      },
    );

    const groupedRevenues = {};

    revenues06.forEach((revenue) => {
      const { codigoMunicipio } = revenue;
      if (!groupedRevenues[codigoMunicipio]) {
        groupedRevenues[codigoMunicipio] = { revenues06: [] };
      }
      if (!groupedRevenues[codigoMunicipio].revenues06) {
        groupedRevenues[codigoMunicipio].revenues06 = [];
      }
      groupedRevenues[codigoMunicipio].revenues06.push(revenue);
    });

    revenues0708.forEach((revenue) => {
      const { codigoMunicipio } = revenue;
      if (!groupedRevenues[codigoMunicipio]) {
        groupedRevenues[codigoMunicipio] = { revenues0708: [] };
      }
      if (!groupedRevenues[codigoMunicipio].revenues0708) {
        groupedRevenues[codigoMunicipio].revenues0708 = [];
      }
      groupedRevenues[codigoMunicipio].revenues0708.push(revenue);
    });

    revenues0914.forEach((revenue) => {
      const { codigoMunicipio } = revenue;
      if (!groupedRevenues[codigoMunicipio]) {
        groupedRevenues[codigoMunicipio] = { revenues0914: [] };
      }
      if (!groupedRevenues[codigoMunicipio].revenues0914) {
        groupedRevenues[codigoMunicipio].revenues0914 = [];
      }
      groupedRevenues[codigoMunicipio].revenues0914.push(revenue);
    });

    revenues1520.forEach((revenue) => {
      const { codigoMunicipio } = revenue;
      if (!groupedRevenues[codigoMunicipio]) {
        groupedRevenues[codigoMunicipio] = { revenues1520: [] };
      }
      if (!groupedRevenues[codigoMunicipio].revenues1520) {
        groupedRevenues[codigoMunicipio].revenues1520 = [];
      }
      groupedRevenues[codigoMunicipio].revenues1520.push(revenue);
    });

    revenues2122.forEach((revenue) => {
      const { codigoMunicipio } = revenue;
      if (!groupedRevenues[codigoMunicipio]) {
        groupedRevenues[codigoMunicipio] = { revenues2122: [] };
      }
      if (!groupedRevenues[codigoMunicipio].revenues2122) {
        groupedRevenues[codigoMunicipio].revenues2122 = [];
      }
      groupedRevenues[codigoMunicipio].revenues2122.push(revenue);
    });

    return groupedRevenues;
  }
}
