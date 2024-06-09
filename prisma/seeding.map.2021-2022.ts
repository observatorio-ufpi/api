import {
  AplicacaoDespesasFinsLimiteMinimoConstitucionalTipos21,
  ApuracaoLimiteMinimoConstitucionalTipos21,
  ControleDisponibildadeFinanceiraConciliacaoBancariaTipos21,
  DespesasCusteadasFundebExercicioTipos21,
  IndicadorTipos21Art25AplicacaoSuperavit,
  IndicadorTipos21Art25MaximoDeSuperavit,
  IndicadoresTipos21Art212,
  ItemDespesasTipos21,
  ItemReceitaTipos21,
  RecursosRecebidosNaoUtilizadosTipos21,
  RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebTipos21,
} from '@prisma/client';

export const mapeamentoReceitas21: {
  [key: string]: ItemReceitaTipos21;
} = {
  '1- RECEITA DE IMPOSTOS': ItemReceitaTipos21.RECEITA_DE_IMPOSTOS,
  '1.1- Receita Resultante do Imposto sobre a Propriedade Predial e Territorial Urbana – IPTU':
    ItemReceitaTipos21.RECEITA_IPTU,
  '1.2- Receita Resultante do Imposto sobre Transmissão Inter Vivos – ITBI':
    ItemReceitaTipos21.RECEITA_ITBI,
  '1.3- Receita Resultante do Imposto sobre Serviços de Qualquer Natureza – ISS':
    ItemReceitaTipos21.RECEITA_ISS,
  '1.4- Receita Resultante do Imposto de Renda Retido na Fonte – IRRF':
    ItemReceitaTipos21.RECEITA_IRRF,
  '2- RECEITA DE TRANSFERÊNCIAS CONSTITUCIONAIS E LEGAIS':
    ItemReceitaTipos21.RECEITA_TRANSFERENCIAS_CONSTITUCIONAIS,
  '2.1- Cota-Parte FPM': ItemReceitaTipos21.COTA_PARTE_FPM,
  '2.1.1- Parcela referente à CF, art. 159, I, alínea b':
    ItemReceitaTipos21.COTA_PARTE_FPM_PARCELA_CF_B,
  '2.1.2- Parcela referente à CF, art. 159, I, alíneas d e e':
    ItemReceitaTipos21.OTA_PARTE_FPM_PARCELA_CF_D_E,
  '2.2- Cota-Parte ICMS': ItemReceitaTipos21.COTA_PARTE_ICMS,
  '2.3- Cota-Parte IPI-Exportação':
    ItemReceitaTipos21.COTA_PARTE_IPI_EXPORTACAO,
  '2.4- Cota-Parte ITR': ItemReceitaTipos21.COTA_PARTE_ITR,
  '2.5- Cota-Parte IPVA': ItemReceitaTipos21.COTA_PARTE_IPVA,
  '2.6- Cota-Parte IOF-Ouro': ItemReceitaTipos21.COTA_PARTE_IOF_OURO,
  '2.7- Compensações Financeiras Provenientes de Impostos e Transferências Constitucionais':
    ItemReceitaTipos21.COMPENSACOES_FINANCEIRAS,
  '3- TOTAL DA RECEITA RESULTANTE DE IMPOSTOS (1 + 2)':
    ItemReceitaTipos21.TOTAL_RECEITA_IMPOSTOS,
  '4- TOTAL DESTINADO AO FUNDEB - 20% DE ((2.1.1) + (2.2) + (2.3) + (2.4) + (2.7))':
    ItemReceitaTipos21.TOTAL_DESTINADO_FUNDEB,
  '5- VALOR MÍNIMO A SER APLICADO EM MDE ALÉM DO VALOR DESTINADO FUNDEB - 5% DE ((2.1.1) + (2.2) + (2.3) + (2.4) + (2.5) + (2.7)) + 25% DE ((1.1 (1.2) + (1.3) + (1.4) + (2.1.2) + (2.6))':
    ItemReceitaTipos21.VALOR_MINIMO_APLICADO_MDE,
  '6- RECEITAS RECEBIDAS DO FUNDEB':
    ItemReceitaTipos21.RECEITAS_RECEBIDAS_FUNDEB,
  '6.1- FUNDEB - Impostos e Transferências de Impostos':
    ItemReceitaTipos21.FUNDEB_IMPOSTOS_TRANSFERENCIAS,
  '6.1.1- Principal': ItemReceitaTipos21.FUNDEB_PRINCIPAL_6_1_1,
  '6.1.2- Rendimento de Aplicação Financeira':
    ItemReceitaTipos21.FUNDEB_RENDIMENTO_APLICACAO_FINCANCEIRA_6_1_2,
  '6.2- FUNDEB - Complementação da União - VAAF':
    ItemReceitaTipos21.FUNDEB_COMPLEMENTACAO_UNIAO_VAAF,
  '6.2.1- Principal': ItemReceitaTipos21.FUNDEB_PRINCIPAL_6_2_1,
  '6.2.2- Rendimento de Aplicação Financeira':
    ItemReceitaTipos21.FUNDEB_RENDIMENTO_APLICACAO_FINCANCEIRA_6_2_2,
  '6.3- FUNDEB - Complementação da União - VAAT':
    ItemReceitaTipos21.FUNDEB_COMPLEMENTACAO_UNIAO_VAAT,
  '6.3.1- Principal': ItemReceitaTipos21.FUNDEB_PRINCIPAL_6_3_1,
  '6.3.2- Rendimento de Aplicação Financeira':
    ItemReceitaTipos21.FUNDEB_RENDIMENTO_APLICACAO_FINCANCEIRA_6_3_2,
  '7- RESULTADO LÍQUIDO DAS TRANSFERÊNCIAS DO FUNDEB (6.1.1 – 4)1':
    ItemReceitaTipos21.RESULTADO_LIQUIDO_TRANSFERENCIAS_FUNDEB,
  '35- RECEITA DE TRANSFERÊNCIAS DO FNDE (INCLUINDO RENDIMENTOS DE APLICAÇÃO FINANCEIRA)':
    ItemReceitaTipos21.FIN_ENSINO_RECEITA_TRANSFERENCIAS_FNDE,
  '35.1-Salário-Educação': ItemReceitaTipos21.FIN_ENSINO_SALARIO_EDUCACAO,
  '35.2- PDDE': ItemReceitaTipos21.FIN_ENSINO_PDDE,
  '35.3- PNAE': ItemReceitaTipos21.FIN_ENSINO_PNAE,
  '35.4 - PNATE': ItemReceitaTipos21.FIN_ENSINO_PNATE,
  '35.5- Outras Transferências do FNDE':
    ItemReceitaTipos21.FIN_ENSINO_OUTRAS_TRANSFERENCIAS_FNDE,
  '36- RECEITA DE TRANSFERÊNCIAS DE CONVÊNIOS':
    ItemReceitaTipos21.FIN_ENSINO_RECEITA_TRANSFERENCIAS_CONVENIOS,
  '37- RECEITA DE ROYALTIES DESTINADOS À EDUCAÇÃO':
    ItemReceitaTipos21.FIN_ENSINO_RECEITA_ROYALTIES_DESTINADOS_EDUCACAO,
  '38- RECEITA DE OPERAÇÕES DE CRÉDITO VINCULADAS À EDUCAÇÃO':
    ItemReceitaTipos21.FIN_ENSINO_RECEITA_OPERACOES_CREDITO_EDUCACAO,
  '39- OUTRAS RECEITAS PARA FINANCIAMENTO DO ENSINO':
    ItemReceitaTipos21.FIN_ENSINO_OUTRAS_RECEITAS,
  '40-TOTAL DAS RECEITAS ADICIONAIS PARA FINANCIAMENTO DO ENSINO = (35 + 36 + 37 +38 + 39 )':
    ItemReceitaTipos21.FIN_ENSINO_TOTAL_RECEITAS_ADICIONAIS,
};

