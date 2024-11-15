import {
  ControleRecursosNoExercicioSubsequenteEstadoTipo1516,
  DeducoesFinsLimiteFundebEstadoTipo1516,
  DeducoesParaFinsDeLimitesConstitucionalEstadoTipo1516,
  FluxoFinanceiroDeRecursosFundebEstadoTipo1516,
  IndicadoresFundebEstadoTipo1516,
  ItemDespesaEstadoTipos1516,
  ItemReceitaEstadoTipos1516,
  RestosAPagarInscritosDisponibilidadesFinanceiraEstadoTipo1516,
} from '@prisma/client';

export const mapeamentoReceitasEstadual1516: {
  [key: string]: ItemReceitaEstadoTipos1516;
} = {
  '1- RECEITA DE IMPOSTOS': ItemReceitaEstadoTipos1516.RECEITA_DE_IMPOSTOS,
  '1.1- Receita Resultante do Imposto sobre a Circulação de Mercadorias e Serviços de Transporte Interestadual e Intermunicipal e de Comunicação - ICMS':
    ItemReceitaEstadoTipos1516.RECEITA_RESULTANTE_DO_ICMS_DE_TRANSPORTE_E_COMUNICACAO,
  '1.1.1- ICMS': ItemReceitaEstadoTipos1516.ICMS,
  '1.1.2- Multas, Juros de Mora e Outros Encargos do ICMS':
    ItemReceitaEstadoTipos1516.MULTAS_JUROS_MORA_OUTROS_ENCARGOS_DO_ICMS,
  '1.1.3- Dívida Ativa do ICMS':
    ItemReceitaEstadoTipos1516.DIVIDA_ATIVA_DO_ICMS,
  '1.1.4- Multas, Juros de Mora, Atualização Monetária e Outros Encargos da Dívida Ativa do ICMS':
    ItemReceitaEstadoTipos1516.MULTAS_JUROS_MORA_ATUALIZACAO_MONETARIA_DIVIDA_ATIVA_ICMS,
  '1.1.5- (–) Deduções da Receita do ICMS':
    ItemReceitaEstadoTipos1516.DEDUCOES_DA_RECEITA_DO_ICMS,
  '1.1.6- Adicional de até 2% do ICMS Destinado ao Fundo de Combate à Pobreza (ADCT. art. 82. $1º)':
    ItemReceitaEstadoTipos1516.ADICIONAL_ATE_2_PORCENTO_DO_ICMS_DESTINADO_AO_COMBATE_A_POBREZA,
  '1.1.7- (–) Deduções da Receita obtida com o Adicional de até 2% do ICMS':
    ItemReceitaEstadoTipos1516.DEDUCOES_DA_RECEITA_DO_ADICIONAL_DE_ATE_2_PORCENTO_DO_ICMS,
  '1.2- Receita Resultante do Imposto de Transmissão Causa Mortis e Doação de Bens e Direitos - ITCD':
    ItemReceitaEstadoTipos1516.RECEITA_RESULTANTE_DO_ITCD,
  '1.2.1- ITCD': ItemReceitaEstadoTipos1516.ITCD,
  '1.2.2- Multas, Juros de Mora e Outros Encargos do ITCD':
    ItemReceitaEstadoTipos1516.MULTAS_JUROS_MORA_OUTROS_ENCARGOS_DO_ITCD,
  '1.2.3- Dívida Ativa do ITCD':
    ItemReceitaEstadoTipos1516.DIVIDA_ATIVA_DO_ITCD,
  '1.2.4- Multas, Juros de Mora, Atualização Monetária e Outros Encargos da Dívida Ativa do ITCD':
    ItemReceitaEstadoTipos1516.MULTAS_JUROS_MORA_ATUALIZACAO_MONETARIA_DIVIDA_ATIVA_ITCD,
  '1.2.5- (–) Deduções da Receita do ITCD':
    ItemReceitaEstadoTipos1516.DEDUCOES_DA_RECEITA_DO_ITCD,
  '1.3- Receita Resultante do Imposto sobre a Propriedade de Veículos Automotores - IPVA':
    ItemReceitaEstadoTipos1516.RECEITA_RESULTANTE_DO_IPVA,
  '1.3.1- IPVA': ItemReceitaEstadoTipos1516.IPVA,
  '1.3.2- Multas, Juros de Mora e Outros Encargos do IPVA':
    ItemReceitaEstadoTipos1516.MULTAS_JUROS_MORA_OUTROS_ENCARGOS_DO_IPVA,
  '1.3.3- Dívida Ativa do IPVA':
    ItemReceitaEstadoTipos1516.DIVIDA_ATIVA_DO_IPVA,
  '1.3.4- Multas, Juros de Mora, Atualização Monetária e Outros Encargos da Dívida Ativa do IPVA':
    ItemReceitaEstadoTipos1516.MULTAS_JUROS_MORA_ATUALIZACAO_MONETARIA_DIVIDA_ATIVA_IPVA,
  '1.3.5- (–) Deduções da Receita do IPVA':
    ItemReceitaEstadoTipos1516.DEDUCOES_DA_RECEITA_DO_IPVA,
  '1.4- Receita Resultante do Imposto de Renda Retido na Fonte – IRRF':
    ItemReceitaEstadoTipos1516.RECEITA_RESULTANTE_DO_IRRF,
  '1.4.1- IRRF': ItemReceitaEstadoTipos1516.IRRF,
  '1.4.2- Multas, Juros de Mora e Outros Encargos do IRRF':
    ItemReceitaEstadoTipos1516.MULTAS_JUROS_MORA_OUTROS_ENCARGOS_DO_IRRF,
  '1.4.3- Dívida Ativa do IRRF':
    ItemReceitaEstadoTipos1516.DIVIDA_ATIVA_DO_IRRF,
  '1.4.4- Multas, Juros de Mora, Atualização Monetária e Outros Encargos da Dívida Ativa do IRRF':
    ItemReceitaEstadoTipos1516.MULTAS_JUROS_MORA_ATUALIZACAO_MONETARIA_DIVIDA_ATIVA_IRRF,
  '1.4.5- (–) Deduções da Receita do IRRF':
    ItemReceitaEstadoTipos1516.DEDUCOES_DA_RECEITA_DO_IRRF,
  '2- RECEITA DE TRANSFERÊNCIAS CONSTITUCIONAIS E LEGAIS':
    ItemReceitaEstadoTipos1516.RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
  '2.1- Cota-Parte FPE': ItemReceitaEstadoTipos1516.COTA_PARTE_FPE,
  '2.2- ICMS-Desoneração – L.C. nº 87/1996':
    ItemReceitaEstadoTipos1516.ICMS_DESONERACAO,
  '2.3- Cota-Parte IPI-Exportação':
    ItemReceitaEstadoTipos1516.COTA_PARTE_IPI_EXPORTACAO,
  '2.4- Cota-Parte IOF-Ouro': ItemReceitaEstadoTipos1516.COTA_PARTE_IOF_OURO,
  '3- TOTAL DA RECEITA DE IMPOSTOS (1 + 2)':
    ItemReceitaEstadoTipos1516.TOTAL_RECEITA_IMPOSTOS,
  '4- PARCELA DO ICMS REPASSADA AOS MUNICÍPIOS (25% DE (1.1 - (1.1.6 - 1.1.7)))':
    ItemReceitaEstadoTipos1516.PARCELA_ICMS_REPASSADA_AOS_MUNICIPIOS,
  '5- PARCELA DO IPVA REPASSADA AOS MUNICÍPIOS (50% DE 1.3)':
    ItemReceitaEstadoTipos1516.PARCELA_IPVA_REPASSADA_AOS_MUNICIPIOS,
  '6- PARCELA DA COTA-PARTE DO IPI-EXPORTAÇÃO REPASSADA AOS MUNICÍPIOS (25% DE 2.3)':
    ItemReceitaEstadoTipos1516.PARCELA_COTA_PARTE_IPI_EXPORTACAO_REPASSADA_AOS_MUNICIPIOS,
  '7- TOTAL DAS DEDUÇÕES DE TRANSFERÊNCIAS CONSTITUCIONAIS (4 + 5 + 6)':
    ItemReceitaEstadoTipos1516.TOTAL_DAS_DEDUCOES_DE_TRANSFERENCIAS_CONSTITUCIONAIS,
  '8- TOTAL DA RECEITA LÍQUIDA DE IMPOSTOS (3 - 7)':
    ItemReceitaEstadoTipos1516.TOTAL_DA_RECEITA_LIQUIDA_DE_IMPOSTOS,
  '9- RECEITA DA APLICAÇÃO FINANCEIRA DE OUTROS RECURSOS DE IMPOSTOS VINCULADOS AO ENSINO':
    ItemReceitaEstadoTipos1516.RECEITA_APLICACAO_FINANCEIRA,
  '10- RECEITA DE TRANSFERÊNCIAS DO FNDE':
    ItemReceitaEstadoTipos1516.RECEITA_TRANSFERENCIAS_FNDE,
  '10.1- Transferências do Salário-Educação':
    ItemReceitaEstadoTipos1516.TRANSFERENCIAS_SALARIO_EDUCACAO,
  '10.2- Transferências Diretas - PDDE':
    ItemReceitaEstadoTipos1516.TRANSFERENCIAS_DIRETAS_PDDE,
  '10.3- Transferências Diretas - PNAE':
    ItemReceitaEstadoTipos1516.TRANSFERENCIAS_DIRETAS_PNAE,
  '10.4- Transferências Diretas - PNATE':
    ItemReceitaEstadoTipos1516.TRANSFERENCIAS_DIRETAS_PNATE,
  '10.5- Outras Transferências do FNDE':
    ItemReceitaEstadoTipos1516.OUTRAS_TRANSFERENCIAS_FNDE,
  '10.6- Aplicação Financeira dos Recursos do FNDE':
    ItemReceitaEstadoTipos1516.APLICACAO_FINANCEIRA_FNDE,
  '11- RECEITA DE TRANSFERÊNCIAS DE CONVÊNIOS':
    ItemReceitaEstadoTipos1516.RECEITA_TRANSFERENCIAS_CONVENIOS,
  '11.1- Transferências de Convênios':
    ItemReceitaEstadoTipos1516.TRANSFERENCIAS_CONVENIOS,
  '11.2- Aplicação Financeira dos Recursos de Convênios':
    ItemReceitaEstadoTipos1516.APLICACAO_FINANCEIRA_CONVENIOS,
  '12- RECEITA DE OPERAÇÕES DE CRÉDITO':
    ItemReceitaEstadoTipos1516.RECEITA_OPERACOES_CREDITO,
  '13- OUTRAS RECEITAS PARA FINANCIAMENTO DO ENSINO':
    ItemReceitaEstadoTipos1516.OUTRAS_RECEITAS_FINANCIAMENTO_ENSINO,
  '14- TOTAL DAS RECEITAS ADICIONAIS PARA FINANCIAMENTO DO ENSINO (9 + 10 + 11 + 12 + 13)':
    ItemReceitaEstadoTipos1516.TOTAL_RECEITAS_ADICIONAIS_FINANCIAMENTO_ENSINO,
  '15- RECEITAS DESTINADAS AO FUNDEB':
    ItemReceitaEstadoTipos1516.RECEITAS_DESTINADAS_AO_FUNDEB,
  '15.1- Receita Resultante do ICMS Destinada ao FUNDEB - (20% de (1.1 - 4))':
    ItemReceitaEstadoTipos1516.RECEITA_RESULTANTE_DO_ICMS_DESTINADA_AO_FUNDEB,
  '15.2- Receita Resultante do ITCD Destinada ao FUNDEB - (20% de 1.2)':
    ItemReceitaEstadoTipos1516.RECEITA_RESULTANTE_DO_ITCD_DESTINADA_AO_FUNDEB,
  '15.3- Receita Resultante do IPVA Destinada ao FUNDEB - (20% de (1.3 - 5))':
    ItemReceitaEstadoTipos1516.RECEITA_RESULTANTE_DO_IPVA_DESTINADA_AO_FUNDEB,
  '15.4- Cota-Parte FPE Destinada ao FUNDEB (20% de 2.1)':
    ItemReceitaEstadoTipos1516.COTA_PARTE_FPE_DESTINADA_AO_FUNDEB,
  '15.5- ICMS-Desoneração Destinada ao FUNDEB - (20% de 2.2)':
    ItemReceitaEstadoTipos1516.ICMS_DESONERACAO_DESTINADA_AO_FUNDEB,
  '15.6- Cota-Parte IPI-Exportação Destinada ao FUNDEB (20% de (2.3 - 6))':
    ItemReceitaEstadoTipos1516.COTA_PARTE_IPI_EXPORTACAO_DESTINADA_AO_FUNDEB,
  '16- RECEITAS RECEBIDAS DO FUNDEB':
    ItemReceitaEstadoTipos1516.RECEITAS_RECEBIDAS_DO_FUNDEB,
  '16.1- Transferências de Recursos do FUNDEB':
    ItemReceitaEstadoTipos1516.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
  '16.2- Complementação da União ao FUNDEB':
    ItemReceitaEstadoTipos1516.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
  '16.3- Receita de Aplicação Financeira dos Recursos do FUNDEB':
    ItemReceitaEstadoTipos1516.RECEITA_DE_APLICACAO_FINANCEIRA_DOS_RECURSOS_DO_FUNDEB,
  '17- RESULTADO LÍQUIDO DAS TRANSFERÊNCIAS DO FUNDEB (16.1 - 15)':
    ItemReceitaEstadoTipos1516.RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB,
  '27- IMPOSTOS E TRANSFERÊNCIAS DESTINADAS À MDE (25% de 8)':
    ItemReceitaEstadoTipos1516.IMPOSTOS_E_TRANSFERENCIAS_DESTINADAS_MDE,
};
export const mapeamentoDespesasEstadual1516: {
  [key: string]: ItemDespesaEstadoTipos1516;
} = {
  '18- PAGAMENTO DOS PROFISSIONAIS DO MAGISTÉRIO':
    ItemDespesaEstadoTipos1516.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO,
  '18.1- Com Ensino Fundamental':
    ItemDespesaEstadoTipos1516.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO_ENSINO_FUNDAMENTAL,
  '18.2- Com Ensino Médio':
    ItemDespesaEstadoTipos1516.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO_ENSINO_MEDIO,
  '19- OUTRAS DESPESAS': ItemDespesaEstadoTipos1516.FUNDEB_OUTRAS_DESPESAS,
  '19.1- Com Ensino Fundamental':
    ItemDespesaEstadoTipos1516.FUNDEB_OUTRAS_DESPESAS_ENSINO_FUNDAMENTAL,
  '19.2- Com Ensino Médio':
    ItemDespesaEstadoTipos1516.FUNDEB_OUTRAS_DESPESAS_ENSINO_MEDIO,
  '20- TOTAL DAS DESPESAS DO FUNDEB (18 + 19)':
    ItemDespesaEstadoTipos1516.FUNDEB_TOTAL_DESPESAS_FUNDEB,
  '28- EDUCAÇÂO INFANTIL':
    ItemDespesaEstadoTipos1516.MDE_DESPESAS_EDUCACAO_INFANTIL,
  '28.1 - Creche': ItemDespesaEstadoTipos1516.MDE_DESPESAS_CRECHE,
  '28.2 - Pré-escola': ItemDespesaEstadoTipos1516.MDE_DESPESAS_PRE_ESCOLA,
  '29- ENSINO FUNDAMENTAL':
    ItemDespesaEstadoTipos1516.MDE_DESPESAS_ENSINO_FUNDAMENTAL,
  '29.1- Despesas Custeadas com Recursos do FUNDEB':
    ItemDespesaEstadoTipos1516.MDE_ENSINO_FUNDAMENTAL_DESPESAS_CUSTEADAS_FUNDEB,
  '29.2- Despesas Custeadas com Outros Recursos de Impostos':
    ItemDespesaEstadoTipos1516.MDE_ENSINO_FUNDAMENTAL_DESPESAS_CUSTEADAS_OUTROS_IMPOSTOS,
  '30- ENSINO MÉDIO': ItemDespesaEstadoTipos1516.MDE_DESPESAS_ENSINO_MEDIO,
  '30.1- Despesas Custeadas com Recursos do FUNDEB':
    ItemDespesaEstadoTipos1516.MDE_ENSINO_MEDIO_DESPESAS_CUSTEADAS_FUNDEB,
  '30.2- Despesas Custeadas com Outros Recursos de Impostos':
    ItemDespesaEstadoTipos1516.MDE_ENSINO_MEDIO_DESPESAS_CUSTEADAS_OUTROS_IMPOSTOS,
  '31- ENSINO SUPERIOR':
    ItemDespesaEstadoTipos1516.MDE_DESPESAS_ENSINO_SUPERIOR,
  '32- ENSINO PROFISSIONAL NÃO INTEGRADO AO ENSINO REGULAR':
    ItemDespesaEstadoTipos1516.MDE_DESPESAS_ENSINO_PROFISSIONAL_NAO_INTEGRADO_ENSINO_REGULAR,
  '33- OUTRAS': ItemDespesaEstadoTipos1516.MDE_OUTRAS_DESPESAS,
  '34- TOTAL DAS DESPESAS COM AÇÕES TÍPICAS DE MDE (28 + 29 + 30 + 31 + 32 + 33)':
    ItemDespesaEstadoTipos1516.MDE_TOTAL_DESPESAS_ACOES_TIPICAS,
  '45- DESPESAS CUSTEADAS COM A APLICAÇÃO FINANCEIRA DE OUTROS RECURSOS DE IMPOSTOS VINCULADOS AO ENSINO':
    ItemDespesaEstadoTipos1516.DESPESAS_CUSTEADAS_APLICACAO_FINANCEIRA_VINCULADAS_ENSINO,
  '46- DESPESAS CUSTEADAS COM A CONTRIBUIÇÃO SOCIAL DO SALÁRIO-EDUCAÇÃO':
    ItemDespesaEstadoTipos1516.DESPESAS_CUSTEADAS_CONTRIBUICAO_SOCIAL_SALARIO_EDUCACAO,
  '47- DESPESAS CUSTEADAS COM OPERAÇÕES DE CRÉDITO':
    ItemDespesaEstadoTipos1516.DESPESAS_CUSTEADAS_OPERACOES_CREDITO,
  '48- DESPESAS CUSTEADAS COM OUTRAS RECEITAS PARA FINANCIAMENTO DO ENSINO':
    ItemDespesaEstadoTipos1516.DESPESAS_CUSTEADAS_OUTRAS_RECEITAS_FINANCIAMENTO_ENSINO,
  '49- TOTAL DAS OUTRAS DESPESAS CUSTEADAS COM RECEITAS ADICIONAIS PARA FINANCIAMENTO DO ENSINO (45 + 46 + 47 + 48)':
    ItemDespesaEstadoTipos1516.TOTAL_OUTRAS_DESPESAS_CUSTEADAS_FINANCIAMENTO_ENSINO,
  '50- TOTAL GERAL DAS DESPESAS COM MDE (34 + 49)':
    ItemDespesaEstadoTipos1516.TOTAL_GERAL_DESPESAS_MDE,
};

