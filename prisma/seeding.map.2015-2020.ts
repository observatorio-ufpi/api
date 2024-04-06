import {
  ControleRecursosNoExercicioSubsequenteTipo1520,
  DeducoesFinsLimiteFundebTipo1520,
  DeducoesParaFinsDeLimitesConstitucionalTipo1520,
  FluxoFinanceiroDeRecursosFundebTipo1520,
  IndicadoresFundebTipo1520,
  ItemDespesaTipos1520,
  ItemReceitaTipos1520,
  RestosAPagarInscritosDisponibilidadesFinanceiraTipo1520,
} from '@prisma/client';

export const mapeamentoReceitas1520: {
  [key: string]: ItemReceitaTipos1520;
} = {
  '1- RECEITA DE IMPOSTOS': ItemReceitaTipos1520.RECEITA_DE_IMPOSTOS,
  '1.1- Receita Resultante do Imposto sobre a Propriedade Predial e Territorial Urbana - IPTU':
    ItemReceitaTipos1520.IPTU_RECEITA_RESULTANTE,
  '1.1.1- IPTU': ItemReceitaTipos1520.IPTU,
  '1.1.2- Multas, Juros de Mora e Outros Encargos do IPTU':
    ItemReceitaTipos1520.IPTU_MULTAS_JUROS_MORA,
  '1.1.3- Dívida Ativa do IPTU': ItemReceitaTipos1520.IPTU_DIVIDA_ATIVA,
  '1.1.4- Multas, Juros de Mora, Atualização Monetária e Outros Encargos da Dívida Ativa do IPTU':
    ItemReceitaTipos1520.IPTU_MULTAS_JUROS_MORA_DIVIDA_ATIVA,
  '1.1.5- (–) Deduções da Receita do IPTU':
    ItemReceitaTipos1520.IPTU_DEDUCOES_RECEITA,
  '1.2- Receita Resultante do Imposto sobre Transmissão Inter Vivos – ITBI':
    ItemReceitaTipos1520.ITBI_RECEITA_RESULTANTE,
  '1.2.1- ITBI': ItemReceitaTipos1520.ITBI,
  '1.2.2- Multas, Juros de Mora e Outros Encargos do ITBI':
    ItemReceitaTipos1520.ITBI_MULTAS_JUROS_MORA,
  '1.2.3- Dívida Ativa do ITBI': ItemReceitaTipos1520.ITBI_DIVIDA_ATIVA,
  '1.2.4- Multas, Juros de Mora, Atualização Monetária e Outros Encargos da Dívida Ativa do ITBI':
    ItemReceitaTipos1520.ITBI_MULTAS_JUROS_MORA_DIVIDA_ATIVA,
  '1.2.5- (–) Deduções da Receita do ITBI':
    ItemReceitaTipos1520.ITBI_DEDUCOES_RECEITA,
  '1.3- Receita Resultante do Imposto sobre Serviços de Qualquer Natureza – ISS':
    ItemReceitaTipos1520.ISS_RECEITA_RESULTANTE,
  '1.3.1- ISS': ItemReceitaTipos1520.ISS,
  '1.3.2- Multas, Juros de Mora e Outros Encargos do ISS':
    ItemReceitaTipos1520.ISS_MULTAS_JUROS_MORA,
  '1.3.3- Dívida Ativa do ISS': ItemReceitaTipos1520.ISS_DIVIDA_ATIVA,
  '1.3.4- Multas, Juros de Mora, Atualização Monetária e Outros Encargos da Dívida Ativa do ISS':
    ItemReceitaTipos1520.ISS_MULTAS_JUROS_MORA_DIVIDA_ATIVA,
  '1.3.5- (–) Deduções da Receita do ISS':
    ItemReceitaTipos1520.ISS_DEDUCOES_RECEITA,
  '1.4- Receita Resultante do Imposto de Renda Retido na Fonte – IRRF':
    ItemReceitaTipos1520.IRRF_RECEITA_RESULTANTE,
  '1.4.1- IRRF': ItemReceitaTipos1520.IRRF,
  '1.4.2- Multas, Juros de Mora e Outros Encargos do IRRF':
    ItemReceitaTipos1520.IRRF_MULTAS_JUROS_MORA,
  '1.4.3- Dívida Ativa do IRRF': ItemReceitaTipos1520.IRRF_DIVIDA_ATIVA,
  '1.4.4- Multas, Juros de Mora, Atualização Monetária e Outros Encargos da Dívida Ativa do IRRF':
    ItemReceitaTipos1520.IRRF_MULTAS_JUROS_MORA_DIVIDA_ATIVA,
  '1.4.5- (–) Deduções da Receita do IRRF':
    ItemReceitaTipos1520.IRRF_DEDUCOES_RECEITA,
  '1.5- Receita Resultante do Imposto Territorial Rural – ITR (CF, art. 153, §4º, inciso III)':
    ItemReceitaTipos1520.ITR_RECEITA_RESULTANTE,
  '1.5.1- ITR': ItemReceitaTipos1520.ITR,
  '1.5.2- Multas, Juros de Mora e Outros Encargos do ITR':
    ItemReceitaTipos1520.ITR_MULTAS_JUROS_MORA,
  '1.5.3- Dívida Ativa do ITR': ItemReceitaTipos1520.ITR_DIVIDA_ATIVA,
  '1.5.4- Multas, Juros de Mora, Atualização Monetária e Outros Encargos da Dívida Ativa do ITR':
    ItemReceitaTipos1520.ITR_MULTAS_JUROS_MORA_DIVIDA_ATIVA,
  '1.5.5- (–) Deduções da Receita do ITR':
    ItemReceitaTipos1520.ITR_DEDUCOES_RECEITA,
  '2- RECEITA DE TRANSFERÊNCIAS CONSTITUCIONAIS E LEGAIS':
    ItemReceitaTipos1520.RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
  '2.1- Cota-Parte FPM': ItemReceitaTipos1520.COTA_PARTE_FPM,
  '2.1.1- Parcela referente à CF, art. 159, I, alínea b':
    ItemReceitaTipos1520.COTA_PARTE_FPM_PARCELA_CF_ART_159_I_ALINEA_B,
  '2.1.2- Parcela referente à CF, art. 159, I, alínea d':
    ItemReceitaTipos1520.COTA_PARTE_FPM_PARCELA_CF_ART_159_I_ALINEA_D,
  ' 2.1.3- Parcela referente à CF, art. 159, I, alínea e':
    ItemReceitaTipos1520.COTA_PARTE_FPM_PARCELA_CF_ART_159_I_ALINEA_E,
  '2.2- Cota-Parte ICMS': ItemReceitaTipos1520.COTA_PARTE_ICMS,
  '2.3- ICMS-Desoneração – L.C. no87/1996':
    ItemReceitaTipos1520.ICMS_DESONERACAO_LC_87_1996,
  '2.4- Cota-Parte IPI-Exportação':
    ItemReceitaTipos1520.COTA_PARTE_IPI_EXPORTACAO,
  '2.5- Cota-Parte ITR': ItemReceitaTipos1520.COTA_PARTE_ITR,
  '2.6- Cota-Parte IPVA': ItemReceitaTipos1520.COTA_PARTE_IPVA,
  '2.7- Cota-Parte IOF-Ouro': ItemReceitaTipos1520.COTA_PARTE_IOF_OURO,
  '3- TOTAL DA RECEITA DE IMPOSTOS (1 + 2)':
    ItemReceitaTipos1520.TOTAL_RECEITA_IMPOSTOS,
  '4- RECEITA DA APLICAÇÃO FINANCEIRA DE OUTROS RECURSOS DE IMPOSTOS VINCULADOS AO ENSINO':
    ItemReceitaTipos1520.RECEITA_APLICACAO_FINANCEIRA,
  '5- RECEITA DE TRANSFERÊNCIAS DO FNDE':
    ItemReceitaTipos1520.RECEITA_TRANSFERENCIAS_FNDE,
  '5.1- Transferências do Salário-Educação':
    ItemReceitaTipos1520.TRANSFERENCIAS_SALARIO_EDUCACAO,
  '5.2- Transferências Diretas PDDE':
    ItemReceitaTipos1520.TRANSFERENCIAS_DIRETAS_PDDE,
  '5.3- Transferências Diretas PNAE':
    ItemReceitaTipos1520.TRANSFERENCIAS_DIRETAS_PNAE,
  '5.4- Transferências Diretas PNATE':
    ItemReceitaTipos1520.TRANSFERENCIAS_DIRETAS_PNATE,
  '5.5- Outras Transferências do FNDE':
    ItemReceitaTipos1520.OUTRAS_TRANSFERENCIAS_FNDE,
  '5.6- Aplicação Financeira dos Recursos do FNDE':
    ItemReceitaTipos1520.APLICACAO_FINANCEIRA_FNDE,
  '6- RECEITA DE TRANSFERÊNCIAS DE CONVÊNIOS':
    ItemReceitaTipos1520.RECEITA_TRANSFERENCIAS_CONVENIOS,
  '6.1- Transferências de Convênios':
    ItemReceitaTipos1520.TRANSFERENCIAS_CONVENIOS,
  '6.2- Aplicação Financeira dos Recursos de Convênios':
    ItemReceitaTipos1520.APLICACAO_FINANCEIRA_CONVENIOS,
  '7- RECEITA DE OPERAÇÕES DE CRÉDITO':
    ItemReceitaTipos1520.RECEITA_OPERACOES_CREDITO,
  '8- OUTRAS RECEITAS PARA FINANCIAMENTO DO ENSINO':
    ItemReceitaTipos1520.OUTRAS_RECEITAS_FINANCIAMENTO_ENSINO,
  '9- TOTAL DAS RECEITAS ADICIONAIS PARA FINANCIAMENTO DO ENSINO (4 + 5 + 6 + 7 + 8)':
    ItemReceitaTipos1520.TOTAL_RECEITAS_ADICIONAIS_FINANCIAMENTO_ENSINO,
  '10- RECEITAS DESTINADAS AO FUNDEB':
    ItemReceitaTipos1520.RECEITAS_DESTINADAS_AO_FUNDEB,
  '10.1- Cota-Parte FPM Destinada ao FUNDEB – (20% de 2.1.1)':
    ItemReceitaTipos1520.COTA_PARTE_FPM_DESTINADA_AO_FUNDEB,
  '10.2- Cota-Parte ICMS Destinada ao FUNDEB – (20% de 2.2)':
    ItemReceitaTipos1520.COTA_PARTE_ICMS_DESTINADA_AO_FUNDEB,
  '10.3- ICMS-Desoneração Destinada ao FUNDEB – (20% de 2.3)':
    ItemReceitaTipos1520.ICMS_DESONERACAO_DESTINADA_AO_FUNDEB,
  '10.4- Cota-Parte IPI-Exportação Destinada ao FUNDEB – (20% de 2.4)':
    ItemReceitaTipos1520.COTA_PARTE_IPI_EXPORTACAO_DESTINADA_AO_FUNDEB,
  '10.5- Cota-Parte ITR ou ITR Arrecadados Destinados ao FUNDEB – (20% de (1.5 + 2.5))':
    ItemReceitaTipos1520.COTA_PARTE_ITR_OU_ITR_ARRECADADOS_DESTINADOS_AO_FUNDEB,
  '10.6- Cota-Parte IPVA Destinada ao FUNDEB – (20% de 2.6)':
    ItemReceitaTipos1520.COTA_PARTE_IPVA_DESTINADA_AO_FUNDEB,
  '11- RECEITAS RECEBIDAS DO FUNDEB':
    ItemReceitaTipos1520.RECEITAS_RECEBIDAS_DO_FUNDEB,
  '11.1- Transferências de Recursos do FUNDEB':
    ItemReceitaTipos1520.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
  '11.2- Complementação da União ao FUNDEB':
    ItemReceitaTipos1520.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
  '11.3- Receita de Aplicação Financeira dos Recursos do FUNDEB':
    ItemReceitaTipos1520.RECEITA_DE_APLICACAO_FINANCEIRA_DOS_RECURSOS_DO_FUNDEB,
  '12- RESULTADO LÍQUIDO DAS TRANSFERÊNCIAS DO FUNDEB (11.1 – 10)':
    ItemReceitaTipos1520.RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB,
  '22- IMPOSTOS E TRANSFERÊNCIAS DESTINADAS MDE (25% de 3)3':
    ItemReceitaTipos1520.IMPOSTOS_E_TRANSFERENCIAS_DESTINADAS_MDE,
};

