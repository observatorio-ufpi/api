import { Injectable } from '@nestjs/common';
import {
  ApuracaoLimiteMinimoConstitucionalTipos21,
  ApuracaoLimiteMinimoConstitucionalTipos23,
  ItemDespesasTipos21,
  ItemDespesaTipos0708,
  ItemDespesaTipos0912,
  ItemDespesaTipos1314,
  ItemDespesaTipos1516,
  ItemDespesaTipos1718,
  ItemDespesaTipos1920,
  ItemDespesaTipos23,
} from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { GroupType, PaginationParams } from 'src/utils/constants';
import { groupByAno, groupByMunicipio } from 'src/utils/groupFunctions';

@Injectable()
export class EducationExpenseCompositionService {
  constructor(private readonly prismaService: PrismaService) {}

  async despesaTotalMde(
    groupType: GroupType,
    filters?: object,
    pagination?: PaginationParams,
  ) {
    // Buscar dados 2007-2008
    const expenses0708 =
      await this.prismaService.relatorioMunicipal0708.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          despesa: {
            where: {
              tipo: {
                in: [ItemDespesaTipos0708.TOTAL_DESPESAS_COM_ENSINO],
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

    // Buscar dados 2009-2014
    const expenses0914 = [
      ...(await this.prismaService.relatorioMunicipal0912.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          despesa: {
            where: {
              tipo: {
                in: [ItemDespesaTipos0912.TOTAL_GERAL_DESPESAS_MDE],
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
      })),
      ...(await this.prismaService.relatorioMunicipal1314.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          despesa: {
            where: {
              tipo: {
                in: [ItemDespesaTipos1314.TOTAL_GERAL_DESPESAS_MDE],
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
      })),
    ];

    // Buscar dados 2015-2020
    const expenses1520 = [
      ...(await this.prismaService.relatorioMunicipal1516.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          despesa: {
            where: {
              tipo: {
                in: [ItemDespesaTipos1516.TOTAL_GERAL_DESPESAS_MDE],
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
      })),
      ...(await this.prismaService.relatorioMunicipal1718.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          despesa: {
            where: {
              tipo: {
                in: [ItemDespesaTipos1718.TOTAL_GERAL_DESPESAS_MDE],
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
      })),
      ...(await this.prismaService.relatorioMunicipal1920.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          despesa: {
            where: {
              tipo: {
                in: [ItemDespesaTipos1920.TOTAL_GERAL_DESPESAS_MDE],
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
      })),
    ];

    // Buscar dados 2021-2023
    const expenses2123 = [
      ...(await this.prismaService.relatorioMunicipal21.findMany({
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
              valorAplicado: true,
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
      })),
    ];

    // Processar os dados
    const modifiedExpenses0708 = expenses0708.map((item) => {
      const valor =
        item.despesa.find(
          (d) => d.tipo === ItemDespesaTipos0708.TOTAL_DESPESAS_COM_ENSINO,
        )?.despesasEmpenhadasNoAno || 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'DESPESA_TOTAL_MDE',
            valor: parseFloat(valor.toFixed(2)),
          },
        ],
      };
    });

    const modifiedExpenses0914 = expenses0914.map((item) => {
      const valor =
        item.despesa.find(
          (d) => d.tipo === ItemDespesaTipos0912.TOTAL_GERAL_DESPESAS_MDE,
        )?.despesasLiquidadasAteBimestre || 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'DESPESA_TOTAL_MDE',
            valor: parseFloat(valor.toFixed(2)),
          },
        ],
      };
    });

    const modifiedExpenses1520 = expenses1520.map((item) => {
      const valor =
        item.despesa.find(
          (d) => d.tipo === ItemDespesaTipos1516.TOTAL_GERAL_DESPESAS_MDE,
        )?.despesasLiquidadasAteBimestre || 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'DESPESA_TOTAL_MDE',
            valor: parseFloat(valor.toFixed(2)),
          },
        ],
      };
    });

