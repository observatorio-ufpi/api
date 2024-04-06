import {
  ControleRecursosNoExercicioSubsequenteTipo1520,
  DeducoesFinsLimiteFundebTipo1520,
  DeducoesParaFinsDeLimitesConstitucionalTipo1520,
  FluxoFinanceiroDeRecursosFundebTipo1520,
  IndicadoresFundebTipo1520,
  ItemDespesaTipos1520,
  ItemReceitaTipos1520,
  RelatorioMunicipal1520,
  RestosAPagarInscritosDisponibilidadesFinanceiraTipo1520,
} from '@prisma/client';
import * as ExcelJS from 'exceljs';
import * as fs from 'fs';
import * as path from 'path';
import {
  mapeamentoDeducoesParaFinsLimiteFundeb1520,
  mapeamentoDespesas1520,
  mapeamentoReceitas1520,
  mapeamentoIndicadoresFundeb1520,
  mapeamentoControleRecursosNoExercicioSubsequente1520,
  mapeamentoDeducoesParaFinsDeLimitesConstitucional1520,
  mapeamentoFluxoFinanceiroDeRecursosFundeb1520,
  mapeamentoRestosAPagarInscritosDisponibilidadesFinanceira1520,
} from './seeding.map.2015-2020';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function seedDatabasefifteenTotwenty() {
  try {
    const diretorio = process.env.FILES_SPREADSHEET_URL1;

    const arquivos = fs.readdirSync(diretorio);

    for (const arquivo of arquivos) {
      if (arquivo.endsWith('.csv')) {
        const caminhoArquivo = path.join(
          diretorio,
          'tabula-RREO_Municipal_220830_1_2015.csv',
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

          const relatorio = await prisma.relatorioMunicipal1520.create({
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
              tipoDeducoesParaFinsLimiteFundebEnum,
              tipoIndicadoresFundebEnum,
              tipoControleRecursosNoExercicioSubsequenteEnum,
              tipoDeducoesParaFinsDeLimitesConstitucionalEnum,
              tipoRestosAPagarInscritosDisponibilidadesFinanceiraEnum,
              tipoFluxoFinanceiroDeRecursosFundebEnum,
            } = await findTypes(relatorio, tipoReceitaDespesaLimpo);

            const {
              secondCellNumericValue,
              thirdCellNumericValue,
              fourthCellNumericValue,
              fifthCellNumericValue,
              sixthCellNumericValue,
              sevenCellNumericValue,
              eightCellNumericValue,
            } = await getCellsNumericValues(row);

            if (tipoReceitaEnum) {
              await prisma.receita1520.create({
                data: {
                  tipo: tipoReceitaEnum,
                  previsaoInicial: secondCellNumericValue,
                  previsaoAtualizada: thirdCellNumericValue,
                  receitasRealizadaAteBimestre: fourthCellNumericValue,
                  percentual: fifthCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoDespesaEnum) {
              await prisma.despesa1520.create({
                data: {
                  tipo: tipoDespesaEnum,
                  dotacaoInicial: secondCellNumericValue,
                  dotacaoAtualizada: thirdCellNumericValue,
                  despesasEmpenhadasAteBimestre: fourthCellNumericValue,
                  despesasEmpenhadasPercentual: fifthCellNumericValue,
                  despesasLiquidadasAteBimestre: sixthCellNumericValue,
                  despesasLiquidadasPercentual: sevenCellNumericValue,
                  inscritasRestosPagar: eightCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoDeducoesParaFinsLimiteFundebEnum) {
              await prisma.deducoesFinsLimiteFundeb1520.create({
                data: {
                  tipo: tipoDeducoesParaFinsLimiteFundebEnum,
                  valor: secondCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoIndicadoresFundebEnum) {
              await prisma.indicadoresFundeb1520.create({
                data: {
                  tipo: tipoIndicadoresFundebEnum,
                  valor: secondCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoControleRecursosNoExercicioSubsequenteEnum) {
              await prisma.controleRecursosNoExercicioSubsequente1520.create({
                data: {
                  tipo: tipoControleRecursosNoExercicioSubsequenteEnum,
                  valor: secondCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoDeducoesParaFinsDeLimitesConstitucionalEnum) {
              await prisma.deducoesParaFinsDeLimitesConstitucional1520.create({
                data: {
                  tipo: tipoDeducoesParaFinsDeLimitesConstitucionalEnum,
                  valor: secondCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (
              tipoRestosAPagarInscritosDisponibilidadesFinanceiraEnum
            ) {
              await prisma.restosAPagarInscritosDisponibilidadesFinanceira1520.create(
                {
                  data: {
                    tipo: tipoRestosAPagarInscritosDisponibilidadesFinanceiraEnum,
                    saldoAteBimestre: secondCellNumericValue,
                    canceladoNoAno: thirdCellNumericValue,
                    relatorioMunicialId: relatorio.id,
                  },
                },
              );
            } else if (tipoFluxoFinanceiroDeRecursosFundebEnum) {
              await prisma.fluxoFinanceiroDeRecursosFundeb1520.create({
                data: {
                  tipo: tipoFluxoFinanceiroDeRecursosFundebEnum,
                  valor: secondCellNumericValue,
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

function levenshteinDistance(a: string, b: string): number {
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

function isSimilar(a: string, b: string, tolerance: number): boolean {
  const distance = levenshteinDistance(a.toLowerCase(), b.toLowerCase());
  return distance <= tolerance;
}

async function findTypes(
  relatorio: RelatorioMunicipal1520,
  tipoReceitaDespesaLimpo: string,
) {
  let tipoReceitaEnum: ItemReceitaTipos1520;
  let tipoDespesaEnum: ItemDespesaTipos1520;
  let tipoDeducoesParaFinsLimiteFundebEnum: DeducoesFinsLimiteFundebTipo1520;
  let tipoIndicadoresFundebEnum: IndicadoresFundebTipo1520;
  let tipoControleRecursosNoExercicioSubsequenteEnum: ControleRecursosNoExercicioSubsequenteTipo1520;
  let tipoDeducoesParaFinsDeLimitesConstitucionalEnum: DeducoesParaFinsDeLimitesConstitucionalTipo1520;
  let tipoRestosAPagarInscritosDisponibilidadesFinanceiraEnum: RestosAPagarInscritosDisponibilidadesFinanceiraTipo1520;
  let tipoFluxoFinanceiroDeRecursosFundebEnum: FluxoFinanceiroDeRecursosFundebTipo1520;
  let tipoJaDefinido = false;

  for (const key in mapeamentoReceitas1520) {
    const receitaExiste = await prisma.receita1520.findUnique({
      where: {
        relatorioMunicialId_tipo: {
          relatorioMunicialId: relatorio.id,
          tipo: mapeamentoReceitas1520[key],
        },
      },
    });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !receitaExiste) {
      tipoReceitaEnum = mapeamentoReceitas1520[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoDespesas1520) {
    if (tipoJaDefinido) {
      break;
    }
    const despesaExiste = await prisma.despesa1520.findUnique({
      where: {
        relatorioMunicialId_tipo: {
          relatorioMunicialId: relatorio.id,
          tipo: mapeamentoDespesas1520[key],
        },
      },
    });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !despesaExiste) {
      tipoDespesaEnum = mapeamentoDespesas1520[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoDeducoesParaFinsLimiteFundeb1520) {
    if (tipoJaDefinido) {
      break;
    }
    const deducaoExiste = await prisma.deducoesFinsLimiteFundeb1520.findUnique({
      where: {
        relatorioMunicialId_tipo: {
          relatorioMunicialId: relatorio.id,
          tipo: mapeamentoDeducoesParaFinsLimiteFundeb1520[key],
        },
      },
    });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !deducaoExiste) {
      tipoDeducoesParaFinsLimiteFundebEnum =
        mapeamentoDeducoesParaFinsLimiteFundeb1520[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoIndicadoresFundeb1520) {
    if (tipoJaDefinido) {
      break;
    }
    const indicadorExiste = await prisma.indicadoresFundeb1520.findUnique({
      where: {
        relatorioMunicialId_tipo: {
          relatorioMunicialId: relatorio.id,
          tipo: mapeamentoIndicadoresFundeb1520[key],
        },
      },
    });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !indicadorExiste) {
      tipoIndicadoresFundebEnum = mapeamentoIndicadoresFundeb1520[key];
      tipoJaDefinido = true;
      break;
    }
  }
  for (const key in mapeamentoControleRecursosNoExercicioSubsequente1520) {
    if (tipoJaDefinido) {
      break;
    }
    const controleExiste =
      await prisma.controleRecursosNoExercicioSubsequente1520.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoControleRecursosNoExercicioSubsequente1520[key],
          },
        },
      });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !controleExiste) {
      tipoControleRecursosNoExercicioSubsequenteEnum =
        mapeamentoControleRecursosNoExercicioSubsequente1520[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoDeducoesParaFinsDeLimitesConstitucional1520) {
    if (tipoJaDefinido) {
      break;
    }
    const deducaoConstitucionalExiste =
      await prisma.deducoesParaFinsDeLimitesConstitucional1520.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoDeducoesParaFinsDeLimitesConstitucional1520[key],
          },
        },
      });

    if (
      isSimilar(tipoReceitaDespesaLimpo, key, 5) &&
      !deducaoConstitucionalExiste
    ) {
      tipoDeducoesParaFinsDeLimitesConstitucionalEnum =
        mapeamentoDeducoesParaFinsDeLimitesConstitucional1520[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoFluxoFinanceiroDeRecursosFundeb1520) {
    if (tipoJaDefinido) {
      break;
    }
    const fluxoExiste =
      await prisma.fluxoFinanceiroDeRecursosFundeb1520.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoFluxoFinanceiroDeRecursosFundeb1520[key],
          },
        },
      });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !fluxoExiste) {
      tipoFluxoFinanceiroDeRecursosFundebEnum =
        mapeamentoFluxoFinanceiroDeRecursosFundeb1520[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoRestosAPagarInscritosDisponibilidadesFinanceira1520) {
    if (tipoJaDefinido) {
      break;
    }
    const restoAPagarExiste =
      await prisma.restosAPagarInscritosDisponibilidadesFinanceira1520.findUnique(
        {
          where: {
            relatorioMunicialId_tipo: {
              relatorioMunicialId: relatorio.id,
              tipo: mapeamentoRestosAPagarInscritosDisponibilidadesFinanceira1520[
                key
              ],
            },
          },
        },
      );

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !restoAPagarExiste) {
      tipoRestosAPagarInscritosDisponibilidadesFinanceiraEnum =
        mapeamentoRestosAPagarInscritosDisponibilidadesFinanceira1520[key];
      tipoJaDefinido = true;
      break;
    }
  }

  return {
    tipoReceitaEnum,
    tipoDespesaEnum,
    tipoDeducoesParaFinsLimiteFundebEnum,
    tipoIndicadoresFundebEnum,
    tipoControleRecursosNoExercicioSubsequenteEnum,
    tipoDeducoesParaFinsDeLimitesConstitucionalEnum,
    tipoRestosAPagarInscritosDisponibilidadesFinanceiraEnum,
    tipoFluxoFinanceiroDeRecursosFundebEnum,
  };
}

async function getCellsNumericValues(row: ExcelJS.Row) {
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
  const sevenCellValue = row.getCell(7).value;
  const sevenCellNumericValue = sevenCellValue
    ? parseFloat(
        sevenCellValue
          .toString()
          .replace(/[^\d,-]/g, '')
          .replace(',', '.'),
      )
    : 0;
  const eightCellValue = row.getCell(8).value;
  const eightCellNumericValue = eightCellValue
    ? parseFloat(
        eightCellValue
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
    sevenCellNumericValue,
    eightCellNumericValue,
  };
}

seedDatabasefifteenTotwenty()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