export const mapeamentoDespesas21: {
  [key: string]: ItemDespesasTipos21;
} = {
  '10- PROFISSIONAIS DA EDUCAÇÃO BÁSICA':
    ItemDespesasTipos21.FUNDEB_PROFISSIONAIS_EDUCACAO_BASICA,
  '10.1- Educação Infantil': ItemDespesasTipos21.FUNDEB_EDUCACAO_INFANTIL,
  '10.1.1- Creche': ItemDespesasTipos21.FUNDEB_CRECHE,
  '10.1.2- Pré-escola': ItemDespesasTipos21.FUNDEB_PRE_ESCOLA,
  '10.2- Ensino Fundamental': ItemDespesasTipos21.FUNDEB_ENSINO_FUNDAMENTAL,
  '11- OUTRAS DESPESAS': ItemDespesasTipos21.FUNDEB_OUTRAS_DESPESAS,
  '11.1- Educação Infantil':
    ItemDespesasTipos21.FUNDEB_OUTRAS_DESPESAS_EDUCACAO_INFANTIL,
  '11.1.1- Creche': ItemDespesasTipos21.FUNDEB_OUTRAS_DESPESAS_EDUCACAO_CRECHE,
  '11.1.2- Pré-escola': ItemDespesasTipos21.FUNDEB_OUTRAS_DESPESAS_PRE_ESCOLA,
  '11.2- Ensino Fundamental':
    ItemDespesasTipos21.FUNDEB_OUTRAS_DESPESAS_ENSINO_FUNDAMENTAL,
  '12- TOTAL DAS DESPESAS COM RECURSOS DO FUNDEB (10 + 11)':
    ItemDespesasTipos21.TOTAL_DESPESAS_FUNDEB,
  '24- EDUCAÇÃO INFANTIL': ItemDespesasTipos21.MDE_EDUCACAO_INFANTIL,
  '24.1- Creche': ItemDespesasTipos21.MDE_CRECHE,
  '24.2- Pré-escola': ItemDespesasTipos21.MDE_PRE_ESCOLA,
  '25- ENSINO FUNDAMENTAL': ItemDespesasTipos21.MDE_ENSINO_FUNDAMENTAL,
  '26- TOTAL DAS DESPESAS COM AÇÕES TÍPICAS DE MDE (24 + 25)':
    ItemDespesasTipos21.TOTAL_ACOES_TIPICAS_MDE,
  '41- EDUCAÇÃO INFANTIL':
    ItemDespesasTipos21.OUTRAS_DESPESAS_EDUCACAO_INFANTIL,
  '41.1- Creche': ItemDespesasTipos21.OUTRAS_DESPESAS_CRECHE,
  '41.2- Pré-escola': ItemDespesasTipos21.OUTRAS_DESPESAS_PRE_ESCOLA,
  '42- ENSINO FUNDAMENTAL':
    ItemDespesasTipos21.OUTRAS_DESPESAS_ENSINO_FUNDAMENTAL,
  '43- ENSINO MÉDIO': ItemDespesasTipos21.OUTRAS_DESPESAS_ENSINO_MEDIO,
  '44- ENSINO SUPERIOR': ItemDespesasTipos21.OUTRAS_DESPESAS_ENSINO_SUPERIOR,
  '45- ENSINO PROFISSIONAL NÃO INTEGRADO AO ENSINO REGULAR':
    ItemDespesasTipos21.OUTRAS_DESPESAS_ENSINO_PROFISSIONAL_NAO_INTEGRADO,
  '46- TOTAL DAS OUTRAS DESPESAS COM EDUCAÇÃO (41 + 42 + 43 + 44 + 45)':
    ItemDespesasTipos21.TOTAL_OUTRAS_DESPESAS_EDUCACAO,
  '47- TOTAL GERAL DAS DESPESAS COM EDUCAÇÃO (12 + 26 + 46)':
    ItemDespesasTipos21.TOTAL_GERAL_DESPESAS_EDUCACAO,
  '47.1-DespesasCorrentes': ItemDespesasTipos21.DESPESAS_CORRENTES,
  '47.1.1- Pessoal Ativo': ItemDespesasTipos21.PESSOAL_ATIVO,
  '47.1.2- Pessoal Inativo': ItemDespesasTipos21.PESSOAL_INATIVO,
  '47.1.3-Transferênciasàs instituições comunitárias, confessionais ou filantrópicas sem fins lucrativos':
    ItemDespesasTipos21.TRANSFERENCIAS_INSTITUICOES_47_1_3,
  '47.1.4- Outras Despesas Correntes':
    ItemDespesasTipos21.OUTRAS_DESPESAS_CORRENTES,
  '47.2- Despesas de Capital': ItemDespesasTipos21.DESPESAS_DE_CAPITAL,
  '47.2.1- Transferências às instituições comunitárias, confessionais ou filantrópicas sem fins lucrativos':
    ItemDespesasTipos21.TRANSFERENCIAS_INSTITUICOES_47_2_1,
  '47.2.2- Outras Despesas Capital':
    ItemDespesasTipos21.OUTRAS_DESPESAS_CAPITAL,
};

