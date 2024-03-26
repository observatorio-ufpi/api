import { Injectable } from '@nestjs/common';
import {
  ControleUtilizacaoRecursosTipo,
  DeducoesFundebMagisterioTipo,
  DeducoesParaFinsDeLimitesConstitucionalTipo,
  FluxoFinanceiroDeRecursosTipos,
  ItemDespesaTipos,
  ItemReceitaTipos,
  RelatorioMunicipal,
  RestosAPagarInscritosDisponibilidadesFinanceiraTipo,
} from '@prisma/client';
import * as ExcelJS from 'exceljs';
import * as fs from 'fs';
import * as path from 'path';
import {
  mapeamentoControleUtilizacaoRecursos,
  mapeamentoDeducoesFundebMagisterio,
  mapeamentoDeducoesParaFinsDeLimitesConstitucional,
  mapeamentoDespesas,
  mapeamentoFluxoFinanceiroDeRecursos,
  mapeamentoReceitas,
  mapeamentoRestosAPagar,
} from 'prisma/seeding.map.2010-2014';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SeedingService {
  constructor(private readonly prismaService: PrismaService) {}

  async seedDatabaseTenToFourteen() {
    try {
      const diretorio = 'C:\\Users\\Luis Felipe\\Documents\\fnde-excel';

      const arquivos = fs.readdirSync(diretorio);

      for (const arquivo of arquivos) {
        if (arquivo.endsWith('.csv')) {
          const caminhoArquivo = path.join(
            diretorio,
            'tabula-RREO_Municipal_220830_1_2010.csv',
          );

          const workbook = new ExcelJS.Workbook();
          await workbook.csv.readFile(caminhoArquivo);

          const match = arquivo.match(/(\d{6})_(\d{1,6})_(\d{4})\.csv$/);

          if (match) {
            const codigo = match[1];
            const ano = match[3];

            console.log('Ano:', ano);
            console.log('Código:', codigo);

            const worksheet = workbook.getWorksheet(1);

            const relatorio =
              await this.prismaService.relatorioMunicipal.create({
                data: {
                  ano,
                  codigoMunicipio: codigo,
                },
              });

            for (let i = 2; i <= worksheet.actualRowCount; i++) {
              const row = worksheet.getRow(i);

              const tipoReceitaDespesaExcel = row.getCell(1).value as string;
              if (tipoReceitaDespesaExcel === null) {
                continue;
              }
              const tipoReceitaDespesaLimpo = tipoReceitaDespesaExcel.replace(
                /\r?\n|\r/g,
                ' ',
              );

              console.log(tipoReceitaDespesaLimpo);

              const {
                tipoReceitaEnum,
                tipoDespesaEnum,
                tipoDeducoesFundebMagisterioEnum,
                tipoControleUtilizacaoRecursosEnum,
                tipoDeducoesParaFinsDeLimitesConstitucionalEnum,
                tipoRestosAPagarEnum,
                tipoFluxoFinanceiroDeRecursos,
              } = await this.findTypes(relatorio, tipoReceitaDespesaLimpo);

              const {
                secondCellNumericValue,
                thirdCellNumericValue,
                fourthCellNumericValue,
                fifthCellNumericValue,
                sixthCellNumericValue,
              } = await this.getCellsNumericValues(row);

              if (tipoReceitaEnum) {
                await this.prismaService.receita.create({
                  data: {
                    tipo: tipoReceitaEnum,
                    previsaoInicial: secondCellNumericValue,
                    previsaoAtualizada: thirdCellNumericValue,
                    receitasRealizadaBimestre: fourthCellNumericValue,
                    receitasRealizadaAteBimestre: fifthCellNumericValue,
                    percentual: sixthCellNumericValue,
                    relatorioMunicialId: relatorio.id,
                  },
                });
              } else if (tipoDespesaEnum) {
                await this.prismaService.despesa.create({
                  data: {
                    tipo: tipoDespesaEnum,
                    dotacaoInicial: secondCellNumericValue,
                    dotacaoAtualizada: thirdCellNumericValue,
                    receitasRealizadaBimestre: fourthCellNumericValue,
                    receitasRealizadaAteBimestre: fifthCellNumericValue,
                    percentual: sixthCellNumericValue,
                    relatorioMunicialId: relatorio.id,
                  },
                });
              } else if (tipoDeducoesFundebMagisterioEnum) {
                await this.prismaService.deducoesFundebMagisterio.create({
                  data: {
                    tipo: tipoDeducoesFundebMagisterioEnum,
                    valor: secondCellNumericValue,
                    relatorioMunicialId: relatorio.id,
                  },
                });
              } else if (tipoControleUtilizacaoRecursosEnum) {
                await this.prismaService.controleUtilizacaoRecursos.create({
                  data: {
                    tipo: tipoControleUtilizacaoRecursosEnum,
                    valor: secondCellNumericValue,
                    relatorioMunicialId: relatorio.id,
                  },
                });
              } else if (tipoDeducoesParaFinsDeLimitesConstitucionalEnum) {
                await this.prismaService.deducoesParaFinsDeLimitesConstitucional.create(
                  {
                    data: {
                      tipo: tipoDeducoesParaFinsDeLimitesConstitucionalEnum,
                      valor: secondCellNumericValue,
                      relatorioMunicialId: relatorio.id,
                    },
                  },
                );
              } else if (tipoRestosAPagarEnum) {
                await this.prismaService.restosAPagarInscritosDisponibilidadesFinanceira.create(
                  {
                    data: {
                      tipo: tipoRestosAPagarEnum,
                      saldoAteBimestre: secondCellNumericValue,
                      canceladoNoAnoAtual: thirdCellNumericValue,
                      relatorioMunicialId: relatorio.id,
                    },
                  },
                );
              } else if (tipoFluxoFinanceiroDeRecursos) {
                await this.prismaService.fluxoFinanceiroDeRecursos.create({
                  data: {
                    tipo: tipoFluxoFinanceiroDeRecursos,
                    valorFundeb: secondCellNumericValue,
                    valorFundef: thirdCellNumericValue,
                    relatorioMunicialId: relatorio.id,
                  },
                });
              } else {
                console.log(
                  `Tipo de receita ou despesa desconhecido: ${tipoReceitaDespesaExcel}\n`,
                );
              }
            }
            break;
          } else {
            console.log('Nome do arquivo inválido:', arquivo);
          }
        }
        break;
      }
    } catch (error) {
      console.log(error);
    }
  }

  private levenshteinDistance(a: string, b: string): number {
    a = a.replace(/\s+/g, '');
    b = b.replace(/\s+/g, '');
    const matrix = [];

    for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1,
          );
        }
      }
    }

    return matrix[b.length][a.length];
  }

  private isSimilar(a: string, b: string, tolerance: number): boolean {
    const distance = this.levenshteinDistance(a.toLowerCase(), b.toLowerCase());
    return distance <= tolerance;
  }

  private async findTypes(
    relatorio: RelatorioMunicipal,
    tipoReceitaDespesaLimpo: string,
  ) {
    let tipoReceitaEnum: ItemReceitaTipos;
    let tipoDespesaEnum: ItemDespesaTipos;
    let tipoDeducoesFundebMagisterioEnum: DeducoesFundebMagisterioTipo;
    let tipoControleUtilizacaoRecursosEnum: ControleUtilizacaoRecursosTipo;
    let tipoDeducoesParaFinsDeLimitesConstitucionalEnum: DeducoesParaFinsDeLimitesConstitucionalTipo;
    let tipoRestosAPagarEnum: RestosAPagarInscritosDisponibilidadesFinanceiraTipo;
    let tipoFluxoFinanceiroDeRecursos: FluxoFinanceiroDeRecursosTipos;
    let tipoJaDefinido = false;

    for (const key in mapeamentoReceitas) {
      const receitaExiste = await this.prismaService.receita.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoReceitas[key],
          },
        },
      });

      if (this.isSimilar(tipoReceitaDespesaLimpo, key, 5) && !receitaExiste) {
        tipoReceitaEnum = mapeamentoReceitas[key];
        tipoJaDefinido = true;
        break;
      }
    }

    for (const key in mapeamentoDespesas) {
      if (tipoJaDefinido) {
        break;
      }
      const despesaExiste = await this.prismaService.despesa.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoDespesas[key],
          },
        },
      });

      if (this.isSimilar(tipoReceitaDespesaLimpo, key, 5) && !despesaExiste) {
        tipoDespesaEnum = mapeamentoDespesas[key];
        tipoJaDefinido = true;
        break;
      }
    }

    for (const key in mapeamentoDeducoesFundebMagisterio) {
      if (tipoJaDefinido) {
        break;
      }
      const deducaoExiste =
        await this.prismaService.deducoesFundebMagisterio.findUnique({
          where: {
            relatorioMunicialId_tipo: {
              relatorioMunicialId: relatorio.id,
              tipo: mapeamentoDeducoesFundebMagisterio[key],
            },
          },
        });

      if (this.isSimilar(tipoReceitaDespesaLimpo, key, 5) && !deducaoExiste) {
        tipoDeducoesFundebMagisterioEnum =
          mapeamentoDeducoesFundebMagisterio[key];
        tipoJaDefinido = true;
        break;
      }
    }

    for (const key in mapeamentoControleUtilizacaoRecursos) {
      if (tipoJaDefinido) {
        break;
      }
      const controleExiste =
        await this.prismaService.controleUtilizacaoRecursos.findUnique({
          where: {
            relatorioMunicialId_tipo: {
              relatorioMunicialId: relatorio.id,
              tipo: mapeamentoControleUtilizacaoRecursos[key],
            },
          },
        });

      if (this.isSimilar(tipoReceitaDespesaLimpo, key, 5) && !controleExiste) {
        tipoControleUtilizacaoRecursosEnum =
          mapeamentoControleUtilizacaoRecursos[key];
        tipoJaDefinido = true;
        break;
      }
    }

    for (const key in mapeamentoDeducoesParaFinsDeLimitesConstitucional) {
      if (tipoJaDefinido) {
        break;
      }
      const deducaoConstitucionalExiste =
        await this.prismaService.deducoesParaFinsDeLimitesConstitucional.findUnique(
          {
            where: {
              relatorioMunicialId_tipo: {
                relatorioMunicialId: relatorio.id,
                tipo: mapeamentoDeducoesParaFinsDeLimitesConstitucional[key],
              },
            },
          },
        );

      if (
        this.isSimilar(tipoReceitaDespesaLimpo, key, 5) &&
        !deducaoConstitucionalExiste
      ) {
        tipoDeducoesParaFinsDeLimitesConstitucionalEnum =
          mapeamentoDeducoesParaFinsDeLimitesConstitucional[key];
        tipoJaDefinido = true;
        break;
      }
    }

    for (const key in mapeamentoRestosAPagar) {
      if (tipoJaDefinido) {
        break;
      }
      const restosAPagarExiste =
        await this.prismaService.restosAPagarInscritosDisponibilidadesFinanceira.findUnique(
          {
            where: {
              relatorioMunicialId_tipo: {
                relatorioMunicialId: relatorio.id,
                tipo: mapeamentoRestosAPagar[key],
              },
            },
          },
        );

      if (
        this.isSimilar(tipoReceitaDespesaLimpo, key, 5) &&
        !restosAPagarExiste
      ) {
        tipoRestosAPagarEnum = mapeamentoRestosAPagar[key];
        tipoJaDefinido = true;
        break;
      }
    }

    for (const key in mapeamentoFluxoFinanceiroDeRecursos) {
      if (tipoJaDefinido) {
        break;
      }
      const fluxoFinanceiroExiste =
        await this.prismaService.fluxoFinanceiroDeRecursos.findUnique({
          where: {
            relatorioMunicialId_tipo: {
              relatorioMunicialId: relatorio.id,
              tipo: mapeamentoFluxoFinanceiroDeRecursos[key],
            },
          },
        });

      if (
        this.isSimilar(tipoReceitaDespesaLimpo, key, 5) &&
        !fluxoFinanceiroExiste
      ) {
        tipoFluxoFinanceiroDeRecursos =
          mapeamentoFluxoFinanceiroDeRecursos[key];
        tipoJaDefinido = true;
        break;
      }
    }

    return {
      tipoReceitaEnum,
      tipoDespesaEnum,
      tipoDeducoesFundebMagisterioEnum,
      tipoControleUtilizacaoRecursosEnum,
      tipoDeducoesParaFinsDeLimitesConstitucionalEnum,
      tipoRestosAPagarEnum,
      tipoFluxoFinanceiroDeRecursos,
    };
  }

  private async getCellsNumericValues(row: ExcelJS.Row) {
    const secondCellValue = row.getCell(2).value;
    const secondCellNumericValue = secondCellValue
      ? parseFloat(
          secondCellValue
            .toString()
            .replace(/[^\d,-]/g, '')
            .replace(',', '.'),
        )
      : 0;

    const thirdCellValue = row.getCell(3).value;
    const thirdCellNumericValue = thirdCellValue
      ? parseFloat(
          thirdCellValue
            .toString()
            .replace(/[^\d,-]/g, '')
            .replace(',', '.'),
        )
      : 0;

    const fourthCellValue = row.getCell(4).value;
    const fourthCellNumericValue = fourthCellValue
      ? parseFloat(
          fourthCellValue
            .toString()
            .replace(/[^\d,-]/g, '')
            .replace(',', '.'),
        )
      : 0;

    const fifthCellValue = row.getCell(5).value;
    const fifthCellNumericValue = fifthCellValue
      ? parseFloat(
          fifthCellValue
            .toString()
            .replace(/[^\d,-]/g, '')
            .replace(',', '.'),
        )
      : 0;

    const sixthCellValue = row.getCell(6).value;
    const sixthCellNumericValue = sixthCellValue
      ? parseFloat(
          sixthCellValue
            .toString()
            .replace(/[^\d,-]/g, '')
            .replace(',', '.'),
        )
      : 0;

    return {
      secondCellNumericValue,
      thirdCellNumericValue,
      fourthCellNumericValue,
      fifthCellNumericValue,
      sixthCellNumericValue,
    };
  }
}
