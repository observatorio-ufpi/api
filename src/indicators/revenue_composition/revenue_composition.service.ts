import { Injectable } from '@nestjs/common';
import {
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
import { GroupType } from 'src/utils/constants';

@Injectable()
export class RevenueCompositionService {
  constructor(private readonly prismaService: PrismaService) {}

  async iptuComposition(groupType: GroupType, filters?: object) {
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
                  ItemReceitaTipos0912.IPTU_RECEITA_RESULTANTE,
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
                  ItemReceitaTipos1314.IPTU_RECEITA_RESULTANTE,
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
                  ItemReceitaTipos1718.IPTU_RECEITA_RESULTANTE,
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
                  ItemReceitaTipos1920.IPTU_RECEITA_RESULTANTE,
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

    const revenues21 = await this.prismaService.relatorioMunicipal21.findMany({
      select: {
        ano: true,
        codigoMunicipio: true,
        receita: {
          where: {
            tipo: {
              in: [
                ItemReceitaTipos21.RECEITA_IPTU,
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
    });

    const revenues23 = await this.prismaService.relatorioMunicipal23.findMany({
      select: {
        ano: true,
        codigoMunicipio: true,
        receita: {
          where: {
            tipo: {
              in: [
                ItemReceitaTipos23.RECEITA_RESULTANTE_DO_IPTU,
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

    // Process 2007-2008 data
    const modifiedRevenues0708 = revenues0708.map((item) => {
      const iptuRevenue =
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos0708.RECEITA_RESULTANTE_IMPOSTO_IPTU,
        )?.receitasRealizadasNoAno || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.TOTAL_RECEITA_BRUTA_IMPOSTOS,
        )?.receitasRealizadasNoAno || 0;

      const percentage = totalRevenue ? (iptuRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'IPTU',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    // Process 2009-2014 data
    const modifiedRevenues0914 = [...revenues0912, ...revenues1314].map(
      (item) => {
        const iptuRevenue =
          item.receita.find(
            (r) => r.tipo === ItemReceitaTipos0912.IPTU_RECEITA_RESULTANTE,
          )?.receitasRealizadaAteBimestre || 0;

        const totalRevenue =
          item.receita.find(
            (r) => r.tipo === ItemReceitaTipos0912.TOTAL_RECEITA_IMPOSTOS,
          )?.receitasRealizadaAteBimestre || 0;

        const percentage = totalRevenue
          ? (iptuRevenue / totalRevenue) * 100
          : 0;

        return {
          ano: item.ano,
          codigoMunicipio: item.codigoMunicipio,
          indicador: [
            {
              tipo: 'IPTU',
              valor: parseFloat(percentage.toFixed(2)),
            },
          ],
        };
      },
    );

    // Process 2015-2020 data
    const modifiedRevenues1520 = [
      ...revenues1516,
      ...revenues1718,
      ...revenues1920,
    ].map((item) => {
      const iptuRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.IPTU_RECEITA_RESULTANTE,
        )?.receitasRealizadaAteBimestre || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage = totalRevenue ? (iptuRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'IPTU',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    // Process 2021-2023 data
    const modifiedRevenues2123 = [...revenues21, ...revenues23].map((item) => {
      const iptuRevenue =
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos21.RECEITA_IPTU ||
            r.tipo === ItemReceitaTipos23.RECEITA_RESULTANTE_DO_IPTU,
        )?.['receitasRealizadaAteBimestre'] ||
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos21.RECEITA_IPTU ||
            r.tipo === ItemReceitaTipos23.RECEITA_RESULTANTE_DO_IPTU,
        )?.['receitasRealizadasAteBimestre'] ||
        0;

      const totalRevenue =
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos21.TOTAL_RECEITA_IMPOSTOS ||
            r.tipo ===
              ItemReceitaTipos23.TOTAL_DA_RECEITA_RESULTANTE_DE_IMPOSTOS,
        )?.['receitasRealizadaAteBimestre'] ||
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos21.TOTAL_RECEITA_IMPOSTOS ||
            r.tipo ===
              ItemReceitaTipos23.TOTAL_DA_RECEITA_RESULTANTE_DE_IMPOSTOS,
        )?.['receitasRealizadasAteBimestre'] ||
        0;

      const percentage = totalRevenue ? (iptuRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'IPTU',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    let groupedData = {};

    if (groupType === GroupType.MUNICIPIO) {
      groupedData = this.groupByMunicipio([
        { key: 'revenues0708', data: modifiedRevenues0708 },
        { key: 'revenues0914', data: modifiedRevenues0914 },
        { key: 'revenues1520', data: modifiedRevenues1520 },
        { key: 'revenues2123', data: modifiedRevenues2123 },
      ]);
    } else if (groupType === GroupType.ANO) {
      groupedData = this.groupByAno([
        { key: 'revenues0708', data: modifiedRevenues0708 },
        { key: 'revenues0914', data: modifiedRevenues0914 },
        { key: 'revenues1520', data: modifiedRevenues1520 },
        { key: 'revenues2123', data: modifiedRevenues2123 },
      ]);
    }

    return groupedData;
  }

  async itbiComposition(groupType: GroupType, filters?: object) {
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
                  ItemReceitaTipos0708.RECEITA_RESULTANTE_ITBI,
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
                  ItemReceitaTipos0912.ITBI_RECEITA_RESULTANTE,
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
                  ItemReceitaTipos1314.ITBI_RECEITA_RESULTANTE,
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
                  ItemReceitaTipos1516.ITBI_RECEITA_RESULTANTE,
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
                  ItemReceitaTipos1718.ITBI_RECEITA_RESULTANTE,
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
                  ItemReceitaTipos1920.ITBI_RECEITA_RESULTANTE,
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
                in: [
                  ItemReceitaTipos21.RECEITA_ITBI,
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
      })),
      ...(await this.prismaService.relatorioMunicipal23.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos23.RECEITA_RESULTANTE_DO_ITBI,
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
      })),
    ];

    // Processar os dados

    const modifiedRevenues0708 = [...revenues0708].map((item) => {
      const itbiRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.RECEITA_RESULTANTE_ITBI,
        )?.receitasRealizadasNoAno || 0;
      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.TOTAL_RECEITA_BRUTA_IMPOSTOS,
        )?.receitasRealizadasNoAno || 0;
      const percentage = totalRevenue ? (itbiRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'ITBI',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRenevues0914 = [...revenues0914].map((item) => {
      const itbiRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.ITBI_RECEITA_RESULTANTE,
        )?.receitasRealizadaAteBimestre || 0;
      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;
      const percentage = totalRevenue ? (itbiRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'ITBI',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRenevues1520 = [...revenues1520].map((item) => {
      const itbiRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.ITBI_RECEITA_RESULTANTE,
        )?.receitasRealizadaAteBimestre || 0;
      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;
      const percentage = totalRevenue ? (itbiRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'ITBI',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRenevues2123 = [...revenues2123].map((item) => {
      const itbiRevenue =
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos21.RECEITA_ITBI ||
            r.tipo === ItemReceitaTipos23.RECEITA_RESULTANTE_DO_ITBI,
        )?.['receitasRealizadaAteBimestre'] ||
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos21.RECEITA_ITBI ||
            r.tipo === ItemReceitaTipos23.RECEITA_RESULTANTE_DO_ITBI,
        )?.['receitasRealizadasAteBimestre'] ||
        0;

      const totalRevenue =
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos21.TOTAL_RECEITA_IMPOSTOS ||
            r.tipo ===
              ItemReceitaTipos23.TOTAL_DA_RECEITA_RESULTANTE_DE_IMPOSTOS,
        )?.['receitasRealizadaAteBimestre'] ||
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos21.TOTAL_RECEITA_IMPOSTOS ||
            r.tipo ===
              ItemReceitaTipos23.TOTAL_DA_RECEITA_RESULTANTE_DE_IMPOSTOS,
        )?.['receitasRealizadasAteBimestre'] ||
        0;

      const percentage = totalRevenue ? (itbiRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'ITBI',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    let groupedData = {};

    if (groupType === GroupType.MUNICIPIO) {
      groupedData = this.groupByMunicipio([
        { key: 'revenues0708', data: modifiedRevenues0708 },
        { key: 'revenues0914', data: modifiedRenevues0914 },
        { key: 'revenues1520', data: modifiedRenevues1520 },
        { key: 'revenues2123', data: modifiedRenevues2123 },
      ]);
    } else if (groupType === GroupType.ANO) {
      groupedData = this.groupByAno([
        { key: 'revenues0708', data: modifiedRevenues0708 },
        { key: 'revenues0914', data: modifiedRenevues0914 },
        { key: 'revenues1520', data: modifiedRenevues1520 },
        { key: 'revenues2123', data: modifiedRenevues2123 },
      ]);
    }

    return groupedData;
  }

  async issComposition(groupType: GroupType, filters?: object) {
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
                  ItemReceitaTipos0708.RECEITA_RESULTANTE_ISS,
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
                  ItemReceitaTipos0912.ISS_RECEITA_RESULTANTE,
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
                  ItemReceitaTipos1314.ISS_RECEITA_RESULTANTE,
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
                  ItemReceitaTipos1516.ISS_RECEITA_RESULTANTE,
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
                  ItemReceitaTipos1718.ISS_RECEITA_RESULTANTE,
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
                  ItemReceitaTipos1920.ISS_RECEITA_RESULTANTE,
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
                in: [
                  ItemReceitaTipos21.RECEITA_ISS,
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
      })),
      ...(await this.prismaService.relatorioMunicipal23.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos23.RECEITA_RESULTANTE_DO_ISS,
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
      })),
    ];

    // Processar os dados
    const modifiedRevenues0708 = revenues0708.map((item) => {
      const issRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.RECEITA_RESULTANTE_ISS,
        )?.receitasRealizadasNoAno || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.TOTAL_RECEITA_BRUTA_IMPOSTOS,
        )?.receitasRealizadasNoAno || 0;

      const percentage = totalRevenue ? (issRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'ISS',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues0914 = revenues0914.map((item) => {
      const issRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.ISS_RECEITA_RESULTANTE,
        )?.receitasRealizadaAteBimestre || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage = totalRevenue ? (issRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'ISS',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues1520 = revenues1520.map((item) => {
      const issRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.ISS_RECEITA_RESULTANTE,
        )?.receitasRealizadaAteBimestre || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage = totalRevenue ? (issRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'ISS',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues2123 = revenues2123.map((item) => {
      const issRevenue =
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos21.RECEITA_ISS ||
            r.tipo === ItemReceitaTipos23.RECEITA_RESULTANTE_DO_ISS,
        )?.['receitasRealizadaAteBimestre'] ||
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos21.RECEITA_ISS ||
            r.tipo === ItemReceitaTipos23.RECEITA_RESULTANTE_DO_ISS,
        )?.['receitasRealizadasAteBimestre'] ||
        0;

      const totalRevenue =
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos21.TOTAL_RECEITA_IMPOSTOS ||
            r.tipo ===
              ItemReceitaTipos23.TOTAL_DA_RECEITA_RESULTANTE_DE_IMPOSTOS,
        )?.['receitasRealizadaAteBimestre'] ||
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos21.TOTAL_RECEITA_IMPOSTOS ||
            r.tipo ===
              ItemReceitaTipos23.TOTAL_DA_RECEITA_RESULTANTE_DE_IMPOSTOS,
        )?.['receitasRealizadasAteBimestre'] ||
        0;

      const percentage = totalRevenue ? (issRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'ISS',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    let groupedData = {};

    if (groupType === GroupType.MUNICIPIO) {
      groupedData = this.groupByMunicipio([
        { key: 'revenues0708', data: modifiedRevenues0708 },
        { key: 'revenues0914', data: modifiedRevenues0914 },
        { key: 'revenues1520', data: modifiedRevenues1520 },
        { key: 'revenues2123', data: modifiedRevenues2123 },
      ]);
    } else if (groupType === GroupType.ANO) {
      groupedData = this.groupByAno([
        { key: 'revenues0708', data: modifiedRevenues0708 },
        { key: 'revenues0914', data: modifiedRevenues0914 },
        { key: 'revenues1520', data: modifiedRevenues1520 },
        { key: 'revenues2123', data: modifiedRevenues2123 },
      ]);
    }

    return groupedData;
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
