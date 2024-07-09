import {
  ControleRecursosNoExercicioSubsequenteEstadualTipo1920,
  DeducoesFinsLimiteFundebEstadualTipo1920,
  DeducoesParaFinsDeLimitesConstitucionalEstadualTipo1920,
  FluxoFinanceiroRecursosEstadualTipos1920,
  IndicadoresFundebEstadualTipo1920,
  ItemDespesaEstadualTipos1920,
  ItemReceitaEstadualTipos1920,
  RestosAPagarInscritosDisponibilidadesFinanceiraEstadualTipo1920,
} from '@prisma/client';

export const mapeamentoReceitasEstadual1920: {
  [key: string]: ItemReceitaEstadualTipos1920;
} = {
  '1- RECEITA DE IMPOSTOS': ItemReceitaEstadualTipos1920.RECEITA_IMPOSTOS,
  '1.1- Receita Resultante do Imposto sobre a Circulação de Mercadorias e Serviços de Transporte Interestadual e Intermunicipal e de Comunicação - ICMS':
    ItemReceitaEstadualTipos1920.RECEITA_RESULTANTE_ICMS,
  '1.1.1- ICMS': ItemReceitaEstadualTipos1920.ICMS,
  '1.1.2- Multas, Juros de Mora e Outros Encargos do ICMS':
    ItemReceitaEstadualTipos1920.ICMS_MULTAS_JUROS_ENCARGOS,
  '1.1.3- Adicional de até 2% do ICMS destinado ao Fundo de Combate à Pobreza (ADCT, art. 82, §1º)':
    ItemReceitaEstadualTipos1920.ICMS_ADICIONAL_2_PORCENTO,
  '1.2- Receita Resultante do Imposto de Transmissão Causa Mortis e Doação de Bens e Direitos - ITCD':
    ItemReceitaEstadualTipos1920.RECEITA_RESULTANTE_ITCD,
  '1.2.1- ITCD': ItemReceitaEstadualTipos1920.ITCD,
  '1.2.2- Multas, Juros de Mora e Outros Encargos do ITCD':
    ItemReceitaEstadualTipos1920.ITCD_MULTAS_JUROS_ENCARGOS,
  '1.3- Receita Resultante do Imposto sobre a Propriedade de Veículos Automotores - IPVA':
    ItemReceitaEstadualTipos1920.RECEITA_RESULTANTE_IPVA,
  '1.3.1- IPVA': ItemReceitaEstadualTipos1920.IPVA,
  '1.3.2- Multas, Juros de Mora e Outros Encargos do IPVA':
    ItemReceitaEstadualTipos1920.IPVA_MULTAS_JUROS_ENCARGOS,
  '1.4- Receita Resultante do Imposto de Renda Retido na Fonte – IRRF':
    ItemReceitaEstadualTipos1920.IRRF,
  '2- RECEITA DE TRANSFERÊNCIAS CONSTITUCIONAIS E LEGAIS':
    ItemReceitaEstadualTipos1920.TRANSFERENCIAS_CONSTITUCIONAIS_LEGAIS,
  '2.1- Cota-Parte FPE': ItemReceitaEstadualTipos1920.FPE,
  '2.2- ICMS-Desoneração – L.C. nº 87/1996':
    ItemReceitaEstadualTipos1920.ICMS_DESONERACAO,
  '2.3- Cota-Parte IPI-Exportação': ItemReceitaEstadualTipos1920.IPI_EXPORTACAO,
  '2.4- Cota-Parte IOF-Ouro': ItemReceitaEstadualTipos1920.IOF_OURO,
  '3- DEDUÇÕES DE TRANSFERÊNCIAS CONSTITUCIONAIS AOS MUNICIPIOS':
    ItemReceitaEstadualTipos1920.DEDUCOES_TRANSFERENCIAS_CONSTITUCIONAIS_MUNICIPIOS,
  '3.1- PARCELA DO ICMS REPASSADA AOS MUNICÍPIOS (25% de (1.1 - 1.1.3))':
    ItemReceitaEstadualTipos1920.DEDUCAO_ICMS_MUNICIPIOS,
  '3.2- PARCELA DO IPVA REPASSADA AOS MUNICÍPIOS (50% de 1.3)':
    ItemReceitaEstadualTipos1920.DEDUCAO_IPVA_MUNICIPIOS,
  '3.3- PARCELA DA COTA-PARTE DO IPI EXPORTAÇÃO REPASSADA AOS MUNICÍPIOS (25% de 2.3)':
    ItemReceitaEstadualTipos1920.DEDUCAO_IPI_EXPORTACAO_MUNICIPIOS,
  '4- TOTAL DA RECEITA LÍQUIDA DE IMPOSTOS (1 + 2 - 3)':
    ItemReceitaEstadualTipos1920.TOTAL_RECEITA_LIQUIDA_IMPOSTOS,
  '5- RECEITA DA APLICAÇÃO FINANCEIRA DE OUTROS RECURSOS DE IMPOSTOS VINCULADOS AO ENSINO':
    ItemReceitaEstadualTipos1920.APLICACAO_FINANCEIRA_IMPOSTOS_ENSINO,
  '6- RECEITA DE TRANSFERÊNCIAS DO FNDE':
    ItemReceitaEstadualTipos1920.TRANSFERENCIAS_FNDE,
  '6.1- Transferências do Salário Educação':
    ItemReceitaEstadualTipos1920.TRANSFERENCIAS_SALARIO_EDUCACAO,
  '6.2- Transferências Diretas - PDDE':
    ItemReceitaEstadualTipos1920.TRANSFERENCIAS_DIRETAS_PDDE,
  '6.3- Transferências Diretas - PNAE':
    ItemReceitaEstadualTipos1920.TRANSFERENCIAS_DIRETAS_PNAE,
  '6.4- Transferências Diretas - PNATE':
    ItemReceitaEstadualTipos1920.TRANSFERENCIAS_DIRETAS_PNATE,
  '6.5- Outras Transferências do FNDE':
    ItemReceitaEstadualTipos1920.OUTRAS_TRANSFERENCIAS_FNDE,
  '6.6- Aplicação Financeira dos Recursos do FNDE':
    ItemReceitaEstadualTipos1920.APLICACAO_FINANCEIRA_FNDE,
  '7- RECEITA DE TRANSFERÊNCIAS DE CONVÊNIOS':
    ItemReceitaEstadualTipos1920.RECEITA_TRANSFERENCIAS_CONVENIOS,
  '7.1- Transferências de Convênios':
    ItemReceitaEstadualTipos1920.TRANSFERENCIAS_CONVENIOS,
  '7.2- Aplicação Financeira dos Recursos de Convênios':
    ItemReceitaEstadualTipos1920.APLICACAO_FINANCEIRA_RECURSOS_CONVENIOS,
  '8- RECEITA DE OPERAÇÕES DE CRÉDITO':
    ItemReceitaEstadualTipos1920.OPERACOES_CREDITO,
  '9- OUTRAS RECEITAS PARA FINANCIAMENTO DO ENSINO':
    ItemReceitaEstadualTipos1920.OUTRAS_RECEITAS_FINANCIAMENTO_ENSINO,
  '10- TOTAL DAS RECEITAS ADICIONAIS PARA FINANCIAMENTO DO ENSINO (4 + 5 + 6 + 7 + 8 + 9)':
    ItemReceitaEstadualTipos1920.TOTAL_RECEITAS_ADICIONAIS_FINANCIAMENTO_ENSINO,
  '11- RECEITAS DESTINADAS AO FUNDEB':
    ItemReceitaEstadualTipos1920.RECEITAS_DESTINADAS_AO_FUNDEB,
  '11.1- Receita Resultante do ICMS Destinada ao FUNDEB - (20% de (1.1 - 1.1.3))':
    ItemReceitaEstadualTipos1920.RECEITA_RESULTANTE_ICMS_FUNDEB,
  '11.2- Receita Resultante do ITCD Destinada ao FUNDEB - (20% de 1.2)':
    ItemReceitaEstadualTipos1920.RECEITA_RESULTANTE_ITCD_FUNDEB,
  '11.3- Receita Resultante do IPVA Destinada ao FUNDEB - (20% de (1.3 - 3.2))':
    ItemReceitaEstadualTipos1920.RECEITA_RESULTANTE_IPVA_FUNDEB,
  '11.4- Cota-Parte FPE Destinada ao FUNDEB - (20% de 2.1)':
    ItemReceitaEstadualTipos1920.COTA_PARTE_FPE_FUNDEB,
  '11.5- ICMS-Desoneração Destinada ao FUNDEB - (20% de 2.2)':
    ItemReceitaEstadualTipos1920.ICMS_DESONERACAO_FUNDEB,
  '11.6- Cota-Parte IPI-Exportação Destinada ao FUNDEB (20% de (2.3 - 3.3))':
    ItemReceitaEstadualTipos1920.COTA_PARTE_IPI_EXPORTACAO_FUNDEB,
  '12- RECEITAS RECEBIDAS DO FUNDEB':
    ItemReceitaEstadualTipos1920.RECEITAS_RECEBIDAS_FUNDEB,
  '12.1- Transferências de Recursos do FUNDEB':
    ItemReceitaEstadualTipos1920.TRANSFERENCIAS_RECURSOS_FUNDEB,
  '12.2- Complementação da União ao FUNDEB':
    ItemReceitaEstadualTipos1920.COMPLEMENTACAO_UNIAO_FUNDEB,
  '12.3- Receita de Aplicação Financeira dos Recursos do FUNDEB':
    ItemReceitaEstadualTipos1920.RECEITA_APLICACAO_FINANCEIRA_FUNDEB,
  '13- RESULTADO LÍQUIDO DAS TRANSFERÊNCIAS DO FUNDEB (16.1 - 15)':
    ItemReceitaEstadualTipos1920.RESULTADO_LIQUIDO_TRANSFERENCIAS_FUNDEB,
};