export const mapeamentoDeducoesParaFinsLimiteFundeb1520: {
  [key: string]: DeducoesFinsLimiteFundebTipo1520;
} = {
  '16- RESTOS A PAGAR INSCRITOS NO EXERCÍCIO SEM DISPONIBILIDADE FINANCEIRA DE RECURSOS DO FUNDEB':
    DeducoesFinsLimiteFundebTipo1520.RESTOS_A_PAGAR_SEM_DISPONIBILIDADE_FINANCEIRA,
  '16.1 - FUNDEB 60%':
    DeducoesFinsLimiteFundebTipo1520.RESTOS_A_PAGAR_SEM_DISPONIBILIDADE_FINANCEIRA_60_PORCENTO,
  '16.2 - FUNDEB 40%':
    DeducoesFinsLimiteFundebTipo1520.RESTOS_A_PAGAR_SEM_DISPONIBILIDADE_FINANCEIRA_40_PORCENTO,
  '17- DESPESAS CUSTEADAS COM O SUPERÁVIT FINANCEIRO, DO EXERCÍCIO ANTERIOR, DO FUNDEB':
    DeducoesFinsLimiteFundebTipo1520.DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR,
  '17.1 - FUNDEB 60%':
    DeducoesFinsLimiteFundebTipo1520.DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR_60_PORCENTO,
  '17.2 - FUNDEB 40%':
    DeducoesFinsLimiteFundebTipo1520.DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR_40_PORCENTO,
  '18- TOTAL DAS DEDUÇÕES CONSIDERADAS PARA FINS DE LIMITE DO FUNDEB (16 + 17)':
    DeducoesFinsLimiteFundebTipo1520.TOTAL_DEDUCOES_PARA_FINS_LIMITE,
};

