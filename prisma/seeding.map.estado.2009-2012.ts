import {
  ControleUtilizacaoRecursosEstadoTipo0912,
  DeducoesFundebMagisterioEstadoTipo0912,
  DeducoesParaFinsDeLimitesConstitucionalEstadoTipo0912,
  FluxoFinanceiroDeRecursosEstadoTipos0912,
  ItemDespesaEstadoTipos0912,
  ItemReceitaEstadoTipos0912,
  RestosAPagarInscritosDisponibilidadesFinanceiraEstadoTipo0912,
} from '@prisma/client';

export const mapeamentoReceitasEstadual0912: {
  [key: string]: ItemReceitaEstadoTipos0912;
} = {
  '1 - RECEITAS DE IMPOSTOS': ItemReceitaEstadoTipos0912.RECEITA_DE_IMPOSTOS,
  '1.1- Receita Resultante do Imposto sobre a Circulação de Mercadorias e Serviços de Transporte Interestadual e Intermunicipal e de Comunicação - ICMS':
    ItemReceitaEstadoTipos0912.RECEITA_RESULTANTE_DO_ICMS_DE_TRANSPORTE_E_COMUNICACAO,
  '1.1.1- ICMS': ItemReceitaEstadoTipos0912.ICMS,
  '1.1.2- Multas, Juros de Mora e Outros Encargos do ICMS':
    ItemReceitaEstadoTipos0912.MULTAS_JUROS_MORA_OUTROS_ENCARGOS_DO_ICMS,
  '1.1.3- Dívida Ativa do ICM': ItemReceitaEstadoTipos0912.DIVIDA_ATIVA_DO_ICMS,
  '1.1.4- Multas, Juros de Mora, Atualização Monetária e Outros Encargos da Dívida Ativa do ICMS':
    ItemReceitaEstadoTipos0912.MULTAS_JUROS_MORA_ATUALIZACAO_MONETARIA_DIVIDA_ATIVA_ICMS,
  '1.1.5- (-) Deduções da Receita do ICMS':
    ItemReceitaEstadoTipos0912.DEDUCOES_DA_RECEITA_DO_ICMS,
  '1.1.6- Adicional de até 2% do ICMS destinado ao Fundo de Combate à Pobreza (ADCT, art. 82, §1º)':
    ItemReceitaEstadoTipos0912.ADICIONAL_ATE_2_PORCENTO_DO_ICMS_DESTINADO_AO_COMBATE_A_POBREZA,
  '1.1.7- (-) Deduções da Receita do Adicional de até 2% do ICMS':
    ItemReceitaEstadoTipos0912.DEDUCOES_DA_RECEITA_DO_ADICIONAL_DE_ATE_2_PORCENTO_DO_ICMS,
  '1.2- Receita Resultante do Imposto de Transmissão Causa Mortis e Doação de Bens e Direitos - ITCD':
    ItemReceitaEstadoTipos0912.RECEITA_RESULTANTE_DO_ITCD,
  '1.2.1- ITCD': ItemReceitaEstadoTipos0912.ITCD,
  '1.2.2- Multas, Juros de Mora e Outros Encargos do ITCD':
    ItemReceitaEstadoTipos0912.MULTAS_JUROS_MORA_OUTROS_ENCARGOS_DO_ITCD,
  '1.2.3- Dívida Ativa do ITCD':
    ItemReceitaEstadoTipos0912.DIVIDA_ATIVA_DO_ITCD,
  '1.2.4- Multas, Juros de Mora, Atualização Monetária e Outros Encargos da Dívida Ativa do ITCD':
    ItemReceitaEstadoTipos0912.MULTAS_JUROS_MORA_ATUALIZACAO_MONETARIA_DIVIDA_ATIVA_ITCD,
  '1.2.5- (-) Deduções da Receita do ITCD':
    ItemReceitaEstadoTipos0912.DEDUCOES_DA_RECEITA_DO_ITCD,
  '1.3- Receita Resultante do Imposto sobre a Propriedade de Veículos Automotores - IPVA':
    ItemReceitaEstadoTipos0912.RECEITA_RESULTANTE_DO_IPVA,
  '1.3.1- IPVA': ItemReceitaEstadoTipos0912.IPVA,
  '1.3.2- Multas, Juros de Mora e Outros Encargos do IPVA':
    ItemReceitaEstadoTipos0912.MULTAS_JUROS_MORA_OUTROS_ENCARGOS_DO_IPVA,
  '1.3.3- Dívida Ativa do IPVA':
    ItemReceitaEstadoTipos0912.DIVIDA_ATIVA_DO_IPVA,
  '1.3.4- Multas, Juros de Mora, Atualização Monetária e Outros Encargos da Dívida Ativa do IPVA':
    ItemReceitaEstadoTipos0912.MULTAS_JUROS_MORA_ATUALIZACAO_MONETARIA_DIVIDA_ATIVA_IPVA,
  '1.3.5- (-) Deduções da Receita do IPVA':
    ItemReceitaEstadoTipos0912.DEDUCOES_DA_RECEITA_DO_IPVA,
  '1.4- Receita Resultante do Imposto sobre a Renda e Proventos de Qualquer Natureza Retido na Fonte - IRRF':
    ItemReceitaEstadoTipos0912.RECEITA_RESULTANTE_DO_IRRF,
  '1.4.1- IRRF': ItemReceitaEstadoTipos0912.IRRF,
  '1.4.2- Multas, Juros de Mora e Outros Encargos do IRRF':
    ItemReceitaEstadoTipos0912.MULTAS_JUROS_MORA_OUTROS_ENCARGOS_DO_IRRF,
  '1.4.3- Dívida Ativa do IRRF':
    ItemReceitaEstadoTipos0912.DIVIDA_ATIVA_DO_IRRF,
  '1.4.4- Multas, Juros de Mora, Atualização Monetária e Outros Encargos da Dívida Ativa do IRRF':
    ItemReceitaEstadoTipos0912.MULTAS_JUROS_MORA_ATUALIZACAO_MONETARIA_DIVIDA_ATIVA_IRRF,
  '1.4.5- (-) Deduções da Receita do IRRF':
    ItemReceitaEstadoTipos0912.DEDUCOES_DA_RECEITA_DO_IRRF,
  '2 - RECEITAS DE TRANSFERÊNCIAS CONSTITUCIONAIS E LEGAIS':
    ItemReceitaEstadoTipos0912.RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
  '2.1- Cota-Parte FPE': ItemReceitaEstadoTipos0912.COTA_PARTE_FPE,
  '2.2- ICMS-Desoneração – L.C. nº87/1996':
    ItemReceitaEstadoTipos0912.ICMS_DESONERACAO,
  '2.3- Cota-Parte IPI-Exportação':
    ItemReceitaEstadoTipos0912.COTA_PARTE_IPI_EXPORTACAO,
  '2.4- Cota-Parte IOF-Ouro': ItemReceitaEstadoTipos0912.COTA_PARTE_IOF_OURO,
  '3- TOTAL DA RECEITA DE IMPOSTOS (1 + 2)':
    ItemReceitaEstadoTipos0912.TOTAL_RECEITA_IMPOSTOS,
  '4- PARCELA DO ICMS REPASSADA AOS MUNICÍPIOS (25% de (1.1 – (1.1.6 – 1.1.7)))':
    ItemReceitaEstadoTipos0912.PARCELA_ICMS_REPASSADA_AOS_MUNICIPIOS,
  '5- PARCELA DO IPVA REPASSADA AOS MUNICÍPIOS (50% de 1.3)':
    ItemReceitaEstadoTipos0912.PARCELA_IPVA_REPASSADA_AOS_MUNICIPIOS,
  '6- PARCELA DA COTA-PARTE DO IPI-EXPORTAÇÃO REPASSADA AOS MUNICÍPIOS (25% de 2.3)':
    ItemReceitaEstadoTipos0912.PARCELA_COTA_PARTE_IPI_EXPORTACAO_REPASSADA_AOS_MUNICIPIOS,
  '7- TOTAL DAS DEDUÇÕES DE TRANSFERÊNCIAS CONSTITUCIONAIS (4 + 5 + 6)':
    ItemReceitaEstadoTipos0912.TOTAL_DAS_DEDUCOES_DE_TRANSFERENCIAS_CONSTITUCIONAIS,
  '8- TOTAL DA RECEITA LÍQUIDA DE IMPOSTOS (3 – 7)':
    ItemReceitaEstadoTipos0912.TOTAL_DA_RECEITA_LIQUIDA_DE_IMPOSTOS,
  '9- RECEITA DA APLICAÇÃO FINANCEIRA DE OUTROS RECURSOS DE IMPOSTOS VINCULADOS AO ENSINO':
    ItemReceitaEstadoTipos0912.RECEITA_APLICACAO_FINANCEIRA,
  '10- RECEITA DE TRANSFERÊNCIAS DO FNDE':
    ItemReceitaEstadoTipos0912.RECEITA_TRANSFERENCIAS_FNDE,
  '10.1- Transferências do Salário-Educação':
    ItemReceitaEstadoTipos0912.TRANSFERENCIAS_SALARIO_EDUCACAO,
  '10.2- Outras Transferências do FNDE':
    ItemReceitaEstadoTipos0912.OUTRAS_TRANSFERENCIAS_FNDE,
  '10.3- Aplicação Financeira dos Recursos do FNDE':
    ItemReceitaEstadoTipos0912.APLICACAO_FINANCEIRA_FNDE,
  '11- RECEITA DE TRANSFERÊNCIAS. DE CONVÊNIOS':
    ItemReceitaEstadoTipos0912.RECEITA_TRANSFERENCIAS_CONVENIOS,
  '11.1- Transferências de Convênios':
    ItemReceitaEstadoTipos0912.TRANSFERENCIAS_CONVENIOS,
  '11.2- Aplicação Financeira dos Recursos de Convênios':
    ItemReceitaEstadoTipos0912.APLICACAO_FINANCEIRA_CONVENIOS,
  '12- RECEITA DE OPERAÇÕES DE CRÉDITO':
    ItemReceitaEstadoTipos0912.RECEITA_OPERACOES_CREDITO,
  '13- OUTRAS RECEITAS PARA FINANCIAMENTO DO ENSINO':
    ItemReceitaEstadoTipos0912.OUTRAS_RECEITAS_FINANCIAMENTO_ENSINO,
  '14- TOTAL DAS RECEITAS ADICIONAIS PARA FINANCIAMENTO DO ENSINO (9 + 10 +11 + 12 + 13)':
    ItemReceitaEstadoTipos0912.TOTAL_RECEITAS_ADICIONAIS_FINANCIAMENTO_ENSINO,
  '15- RECEITAS DESTINADAS AO FUNDEB':
    ItemReceitaEstadoTipos0912.RECEITAS_DESTINADAS_AO_FUNDEB,
  '15.1- Receita Resultante do ICMS Destinada ao FUNDEB (20% de (1.1 – 4))':
    ItemReceitaEstadoTipos0912.RECEITA_RESULTANTE_DO_ICMS_DESTINADA_AO_FUNDEB,
  '15.2- Receita Resultante do ITCD Destinada ao FUNDEB (20% de 1.2)':
    ItemReceitaEstadoTipos0912.RECEITA_RESULTANTE_DO_ITCD_DESTINADA_AO_FUNDEB,
  '15.3- Receita Resultante do IPVA Destinada ao FUNDEB (20% de (1.3 – 5))':
    ItemReceitaEstadoTipos0912.RECEITA_RESULTANTE_DO_IPVA_DESTINADA_AO_FUNDEB,
  '15.4- Cota-Parte FPE Destinada ao FUNDEB – (20% de 2.1)':
    ItemReceitaEstadoTipos0912.COTA_PARTE_FPE_DESTINADA_AO_FUNDEB,
  '15.5- ICMS-Desoneração Destinada ao FUNDEB – (20% de 2.2)':
    ItemReceitaEstadoTipos0912.ICMS_DESONERACAO_DESTINADA_AO_FUNDEB,
  '15.6- Cota-Parte IPI Exportação Destinada ao FUNDEB (20% de (2.3 – 6))':
    ItemReceitaEstadoTipos0912.COTA_PARTE_IPI_EXPORTACAO_DESTINADA_AO_FUNDEB,
  '16- RECEITAS RECEBIDAS DO FUNDEB':
    ItemReceitaEstadoTipos0912.RECEITAS_RECEBIDAS_DO_FUNDEB,
  '16.1- Transferências de Recursos do FUNDEB':
    ItemReceitaEstadoTipos0912.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
  '16.2- Complementação da União ao FUNDEB':
    ItemReceitaEstadoTipos0912.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
  '16.3- Receita de Aplicação Financeira dos Recursos do FUNDEB':
    ItemReceitaEstadoTipos0912.RECEITA_DE_APLICACAO_FINANCEIRA_DOS_RECURSOS_DO_FUNDEB,
  '17- RESULTADO LÍQUIDO DAS TRANSFERÊNCIAS DO FUNDEB (16.1 – 15)':
    ItemReceitaEstadoTipos0912.RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB,
  '27- IMPOSTOS E TRANSFERÊNCIAS DESTINADAS À MDE (25% de 8)³':
    ItemReceitaEstadoTipos0912.IMPOSTOS_E_TRANSFERENCIAS_DESTINADAS_MDE,
};