export const mapeamentoDespesasEstadual1920: {
  [key: string]: ItemDespesaEstadualTipos1920;
} = {
  '14- PAGAMENTO DOS PROFISSIONAIS DO MAGISTÉRIO':
    ItemDespesaEstadualTipos1920.PAGAMENTO_PROFISSIONAIS_MAGISTERIO,
  '14.1- Com Ensino Fundamental':
    ItemDespesaEstadualTipos1920.PAGAMENTO_MAGISTERIO_ENSINO_FUNDAMENTAL,
  '14.2- Com Ensino Médio':
    ItemDespesaEstadualTipos1920.PAGAMENTO_MAGISTERIO_ENSINO_MEDIO,
  '15- OUTRAS DESPESAS': ItemDespesaEstadualTipos1920.OUTRAS_DESPESAS,
  '15.1- Com Ensino Fundamental':
    ItemDespesaEstadualTipos1920.OUTRAS_DESPESAS_ENSINO_FUNDAMENTAL,
  '15.2- Com Ensino Médio':
    ItemDespesaEstadualTipos1920.OUTRAS_DESPESAS_ENSINO_MEDIO,
  '16- TOTAL DAS DESPESAS DO FUNDEB (14 + 15)':
    ItemDespesaEstadualTipos1920.TOTAL_DESPESAS_FUNDEB,
  '23- EDUCAÇÂO INFANTIL': ItemDespesaEstadualTipos1920.EDUCACAO_INFANTIL,
  '23.1 - Creche': ItemDespesaEstadualTipos1920.CRECHE,
  '23.2 - Pré-escola': ItemDespesaEstadualTipos1920.PRE_ESCOLA,
  '24- ENSINO FUNDAMENTAL': ItemDespesaEstadualTipos1920.ENSINO_FUNDAMENTAL,
  '24.1- Despesas Custeadas com Recursos do FUNDEB':
    ItemDespesaEstadualTipos1920.DESPESAS_FUNDAMENTAL_FUNDEB,
  '24.2- Despesas Custeadas com Outros Recursos de Impostos':
    ItemDespesaEstadualTipos1920.DESPESAS_FUNDAMENTAL_OUTROS_IMPOSTOS,
  '25- ENSINO MÉDIO': ItemDespesaEstadualTipos1920.ENSINO_MEDIO,
  '25.1- Despesas Custeadas com Recursos do FUNDEB':
    ItemDespesaEstadualTipos1920.DESPESAS_MEDIO_FUNDEB,
  '25.2- Despesas Custeadas com Outros Recursos de Impostos':
    ItemDespesaEstadualTipos1920.DESPESAS_MEDIO_OUTROS_IMPOSTOS,
  '26- ENSINO SUPERIOR': ItemDespesaEstadualTipos1920.ENSINO_SUPERIOR,
  '27- ENSINO PROFISSIONAL NÃO INTEGRADO AO ENSINO REGULAR':
    ItemDespesaEstadualTipos1920.ENSINO_PROFISSIONAL_NAO_INTEGRADO,
  '28- OUTRAS': ItemDespesaEstadualTipos1920.OUTRAS,
  '29- TOTAL DAS DESPESAS COM AÇÕES TÍPICAS DE MDE (23 + 24 + 25 + 26 + 27 + 28)':
    ItemDespesaEstadualTipos1920.TOTAL_DESPESAS_ACOES_TIPICAS_MDE,
  '40- DESPESAS CUSTEADAS COM A APLICAÇÃO FINANCEIRA DE OUTROS RECURSOS DE IMPOSTOS VINCULADOS AO ENSINO':
    ItemDespesaEstadualTipos1920.DESPESAS_APLICACAO_FINANCEIRA_OUTROS_IMPOSTOS,
  '41- DESPESAS CUSTEADAS COM A CONTRIBUIÇÃO SOCIAL DO SALÁRIO-EDUCAÇÃO':
    ItemDespesaEstadualTipos1920.DESPESAS_CONTRIBUICAO_SALARIO_EDUCACAO,
  '42- DESPESAS CUSTEADAS COM OPERAÇÕES DE CRÉDITO':
    ItemDespesaEstadualTipos1920.DESPESAS_OPERACOES_CREDITO,
  '43- DESPESAS CUSTEADAS COM OUTRAS RECEITAS PARA FINANCIAMENTO DO ENSINO':
    ItemDespesaEstadualTipos1920.DESPESAS_OUTRAS_RECEITAS_FINANCIAMENTO_ENSINO,
  '44- TOTAL DAS OUTRAS DESPESAS CUSTEADAS COM RECEITAS ADICIONAIS PARA FINANCIAMENTO DO ENSINO (40 + 41 + 42 + 43)':
    ItemDespesaEstadualTipos1920.TOTAL_OUTRAS_DESPESAS_FINANCIAMENTO_ENSINO,
  '45- TOTAL GERAL DAS DESPESAS COM MDE (29 + 44)':
    ItemDespesaEstadualTipos1920.TOTAL_GERAL_DESPESAS_MDE,
};