export const mapeamentoIndicadoresFundeb1520: {
  [key: string]: IndicadoresFundebTipo1520;
} = {
  '19- TOTAL DAS DESPESAS DO FUNDEB PARA FINS DE LIMITE (15 - 18)':
    IndicadoresFundebTipo1520.TOTAL_DE_DESPESAS_FUNDEB_PARA_FINS_DE_LIMITE,
  '19.1 - Mínimo de 60% do FUNDEB na remuneração do Magistério 1 (13 - (16.1 + 17.1))/ (11) x 100)%':
    IndicadoresFundebTipo1520.MINIMO_60_PORCENTO_FUNDEB_REMUNERACAO_MAGISTERIO,
  '19.2 - Máximo de 40% em Despesas com MDE, que não Remuneração do Magistério (14 - (16.2 + 17.2)) / (11) x 100)%':
    IndicadoresFundebTipo1520.MAXIMO_40_PORCENTO_DESPESAS_MDE,
  '19.3 - Máximo de 5% não Aplicado no Exercício (100 - (19.1 + 19.2))%':
    IndicadoresFundebTipo1520.MAXIMO_5_PORCENTO_NAO_APLICADO_NO_EXERCICIO,
};

export const mapeamentoControleRecursosNoExercicioSubsequente1520: {
  [key: string]: ControleRecursosNoExercicioSubsequenteTipo1520;
} = {
  '20 – RECURSOS RECEBIDOS DO FUNDEB EM 2015 QUE NÃO FORAM UTILIZADOS':
    ControleRecursosNoExercicioSubsequenteTipo1520.RECURSOS_RECEBIDOS_FUNDEB_NAO_UTILIZADOS,
  '21 – DESPESAS CUSTEADAS COM O SALDO DO ITEM 20 ATÉ O 1º TRIMESTRE DE 2016':
    ControleRecursosNoExercicioSubsequenteTipo1520.DESPESAS_CUSTEADAS_C_SALDO_FUNDEB_N_UTILIZADOS_1_TRIM_ATUAL,
};