export const mapeamentoDeducoesFinsLimiteFundebEstadual1516: {
  [key: string]: DeducoesFinsLimiteFundebEstadoTipo1516;
} = {
  '21- RESTOS A PAGAR INSCRITOS NO EXERCÍCIO SEM DISPONIBILIDADE FINANCEIRA DE RECURSOS DO FUNDEB':
    DeducoesFinsLimiteFundebEstadoTipo1516.RESTOS_A_PAGAR_SEM_DISPONIBILIDADE_FINANCEIRA,
  '21.1 - FUNDEB 60%':
    DeducoesFinsLimiteFundebEstadoTipo1516.RESTOS_A_PAGAR_SEM_DISPONIBILIDADE_FINANCEIRA_60_PORCENTO,
  '21.2 - FUNDEB 40%':
    DeducoesFinsLimiteFundebEstadoTipo1516.RESTOS_A_PAGAR_SEM_DISPONIBILIDADE_FINANCEIRA_40_PORCENTO,
  '22- DESPESAS CUSTEADAS COM O SUPERÁVIT FINANCEIRO, DO EXERCÍCIO ANTERIOR, DO FUNDEB':
    DeducoesFinsLimiteFundebEstadoTipo1516.DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR,
  '22.1 - FUNDEB 60%':
    DeducoesFinsLimiteFundebEstadoTipo1516.DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR_60_PORCENTO,
  '22.2 - FUNDEB 40%':
    DeducoesFinsLimiteFundebEstadoTipo1516.DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR_40_PORCENTO,
  '23- TOTAL DAS DEDUÇÕES CONSIDERADAS PARA FINS DE LIMITE DO FUNDEB (21 + 22)':
    DeducoesFinsLimiteFundebEstadoTipo1516.TOTAL_DEDUCOES_PARA_FINS_LIMITE,
};

