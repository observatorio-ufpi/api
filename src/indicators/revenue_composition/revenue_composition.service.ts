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
import { GroupType, PaginationParams } from 'src/utils/constants';

@Injectable()
export class RevenueCompositionService {
  constructor(private readonly prismaService: PrismaService) {}

  async iptuComposition(
    groupType: GroupType,
    filters?: object,
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

  async itbiComposition(
    groupType: GroupType,
    filters?: object,
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

  async issComposition(
    groupType: GroupType,
    filters?: object,
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

  async irrfComposition(
    groupType: GroupType,
    filters?: object,
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
                  ItemReceitaTipos0708.RECEITA_RESULTANTE_IRRF,
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
                  ItemReceitaTipos0912.IRRF_RECEITA_RESULTANTE,
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
                  ItemReceitaTipos1314.IRRF_RECEITA_RESULTANTE,
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
                  ItemReceitaTipos1516.IRRF_RECEITA_RESULTANTE,
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
                  ItemReceitaTipos1718.IRRF_RECEITA_RESULTANTE,
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
                  ItemReceitaTipos1920.IRRF_RECEITA_RESULTANTE,
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
                  ItemReceitaTipos21.RECEITA_IRRF,
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
                  ItemReceitaTipos23.RECEITA_RESULTANTE_DO_IRRF,
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
      const irrfRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.RECEITA_RESULTANTE_IRRF,
        )?.receitasRealizadasNoAno || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.TOTAL_RECEITA_BRUTA_IMPOSTOS,
        )?.receitasRealizadasNoAno || 0;

      const percentage = totalRevenue ? (irrfRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'IRRF',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues0914 = revenues0914.map((item) => {
      const irrfRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.IRRF_RECEITA_RESULTANTE,
        )?.receitasRealizadaAteBimestre || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage = totalRevenue ? (irrfRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'IRRF',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues1520 = revenues1520.map((item) => {
      const irrfRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.IRRF_RECEITA_RESULTANTE,
        )?.receitasRealizadaAteBimestre || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage = totalRevenue ? (irrfRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'IRRF',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues2123 = revenues2123.map((item) => {
      const irrfRevenue =
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos21.RECEITA_IRRF ||
            r.tipo === ItemReceitaTipos23.RECEITA_RESULTANTE_DO_IRRF,
        )?.['receitasRealizadaAteBimestre'] ||
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos21.RECEITA_IRRF ||
            r.tipo === ItemReceitaTipos23.RECEITA_RESULTANTE_DO_IRRF,
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

      const percentage = totalRevenue ? (irrfRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'IRRF',
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

  async fpmComposition(
    groupType: GroupType,
    filters?: object,
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
                  ItemReceitaTipos0708.COTA_PARTE_FPM,
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
                  ItemReceitaTipos0912.COTA_PARTE_FPM,
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
                  ItemReceitaTipos1314.COTA_PARTE_FPM,
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
                  ItemReceitaTipos1516.COTA_PARTE_FPM,
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
                  ItemReceitaTipos1718.COTA_PARTE_FPM,
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
                  ItemReceitaTipos1920.COTA_PARTE_FPM,
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
                  ItemReceitaTipos21.COTA_PARTE_FPM,
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
                  ItemReceitaTipos23.COTA_PARTE_FPE,
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
      const fpmRevenue =
        item.receita.find((r) => r.tipo === ItemReceitaTipos0708.COTA_PARTE_FPM)
          ?.receitasRealizadasNoAno || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.TOTAL_RECEITA_BRUTA_IMPOSTOS,
        )?.receitasRealizadasNoAno || 0;

      const percentage = totalRevenue ? (fpmRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'FPM',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues0914 = revenues0914.map((item) => {
      const fpmRevenue =
        item.receita.find((r) => r.tipo === ItemReceitaTipos0912.COTA_PARTE_FPM)
          ?.receitasRealizadaAteBimestre || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage = totalRevenue ? (fpmRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'FPM',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues1520 = revenues1520.map((item) => {
      const fpmRevenue =
        item.receita.find((r) => r.tipo === ItemReceitaTipos1516.COTA_PARTE_FPM)
          ?.receitasRealizadaAteBimestre || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage = totalRevenue ? (fpmRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'FPM',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues2123 = revenues2123.map((item) => {
      const fpmRevenue =
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos21.COTA_PARTE_FPM ||
            r.tipo === ItemReceitaTipos23.COTA_PARTE_FPE,
        )?.['receitasRealizadaAteBimestre'] ||
        item.receita.find(
          (r) =>
            r.tipo === ItemReceitaTipos21.COTA_PARTE_FPM ||
            r.tipo === ItemReceitaTipos23.COTA_PARTE_FPE,
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

      const percentage = totalRevenue ? (fpmRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'FPM',
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

  async cotaParteIcmsComposition(
    groupType: GroupType,
    filters?: object,
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
                  ItemReceitaTipos0708.COTA_PARTE_ICMS,
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
                  ItemReceitaTipos0912.COTA_PARTE_ICMS,
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
                  ItemReceitaTipos1314.COTA_PARTE_ICMS,
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
                  ItemReceitaTipos1516.COTA_PARTE_ICMS,
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
                  ItemReceitaTipos1718.COTA_PARTE_ICMS,
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
                  ItemReceitaTipos1920.COTA_PARTE_ICMS,
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
                  ItemReceitaTipos21.COTA_PARTE_ICMS,
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
                  ItemReceitaTipos23.COTA_PARTE_ICMS,
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
      const icmsRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.COTA_PARTE_ICMS,
        )?.receitasRealizadasNoAno || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.TOTAL_RECEITA_BRUTA_IMPOSTOS,
        )?.receitasRealizadasNoAno || 0;

      const percentage = totalRevenue ? (icmsRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'COTA_PARTE_ICMS',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues0914 = revenues0914.map((item) => {
      const icmsRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.COTA_PARTE_ICMS,
        )?.receitasRealizadaAteBimestre || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage = totalRevenue ? (icmsRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'COTA_PARTE_ICMS',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues1520 = revenues1520.map((item) => {
      const icmsRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.COTA_PARTE_ICMS,
        )?.receitasRealizadaAteBimestre || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage = totalRevenue ? (icmsRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'COTA_PARTE_ICMS',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues2123 = revenues2123.map((item) => {
      const icmsRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos21.COTA_PARTE_ICMS,
        )?.['receitasRealizadaAteBimestre'] ||
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos21.COTA_PARTE_ICMS,
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

      const percentage = totalRevenue ? (icmsRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'COTA_PARTE_ICMS',
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

  async icmsDesoneracaoComposition(
    groupType: GroupType,
    filters?: object,
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
                  ItemReceitaTipos0708.ICMS_DESONERACAO,
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
                  ItemReceitaTipos0912.ICMS_DESONERACAO_LC_87_1996,
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
                  ItemReceitaTipos1314.ICMS_DESONERACAO_LC_87_1996,
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
                  ItemReceitaTipos1516.ICMS_DESONERACAO_LC_87_1996,
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
                  ItemReceitaTipos1718.ICMS_DESONERACAO_LC_87_1996,
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
                  ItemReceitaTipos1920.ICMS_DESONERACAO_LC_87_1996,
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

    // Processar os dados
    const modifiedRevenues0708 = revenues0708.map((item) => {
      const icmsDesonacaoRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.ICMS_DESONERACAO,
        )?.receitasRealizadasNoAno || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.TOTAL_RECEITA_BRUTA_IMPOSTOS,
        )?.receitasRealizadasNoAno || 0;

      const percentage = totalRevenue
        ? (icmsDesonacaoRevenue / totalRevenue) * 100
        : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'ICMS_DESONERACAO',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues0914 = revenues0914.map((item) => {
      const icmsDesonacaoRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.ICMS_DESONERACAO_LC_87_1996,
        )?.receitasRealizadaAteBimestre || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage = totalRevenue
        ? (icmsDesonacaoRevenue / totalRevenue) * 100
        : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'ICMS_DESONERACAO',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues1520 = revenues1520.map((item) => {
      const icmsDesonacaoRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.ICMS_DESONERACAO_LC_87_1996,
        )?.receitasRealizadaAteBimestre || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage = totalRevenue
        ? (icmsDesonacaoRevenue / totalRevenue) * 100
        : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'ICMS_DESONERACAO',
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
      ]);
    } else if (groupType === GroupType.ANO) {
      groupedData = this.groupByAno([
        { key: 'revenues0708', data: modifiedRevenues0708 },
        { key: 'revenues0914', data: modifiedRevenues0914 },
        { key: 'revenues1520', data: modifiedRevenues1520 },
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

  async cotaParteIpiComposition(
    groupType: GroupType,
    filters?: object,
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
                  ItemReceitaTipos0708.COTA_PARTE_IPI_EXPORTACAO,
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
                  ItemReceitaTipos0912.COTA_PARTE_IPI_EXPORTACAO,
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
                  ItemReceitaTipos1314.COTA_PARTE_IPI_EXPORTACAO,
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
                  ItemReceitaTipos1516.COTA_PARTE_IPI_EXPORTACAO,
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
                  ItemReceitaTipos1718.COTA_PARTE_IPI_EXPORTACAO,
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
                  ItemReceitaTipos1920.COTA_PARTE_IPI_EXPORTACAO,
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
                  ItemReceitaTipos21.COTA_PARTE_IPI_EXPORTACAO,
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
                  ItemReceitaTipos23.COTA_PARTE_IPI_EXPORTACAO,
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
      const ipiRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.COTA_PARTE_IPI_EXPORTACAO,
        )?.receitasRealizadasNoAno || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.TOTAL_RECEITA_BRUTA_IMPOSTOS,
        )?.receitasRealizadasNoAno || 0;

      const percentage = totalRevenue ? (ipiRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'COTA_PARTE_IPI',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues0914 = revenues0914.map((item) => {
      const ipiRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.COTA_PARTE_IPI_EXPORTACAO,
        )?.receitasRealizadaAteBimestre || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage = totalRevenue ? (ipiRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'COTA_PARTE_IPI',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues1520 = revenues1520.map((item) => {
      const ipiRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.COTA_PARTE_IPI_EXPORTACAO,
        )?.receitasRealizadaAteBimestre || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage = totalRevenue ? (ipiRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'COTA_PARTE_IPI',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues2123 = revenues2123.map((item) => {
      const ipiRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos21.COTA_PARTE_IPI_EXPORTACAO,
        )?.['receitasRealizadaAteBimestre'] ||
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos23.COTA_PARTE_IPI_EXPORTACAO,
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

      const percentage = totalRevenue ? (ipiRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'COTA_PARTE_IPI',
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

  async cotaParteItrComposition(
    groupType: GroupType,
    filters?: object,
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
                  ItemReceitaTipos0708.COTA_PARTE_ITR,
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
                  ItemReceitaTipos0912.ITR_RECEITA_RESULTANTE,
                  ItemReceitaTipos0912.COTA_PARTE_ITR,
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
                  ItemReceitaTipos1314.ITR_RECEITA_RESULTANTE,
                  ItemReceitaTipos1314.COTA_PARTE_ITR,
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
    const revenues1518 = [
      ...(await this.prismaService.relatorioMunicipal1516.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1516.ITR_RECEITA_RESULTANTE,
                  ItemReceitaTipos1516.COTA_PARTE_ITR,
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
                  ItemReceitaTipos1718.ITR_RECEITA_RESULTANTE,
                  ItemReceitaTipos1718.COTA_PARTE_ITR,
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
    ];

    const revenues1920 =
      await this.prismaService.relatorioMunicipal1920.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1920.COTA_PARTE_ITR,
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
                  ItemReceitaTipos21.COTA_PARTE_ITR,
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
                  ItemReceitaTipos23.COTA_PARTE_ITR,
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
      const itrRevenue =
        item.receita.find((r) => r.tipo === ItemReceitaTipos0708.COTA_PARTE_ITR)
          ?.receitasRealizadasNoAno || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.TOTAL_RECEITA_BRUTA_IMPOSTOS,
        )?.receitasRealizadasNoAno || 0;

      const percentage = totalRevenue ? (itrRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'COTA_PARTE_ITR',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues0914 = revenues0914.map((item) => {
      const itrRevenue =
        (item.receita.find((r) => r.tipo === ItemReceitaTipos0912.ITR)
          ?.receitasRealizadaAteBimestre || 0) +
        (item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.COTA_PARTE_ITR,
        )?.receitasRealizadaAteBimestre || 0);

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage = totalRevenue ? (itrRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'COTA_PARTE_ITR',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues1518 = revenues1518.map((item) => {
      let itrRevenue = 0;
      let totalRevenue = 0;

      itrRevenue =
        (item.receita.find((r) => r.tipo === ItemReceitaTipos1516.ITR)
          ?.receitasRealizadaAteBimestre || 0) +
        (item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.COTA_PARTE_ITR,
        )?.receitasRealizadaAteBimestre || 0);

      totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage = totalRevenue ? (itrRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'COTA_PARTE_ITR',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues1920 = revenues1920.map((item) => {
      const itrRevenue =
        item.receita.find((r) => r.tipo === ItemReceitaTipos1920.COTA_PARTE_ITR)
          ?.receitasRealizadaAteBimestre || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1920.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage = totalRevenue ? (itrRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'COTA_PARTE_ITR',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues2123 = revenues2123.map((item) => {
      const itrRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos21.COTA_PARTE_ITR,
        )?.['receitasRealizadaAteBimestre'] ||
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos23.COTA_PARTE_ITR,
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

      const percentage = totalRevenue ? (itrRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'COTA_PARTE_ITR',
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
        { key: 'revenues1518', data: modifiedRevenues1518 },
        { key: 'revenues1920', data: modifiedRevenues1920 },
        { key: 'revenues2123', data: modifiedRevenues2123 },
      ]);
    } else if (groupType === GroupType.ANO) {
      groupedData = this.groupByAno([
        { key: 'revenues0708', data: modifiedRevenues0708 },
        { key: 'revenues0914', data: modifiedRevenues0914 },
        { key: 'revenues1518', data: modifiedRevenues1518 },
        { key: 'revenues1920', data: modifiedRevenues1920 },
        { key: 'revenues2123', data: modifiedRevenues2123 },
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

  async cotaParteIpvaComposition(
    groupType: GroupType,
    filters?: object,
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
                  ItemReceitaTipos0708.COTA_PARTE_IPVA,
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
                  ItemReceitaTipos0912.COTA_PARTE_IPVA,
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
                  ItemReceitaTipos1314.COTA_PARTE_IPVA,
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
                  ItemReceitaTipos1516.COTA_PARTE_IPVA,
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
                  ItemReceitaTipos1718.COTA_PARTE_IPVA,
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
                  ItemReceitaTipos1920.COTA_PARTE_IPVA,
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
                  ItemReceitaTipos21.COTA_PARTE_IPVA,
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
                  ItemReceitaTipos23.COTA_PARTE_IPVA,
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
      const ipvaRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.COTA_PARTE_IPVA,
        )?.receitasRealizadasNoAno || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.TOTAL_RECEITA_BRUTA_IMPOSTOS,
        )?.receitasRealizadasNoAno || 0;

      const percentage = totalRevenue ? (ipvaRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'COTA_PARTE_IPVA',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues0914 = revenues0914.map((item) => {
      const ipvaRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.COTA_PARTE_IPVA,
        )?.receitasRealizadaAteBimestre || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage = totalRevenue ? (ipvaRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'COTA_PARTE_IPVA',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues1520 = revenues1520.map((item) => {
      const ipvaRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.COTA_PARTE_IPVA,
        )?.receitasRealizadaAteBimestre || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage = totalRevenue ? (ipvaRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'COTA_PARTE_IPVA',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues2123 = revenues2123.map((item) => {
      const ipvaRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos21.COTA_PARTE_IPVA,
        )?.['receitasRealizadaAteBimestre'] ||
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos23.COTA_PARTE_IPVA,
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

      const percentage = totalRevenue ? (ipvaRevenue / totalRevenue) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'COTA_PARTE_IPVA',
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

  async cotaParteIofOuroComposition(
    groupType: GroupType,
    filters?: object,
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
                  ItemReceitaTipos0708.COTA_PARTE_IOF_OURO,
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
                  ItemReceitaTipos0912.COTA_PARTE_IOF_OURO,
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
                  ItemReceitaTipos1314.COTA_PARTE_IOF_OURO,
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
                  ItemReceitaTipos1516.COTA_PARTE_IOF_OURO,
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
                  ItemReceitaTipos1718.COTA_PARTE_IOF_OURO,
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
                  ItemReceitaTipos1920.COTA_PARTE_IOF_OURO,
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
                  ItemReceitaTipos21.COTA_PARTE_IOF_OURO,
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
                  ItemReceitaTipos23.COTA_PARTE_IOF_OURO,
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
      const iofOuroRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.COTA_PARTE_IOF_OURO,
        )?.receitasRealizadasNoAno || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.TOTAL_RECEITA_BRUTA_IMPOSTOS,
        )?.receitasRealizadasNoAno || 0;

      const percentage = totalRevenue
        ? (iofOuroRevenue / totalRevenue) * 100
        : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'COTA_PARTE_IOF_OURO',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues0914 = revenues0914.map((item) => {
      const iofOuroRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.COTA_PARTE_IOF_OURO,
        )?.receitasRealizadaAteBimestre || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage = totalRevenue
        ? (iofOuroRevenue / totalRevenue) * 100
        : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'COTA_PARTE_IOF_OURO',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues1520 = revenues1520.map((item) => {
      const iofOuroRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.COTA_PARTE_IOF_OURO,
        )?.receitasRealizadaAteBimestre || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage = totalRevenue
        ? (iofOuroRevenue / totalRevenue) * 100
        : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'COTA_PARTE_IOF_OURO',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues2123 = revenues2123.map((item) => {
      const iofOuroRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos21.COTA_PARTE_IOF_OURO,
        )?.['receitasRealizadaAteBimestre'] ||
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos23.COTA_PARTE_IOF_OURO,
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
        )?.['receitasRealizadaAteBimestre'] ||
        0;

      const percentage = totalRevenue
        ? (iofOuroRevenue / totalRevenue) * 100
        : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'COTA_PARTE_IOF_OURO',
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

  async outrasTransferenciasComposition(
    groupType: GroupType,
    filters?: object,
    pagination?: PaginationParams,
  ) {
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
                  ItemReceitaTipos21.COMPENSACOES_FINANCEIRAS,
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
                  ItemReceitaTipos23.OUTRAS_TRANSFERENCIAS_IMPOSTOS_E_TRANSFERENCIAS_CONSTITUCIONAIS,
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

    const modifiedRevenues2123 = revenues2123.map((item) => {
      const outrasTransferenciasRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos21.COMPENSACOES_FINANCEIRAS,
        )?.['receitasRealizadaAteBimestre'] ||
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos23.OUTRAS_TRANSFERENCIAS_IMPOSTOS_E_TRANSFERENCIAS_CONSTITUCIONAIS,
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
        )?.['receitasRealizadaAteBimestre'] ||
        0;

      const percentage = totalRevenue
        ? (outrasTransferenciasRevenue / totalRevenue) * 100
        : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'OUTRAS_TRANSFERENCIAS',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    let groupedData = {};

    if (groupType === GroupType.MUNICIPIO) {
      groupedData = this.groupByMunicipio([
        { key: 'revenues2123', data: modifiedRevenues2123 },
      ]);
    } else if (groupType === GroupType.ANO) {
      groupedData = this.groupByAno([
        { key: 'revenues2123', data: modifiedRevenues2123 },
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

  async participacaoReceitaImpostosProprios(
    groupType: GroupType,
    filters?: object,
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
                  ItemReceitaTipos0708.RECEITAS_DE_IMPOSTO,
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
                  ItemReceitaTipos0912.RECEITA_DE_IMPOSTOS,
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
                  ItemReceitaTipos1314.RECEITA_DE_IMPOSTOS,
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
                  ItemReceitaTipos1516.RECEITA_DE_IMPOSTOS,
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
                  ItemReceitaTipos1718.RECEITA_DE_IMPOSTOS,
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
                  ItemReceitaTipos1920.RECEITA_DE_IMPOSTOS,
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
                  ItemReceitaTipos21.RECEITA_DE_IMPOSTOS,
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
                  ItemReceitaTipos23.RECEITA_DE_IMPOSTOS,
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
      const impostosProprios =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.RECEITAS_DE_IMPOSTO,
        )?.receitasRealizadasNoAno || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.TOTAL_RECEITA_BRUTA_IMPOSTOS,
        )?.receitasRealizadasNoAno || 0;

      const percentage = totalRevenue
        ? (impostosProprios / totalRevenue) * 100
        : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'PARTICIPACAO_RECEITA_IMPOSTOS_PROPRIOS',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues0914 = revenues0914.map((item) => {
      const impostosProprios =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.RECEITA_DE_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage = totalRevenue
        ? (impostosProprios / totalRevenue) * 100
        : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'PARTICIPACAO_RECEITA_IMPOSTOS_PROPRIOS',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues1520 = revenues1520.map((item) => {
      const impostosProprios =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.RECEITA_DE_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage = totalRevenue
        ? (impostosProprios / totalRevenue) * 100
        : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'PARTICIPACAO_RECEITA_IMPOSTOS_PROPRIOS',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues2123 = revenues2123.map((item) => {
      const impostosProprios =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos21.RECEITA_DE_IMPOSTOS,
        )?.['receitasRealizadaAteBimestre'] ||
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos23.RECEITA_DE_IMPOSTOS,
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

      const percentage = totalRevenue
        ? (impostosProprios / totalRevenue) * 100
        : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'PARTICIPACAO_RECEITA_IMPOSTOS_PROPRIOS',
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

  async participacaoTransferenciasComposition(
    groupType: GroupType,
    filters?: object,
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
      })),
      ...(await this.prismaService.relatorioMunicipal1314.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
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
      })),
      ...(await this.prismaService.relatorioMunicipal1718.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
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
      })),
      ...(await this.prismaService.relatorioMunicipal1920.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
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
      })),
      ...(await this.prismaService.relatorioMunicipal23.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
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
      })),
    ];

    // Processar os dados
    const modifiedRevenues0708 = revenues0708.map((item) => {
      const transferenciasRevenue =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos0708.RECEITAS_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAL,
        )?.receitasRealizadasNoAno || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.TOTAL_RECEITA_BRUTA_IMPOSTOS,
        )?.receitasRealizadasNoAno || 0;

      const percentage = totalRevenue
        ? (transferenciasRevenue / totalRevenue) * 100
        : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'PARTICIPACAO_TRANSFERENCIAS',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues0914 = revenues0914.map((item) => {
      const transferenciasRevenue =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos0912.RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
        )?.receitasRealizadaAteBimestre || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage = totalRevenue
        ? (transferenciasRevenue / totalRevenue) * 100
        : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'PARTICIPACAO_TRANSFERENCIAS',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues1520 = revenues1520.map((item) => {
      const transferenciasRevenue =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos1516.RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
        )?.receitasRealizadaAteBimestre || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage = totalRevenue
        ? (transferenciasRevenue / totalRevenue) * 100
        : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'PARTICIPACAO_TRANSFERENCIAS',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues2123 = revenues2123.map((item) => {
      const transferenciasRevenue =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos21.RECEITA_TRANSFERENCIAS_CONSTITUCIONAIS,
        )?.['receitasRealizadaAteBimestre'] ||
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
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

      const percentage = totalRevenue
        ? (transferenciasRevenue / totalRevenue) * 100
        : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'PARTICIPACAO_TRANSFERENCIAS',
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

  async razaoImpostosTransferenciasComposition(
    groupType: GroupType,
    filters?: object,
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
                  ItemReceitaTipos0708.RECEITAS_DE_IMPOSTO,
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
                  ItemReceitaTipos0912.RECEITA_DE_IMPOSTOS,
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
      })),
      ...(await this.prismaService.relatorioMunicipal1314.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1314.RECEITA_DE_IMPOSTOS,
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
                  ItemReceitaTipos1516.RECEITA_DE_IMPOSTOS,
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
      })),
      ...(await this.prismaService.relatorioMunicipal1718.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1718.RECEITA_DE_IMPOSTOS,
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
      })),
      ...(await this.prismaService.relatorioMunicipal1920.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1920.RECEITA_DE_IMPOSTOS,
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
                  ItemReceitaTipos21.RECEITA_DE_IMPOSTOS,
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
      })),
      ...(await this.prismaService.relatorioMunicipal23.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos23.RECEITA_DE_IMPOSTOS,
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
      })),
    ];

    // Processar os dados
    const modifiedRevenues0708 = revenues0708.map((item) => {
      const impostosRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.RECEITAS_DE_IMPOSTO,
        )?.receitasRealizadasNoAno || 0;

      const transferenciasRevenue =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos0708.RECEITAS_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAL,
        )?.receitasRealizadasNoAno || 0;

      const percentage = transferenciasRevenue
        ? (impostosRevenue / transferenciasRevenue) * 100
        : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'RAZAO_IMPOSTOS_TRANSFERENCIAS',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues0914 = revenues0914.map((item) => {
      const impostosRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.RECEITA_DE_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const transferenciasRevenue =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos0912.RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage = transferenciasRevenue
        ? (impostosRevenue / transferenciasRevenue) * 100
        : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'RAZAO_IMPOSTOS_TRANSFERENCIAS',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues1520 = revenues1520.map((item) => {
      const impostosRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.RECEITA_DE_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const transferenciasRevenue =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos1516.RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage = transferenciasRevenue
        ? (impostosRevenue / transferenciasRevenue) * 100
        : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'RAZAO_IMPOSTOS_TRANSFERENCIAS',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues2123 = revenues2123.map((item) => {
      const impostosRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos21.RECEITA_DE_IMPOSTOS,
        )?.['receitasRealizadaAteBimestre'] ||
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos21.RECEITA_DE_IMPOSTOS,
        )?.['receitasRealizadasAteBimestre'] ||
        0;

      const transferenciasRevenue =
        item.receita.find(
          (r) =>
            r.tipo ===
              ItemReceitaTipos21.RECEITA_TRANSFERENCIAS_CONSTITUCIONAIS ||
            r.tipo ===
              ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
        )?.['receitasRealizadaAteBimestre'] ||
        item.receita.find(
          (r) =>
            r.tipo ===
              ItemReceitaTipos21.RECEITA_TRANSFERENCIAS_CONSTITUCIONAIS ||
            r.tipo ===
              ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
        )?.['receitasRealizadasAteBimestre'] ||
        0;

      const percentage = transferenciasRevenue
        ? (impostosRevenue / transferenciasRevenue) * 100
        : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'RAZAO_IMPOSTOS_TRANSFERENCIAS',
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

  async razaoTransferenciasImpostosComposition(
    groupType: GroupType,
    filters?: object,
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
                  ItemReceitaTipos0708.RECEITAS_DE_IMPOSTO,
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
                  ItemReceitaTipos0912.RECEITA_DE_IMPOSTOS,
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
      })),
      ...(await this.prismaService.relatorioMunicipal1314.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1314.RECEITA_DE_IMPOSTOS,
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
                  ItemReceitaTipos1516.RECEITA_DE_IMPOSTOS,
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
      })),
      ...(await this.prismaService.relatorioMunicipal1718.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1718.RECEITA_DE_IMPOSTOS,
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
      })),
      ...(await this.prismaService.relatorioMunicipal1920.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos1920.RECEITA_DE_IMPOSTOS,
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
                  ItemReceitaTipos21.RECEITA_DE_IMPOSTOS,
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
      })),
      ...(await this.prismaService.relatorioMunicipal23.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          receita: {
            where: {
              tipo: {
                in: [
                  ItemReceitaTipos23.RECEITA_DE_IMPOSTOS,
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
      })),
    ];

    // Processar os dados
    const modifiedRevenues0708 = revenues0708.map((item) => {
      const impostosRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.RECEITAS_DE_IMPOSTO,
        )?.receitasRealizadasNoAno || 0;

      const transferenciasRevenue =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos0708.RECEITAS_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAL,
        )?.receitasRealizadasNoAno || 0;

      const percentage = impostosRevenue
        ? (transferenciasRevenue / impostosRevenue) * 100
        : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'RAZAO_TRANSFERENCIAS_IMPOSTOS',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues0914 = revenues0914.map((item) => {
      const impostosRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.RECEITA_DE_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const transferenciasRevenue =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos0912.RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage = impostosRevenue
        ? (transferenciasRevenue / impostosRevenue) * 100
        : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'RAZAO_TRANSFERENCIAS_IMPOSTOS',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues1520 = revenues1520.map((item) => {
      const impostosRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.RECEITA_DE_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const transferenciasRevenue =
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos1516.RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage = impostosRevenue
        ? (transferenciasRevenue / impostosRevenue) * 100
        : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'RAZAO_TRANSFERENCIAS_IMPOSTOS',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues2123 = revenues2123.map((item) => {
      const impostosRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos21.RECEITA_DE_IMPOSTOS,
        )?.['receitasRealizadaAteBimestre'] ||
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos23.RECEITA_DE_IMPOSTOS,
        )?.['receitasRealizadasAteBimestre'] ||
        0;

      const transferenciasRevenue =
        item.receita.find(
          (r) =>
            r.tipo ===
              ItemReceitaTipos21.RECEITA_TRANSFERENCIAS_CONSTITUCIONAIS ||
            r.tipo ===
              ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
        )?.['receitasRealizadaAteBimestre'] ||
        item.receita.find(
          (r) =>
            r.tipo ===
              ItemReceitaTipos21.RECEITA_TRANSFERENCIAS_CONSTITUCIONAIS ||
            r.tipo ===
              ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
        )?.['receitasRealizadasAteBimestre'] ||
        0;

      const percentage = impostosRevenue
        ? (transferenciasRevenue / impostosRevenue) * 100
        : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'RAZAO_TRANSFERENCIAS_IMPOSTOS',
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

  async participacaoFundebComposition(
    groupType: GroupType,
    filters?: object,
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
                  ItemReceitaTipos0708.RECEITAS_RECEBIDAS_DO_FUNDEB,
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
                  ItemReceitaTipos0912.RECEITAS_RECEBIDAS_DO_FUNDEB,
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
                  ItemReceitaTipos1314.RECEITAS_RECEBIDAS_DO_FUNDEB,
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
                  ItemReceitaTipos1516.RECEITAS_RECEBIDAS_DO_FUNDEB,
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
                  ItemReceitaTipos1718.RECEITAS_RECEBIDAS_DO_FUNDEB,
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
                  ItemReceitaTipos1920.RECEITAS_RECEBIDAS_DO_FUNDEB,
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
                  ItemReceitaTipos21.RECEITAS_RECEBIDAS_FUNDEB,
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
                  ItemReceitaTipos23.TOTAL_DAS_RECEITAS_DO_FUNDEB_RECEBIDAS,
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
      const fundebRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.RECEITAS_DESTINADAS_AO_FUNDEB,
        )?.receitasRealizadasNoAno || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0708.TOTAL_RECEITA_BRUTA_IMPOSTOS,
        )?.receitasRealizadasNoAno || 0;

      const percentage = totalRevenue
        ? (fundebRevenue / totalRevenue) * 100
        : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'PARTICIPACAO_FUNDEB',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues0914 = revenues0914.map((item) => {
      const fundebRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.RECEITAS_RECEBIDAS_DO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos0912.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage = totalRevenue
        ? (fundebRevenue / totalRevenue) * 100
        : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'PARTICIPACAO_FUNDEB',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues1520 = revenues1520.map((item) => {
      const fundebRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.RECEITAS_RECEBIDAS_DO_FUNDEB,
        )?.receitasRealizadaAteBimestre || 0;

      const totalRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos1516.TOTAL_RECEITA_IMPOSTOS,
        )?.receitasRealizadaAteBimestre || 0;

      const percentage = totalRevenue
        ? (fundebRevenue / totalRevenue) * 100
        : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'PARTICIPACAO_FUNDEB',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    const modifiedRevenues2123 = revenues2123.map((item) => {
      const fundebRevenue =
        item.receita.find(
          (r) => r.tipo === ItemReceitaTipos21.RECEITAS_RECEBIDAS_FUNDEB,
        )?.['receitasRealizadaAteBimestre'] ||
        item.receita.find(
          (r) =>
            r.tipo ===
            ItemReceitaTipos23.TOTAL_DAS_RECEITAS_DO_FUNDEB_RECEBIDAS,
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

      const percentage = totalRevenue
        ? (fundebRevenue / totalRevenue) * 100
        : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'PARTICIPACAO_FUNDEB',
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