export const mapeamentoDespesasEstadual0912: {
  [key: string]: ItemDespesaEstadoTipos0912;
} = {
  '18- PAGAMENTO DOS PROFISSIONAIS DO MAGISTÉRIO':
    ItemDespesaEstadoTipos0912.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO,
  '18.1- Com Ensino Fundamental':
    ItemDespesaEstadoTipos0912.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO_ENSINO_FUNDAMENTAL,
  '18.2- Com Ensino Médio':
    ItemDespesaEstadoTipos0912.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO_ENSINO_MEDIO,
  '19- OUTRAS DESPESAS': ItemDespesaEstadoTipos0912.FUNDEB_OUTRAS_DESPESAS,
  '19.1- Com Ensino Fundamental':
    ItemDespesaEstadoTipos0912.FUNDEB_OUTRAS_DESPESAS_ENSINO_FUNDAMENTAL,
  '19.2- Com Ensino Médio':
    ItemDespesaEstadoTipos0912.FUNDEB_OUTRAS_DESPESAS_ENSINO_MEDIO,
  '20- TOTAL DAS DESPESAS DO FUNDEB (18 + 19)':
    ItemDespesaEstadoTipos0912.FUNDEB_TOTAL_DESPESAS_FUNDEB,
  '28- EDUCAÇÃO INFANTIL':
    ItemDespesaEstadoTipos0912.MDE_DESPESAS_EDUCACAO_INFANTIL,
  '29- ENSINO FUNDAMENTAL':
    ItemDespesaEstadoTipos0912.MDE_DESPESAS_ENSINO_FUNDAMENTAL,
  '29.1- Despesas Custeadas com Recursos do FUNDEB':
    ItemDespesaEstadoTipos0912.MDE_ENSINO_FUNDAMENTAL_DESPESAS_CUSTEADAS_FUNDEB,
  '29.2- Despesas Custeadas com Outros Recursos de Impostos':
    ItemDespesaEstadoTipos0912.MDE_ENSINO_FUNDAMENTAL_DESPESAS_CUSTEADAS_OUTROS_IMPOSTOS,
  '30- ENSINO MÉDIO': ItemDespesaEstadoTipos0912.MDE_DESPESAS_ENSINO_MEDIO,
  '30.1- Despesas Custeadas com Recursos do FUNDEB':
    ItemDespesaEstadoTipos0912.MDE_ENSINO_MEDIO_DESPESAS_CUSTEADAS_FUNDEB,
  '30.2- Despesas Custeadas com Outros Recursos de Impostos':
    ItemDespesaEstadoTipos0912.MDE_ENSINO_MEDIO_DESPESAS_CUSTEADAS_OUTROS_IMPOSTOS,
  '31- ENSINO SUPERIOR':
    ItemDespesaEstadoTipos0912.MDE_DESPESAS_ENSINO_SUPERIOR,
  '32- ENSINO PROFISSIONAL NÃO INTEGRADO AO ENSINO REGULAR':
    ItemDespesaEstadoTipos0912.MDE_DESPESAS_ENSINO_PROFISSIONAL_NAO_INTEGRADO_ENSINO_REGULAR,
  '33- OUTRAS': ItemDespesaEstadoTipos0912.MDE_OUTRAS_DESPESAS,
  '34- TOTAL DAS DESPESAS COM AÇÕES TÍPICAS DE MDE (28 + 29 + 30 + 31 + 32 + 33)':
    ItemDespesaEstadoTipos0912.MDE_TOTAL_DESPESAS_ACOES_TIPICAS,
  '45- DESPESAS CUSTEADAS COM A APLICAÇÃO FINANCEIRA DE OUTROS RECURSOS DE IMPOSTOS VINCULADOS AO ENSINO':
    ItemDespesaEstadoTipos0912.DESPESAS_CUSTEADAS_APLICACAO_FINANCEIRA_VINCULADAS_ENSINO,
  '46- DESPESAS CUSTEADAS COM A CONTRIBUIÇÃO SOCIAL DO SALÁRIO-EDUCAÇÃO':
    ItemDespesaEstadoTipos0912.DESPESAS_CUSTEADAS_CONTRIBUICAO_SOCIAL_SALARIO_EDUCACAO,
  '47- DESPESAS CUSTEADAS COM OPERAÇÕES DE CRÉDITO':
    ItemDespesaEstadoTipos0912.DESPESAS_CUSTEADAS_OPERACOES_CREDITO,
  '48- DESPESAS CUSTEADAS COM OUTRAS RECEITAS PARA FINANCIAMENTO DO ENSINO':
    ItemDespesaEstadoTipos0912.DESPESAS_CUSTEADAS_OUTRAS_RECEITAS_FINANCIAMENTO_ENSINO,
  '49- TOTAL DAS OUTRAS DESPESAS CUSTEADAS COM RECEITAS ADICIONAIS PARA FINANCIAMENTO DO ENSINO (45 + 46 + 47 + 48)':
    ItemDespesaEstadoTipos0912.TOTAL_OUTRAS_DESPESAS_CUSTEADAS_FINANCIAMENTO_ENSINO,
  '50- TOTAL GERAL DAS DESPESAS COM MDE (34 + 49)':
    ItemDespesaEstadoTipos0912.TOTAL_GERAL_DESPESAS_MDE,
};