export const mapeamentoIndicadoresFundebEstadual1516: {
  [key: string]: IndicadoresFundebEstadoTipo1516;
} = {
  '24- TOTAL DAS DESPESAS DO FUNDEB PARA FINS DE LIMITE _____1':
    IndicadoresFundebEstadoTipo1516.TOTAL_DE_DESPESAS_FUNDEB_PARA_FINS_DE_LIMITE,
  '24.1 - Mínimo de 60% do FUNDEB na remuneração do Magistério (18 - (21.1 + 22.1)) / (16) x 100)%':
    IndicadoresFundebEstadoTipo1516.MINIMO_60_PORCENTO_FUNDEB_REMUNERACAO_MAGISTERIO,
  '24.2 - Máximo de 40% em Despesas com MDE, que não Remuneração do Magistério (19 - (21.2 + 22.2)) / (16) x 100)%':
    IndicadoresFundebEstadoTipo1516.MAXIMO_40_PORCENTO_DESPESAS_MDE,
  '24.3 - Máximo de 5% não Aplicado no Exercício (100 - (24.1 + 24.2))%':
    IndicadoresFundebEstadoTipo1516.MAXIMO_5_PORCENTO_NAO_APLICADO_NO_EXERCICIO,
};

export const mapeamentoControleRecursosNoExercicioSubsequenteEstadual1516: {
  [key: string]: ControleRecursosNoExercicioSubsequenteEstadoTipo1516;
} = {
  '25 – RECURSOS RECEBIDOS DO FUNDEB EM 2014 QUE NÃO FORAM UTILIZADOS':
    ControleRecursosNoExercicioSubsequenteEstadoTipo1516.RECURSOS_RECEBIDOS_FUNDEB_NAO_UTILIZADOS,
  '26 – DESPESAS CUSTEADAS COM O SALDO DO ITEM 25 ATÉ O 1º TRIMESTRE DE 2015 2':
    ControleRecursosNoExercicioSubsequenteEstadoTipo1516.DESPESAS_CUSTEADAS_C_SALDO_FUNDEB_N_UTILIZADOS_1_TRIM_ATUAL,
};

