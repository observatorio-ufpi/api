import {
  AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadualTipos21,
  ApuracaoLimiteMinimoConstitucionalEstadualTipos21,
  ControleDisponibilidadeFinanceiraEstadualEstadualTipos21,
  DespesasCusteadasFundebExercicioEstadualTipos21,
  IndicadoresTipos21Art212Estadual,
  IndicadorTipos21Art25AplicacaoSuperavitEstadual,
  IndicadorTipos21Art25MaximoDeSuperavitEstadual,
  ItemDespesasEstadualTipos21,
  ItemReceitaEstadualTipos21,
  RecursosRecebidosNaoUtilizadosEstadualTipos21,
  RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebTipos21,
} from '@prisma/client';

export const mapeamentoReceitasEstadual2122: {
  [key: string]: ItemReceitaEstadualTipos21;
} = {
  '1- RECEITA DE IMPOSTOS': ItemReceitaEstadualTipos21.RECEITA_DE_IMPOSTOS,
  '1.1- Receita Resultante do Imposto sobre a Circulação de Mercadorias e Serviços de Transporte Interestadual e Intermunicipal e de Comunicação – ICMS':
    ItemReceitaEstadualTipos21.RECEITA_ICMS,
  '1.1.1- ICMS - Principal e Encargos (Multas, Juros de Mora, Divida Ativa e Outros Encargos do ICMS)':
    ItemReceitaEstadualTipos21.RECEITA_ICMS_PRINCIPAL_ENCARGOS,
  '1.1.2- Adicional de até 2% do ICMS destinado ao Fundo de Combate à Pobreza (ADCT, art. 82, §1º)':
    ItemReceitaEstadualTipos21.RECEITA_ICMS_ADICIONAL_FUNDO_COMBATE_POBREZA,
  '1.2- Receita Resultante do Imposto de Transmissão Causa Mortis e Doação de Bens e Direitos – ITCD':
    ItemReceitaEstadualTipos21.RECEITA_ITCD,
  '1.3- Receita Resultante do Imposto sobre a Propriedade de Veículos Automotores – IPVA':
    ItemReceitaEstadualTipos21.RECEITA_IPVA,
  '1.4- Receita Resultante do Imposto sobre a Renda e Proventos de Qualquer Natureza Retido na Fonte – IRRF':
    ItemReceitaEstadualTipos21.RECEITA_IRRF,
  '2- RECEITA DE TRANSFERÊNCIAS CONSTITUCIONAIS E LEGAIS':
    ItemReceitaEstadualTipos21.RECEITA_TRANSFERENCIAS_CONSTITUCIONAIS_LEGAIS,
  '2.1- Cota-Parte FPE': ItemReceitaEstadualTipos21.RECEITA_FPE,
  '2.2- Cota-Parte IPI-Exportação':
    ItemReceitaEstadualTipos21.RECEITA_IPI_EXPORTACAO,
  '2.3- Cota-Parte IOF-Ouro': ItemReceitaEstadualTipos21.RECEITA_IOF_OURO,
  '2.4- Outras transferências ou Compensações Financeiras Provenientes de Impostos e Transferências Constitucionais':
    ItemReceitaEstadualTipos21.RECEITA_COMPENSACOES_FINANCEIRAS,
  '3- DEDUÇÕES DE TRANSFERÊNCIAS CONSTITUCIONAIS AOS MUNICÍPIOS':
    ItemReceitaEstadualTipos21.DEDUCOES_TRANSFERENCIAS_CONSTITUCIONAIS_MUNICIPIOS,
  ' 3.1- PARCELA DO ICMS REPASSADA AOS MUNICÍPIOS (25% de 1.1)':
    ItemReceitaEstadualTipos21.DEDUCAO_ICMS_MUNICIPIOS,
  ' 3.2- PARCELA DO IPVA REPASSADA AOS MUNICÍPIOS (50% de 1.3)':
    ItemReceitaEstadualTipos21.DEDUCAO_IPVA_MUNICIPIOS,
  ' 3.3- PARCELA DA COTA-PARTE DO IPI-EXPORTAÇÃO REPASSADA AOS MUNICÍPIOS (25% de 2.2)':
    ItemReceitaEstadualTipos21.DEDUCAO_IPI_EXPORTACAO_MUNICIPIOS,
  ' 3.4- COMPENSAÇÕES FINANCEIRAS PROVENIENTES DE IMPOSTOS E TRANSFERÊNICAS REPASSADAS AOS MUNICÍPIOS (25% de 2.4)':
    ItemReceitaEstadualTipos21.COMPENSACOES_FINANCEIRAS_TRANSFERENCIAS_MUNICIPIOS,
  '4- TOTAL DA RECEITA LÍQUIDA RESULTANTE DE IMPOSTOS (1 + 2 - 3)':
    ItemReceitaEstadualTipos21.RECEITA_LIQUIDA_RESULTANTE_IMPOSTOS,
  '5- TOTAL DESTINADO AO FUNDEB - 20% DE ((1.1 - 3.1) + (1.2) + (1.3 - 3.2) + (2.1) + (2.2 - 3.3) + (2.4 - 3.4))':
    ItemReceitaEstadualTipos21.TOTAL_DESTINADO_FUNDEB,
  '6- VALOR MÍNIMO A SER APLICADO EM MDE ALÉM DO VALOR DESTINADO AO FUNDEB - 5% DE ((1.1 - 3.1) + (1.2) + (1.3 - 3.2) + (2.1) + (2.2 - 3.3) + (2.4 - 3.4)) + 25% DE (1.4 + 2.3)':
    ItemReceitaEstadualTipos21.VALOR_MINIMO_MDE_ALEM_FUNDEB,
  '7- RECEITAS RECEBIDAS DO FUNDEB':
    ItemReceitaEstadualTipos21.RECEITAS_RECEBIDAS_FUNDEB,
  '7.1- FUNDEB - Impostos e Transferências de Impostos':
    ItemReceitaEstadualTipos21.RECEITA_FUNDEB_IMPOSTOS_TRANSFERENCIAS,
  '7.1.1- Principal':
    ItemReceitaEstadualTipos21.RECEITA_FUNDEB_IMPOSTOS_PRINCIPAL,
  '7.1.2- Rendimento de Aplicação Financeira':
    ItemReceitaEstadualTipos21.RECEITA_FUNDEB_IMPOSTOS_RENDIMENTO_APLICACAO,
  '7.2- FUNDEB - Complementação da União - VAAF':
    ItemReceitaEstadualTipos21.RECEITA_FUNDEB_COMPLEMENTACAO_UNIAO_VAAF,
  '7.2.1- Principal':
    ItemReceitaEstadualTipos21.RECEITA_FUNDEB_COMPLEMENTACAO_UNIAO_VAAF_PRINCIPAL,
  '7.2.2- Rendimento de Aplicação Financeira':
    ItemReceitaEstadualTipos21.RECEITA_FUNDEB_COMPLEMENTACAO_UNIAO_VAAF_RENDIMENTO_APLICACAO,
  '7.3- FUNDEB - Complementação da União - VAAT':
    ItemReceitaEstadualTipos21.RECEITA_FUNDEB_COMPLEMENTACAO_UNIAO_VAAT,
  '7.3.1- Principal':
    ItemReceitaEstadualTipos21.RECEITA_FUNDEB_COMPLEMENTACAO_UNIAO_VAAT_PRINCIPAL,
  '7.3.2- Rendimento de Aplicação Financeira':
    ItemReceitaEstadualTipos21.RECEITA_FUNDEB_COMPLEMENTACAO_UNIAO_VAAT_RENDIMENTO_APLICACAO,
  '8- RESULTADO LÍQUIDO DAS TRANSFERÊNCIAS DO FUNDEB (7.1.1 – 5)':
    ItemReceitaEstadualTipos21.RESULTADO_LIQUIDO_TRANSFERENCIAS_FUNDEB,
  '37- RECEITA DE TRANSFERÊNCIAS DO FNDE (INCLUINDO RENDIMENTOS DE APLICAÇÃO FINANCEIRA)':
    ItemReceitaEstadualTipos21.RECEITA_TRANSFERENCIAS_FNDE,
  '37.1- Salário-Educação':
    ItemReceitaEstadualTipos21.RECEITA_FNDE_SALARIO_EDUCACAO,
  '37.2- PDDE': ItemReceitaEstadualTipos21.RECEITA_FNDE_PDDE,
  '37.3- PNAE': ItemReceitaEstadualTipos21.RECEITA_FNDE_PNAE,
  '37.4 - PNATE': ItemReceitaEstadualTipos21.RECEITA_FNDE_PNATE,
  '37.5- Outras Transferências do FNDE':
    ItemReceitaEstadualTipos21.RECEITA_FNDE_OUTRAS_TRANSFERENCIAS,
  '38- RECEITA DE TRANSFERÊNCIAS DE CONVÊNIOS':
    ItemReceitaEstadualTipos21.RECEITA_TRANSFERENCIAS_CONVENIOS,
  '39- RECEITA DE ROYALTIES DESTINADOS À EDUCAÇÃO':
    ItemReceitaEstadualTipos21.RECEITA_ROYALTIES_EDUCACAO,
  '40- RECEITA DE OPERAÇÕES DE CRÉDITO VINCULADAS À EDUCAÇÃO':
    ItemReceitaEstadualTipos21.RECEITA_OPERACOES_CREDITO_EDUCACAO,
  '41- OUTRAS RECEITAS PARA FINANCIAMENTO DO ENSINO':
    ItemReceitaEstadualTipos21.OUTRAS_RECEITAS_FINANCIAMENTO_ENSINO,
  '42- TOTAL DAS RECEITAS ADICIONAIS PARA FINANCIAMENTO DO ENSINO = (37 + 38 + 39 +40 + 41)':
    ItemReceitaEstadualTipos21.RECEITAS_ADICIONAIS_FINANCIAMENTO_ENSINO,
};