export const mapeamentoDeducoesParaFinsLimiteFundebEstadual1920: {
  [key: string]: DeducoesFinsLimiteFundebEstadualTipo1920;
} = {
  '16- RESTOS A PAGAR INSCRITOS NO EXERCÍCIO SEM DISPONIBILIDADE FINANCEIRA DE RECURSOS DO FUNDEB':
    DeducoesFinsLimiteFundebEstadualTipo1920.RESTOS_A_PAGAR_SEM_DISPONIBILIDADE_FINANCEIRA,
  '16.1 - FUNDEB 60%':
    DeducoesFinsLimiteFundebEstadualTipo1920.RESTOS_A_PAGAR_SEM_DISPONIBILIDADE_FINANCEIRA_60_PORCENTO,
  '16.2 - FUNDEB 40%':
    DeducoesFinsLimiteFundebEstadualTipo1920.RESTOS_A_PAGAR_SEM_DISPONIBILIDADE_FINANCEIRA_40_PORCENTO,
  '17- DESPESAS CUSTEADAS COM O SUPERÁVIT FINANCEIRO, DO EXERCÍCIO ANTERIOR, DO FUNDEB':
    DeducoesFinsLimiteFundebEstadualTipo1920.DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR,
  '17.1 - FUNDEB 60%':
    DeducoesFinsLimiteFundebEstadualTipo1920.DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR_60_PORCENTO,
  '17.2 - FUNDEB 40%':
    DeducoesFinsLimiteFundebEstadualTipo1920.DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR_40_PORCENTO,
  '18- TOTAL DAS DEDUÇÕES CONSIDERADAS PARA FINS DE LIMITE DO FUNDEB (16 + 17)':
    DeducoesFinsLimiteFundebEstadualTipo1920.TOTAL_DEDUCOES_PARA_FINS_LIMITE,
};

