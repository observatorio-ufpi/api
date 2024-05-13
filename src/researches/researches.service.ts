import { Injectable } from '@nestjs/common';
import {
  ItemReceitaTipos06,
  ItemReceitaTipos0708,
  ItemReceitaTipos1520,
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
        receita06: {
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
          receita0708: {
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
      await this.prismaService.relatorioMunicipal1520.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita1520: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1520.COTA_PARTE_FPM,
                  ItemReceitaTipos1520.COTA_PARTE_ICMS,
                  ItemReceitaTipos1520.ICMS_DESONERACAO_LC_87_1996,
                  ItemReceitaTipos1520.COTA_PARTE_IPI_EXPORTACAO,
                  ItemReceitaTipos1520.COTA_PARTE_ITR,
                  ItemReceitaTipos1520.COTA_PARTE_IPVA,
                  ItemReceitaTipos1520.COTA_PARTE_IOF_OURO,
                  ItemReceitaTipos1520.RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
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
          receita21: {
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
}