export const mapeamentoDespesasEstadual2122: {
  [key: string]: ItemDespesasEstadualTipos21;
} = {
  '11- PROFISSIONAIS DA EDUCAÇÃO BÁSICA':
    ItemDespesasEstadualTipos21.PROFISSIONAIS_EDUCACAO_BASICA,
  '11.1- Ensino Fundamental':
    ItemDespesasEstadualTipos21.PROFISSIONAIS_EDUCACAO_BASICA_ENSINO_FUNDAMENTAL,
  '11.2- Ensino Médio':
    ItemDespesasEstadualTipos21.PROFISSIONAIS_EDUCACAO_BASICA_ENSINO_MEDIO,
  '12- OUTRAS DESPESAS': ItemDespesasEstadualTipos21.OUTRAS_DESPESAS,
  '12.1- Ensino Fundamental':
    ItemDespesasEstadualTipos21.OUTRAS_DESPESAS_ENSINO_FUNDAMENTAL,
  '12.2- Ensino Médio':
    ItemDespesasEstadualTipos21.OUTRAS_DESPESAS_ENSINO_MEDIO,
  '13- TOTAL DAS DESPESAS COM RECURSOS DO FUNDEB (11 + 12)':
    ItemDespesasEstadualTipos21.TOTAL_DESPESAS_RECURSOS_FUNDEB,
  '23- EDUCAÇÃO INFANTIL': ItemDespesasEstadualTipos21.EDUCACAO_INFANTIL,
  '23.1- Creche': ItemDespesasEstadualTipos21.EDUCACAO_INFANTIL_CRECHE,
  '23.2- Pré-escola': ItemDespesasEstadualTipos21.EDUCACAO_INFANTIL_PRE_ESCOLA,
  '24- ENSINO FUNDAMENTAL': ItemDespesasEstadualTipos21.ENSINO_FUNDAMENTAL,
  '25- ENSINO MÉDIO': ItemDespesasEstadualTipos21.ENSINO_MEDIO,
  '26- ENSINO SUPERIOR': ItemDespesasEstadualTipos21.ENSINO_SUPERIOR,
  '27- ENSINO PROFISSIONAL NÃO INTEGRADO AO ENSINO REGULAR':
    ItemDespesasEstadualTipos21.ENSINO_PROFISSIONAL_NAO_INTEGRADO,
  '28- TOTAL DAS DESPESAS COM AÇÕES TÍPICAS DE MDE (23 + 24 + 25 + 26 + 27)':
    ItemDespesasEstadualTipos21.TOTAL_DESPESAS_ACOES_TIPICAS_MDE,
  '43- EDUCAÇÃO INFANTIL':
    ItemDespesasEstadualTipos21.OUTRAS_DESPESAS_C_EDUCACAO_EDUCACAO_INFANTIL,
  '43.1- Creche': ItemDespesasEstadualTipos21.OUTRAS_DESPESAS_C_EDUCACAO_CRECHE,
  '43.2- Pré-escola':
    ItemDespesasEstadualTipos21.OUTRAS_DESPESAS_C_EDUCACAO_PRE_ESCOLA,
  '44- ENSINO FUNDAMENTAL':
    ItemDespesasEstadualTipos21.OUTRAS_DESPESAS_C_EDUCACAO_ENSINO_FUNDAMENTAL,
  '45- ENSINO MÉDIO':
    ItemDespesasEstadualTipos21.OUTRAS_DESPESAS_C_EDUCACAO_ENSINO_MEDIO,
  '46- ENSINO SUPERIOR':
    ItemDespesasEstadualTipos21.OUTRAS_DESPESAS_C_EDUCACAO_ENSINO_SUPERIOR,
  '47- ENSINO PROFISSIONAL NÃO INTEGRADO AO ENSINO REGULAR':
    ItemDespesasEstadualTipos21.OUTRAS_DESPESAS_C_EDUCACAO_ENS_PROFISSIONAL_NAO_INTEGRADO,
  '48- TOTAL DAS OUTRAS DESPESAS COM EDUCAÇÃO (43 + 44 + 45 + 46 + 47)':
    ItemDespesasEstadualTipos21.TOTAL_OUTRAS_DESPESAS_EDUCACAO,
  '49- TOTAL GERAL DAS DESPESAS COM EDUCAÇÃO (13 + 28 + 48)':
    ItemDespesasEstadualTipos21.TOTAL_DESPESAS_EDUCACAO,
  '49.1- Despesas Correntes':
    ItemDespesasEstadualTipos21.TOTAL_DESPESAS_EDUCACAO_DESPESAS_CORRENTES,
  '49.1.1- Pessoal Ativo':
    ItemDespesasEstadualTipos21.TOTAL_DESPESAS_EDUCACAO_DESPESAS_CORRENTES_PESSOAL_ATIVO,
  '49.1.2- Pessoal Inativo':
    ItemDespesasEstadualTipos21.TOTAL_DESPESAS_EDUCACAO_DESPESAS_CORRENTES_PESSOAL_INATIVO,
  '49.1.3-Transferências às instituições comunitárias, confessionais ou filantrópicas sem fins lucrativos':
    ItemDespesasEstadualTipos21.TOTAL_DESPESAS_EDUCACAO_DESPESAS_CORRENTES_TRANSFERENCIAS,
  '49.1.4- Outras Despesas Correntes':
    ItemDespesasEstadualTipos21.TOTAL_DESPESAS_EDUCACAO_DESPESAS_CORRENTES_OUTRAS,
  '49.2- Despesas de Capital':
    ItemDespesasEstadualTipos21.TOTAL_DESPESAS_EDUCACAO_DESPESAS_CAPITAL,
  '49.2.1- Transferências às instituições comunitárias, confessionais ou filantrópicas sem fins lucrativos':
    ItemDespesasEstadualTipos21.TOTAL_DESPESAS_EDUCACAO_DESPESAS_CAPITAL_TRANSFERENCIAS,
  '49.2.2- Outras Despesas Capital':
    ItemDespesasEstadualTipos21.TOTAL_DESPESAS_EDUCACAO_DESPESAS_CAPITAL_OUTRAS,
};