export const mapeamentoIndicadoresFundebEstadual1920: {
  [key: string]: IndicadoresFundebEstadualTipo1920;
} = {
  '19- TOTAL DAS DESPESAS DO FUNDEB PARA FINS DE LIMITE (15 - 18)':
    IndicadoresFundebEstadualTipo1920.TOTAL_DE_DESPESAS_FUNDEB_PARA_FINS_DE_LIMITE,
  '19.1 - Mínimo de 60% do FUNDEB na remuneração do Magistério 1 (13 - (16.1 + 17.1))/ (11) x 100)%':
    IndicadoresFundebEstadualTipo1920.MINIMO_60_PORCENTO_FUNDEB_REMUNERACAO_MAGISTERIO,
  '19.2 - Máximo de 40% em Despesas com MDE, que não Remuneração do Magistério (14 - (16.2 + 17.2)) / (11) x 100)%':
    IndicadoresFundebEstadualTipo1920.MAXIMO_40_PORCENTO_DESPESAS_MDE,
  '19.3 - Máximo de 5% não Aplicado no Exercício (100 - (19.1 + 19.2))%':
    IndicadoresFundebEstadualTipo1920.MAXIMO_5_PORCENTO_NAO_APLICADO_NO_EXERCICIO,
};

export const mapeamentoControleRecursosNoExercicioSubsequenteEstadual1920: {
  [key: string]: ControleRecursosNoExercicioSubsequenteEstadualTipo1920;
} = {
  '20 – RECURSOS RECEBIDOS DO FUNDEB EM 2015 QUE NÃO FORAM UTILIZADOS':
    ControleRecursosNoExercicioSubsequenteEstadualTipo1920.RECURSOS_RECEBIDOS_FUNDEB_NAO_UTILIZADOS,
  '21 – DESPESAS CUSTEADAS COM O SALDO DO ITEM 20 ATÉ O 1º TRIMESTRE DE 2016':
    ControleRecursosNoExercicioSubsequenteEstadualTipo1920.DESPESAS_CUSTEADAS_C_SALDO_FUNDEB_N_UTILIZADOS_1_TRIM_ATUAL,
};