export const mapeamentoDeducoesFundebMagisterioEstadual0912: {
  [key: string]: DeducoesFundebMagisterioEstadoTipo0912;
} = {
  '21- RESTOS A PAGAR INSCRITOS NO EXERCÍCIO SEM DISPONIBILIDADE FINANCEIRA DE RECURSOS DO FUNDEB':
    DeducoesFundebMagisterioEstadoTipo0912.RESTOS_A_PAGAR_SEM_DISPONIBILIDADE_FINANCEIRA_FUNDEB,
  '22- DESPESAS CUSTEADAS COM O SUPERÁVIT FINANCEIRO, DO EXERCÍCIO ANTERIOR, DO FUNDEB':
    DeducoesFundebMagisterioEstadoTipo0912.DESPESAS_SUPERAVIT_FINANCEIRO_EXERCICIO_ANTERIOR_FUNDEB,
  '23- TOTAL DAS DEDUÇÕES CONSIDERADAS PARA FINS DE LIMITE DO FUNDEB (21 + 22)':
    DeducoesFundebMagisterioEstadoTipo0912.TOTAL_DEDUCOES_PARA_FINS_LIMITE_FUNDEB,
  '24- MÍNIMO DE 60% DO FUNDEB NA REMUNERAÇÃO DO MAGISTÉRIO COM ENSINO FUNDAMENTAL E MÉDIO1 ((18– 23) / (16) x 100) %':
    DeducoesFundebMagisterioEstadoTipo0912.MINIMO_60_PORCENTO_FUNDEB_REMUNERACAO_MAGISTERIO_EDUCACAO,
};