export const mapeamentoDespesasCusteadasFundebExercicioEstadual2122: {
  [key: string]: DespesasCusteadasFundebExercicioEstadualTipos21;
} = {
  '14- Total das Despesas do FUNDEB com Profissionais da Educação Básica':
    DespesasCusteadasFundebExercicioEstadualTipos21.TOTAL_DESPESAS_FUNDEB_PROFISSIONAIS_EDUCACAO_BASICA,
  '15- Total das Despesas custeadas com FUNDEB - Impostos e Transferências de Impostos':
    DespesasCusteadasFundebExercicioEstadualTipos21.TOTAL_DESPESAS_FUNDEB_IMPOSTOS_TRANSFERENCIAS,
  '16- Total das Despesas custeadas com FUNDEB - Complementação da União - VAAF':
    DespesasCusteadasFundebExercicioEstadualTipos21.TOTAL_DESPESAS_FUNDEB_UNIAO_VAAF,
  '17- Total das Despesas custeadas com FUNDEB - Complementação da União - VAAT':
    DespesasCusteadasFundebExercicioEstadualTipos21.TOTAL_DESPESAS_FUNDEB_UNIAO_VAAT,
  '18- Total das Despesas custeadas com FUNDEB - Complementação da União - VAAT Aplicadas em Despesa de Capital':
    DespesasCusteadasFundebExercicioEstadualTipos21.TOTAL_DESPESAS_FUNDEB_UNIAO_VAAT_DESPESA_CAPITAL,
};