export const mapeamentoDeducoesParaFinsDeLimitesConstitucional1520: {
  [key: string]: DeducoesParaFinsDeLimitesConstitucionalTipo1520;
} = {
  '30- RESULTADO LÍQUIDO DAS TRANSFERÊNCIAS DO FUNDEB = (12)':
    DeducoesParaFinsDeLimitesConstitucionalTipo1520.RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB,
  '31- DESPESAS CUSTEADAS COM A COMPLEMENTAÇÃO DO FUNDEB NO EXERCÍCIO':
    DeducoesParaFinsDeLimitesConstitucionalTipo1520.DESPESAS_CUSTEADAS_A_COMPLEMENTACAO_DO_FUNDEB_NO_EXERCICIO,
  '32- RECEITA DE APLICAÇÃO FINANCEIRA DOS RECURSOS DO FUNDEB ATÉ O BIMESTRE = (50 h)':
    DeducoesParaFinsDeLimitesConstitucionalTipo1520.RECEITA_DE_APLICACAO_FINANCEIRA_DOS_RECURSOS_DO_FUNDEB_ATE_BIM,
  '33- DESPESAS CUSTEADAS COM O SUPERÁVIT FINANCEIRO, DO EXERCÍCIO ANTERIOR, DO FUNDEB':
    DeducoesParaFinsDeLimitesConstitucionalTipo1520.DESPESAS_CUSTEADAS_SUPERAVIT_FINANCEIRO_DO_EXERCICIO_ANTERIOR,
  '34- DESPESAS CUSTEADAS COM O SUPERÁVIT FINANCEIRO, DO EXERCÍCIO ANTERIOR, DE OUTROS RECURSOS DE IMPOSTOS':
    DeducoesParaFinsDeLimitesConstitucionalTipo1520.DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR_OUTROS_IMPOSTOS,
  '35- RESTOS A PAGAR INSCRITOS NO EXERCÍCIO SEM DISPONIBILIDADE FINANCEIRA DE RECURSOS DE IMPOSTOS VINCULADOS AO ENSINO':
    DeducoesParaFinsDeLimitesConstitucionalTipo1520.RESTOS_A_PAGAR_INSCRITOS_SEM_DISPONIBILIDADE_FINANCEIRA,
  '36- CANCELAMENTO, NO EXERCÍCIO, DE RESTOS A PAGAR INSCRITOS COM DISPONIBILIDADE FINANCEIRA DE RECURSOS DE IMPOSTOS VINCULADOS AO ENSINO = (46 g)':
    DeducoesParaFinsDeLimitesConstitucionalTipo1520.CANCELAMENTO_RESTOS_PAGAR_INSCRITOS_DISPONIBILIDADE_FINANCEIRA,
  '37- TOTAL DAS DEDUÇÕES CONSIDERADAS PARA FINS DE LIMITE CONSTITUCIONAL (30 + 31 + 32 + 33 + 34 + 35 + 36)':
    DeducoesParaFinsDeLimitesConstitucionalTipo1520.TOTAL_DE_DEDUCOES_PARA_FINS_DE_LIMITE_CONSTITUCIONAL,
  '38- TOTAL DAS DESPESAS PARA FINS DE LIMITE ((23 + 24) – (37))':
    DeducoesParaFinsDeLimitesConstitucionalTipo1520.TOTAL_DE_DESPESAS_PARA_FINS_DE_LIMITE,
  '39- MÍNIMO DE 25% DAS RECEITAS RESULTANTES DE IMPOSTOS EM MDE5((38) / (3) x 100) %':
    DeducoesParaFinsDeLimitesConstitucionalTipo1520.MINIMO_DE_25_PORCENTO_DAS_RECEITAS_RESULTANTES_DE_IMPOSTOS_MDE,
};

