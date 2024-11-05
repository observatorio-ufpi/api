import {
  ControleDisponibilidadeFinanceiraTipo1920,
  ControleRecursosNoExercicioSubsequenteTipo1920,
  DeducoesFinsLimiteFundebTipo1920,
  DeducoesParaFinsDeLimitesConstitucionalTipo1920,
  IndicadoresFundebTipo1920,
  ItemDespesaTipos1920,
  ItemReceitaTipos1920,
  RestosAPagarInscritosDisponibilidadesFinanceiraTipo1920,
} from '@prisma/client';

export const mapeamentoReceitas1920: {
  [key: string]: ItemReceitaTipos1920;
} = {
  '1- RECEITA DE IMPOSTOS': ItemReceitaTipos1920.RECEITA_DE_IMPOSTOS,
  '1.1- Receita Resultante do Imposto sobre a Propriedade Predial e Territorial Urbana - IPTU':
    ItemReceitaTipos1920.IPTU_RECEITA_RESULTANTE,
  '1.1.1- IPTU': ItemReceitaTipos1920.IPTU,
  '1.1.2- Multas, Juros de Mora e Outros Encargos do IPTU':
    ItemReceitaTipos1920.IPTU_MULTAS_JUROS_MORA,
  '1.2- Receita Resultante do Imposto sobre Transmissão Inter Vivos – ITBI':
    ItemReceitaTipos1920.ITBI_RECEITA_RESULTANTE,
  '1.2.1- ITBI': ItemReceitaTipos1920.ITBI,
  '1.2.2- Multas, Juros de Mora e Outros Encargos do ITBI':
    ItemReceitaTipos1920.ITBI_MULTAS_JUROS_MORA,
  '1.3- Receita Resultante do Imposto sobre Serviços de Qualquer Natureza – ISS':
    ItemReceitaTipos1920.ISS_RECEITA_RESULTANTE,
  '1.3.1- ISS': ItemReceitaTipos1920.ISS,
  '1.3.2- Multas, Juros de Mora e Outros Encargos do ISS':
    ItemReceitaTipos1920.ISS_MULTAS_JUROS_MORA,
  '1.4- Receita Resultante do Imposto de Renda Retido na Fonte – IRRF':
    ItemReceitaTipos1920.IRRF_RECEITA_RESULTANTE,
  '2- RECEITA DE TRANSFERÊNCIAS CONSTITUCIONAIS E LEGAIS':
    ItemReceitaTipos1920.RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
  '2.1- Cota-Parte FPM': ItemReceitaTipos1920.COTA_PARTE_FPM,
  '2.1.1- Parcela referente à CF, art. 159, I, alínea b':
    ItemReceitaTipos1920.COTA_PARTE_FPM_PARCELA_CF_ART_159_I_ALINEA_B,
  '2.1.2- Parcela referente à CF, art. 159, I, alínea d':
    ItemReceitaTipos1920.COTA_PARTE_FPM_PARCELA_CF_ART_159_I_ALINEA_D,
  ' 2.1.3- Parcela referente à CF, art. 159, I, alínea e':
    ItemReceitaTipos1920.COTA_PARTE_FPM_PARCELA_CF_ART_159_I_ALINEA_E,
  '2.2- Cota-Parte ICMS': ItemReceitaTipos1920.COTA_PARTE_ICMS,
  '2.3- ICMS-Desoneração – L.C. no87/1996':
    ItemReceitaTipos1920.ICMS_DESONERACAO_LC_87_1996,
  '2.4- Cota-Parte IPI-Exportação':
    ItemReceitaTipos1920.COTA_PARTE_IPI_EXPORTACAO,
  '2.5- Cota-Parte ITR': ItemReceitaTipos1920.COTA_PARTE_ITR,
  '2.6- Cota-Parte IPVA': ItemReceitaTipos1920.COTA_PARTE_IPVA,
  '2.7- Cota-Parte IOF-Ouro': ItemReceitaTipos1920.COTA_PARTE_IOF_OURO,
  '3- TOTAL DA RECEITA DE IMPOSTOS (1 + 2)':
    ItemReceitaTipos1920.TOTAL_RECEITA_IMPOSTOS,
  '4- RECEITA DA APLICAÇÃO FINANCEIRA DE OUTROS RECURSOS DE IMPOSTOS VINCULADOS AO ENSINO':
    ItemReceitaTipos1920.RECEITA_APLICACAO_FINANCEIRA,
  '5- RECEITA DE TRANSFERÊNCIAS DO FNDE':
    ItemReceitaTipos1920.RECEITA_TRANSFERENCIAS_FNDE,
  '5.1- Transferências do Salário-Educação':
    ItemReceitaTipos1920.TRANSFERENCIAS_SALARIO_EDUCACAO,
  '5.2- Transferências Diretas PDDE':
    ItemReceitaTipos1920.TRANSFERENCIAS_DIRETAS_PDDE,
  '5.3- Transferências Diretas PNAE':
    ItemReceitaTipos1920.TRANSFERENCIAS_DIRETAS_PNAE,
  '5.4- Transferências Diretas PNATE':
    ItemReceitaTipos1920.TRANSFERENCIAS_DIRETAS_PNATE,
  '5.5- Outras Transferências do FNDE':
    ItemReceitaTipos1920.OUTRAS_TRANSFERENCIAS_FNDE,
  '5.6- Aplicação Financeira dos Recursos do FNDE':
    ItemReceitaTipos1920.APLICACAO_FINANCEIRA_FNDE,
  '6- RECEITA DE TRANSFERÊNCIAS DE CONVÊNIOS':
    ItemReceitaTipos1920.RECEITA_TRANSFERENCIAS_CONVENIOS,
  '6.1- Transferências de Convênios':
    ItemReceitaTipos1920.TRANSFERENCIAS_CONVENIOS,
  '6.2- Aplicação Financeira dos Recursos de Convênios':
    ItemReceitaTipos1920.APLICACAO_FINANCEIRA_CONVENIOS,
  '7- RECEITA DE OPERAÇÕES DE CRÉDITO':
    ItemReceitaTipos1920.RECEITA_OPERACOES_CREDITO,
  '8- OUTRAS RECEITAS PARA FINANCIAMENTO DO ENSINO':
    ItemReceitaTipos1920.OUTRAS_RECEITAS_FINANCIAMENTO_ENSINO,
  '9- TOTAL DAS RECEITAS ADICIONAIS PARA FINANCIAMENTO DO ENSINO (4 + 5 + 6 + 7 + 8)':
    ItemReceitaTipos1920.TOTAL_RECEITAS_ADICIONAIS_FINANCIAMENTO_ENSINO,
  '10- RECEITAS DESTINADAS AO FUNDEB':
    ItemReceitaTipos1920.RECEITAS_DESTINADAS_AO_FUNDEB,
  '10.1- Cota-Parte FPM Destinada ao FUNDEB – (20% de 2.1.1)':
    ItemReceitaTipos1920.COTA_PARTE_FPM_DESTINADA_AO_FUNDEB,
  '10.2- Cota-Parte ICMS Destinada ao FUNDEB – (20% de 2.2)':
    ItemReceitaTipos1920.COTA_PARTE_ICMS_DESTINADA_AO_FUNDEB,
  '10.3- ICMS-Desoneração Destinada ao FUNDEB – (20% de 2.3)':
    ItemReceitaTipos1920.ICMS_DESONERACAO_DESTINADA_AO_FUNDEB,
  '10.4- Cota-Parte IPI-Exportação Destinada ao FUNDEB – (20% de 2.4)':
    ItemReceitaTipos1920.COTA_PARTE_IPI_EXPORTACAO_DESTINADA_AO_FUNDEB,
  '10.5- Cota-Parte ITR ou ITR Arrecadados Destinados ao FUNDEB – (20% de (1.5 + 2.5))':
    ItemReceitaTipos1920.COTA_PARTE_ITR_OU_ITR_ARRECADADOS_DESTINADOS_AO_FUNDEB,
  '10.6- Cota-Parte IPVA Destinada ao FUNDEB – (20% de 2.6)':
    ItemReceitaTipos1920.COTA_PARTE_IPVA_DESTINADA_AO_FUNDEB,
  '11- RECEITAS RECEBIDAS DO FUNDEB':
    ItemReceitaTipos1920.RECEITAS_RECEBIDAS_DO_FUNDEB,
  '11.1- Transferências de Recursos do FUNDEB':
    ItemReceitaTipos1920.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB,
  '11.2- Complementação da União ao FUNDEB':
    ItemReceitaTipos1920.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB,
  '11.3- Receita de Aplicação Financeira dos Recursos do FUNDEB':
    ItemReceitaTipos1920.RECEITA_DE_APLICACAO_FINANCEIRA_DOS_RECURSOS_DO_FUNDEB,
  '12- RESULTADO LÍQUIDO DAS TRANSFERÊNCIAS DO FUNDEB (11.1 – 10)':
    ItemReceitaTipos1920.RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB,
};