    const modifiedExpenses2123 = expenses2123.map((item) => {
      const valor =
        item.apuracaoLimiteMinimoConstitucional.find(
          (a) =>
            a.tipo ===
              ApuracaoLimiteMinimoConstitucionalTipos21.APLICACAO_EM_MDE_SOBRE_RECEITA_DE_IMPOSTOS ||
            a.tipo ===
              ApuracaoLimiteMinimoConstitucionalTipos23.APLICACAO_EM_MDE_SOBRE_RECEITA_LIQUIDA_DE_IMPOSTOS,
        )?.valorAplicado || 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'DESPESA_TOTAL_MDE',
            valor: parseFloat(valor.toFixed(2)),
          },
        ],
      };
    });

    let groupedData = {};

    if (groupType === GroupType.MUNICIPIO) {
      groupedData = groupByMunicipio([
        { key: 'expenses0708', data: modifiedExpenses0708 },
        { key: 'expenses0914', data: modifiedExpenses0914 },
        { key: 'expenses1520', data: modifiedExpenses1520 },
        { key: 'expenses2123', data: modifiedExpenses2123 },
      ]);
    } else if (groupType === GroupType.ANO) {
      groupedData = groupByAno([
        { key: 'expenses0708', data: modifiedExpenses0708 },
        { key: 'expenses0914', data: modifiedExpenses0914 },
        { key: 'expenses1520', data: modifiedExpenses1520 },
        { key: 'expenses2123', data: modifiedExpenses2123 },
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

  async despesasPessoalAtivoMde(
    groupType: GroupType,
    filters?: object,
    pagination?: PaginationParams,
  ) {
    // Buscar dados 2021-2023
    const expenses2123 = [
      ...(await this.prismaService.relatorioMunicipal21.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          despesa: {
            where: {
              tipo: {
                in: [ItemDespesasTipos21.PESSOAL_ATIVO],
              },
            },
            select: {
              despesasPagasAteBimestre: true,
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
      })),
      ...(await this.prismaService.relatorioMunicipal23.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          despesa: {
            where: {
              tipo: {
                in: [ItemDespesaTipos23.DESPESAS_CORRENTES_PESSOAL_ATIVO],
              },
            },
            select: {
              despesasPagasAteBimestre: true,
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
      })),
    ];

    // Processar os dados
    const modifiedExpenses2123 = expenses2123.map((item) => {
      const despesaPessoal =
        item.despesa.find(
          (d) =>
            d.tipo === ItemDespesasTipos21.PESSOAL_ATIVO ||
            d.tipo === ItemDespesaTipos23.DESPESAS_CORRENTES_PESSOAL_ATIVO,
        )?.despesasPagasAteBimestre || 0;

      const totalMde =
        item.apuracaoLimiteMinimoConstitucional.find(
          (a) =>
            a.tipo ===
              ApuracaoLimiteMinimoConstitucionalTipos21.APLICACAO_EM_MDE_SOBRE_RECEITA_DE_IMPOSTOS ||
            a.tipo ===
              ApuracaoLimiteMinimoConstitucionalTipos23.APLICACAO_EM_MDE_SOBRE_RECEITA_LIQUIDA_DE_IMPOSTOS,
        )?.valorAplicado || 0;

      console.log(item.codigoMunicipio, despesaPessoal, totalMde);

      const percentage = totalMde ? (despesaPessoal / totalMde) * 100 : 0;

      console.log(percentage);

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'DESPESAS_PESSOAL_ATIVO_MDE',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    let groupedData = {};

    if (groupType === GroupType.MUNICIPIO) {
      groupedData = groupByMunicipio([
        { key: 'expenses2123', data: modifiedExpenses2123 },
      ]);
    } else if (groupType === GroupType.ANO) {
      groupedData = groupByAno([
        { key: 'expenses2123', data: modifiedExpenses2123 },
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

  async despesasPessoalInativoMde(
    groupType: GroupType,
    filters?: object,
    pagination?: PaginationParams,
  ) {
    // Buscar dados 2021-2023
    const expenses2123 = [
      ...(await this.prismaService.relatorioMunicipal21.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          despesa: {
            where: {
              tipo: {
                in: [ItemDespesasTipos21.PESSOAL_INATIVO],
              },
            },
            select: {
              despesasPagasAteBimestre: true,
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
      })),
      ...(await this.prismaService.relatorioMunicipal23.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          despesa: {
            where: {
              tipo: {
                in: [ItemDespesaTipos23.DESPESAS_CORRENTES_PESSOAL_INATIVO],
              },
            },
            select: {
              despesasPagasAteBimestre: true,
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
      })),
    ];

    // Processar os dados
    const modifiedExpenses2123 = expenses2123.map((item) => {
      const despesaPessoal =
        item.despesa.find(
          (d) =>
            d.tipo === ItemDespesasTipos21.PESSOAL_INATIVO ||
            d.tipo === ItemDespesaTipos23.DESPESAS_CORRENTES_PESSOAL_INATIVO,
        )?.despesasPagasAteBimestre || 0;

      const totalMde =
        item.apuracaoLimiteMinimoConstitucional.find(
          (a) =>
            a.tipo ===
              ApuracaoLimiteMinimoConstitucionalTipos21.APLICACAO_EM_MDE_SOBRE_RECEITA_DE_IMPOSTOS ||
            a.tipo ===
              ApuracaoLimiteMinimoConstitucionalTipos23.APLICACAO_EM_MDE_SOBRE_RECEITA_LIQUIDA_DE_IMPOSTOS,
        )?.valorAplicado || 0;

      const percentage = totalMde ? (despesaPessoal / totalMde) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'DESPESAS_PESSOAL_INATIVO_MDE',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    let groupedData = {};

    if (groupType === GroupType.MUNICIPIO) {
      groupedData = groupByMunicipio([
        { key: 'expenses2123', data: modifiedExpenses2123 },
      ]);
    } else if (groupType === GroupType.ANO) {
      groupedData = groupByAno([
        { key: 'expenses2123', data: modifiedExpenses2123 },
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

  async despesasCapitalMde(
    groupType: GroupType,
    filters?: object,
    pagination?: PaginationParams,
  ) {
    // Buscar dados 2021-2023
    const expenses2123 = [
      ...(await this.prismaService.relatorioMunicipal21.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          despesa: {
            where: {
              tipo: {
                in: [ItemDespesasTipos21.DESPESAS_DE_CAPITAL],
              },
            },
            select: {
              despesasPagasAteBimestre: true,
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
      })),
      ...(await this.prismaService.relatorioMunicipal23.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          despesa: {
            where: {
              tipo: {
                in: [ItemDespesaTipos23.DESPESAS_DE_CAPITAL],
              },
            },
            select: {
              despesasPagasAteBimestre: true,
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
      })),
    ];

    // Processar os dados
    const modifiedExpenses2123 = expenses2123.map((item) => {
      const despesaCapital =
        item.despesa.find(
          (d) => d.tipo === ItemDespesasTipos21.DESPESAS_DE_CAPITAL,
        )?.despesasPagasAteBimestre || 0;

      const totalMde =
        item.apuracaoLimiteMinimoConstitucional.find(
          (a) =>
            a.tipo ===
              ApuracaoLimiteMinimoConstitucionalTipos21.APLICACAO_EM_MDE_SOBRE_RECEITA_DE_IMPOSTOS ||
            a.tipo ===
              ApuracaoLimiteMinimoConstitucionalTipos23.APLICACAO_EM_MDE_SOBRE_RECEITA_LIQUIDA_DE_IMPOSTOS,
        )?.valorAplicado || 0;

      const percentage = totalMde ? (despesaCapital / totalMde) * 100 : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'DESPESAS_CAPITAL_MDE',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    let groupedData = {};

    if (groupType === GroupType.MUNICIPIO) {
      groupedData = groupByMunicipio([
        { key: 'expenses2123', data: modifiedExpenses2123 },
      ]);
    } else if (groupType === GroupType.ANO) {
      groupedData = groupByAno([
        { key: 'expenses2123', data: modifiedExpenses2123 },
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

  async transferenciasInstituicoesPrivadas(
    groupType: GroupType,
    filters?: object,
    pagination?: PaginationParams,
  ) {
    // Buscar dados 2021-2023
    const expenses2123 = [
      ...(await this.prismaService.relatorioMunicipal21.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          despesa: {
            where: {
              tipo: {
                in: [ItemDespesasTipos21.TRANSFERENCIAS_INSTITUICOES_47_2_1],
              },
            },
            select: {
              despesasLiquidadasAteBimestre: true,
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
      })),
      ...(await this.prismaService.relatorioMunicipal23.findMany({
        select: {
          ano: true,
          codigoMunicipio: true,
          despesa: {
            where: {
              tipo: {
                in: [
                  ItemDespesaTipos23.DESPESAS_CORRENTES_TRANSFERENCIAS_INSTITUICOES_COMUNITARIAS,
                ],
              },
            },
            select: {
              despesasLiquidadasAteBimestre: true,
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
      })),
    ];

    // Processar os dados
    const modifiedExpenses2123 = expenses2123.map((item) => {
      const transferenciasInstituicoesPrivadas =
        item.despesa.find(
          (d) =>
            d.tipo === ItemDespesasTipos21.TRANSFERENCIAS_INSTITUICOES_47_2_1 ||
            d.tipo ===
              ItemDespesaTipos23.DESPESAS_CORRENTES_TRANSFERENCIAS_INSTITUICOES_COMUNITARIAS,
        )?.despesasLiquidadasAteBimestre || 0;

      const totalMde =
        item.apuracaoLimiteMinimoConstitucional.find(
          (a) =>
            a.tipo ===
              ApuracaoLimiteMinimoConstitucionalTipos21.APLICACAO_EM_MDE_SOBRE_RECEITA_DE_IMPOSTOS ||
            a.tipo ===
              ApuracaoLimiteMinimoConstitucionalTipos23.APLICACAO_EM_MDE_SOBRE_RECEITA_LIQUIDA_DE_IMPOSTOS,
        )?.valorAplicado || 0;

      const percentage = totalMde
        ? (transferenciasInstituicoesPrivadas / totalMde) * 100
        : 0;

      return {
        ano: item.ano,
        codigoMunicipio: item.codigoMunicipio,
        indicador: [
          {
            tipo: 'TRANSFERENCIAS_INSTITUICOES_PRIVADAS_MDE',
            valor: parseFloat(percentage.toFixed(2)),
          },
        ],
      };
    });

    let groupedData = {};

    if (groupType === GroupType.MUNICIPIO) {
      groupedData = groupByMunicipio([
        { key: 'expenses2123', data: modifiedExpenses2123 },
      ]);
    } else if (groupType === GroupType.ANO) {
      groupedData = groupByAno([
        { key: 'expenses2123', data: modifiedExpenses2123 },
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
}