export const mapeamentoFluxoFinanceiroDeRecursosFundeb1520: {
  [key: string]: FluxoFinanceiroDeRecursosFundebTipo1520;
} = {
  '47- SALDO FINANCEIRO EM 31 DE DEZEMBRO DE 2015':
    FluxoFinanceiroDeRecursosFundebTipo1520.SALDO_FINANCEIRO_31_DE_DEZEMBRO_ANO_ANTERIOR,
  '48- (+) INGRESSO DE RECURSOS ATÉ O BIMESTRE':
    FluxoFinanceiroDeRecursosFundebTipo1520.INGRESSO_RECURSOS_ATE_BIM,
  '49- (-) PAGAMENTOS EFETUADOS ATÉ O BIMESTRE':
    FluxoFinanceiroDeRecursosFundebTipo1520.PAGAMENTOS_EFETUADOS_ATE_BIM,
  '49.1- Orçamento do Exercício':
    FluxoFinanceiroDeRecursosFundebTipo1520.ORCAMENTO_DO_EXERCICIO,
  '49.2- Restos a Pagar':
    FluxoFinanceiroDeRecursosFundebTipo1520.RESTOS_A_PAGAR,
  '50- (+) RECEITA DE APLICAÇÃO FINANCEIRA DOS RECURSOS ATÉ O BIMESTRE':
    FluxoFinanceiroDeRecursosFundebTipo1520.RECEITA_APLICACAO_FINANCEIRA_DOS_RECURSOS_ATE_BIM,
  '51- (=) SALDO FINANCEIRO NO EXERCÍCIO ATUAL':
    FluxoFinanceiroDeRecursosFundebTipo1520.SALDO_FINANCEIRO_NO_EXERCICIO_ATUAL,
};