export const mapeamentoDeducoesParaFinsLimiteFundeb1920: {
  [key: string]: DeducoesFinsLimiteFundebTipo1920;
} = {
  '16- RESTOS A PAGAR INSCRITOS NO EXERCÍCIO SEM DISPONIBILIDADE FINANCEIRA DE RECURSOS DO FUNDEB':
    DeducoesFinsLimiteFundebTipo1920.RESTOS_A_PAGAR_SEM_DISPONIBILIDADE_FINANCEIRA,
  '16.1 - FUNDEB 60%':
    DeducoesFinsLimiteFundebTipo1920.RESTOS_A_PAGAR_SEM_DISPONIBILIDADE_FINANCEIRA_60_PORCENTO,
  '16.2 - FUNDEB 40%':
    DeducoesFinsLimiteFundebTipo1920.RESTOS_A_PAGAR_SEM_DISPONIBILIDADE_FINANCEIRA_40_PORCENTO,
  '17- DESPESAS CUSTEADAS COM O SUPERÁVIT FINANCEIRO, DO EXERCÍCIO ANTERIOR, DO FUNDEB':
    DeducoesFinsLimiteFundebTipo1920.DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR,
  '17.1 - FUNDEB 60%':
    DeducoesFinsLimiteFundebTipo1920.DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR_60_PORCENTO,
  '17.2 - FUNDEB 40%':
    DeducoesFinsLimiteFundebTipo1920.DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR_40_PORCENTO,
  '18- TOTAL DAS DEDUÇÕES CONSIDERADAS PARA FINS DE LIMITE DO FUNDEB (16 + 17)':
    DeducoesFinsLimiteFundebTipo1920.TOTAL_DEDUCOES_PARA_FINS_LIMITE,
};