export const mapeamentoDeducoesParaFinsDeLimitesConstitucionalEstadual1920: {
  [key: string]: DeducoesParaFinsDeLimitesConstitucionalEstadualTipo1920;
} = {
  '29- RESULTADO LÍQUIDO DAS TRANSFERÊNCIAS DO FUNDEB = (12)':
    DeducoesParaFinsDeLimitesConstitucionalEstadualTipo1920.RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB,
  '30- DESPESAS CUSTEADAS COM A COMPLEMENTAÇÃO DO FUNDEB NO EXERCÍCIO':
    DeducoesParaFinsDeLimitesConstitucionalEstadualTipo1920.DESPESAS_CUSTEADAS_A_COMPLEMENTACAO_DO_FUNDEB_NO_EXERCICIO,
  '32- DESPESAS CUSTEADAS COM O SUPERÁVIT FINANCEIRO, DO EXERCÍCIO ANTERIOR, DO FUNDEB':
    DeducoesParaFinsDeLimitesConstitucionalEstadualTipo1920.DESPESAS_CUSTEADAS_SUPERAVIT_FINANCEIRO_DO_EXERCICIO_ANTERIOR,
  '33- DESPESAS CUSTEADAS COM O SUPERÁVIT FINANCEIRO, DO EXERCÍCIO ANTERIOR, DE OUTROS RECURSOS DE IMPOSTOS':
    DeducoesParaFinsDeLimitesConstitucionalEstadualTipo1920.DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR_OUTROS_IMPOSTOS,
  '34- RESTOS A PAGAR INSCRITOS NO EXERCÍCIO SEM DISPONIBILIDADE FINANCEIRA DE RECURSOS DE IMPOSTOS VINCULADOS AO ENSINO':
    DeducoesParaFinsDeLimitesConstitucionalEstadualTipo1920.RESTOS_A_PAGAR_INSCRITOS_SEM_DISPONIBILIDADE_FINANCEIRA,
  '35- CANCELAMENTO, NO EXERCÍCIO, DE RESTOS A PAGAR INSCRITOS COM DISPONIBILIDADE FINANCEIRA DE RECURSOS DE IMPOSTOS VINCULADOS AO ENSINO = (45 g)':
    DeducoesParaFinsDeLimitesConstitucionalEstadualTipo1920.CANCELAMENTO_RESTOS_PAGAR_INSCRITOS_DISPONIBILIDADE_FINANCEIRA,
  '36- TOTAL DAS DEDUÇÕES CONSIDERADAS PARA FINS DE LIMITE CONSTITUCIONAL (30 + 31 + 32 + 33 + 34 + 35 + 36)':
    DeducoesParaFinsDeLimitesConstitucionalEstadualTipo1920.TOTAL_DE_DEDUCOES_PARA_FINS_DE_LIMITE_CONSTITUCIONAL,
  '37- TOTAL DAS DESPESAS PARA FINS DE LIMITE ((22 + 23) – (36))':
    DeducoesParaFinsDeLimitesConstitucionalEstadualTipo1920.TOTAL_DE_DESPESAS_PARA_FINS_DE_LIMITE,
  '38- PERCENTUAL DE APLICAÇÃO EM MDE SOBRE A RECEITA LÍQUIDA DE IMPOSTOS ((37) / (3) x 100) % 6 - LIMITE CONSTITUCIONAL 25%':
    DeducoesParaFinsDeLimitesConstitucionalEstadualTipo1920.PERCENTUAL_DE_APLICACAO_MDE_SOBRE_RECEITA_LIQUIDA_IMPOSTOS,
};