export const mapeamentoControleUtilizacaoRecursosEstadual0912: {
  [key: string]: ControleUtilizacaoRecursosEstadoTipo0912;
} = {
  '25 – RECURSOS RECEBIDOS DO FUNDEB EM 2008 QUE NÃO FORAM UTILIZADOS':
    ControleUtilizacaoRecursosEstadoTipo0912.RECURSOS_NAO_UTILIZADOS_FUNDEB_ANO_ANTERIOR,
  '26 - DESPESAS CUSTEADAS COM O SALDO DO ITEM 25 ATÉ O 1º TRIMESTRE DE 2009²':
    ControleUtilizacaoRecursosEstadoTipo0912.DESPESAS_CUSTEADAS_COM_FUNDEB_ANO_ANTERIOR_ATE_1_TRIM_ATUAL,
};

export const mapeamentoDeducoesParaFinsDeLimitesConstitucionalEstadual0912: {
  [key: string]: DeducoesParaFinsDeLimitesConstitucionalEstadoTipo0912;
} = {
  '35- RESULTADO LÍQUIDO DAS TRANSFERÊNCIAS DO FUNDEB = (17)':
    DeducoesParaFinsDeLimitesConstitucionalEstadoTipo0912.RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB,
  '36- DESPESAS CUSTEADAS COM A COMPLEMENTAÇÃO DO FUNDEB NO EXERCÍCIO':
    DeducoesParaFinsDeLimitesConstitucionalEstadoTipo0912.DESPESAS_CUSTEADAS_A_COMPLEMENTACAO_DO_FUNDEB_NO_EXERCICIO,
  '37- RECEITA DE APLICAÇÃO FINANCEIRA DOS RECURSOS DO FUNDEB ATÉ O BIMESTRE = (55 h)':
    DeducoesParaFinsDeLimitesConstitucionalEstadoTipo0912.RECEITA_DE_APLICACAO_FINANCEIRA_DOS_RECURSOS_DO_FUNDEB_ATE_BIM,
  '38- DESPESAS CUSTEADAS COM O SUPERÁVIT FINANCEIRO, DO EXERCÍCIO ANTERIOR, DO FUNDEB':
    DeducoesParaFinsDeLimitesConstitucionalEstadoTipo0912.DESPESAS_CUSTEADAS_SUPERAVIT_FINANCEIRO_DO_EXERCICIO_ANTERIOR,
  '39- DESPESAS CUSTEADAS COM O SUPERÁVIT FINANCEIRO, DO EXERCÍCIO ANTERIOR, DE OUTROS RECURSOS DE IMPOSTOS':
    DeducoesParaFinsDeLimitesConstitucionalEstadoTipo0912.DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR_OUTROS_IMPOSTOS,
  '40- RESTOS A PAGAR INSCRITOS NO EXERCÍCIO SEM DISPONIBILIDADE FINANCEIRA DE RECURSOS DE IMPOSTOS VINCULADOS AO ENSINO':
    DeducoesParaFinsDeLimitesConstitucionalEstadoTipo0912.RESTOS_A_PAGAR_INSCRITOS_SEM_DISPONIBILIDADE_FINANCEIRA,
  '41- CANCELAMENTO, NO EXERCÍCIO, DE RESTOS A PAGAR INSCRITOS COM DISPONIBILIDADE FINANCEIRA DE RECURSOS DE IMPOSTOS VINCULADOS AO ENSINO = (51 g)':
    DeducoesParaFinsDeLimitesConstitucionalEstadoTipo0912.CANCELAMENTO_RESTOS_PAGAR_INSCRITOS_DISPONIBILIDADE_FINANCEIRA,
  '42- TOTAL DAS DEDUÇÕES CONSIDERADAS PARA FINS DO LIMITE CONSTITUCIONAL (35 + 36 + 37 + 38 + 39 + 40 + 41)':
    DeducoesParaFinsDeLimitesConstitucionalEstadoTipo0912.TOTAL_DE_DEDUCOES_PARA_FINS_DE_LIMITE_CONSTITUCIONAL,
  '43- TOTAL DAS DESPESAS PARA FINS DE LIMITE (34 – 42)':
    DeducoesParaFinsDeLimitesConstitucionalEstadoTipo0912.TOTAL_DE_DESPESAS_PARA_FINS_DE_LIMITE,
  '44- MÍNIMO DE 25% DAS RECEITAS RESULTANTES DE IMPOSTOS EM MDE5 ((43) / (8) x 100) %':
    DeducoesParaFinsDeLimitesConstitucionalEstadoTipo0912.MINIMO_DE_25_PORCENTO_DAS_RECEITAS_RESULTANTES_DE_IMPOSTOS_MDE,
};