export const mapeamentoRecursosRecebidosNaoUtilizadosEstadual2122: {
  [key: string]: RecursosRecebidosNaoUtilizadosEstadualTipos21;
} = {
  '9- TOTAL DOS RECURSOS DE SUPERÁVIT':
    RecursosRecebidosNaoUtilizadosEstadualTipos21.TOTAL_RECURSOS_SUPERAVIT,
  '9.1- SUPERÁVIT DO EXERCÍCIO IMEDIATAMENTE ANTERIOR':
    RecursosRecebidosNaoUtilizadosEstadualTipos21.SUPERAVIT_EXERCICIO_ANTERIOR,
  '9.2- SUPERÁVIT RESIDUAL DE OUTROS EXERCÍCIOS':
    RecursosRecebidosNaoUtilizadosEstadualTipos21.SUPERAVIT_RESIDUAL_OUTROS_EXERCICIOS,
  '10- TOTAL DOS RECURSOS DO FUNDEB DISPONÍVEIS PARA UTILIZAÇÃO (7 +9)':
    RecursosRecebidosNaoUtilizadosEstadualTipos21.TOTAL_RECURSOS_FUNDEB_DISPONIVEIS_UTILIZACAO,
};

export const mapeamentoIndicadoresArt212Estadual2122: {
  [key: string]: IndicadoresTipos21Art212Estadual;
} = {
  '19- Mínimo de 70% do FUNDEB na Remuneração dos Profissionais da Educação Básica':
    IndicadoresTipos21Art212Estadual.MINIMO_70_FUNDEB_REMUNERACAO_PROFESSORES,
  '20 - Mínimo de 15% da Complementação da União ao FUNDEB - VAAT em Despesas de Capital':
    IndicadoresTipos21Art212Estadual.MINIMO_15_COMPLEMENTACAO_UNIAO_VAAT_DESPESAS_CAPITAL,
};

