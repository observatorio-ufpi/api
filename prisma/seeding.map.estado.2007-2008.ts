import {
  DeducoesAdicoesParaFinsLimiteConstitucionalEstadoTipo0708,
  FluxoFinanceiroRecursosFundebEstadoTipo0708,
  InformacoesControleFinanceiroEstadoTipo0708,
  ItemDespesaEstadoTipos0708,
  ItemReceitaEstadoTipos0708,
  Minimo60PorCentoFundebEstadoTipo0708,
} from '@prisma/client';

export const mapeamentoReceitasEstadual0708: {
  [key: string]: ItemReceitaEstadoTipos0708;
} = {
  '1 - RECEITAS DE IMPOSTOS': ItemReceitaEstadoTipos0708.RECEITAS_DE_IMPOSTO,
  '1.1 - Receita Resultante do ICMS':
    ItemReceitaEstadoTipos0708.RECEITA_RESULTANTE_DO_ICMS,
  ICMS: ItemReceitaEstadoTipos0708.ICMS,
  'Multas, Juros de Mora e Outros Encargos do ICMS':
    ItemReceitaEstadoTipos0708.MULTAS_JUROS_MORA_OUTROS_ENCARGOS_ICMS,
  'Dívida Ativa do ICMS': ItemReceitaEstadoTipos0708.DIVIDA_ATIVA_DO_ICMS,
  'Multas, Juros de Mora, Atualização Monetária e Outros Encargos da Dívida Ativa do ICMS':
    ItemReceitaEstadoTipos0708.MULTAS_JUROS_MORA_ATUALIZACAO_MONETARIA_DIVIDA_ATIVA_ICMS,
  '1.2 - Receita Resultante do ITCD':
    ItemReceitaEstadoTipos0708.RECEITA_RESULTANTE_DO_ITCD,
  ITCD: ItemReceitaEstadoTipos0708.ITCD,
  'Multas, Juros de Mora e Outros Encargos do ITCD':
    ItemReceitaEstadoTipos0708.MULTAS_JUROS_MORA_OUTROS_ENCARGOS_ITCD,
  'Dívida Ativa do ITCD': ItemReceitaEstadoTipos0708.DIVIDA_ATIVA_DO_ITCD,
  'Multas, Juros de Mora, Atualização Monetária e Outros Encargos da Dívida Ativa do ITCD':
    ItemReceitaEstadoTipos0708.MULTAS_JUROS_MORA_ATUALIZACAO_MONETARIA_DIVIDA_ATIVA_ITCD,
  '1.3 - Receita Resultante do IPVA':
    ItemReceitaEstadoTipos0708.RECEITA_RESULTANTE_DO_IPVA,
  IPVA: ItemReceitaEstadoTipos0708.IPVA,
  'Multas, Juros de Mora e Outros Encargos do IPVA':
    ItemReceitaEstadoTipos0708.MULTAS_JUROS_MORA_OUTROS_ENCARGOS_IPVA,
  'Dívida Ativa do IPVA': ItemReceitaEstadoTipos0708.DIVIDA_ATIVA_DO_IPVA,
  'Multas, Juros de Mora, Atualização Monetária e Outros Encargos da Dívida Ativa do IPVA':
    ItemReceitaEstadoTipos0708.MULTAS_JUROS_MORA_ATUALIZACAO_MONETARIA_DIVIDA_ATIVA_IPVA,
  '1.4 - Receita Resultante do IRRF':
    ItemReceitaEstadoTipos0708.RECEITA_RESULTANTE_DO_IRRF,
  IRRF: ItemReceitaEstadoTipos0708.IRRF,
  'Multas, Juros de Mora e Outros Encargos do IRRF':
    ItemReceitaEstadoTipos0708.MULTAS_JUROS_MORA_OUTROS_ENCARGOS_IRRF,
  'Dívida Ativa do IRRF': ItemReceitaEstadoTipos0708.DIVIDA_ATIVA_DO_IRRF,
  'Multas, Juros de Mora, Atualização Monetária e Outros Encargos da Dívida Ativa do IRRF':
    ItemReceitaEstadoTipos0708.MULTAS_JUROS_MORA_ATUALIZACAO_MONETARIA_DIVIDA_ATIVA_IRRF,
  '1.5 - Receita Resultante do IPTU (Exclusivo DF)':
    ItemReceitaEstadoTipos0708.RECEITA_RESULTANTE_DO_IPTU,
  IPTU: ItemReceitaEstadoTipos0708.IPTU,
  'Multas, Juros de Mora e Outros Encargos do IPTU':
    ItemReceitaEstadoTipos0708.MULTAS_JUROS_MORA_OUTROS_ENCARGOS_IPTU,
  'Dívida Ativa do IPTU': ItemReceitaEstadoTipos0708.DIVIDA_ATIVA_DO_IPTU,
  'Multas, Juros de Mora, Atualização Monetária e Outros Encargos da Dívida Ativa do IPTU':
    ItemReceitaEstadoTipos0708.MULTAS_JUROS_MORA_ATUALIZACAO_MONETARIA_DIVIDA_ATIVA_IPTU,
  '1.6 - Receita Resultante do ITBI (Exclusivo DF)':
    ItemReceitaEstadoTipos0708.RECEITA_RESULTANTE_DO_ITBI,
  ITBI: ItemReceitaEstadoTipos0708.ITBI,
  'Multas, Juros de Mora e Outros Encargos do ITBI':
    ItemReceitaEstadoTipos0708.MULTAS_JUROS_MORA_OUTROS_ENCARGOS_ITBI,
  'Dívida Ativa do ITBI': ItemReceitaEstadoTipos0708.DIVIDA_ATIVA_DO_ITBI,
  'Multas, Juros de Mora, Atualização Monetária e Outros Encargos da Dívida Ativa do ITBI':
    ItemReceitaEstadoTipos0708.MULTAS_JUROS_MORA_ATUALIZACAO_MONETARIA_DIVIDA_ATIVA_ITBI,
  '1.7 - Receita Resultante do ISS (Exclusivo DF)':
    ItemReceitaEstadoTipos0708.RECEITA_RESULTANTE_DO_ISS,
  ISS: ItemReceitaEstadoTipos0708.ISS,
  'Multas, Juros de Mora e Outros Encargos do ISS':
    ItemReceitaEstadoTipos0708.MULTAS_JUROS_MORA_OUTROS_ENCARGOS_ISS,
  'Dívida Ativa do ISS': ItemReceitaEstadoTipos0708.DIVIDA_ATIVA_DO_ISS,
  'Multas, Juros de Mora, Atualização Monetária e Outros Encargos da Dívida Ativa do ISS':
    ItemReceitaEstadoTipos0708.MULTAS_JUROS_MORA_ATUALIZACAO_MONETARIA_DIVIDA_ATIVA_ISS,
  '1.8 - Receita Resultante do ITR (Exclusivo DF)':
    ItemReceitaEstadoTipos0708.RECEITA_RESULTANTE_DO_ITR,
  ITR: ItemReceitaEstadoTipos0708.ITR,
  'Multas, Juros de Mora e Outros Encargos do ITR':
    ItemReceitaEstadoTipos0708.MULTAS_JUROS_MORA_OUTROS_ENCARGOS_ITR,
  'Dívida Ativa do ITR': ItemReceitaEstadoTipos0708.DIVIDA_ATIVA_DO_ITR,
  'Multas, Juros de Mora, Atualização Monetária e Outros Encargos da Dívida Ativa do ITR':
    ItemReceitaEstadoTipos0708.MULTAS_JUROS_MORA_ATUALIZACAO_MONETARIA_DIVIDA_ATIVA_ITR,
  '1.9 - Receita Resultante do ISS/ICMS Simples (Exclusivo DF)':
    ItemReceitaEstadoTipos0708.RECEITA_RESULTANTE_ISS_ICMS_SIMPLES,
  '2 - RECEITAS DE TRANSFERÊNCIAS CONSTITUCIONAIS E LEGAIS':
    ItemReceitaEstadoTipos0708.RECEITAS_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
  '2.1 - Cota-Parte FPE': ItemReceitaEstadoTipos0708.COTA_PARTE_FPE,
  '2.2 - ICMS - Desoneração - L.C. nº 87/1996':
    ItemReceitaEstadoTipos0708.ICMS_DESONERACAO,
  '2.3 - Cota-Parte IPI-Exportação':
    ItemReceitaEstadoTipos0708.COTA_PARTE_IPI_EXPORTACAO,
  '2.4 - Cota-Parte IOF-Ouro': ItemReceitaEstadoTipos0708.COTA_PARTE_IOF_OURO,
  '2.5 - Cota-Parte FPM (Exclusivo do DF)':
    ItemReceitaEstadoTipos0708.COTA_PARTE_FPM,
  '3 - TOTAL DA RECEITA BRUTA DE IMPOSTOS (1+2)':
    ItemReceitaEstadoTipos0708.TOTAL_RECEITA_BRUTA_IMPOSTOS,
  '4 - RECEITA RESULTANTE DO ICMS REPASSADA AOS MUNICÍPIOS (25% DE 1.1)':
    ItemReceitaEstadoTipos0708.RECEITA_RESULTANTE_DO_ICMS_REPASSADA_AOS_MUNICIPIOS,
  '5 - RECEITA RESULTANTE DO IPVA REPASSADA AOS MUNICÍPIOS (50% DE 1.3)':
    ItemReceitaEstadoTipos0708.RECEITA_RESULTANTE_DO_IPVA_REPASSADA_AOS_MUNICIPIOS,
  '6 - COTA-PARTE IPI-EXPORTAÇÃO REPASSADA AOS MUNICÍPIOS (25% DE 2.3)':
    ItemReceitaEstadoTipos0708.COTA_PARTE_IPI_REPASSADA_AOS_MUNICIPIOS,
  '7- TOTAL DAS DEDUÇÕES DE TRANSFERÊNCIAS CONSTITUCIONAIS (4+5+6)':
    ItemReceitaEstadoTipos0708.TOTAL_DAS_DEDUCOES_DE_TRANSFERENCIAS_CONSTITUCIONAIS,
  '8 - TOTAL DA RECEITA LÍQUIDA DE IMPOSTOS (3-7)':
    ItemReceitaEstadoTipos0708.TOTAL_DA_RECEITA_LIQUIDA_DE_IMPOSTOS,
  '9 - TRANSFERÊNCIAS DO FNDE': ItemReceitaEstadoTipos0708.TRANSFERENCIAS_FNDE,
  '9.1 - Transferências do Salário-Educação':
    ItemReceitaEstadoTipos0708.TRANSFERENCIAS_SALARIO_EDUCACAO,
  '9.2 - Outras Transferências do FNDE':
    ItemReceitaEstadoTipos0708.OUTRAS_TRANSFERENCIAS_FNDE,
  '10 - TRANSFERÊNCIAS DE CONVÊNIOS DESTINADAS A PROGRAMAS DE EDUCAÇÃO':
    ItemReceitaEstadoTipos0708.TRANSFERENCIAS_CONVENIOS_PROGRAMAS_EDUCACAO,
  '11 - RECEITA DE OPERAÇÕES DE CRÉDITO DESTINADA À EDUCAÇÃO':
    ItemReceitaEstadoTipos0708.RECEITA_OPERACOES_CREDITO_DESTINADA_EDUCACAO,
  '12 - OUTRAS RECEITAS DESTINADAS À EDUCAÇÃO':
    ItemReceitaEstadoTipos0708.OUTRAS_RECEITAS_DESTINADAS_EDUCACAO,
  '13 - TOTAL DAS OUTRAS RECEITAS DESTINADAS AO ENSINO (9+10+11+12)':
    ItemReceitaEstadoTipos0708.TOTAL_OUTRAS_RECEITAS_DESTINADAS_ENSINO,
  '14 - RECEITAS DESTINADAS AO FUNDEB':
    ItemReceitaEstadoTipos0708.RECEITAS_DESTINADAS_AO_FUNDEB,
  '14.1 - Receita Resultante do ICMS Destinada ao FUNDEB':
    ItemReceitaEstadoTipos0708.RECEITA_RESULTANTE_DO_ICMS_DESTINADA_AO_FUNDEB,
  '14.2 - Receita Resultante do ITCD Destinada ao FUNDEB':
    ItemReceitaEstadoTipos0708.RECEITA_RESULTANTE_DO_ITCD_DESTINADA_AO_FUNDEB,
  '14.3 - Receita Resultante do IPVA Destinada ao FUNDEB':
    ItemReceitaEstadoTipos0708.RECEITA_RESULTANTE_DO_IPVA_DESTINADA_AO_FUNDEB,
  '14.4 - Cota-Parte FPE Destinada ao FUNDEB':
    ItemReceitaEstadoTipos0708.COTA_PARTE_FPE_DESTINADA_FUNDEB,
  '14.5 - ICMS - Desoneração Destinada ao FUNDEB':
    ItemReceitaEstadoTipos0708.ICMS_DESONERACAO_DESTINADA_AO_FUNDEB,
  '14.6 - Cota-Parte IPI Exportação Destinada ao FUNDEB':
    ItemReceitaEstadoTipos0708.COTA_PARTE_IPI_EXPORTACAO_DESTINADA_AO_FUNDEB,
  '14.7 - Cota-Parte FPM Destinada ao FUNDEB (Exclusivo DF)':
    ItemReceitaEstadoTipos0708.COTA_PARTE_FPM_DESTINADA_AO_FUNDEB,
  '14.8 - Receita Resultante do ITR Destinada ao FUNDEB (Exclusivo DF)':
    ItemReceitaEstadoTipos0708.RECEITA_RESULTANTE_DO_ITR_DESTINADA_AO_FUNDEB,
  '15 - RECEITAS RECEBIDAS DO FUNDEB':
    ItemReceitaEstadoTipos0708.RECEITAS_RECEBIDAS_DO_FUNDEB,
  '15.1 - Transferências de Recursos do FUNDEB':
    ItemReceitaEstadoTipos0708.TRANSFERENCIAS_RECURSOS_FUNDEB,
  '15.2 - Complementação da União ao FUNDEB':
    ItemReceitaEstadoTipos0708.COMPLEMENTACAO_UNIAO_FUNDEB,
  '15.3 - Receita de Aplicação Financeira dos Recursos do FUNDEB':
    ItemReceitaEstadoTipos0708.RECEITA_APLICACAO_FINANCEIRA_RECURSOS_FUNDEB,
  '16 - RESULTADO LÍQUIDO DAS TRANSFERÊNCIAS DO FUNDEB (15.1 - 14)':
    ItemReceitaEstadoTipos0708.RESULTADO_LIQUIDO_TRANSFERENCIAS_FUNDEB,
  'DECRÉSCIMO RESULTANTE DAS TRANSFERÊNCIAS DO FUNDEB':
    ItemReceitaEstadoTipos0708.DECRESCIMO_RESULTANTE_TRANSFERENCIAS_FUNDEB,
  '21 - IMPOSTOS E TRANSFERÊNCIAS DESTINADAS À MDE (25% DE 8) 2':
    ItemReceitaEstadoTipos0708.IMPOSTOS_E_TRANSFERENCIAS_DESTINADAS_MDE,
};
export const mapeamentoDespesasEstadual0708: {
  [key: string]: ItemDespesaEstadoTipos0708;
} = {
  '17 - PAGAMENTO DOS PROFISSIONAIS DO MAGISTÉRIO':
    ItemDespesaEstadoTipos0708.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO,
  '17.1 - Com Ensino Fundamental':
    ItemDespesaEstadoTipos0708.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO_ENSINO_FUNDAMENTAL,
  '17.2 - Com Ensino Médio':
    ItemDespesaEstadoTipos0708.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO_ENSINO_MEDIO,
  '17.3 - Com Ensino Infantil (Exclusivo do DF)':
    ItemDespesaEstadoTipos0708.FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO_ENSINO_INFANTIL,
  '18 - OUTRAS DESPESAS': ItemDespesaEstadoTipos0708.FUNDEB_OUTRAS_DESPESAS,
  '18.1 - Com Ensino Fundamental':
    ItemDespesaEstadoTipos0708.FUNDEB_OUTRAS_DESPESAS_ENSINO_FUNDAMENTAL,
  '18.2 - Com Ensino Médio':
    ItemDespesaEstadoTipos0708.FUNDEB_OUTRAS_DESPESAS_ENSINO_MEDIO,
  '18.3 - Com Educação Infantil (Exclusivo do DF)':
    ItemDespesaEstadoTipos0708.FUNDEB_OUTRAS_DESPESAS_EDUCACAO_INFANTIL,
  '19 - TOTAS DAS DESPESAS DO FUNDEB (17+18)':
    ItemDespesaEstadoTipos0708.TOTAL_DESPESAS_FUNDEB,
  '22 - EDUCAÇÃO INFANTIL': ItemDespesaEstadoTipos0708.MDE_EDUCACAO_INFANTIL,
  '22.1 - Despesas Custeadas com Recursos do FUNDEB (Exclusivo do DF)':
    ItemDespesaEstadoTipos0708.MDE_EDUCACAO_INFANTIL_DESPESAS_CUSTEADAS_RECURSOS_FUNDEB,
  '22.2 - Despesas Custeadas com Outros Recursos de Impostos':
    ItemDespesaEstadoTipos0708.MDE_EDUCACAO_INFANTIL_DESPESAS_CUSTEADAS_OUTROS_IMPOSTOS,
  '23 - ENSINO FUNDAMENTAL': ItemDespesaEstadoTipos0708.MDE_ENSINO_FUNDAMENTAL,
  '23.1 - Despesas Custeadas com Recursos do FUNDEB':
    ItemDespesaEstadoTipos0708.MDE_ENSINO_FUNDAMENTAL_DESPESAS_CUSTEADAS_RECURSOS_FUNDEB,
  '23.2 - Despesas Custeadas com Outros Recursos de Impostos':
    ItemDespesaEstadoTipos0708.MDE_ENSINO_FUNDAMENTAL_DESPESAS_CUSTEADAS_OUTROS_IMPOSTOS,
  '24 - ENSINO MÉDIO': ItemDespesaEstadoTipos0708.MDE_DESPESAS_ENSINO_MEDIO,
  '24.1 - Despesas Custeadas com Recursos do FUNDEB':
    ItemDespesaEstadoTipos0708.MDE_ENSINO_MEDIO_DESPESAS_CUSTEADAS_RECURSOS_FUNDEB,
  '24.2 - Despesas Custeadas com Outros Recursos de Impostos':
    ItemDespesaEstadoTipos0708.MDE_ENSINO_MEDIO_DESPESAS_CUSTEADAS_OUTROS_IMPOSTOS,
  '25 - ENSINO SUPERIOR':
    ItemDespesaEstadoTipos0708.MDE_DESPESAS_ENSINO_SUPERIOR,
  '26 - ENSINO PROFISSIONAL NÃO INTEGRADO AO ENSINO REGULAR':
    ItemDespesaEstadoTipos0708.MDE_DESPESAS_ENSINO_PROFISSIONAL_NAO_INTEGRADO_ENSINO_REGULAR,
  '27 - OUTRAS': ItemDespesaEstadoTipos0708.MDE_OUTRAS_DESPESAS,
  '28 - TOTAL DAS DESPESAS PARA FINS DE LIMITE (22+23+24+25+26+27)':
    ItemDespesaEstadoTipos0708.TOTAL_DESPESAS_PARA_FINS_LIMITE,
  '37 - CONTRIBUIÇÃO SOCIAL DO SALÁRIO-EDUCAÇÃO':
    ItemDespesaEstadoTipos0708.CONTRIBUICAO_SOCIAL_SALARIO_EDUCACAO,
  '38 - RECURSOS DE OPERAÇÕES DE CRÉDITO':
    ItemDespesaEstadoTipos0708.RECURSOS_OPERACOES_DE_CREDITO,
  '39 - OUTROS RECURSOS DESTINADOS À EDUCAÇÃO':
    ItemDespesaEstadoTipos0708.OUTROS_RECURSOS_DESTINADOS_A_EDUCACAO,
  '40 - TOTAL DAS OUTRAS DESPESAS CUSTEADAS COM RECURSOS DESTINADOS À MDE (37+38+39)':
    ItemDespesaEstadoTipos0708.TOTAL_OUTRAS_DESPESAS_CUSTEADAS_RECURSOS_DESTINADOS_MDE,
  '41 - TOTAL DAS DESPESAS COM MANUTENÇÃO E DESENVOLVIMENTO DO ENSINO (28+40)':
    ItemDespesaEstadoTipos0708.TOTAL_DESPESAS_COM_MANUTENCAO_DESENVOLVIMENTO_ENSINO,
};