export const mapeamentoIndicadoresFundeb1920: {
  [key: string]: IndicadoresFundebTipo1920;
} = {
  '19- TOTAL DAS DESPESAS DO FUNDEB PARA FINS DE LIMITE (15 - 18)':
    IndicadoresFundebTipo1920.TOTAL_DE_DESPESAS_FUNDEB_PARA_FINS_DE_LIMITE,
  '19.1 - Mínimo de 60% do FUNDEB na remuneração do Magistério 1 (13 - (16.1 + 17.1))/ (11) x 100)%':
    IndicadoresFundebTipo1920.MINIMO_60_PORCENTO_FUNDEB_REMUNERACAO_MAGISTERIO,
  '19.2 - Máximo de 40% em Despesas com MDE, que não Remuneração do Magistério (14 - (16.2 + 17.2)) / (11) x 100)%':
    IndicadoresFundebTipo1920.MAXIMO_40_PORCENTO_DESPESAS_MDE,
  '19.3 - Máximo de 5% não Aplicado no Exercício (100 - (19.1 + 19.2))%':
    IndicadoresFundebTipo1920.MAXIMO_5_PORCENTO_NAO_APLICADO_NO_EXERCICIO,
};

export const mapeamentoControleRecursosNoExercicioSubsequente1920: {
  [key: string]: ControleRecursosNoExercicioSubsequenteTipo1920;
} = {
  '20 – RECURSOS RECEBIDOS DO FUNDEB EM 2015 QUE NÃO FORAM UTILIZADOS':
    ControleRecursosNoExercicioSubsequenteTipo1920.RECURSOS_RECEBIDOS_FUNDEB_NAO_UTILIZADOS,
  '21 – DESPESAS CUSTEADAS COM O SALDO DO ITEM 20 ATÉ O 1º TRIMESTRE DE 2016':
    ControleRecursosNoExercicioSubsequenteTipo1920.DESPESAS_CUSTEADAS_C_SALDO_FUNDEB_N_UTILIZADOS_1_TRIM_ATUAL,
};