export const mapeamentoDespesasCusteadasFundebExercicio21: {
  [key: string]: DespesasCusteadasFundebExercicioTipos21;
} = {
  '13- Total das Despesas do FUNDEB com Profissionais da Educação Básica':
    DespesasCusteadasFundebExercicioTipos21.TOTAL_DESPESAS_FUNDEB_PROFISSIONAIS_EDUCACAO_BASICA,
  '14- Total das Despesas custeadas com FUNDEB - Impostos e Transferências de Impostos':
    DespesasCusteadasFundebExercicioTipos21.TOTAL_DESPESAS_FUNDEB_IMPOSTOS_TRANSFERENCIAS,
  '15- Total das Despesas custeadas com FUNDEB - Complementação da União - VAAF':
    DespesasCusteadasFundebExercicioTipos21.TOTAL_DESPESAS_FUNDEB_UNIAO_VAAF,
  '16- Total das Despesas custeadas com FUNDEB - Complementação da União - VAAT':
    DespesasCusteadasFundebExercicioTipos21.TOTAL_DESPESAS_FUNDEB_UNIAO_VAAT,
  '17- Total das Despesas custeadas com FUNDEB - Complementação da União - VAAT Aplicadas na Educação Infantil':
    DespesasCusteadasFundebExercicioTipos21.TOTAL_DESPESAS_FUNDEB_UNIAO_VAAT_EDUCACAO_INFANTIL,
  '18- Total das Despesas custeadas com FUNDEB - Complementação da União - VAAT Aplicadas em Despesa de Capital':
    DespesasCusteadasFundebExercicioTipos21.TOTAL_DESPESAS_FUNDEB_UNIAO_VAAT_DESPESA_CAPITAL,
};