export const mapeamentoMinimo60PorCentoFundebEstadual0708: {
  [key: string]: Minimo60PorCentoFundebEstadoTipo0708;
} = {
  '20 - MÍNIMO DE 60% DO FUNDEB NA REMUNERAÇÃO DO MAGISTÉRIO COM EDUCAÇÃO E ENSINO FUNDAMENTAL E MÉDIO (17/15) X 100%1':
    Minimo60PorCentoFundebEstadoTipo0708.MINIMO_60_PORCENTO_FUNDEB_REMUNERACAO_MAGISTERIO_EDUCACAO,
};

export const mapeamentoDeducoesAdicoesParaFinsLimiteConstitucionalEstadual0708: {
  [key: string]: DeducoesAdicoesParaFinsLimiteConstitucionalEstadoTipo0708;
} = {
  '29 - RESULTADO LÍQUIDO DAS TRANSFERÊNCIAS DO FUNDEB (16)':
    DeducoesAdicoesParaFinsLimiteConstitucionalEstadoTipo0708.RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB,
  '30 - DESPESAS CUSTEADAS COM A COMPLEMENTAÇÃO DO FUNDEB NO EXERCÍCIO':
    DeducoesAdicoesParaFinsLimiteConstitucionalEstadoTipo0708.DESPESAS_CUSTEADAS_A_COMPLEMENTACAO_DO_FUNDEB_NO_EXERCICIO,
  '31 - RESTOS A PAGAR INSCRITOS NO EXERCÍCIO SEM DISPONIBILIDADE FINANCEIRA DE RECURSOS DE IMPOSTOS VINCULADOS AO ENSINO3':
    DeducoesAdicoesParaFinsLimiteConstitucionalEstadoTipo0708.RESTOS_A_PAGAR_INSCRITOS_SEM_DISPONIBILIDADE_FINANCEIRA,
  '32 - DESPESAS VINCULADAS AO SUPERÁVIT FINANCEIRO DO ACRÉSCIMO E DA COMPLEMENTAÇÃO DO FUNDEB DO EXERCÍCIO ANTERIOR':
    DeducoesAdicoesParaFinsLimiteConstitucionalEstadoTipo0708.DESPESAS_VINCULADAS_SUPERAVIT_FINANCEIRO_DO_FUNDEF,
  '33 - CANCELAMENTO, NO EXERCÍCIO, DE RESTOS A PAGAR INSCRITOS COM DISPONIBILIDADE FINANCEIRA DE RECURSOS DE IMPOSTOS VINCULADOS AO ENSINO = (42g)':
    DeducoesAdicoesParaFinsLimiteConstitucionalEstadoTipo0708.CANCELAMENTO_RESTOS_PAGAR_INSCRITOS_DISPONIBILIDADE_FINANCEIRA,
  '34 - RECEITA DE APLICAÇÃO FINANCEIRA DOS RECURSOS DO FUNDEB ATÉ O BIMESTRE = (46)':
    DeducoesAdicoesParaFinsLimiteConstitucionalEstadoTipo0708.RECEITA_APLICACAO_FINANCEIRA_DOS_RECURSOS_FUNDEB_ATE_BIM,
  '35 - TOTAL DAS DEDUÇÕES / ADIÇÕES CONSIDERADAS PARA FINS DE LIMITE CONSTITUCIONAL (29+30+31+32+33+34)':
    DeducoesAdicoesParaFinsLimiteConstitucionalEstadoTipo0708.TOTAL_DE_DEDUCOES_ADICOES_PARA_FINS_DE_LIMITE_CONSTITUCIONAL,
  '36 - MÍNIMO DE 25% DAS REC. RESULTANTES DE IMPOSTOS NA MANUTENÇÃO E DESENVOLVIMENTO DO ENSINO [(28-35) / (8)]x100% 1':
    DeducoesAdicoesParaFinsLimiteConstitucionalEstadoTipo0708.MINIMO_DE_25_PORCENTO_DAS_RECEITAS_RESULTANTES_DE_IMPOSTOS,
};