export const mapeamentoDeducoesParaFinsDeLimitesConstitucional1920: {
  [key: string]: DeducoesParaFinsDeLimitesConstitucionalTipo1920;
} = {
  '29- RESULTADO LÍQUIDO DAS TRANSFERÊNCIAS DO FUNDEB = (12)':
    DeducoesParaFinsDeLimitesConstitucionalTipo1920.RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB,
  '30- DESPESAS CUSTEADAS COM A COMPLEMENTAÇÃO DO FUNDEB NO EXERCÍCIO':
    DeducoesParaFinsDeLimitesConstitucionalTipo1920.DESPESAS_CUSTEADAS_A_COMPLEMENTACAO_DO_FUNDEB_NO_EXERCICIO,
  '31- DESPESAS CUSTEADAS COM O SUPERÁVIT FINANCEIRO, DO EXERCÍCIO ANTERIOR, DO FUNDEB':
    DeducoesParaFinsDeLimitesConstitucionalTipo1920.DESPESAS_CUSTEADAS_SUPERAVIT_FINANCEIRO_DO_EXERCICIO_ANTERIOR,
  '32- DESPESAS CUSTEADAS COM O SUPERÁVIT FINANCEIRO, DO EXERCÍCIO ANTERIOR, DE OUTROS RECURSOS DE IMPOSTOS':
    DeducoesParaFinsDeLimitesConstitucionalTipo1920.DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR_OUTROS_IMPOSTOS,
  '33- RESTOS A PAGAR INSCRITOS NO EXERCÍCIO SEM DISPONIBILIDADE FINANCEIRA DE RECURSOS DE IMPOSTOS VINCULADOS AO ENSINO':
    DeducoesParaFinsDeLimitesConstitucionalTipo1920.RESTOS_A_PAGAR_INSCRITOS_SEM_DISPONIBILIDADE_FINANCEIRA,
  '34- CANCELAMENTO, NO EXERCÍCIO, DE RESTOS A PAGAR INSCRITOS COM DISPONIBILIDADE FINANCEIRA DE RECURSOS DE IMPOSTOS VINCULADOS AO ENSINO = (45 g)':
    DeducoesParaFinsDeLimitesConstitucionalTipo1920.CANCELAMENTO_RESTOS_PAGAR_INSCRITOS_DISPONIBILIDADE_FINANCEIRA,
  '35- TOTAL DAS DEDUÇÕES CONSIDERADAS PARA FINS DE LIMITE CONSTITUCIONAL (29 + 30 + 31 + 32 + 33 + 34)':
    DeducoesParaFinsDeLimitesConstitucionalTipo1920.TOTAL_DE_DEDUCOES_PARA_FINS_DE_LIMITE_CONSTITUCIONAL,
  '36- TOTAL DAS DESPESAS PARA FINS DE LIMITE ((22 + 23) – (36))':
    DeducoesParaFinsDeLimitesConstitucionalTipo1920.TOTAL_DE_DESPESAS_PARA_FINS_DE_LIMITE,
  '37- PERCENTUAL DE APLICAÇÃO EM MDE SOBRE A RECEITA LÍQUIDA DE IMPOSTOS ((36) / (3) x 100) % 6 - LIMITE CONSTITUCIONAL 25%':
    DeducoesParaFinsDeLimitesConstitucionalTipo1920.PERCENTUAL_DE_APLICACAO_MDE_SOBRE_RECEITA_LIQUIDA_IMPOSTOS,
};