export const mapeamentoRecursosRecebidosNaoUtilizados21: {
  [key: string]: RecursosRecebidosNaoUtilizadosTipos21;
} = {
  '8- TOTAL DOS RECURSOS DE SUPERÁVIT':
    RecursosRecebidosNaoUtilizadosTipos21.TOTAL_RECURSOS_SUPERAVIT,
  '8.1- Superávit do Exercício Imediatamente Anterior':
    RecursosRecebidosNaoUtilizadosTipos21.SUPERAVIT_EXERCICIO_ANTERIOR,
  '8.2- Superávit Residual de Outros Exercícios':
    RecursosRecebidosNaoUtilizadosTipos21.SUPERAVIT_RESIDUAL_OUTROS_EXERCICIOS,
  '9- TOTAL DOS RECURSOS DO FUNDEB DISPONÍVEIS PARA UTILIZAÇÃO (6 +8)':
    RecursosRecebidosNaoUtilizadosTipos21.TOTAL_RECURSOS_FUNDEB_DISPONIVEIS_UTILIZACAO,
};

export const mapeamentoIndicadores21Art212: {
  [key: string]: IndicadoresTipos21Art212;
} = {
  '19- Mínimo de 70% do FUNDEB na Remuneração dos Profissionais da Educação Básica':
    IndicadoresTipos21Art212.MINIMO_70_FUNDEB_REMUNERACAO_PROFESSORES,
  '20 - Percentual de 50% da Complementação da União ao FUNDEB (VAAT) na Educação Infantil':
    IndicadoresTipos21Art212.PERCENTUAL_50_COMPLEMENTACAO_UNIAO_VAAT_EDUCACAO_INFANTIL,
  '21- Mínimo de 15% da Complementação da União ao FUNDEB - VAAT em Despesas de Capital':
    IndicadoresTipos21Art212.MINIMO_15_COMPLEMENTACAO_UNIAO_VAAT_DESPESAS_CAPITAL,
};