export const mapeamentoIndicadorArt25MaximoDeSuperavitEstadual2122: {
  [key: string]: IndicadorTipos21Art25MaximoDeSuperavitEstadual;
} = {
  '21- Total da Receita Recebida e não Aplicada no Exercício':
    IndicadorTipos21Art25MaximoDeSuperavitEstadual.TOTAL_RECEITA_RECEBIDA_NAO_APLICADA_EXERCICIO,
};

export const mapeamentoIndicadorArt25AplicacaoSuperavitEstadual2122: {
  [key: string]: IndicadorTipos21Art25AplicacaoSuperavitEstadual;
} = {
  '22- Total das Despesas custeadas com Superávit do FUNDEB':
    IndicadorTipos21Art25AplicacaoSuperavitEstadual.TOTAL_DESPESAS_CUSTEADAS_COM_SUPERAVIT_FUNDEB,
  '22.1- Total das Despesas custeadas com FUNDEB - Impostos e Transferências de Impostos':
    IndicadorTipos21Art25AplicacaoSuperavitEstadual.TOTAL_DESPESAS_CUSTEADAS_COM_FUNDEB_IMPOSTOS_TRANSFERENCIAS,
  '22.2- Total das Despesas custeadas com FUNDEB - Complementação da União (VAAF + VAAT)':
    IndicadorTipos21Art25AplicacaoSuperavitEstadual.TOTAL_DESPESAS_CUSTEADAS_COM_FUNDEB_COMPLEMENTACAO_UNIAO,
};

