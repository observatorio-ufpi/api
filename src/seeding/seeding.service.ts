import { Injectable } from '@nestjs/common';
import { ItemDespesaTipos, ItemReceitaTipos } from '@prisma/client';
import * as ExcelJS from 'exceljs';
import * as fs from 'fs';
import * as path from 'path';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SeedingService {
  constructor(private readonly prismaService: PrismaService) {}

  async seedDatabaseTenToFourteen() {
    const mapeamentoReceitas: {
      [key: string]: ItemReceitaTipos;
    } = {
      '1- RECEITA DE IMPOSTOS': ItemReceitaTipos.RECEITA_DE_IMPOSTOS,
      '1.1- Receita Resultante do Imposto sobre a Propriedade Predial e Territorial Urbana - IPTU':
        ItemReceitaTipos.IPTU_RECEITA_RESULTANTE,
      '1.1.1- IPTU': ItemReceitaTipos.IPTU,
      '1.1.2- Multas, Juros de Mora e Outros Encargos do IPTU':
        ItemReceitaTipos.IPTU_MULTAS_JUROS_MORA,
      '1.1.3- Dívida Ativa do IPTU': ItemReceitaTipos.IPTU_DIVIDA_ATIVA,
      '1.1.4- Multas, Juros de Mora, Atualização Monetária e Outros Encargos da Dívida Ativa do IPTU':
        ItemReceitaTipos.IPTU_MULTAS_JUROS_MORA_DIVIDA_ATIVA,
      '1.1.5- (–) Deduções da Receita do IPTU':
        ItemReceitaTipos.IPTU_DEDUCOES_RECEITA,
      '1.2- Receita Resultante do Imposto sobre Transmissão Inter Vivos – ITBI':
        ItemReceitaTipos.ITBI_RECEITA_RESULTANTE,
      '1.2.1- ITBI': ItemReceitaTipos.ITBI,
      '1.2.2- Multas, Juros de Mora e Outros Encargos do ITBI':
        ItemReceitaTipos.ITBI_MULTAS_JUROS_MORA,
      '1.2.3- Dívida Ativa do ITBI': ItemReceitaTipos.ITBI_DIVIDA_ATIVA,
      '1.2.4- Multas, Juros de Mora, Atualização Monetária e Outros Encargos da Dívida Ativa do ITBI':
        ItemReceitaTipos.ITBI_MULTAS_JUROS_MORA_DIVIDA_ATIVA,
      '1.2.5- (–) Deduções da Receita do ITBI':
        ItemReceitaTipos.ITBI_DEDUCOES_RECEITA,
      '1.3- Receita Resultante do Imposto sobre Serviços de Qualquer Natureza – ISS':
        ItemReceitaTipos.ISS_RECEITA_RESULTANTE,
      '1.3.1- ISS': ItemReceitaTipos.ISS,
      '1.3.2- Multas, Juros de Mora e Outros Encargos do ISS':
        ItemReceitaTipos.ISS_MULTAS_JUROS_MORA,
      '1.3.3- Dívida Ativa do ISS': ItemReceitaTipos.ISS_DIVIDA_ATIVA,
      '1.3.4- Multas, Juros de Mora, Atualização Monetária e Outros Encargos da Dívida Ativa do ISS':
        ItemReceitaTipos.ISS_MULTAS_JUROS_MORA_DIVIDA_ATIVA,
      '1.3.5- (–) Deduções da Receita do ISS':
        ItemReceitaTipos.ISS_DEDUCOES_RECEITA,
      '1.4- Receita Resultante do Imposto de Renda Retido na Fonte – IRRF':
        ItemReceitaTipos.IRRF_RECEITA_RESULTANTE,
      '1.4.1- IRRF': ItemReceitaTipos.IRRF,
      '1.4.2- Multas, Juros de Mora e Outros Encargos do IRRF':
        ItemReceitaTipos.IRRF_MULTAS_JUROS_MORA,
      '1.4.3- Dívida Ativa do IRRF': ItemReceitaTipos.IRRF_DIVIDA_ATIVA,
      '1.4.4- Multas, Juros de Mora, Atualização Monetária e Outros Encargos da Dívida Ativa do IRRF':
        ItemReceitaTipos.IRRF_MULTAS_JUROS_MORA_DIVIDA_ATIVA,
      '1.4.5- (–) Deduções da Receita do IRRF':
        ItemReceitaTipos.IRRF_DEDUCOES_RECEITA,
      '1.5- Receita Resultante do Imposto Territorial Rural – ITR (CF, art. 153, §4º, inciso III)':
        ItemReceitaTipos.ITR_RECEITA_RESULTANTE,
      '1.5.1- ITR': ItemReceitaTipos.ITR,
      '1.5.2- Multas, Juros de Mora e Outros Encargos do ITR':
        ItemReceitaTipos.ITR_MULTAS_JUROS_MORA,
      '1.5.3- Dívida Ativa do ITR': ItemReceitaTipos.ITR_DIVIDA_ATIVA,
      '1.5.4- Multas, Juros de Mora, Atualização Monetária e Outros Encargos da Dívida Ativa do ITR':
        ItemReceitaTipos.ITR_MULTAS_JUROS_MORA_DIVIDA_ATIVA,
      '1.5.5- (–) Deduções da Receita do ITR':
        ItemReceitaTipos.ITR_DEDUCOES_RECEITA,
      '2- RECEITA DE TRANSFERÊNCIAS CONSTITUCIONAIS E LEGAIS':
        ItemReceitaTipos.RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
      '2.1- Cota-Parte FPM': ItemReceitaTipos.COTA_PARTE_FPM,
      '2.1.1- Parcela referente à CF, art. 159, I, alínea b':
        ItemReceitaTipos.COTA_PARTE_FPM_PARCELA_CF_ART_159_I_ALINEA_B,
      '2.1.2- Parcela referente à CF, art. 159, I, alínea d':
        ItemReceitaTipos.COTA_PARTE_FPM_PARCELA_CF_ART_159_I_ALINEA_D,
      '2.2- Cota-Parte ICMS': ItemReceitaTipos.COTA_PARTE_ICMS,
      '2.3- ICMS-Desoneração – L.C. no87/1996':
        ItemReceitaTipos.ICMS_DESONERACAO_LC_87_1996,
      '2.4- Cota-Parte IPI-Exportação':
        ItemReceitaTipos.COTA_PARTE_IPI_EXPORTACAO,
      '2.5- Cota-Parte ITR': ItemReceitaTipos.COTA_PARTE_ITR,
      '2.6- Cota-Parte IPVA': ItemReceitaTipos.COTA_PARTE_IPVA,
      '2.7- Cota-Parte IOF-Ouro': ItemReceitaTipos.COTA_PARTE_IOF_OURO,
      '3- TOTAL DA RECEITA DE IMPOSTOS (1 + 2)':
        ItemReceitaTipos.TOTAL_RECEITA_IMPOSTOS,
      '4- RECEITA DA APLICAÇÃO FINANCEIRA DE OUTROS RECURSOS DE IMPOSTOS VINCULADOS AO ENSINO':
        ItemReceitaTipos.RECEITA_APLICACAO_FINANCEIRA,
      '5- RECEITA DE TRANSFERÊNCIAS DO FNDE':
        ItemReceitaTipos.RECEITA_TRANSFERENCIAS_FNDE,
      '5.1- Transferências do Salário-Educação':
        ItemReceitaTipos.TRANSFERENCIAS_SALARIO_EDUCACAO,
      '5.2- Outras Transferências do FNDE':
        ItemReceitaTipos.OUTRAS_TRANSFERENCIAS_FNDE,
      '5.3- Aplicação Financeira dos Recursos do FNDE':
        ItemReceitaTipos.APLICACAO_FINANCEIRA_FNDE,
      '6- RECEITA DE TRANSFERÊNCIAS DE CONVÊNIOS':
        ItemReceitaTipos.RECEITA_TRANSFERENCIAS_CONVENIOS,
      '6.1- Transferências de Convênios':
        ItemReceitaTipos.TRANSFERENCIAS_CONVENIOS,
      '6.2- Aplicação Financeira dos Recursos de Convênios':
        ItemReceitaTipos.APLICACAO_FINANCEIRA_CONVENIOS,
      '7- RECEITA DE OPERAÇÕES DE CRÉDITO':
        ItemReceitaTipos.RECEITA_OPERACOES_CREDITO,
      '8- OUTRAS RECEITAS PARA FINANCIAMENTO DO ENSINO':
        ItemReceitaTipos.OUTRAS_RECEITAS_FINANCIAMENTO_ENSINO,
      '9- TOTAL DAS RECEITAS ADICIONAIS PARA FINANCIAMENTO DO ENSINO (4 + 5 + 6 + 7 + 8)':
        ItemReceitaTipos.TOTAL_RECEITAS_ADICIONAIS_FINANCIAMENTO_ENSINO,
      '10- RECEITAS DESTINADAS AO FUNDEB':
        ItemReceitaTipos.RECEITAS_DESTINADAS_AO_FUNDEB,
      '10.1- Cota-Parte FPM Destinada ao FUNDEB – (20% de 2.1.1)':
        ItemReceitaTipos.COTA_PARTE_FPM_DESTINADA_AO_FUNDEB,
      '10.2- Cota-Parte ICMS Destinada ao FUNDEB – (20% de 2.2)':
        ItemReceitaTipos.COTA_PARTE_ICMS_DESTINADA_AO_FUNDEB,
      '10.3- ICMS-Desoneração Destinada ao FUNDEB – (20% de 2.3)':
        ItemReceitaTipos.ICMS_DESONERACAO_DESTINADA_AO_FUNDEB,
      '10.4- Cota-Parte IPI-Exportação Destinada ao FUNDEB – (20% de 2.4)':
        ItemReceitaTipos.COTA_PARTE_IPI_EXPORTACAO_DESTINADA_AO_FUNDEB,
      '10.5- Cota-Parte ITR ou ITR Arrecadados Destinados ao FUNDEB – (20% de (1.5 + 2.5))':
        ItemReceitaTipos.COTA_PARTE_ITR_OU_ITR_ARRECADADOS_DESTINADOS_AO_FUNDEB,
      '10.6- Cota-Parte IPVA Destinada ao FUNDEB – (20% de 2.6)':
        ItemReceitaTipos.COTA_PARTE_IPVA_DESTINADA_AO_FUNDEB,
      '11- RECEITAS RECEBIDAS DO FUNDEB':
        ItemReceitaTipos.RECEITAS_RECEBIDAS_DO_FUNDEB,
      '11.1- Transferências de Recursos do FUNDEB':
        ItemReceitaTipos.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
      '11.2- Complementação da União ao FUNDEB':
        ItemReceitaTipos.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
      '11.3- Receita de Aplicação Financeira dos Recursos do FUNDEB':
        ItemReceitaTipos.RECEITA_DE_APLICACAO_FINANCEIRA_DOS_RECURSOS_DO_FUNDEB,
      '12- RESULTADO LÍQUIDO DAS TRANSFERÊNCIAS DO FUNDEB (11.1 – 10)':
        ItemReceitaTipos.RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB,
      '22- IMPOSTOS E TRANSFERÊNCIAS DESTINADAS MDE (25% de 3)3':
        ItemReceitaTipos.IMPOSTOS_E_TRANSFERENCIAS_DESTINADAS_MDE,
    };

    const mapeamentoDespesas: {
      [key: string]: ItemDespesaTipos;
    } = {
      '13- PAGAMENTO DOS PROFISSIONAIS DO MAGISTÉRIO':
        ItemDespesaTipos.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO,
      '13.1- Com Educação Infantil':
        ItemDespesaTipos.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO_EDUCACAO_INFANTIL,
      '13.2- Com Ensino Fundamental':
        ItemDespesaTipos.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO_ENSINO_FUNDAMENTAL,
      '14- OUTRAS DESPESAS': ItemDespesaTipos.FUNDEB_OUTRAS_DESPESAS,
      '14.1- Com Educação Infantil':
        ItemDespesaTipos.FUNDEB_OUTRAS_DESPESAS_EDUCACAO_INFANTIL,
      '14.2- Com Ensino Fundamental':
        ItemDespesaTipos.FUNDEB_OUTRAS_DESPESAS_ENSINO_FUNDAMENTAL,
      '15- TOTAL DAS DESPESAS DO FUNDEB (13 + 14)':
        ItemDespesaTipos.FUNDEB_TOTAL_DESPESAS_FUNDEB,
      '23- EDUCAÇÃO INFANTIL': ItemDespesaTipos.MDE_DESPESAS_EDUCACAO_INFANTIL,
      '23.1- Despesas Custeadas com Recursos do FUNDEB':
        ItemDespesaTipos.MDE_EDUCACAO_INFANTIL_DESPESAS_CUSTEADAS_FUNDEB,
      '23.2- Despesas Custeadas com Outros Recursos de Impostos':
        ItemDespesaTipos.MDE_EDUCACAO_INFANTIL_DESPESAS_CUSTEADAS_OUTROS_IMPOSTOS,
      '24- ENSINO FUNDAMENTAL':
        ItemDespesaTipos.MDE_DESPESAS_ENSINO_FUNDAMENTAL,
      '24.1- Despesas Custeadas com Recursos do FUNDEB':
        ItemDespesaTipos.MDE_ENSINO_FUNDAMENTAL_DESPESAS_CUSTEADAS_FUNDEB,
      '24.2- Despesas Custeadas com Outros Recursos de Impostos':
        ItemDespesaTipos.MDE_ENSINO_FUNDAMENTAL_DESPESAS_CUSTEADAS_OUTROS_IMPOSTOS,
      '25- ENSINO MÉDIO': ItemDespesaTipos.MDE_DESPESAS_ENSINO_MEDIO,
      '26- ENSINO SUPERIOR': ItemDespesaTipos.MDE_DESPESAS_ENSINO_SUPERIOR,
      '27- ENSINO PROFISSIONAL NÃO INTEGRADO AO ENSINO REGULAR':
        ItemDespesaTipos.MDE_DESPESAS_ENSINO_PROFISSIONAL_NAO_INTEGRADO_ENSINO_REGULAR,
      '28- OUTRAS': ItemDespesaTipos.MDE_OUTRAS_DESPESAS,
      '29- TOTAL DAS DESPESAS COM AÇÕES TÍPICAS MDE (23 + 24 + 25 + 26 + 27 + 28)':
        ItemDespesaTipos.MDE_TOTAL_DESPESAS_ACOES_TIPICAS,
      '40- DESPESAS CUSTEADAS COM A APLICAÇÃO FINANCEIRA DE OUTROS RECURSOS DE IMPOSTOS VINCULADOS AO ENSINO':
        ItemDespesaTipos.DESPESAS_CUSTEADAS_APLICACAO_FINANCEIRA_VINCULADAS_ENSINO,
      '41- DESPESAS CUSTEADAS COM A CONTRIBUIÇÃO SOCIAL DO SALÁRIO-EDUCAÇÃO':
        ItemDespesaTipos.DESPESAS_CUSTEADAS_CONTRIBUICAO_SOCIAL_SALARIO_EDUCACAO,
      '42- DESPESAS CUSTEADAS COM OPERAÇÕES DE CRÉDITO':
        ItemDespesaTipos.DESPESAS_CUSTEADAS_OPERACOES_CREDITO,
      '43- DESPESAS CUSTEADAS COM OUTRAS RECEITAS PARA FINANCIAMENTO DO ENSINO':
        ItemDespesaTipos.DESPESAS_CUSTEADAS_OUTRAS_RECEITAS_FINANCIAMENTO_ENSINO,
      '44- TOTAL DAS OUTRAS DESPESAS CUSTEADAS COM RECEITAS ADICIONAIS PARA FINANCIAMENTO DO ENS (40 + 41 + 42 + 43)':
        ItemDespesaTipos.TOTAL_OUTRAS_DESPESAS_CUSTEADAS_FINANCIAMENTO_ENSINO,
      '45- TOTAL GERAL DAS DESPESAS COM MDE (29 + 44)':
        ItemDespesaTipos.TOTAL_GERAL_DESPESAS_MDE,
    };

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

              let tipoReceitaEnum;
              let tipoDespesaEnum;

              for (const key in mapeamentoReceitas) {
                const receitaExiste =
                  await this.prismaService.receita.findUnique({
                    where: {
                      relatorioMunicialId_tipo: {
                        relatorioMunicialId: relatorio.id,
                        tipo: mapeamentoReceitas[key],
                      },
                    },
                  });

                if (
                  this.isSimilar(tipoReceitaDespesaLimpo, key, 5) &&
                  !receitaExiste
                ) {
                  tipoReceitaEnum = mapeamentoReceitas[key];
                  break;
                }
              }

              for (const key in mapeamentoDespesas) {
                const despesaExiste =
                  await this.prismaService.despesa.findUnique({
                    where: {
                      relatorioMunicialId_tipo: {
                        relatorioMunicialId: relatorio.id,
                        tipo: mapeamentoDespesas[key],
                      },
                    },
                  });

                if (
                  this.isSimilar(tipoReceitaDespesaLimpo, key, 5) &&
                  !despesaExiste
                ) {
                  tipoDespesaEnum = mapeamentoDespesas[key];
                  break;
                }
              }

              if (tipoReceitaEnum) {
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

    // Initialize matrix with distances from empty string
    for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }

    // Calculate Levenshtein distance
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, // Substitution
            matrix[i][j - 1] + 1, // Insertion
            matrix[i - 1][j] + 1, // Deletion
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
}