export const mapeamentoFluxoFinanceiroRecursosFundebEstadual0708: {
  [key: string]: FluxoFinanceiroRecursosFundebEstadoTipo0708;
} = {
  '43 - SALDO FINANCEIRO DO FUNDEB EM 31 DE DEZEMBRO DE 2006':
    FluxoFinanceiroRecursosFundebEstadoTipo0708.SALDO_FINANCEIRO_DO_FUNDEF_ANO_ANTERIOR,
  '44 - (+) INGRESSO DE RECURSOS DO FUNDEB ATÉ O BIMESTRE':
    FluxoFinanceiroRecursosFundebEstadoTipo0708.INGRESSO_RECURSOS_FUNDEB_ATE_BIM,
  '45 - (-) PAGAMENTOS EFETUADOS ATÉ O BIMESTRE':
    FluxoFinanceiroRecursosFundebEstadoTipo0708.PAGAMENTOS_EFETUADOS_ATE_BIM,
  '46 - (+) RECEITA DE APLICAÇÃO FINANCEIRA DOS RECURSOS DO FUNDEB ATÉ O BIMESTRE':
    FluxoFinanceiroRecursosFundebEstadoTipo0708.RECEITA_APLICACAO_FINANCEIRA_DOS_RECURSOS_FUNDEB_ATE_BIM,
  '47 - (=) SALDO FINANCEIRO DO FUNDEB NO EXERCÍCIO ATUAL':
    FluxoFinanceiroRecursosFundebEstadoTipo0708.SALDO_FINANCEIRO_DO_FUNDEF_EXERCICIO_ATUAL,
};

export const mapeamentoInformacoesControleFinanceiroEstadual0708: {
  [key: string]: InformacoesControleFinanceiroEstadoTipo0708;
} = {
  '42 - RESTOS A PAGAR DE DESPESAS COM MANUTENÇÃO E DESENVOLVIMENTO DO ENSINO':
    InformacoesControleFinanceiroEstadoTipo0708.RESTOS_A_PAGAR_INSCRITOS_COM_DISPONIBILIDADE_FINANCEIRA,
};
