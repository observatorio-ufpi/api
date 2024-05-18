import {
  AplicacaoDespesasFinsLimiteMinimoConstitucionalTipos21,
  ApuracaoLimiteMinimoConstitucionalTipos21,
  CompensacaoRestosAPagarTipo06,
  ControleDisponibildadeFinanceiraConciliacaoBancariaTipos21,
  ControleDisponibilidadeFinanceiraTipo1718,
  ControleDisponibilidadeFinanceiraTipo1920,
  ControleRecursosNoExercicioSubsequenteTipo1516,
  ControleRecursosNoExercicioSubsequenteTipo1718,
  ControleRecursosNoExercicioSubsequenteTipo1920,
  ControleRestosAPagarVinculadosEducacaoTipo06,
  ControleUtilizacaoRecursosTipo0912,
  ControleUtilizacaoRecursosTipo1314,
  DeducoesAdicoesParaFinsLimiteConstitucionalTipo0708,
  DeducoesDaDespesaTipo06,
  DeducoesFinsLimiteFundebTipo1314,
  DeducoesFinsLimiteFundebTipo1516,
  DeducoesFinsLimiteFundebTipo1718,
  DeducoesFinsLimiteFundebTipo1920,
  DeducoesFundebMagisterioTipo0912,
  DeducoesParaFinsDeLimitesConstitucionalTipo0912,
  DeducoesParaFinsDeLimitesConstitucionalTipo1314,
  DeducoesParaFinsDeLimitesConstitucionalTipo1516,
  DeducoesParaFinsDeLimitesConstitucionalTipo1718,
  DeducoesParaFinsDeLimitesConstitucionalTipo1920,
  DespesasCusteadasFundebExercicioTipos21,
  FluxoFinanceiroDeRecursosFundebTipo1516,
  FluxoFinanceiroDeRecursosTipos0912,
  FluxoFinanceiroDeRecursosTipos1314,
  FluxoFinanceiroRecursosFundebTipo0708,
  IndicadorTipos21Art25AplicacaoSuperavit,
  IndicadorTipos21Art25MaximoDeSuperavit,
  IndicadoresFundebTipo1314,
  IndicadoresFundebTipo1516,
  IndicadoresFundebTipo1718,
  IndicadoresFundebTipo1920,
  IndicadoresTipos21Art212,
  InformacoesControleFinanceiroTipo0708,
  ItemDespesaTipos06,
  ItemDespesaTipos0708,
  ItemDespesaTipos0912,
  ItemDespesaTipos1314,
  ItemDespesaTipos1516,
  ItemDespesaTipos1718,
  ItemDespesaTipos1920,
  ItemDespesasTipos21,
  ItemReceitaTipos06,
  ItemReceitaTipos0708,
  ItemReceitaTipos0912,
  ItemReceitaTipos1314,
  ItemReceitaTipos1516,
  ItemReceitaTipos1718,
  ItemReceitaTipos1920,
  ItemReceitaTipos21,
  Minimo60PorCentoFundebTipo0708,
  PerdaGanhoTransferenciasFundebTipo06,
  RecursosRecebidosNaoUtilizadosTipos21,
  RelatorioMunicipal06,
  RelatorioMunicipal0708,
  RelatorioMunicipal0912,
  RelatorioMunicipal1314,
  RelatorioMunicipal1516,
  RelatorioMunicipal1718,
  RelatorioMunicipal1920,
  RelatorioMunicipal21,
  RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebTipos21,
  RestosAPagarInscritosDisponibilidadesFinanceiraTipo0912,
  RestosAPagarInscritosDisponibilidadesFinanceiraTipo1314,
  RestosAPagarInscritosDisponibilidadesFinanceiraTipo1516,
  RestosAPagarInscritosDisponibilidadesFinanceiraTipo1718,
  RestosAPagarInscritosDisponibilidadesFinanceiraTipo1920,
  SaldoFinanceiroFundefTipo06,
  TabelaCumprimentoLimitesConstitucionaisTipo06,
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
} from './seeding.map.2009-2012';

import {
  mapeamentoControleRecursosNoExercicioSubsequente1516,
  mapeamentoDeducoesParaFinsDeLimitesConstitucional1516,
  mapeamentoDeducoesParaFinsLimiteFundeb1516,
  mapeamentoDespesas1516,
  mapeamentoFluxoFinanceiroDeRecursosFundeb1516,
  mapeamentoIndicadoresFundeb1516,
  mapeamentoReceitas1516,
  mapeamentoRestosAPagarInscritosDisponibilidadesFinanceira1516,
} from './seeding.map.2015-2016';

import { PrismaClient } from '@prisma/client';
import {
  mapeamentoCompensacaoRestosAPagarTipo06,
  mapeamentoControleRestosAPagarVinculadosEducacaoTipo06,
  mapeamentoCumprimentoLimitesConstitucionaisTipo06,
  mapeamentoDeducoesDaDespesaTipo06,
  mapeamentoDespesas06,
  mapeamentoPerdaGanhoTransferenciasFundebTipo06,
  mapeamentoReceitas06,
  mapeamentoSaldoFinanceiroFundef06,
} from './seeding.map.2006';
import {
  mapeamentoDeducoesAdicoesParaFinsLimiteConstitucional0708,
  mapeamentoDespesas0708,
  mapeamentoFluxoFinanceiroRecursosFundeb0708,
  mapeamentoInformacoesControleFinanceiro0708,
  mapeamentoMinimo60PorCentoFundeb0708,
  mapeamentoReceitas0708,
} from './seeding.map.2007-2008';
import {
  mapeamentoControleUtilizacaoRecursos1314,
  mapeamentoDeducoesFinsLimiteFundeb1314,
  mapeamentoDeducoesParaFinsDeLimitesConstitucional1314,
  mapeamentoDespesas1314,
  mapeamentoFluxoFinanceiroDeRecursos1314,
  mapeamentoIndicadoresFundeb1314,
  mapeamentoReceitas1314,
  mapeamentoRestosAPagar1314,
} from './seeding.map.2013-2014';
import {
  mapeamentoControleDisponibilidadeFinanceira1718,
  mapeamentoControleRecursosNoExercicioSubsequente1718,
  mapeamentoDeducoesParaFinsDeLimitesConstitucional1718,
  mapeamentoDeducoesParaFinsLimiteFundeb1718,
  mapeamentoDespesas1718,
  mapeamentoIndicadoresFundeb1718,
  mapeamentoReceitas1718,
  mapeamentoRestosAPagarInscritosDisponibilidadesFinanceira1718,
} from './seeding.map.2017-2018';
import {
  mapeamentoControleDisponibilidadeFinanceira1920,
  mapeamentoControleRecursosNoExercicioSubsequente1920,
  mapeamentoDeducoesParaFinsDeLimitesConstitucional1920,
  mapeamentoDeducoesParaFinsLimiteFundeb1920,
  mapeamentoDespesas1920,
  mapeamentoIndicadoresFundeb1920,
  mapeamentoReceitas1920,
  mapeamentoRestosAPagarInscritosDisponibilidadesFinanceira1920,
} from './seeding.map.2019-2020';
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