export const mapeamentoControleDisponibilidadeFinanceira1920: {
  [key: string]: ControleDisponibilidadeFinanceiraTipo1920;
} = {
  '45- SALDO FINANCEIRO EM 31 DE DEZEMBRO DE 2015':
    ControleDisponibilidadeFinanceiraTipo1920.SALDO_FINANCEIRO_31_DE_DEZEMBRO_ANO_ANTERIOR,
  '46- (+) INGRESSO DE RECURSOS ATÉ O BIMESTRE':
    ControleDisponibilidadeFinanceiraTipo1920.INGRESSO_RECURSOS_ATE_BIM,
  '47- (-) PAGAMENTOS EFETUADOS ATÉ O BIMESTRE':
    ControleDisponibilidadeFinanceiraTipo1920.PAGAMENTOS_EFETUADOS_ATE_BIM,
  '47.1- Orçamento do Exercício':
    ControleDisponibilidadeFinanceiraTipo1920.ORCAMENTO_DO_EXERCICIO,
  '47.2- Restos a Pagar':
    ControleDisponibilidadeFinanceiraTipo1920.RESTOS_A_PAGAR,
  '48- (+) RECEITA DE APLICAÇÃO FINANCEIRA DOS RECURSOS ATÉ O BIMESTRE':
    ControleDisponibilidadeFinanceiraTipo1920.RECEITA_APLICACAO_FINANCEIRA_DOS_RECURSOS_ATE_BIM,
  '49- (=) DISPONIBILIDADE FINANCEIRA ATÉ O BIMESTRE':
    ControleDisponibilidadeFinanceiraTipo1920.DISPONIBILIDADE_FINANCEIRA_ATE_O_BIM,
  '50- (+) AJUSTES': ControleDisponibilidadeFinanceiraTipo1920.AJUSTES,
  '50.1- Retenções': ControleDisponibilidadeFinanceiraTipo1920.RETENCOES,
  '50.2- Conciliação Bancária':
    ControleDisponibilidadeFinanceiraTipo1920.CONCILIACAO_BANCARIA,
  '50.3- Valor a Recuperar':
    ControleDisponibilidadeFinanceiraTipo1920.VALOR_A_RECUPERAR,
  '50.4- Outros valores Extra Orçamentário':
    ControleDisponibilidadeFinanceiraTipo1920.OUTROS_VALORES_EXTRA_ORCAMENTARIO,
  '51- (=) SALDO FINANCEIRO CONCILIADO':
    ControleDisponibilidadeFinanceiraTipo1920.SALDO_FINANCEIRO_CONCILIADO,
};

export const mapeamentoRestosAPagarInscritosDisponibilidadesFinanceira1920: {
  [key: string]: RestosAPagarInscritosDisponibilidadesFinanceiraTipo1920;
} = {
  '44- RESTOS A PAGAR DE DESPESAS COM MDE':
    RestosAPagarInscritosDisponibilidadesFinanceiraTipo1920.RESTOS_A_PAGAR_DE_DESPESA_MDE,
  '44.1- Executadas com Recursos de Impostos Vinculados ao Ensino':
    RestosAPagarInscritosDisponibilidadesFinanceiraTipo1920.EXECUTADAS_COM_RECURSOS_DE_IMPOSTOS_ENSINO,
  '44.2- Executadas com Recursos do FUNDEB':
    RestosAPagarInscritosDisponibilidadesFinanceiraTipo1920.EXECUTADAS_COM_RECURSOS_FUNDEB,
};