export const mapeamentoAplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual2122: {
  [key: string]: AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadualTipos21;
} = {
  '29- TOTAL DAS DESPESAS DE MDE CUSTEADAS COM RECURSOS DE IMPOSTOS (FUNDEB E RECEITA DE IMPOSTOS) = (L15(d ou e) + L28(d ou e) + L22.1(t))':
    AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadualTipos21.TOTAL_DESPESAS_MDE_CUSTEADAS_COM_RECURSOS_IMPOSTOS,
  '30 (-) RESULTADO LÍQUIDO DAS TRANSFERÊNCIAS DO FUNDEB = (L8)':
    AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadualTipos21.RESULTADO_LIQUIDO_TRANSFERENCIAS_FUNDEB,
  '31 (-) RESTOS A PAGAR NÃO PROCESSADOS INSCRITOS NO EXERCÍCIO SEM DISPONIBILIDADE FINANCEIRA DE RECURSOS DO FUNDEB IMPOSTOS4 = (15h)':
    AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadualTipos21.RESTOS_A_PAGAR_NAO_PROCESSADOS_S_DISPONIB_FUNDEB_IMPOSTOS,
  ' 32 (-) RESTOS A PAGAR NÃO PROCESSADOS INSCRITOS NO EXERCÍCIO SEM DISPONIBILIDADE FINANCEIRA DE RECURSOS DE IMPOSTOS4 e 7':
    AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadualTipos21.RESTOS_A_PAGAR_NAO_PROCESSADOS_S_DISPONIB_IMPOSTOS,
  '33 (-) CANCELAMENTO, NO EXERCÍCIO, DE RESTOS A PAGAR INSCRITOS COM DISPONIBILIDADE FINANCEIRA DE RECURSOS DE IMPOSTOS VINCULADOS AO ENSINO = (36.1(ac) + 36.2(ac))':
    AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadualTipos21.CANCELAMENTO_RESTOS_A_PAGAR_COM_DISPONIB_IMPOSTOS,
  '34- TOTAL DAS DESPESAS PARA FINS DE LIMITE (29 – (30 + 31 + 32 + 33))':
    AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadualTipos21.TOTAL_DESPESAS_PARA_FINS_LIMITE,
};