async function seedDatabase06() {
  try {
    const diretorio = process.env.FILES_SPREADSHEET_URL;

    const arquivos = fs.readdirSync(diretorio);

    for (const arquivo of arquivos) {
      if (arquivo.endsWith('.csv')) {
        const caminhoArquivo = path.join(
          diretorio,
          'tabula-RREO_Municipal_220005_1_2006.csv',
        );

        const workbook = new ExcelJS.Workbook();
        await workbook.csv.readFile(caminhoArquivo);

        //const fileMatch = arquivo;
        const fileMatch = 'tabula-RREO_Municipal_220005_1_2006.csv';

        const match = fileMatch.match(/(\d{6})_(\d{1,6})_(\d{4})\.csv$/);

        if (match) {
          const codigo = match[1];
          const ano = match[3];

          console.log('Ano:', ano);
          console.log('Código:', codigo);

          const worksheet = workbook.getWorksheet(1);

          const relatorio = await prisma.relatorioMunicipal06.create({
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
              tipoSaldoFinanceiroFunded,
              tipoCumprimentoLimitesConstitunionais,
              tipoDeducoesDaDespesaEnum,
              tipoCompensacaoRestosAPagarEnum,
              tipoControleRestosAPagarVinculadosEducacaoEnum,
              tipoPerdaGanhoTransferenciasFundebEnum,
            } = await findTypes06(relatorio, tipoReceitaDespesaLimpo);

            const {
              secondCellNumericValue,
              thirdCellNumericValue,
              fourthCellNumericValue,
              fifthCellNumericValue,
              sixthCellNumericValue,
            } = await getCellsNumericValues(row);

            if (tipoReceitaEnum) {
              await prisma.receita06.create({
                data: {
                  tipo: tipoReceitaEnum,
                  previsaoInicial: secondCellNumericValue,
                  previsaoAtualizada: thirdCellNumericValue,
                  receitasRealizadasNoAno: fifthCellNumericValue,
                  receitasRealizadasPercentual: sixthCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoDespesaEnum) {
              await prisma.despesa06.create({
                data: {
                  tipo: tipoDespesaEnum,
                  dotacaoInicial: secondCellNumericValue,
                  dotacaoAtualizada: thirdCellNumericValue,
                  despesasLiquidadasNoAno: fifthCellNumericValue,
                  despesasLiquidadasPercentual: sixthCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoCompensacaoRestosAPagarEnum) {
              await prisma.compensacaoRestosAPagar06.create({
                data: {
                  tipo: tipoCompensacaoRestosAPagarEnum,
                  valor: secondCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoPerdaGanhoTransferenciasFundebEnum) {
              await prisma.perdaGanhoTransferenciasFundeb06.create({
                data: {
                  tipo: tipoPerdaGanhoTransferenciasFundebEnum,
                  valor: secondCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoCumprimentoLimitesConstitunionais) {
              await prisma.tabelaCumprimentoLimitesConstitucionais06.create({
                data: {
                  tipo: tipoCumprimentoLimitesConstitunionais,
                  porcentagem: secondCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoDeducoesDaDespesaEnum) {
              await prisma.deducoesDaDespesa06.create({
                data: {
                  tipo: tipoDeducoesDaDespesaEnum,
                  valor: secondCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoControleRestosAPagarVinculadosEducacaoEnum) {
              await prisma.controleRestosAPagarVinculadosEducacao06.create({
                data: {
                  tipo: tipoControleRestosAPagarVinculadosEducacaoEnum,
                  aplicacaoMinimaAnoAnterior: secondCellNumericValue,
                  aplicacaoApuradaAnoAnterior: thirdCellNumericValue,
                  restosAPagarAnoAnterior: fourthCellNumericValue,
                  restosAPagarCanceladaAnoAtul: fifthCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoSaldoFinanceiroFunded) {
              await prisma.saldoFinanceiroFundef06.create({
                data: {
                  tipo: tipoSaldoFinanceiroFunded,
                  anoAnterior: secondCellNumericValue,
                  anoAtual: thirdCellNumericValue,
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
async function seedDatabase0708() {
  try {
    const diretorio = process.env.FILES_SPREADSHEET_URL;

    const arquivos = fs.readdirSync(diretorio);

    for (const arquivo of arquivos) {
      if (arquivo.endsWith('.csv')) {
        const caminhoArquivo = path.join(
          diretorio,
          'tabula-RREO_Municipal_220005_1_2007.csv',
        );

        const workbook = new ExcelJS.Workbook();
        await workbook.csv.readFile(caminhoArquivo);

        //const fileMatch = arquivo;
        const fileMatch = 'tabula-RREO_Municipal_220005_1_2007.csv';

        const match = fileMatch.match(/(\d{6})_(\d{1,6})_(\d{4})\.csv$/);

        if (match) {
          const codigo = match[1];
          const ano = match[3];

          console.log('Ano:', ano);
          console.log('Código:', codigo);

          const worksheet = workbook.getWorksheet(1);

          const relatorio = await prisma.relatorioMunicipal0708.create({
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
              tipoMinimo60PorCentoFundebEnum,
              tipoDeducoesAdicoesParaFinsLimiteConstitucionalEnum,
              tipoInformacoesControleFinanceiroEnum,
              tipoFluxoFinanceiroRecursosFundebEnum,
            } = await findTypes0708(relatorio, tipoReceitaDespesaLimpo);

            const {
              secondCellNumericValue,
              thirdCellNumericValue,
              fifthCellNumericValue,
              sixthCellNumericValue,
            } = await getCellsNumericValues(row);

            if (tipoReceitaEnum) {
              await prisma.receita0708.create({
                data: {
                  tipo: tipoReceitaEnum,
                  previsaoInicial: secondCellNumericValue,
                  previsaoAtualizada: thirdCellNumericValue,
                  receitasRealizadasNoAno: fifthCellNumericValue,
                  receitasRealizadasPercentual: sixthCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoDespesaEnum) {
              await prisma.despesa0708.create({
                data: {
                  tipo: tipoDespesaEnum,
                  dotacaoInicial: secondCellNumericValue,
                  dotacaoAtualizada: thirdCellNumericValue,
                  despesasEmpenhadasNoAno: fifthCellNumericValue,
                  despesasEmpenhadasPercentual: sixthCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoMinimo60PorCentoFundebEnum) {
              await prisma.minimo60PorCentoFundeb0708.create({
                data: {
                  tipo: tipoMinimo60PorCentoFundebEnum,
                  despesasRealizadasPercentual: secondCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoDeducoesAdicoesParaFinsLimiteConstitucionalEnum) {
              await prisma.deducoesAdicoesParaFinsLimiteConstitucional0708.create(
                {
                  data: {
                    tipo: tipoDeducoesAdicoesParaFinsLimiteConstitucionalEnum,
                    valor: secondCellNumericValue,
                    relatorioMunicialId: relatorio.id,
                  },
                },
              );
            } else if (tipoInformacoesControleFinanceiroEnum) {
              await prisma.informacoesControleFinanceiro0708.create({
                data: {
                  tipo: tipoInformacoesControleFinanceiroEnum,
                  saldoAteBimeste: secondCellNumericValue,
                  cancelado: thirdCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoFluxoFinanceiroRecursosFundebEnum) {
              await prisma.fluxoFinanceiroRecursosFundeb0708.create({
                data: {
                  tipo: tipoFluxoFinanceiroRecursosFundebEnum,
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

async function seedDatabase0912() {
  try {
    const diretorio = process.env.FILES_SPREADSHEET_URL;

    const arquivos = fs.readdirSync(diretorio);

    for (const arquivo of arquivos) {
      if (arquivo.endsWith('.csv')) {
        const caminhoArquivo = path.join(
          diretorio,
          'tabula-RREO_Municipal_220005_1_2010.csv',
        );

        const workbook = new ExcelJS.Workbook();
        await workbook.csv.readFile(caminhoArquivo);

        //const fileMatch = arquivo;
        const fileMatch = 'tabula-RREO_Municipal_220005_1_2010.csv';

        const match = fileMatch.match(/(\d{6})_(\d{1,6})_(\d{4})\.csv$/);

        if (match) {
          const codigo = match[1];
          const ano = match[3];

          console.log('Ano:', ano);
          console.log('Código:', codigo);

          const worksheet = workbook.getWorksheet(1);

          const relatorio = await prisma.relatorioMunicipal0912.create({
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
            } = await findTypes0912(relatorio, tipoReceitaDespesaLimpo);

            const {
              secondCellNumericValue,
              thirdCellNumericValue,
              fourthCellNumericValue,
              fifthCellNumericValue,
              sixthCellNumericValue,
            } = await getCellsNumericValues(row);

            if (tipoReceitaEnum) {
              await prisma.receita0912.create({
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
              await prisma.despesa0912.create({
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
              await prisma.deducoesFundebMagisterio0912.create({
                data: {
                  tipo: tipoDeducoesFundebMagisterioEnum,
                  valor: secondCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoControleUtilizacaoRecursosEnum) {
              await prisma.controleUtilizacaoRecursos0912.create({
                data: {
                  tipo: tipoControleUtilizacaoRecursosEnum,
                  valor: secondCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoDeducoesParaFinsDeLimitesConstitucionalEnum) {
              await prisma.deducoesParaFinsDeLimitesConstitucional0912.create({
                data: {
                  tipo: tipoDeducoesParaFinsDeLimitesConstitucionalEnum,
                  valor: secondCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoRestosAPagarEnum) {
              await prisma.restosAPagarInscritosDisponibilidadesFinanceira0912.create(
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
              await prisma.fluxoFinanceiroDeRecursos0912.create({
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

async function seedDatabase1314() {
  try {
    const diretorio = process.env.FILES_SPREADSHEET_URL;

    const arquivos = fs.readdirSync(diretorio);

    for (const arquivo of arquivos) {
      if (arquivo.endsWith('.csv')) {
        const caminhoArquivo = path.join(
          diretorio,
          'tabula-RREO_Municipal_220005_1_2013.csv',
        );

        const workbook = new ExcelJS.Workbook();
        await workbook.csv.readFile(caminhoArquivo);

        //const fileMatch = arquivo;
        const fileMatch = 'tabula-RREO_Municipal_220005_1_2013.csv';

        const match = fileMatch.match(/(\d{6})_(\d{1,6})_(\d{4})\.csv$/);

        if (match) {
          const codigo = match[1];
          const ano = match[3];

          console.log('Ano:', ano);
          console.log('Código:', codigo);

          const worksheet = workbook.getWorksheet(1);

          const relatorio = await prisma.relatorioMunicipal1314.create({
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
              tipoDeducoesFinsLimiteFundebEnum,
              tipoIndicadoresFundebEnum,
              tipoControleUtilizacaoRecursosEnum,
              tipoDeducoesParaFinsDeLimitesConstitucionalEnum,
              tipoRestosAPagarEnum,
              tipoFluxoFinanceiroDeRecursos,
            } = await findTypes1314(relatorio, tipoReceitaDespesaLimpo);

            const {
              secondCellNumericValue,
              thirdCellNumericValue,
              fourthCellNumericValue,
              fifthCellNumericValue,
              sixthCellNumericValue,
            } = await getCellsNumericValues(row);

            if (tipoReceitaEnum) {
              await prisma.receita1314.create({
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
              await prisma.despesa1314.create({
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
            } else if (tipoDeducoesFinsLimiteFundebEnum) {
              await prisma.deducoesFinsLimiteFundeb1314.create({
                data: {
                  tipo: tipoDeducoesFinsLimiteFundebEnum,
                  valor: secondCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoIndicadoresFundebEnum) {
              await prisma.indicadoresFundeb1314.create({
                data: {
                  tipo: tipoIndicadoresFundebEnum,
                  valor: secondCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoControleUtilizacaoRecursosEnum) {
              await prisma.controleUtilizacaoRecursos1314.create({
                data: {
                  tipo: tipoControleUtilizacaoRecursosEnum,
                  valor: secondCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoDeducoesParaFinsDeLimitesConstitucionalEnum) {
              await prisma.deducoesParaFinsDeLimitesConstitucional1314.create({
                data: {
                  tipo: tipoDeducoesParaFinsDeLimitesConstitucionalEnum,
                  valor: secondCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoRestosAPagarEnum) {
              await prisma.restosAPagarInscritosDisponibilidadesFinanceira1314.create(
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
              await prisma.fluxoFinanceiroDeRecursos1314.create({
                data: {
                  tipo: tipoFluxoFinanceiroDeRecursos,
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

async function seedDatabase1516() {
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

        //const fileMatch = arquivo;
        const fileMatch = 'tabula-RREO_Municipal_220005_1_2015.csv';

        const match = fileMatch.match(/(\d{6})_(\d{1,6})_(\d{4})\.csv$/);

        if (match) {
          const codigo = match[1];
          const ano = match[3];

          console.log('Ano:', ano);
          console.log('Código:', codigo);

          const worksheet = workbook.getWorksheet(1);

          const relatorio = await prisma.relatorioMunicipal1516.create({
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
            } = await findTypes1516(relatorio, tipoReceitaDespesaLimpo);

            const {
              secondCellNumericValue,
              thirdCellNumericValue,
              fourthCellNumericValue,
              fifthCellNumericValue,
              sixthCellNumericValue,
              seventhCellNumericValue,
              eighthCellNumericValue,
            } = await getCellsNumericValues(row);

            if (tipoReceitaEnum) {
              await prisma.receita1516.create({
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
              await prisma.despesa1516.create({
                data: {
                  tipo: tipoDespesaEnum,
                  dotacaoInicial: secondCellNumericValue,
                  dotacaoAtualizada: thirdCellNumericValue,
                  despesasEmpenhadasAteBimestre: fourthCellNumericValue,
                  despesasEmpenhadasPercentual: fifthCellNumericValue,
                  despesasLiquidadasAteBimestre: sixthCellNumericValue,
                  despesasLiquidadasPercentual: seventhCellNumericValue,
                  inscritasRestosPagar: eighthCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoDeducoesParaFinsLimiteFundebEnum) {
              await prisma.deducoesFinsLimiteFundeb1516.create({
                data: {
                  tipo: tipoDeducoesParaFinsLimiteFundebEnum,
                  valor: secondCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoIndicadoresFundebEnum) {
              await prisma.indicadoresFundeb1516.create({
                data: {
                  tipo: tipoIndicadoresFundebEnum,
                  valor: secondCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoControleRecursosNoExercicioSubsequenteEnum) {
              await prisma.controleRecursosNoExercicioSubsequente1516.create({
                data: {
                  tipo: tipoControleRecursosNoExercicioSubsequenteEnum,
                  valor: secondCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoDeducoesParaFinsDeLimitesConstitucionalEnum) {
              await prisma.deducoesParaFinsDeLimitesConstitucional1516.create({
                data: {
                  tipo: tipoDeducoesParaFinsDeLimitesConstitucionalEnum,
                  valor: secondCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (
              tipoRestosAPagarInscritosDisponibilidadesFinanceiraEnum
            ) {
              await prisma.restosAPagarInscritosDisponibilidadesFinanceira1516.create(
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
              await prisma.fluxoFinanceiroDeRecursosFundeb1516.create({
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

async function seedDatabase1718() {
  try {
    const diretorio = process.env.FILES_SPREADSHEET_URL;

    const arquivos = fs.readdirSync(diretorio);

    for (const arquivo of arquivos) {
      if (arquivo.endsWith('.csv')) {
        const caminhoArquivo = path.join(
          diretorio,
          'tabula-RREO_Municipal_220005_6_2017.csv',
        );

        const workbook = new ExcelJS.Workbook();
        await workbook.csv.readFile(caminhoArquivo);

        //const fileMatch = arquivo;
        const fileMatch = 'tabula-RREO_Municipal_220005_6_2017.csv';

        const match = fileMatch.match(/(\d{6})_(\d{1,6})_(\d{4})\.csv$/);

        if (match) {
          const codigo = match[1];
          const ano = match[3];

          console.log('Ano:', ano);
          console.log('Código:', codigo);

          const worksheet = workbook.getWorksheet(1);

          const relatorio = await prisma.relatorioMunicipal1718.create({
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
              tipoControleDisponibilidadeFinanceiraEnum,
            } = await findTypes1718(relatorio, tipoReceitaDespesaLimpo);

            const {
              secondCellNumericValue,
              thirdCellNumericValue,
              fourthCellNumericValue,
              fifthCellNumericValue,
              sixthCellNumericValue,
              seventhCellNumericValue,
              eighthCellNumericValue,
            } = await getCellsNumericValues(row);

            if (tipoReceitaEnum) {
              await prisma.receita1718.create({
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
              await prisma.despesa1718.create({
                data: {
                  tipo: tipoDespesaEnum,
                  dotacaoInicial: secondCellNumericValue,
                  dotacaoAtualizada: thirdCellNumericValue,
                  despesasEmpenhadasAteBimestre: fourthCellNumericValue,
                  despesasEmpenhadasPercentual: fifthCellNumericValue,
                  despesasLiquidadasAteBimestre: sixthCellNumericValue,
                  despesasLiquidadasPercentual: seventhCellNumericValue,
                  inscritasRestosPagar: eighthCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoDeducoesParaFinsLimiteFundebEnum) {
              await prisma.deducoesFinsLimiteFundeb1718.create({
                data: {
                  tipo: tipoDeducoesParaFinsLimiteFundebEnum,
                  valor: secondCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoIndicadoresFundebEnum) {
              await prisma.indicadoresFundeb1718.create({
                data: {
                  tipo: tipoIndicadoresFundebEnum,
                  valor: secondCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoControleRecursosNoExercicioSubsequenteEnum) {
              await prisma.controleRecursosNoExercicioSubsequente1718.create({
                data: {
                  tipo: tipoControleRecursosNoExercicioSubsequenteEnum,
                  valor: secondCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoDeducoesParaFinsDeLimitesConstitucionalEnum) {
              await prisma.deducoesParaFinsDeLimitesConstitucional1718.create({
                data: {
                  tipo: tipoDeducoesParaFinsDeLimitesConstitucionalEnum,
                  valor: secondCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (
              tipoRestosAPagarInscritosDisponibilidadesFinanceiraEnum
            ) {
              await prisma.restosAPagarInscritosDisponibilidadesFinanceira1718.create(
                {
                  data: {
                    tipo: tipoRestosAPagarInscritosDisponibilidadesFinanceiraEnum,
                    saldoAteBimestre: secondCellNumericValue,
                    canceladoNoAno: thirdCellNumericValue,
                    relatorioMunicialId: relatorio.id,
                  },
                },
              );
            } else if (tipoControleDisponibilidadeFinanceiraEnum) {
              await prisma.controleDisponibilidadeFinanceira1718.create({
                data: {
                  tipo: tipoControleDisponibilidadeFinanceiraEnum,
                  fundeb: secondCellNumericValue,
                  salarioEducacao: thirdCellNumericValue,
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

async function seedDatabase1920() {
  try {
    const diretorio = process.env.FILES_SPREADSHEET_URL;

    const arquivos = fs.readdirSync(diretorio);

    for (const arquivo of arquivos) {
      if (arquivo.endsWith('.csv')) {
        const caminhoArquivo = path.join(
          diretorio,
          'tabula-RREO_Municipal_220005_6_2019.csv',
        );

        const workbook = new ExcelJS.Workbook();
        await workbook.csv.readFile(caminhoArquivo);

        //const fileMatch = arquivo;
        const fileMatch = 'tabula-RREO_Municipal_220005_6_2019.csv';

        const match = fileMatch.match(/(\d{6})_(\d{1,6})_(\d{4})\.csv$/);

        if (match) {
          const codigo = match[1];
          const ano = match[3];

          console.log('Ano:', ano);
          console.log('Código:', codigo);

          const worksheet = workbook.getWorksheet(1);

          const relatorio = await prisma.relatorioMunicipal1920.create({
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
              tipoControleDisponibilidadeFinanceiraEnum,
            } = await findTypes1920(relatorio, tipoReceitaDespesaLimpo);

            const {
              secondCellNumericValue,
              thirdCellNumericValue,
              fourthCellNumericValue,
              fifthCellNumericValue,
              sixthCellNumericValue,
              seventhCellNumericValue,
              eighthCellNumericValue,
            } = await getCellsNumericValues(row);

            if (tipoReceitaEnum) {
              await prisma.receita1920.create({
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
              await prisma.despesa1920.create({
                data: {
                  tipo: tipoDespesaEnum,
                  dotacaoInicial: secondCellNumericValue,
                  dotacaoAtualizada: thirdCellNumericValue,
                  despesasEmpenhadasAteBimestre: fourthCellNumericValue,
                  despesasEmpenhadasPercentual: fifthCellNumericValue,
                  despesasLiquidadasAteBimestre: sixthCellNumericValue,
                  despesasLiquidadasPercentual: seventhCellNumericValue,
                  inscritasRestosPagar: eighthCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoDeducoesParaFinsLimiteFundebEnum) {
              await prisma.deducoesFinsLimiteFundeb1920.create({
                data: {
                  tipo: tipoDeducoesParaFinsLimiteFundebEnum,
                  valor: secondCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoIndicadoresFundebEnum) {
              await prisma.indicadoresFundeb1920.create({
                data: {
                  tipo: tipoIndicadoresFundebEnum,
                  valor: secondCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoControleRecursosNoExercicioSubsequenteEnum) {
              await prisma.controleRecursosNoExercicioSubsequente1920.create({
                data: {
                  tipo: tipoControleRecursosNoExercicioSubsequenteEnum,
                  valor: secondCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (tipoDeducoesParaFinsDeLimitesConstitucionalEnum) {
              await prisma.deducoesParaFinsDeLimitesConstitucional1920.create({
                data: {
                  tipo: tipoDeducoesParaFinsDeLimitesConstitucionalEnum,
                  valor: secondCellNumericValue,
                  relatorioMunicialId: relatorio.id,
                },
              });
            } else if (
              tipoRestosAPagarInscritosDisponibilidadesFinanceiraEnum
            ) {
              await prisma.restosAPagarInscritosDisponibilidadesFinanceira1920.create(
                {
                  data: {
                    tipo: tipoRestosAPagarInscritosDisponibilidadesFinanceiraEnum,
                    saldoAteBimestre: secondCellNumericValue,
                    canceladoNoAno: thirdCellNumericValue,
                    relatorioMunicialId: relatorio.id,
                  },
                },
              );
            } else if (tipoControleDisponibilidadeFinanceiraEnum) {
              await prisma.controleDisponibilidadeFinanceira1920.create({
                data: {
                  tipo: tipoControleDisponibilidadeFinanceiraEnum,
                  fundeb: secondCellNumericValue,
                  salarioEducacao: thirdCellNumericValue,
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

async function seedDatabase2122() {
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

        //const fileMatch = arquivo;
        const fileMatch = 'tabula-RREO_Municipal_220005_6_2021.csv';

        const match = fileMatch.match(/(\d{6})_(\d{1,6})_(\d{4})\.csv$/);

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

async function findTypes06(
  relatorio: RelatorioMunicipal06,
  tipoReceitaDespesaLimpo: string,
) {
  let tipoReceitaEnum: ItemReceitaTipos06;
  let tipoDespesaEnum: ItemDespesaTipos06;
  let tipoSaldoFinanceiroFunded: SaldoFinanceiroFundefTipo06;
  let tipoCumprimentoLimitesConstitunionais: TabelaCumprimentoLimitesConstitucionaisTipo06;
  let tipoDeducoesDaDespesaEnum: DeducoesDaDespesaTipo06;
  let tipoCompensacaoRestosAPagarEnum: CompensacaoRestosAPagarTipo06;
  let tipoControleRestosAPagarVinculadosEducacaoEnum: ControleRestosAPagarVinculadosEducacaoTipo06;
  let tipoPerdaGanhoTransferenciasFundebEnum: PerdaGanhoTransferenciasFundebTipo06;
  let tipoJaDefinido = false;

  for (const key in mapeamentoReceitas06) {
    const receitaExiste = await prisma.receita06.findUnique({
      where: {
        relatorioMunicialId_tipo: {
          relatorioMunicialId: relatorio.id,
          tipo: mapeamentoReceitas06[key],
        },
      },
    });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !receitaExiste) {
      tipoReceitaEnum = mapeamentoReceitas06[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoDespesas06) {
    if (tipoJaDefinido) {
      break;
    }
    const despesaExiste = await prisma.despesa06.findUnique({
      where: {
        relatorioMunicialId_tipo: {
          relatorioMunicialId: relatorio.id,
          tipo: mapeamentoDespesas06[key],
        },
      },
    });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !despesaExiste) {
      tipoDespesaEnum = mapeamentoDespesas06[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoSaldoFinanceiroFundef06) {
    if (tipoJaDefinido) {
      break;
    }
    const saldoFinanceiroFundedExiste =
      await prisma.saldoFinanceiroFundef06.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoSaldoFinanceiroFundef06[key],
          },
        },
      });

    if (
      isSimilar(tipoReceitaDespesaLimpo, key, 5) &&
      !saldoFinanceiroFundedExiste
    ) {
      tipoSaldoFinanceiroFunded = mapeamentoSaldoFinanceiroFundef06[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoCumprimentoLimitesConstitucionaisTipo06) {
    if (tipoJaDefinido) {
      break;
    }
    const cumprimentoLimitesConstitucionaisExiste =
      await prisma.tabelaCumprimentoLimitesConstitucionais06.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoCumprimentoLimitesConstitucionaisTipo06[key],
          },
        },
      });

    if (
      isSimilar(tipoReceitaDespesaLimpo, key, 5) &&
      !cumprimentoLimitesConstitucionaisExiste
    ) {
      tipoCumprimentoLimitesConstitunionais =
        mapeamentoCumprimentoLimitesConstitucionaisTipo06[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoDeducoesDaDespesaTipo06) {
    if (tipoJaDefinido) {
      break;
    }
    const deducoesDaDespesaExiste = await prisma.deducoesDaDespesa06.findUnique(
      {
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoDeducoesDaDespesaTipo06[key],
          },
        },
      },
    );

    if (
      isSimilar(tipoReceitaDespesaLimpo, key, 5) &&
      !deducoesDaDespesaExiste
    ) {
      tipoDeducoesDaDespesaEnum = mapeamentoDeducoesDaDespesaTipo06[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoCompensacaoRestosAPagarTipo06) {
    if (tipoJaDefinido) {
      break;
    }
    const compensacaoRestosAPagarExiste =
      await prisma.compensacaoRestosAPagar06.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoCompensacaoRestosAPagarTipo06[key],
          },
        },
      });

    if (
      isSimilar(tipoReceitaDespesaLimpo, key, 5) &&
      !compensacaoRestosAPagarExiste
    ) {
      tipoCompensacaoRestosAPagarEnum =
        mapeamentoCompensacaoRestosAPagarTipo06[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoControleRestosAPagarVinculadosEducacaoTipo06) {
    if (tipoJaDefinido) {
      break;
    }
    const controleRestosAPagarVinculadosEducacaoExiste =
      await prisma.controleRestosAPagarVinculadosEducacao06.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoControleRestosAPagarVinculadosEducacaoTipo06[key],
          },
        },
      });

    if (
      isSimilar(tipoReceitaDespesaLimpo, key, 5) &&
      !controleRestosAPagarVinculadosEducacaoExiste
    ) {
      tipoControleRestosAPagarVinculadosEducacaoEnum =
        mapeamentoControleRestosAPagarVinculadosEducacaoTipo06[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoPerdaGanhoTransferenciasFundebTipo06) {
    if (tipoJaDefinido) {
      break;
    }
    const perdaGanhoTransferenciasFundebExiste =
      await prisma.perdaGanhoTransferenciasFundeb06.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoPerdaGanhoTransferenciasFundebTipo06[key],
          },
        },
      });

    if (
      isSimilar(tipoReceitaDespesaLimpo, key, 5) &&
      !perdaGanhoTransferenciasFundebExiste
    ) {
      tipoPerdaGanhoTransferenciasFundebEnum =
        mapeamentoPerdaGanhoTransferenciasFundebTipo06[key];
      tipoJaDefinido = true;
      break;
    }
  }

  return {
    tipoReceitaEnum,
    tipoDespesaEnum,
    tipoSaldoFinanceiroFunded,
    tipoCumprimentoLimitesConstitunionais,
    tipoDeducoesDaDespesaEnum,
    tipoCompensacaoRestosAPagarEnum,
    tipoControleRestosAPagarVinculadosEducacaoEnum,
    tipoPerdaGanhoTransferenciasFundebEnum,
  };
}

async function findTypes0708(
  relatorio: RelatorioMunicipal0708,
  tipoReceitaDespesaLimpo: string,
) {
  let tipoReceitaEnum: ItemReceitaTipos0708;
  let tipoDespesaEnum: ItemDespesaTipos0708;
  let tipoMinimo60PorCentoFundebEnum: Minimo60PorCentoFundebTipo0708;
  let tipoDeducoesAdicoesParaFinsLimiteConstitucionalEnum: DeducoesAdicoesParaFinsLimiteConstitucionalTipo0708;
  let tipoFluxoFinanceiroRecursosFundebEnum: FluxoFinanceiroRecursosFundebTipo0708;
  let tipoInformacoesControleFinanceiroEnum: InformacoesControleFinanceiroTipo0708;
  let tipoJaDefinido = false;

  for (const key in mapeamentoReceitas0708) {
    const receitaExiste = await prisma.receita0708.findUnique({
      where: {
        relatorioMunicialId_tipo: {
          relatorioMunicialId: relatorio.id,
          tipo: mapeamentoReceitas0708[key],
        },
      },
    });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !receitaExiste) {
      tipoReceitaEnum = mapeamentoReceitas0708[key];
      tipoJaDefinido = true;
      break;
    }
  }
  for (const key in mapeamentoDespesas0708) {
    if (tipoJaDefinido) {
      break;
    }
    const despesaExiste = await prisma.despesa0708.findUnique({
      where: {
        relatorioMunicialId_tipo: {
          relatorioMunicialId: relatorio.id,
          tipo: mapeamentoDespesas0708[key],
        },
      },
    });
    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !despesaExiste) {
      tipoDespesaEnum = mapeamentoDespesas0708[key];
      tipoJaDefinido = true;
      break;
    }
  }
  for (const key in mapeamentoMinimo60PorCentoFundeb0708) {
    if (tipoJaDefinido) {
      break;
    }
    const minimo60PorCentoFundebExiste =
      await prisma.minimo60PorCentoFundeb0708.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoMinimo60PorCentoFundeb0708[key],
          },
        },
      });

    if (
      isSimilar(tipoReceitaDespesaLimpo, key, 5) &&
      !minimo60PorCentoFundebExiste
    ) {
      tipoMinimo60PorCentoFundebEnum =
        mapeamentoMinimo60PorCentoFundeb0708[key];
      tipoJaDefinido = true;
      break;
    }
  }
  for (const key in mapeamentoDeducoesAdicoesParaFinsLimiteConstitucional0708) {
    if (tipoJaDefinido) {
      break;
    }
    const adicaoDeducaoExiste =
      await prisma.deducoesAdicoesParaFinsLimiteConstitucional0708.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoDeducoesAdicoesParaFinsLimiteConstitucional0708[
              key
            ],
          },
        },
      });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !adicaoDeducaoExiste) {
      tipoDeducoesAdicoesParaFinsLimiteConstitucionalEnum =
        mapeamentoDeducoesAdicoesParaFinsLimiteConstitucional0708[key];
      tipoJaDefinido = true;
      break;
    }
  }
  for (const key in mapeamentoInformacoesControleFinanceiro0708) {
    if (tipoJaDefinido) {
      break;
    }
    const informacaoExiste =
      await prisma.informacoesControleFinanceiro0708.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoInformacoesControleFinanceiro0708[key],
          },
        },
      });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !informacaoExiste) {
      tipoInformacoesControleFinanceiroEnum =
        mapeamentoInformacoesControleFinanceiro0708[key];
      tipoJaDefinido = true;
      break;
    }
  }
  for (const key in mapeamentoFluxoFinanceiroRecursosFundeb0708) {
    if (tipoJaDefinido) {
      break;
    }
    const fluxoFinanceiroExiste =
      await prisma.fluxoFinanceiroRecursosFundeb0708.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoFluxoFinanceiroRecursosFundeb0708[key],
          },
        },
      });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !fluxoFinanceiroExiste) {
      tipoFluxoFinanceiroRecursosFundebEnum =
        mapeamentoFluxoFinanceiroRecursosFundeb0708[key];
      tipoJaDefinido = true;
      break;
    }
  }
  return {
    tipoReceitaEnum,
    tipoDespesaEnum,
    tipoMinimo60PorCentoFundebEnum,
    tipoDeducoesAdicoesParaFinsLimiteConstitucionalEnum,
    tipoFluxoFinanceiroRecursosFundebEnum,
    tipoInformacoesControleFinanceiroEnum,
  };
}

async function findTypes0912(
  relatorio: RelatorioMunicipal0912,
  tipoReceitaDespesaLimpo: string,
) {
  let tipoReceitaEnum: ItemReceitaTipos0912;
  let tipoDespesaEnum: ItemDespesaTipos0912;
  let tipoDeducoesFundebMagisterioEnum: DeducoesFundebMagisterioTipo0912;
  let tipoControleUtilizacaoRecursosEnum: ControleUtilizacaoRecursosTipo0912;
  let tipoDeducoesParaFinsDeLimitesConstitucionalEnum: DeducoesParaFinsDeLimitesConstitucionalTipo0912;
  let tipoRestosAPagarEnum: RestosAPagarInscritosDisponibilidadesFinanceiraTipo0912;
  let tipoFluxoFinanceiroDeRecursos: FluxoFinanceiroDeRecursosTipos0912;
  let tipoJaDefinido = false;

  for (const key in mapeamentoReceitas) {
    const receitaExiste = await prisma.receita0912.findUnique({
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
    const despesaExiste = await prisma.despesa0912.findUnique({
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
    const deducaoExiste = await prisma.deducoesFundebMagisterio0912.findUnique({
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
      await prisma.controleUtilizacaoRecursos0912.findUnique({
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
      await prisma.deducoesParaFinsDeLimitesConstitucional0912.findUnique({
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
      await prisma.restosAPagarInscritosDisponibilidadesFinanceira0912.findUnique(
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
      await prisma.fluxoFinanceiroDeRecursos0912.findUnique({
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

async function findTypes1314(
  relatorio: RelatorioMunicipal1314,
  tipoReceitaDespesaLimpo: string,
) {
  let tipoReceitaEnum: ItemReceitaTipos1314;
  let tipoDespesaEnum: ItemDespesaTipos1314;
  let tipoDeducoesFinsLimiteFundebEnum: DeducoesFinsLimiteFundebTipo1314;
  let tipoIndicadoresFundebEnum: IndicadoresFundebTipo1314;
  let tipoControleUtilizacaoRecursosEnum: ControleUtilizacaoRecursosTipo1314;
  let tipoDeducoesParaFinsDeLimitesConstitucionalEnum: DeducoesParaFinsDeLimitesConstitucionalTipo1314;
  let tipoRestosAPagarEnum: RestosAPagarInscritosDisponibilidadesFinanceiraTipo1314;
  let tipoFluxoFinanceiroDeRecursos: FluxoFinanceiroDeRecursosTipos1314;
  let tipoJaDefinido = false;

  for (const key in mapeamentoReceitas1314) {
    const receitaExiste = await prisma.receita1314.findUnique({
      where: {
        relatorioMunicialId_tipo: {
          relatorioMunicialId: relatorio.id,
          tipo: mapeamentoReceitas1314[key],
        },
      },
    });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !receitaExiste) {
      tipoReceitaEnum = mapeamentoReceitas1314[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoDespesas1314) {
    if (tipoJaDefinido) {
      break;
    }
    const despesaExiste = await prisma.despesa1314.findUnique({
      where: {
        relatorioMunicialId_tipo: {
          relatorioMunicialId: relatorio.id,
          tipo: mapeamentoDespesas1314[key],
        },
      },
    });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !despesaExiste) {
      tipoDespesaEnum = mapeamentoDespesas1314[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoDeducoesFinsLimiteFundeb1314) {
    if (tipoJaDefinido) {
      break;
    }
    const deducaoExiste = await prisma.deducoesFinsLimiteFundeb1314.findUnique({
      where: {
        relatorioMunicialId_tipo: {
          relatorioMunicialId: relatorio.id,
          tipo: mapeamentoDeducoesFinsLimiteFundeb1314[key],
        },
      },
    });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !deducaoExiste) {
      tipoDeducoesFinsLimiteFundebEnum =
        mapeamentoDeducoesFinsLimiteFundeb1314[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoIndicadoresFundeb1314) {
    if (tipoJaDefinido) {
      break;
    }
    const indicadorExiste = await prisma.indicadoresFundeb1314.findUnique({
      where: {
        relatorioMunicialId_tipo: {
          relatorioMunicialId: relatorio.id,
          tipo: mapeamentoIndicadoresFundeb1314[key],
        },
      },
    });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !indicadorExiste) {
      tipoIndicadoresFundebEnum = mapeamentoIndicadoresFundeb1314[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoControleUtilizacaoRecursos1314) {
    if (tipoJaDefinido) {
      break;
    }
    const controleExiste =
      await prisma.controleUtilizacaoRecursos1314.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoControleUtilizacaoRecursos1314[key],
          },
        },
      });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !controleExiste) {
      tipoControleUtilizacaoRecursosEnum =
        mapeamentoControleUtilizacaoRecursos1314[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoDeducoesParaFinsDeLimitesConstitucional1314) {
    if (tipoJaDefinido) {
      break;
    }
    const deducaoConstitucionalExiste =
      await prisma.deducoesParaFinsDeLimitesConstitucional1314.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoDeducoesParaFinsDeLimitesConstitucional1314[key],
          },
        },
      });

    if (
      isSimilar(tipoReceitaDespesaLimpo, key, 5) &&
      !deducaoConstitucionalExiste
    ) {
      tipoDeducoesParaFinsDeLimitesConstitucionalEnum =
        mapeamentoDeducoesParaFinsDeLimitesConstitucional1314[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoRestosAPagar1314) {
    if (tipoJaDefinido) {
      break;
    }
    const restosAPagarExiste =
      await prisma.restosAPagarInscritosDisponibilidadesFinanceira1314.findUnique(
        {
          where: {
            relatorioMunicialId_tipo: {
              relatorioMunicialId: relatorio.id,
              tipo: mapeamentoRestosAPagar1314[key],
            },
          },
        },
      );

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !restosAPagarExiste) {
      tipoRestosAPagarEnum = mapeamentoRestosAPagar1314[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoFluxoFinanceiroDeRecursos1314) {
    if (tipoJaDefinido) {
      break;
    }
    const fluxoFinanceiroExiste =
      await prisma.fluxoFinanceiroDeRecursos1314.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoFluxoFinanceiroDeRecursos1314[key],
          },
        },
      });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !fluxoFinanceiroExiste) {
      tipoFluxoFinanceiroDeRecursos =
        mapeamentoFluxoFinanceiroDeRecursos1314[key];
      tipoJaDefinido = true;
      break;
    }
  }

  return {
    tipoReceitaEnum,
    tipoDespesaEnum,
    tipoDeducoesFinsLimiteFundebEnum,
    tipoIndicadoresFundebEnum,
    tipoControleUtilizacaoRecursosEnum,
    tipoDeducoesParaFinsDeLimitesConstitucionalEnum,
    tipoRestosAPagarEnum,
    tipoFluxoFinanceiroDeRecursos,
  };
}

async function findTypes1516(
  relatorio: RelatorioMunicipal1516,
  tipoReceitaDespesaLimpo: string,
) {
  let tipoReceitaEnum: ItemReceitaTipos1516;
  let tipoDespesaEnum: ItemDespesaTipos1516;
  let tipoDeducoesParaFinsLimiteFundebEnum: DeducoesFinsLimiteFundebTipo1516;
  let tipoIndicadoresFundebEnum: IndicadoresFundebTipo1516;
  let tipoControleRecursosNoExercicioSubsequenteEnum: ControleRecursosNoExercicioSubsequenteTipo1516;
  let tipoDeducoesParaFinsDeLimitesConstitucionalEnum: DeducoesParaFinsDeLimitesConstitucionalTipo1516;
  let tipoRestosAPagarInscritosDisponibilidadesFinanceiraEnum: RestosAPagarInscritosDisponibilidadesFinanceiraTipo1516;
  let tipoFluxoFinanceiroDeRecursosFundebEnum: FluxoFinanceiroDeRecursosFundebTipo1516;
  let tipoJaDefinido = false;

  for (const key in mapeamentoReceitas1516) {
    const receitaExiste = await prisma.receita1516.findUnique({
      where: {
        relatorioMunicialId_tipo: {
          relatorioMunicialId: relatorio.id,
          tipo: mapeamentoReceitas1516[key],
        },
      },
    });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !receitaExiste) {
      tipoReceitaEnum = mapeamentoReceitas1516[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoDespesas1516) {
    if (tipoJaDefinido) {
      break;
    }
    const despesaExiste = await prisma.despesa1516.findUnique({
      where: {
        relatorioMunicialId_tipo: {
          relatorioMunicialId: relatorio.id,
          tipo: mapeamentoDespesas1516[key],
        },
      },
    });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !despesaExiste) {
      tipoDespesaEnum = mapeamentoDespesas1516[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoDeducoesParaFinsLimiteFundeb1516) {
    if (tipoJaDefinido) {
      break;
    }
    const deducaoExiste = await prisma.deducoesFinsLimiteFundeb1516.findUnique({
      where: {
        relatorioMunicialId_tipo: {
          relatorioMunicialId: relatorio.id,
          tipo: mapeamentoDeducoesParaFinsLimiteFundeb1516[key],
        },
      },
    });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !deducaoExiste) {
      tipoDeducoesParaFinsLimiteFundebEnum =
        mapeamentoDeducoesParaFinsLimiteFundeb1516[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoIndicadoresFundeb1516) {
    if (tipoJaDefinido) {
      break;
    }
    const indicadorExiste = await prisma.indicadoresFundeb1516.findUnique({
      where: {
        relatorioMunicialId_tipo: {
          relatorioMunicialId: relatorio.id,
          tipo: mapeamentoIndicadoresFundeb1516[key],
        },
      },
    });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !indicadorExiste) {
      tipoIndicadoresFundebEnum = mapeamentoIndicadoresFundeb1516[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoControleRecursosNoExercicioSubsequente1516) {
    if (tipoJaDefinido) {
      break;
    }
    const controleExiste =
      await prisma.controleRecursosNoExercicioSubsequente1516.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoControleRecursosNoExercicioSubsequente1516[key],
          },
        },
      });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !controleExiste) {
      tipoControleRecursosNoExercicioSubsequenteEnum =
        mapeamentoControleRecursosNoExercicioSubsequente1516[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoDeducoesParaFinsDeLimitesConstitucional1516) {
    if (tipoJaDefinido) {
      break;
    }
    const deducaoConstitucionalExiste =
      await prisma.deducoesParaFinsDeLimitesConstitucional1516.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoDeducoesParaFinsDeLimitesConstitucional1516[key],
          },
        },
      });

    if (
      isSimilar(tipoReceitaDespesaLimpo, key, 5) &&
      !deducaoConstitucionalExiste
    ) {
      tipoDeducoesParaFinsDeLimitesConstitucionalEnum =
        mapeamentoDeducoesParaFinsDeLimitesConstitucional1516[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoFluxoFinanceiroDeRecursosFundeb1516) {
    if (tipoJaDefinido) {
      break;
    }
    const fluxoExiste =
      await prisma.fluxoFinanceiroDeRecursosFundeb1516.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoFluxoFinanceiroDeRecursosFundeb1516[key],
          },
        },
      });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !fluxoExiste) {
      tipoFluxoFinanceiroDeRecursosFundebEnum =
        mapeamentoFluxoFinanceiroDeRecursosFundeb1516[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoRestosAPagarInscritosDisponibilidadesFinanceira1516) {
    if (tipoJaDefinido) {
      break;
    }
    const restoAPagarExiste =
      await prisma.restosAPagarInscritosDisponibilidadesFinanceira1516.findUnique(
        {
          where: {
            relatorioMunicialId_tipo: {
              relatorioMunicialId: relatorio.id,
              tipo: mapeamentoRestosAPagarInscritosDisponibilidadesFinanceira1516[
                key
              ],
            },
          },
        },
      );

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !restoAPagarExiste) {
      tipoRestosAPagarInscritosDisponibilidadesFinanceiraEnum =
        mapeamentoRestosAPagarInscritosDisponibilidadesFinanceira1516[key];
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

async function findTypes1718(
  relatorio: RelatorioMunicipal1718,
  tipoReceitaDespesaLimpo: string,
) {
  let tipoReceitaEnum: ItemReceitaTipos1718;
  let tipoDespesaEnum: ItemDespesaTipos1718;
  let tipoDeducoesParaFinsLimiteFundebEnum: DeducoesFinsLimiteFundebTipo1718;
  let tipoIndicadoresFundebEnum: IndicadoresFundebTipo1718;
  let tipoControleRecursosNoExercicioSubsequenteEnum: ControleRecursosNoExercicioSubsequenteTipo1718;
  let tipoDeducoesParaFinsDeLimitesConstitucionalEnum: DeducoesParaFinsDeLimitesConstitucionalTipo1718;
  let tipoRestosAPagarInscritosDisponibilidadesFinanceiraEnum: RestosAPagarInscritosDisponibilidadesFinanceiraTipo1718;
  let tipoControleDisponibilidadeFinanceiraEnum: ControleDisponibilidadeFinanceiraTipo1718;
  let tipoJaDefinido = false;

  for (const key in mapeamentoReceitas1718) {
    const receitaExiste = await prisma.receita1718.findUnique({
      where: {
        relatorioMunicialId_tipo: {
          relatorioMunicialId: relatorio.id,
          tipo: mapeamentoReceitas1718[key],
        },
      },
    });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !receitaExiste) {
      tipoReceitaEnum = mapeamentoReceitas1718[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoDespesas1718) {
    if (tipoJaDefinido) {
      break;
    }
    const despesaExiste = await prisma.despesa1718.findUnique({
      where: {
        relatorioMunicialId_tipo: {
          relatorioMunicialId: relatorio.id,
          tipo: mapeamentoDespesas1718[key],
        },
      },
    });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !despesaExiste) {
      tipoDespesaEnum = mapeamentoDespesas1718[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoDeducoesParaFinsLimiteFundeb1718) {
    if (tipoJaDefinido) {
      break;
    }
    const deducaoExiste = await prisma.deducoesFinsLimiteFundeb1718.findUnique({
      where: {
        relatorioMunicialId_tipo: {
          relatorioMunicialId: relatorio.id,
          tipo: mapeamentoDeducoesParaFinsLimiteFundeb1718[key],
        },
      },
    });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !deducaoExiste) {
      tipoDeducoesParaFinsLimiteFundebEnum =
        mapeamentoDeducoesParaFinsLimiteFundeb1718[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoIndicadoresFundeb1718) {
    if (tipoJaDefinido) {
      break;
    }
    const indicadorExiste = await prisma.indicadoresFundeb1718.findUnique({
      where: {
        relatorioMunicialId_tipo: {
          relatorioMunicialId: relatorio.id,
          tipo: mapeamentoIndicadoresFundeb1718[key],
        },
      },
    });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !indicadorExiste) {
      tipoIndicadoresFundebEnum = mapeamentoIndicadoresFundeb1718[key];
      tipoJaDefinido = true;
      break;
    }
  }
  for (const key in mapeamentoControleRecursosNoExercicioSubsequente1718) {
    if (tipoJaDefinido) {
      break;
    }
    const controleExiste =
      await prisma.controleRecursosNoExercicioSubsequente1718.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoControleRecursosNoExercicioSubsequente1718[key],
          },
        },
      });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !controleExiste) {
      tipoControleRecursosNoExercicioSubsequenteEnum =
        mapeamentoControleRecursosNoExercicioSubsequente1718[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoDeducoesParaFinsDeLimitesConstitucional1718) {
    if (tipoJaDefinido) {
      break;
    }
    const deducaoConstitucionalExiste =
      await prisma.deducoesParaFinsDeLimitesConstitucional1718.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoDeducoesParaFinsDeLimitesConstitucional1718[key],
          },
        },
      });

    if (
      isSimilar(tipoReceitaDespesaLimpo, key, 5) &&
      !deducaoConstitucionalExiste
    ) {
      tipoDeducoesParaFinsDeLimitesConstitucionalEnum =
        mapeamentoDeducoesParaFinsDeLimitesConstitucional1718[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoControleDisponibilidadeFinanceira1718) {
    if (tipoJaDefinido) {
      break;
    }
    const fluxoExiste =
      await prisma.controleDisponibilidadeFinanceira1718.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoControleDisponibilidadeFinanceira1718[key],
          },
        },
      });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !fluxoExiste) {
      tipoControleDisponibilidadeFinanceiraEnum =
        mapeamentoControleDisponibilidadeFinanceira1718[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoRestosAPagarInscritosDisponibilidadesFinanceira1718) {
    if (tipoJaDefinido) {
      break;
    }
    const restoAPagarExiste =
      await prisma.restosAPagarInscritosDisponibilidadesFinanceira1718.findUnique(
        {
          where: {
            relatorioMunicialId_tipo: {
              relatorioMunicialId: relatorio.id,
              tipo: mapeamentoRestosAPagarInscritosDisponibilidadesFinanceira1718[
                key
              ],
            },
          },
        },
      );

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !restoAPagarExiste) {
      tipoRestosAPagarInscritosDisponibilidadesFinanceiraEnum =
        mapeamentoRestosAPagarInscritosDisponibilidadesFinanceira1718[key];
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
    tipoControleDisponibilidadeFinanceiraEnum,
  };
}

async function findTypes1920(
  relatorio: RelatorioMunicipal1920,
  tipoReceitaDespesaLimpo: string,
) {
  let tipoReceitaEnum: ItemReceitaTipos1920;
  let tipoDespesaEnum: ItemDespesaTipos1920;
  let tipoDeducoesParaFinsLimiteFundebEnum: DeducoesFinsLimiteFundebTipo1920;
  let tipoIndicadoresFundebEnum: IndicadoresFundebTipo1920;
  let tipoControleRecursosNoExercicioSubsequenteEnum: ControleRecursosNoExercicioSubsequenteTipo1920;
  let tipoDeducoesParaFinsDeLimitesConstitucionalEnum: DeducoesParaFinsDeLimitesConstitucionalTipo1920;
  let tipoRestosAPagarInscritosDisponibilidadesFinanceiraEnum: RestosAPagarInscritosDisponibilidadesFinanceiraTipo1920;
  let tipoControleDisponibilidadeFinanceiraEnum: ControleDisponibilidadeFinanceiraTipo1920;
  let tipoJaDefinido = false;

  for (const key in mapeamentoReceitas1920) {
    const receitaExiste = await prisma.receita1920.findUnique({
      where: {
        relatorioMunicialId_tipo: {
          relatorioMunicialId: relatorio.id,
          tipo: mapeamentoReceitas1920[key],
        },
      },
    });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !receitaExiste) {
      tipoReceitaEnum = mapeamentoReceitas1920[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoDespesas1920) {
    if (tipoJaDefinido) {
      break;
    }
    const despesaExiste = await prisma.despesa1920.findUnique({
      where: {
        relatorioMunicialId_tipo: {
          relatorioMunicialId: relatorio.id,
          tipo: mapeamentoDespesas1920[key],
        },
      },
    });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !despesaExiste) {
      tipoDespesaEnum = mapeamentoDespesas1920[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoDeducoesParaFinsLimiteFundeb1920) {
    if (tipoJaDefinido) {
      break;
    }
    const deducaoExiste = await prisma.deducoesFinsLimiteFundeb1920.findUnique({
      where: {
        relatorioMunicialId_tipo: {
          relatorioMunicialId: relatorio.id,
          tipo: mapeamentoDeducoesParaFinsLimiteFundeb1920[key],
        },
      },
    });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !deducaoExiste) {
      tipoDeducoesParaFinsLimiteFundebEnum =
        mapeamentoDeducoesParaFinsLimiteFundeb1920[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoIndicadoresFundeb1920) {
    if (tipoJaDefinido) {
      break;
    }
    const indicadorExiste = await prisma.indicadoresFundeb1920.findUnique({
      where: {
        relatorioMunicialId_tipo: {
          relatorioMunicialId: relatorio.id,
          tipo: mapeamentoIndicadoresFundeb1920[key],
        },
      },
    });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !indicadorExiste) {
      tipoIndicadoresFundebEnum = mapeamentoIndicadoresFundeb1920[key];
      tipoJaDefinido = true;
      break;
    }
  }
  for (const key in mapeamentoControleRecursosNoExercicioSubsequente1920) {
    if (tipoJaDefinido) {
      break;
    }
    const controleExiste =
      await prisma.controleRecursosNoExercicioSubsequente1920.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoControleRecursosNoExercicioSubsequente1920[key],
          },
        },
      });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !controleExiste) {
      tipoControleRecursosNoExercicioSubsequenteEnum =
        mapeamentoControleRecursosNoExercicioSubsequente1920[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoDeducoesParaFinsDeLimitesConstitucional1920) {
    if (tipoJaDefinido) {
      break;
    }
    const deducaoConstitucionalExiste =
      await prisma.deducoesParaFinsDeLimitesConstitucional1920.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoDeducoesParaFinsDeLimitesConstitucional1920[key],
          },
        },
      });

    if (
      isSimilar(tipoReceitaDespesaLimpo, key, 5) &&
      !deducaoConstitucionalExiste
    ) {
      tipoDeducoesParaFinsDeLimitesConstitucionalEnum =
        mapeamentoDeducoesParaFinsDeLimitesConstitucional1920[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoControleDisponibilidadeFinanceira1920) {
    if (tipoJaDefinido) {
      break;
    }
    const fluxoExiste =
      await prisma.controleDisponibilidadeFinanceira1920.findUnique({
        where: {
          relatorioMunicialId_tipo: {
            relatorioMunicialId: relatorio.id,
            tipo: mapeamentoControleDisponibilidadeFinanceira1920[key],
          },
        },
      });

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !fluxoExiste) {
      tipoControleDisponibilidadeFinanceiraEnum =
        mapeamentoControleDisponibilidadeFinanceira1920[key];
      tipoJaDefinido = true;
      break;
    }
  }

  for (const key in mapeamentoRestosAPagarInscritosDisponibilidadesFinanceira1920) {
    if (tipoJaDefinido) {
      break;
    }
    const restoAPagarExiste =
      await prisma.restosAPagarInscritosDisponibilidadesFinanceira1920.findUnique(
        {
          where: {
            relatorioMunicialId_tipo: {
              relatorioMunicialId: relatorio.id,
              tipo: mapeamentoRestosAPagarInscritosDisponibilidadesFinanceira1920[
                key
              ],
            },
          },
        },
      );

    if (isSimilar(tipoReceitaDespesaLimpo, key, 5) && !restoAPagarExiste) {
      tipoRestosAPagarInscritosDisponibilidadesFinanceiraEnum =
        mapeamentoRestosAPagarInscritosDisponibilidadesFinanceira1920[key];
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
    tipoControleDisponibilidadeFinanceiraEnum,
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
  const seventhCellValue = row.getCell(7).value;
  const seventhCellNumericValue = seventhCellValue
    ? parseFloat(
        seventhCellValue
          .toString()
          .replace(/[^\d,-]/g, '')
          .replace(',', '.'),
      )
    : 0;
  const eighthCellValue = row.getCell(8).value;
  const eighthCellNumericValue = eighthCellValue
    ? parseFloat(
        eighthCellValue
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
    seventhCellNumericValue,
    eighthCellNumericValue,
  };
}

// seedDatabaseZeroSix()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
async function main() {
  try {
    await seedDatabase06();
    await seedDatabase0708();
    await seedDatabase0912();
    await seedDatabase1314();
    await seedDatabase1516();
    await seedDatabase1718();
    await seedDatabase1920();
    await seedDatabase2122();
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