export const mapeamentoRestosAPagarInscritosDisponibilidadesFinanceiraEstadual0912: {
  [key: string]: RestosAPagarInscritosDisponibilidadesFinanceiraEstadoTipo0912;
} = {
  '51- RESTOS A PAGAR DE DESPESAS COM MDE':
    RestosAPagarInscritosDisponibilidadesFinanceiraEstadoTipo0912.RESTOS_A_PAGAR_DE_DESPESA_MDE,
};

export const mapeamentoFluxoFinanceiroDeRecursosEstadual0912: {
  [key: string]: FluxoFinanceiroDeRecursosEstadoTipos0912;
} = {
  '52- SALDO FINANCEIRO EM 31 DE DEZEMBRO DE 2008':
    FluxoFinanceiroDeRecursosEstadoTipos0912.SALDO_FINANCEIRO_31_DE_DEZEMBRO_ANO_ANTERIOR,
  '53- (+) INGRESSO DE RECURSOS ATÉ O BIMESTRE':
    FluxoFinanceiroDeRecursosEstadoTipos0912.INGRESSO_RECURSOS_ATE_BIM,
  '54- (-) PAGAMENTOS EFETUADOS ATÉ O BIMESTRE':
    FluxoFinanceiroDeRecursosEstadoTipos0912.PAGAMENTOS_EFETUADOS_ATE_BIM,
  '55- (+) RECEITA DE APLICAÇÃO FINANCEIRA DOS RECURSOS ATÉ O BIMESTRE':
    FluxoFinanceiroDeRecursosEstadoTipos0912.RECEITA_APLICACAO_FINANCEIRA_DOS_RECURSOS_ATE_BIM,
  '56- (=) SALDO FINANCEIRO NO EXERCÍCIO ATUAL':
    FluxoFinanceiroDeRecursosEstadoTipos0912.SALDO_FINANCEIRO_NO_EXERCICIO_ATUAL,
};
