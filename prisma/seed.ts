import {
  AplicacaoDespesasFinsLimiteMinimoConstitucionalTipos21,
  ApuracaoLimiteMinimoConstitucionalTipos21,
  ControleDisponibildadeFinanceiraConciliacaoBancariaTipos21,
  ControleRecursosNoExercicioSubsequenteTipo1520,
  ControleUtilizacaoRecursosTipo1014,
  DeducoesFinsLimiteFundebTipo1520,
  DeducoesFundebMagisterioTipo1014,
  DeducoesParaFinsDeLimitesConstitucionalTipo1014,
  DeducoesParaFinsDeLimitesConstitucionalTipo1520,
  DespesasCusteadasFundebExercicioTipos21,
  FluxoFinanceiroDeRecursosFundebTipo1520,
  FluxoFinanceiroDeRecursosTipos1014,
  IndicadorTipos21Art25AplicacaoSuperavit,
  IndicadorTipos21Art25MaximoDeSuperavit,
  IndicadoresFundebTipo1520,
  IndicadoresTipos21Art212,
  ItemDespesaTipos1014,
  ItemDespesaTipos1520,
  ItemDespesasTipos21,
  ItemReceitaTipos1014,
  ItemReceitaTipos1520,
  ItemReceitaTipos21,
  RecursosRecebidosNaoUtilizadosTipos21,
  RelatorioMunicipal1014,
  RelatorioMunicipal1520,
  RelatorioMunicipal21,
  RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebTipos21,
  RestosAPagarInscritosDisponibilidadesFinanceiraTipo1014,
  RestosAPagarInscritosDisponibilidadesFinanceiraTipo1520,
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

import {
  mapeamentoControleRecursosNoExercicioSubsequente1520,
  mapeamentoDeducoesParaFinsDeLimitesConstitucional1520,
  mapeamentoDeducoesParaFinsLimiteFundeb1520,
  mapeamentoDespesas1520,
  mapeamentoFluxoFinanceiroDeRecursosFundeb1520,
  mapeamentoIndicadoresFundeb1520,
  mapeamentoReceitas1520,
  mapeamentoRestosAPagarInscritosDisponibilidadesFinanceira1520,
} from './seeding.map.2015-2020';

import { PrismaClient } from '@prisma/client';
import {
  mapeamentoAplicacaoDespesasFinsLimiteMinimoConstitucional21,
  mapeamentoApuracaoLimiteMinimoConstitucional21,
  mapeamentoControleDisponibilidadeFinanceiraConciliacaoBancaria21,
  mapeamentoDespesas21,
  mapeamentoDespesasCusteadasFundebExercicio21,
  mapeamentoIndicador21Art25AplicacaoSuperavit,
  mapeamentoIndicador21Art25MaximoDeSuperavit,
  mapeamentoIndicadores21Art212,
  mapeamentoReceitas21,
  mapeamentoRecursosRecebidosNaoUtilizados21,
  mapeamentoRestosAPagarExerciciosAntDisponibilidadeFinanceiraFundeb21,
} from './seeding.map.2021-2022';
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
            } = await findTypes1014(relatorio, tipoReceitaDespesaLimpo);

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