export const mapeamentoIndicador21Art25MaximoDeSuperavit: {
  [key: string]: IndicadorTipos21Art25MaximoDeSuperavit;
} = {
  '22- Total da Receita Recebida e não Aplicada no Exercício':
    IndicadorTipos21Art25MaximoDeSuperavit.TOTAL_RECEITA_RECEBIDA_NAO_APLICADA_EXERCICIO,
};

export const mapeamentoIndicador21Art25AplicacaoSuperavit: {
  [key: string]: IndicadorTipos21Art25AplicacaoSuperavit;
} = {
  '23- Total das Despesas custeadas com Superávit do FUNDEB':
    IndicadorTipos21Art25AplicacaoSuperavit.TOTAL_DESPESAS_CUSTEADAS_COM_SUPERAVIT_FUNDEB,
  '23.1- Total das Despesas custeadas com FUNDEB - Impostos e Transferências de Impostos':
    IndicadorTipos21Art25AplicacaoSuperavit.TOTAL_DESPESAS_CUSTEADAS_COM_FUNDEB_IMPOSTOS_TRANSFERENCIAS,
  '23.2- Total das Despesas custeadas com FUNDEB - Complementação da União (VAAF + VAAT)':
    IndicadorTipos21Art25AplicacaoSuperavit.TOTAL_DESPESAS_CUSTEADAS_COM_FUNDEB_COMPLEMENTACAO_UNIAO,
};

export const mapeamentoAplicacaoDespesasFinsLimiteMinimoConstitucional21: {
  [key: string]: AplicacaoDespesasFinsLimiteMinimoConstitucionalTipos21;
} = {
  '27- TOTAL DAS DESPESAS DE MDE CUSTEADAS COM RECURSOS DE IMPOSTOS (FUNDEB E RECEITA DE IMPOSTOS)':
    AplicacaoDespesasFinsLimiteMinimoConstitucionalTipos21.TOTAL_DESPESAS_MDE_CUSTEADAS_COM_RECURSOS_IMPOSTOS,
  '28 (-) RESULTADO LÍQUIDO DAS TRANSFERÊNCIAS DO FUNDEB':
    AplicacaoDespesasFinsLimiteMinimoConstitucionalTipos21.RESULTADO_LIQUIDO_TRANSFERENCIAS_FUNDEB,
  '29 (-) RESTOS A PAGAR NÃO PROCESSADOS INSCRITOS NO EXERCÍCIO SEM DISPONIBILIDADE FINANCEIRA DE RECURSOS DO FUNDEB IMPOSTOS':
    AplicacaoDespesasFinsLimiteMinimoConstitucionalTipos21.RESTOS_A_PAGAR_NAO_PROCESSADOS_S_DISPONIB_FUNDEB_IMPOSTOS,
  '30 (-) RESTOS A PAGAR NÃO PROCESSADOS INSCRITOS NO EXERCÍCIO SEM DISPONIBILIDADE FINANCEIRA DE RECURSOS DE IMPOSTOS':
    AplicacaoDespesasFinsLimiteMinimoConstitucionalTipos21.RESTOS_A_PAGAR_NAO_PROCESSADOS_S_DISPONIB_IMPOSTOS,
  '31 (-) CANCELAMENTO, NO EXERCÍCIO, DE RESTOS A PAGAR INSCRITOS COM DISPONIBILIDADE FINANCEIRA DE RECURSOS DE IMPOSTOS VINCULADOS AO ENSINO':
    AplicacaoDespesasFinsLimiteMinimoConstitucionalTipos21.CANCELAMENTO_RESTOS_A_PAGAR_COM_DISPONIB_IMPOSTOS,
  '32- TOTAL DAS DESPESAS PARA FINS DE LIMITE':
    AplicacaoDespesasFinsLimiteMinimoConstitucionalTipos21.TOTAL_DESPESAS_PARA_FINS_LIMITE,
};