export const mapeamentoApuracaoLimiteMinimoConstitucionalEstadual2122: {
  [key: string]: ApuracaoLimiteMinimoConstitucionalEstadualTipos21;
} = {
  '35- APLICAÇÃO EM MDE SOBRE A RECEITA LÍQUIDA DE IMPOSTOS':
    ApuracaoLimiteMinimoConstitucionalEstadualTipos21.APLICACAO_EM_MDE_SOBRE_RECEITA_DE_IMPOSTOS,
};

export const mapeamentoControleDisponibilidadeFinanceiraEstadual2122: {
  [key: string]: ControleDisponibilidadeFinanceiraEstadualEstadualTipos21;
} = {
  '50- DISPONIBILIDADE FINANCEIRA EM 31 DE DEZEMBRO DE 2021':
    ControleDisponibilidadeFinanceiraEstadualEstadualTipos21.DISPONIBILIDADE_FINANCEIRA_EM_31_DE_DEZEMBRO_ANO_ANTERIOR,
  '51- (+) INGRESSO DE RECURSOS ATÉ O BIMESTRE (orçamentário)':
    ControleDisponibilidadeFinanceiraEstadualEstadualTipos21.INGRESSO_DE_RECURSOS_ATE_O_BIM_ORCAMENTARIO,
  '52- (-) PAGAMENTOS EFETUADOS ATÉ O BIMESTRE (orçamentário e restos a pagar)':
    ControleDisponibilidadeFinanceiraEstadualEstadualTipos21.PAGAMENTOS_EFETUADOS_ATE_O_BIM_ORCAMENTARIO_E_RESTOS_A_PAGAR,
  '53- (=) DISPONIBILIDADE FINANCEIRA ATÉ O BIMESTRE':
    ControleDisponibilidadeFinanceiraEstadualEstadualTipos21.DISPONIBILIDADE_FINANCEIRA_ATE_O_BIM,
  '54- (+) AJUSTES POSITIVOS ( RETENÇÕES E OUTROS VALORES EXTRAORÇAMENTÁRIOS)':
    ControleDisponibilidadeFinanceiraEstadualEstadualTipos21.AJUSTES_POSITIVOS_RETENCOES_E_OUTROS_VALORES_EXTRAORCAMENTARIOS,
  '55- (-) AJUSTES NEGATIVOS (OUTROS VALORES EXTRAORÇAMENTÁRIOS)':
    ControleDisponibilidadeFinanceiraEstadualEstadualTipos21.AJUSTES_NEGATIVOS_OUTROS_VALORES_EXTRAORCAMENTARIOS,
  '56- (=) SALDO FINANCEIRO CONCILIADO (Saldo Bancário)':
    ControleDisponibilidadeFinanceiraEstadualEstadualTipos21.SALDO_FINANCEIRO_CONCILIADO_SALDO_BANCARIO,
};

export const mapeamentoRestosAPagarParaCumprimentoDoLimiteEstadual2122: {
  [
    key: string
  ]: RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebTipos21;
} = {
  '36- RESTOS A PAGAR DE DESPESAS COM MDE':
    RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebTipos21.RESTOS_A_PAGAR_DE_DESPESAS_COM_MDE,
  '36.1 - Executadas com Recursos de Impostos e Transferências de Impostos':
    RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebTipos21.EXECUTADAS_COM_RECURSOS_IMPOSTOS_TRANSFERENCIAS_IMPOSTO,
  '36.2 - Executadas com Recursos do FUNDEB - Impostos':
    RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebTipos21.EXECUTADAS_COM_RECURSOS_FUNDEB_IMPOSTOS,
  '36.3 - Executadas com Recursos do FUNDEB - Complementação da União (VAAT + VAAF)':
    RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebTipos21.EXECUTADAS_COM_RECURSOS_FUNDEB_COMPLEMENTACAO_UNIAO,
};