async function seedDatabasefifteenTotwenty() {
  try {
    const diretorio = process.env.FILES_SPREADSHEET_URL;

    const arquivos = fs.readdirSync(diretorio);

    for (const arquivo of arquivos) {
      if (arquivo.endsWith('.csv')) {
        const caminhoArquivo = path.join(
          diretorio,
          'tabula-RREO_Municipal_220005_1_2015.csv',
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
            } = await findTypes1520(relatorio, tipoReceitaDespesaLimpo);

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

async function seedDatabaseTwentyOneTwentyTwo() {
  try {
    const diretorio = process.env.FILES_SPREADSHEET_URL;

    const arquivos = fs.readdirSync(diretorio);

    for (const arquivo of arquivos) {
      if (arquivo.endsWith('.csv')) {
        const caminhoArquivo = path.join(
          diretorio,
          'tabula-RREO_Municipal_220005_6_2021.csv',
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

          const relatorio = await prisma.relatorioMunicipal21.create({
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
              tipoDespesasCusteadasFundebEnum,
              tipoRecursosRecebidosNaoUtilizadosEnum,
              tipoIndicadores21Art212Enum,
              tipoIndicador21Art25MaximoDeSuperavitEnum,
              tipoIndicador21Art25AplicacaoSuperavitEnum,
              tipoAplicacaoDespesasFinsLimiteMinimoConstitucionalEnum,
              tipoApuracaoLimiteMinimoConstitucionalEnum,
              tipoRestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEnum,
              tipoControleDisponibilidadeFinanceiraConciliacaoBancariaEnum,
            } = await findTypes21(relatorio, tipoReceitaDespesaLimpo);

            const [
              secondCellNumericValue,
              thirdCellNumericValue,
              fourthCellNumericValue,
              fifthCellNumericValue,
              sixthCellNumericValue,
              seventhCellNumericValue,
            ] = await getCellsNumericValues2(row, 7);

            if (tipoReceitaEnum) {
              await prisma.receita21.create({
                data: {
                  tipo: tipoReceitaEnum,
                  previsaoAtualizada: secondCellNumericValue,
                  receitasRealizadaAteBimestre: thirdCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoDespesaEnum) {
              await prisma.despesa21.create({
                data: {
                  tipo: tipoDespesaEnum,
                  dotacaoAtualizada: secondCellNumericValue,
                  despesasEmpenhadasAteBimestre: thirdCellNumericValue,
                  despesasLiquidadasAteBimestre: fourthCellNumericValue,
                  despesasPagasAteBimestre: fifthCellNumericValue,
                  inscritosEmRestosAPagarNaoProcessados: sixthCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoDespesasCusteadasFundebEnum) {
              await prisma.despesasCusteadasFundebExercicio21.create({
                data: {
                  tipo: tipoDespesasCusteadasFundebEnum,
                  despesasEmpenhadasAteBimestre: secondCellNumericValue,
                  despesasLiquidadasAteBimestre: thirdCellNumericValue,
                  despesasPagasAteBimestre: fourthCellNumericValue,
                  inscritosEmRestosAPagarNaoProcessados: fifthCellNumericValue,
                  inscritosEmRestosAPagarNaoProcessadosSemCaixa:
                    sixthCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoRecursosRecebidosNaoUtilizadosEnum) {
              await prisma.recursosRecebidosNaoUtilizados21.create({
                data: {
                  tipo: tipoRecursosRecebidosNaoUtilizadosEnum,
                  valor: secondCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoIndicadores21Art212Enum) {
              await prisma.indicadores21Art212.create({
                data: {
                  tipo: tipoIndicadores21Art212Enum,
                  valorExigido: secondCellNumericValue,
                  valorAplicado: thirdCellNumericValue,
                  valorConsideradoAposDeducoes: fourthCellNumericValue,
                  percentualAplicado: fifthCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoIndicador21Art25MaximoDeSuperavitEnum) {
              await prisma.indicador21Art25MaximoDeSuperavit.create({
                data: {
                  tipo: tipoIndicador21Art25MaximoDeSuperavitEnum,
                  valorPermitido: secondCellNumericValue,
                  valorNaoAplicado: thirdCellNumericValue,
                  valorNaoAplicadoAposDeducoes: fourthCellNumericValue,
                  percentualNaoAplicado: fifthCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoIndicador21Art25AplicacaoSuperavitEnum) {
              await prisma.indicador21Art25AplicacaoSuperavit.create({
                data: {
                  tipo: tipoIndicador21Art25AplicacaoSuperavitEnum,
                  valorSuperavitPermitidoExercicioAnterior:
                    secondCellNumericValue,
                  valorNaoAplicadoExercicioAnterior: thirdCellNumericValue,
                  valorSuperavitAplicadoAtePrimeiroQuadrim:
                    fourthCellNumericValue,
                  valorAplicadoAtePrimQuarLimiteConst: fifthCellNumericValue,
                  valorAplicadoAposPrimeiroQuadrim: sixthCellNumericValue,
                  valorNaoAplicado: seventhCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (
              tipoAplicacaoDespesasFinsLimiteMinimoConstitucionalEnum
            ) {
              await prisma.aplicacaoDespesasFinsLimiteMinimoConstitucional21.create(
                {
                  data: {
                    tipo: tipoAplicacaoDespesasFinsLimiteMinimoConstitucionalEnum,
                    valor: secondCellNumericValue,
                    relatorioMunicialId: relatorio.id,
                  },
                },
              );
            } else if (tipoApuracaoLimiteMinimoConstitucionalEnum) {
              await prisma.apuracaoLimiteMinimoConstitucional21.create({
                data: {
                  tipo: tipoApuracaoLimiteMinimoConstitucionalEnum,
                  valorExigido: secondCellNumericValue,
                  valorAplicado: thirdCellNumericValue,
                  percentualAplicado: fourthCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (
              tipoRestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEnum
            ) {
              await prisma.restosAPagarExerciciosAntDisponibilidadeFinanceiraFundeb21.create(
                {
                  data: {
                    tipo: tipoRestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEnum,
                    saldoInicial: secondCellNumericValue,
                    rpLiquidados: thirdCellNumericValue,
                    rpPagos: fourthCellNumericValue,
                    rpCancelados: fifthCellNumericValue,
                    saldoFinal: sixthCellNumericValue,
                    relatorioMunicialId: relatorio.id,
                  },
                },
              );
            } else if (
              tipoControleDisponibilidadeFinanceiraConciliacaoBancariaEnum
            ) {
              await prisma.controleDisponibilidadeFinanceiraConciliacaoBancaria21.create(
                {
                  data: {
                    tipo: tipoControleDisponibilidadeFinanceiraConciliacaoBancariaEnum,
                    fundeb: secondCellNumericValue,
                    salarioEducacao: thirdCellNumericValue,
                    relatorioMunicialId: relatorio.id,
                  },
                },
              );
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

async function findTypes1014(
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

async function findTypes1520(
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

async function findTypes21(
  relatorio: RelatorioMunicipal21,
  tipoReceitaDespesaLimpo: string,
) {
  let tipoReceitaEnum: ItemReceitaTipos21;
  let tipoDespesaEnum: ItemDespesasTipos21;
  let tipoDespesasCusteadasFundebEnum: DespesasCusteadasFundebExercicioTipos21;
  let tipoRecursosRecebidosNaoUtilizadosEnum: RecursosRecebidosNaoUtilizadosTipos21;
  let tipoIndicadores21Art212Enum: IndicadoresTipos21Art212;
  let tipoIndicador21Art25MaximoDeSuperavitEnum: IndicadorTipos21Art25MaximoDeSuperavit;
  let tipoIndicador21Art25AplicacaoSuperavitEnum: IndicadorTipos21Art25AplicacaoSuperavit;
  let tipoAplicacaoDespesasFinsLimiteMinimoConstitucionalEnum: AplicacaoDespesasFinsLimiteMinimoConstitucionalTipos21;
  let tipoApuracaoLimiteMinimoConstitucionalEnum: ApuracaoLimiteMinimoConstitucionalTipos21;
  let tipoRestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEnum: RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebTipos21;
  let tipoControleDisponibilidadeFinanceiraConciliacaoBancariaEnum: ControleDisponibildadeFinanceiraConciliacaoBancariaTipos21;
  let tipoJaDefinido = false;

  // Percorre o mapeamento de receitas para o ano de 2021
  for (const key in mapeamentoReceitas21) {
    const receitaExiste = await prisma.receita21.findUnique({
      where: {
        relatorioMunicialId_tipo: {
          relatorioMunicialId: relatorio.id,
          tipo: mapeamentoReceitas21[key],
        },
      },
    });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !receitaExiste) {
      tipoReceitaEnum = mapeamentoReceitas21[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoDespesas21) {
    if (tipoJaDefinido) {
      break;
    }
    const despesaExiste = await prisma.despesa21.findUnique({
      where: {
        relatorioMunicialId_tipo: {
          relatorioMunicialId: relatorio.id,
          tipo: mapeamentoDespesas21[key],
        },
      },
    });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !despesaExiste) {
      tipoDespesaEnum = mapeamentoDespesas21[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoDespesasCusteadasFundebExercicio21) {
    if (tipoJaDefinido) {
      break;
    }
    const deducaoExiste =
      await prisma.despesasCusteadasFundebExercicio21.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoDespesasCusteadasFundebExercicio21[key],
          },
        },
      });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !deducaoExiste) {
      tipoDespesasCusteadasFundebEnum =
        mapeamentoDespesasCusteadasFundebExercicio21[key];
      tipoJaDefinido = true;
      break;
    }
  }

  // Percorre o mapeamento de indicadores do Fundeb para o ano de 2021
  for (const key in mapeamentoRecursosRecebidosNaoUtilizados21) {
    if (tipoJaDefinido) {
      break;
    }
    const indicadorExiste =
      await prisma.recursosRecebidosNaoUtilizados21.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoRecursosRecebidosNaoUtilizados21[key],
          },
        },
      });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !indicadorExiste) {
      tipoRecursosRecebidosNaoUtilizadosEnum =
        mapeamentoRecursosRecebidosNaoUtilizados21[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoIndicadores21Art212) {
    if (tipoJaDefinido) {
      break;
    }
    const indicadorExiste = await prisma.indicadores21Art212.findUnique({
      where: {
        relatorioMunicialId_tipo: {
          relatorioMunicialId: relatorio.id,
          tipo: mapeamentoIndicadores21Art212[key],
        },
      },
    });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !indicadorExiste) {
      tipoIndicadores21Art212Enum = mapeamentoIndicadores21Art212[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoIndicador21Art25MaximoDeSuperavit) {
    if (tipoJaDefinido) {
      break;
    }
    const indicadorExiste =
      await prisma.indicador21Art25MaximoDeSuperavit.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoIndicador21Art25MaximoDeSuperavit[key],
          },
        },
      });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !indicadorExiste) {
      tipoIndicador21Art25MaximoDeSuperavitEnum =
        mapeamentoIndicador21Art25MaximoDeSuperavit[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoIndicador21Art25AplicacaoSuperavit) {
    if (tipoJaDefinido) {
      break;
    }
    const indicadorExiste =
      await prisma.indicador21Art25AplicacaoSuperavit.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoIndicador21Art25AplicacaoSuperavit[key],
          },
        },
      });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !indicadorExiste) {
      tipoIndicador21Art25AplicacaoSuperavitEnum =
        mapeamentoIndicador21Art25AplicacaoSuperavit[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoAplicacaoDespesasFinsLimiteMinimoConstitucional21) {
    if (tipoJaDefinido) {
      break;
    }
    const indicadorExiste =
      await prisma.aplicacaoDespesasFinsLimiteMinimoConstitucional21.findUnique(
        {
          where: {
            relatorioMunicialId_tipo: {
              relatorioMunicialId: relatorio.id,
              tipo: mapeamentoAplicacaoDespesasFinsLimiteMinimoConstitucional21[
                key
              ],
            },
          },
        },
      );

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !indicadorExiste) {
      tipoAplicacaoDespesasFinsLimiteMinimoConstitucionalEnum =
        mapeamentoAplicacaoDespesasFinsLimiteMinimoConstitucional21[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoApuracaoLimiteMinimoConstitucional21) {
    if (tipoJaDefinido) {
      break;
    }
    const indicadorExiste =
      await prisma.apuracaoLimiteMinimoConstitucional21.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoApuracaoLimiteMinimoConstitucional21[key],
          },
        },
      });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !indicadorExiste) {
      tipoApuracaoLimiteMinimoConstitucionalEnum =
        mapeamentoApuracaoLimiteMinimoConstitucional21[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoRestosAPagarExerciciosAntDisponibilidadeFinanceiraFundeb21) {
    if (tipoJaDefinido) {
      break;
    }
    const indicadorExiste =
      await prisma.restosAPagarExerciciosAntDisponibilidadeFinanceiraFundeb21.findUnique(
        {
          where: {
            relatorioMunicialId_tipo: {
              relatorioMunicialId: relatorio.id,
              tipo: mapeamentoRestosAPagarExerciciosAntDisponibilidadeFinanceiraFundeb21[
                key
              ],
            },
          },
        },
      );

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !indicadorExiste) {
      tipoRestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEnum =
        mapeamentoRestosAPagarExerciciosAntDisponibilidadeFinanceiraFundeb21[
          key
        ];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoControleDisponibilidadeFinanceiraConciliacaoBancaria21) {
    if (tipoJaDefinido) {
      break;
    }
    const indicadorExiste =
      await prisma.controleDisponibilidadeFinanceiraConciliacaoBancaria21.findUnique(
        {
          where: {
            relatorioMunicialId_tipo: {
              relatorioMunicialId: relatorio.id,
              tipo: mapeamentoControleDisponibilidadeFinanceiraConciliacaoBancaria21[
                key
              ],
            },
          },
        },
      );

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !indicadorExiste) {
      tipoControleDisponibilidadeFinanceiraConciliacaoBancariaEnum =
        mapeamentoControleDisponibilidadeFinanceiraConciliacaoBancaria21[key];
      tipoJaDefinido = true;
      break;
    }
  }

  return {
    tipoReceitaEnum,
    tipoDespesaEnum,
    tipoDespesasCusteadasFundebEnum,
    tipoRecursosRecebidosNaoUtilizadosEnum,
    tipoIndicadores21Art212Enum,
    tipoIndicador21Art25MaximoDeSuperavitEnum,
    tipoIndicador21Art25AplicacaoSuperavitEnum,
    tipoAplicacaoDespesasFinsLimiteMinimoConstitucionalEnum,
    tipoApuracaoLimiteMinimoConstitucionalEnum,
    tipoRestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEnum,
    tipoControleDisponibilidadeFinanceiraConciliacaoBancariaEnum,
  };
}

async function getCellsNumericValues2(row: ExcelJS.Row, numColumns: number) {
  const numericValues = [];

  for (let i = 2; i <= numColumns + 1; i++) {
    const cellValue = row.getCell(i).value;
    const numericValue = cellValue
      ? parseFloat(
          cellValue
            .toString()
            .replace(/[^\d,-]/g, '')
            .replace(',', '.'),
        )
      : 0;

    numericValues.push(numericValue);
  }

  return numericValues;
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

seedDatabaseTenToFourteen()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

seedDatabasefifteenTotwenty()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

seedDatabaseTwentyOneTwentyTwo()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