export const mapeamentoDeducoesParaFinsDeLimitesConstitucionalEstadual1516: {
  [key: string]: DeducoesParaFinsDeLimitesConstitucionalEstadoTipo1516;
} = {
  '35- RESULTADO LÍQUIDO DAS TRANSFERÊNCIAS DO FUNDEB = (17)':
    DeducoesParaFinsDeLimitesConstitucionalEstadoTipo1516.RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB,
  '36- DESPESAS CUSTEADAS COM A COMPLEMENTAÇÃO DO FUNDEB NO EXERCÍCIO':
    DeducoesParaFinsDeLimitesConstitucionalEstadoTipo1516.DESPESAS_CUSTEADAS_A_COMPLEMENTACAO_DO_FUNDEB_NO_EXERCICIO,
  '37- RECEITA DE APLICAÇÃO FINANCEIRA DOS RECURSOS DO FUNDEB ATÉ O BIMESTRE = (55 h)':
    DeducoesParaFinsDeLimitesConstitucionalEstadoTipo1516.RECEITA_DE_APLICACAO_FINANCEIRA_DOS_RECURSOS_DO_FUNDEB_ATE_BIM,
  '38- DESPESAS CUSTEADAS COM O SUPERÁVIT FINANCEIRO, DO EXERCÍCIO ANTERIOR, DO FUNDEB':
    DeducoesParaFinsDeLimitesConstitucionalEstadoTipo1516.DESPESAS_CUSTEADAS_SUPERAVIT_FINANCEIRO_DO_EXERCICIO_ANTERIOR,
  '39- DESPESAS CUSTEADAS COM O SUPERÁVIT FINANCEIRO, DO EXERCÍCIO ANTERIOR, DE OUTROS RECURSOS DE IMPOSTOS':
    DeducoesParaFinsDeLimitesConstitucionalEstadoTipo1516.DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR_OUTROS_IMPOSTOS,
  '40- RESTOS A PAGAR INSCRITOS NO EXERCÍCIO SEM DISPONIBILIDADE FINANCEIRA DE RECURSOS DE IMPOSTOS VINCULADOS AO ENSINO 4':
    DeducoesParaFinsDeLimitesConstitucionalEstadoTipo1516.RESTOS_A_PAGAR_INSCRITOS_SEM_DISPONIBILIDADE_FINANCEIRA,
  '41- CANCELAMENTO, NO EXERCÍCIO, DE RESTOS A PAGAR INSCRITOS COM DISPONIBILIDADE FINANCEIRA DE RECURSOS DE IMPOSTOS VINCULADOS AO ENSINO = (51 g)':
    DeducoesParaFinsDeLimitesConstitucionalEstadoTipo1516.CANCELAMENTO_RESTOS_PAGAR_INSCRITOS_DISPONIBILIDADE_FINANCEIRA,
  '42- TOTAL DAS DEDUÇÕES CONSIDERADAS PARA FINS DE LIMITE CONSTITUCIONAL (35 + 36 + 37 + 38 + 39 + 40 + 41)':
    DeducoesParaFinsDeLimitesConstitucionalEstadoTipo1516.TOTAL_DE_DEDUCOES_PARA_FINS_DE_LIMITE_CONSTITUCIONAL,
  '43- TOTAL DAS DESPESAS PARA FINS DE LIMITE (34 - 42)':
    DeducoesParaFinsDeLimitesConstitucionalEstadoTipo1516.TOTAL_DE_DESPESAS_PARA_FINS_DE_LIMITE,
  '44- MÍNIMO DE 25% DAS RECEITAS RESULTANTES DE IMPOSTOS EM MDE ((43) / (8) x 100) %':
    DeducoesParaFinsDeLimitesConstitucionalEstadoTipo1516.MINIMO_DE_25_PORCENTO_DAS_RECEITAS_RESULTANTES_DE_IMPOSTOS_MDE,
};