export const mapeamentoApuracaoLimiteMinimoConstitucional21: {
  [key: string]: ApuracaoLimiteMinimoConstitucionalTipos21;
} = {
  '33- APLICAÇÃO EM MDE SOBRE A RECEITA DE IMPOSTOS':
    ApuracaoLimiteMinimoConstitucionalTipos21.APLICACAO_EM_MDE_SOBRE_RECEITA_DE_IMPOSTOS,
};

export const mapeamentoRestosAPagarExerciciosAntDisponibilidadeFinanceiraFundeb21: {
  [
    key: string
  ]: RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebTipos21;
} = {
  '34- RESTOS A PAGAR DE DESPESAS COM MDE':
    RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebTipos21.RESTOS_A_PAGAR_DE_DESPESAS_COM_MDE,
  '34.1 - Executadas com Recursos de Impostos e Transferências de Imposto':
    RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebTipos21.EXECUTADAS_COM_RECURSOS_IMPOSTOS_TRANSFERENCIAS_IMPOSTO,
  '34.2 - Executadas com Recursos do FUNDEB - Impostos':
    RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebTipos21.EXECUTADAS_COM_RECURSOS_FUNDEB_IMPOSTOS,
  '34.3 - Executadas com Recursos do FUNDEB - Complementação da União (VAAT + VAAF)':
    RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebTipos21.EXECUTADAS_COM_RECURSOS_FUNDEB_COMPLEMENTACAO_UNIAO,
};

export const mapeamentoControleDisponibilidadeFinanceiraConciliacaoBancaria21: {
  [key: string]: ControleDisponibildadeFinanceiraConciliacaoBancariaTipos21;
} = {
  '48- Disponibilidade Financeira em 31 de Dezembro de 2021':
    ControleDisponibildadeFinanceiraConciliacaoBancariaTipos21.DISPONIBILIDADE_FINANCEIRA_EM_31_DE_DEZEMBRO_ANO_ANTERIOR,
  '49- (+) Ingresso de Recursos até o Bimestre (orçamentário)':
    ControleDisponibildadeFinanceiraConciliacaoBancariaTipos21.INGRESSO_DE_RECURSOS_ATE_O_BIM_ORCAMENTARIO,
  '50- (-) Pagamentos Efetuados até o Bimestre (orçamentário e restos a pagar)':
    ControleDisponibildadeFinanceiraConciliacaoBancariaTipos21.PAGAMENTOS_EFETUADOS_ATE_O_BIM_ORCAMENTARIO_E_RESTOS_A_PAGAR,
  '51- (=) Disponibilidade Financeira até o Bimestre':
    ControleDisponibildadeFinanceiraConciliacaoBancariaTipos21.DISPONIBILIDADE_FINANCEIRA_ATE_O_BIM,
  '52- (+) Ajustes Positivos (Retenções e Outros Valores Extraorçamentários)':
    ControleDisponibildadeFinanceiraConciliacaoBancariaTipos21.AJUSTES_POSITIVOS_RETENCOES_E_OUTROS_VALORES_EXTRAORCAMENTARIOS,
  '53- (-) Ajustes Negativos (Outros Valores Extraorçamentários)':
    ControleDisponibildadeFinanceiraConciliacaoBancariaTipos21.AJUSTES_NEGATIVOS_OUTROS_VALORES_EXTRAORCAMENTARIOS,
  '54- (=) Saldo Financeiro Conciliado (Saldo Bancário)':
    ControleDisponibildadeFinanceiraConciliacaoBancariaTipos21.SALDO_FINANCEIRO_CONCILIADO_SALDO_BANCARIO,
};
