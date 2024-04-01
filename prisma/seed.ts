import {
  ControleUtilizacaoRecursosTipo1014,
  DeducoesFundebMagisterioTipo1014,
  DeducoesParaFinsDeLimitesConstitucionalTipo1014,
  FluxoFinanceiroDeRecursosTipos1014,
  ItemDespesaTipos1014,
  ItemReceitaTipos1014,
  RelatorioMunicipal1014,
  RestosAPagarInscritosDisponibilidadesFinanceiraTipo1014,
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
} from './seeding.map.2010-2014';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function seedDatabaseTenToFourteen() {
  try {
    const diretorio = process.env.FILES_SPREADSHEET_URL;

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

          const relatorio = await prisma.relatorioMunicipal1014.create({
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
            } = await findTypes(relatorio, tipoReceitaDespesaLimpo);

            const {
              secondCellNumericValue,
              thirdCellNumericValue,
              fourthCellNumericValue,
              fifthCellNumericValue,
              sixthCellNumericValue,
            } = await getCellsNumericValues(row);

            if (tipoReceitaEnum) {
              await prisma.receita1014.create({
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
              await prisma.despesa1014.create({
                data: {
                  tipo: tipoDespesaEnum,
                  dotacaoInicial: secondCellNumericValue,
                  dotacaoAtualizada: thirdCellNumericValue,
                  despesasLiquidadasBimestre: fourthCellNumericValue,
                  despesasLiquidadasAteBimestre: fifthCellNumericValue,
                  percentual: sixthCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoDeducoesFundebMagisterioEnum) {
              await prisma.deducoesFundebMagisterio1014.create({
                data: {
                  tipo: tipoDeducoesFundebMagisterioEnum,
                  valor: secondCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoControleUtilizacaoRecursosEnum) {
              await prisma.controleUtilizacaoRecursos1014.create({
                data: {
                  tipo: tipoControleUtilizacaoRecursosEnum,
                  valor: secondCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoDeducoesParaFinsDeLimitesConstitucionalEnum) {
              await prisma.deducoesParaFinsDeLimitesConstitucional1014.create({
                data: {
                  tipo: tipoDeducoesParaFinsDeLimitesConstitucionalEnum,
                  valor: secondCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoRestosAPagarEnum) {
              await prisma.restosAPagarInscritosDisponibilidadesFinanceira1014.create(
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
              await prisma.fluxoFinanceiroDeRecursos1014.create({
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
  relatorio: RelatorioMunicipal1014,
  tipoReceitaDespesaLimpo: string,
) {
  let tipoReceitaEnum: ItemReceitaTipos1014;
  let tipoDespesaEnum: ItemDespesaTipos1014;
  let tipoDeducoesFundebMagisterioEnum: DeducoesFundebMagisterioTipo1014;
  let tipoControleUtilizacaoRecursosEnum: ControleUtilizacaoRecursosTipo1014;
  let tipoDeducoesParaFinsDeLimitesConstitucionalEnum: DeducoesParaFinsDeLimitesConstitucionalTipo1014;
  let tipoRestosAPagarEnum: RestosAPagarInscritosDisponibilidadesFinanceiraTipo1014;
  let tipoFluxoFinanceiroDeRecursos: FluxoFinanceiroDeRecursosTipos1014;
  let tipoJaDefinido = false;

  for (const key in mapeamentoReceitas) {
    const receitaExiste = await prisma.receita1014.findUnique({
      where: {
        relatorioMunicialId_tipo: {
          relatorioMunicialId: relatorio.id,
          tipo: mapeamentoReceitas[key],
        },
      },
    });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !receitaExiste) {
      tipoReceitaEnum = mapeamentoReceitas[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoDespesas) {
    if (tipoJaDefinido) {
      break;
    }
    const despesaExiste = await prisma.despesa1014.findUnique({
      where: {
        relatorioMunicialId_tipo: {
          relatorioMunicialId: relatorio.id,
          tipo: mapeamentoDespesas[key],
        },
      },
    });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !despesaExiste) {
      tipoDespesaEnum = mapeamentoDespesas[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoDeducoesFundebMagisterio) {
    if (tipoJaDefinido) {
      break;
    }
    const deducaoExiste = await prisma.deducoesFundebMagisterio1014.findUnique({
      where: {
        relatorioMunicialId_tipo: {
          relatorioMunicialId: relatorio.id,
          tipo: mapeamentoDeducoesFundebMagisterio[key],
        },
      },
    });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !deducaoExiste) {
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
      await prisma.controleUtilizacaoRecursos1014.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoControleUtilizacaoRecursos[key],
          },
        },
      });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !controleExiste) {
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
      await prisma.deducoesParaFinsDeLimitesConstitucional1014.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoDeducoesParaFinsDeLimitesConstitucional[key],
          },
        },
      });

    if (
      isSimilar(tipoReceitaDespesaLimpo, key, 5) &&
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
      await prisma.restosAPagarInscritosDisponibilidadesFinanceira1014.findUnique(
        {
          where: {
            relatorioMunicialId_tipo: {
              relatorioMunicialId: relatorio.id,
              tipo: mapeamentoRestosAPagar[key],
            },
          },
        },
      );

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !restosAPagarExiste) {
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
      await prisma.fluxoFinanceiroDeRecursos1014.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoFluxoFinanceiroDeRecursos[key],
          },
        },
      });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !fluxoFinanceiroExiste) {
      tipoFluxoFinanceiroDeRecursos = mapeamentoFluxoFinanceiroDeRecursos[key];
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

  return {
    secondCellNumericValue,
    thirdCellNumericValue,
    fourthCellNumericValue,
    fifthCellNumericValue,
    sixthCellNumericValue,
  };
}

seedDatabaseTenToFourteen()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