export const mapeamentoRestosAPagarInscritosDisponibilidadesFinanceiraEstadual1516: {
  [key: string]: RestosAPagarInscritosDisponibilidadesFinanceiraEstadoTipo1516;
} = {
  '51- RESTOS A PAGAR DE DESPESAS COM MDE':
    RestosAPagarInscritosDisponibilidadesFinanceiraEstadoTipo1516.RESTOS_A_PAGAR_DE_DESPESA_MDE,
  '51.1- Executadas com Recursos de Impostos Vinculados ao Ensino':
    RestosAPagarInscritosDisponibilidadesFinanceiraEstadoTipo1516.EXECUTADAS_COM_RECURSOS_DE_IMPOSTOS_ENSINO,
  '51.2- Executadas com Recursos do FUNDEB':
    RestosAPagarInscritosDisponibilidadesFinanceiraEstadoTipo1516.EXECUTADAS_COM_RECURSOS_FUNDEB,
};

export const mapeamentoFluxoFinanceiroDeRecursosFundebEstadual1516: {
  [key: string]: FluxoFinanceiroDeRecursosFundebEstadoTipo1516;
} = {
  '52- SALDO FINANCEIRO EM 31 DE DEZEMBRO DE 2014':
    FluxoFinanceiroDeRecursosFundebEstadoTipo1516.SALDO_FINANCEIRO_31_DE_DEZEMBRO_ANO_ANTERIOR,
  '53- (+) INGRESSO DE RECURSOS ATÉ O BIMESTRE':
    FluxoFinanceiroDeRecursosFundebEstadoTipo1516.INGRESSO_RECURSOS_ATE_BIM,
  '54- (-) PAGAMENTOS EFETUADOS ATÉ O BIMESTRE':
    FluxoFinanceiroDeRecursosFundebEstadoTipo1516.PAGAMENTOS_EFETUADOS_ATE_BIM,
  '54.1- Orçamento do Exercício':
    FluxoFinanceiroDeRecursosFundebEstadoTipo1516.ORCAMENTO_DO_EXERCICIO,
  '54.2- Restos a Pagar':
    FluxoFinanceiroDeRecursosFundebEstadoTipo1516.RESTOS_A_PAGAR,
  '55- (+) RECEITA DE APLICAÇÃO FINANCEIRA DOS RECURSOS ATÉ O BIMESTRE':
    FluxoFinanceiroDeRecursosFundebEstadoTipo1516.RECEITA_APLICACAO_FINANCEIRA_DOS_RECURSOS_ATE_BIM,
  '56- (=) SALDO FINANCEIRO NO EXERCÍCIO ATUAL':
    FluxoFinanceiroDeRecursosFundebEstadoTipo1516.SALDO_FINANCEIRO_NO_EXERCICIO_ATUAL,
};