export const mapeamentoRestosAPagarInscritosDisponibilidadesFinanceira1520: {
  [key: string]: RestosAPagarInscritosDisponibilidadesFinanceiraTipo1520;
} = {
  '46- RESTOS A PAGAR DE DESPESAS COM MDE':
    RestosAPagarInscritosDisponibilidadesFinanceiraTipo1520.RESTOS_A_PAGAR_DE_DESPESA_MDE,
  '46.1- Executadas com Recursos de Impostos Vinculados ao Ensino':
    RestosAPagarInscritosDisponibilidadesFinanceiraTipo1520.EXECUTADAS_COM_RECURSOS_DE_IMPOSTOS_ENSINO,
  '46.2- Executadas com Recursos do FUNDEB':
    RestosAPagarInscritosDisponibilidadesFinanceiraTipo1520.EXECUTADAS_COM_RECURSOS_FUNDEB,
};

export const mapeamentoDespesas1520: {
  [key: string]: ItemDespesaTipos1520;
} = {
  '13- PAGAMENTO DOS PROFISSIONAIS DO MAGISTÉRIO':
    ItemDespesaTipos1520.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO,
  '13.1- Com Educação Infantil':
    ItemDespesaTipos1520.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO_EDUCACAO_INFANTIL,
  '13.2- Com Ensino Fundamental':
    ItemDespesaTipos1520.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO_ENSINO_FUNDAMENTAL,
  '14- OUTRAS DESPESAS': ItemDespesaTipos1520.FUNDEB_OUTRAS_DESPESAS,
  '14.1- Com Educação Infantil':
    ItemDespesaTipos1520.FUNDEB_OUTRAS_DESPESAS_EDUCACAO_INFANTIL,
  '14.2- Com Ensino Fundamental':
    ItemDespesaTipos1520.FUNDEB_OUTRAS_DESPESAS_ENSINO_FUNDAMENTAL,
  '15- TOTAL DAS DESPESAS DO FUNDEB (13 + 14)':
    ItemDespesaTipos1520.FUNDEB_TOTAL_DESPESAS_FUNDEB,
  '23- EDUCAÇÃO INFANTIL': ItemDespesaTipos1520.MDE_DESPESAS_EDUCACAO_INFANTIL,
  '23.1 - Creche': ItemDespesaTipos1520.MDE_DESPESAS_EDUCACAO_INFANTIL_CRECHE,
  '23.1.1 - Despesas Custeadas com Recursos do FUNDEB':
    ItemDespesaTipos1520.MDE_EDUCACAO_INFANTIL_CRECHE_DESPESAS_CUSTEADAS_FUNDEB,
  '23.1.2 - Despesas Custeadas com Outros Recursos de Impostos':
    ItemDespesaTipos1520.MDE_EDUCACAO_INFANTIL_CRECHE_DESPESAS_CUSTEADAS_OUTROS_IMPOSTOS,
  '23.2- Pré-escola':
    ItemDespesaTipos1520.MDE_DESPESAS_EDUCACAO_INFANTIL_PRE_ESCOLA,
  '23.2.1 - Despesas Custeadas com Recursos do FUNDEB':
    ItemDespesaTipos1520.MDE_EDUCACAO_INFANTIL_PRE_ESCOLA_DESPESAS_CUSTEADAS_FUNDEB,
  '23.2.2 - Despesas Custeadas com Outros Recursos de Impostos':
    ItemDespesaTipos1520.MDE_EDUCACAO_INFANTIL_PRE_ESCOLA_DESPESAS_CUSTEADAS_IMPOSTOS,
  '24- ENSINO FUNDAMENTAL':
    ItemDespesaTipos1520.MDE_DESPESAS_ENSINO_FUNDAMENTAL,
  '24.1- Despesas Custeadas com Recursos do FUNDEB':
    ItemDespesaTipos1520.MDE_ENSINO_FUNDAMENTAL_DESPESAS_CUSTEADAS_FUNDEB,
  '24.2- Despesas Custeadas com Outros Recursos de Impostos':
    ItemDespesaTipos1520.MDE_ENSINO_FUNDAMENTAL_DESPESAS_CUSTEADAS_OUTROS_IMPOSTOS,
  '25- ENSINO MÉDIO': ItemDespesaTipos1520.MDE_DESPESAS_ENSINO_MEDIO,
  '26- ENSINO SUPERIOR': ItemDespesaTipos1520.MDE_DESPESAS_ENSINO_SUPERIOR,
  '27- ENSINO PROFISSIONAL NÃO INTEGRADO AO ENSINO REGULAR':
    ItemDespesaTipos1520.MDE_DESPESAS_ENSINO_PROFISSIONAL_NAO_INTEGRADO_ENSINO_REGULAR,
  '28- OUTRAS': ItemDespesaTipos1520.MDE_OUTRAS_DESPESAS,
  '29- TOTAL DAS DESPESAS COM AÇÕES TÍPICAS MDE (23 + 24 + 25 + 26 + 27 + 28)':
    ItemDespesaTipos1520.MDE_TOTAL_DESPESAS_ACOES_TIPICAS,
  '40- DESPESAS CUSTEADAS COM A APLICAÇÃO FINANCEIRA DE OUTROS RECURSOS DE IMPOSTOS VINCULADOS AO ENSINO':
    ItemDespesaTipos1520.DESPESAS_CUSTEADAS_APLICACAO_FINANCEIRA_VINCULADAS_ENSINO,
  '41- DESPESAS CUSTEADAS COM A CONTRIBUIÇÃO SOCIAL DO SALÁRIO-EDUCAÇÃO':
    ItemDespesaTipos1520.DESPESAS_CUSTEADAS_CONTRIBUICAO_SOCIAL_SALARIO_EDUCACAO,
  '42- DESPESAS CUSTEADAS COM OPERAÇÕES DE CRÉDITO':
    ItemDespesaTipos1520.DESPESAS_CUSTEADAS_OPERACOES_CREDITO,
  '43- DESPESAS CUSTEADAS COM OUTRAS RECEITAS PARA FINANCIAMENTO DO ENSINO':
    ItemDespesaTipos1520.DESPESAS_CUSTEADAS_OUTRAS_RECEITAS_FINANCIAMENTO_ENSINO,
  '44- TOTAL DAS OUTRAS DESPESAS CUSTEADAS COM RECEITAS ADICIONAIS PARA FINANCIAMENTO DO ENS (40 + 41 + 42 + 43)':
    ItemDespesaTipos1520.TOTAL_OUTRAS_DESPESAS_CUSTEADAS_FINANCIAMENTO_ENSINO,
  '45- TOTAL GERAL DAS DESPESAS COM MDE (29 + 44)':
    ItemDespesaTipos1520.TOTAL_GERAL_DESPESAS_MDE,
};