export const mapeamentoDespesas1920: {
  [key: string]: ItemDespesaTipos1920;
} = {
  '13- PAGAMENTO DOS PROFISSIONAIS DO MAGISTÉRIO':
    ItemDespesaTipos1920.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO,
  '13.1- Com Educação Infantil':
    ItemDespesaTipos1920.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO_EDUCACAO_INFANTIL,
  '13.2- Com Ensino Fundamental':
    ItemDespesaTipos1920.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO_ENSINO_FUNDAMENTAL,
  '14- OUTRAS DESPESAS': ItemDespesaTipos1920.FUNDEB_OUTRAS_DESPESAS,
  '14.1- Com Educação Infantil':
    ItemDespesaTipos1920.FUNDEB_OUTRAS_DESPESAS_EDUCACAO_INFANTIL,
  '14.2- Com Ensino Fundamental':
    ItemDespesaTipos1920.FUNDEB_OUTRAS_DESPESAS_ENSINO_FUNDAMENTAL,
  '15- TOTAL DAS DESPESAS DO FUNDEB (13 + 14)':
    ItemDespesaTipos1920.FUNDEB_TOTAL_DESPESAS_FUNDEB,
  '22- EDUCAÇÃO INFANTIL': ItemDespesaTipos1920.MDE_DESPESAS_EDUCACAO_INFANTIL,
  '22.1 - Creche': ItemDespesaTipos1920.MDE_DESPESAS_EDUCACAO_INFANTIL_CRECHE,
  '22.1.1 - Despesas Custeadas com Recursos do FUNDEB':
    ItemDespesaTipos1920.MDE_EDUCACAO_INFANTIL_CRECHE_DESPESAS_CUSTEADAS_FUNDEB,
  '22.1.2 - Despesas Custeadas com Outros Recursos de Impostos':
    ItemDespesaTipos1920.MDE_EDUCACAO_INFANTIL_CRECHE_DESPESAS_CUSTEADAS_OUTROS_IMPOSTOS,
  '22.2- Pré-escola':
    ItemDespesaTipos1920.MDE_DESPESAS_EDUCACAO_INFANTIL_PRE_ESCOLA,
  '22.2.1 - Despesas Custeadas com Recursos do FUNDEB':
    ItemDespesaTipos1920.MDE_EDUCACAO_INFANTIL_PRE_ESCOLA_DESPESAS_CUSTEADAS_FUNDEB,
  '22.2.2 - Despesas Custeadas com Outros Recursos de Impostos':
    ItemDespesaTipos1920.MDE_EDUCACAO_INFANTIL_PRE_ESCOLA_DESPESAS_CUSTEADAS_IMPOSTOS,
  '23- ENSINO FUNDAMENTAL':
    ItemDespesaTipos1920.MDE_DESPESAS_ENSINO_FUNDAMENTAL,
  '23.1- Despesas Custeadas com Recursos do FUNDEB':
    ItemDespesaTipos1920.MDE_ENSINO_FUNDAMENTAL_DESPESAS_CUSTEADAS_FUNDEB,
  '23.2- Despesas Custeadas com Outros Recursos de Impostos':
    ItemDespesaTipos1920.MDE_ENSINO_FUNDAMENTAL_DESPESAS_CUSTEADAS_OUTROS_IMPOSTOS,
  '24- ENSINO MÉDIO': ItemDespesaTipos1920.MDE_DESPESAS_ENSINO_MEDIO,
  '25- ENSINO SUPERIOR': ItemDespesaTipos1920.MDE_DESPESAS_ENSINO_SUPERIOR,
  '26- ENSINO PROFISSIONAL NÃO INTEGRADO AO ENSINO REGULAR':
    ItemDespesaTipos1920.MDE_DESPESAS_ENSINO_PROFISSIONAL_NAO_INTEGRADO_ENSINO_REGULAR,
  '27- OUTRAS': ItemDespesaTipos1920.MDE_OUTRAS_DESPESAS,
  '28- TOTAL DAS DESPESAS COM AÇÕES TÍPICAS MDE (22 + 23 + 24 + 25 + 26 + 27)':
    ItemDespesaTipos1920.MDE_TOTAL_DESPESAS_ACOES_TIPICAS,
  '38- DESPESAS CUSTEADAS COM A APLICAÇÃO FINANCEIRA DE OUTROS RECURSOS DE IMPOSTOS VINCULADOS AO ENSINO':
    ItemDespesaTipos1920.DESPESAS_CUSTEADAS_APLICACAO_FINANCEIRA_VINCULADAS_ENSINO,
  '39- DESPESAS CUSTEADAS COM A CONTRIBUIÇÃO SOCIAL DO SALÁRIO-EDUCAÇÃO':
    ItemDespesaTipos1920.DESPESAS_CUSTEADAS_CONTRIBUICAO_SOCIAL_SALARIO_EDUCACAO,
  '40- DESPESAS CUSTEADAS COM OPERAÇÕES DE CRÉDITO':
    ItemDespesaTipos1920.DESPESAS_CUSTEADAS_OPERACOES_CREDITO,
  '41- DESPESAS CUSTEADAS COM OUTRAS RECEITAS PARA FINANCIAMENTO DO ENSINO':
    ItemDespesaTipos1920.DESPESAS_CUSTEADAS_OUTRAS_RECEITAS_FINANCIAMENTO_ENSINO,
  '42- TOTAL DAS OUTRAS DESPESAS CUSTEADAS COM RECEITAS ADICIONAIS PARA FINANCIAMENTO DO ENSINO (38 + 39 + 40 + 41)':
    ItemDespesaTipos1920.TOTAL_OUTRAS_DESPESAS_CUSTEADAS_FINANCIAMENTO_ENSINO,
  '43- TOTAL GERAL DAS DESPESAS COM EDUCAÇÂO (28 + 42)':
    ItemDespesaTipos1920.TOTAL_GERAL_DESPESAS_MDE,
};
