import { Injectable } from '@nestjs/common';
import {
  ItemReceitaTipos06,
  ItemReceitaTipos0708,
  ItemReceitaTipos1014,
  ItemReceitaTipos1516e1920,
  ItemReceitaTipos21,
} from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ResearchesService {
  constructor(private readonly prismaService: PrismaService) {}

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
        const { receita06 } = revenue;
        receita06.forEach((item) => {
          switch (item.tipo) {
            case ItemReceitaTipos06.COTA_PARTE_FPM_85_PORCENTO:
              item.receitasRealizadasNoAno =
                (item.receitasRealizadasNoAno / 85) * 100;
              break;
            case ItemReceitaTipos06.COTA_PARTE_ICMS_85_PORCENTO:
              item.receitasRealizadasNoAno =
                (item.receitasRealizadasNoAno / 85) * 100;
              break;
            case ItemReceitaTipos06.TRANSFERENCIA_FINANCEIRA_ICMS_DESONERACAO:
              item.receitasRealizadasNoAno =
                (item.receitasRealizadasNoAno / 85) * 100;
              break;
            case ItemReceitaTipos06.COTA_PARTE_IPI_EXPORTACAO_85_PORCENTO:
              item.receitasRealizadasNoAno =
                (item.receitasRealizadasNoAno / 85) * 100;
              break;
          }
        });
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
      await this.prismaService.relatorioMunicipal1516e1920.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1516e1920.COTA_PARTE_FPM,
                  ItemReceitaTipos1516e1920.COTA_PARTE_ICMS,
                  ItemReceitaTipos1516e1920.ICMS_DESONERACAO_LC_87_1996,
                  ItemReceitaTipos1516e1920.COTA_PARTE_IPI_EXPORTACAO,
                  ItemReceitaTipos1516e1920.COTA_PARTE_ITR,
                  ItemReceitaTipos1516e1920.COTA_PARTE_IPVA,
                  ItemReceitaTipos1516e1920.COTA_PARTE_IOF_OURO,
                  ItemReceitaTipos1516e1920.RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
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
      await this.prismaService.relatorioMunicipal1516e1920.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1516e1920.RECEITA_DE_IMPOSTOS,
                  ItemReceitaTipos1516e1920.RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
                  ItemReceitaTipos1516e1920.TOTAL_RECEITA_IMPOSTOS,
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
      await this.prismaService.relatorioMunicipal1014.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1014.RECEITAS_DESTINADAS_AO_FUNDEB,
                  ItemReceitaTipos1014.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
                  ItemReceitaTipos1014.RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB,
                  ItemReceitaTipos1014.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
                  ItemReceitaTipos1014.RECEITA_DE_APLICACAO_FINANCEIRA_DOS_RECURSOS_DO_FUNDEB,
                  ItemReceitaTipos1014.RECEITAS_RECEBIDAS_DO_FUNDEB,
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
      await this.prismaService.relatorioMunicipal1516e1920.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1516e1920.RECEITAS_DESTINADAS_AO_FUNDEB,
                  ItemReceitaTipos1516e1920.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
                  ItemReceitaTipos1516e1920.RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB,
                  ItemReceitaTipos1516e1920.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
                  ItemReceitaTipos1516e1920.RECEITA_DE_APLICACAO_FINANCEIRA_DOS_RECURSOS_DO_FUNDEB,
                  ItemReceitaTipos1516e1920.RECEITAS_RECEBIDAS_DO_FUNDEB,
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
      await this.prismaService.relatorioMunicipal1014.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [ItemReceitaTipos1014.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB],
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
      await this.prismaService.relatorioMunicipal1516e1920.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1516e1920.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
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