export const mapeamentoFluxoFinanceiroRecursosEstadual1920: {
  [key: string]: FluxoFinanceiroRecursosEstadualTipos1920;
} = {
  '46- SALDO FINANCEIRO EM 31 DE DEZEMBRO DE 2015':
    FluxoFinanceiroRecursosEstadualTipos1920.SALDO_FINANCEIRO_31_DE_DEZEMBRO_ANO_ANTERIOR,
  '47- (+) INGRESSO DE RECURSOS ATÉ O BIMESTRE':
    FluxoFinanceiroRecursosEstadualTipos1920.INGRESSO_RECURSOS_ATE_BIM,
  '48- (-) PAGAMENTOS EFETUADOS ATÉ O BIMESTRE':
    FluxoFinanceiroRecursosEstadualTipos1920.PAGAMENTOS_EFETUADOS_ATE_BIM,
  '48.1- Orçamento do Exercício':
    FluxoFinanceiroRecursosEstadualTipos1920.ORCAMENTO_DO_EXERCICIO,
  '48.2- Restos a Pagar':
    FluxoFinanceiroRecursosEstadualTipos1920.RESTOS_A_PAGAR,
  '49- (+) RECEITA DE APLICAÇÃO FINANCEIRA DOS RECURSOS ATÉ O BIMESTRE':
    FluxoFinanceiroRecursosEstadualTipos1920.RECEITA_APLICACAO_FINANCEIRA_DOS_RECURSOS_ATE_BIM,
  '50- (=) DISPONIBILIDADE FINANCEIRA ATÉ O BIMESTRE':
    FluxoFinanceiroRecursosEstadualTipos1920.DISPONIBILIDADE_FINANCEIRA_ATE_O_BIM,
  '51- (+) AJUSTES': FluxoFinanceiroRecursosEstadualTipos1920.AJUSTES,
  '51.1- Retenções': FluxoFinanceiroRecursosEstadualTipos1920.RETENCOES,
  '51.2- Conciliação Bancária':
    FluxoFinanceiroRecursosEstadualTipos1920.CONCILIACAO_BANCARIA,
  '51.3- Valor a Recuperar':
    FluxoFinanceiroRecursosEstadualTipos1920.VALOR_A_RECUPERAR,
  '51.4- Outros valores Extra Orçamentário':
    FluxoFinanceiroRecursosEstadualTipos1920.OUTROS_VALORES_EXTRA_ORCAMENTARIO,
  '52- (=) SALDO FINANCEIRO CONCILIADO':
    FluxoFinanceiroRecursosEstadualTipos1920.SALDO_FINANCEIRO_CONCILIADO,
};

export const mapeamentoRestosAPagarInscritosDisponibilidadesFinanceiraEstadual1920: {
  [
    key: string
  ]: RestosAPagarInscritosDisponibilidadesFinanceiraEstadualTipo1920;
} = {
  '45- RESTOS A PAGAR DE DESPESAS COM MDE':
    RestosAPagarInscritosDisponibilidadesFinanceiraEstadualTipo1920.RESTOS_A_PAGAR_DE_DESPESA_MDE,
  '45.1- Executadas com Recursos de Impostos Vinculados ao Ensino':
    RestosAPagarInscritosDisponibilidadesFinanceiraEstadualTipo1920.EXECUTADAS_COM_RECURSOS_DE_IMPOSTOS_ENSINO,
  '45.2- Executadas com Recursos do FUNDEB':
    RestosAPagarInscritosDisponibilidadesFinanceiraEstadualTipo1920.EXECUTADAS_COM_RECURSOS_FUNDEB,
};
