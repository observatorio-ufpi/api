import {
  ApuracaoDespesasLimiteMinimoConstitucionalEstadualTipos23,
  ApuracaoLimiteMinimoConstitucionalEstadualTipos23,
  ControleDisponibilidadeFinanceiraEstadualTipos23,
  DespesasCusteadasFundebExercicioEstadualTipos23,
  EmendaConstitucionalExclusivoSiopeEstadualTipos23,
  IndicadorArt25AplicacaoSuperavitEstadualTipos23,
  IndicadorArt25Maximo10PorCentoDeSuperavitEstadualTipos23,
  IndicadoresArt212EstadualTipos23,
  ItemDespesaEstadualTipos23,
  ItemReceitaEstadualTipos23,
  RecursosRecebidosNaoUtilizadosEstadualTipos23,
  RestosAPagarParaCumprimentoDoLimiteEstadualTipos23,
} from '@prisma/client';

export const mapeamentoReceitasEstadual23: {
  [key: string]: ItemReceitaEstadualTipos23;
} = {
  '1- RECEITA DE IMPOSTOS': ItemReceitaEstadualTipos23.RECEITA_DE_IMPOSTOS,
  '1.1- Receita Resultante do Imposto sobre a Circulação de Mercadorias e Serviços de Transporte Interestadual e Intermunicipal e de Comunicação – ICMS':
    ItemReceitaEstadualTipos23.RECEITA_ICMS,
  '1.1.1- ICMS - Principal e Encargos (Multas, Juros de Mora, Divida Ativa e Outros Encargos do ICMS)':
    ItemReceitaEstadualTipos23.RECEITA_ICMS_PRINCIPAL_ENCARGOS,
  '1.1.2- Adicional de até 2% do ICMS destinado ao Fundo de Combate à Pobreza (ADCT, art. 82, §1º)':
    ItemReceitaEstadualTipos23.RECEITA_ICMS_ADICIONAL_FUNDO_COMBATE_POBREZA,
  '1.2- Receita Resultante do Imposto de Transmissão Causa Mortis e Doação de Bens e Direitos – ITCD':
    ItemReceitaEstadualTipos23.RECEITA_ITCD,
  '1.3- Receita Resultante do Imposto sobre a Propriedade de Veículos Automotores – IPVA':
    ItemReceitaEstadualTipos23.RECEITA_IPVA,
  '1.4- Receita Resultante do Imposto sobre a Renda e Proventos de Qualquer Natureza Retido na Fonte – IRRF':
    ItemReceitaEstadualTipos23.RECEITA_IRRF,
  '2- RECEITA DE TRANSFERÊNCIAS CONSTITUCIONAIS E LEGAIS':
    ItemReceitaEstadualTipos23.RECEITA_TRANSFERENCIAS_CONSTITUCIONAIS_LEGAIS,
  '2.1- Cota-Parte FPE': ItemReceitaEstadualTipos23.RECEITA_FPE,
  '2.2- Cota-Parte IPI-Exportação':
    ItemReceitaEstadualTipos23.RECEITA_IPI_EXPORTACAO,
  '2.3- Cota-Parte IOF-Ouro': ItemReceitaEstadualTipos23.RECEITA_IOF_OURO,
  '2.4- Outras transferências ou Compensações Financeiras Provenientes de Impostos e Transferências Constitucionais':
    ItemReceitaEstadualTipos23.RECEITA_COMPENSACOES_FINANCEIRAS,
  '3- DEDUÇÕES DE TRANSFERÊNCIAS CONSTITUCIONAIS AOS MUNICÍPIOS':
    ItemReceitaEstadualTipos23.DEDUCOES_TRANSFERENCIAS_CONSTITUCIONAIS_MUNICIPIOS,
  '3.1- PARCELA DO ICMS REPASSADA AOS MUNICÍPIOS (equivalente a 25% de 1.1.1)':
    ItemReceitaEstadualTipos23.DEDUCAO_ICMS_MUNICIPIOS,
  '3.2- PARCELA DO IPVA REPASSADA AOS MUNICÍPIOS (equivalente a 50% de 1.3)':
    ItemReceitaEstadualTipos23.DEDUCAO_IPVA_MUNICIPIOS,
  '3.3- PARCELA DA COTA-PARTE DO IPI-EXPORTAÇÃO REPASSADA AOS MUNICÍPIOS (equivalente a 25% de 2.2)':
    ItemReceitaEstadualTipos23.DEDUCAO_IPI_EXPORTACAO_MUNICIPIOS,
  '4- TOTAL DA RECEITA LÍQUIDA RESULTANTE DE IMPOSTOS (1 + 2 - 3)':
    ItemReceitaEstadualTipos23.RECEITA_LIQUIDA_RESULTANTE_IMPOSTOS,
  '5- TOTAL DESTINADO AO FUNDEB - equivalente a 20% DE ((1.1 - 3.1) + (1.2) + (1.3 - 3.2) + (2.1) + (2.2 - 3.3) + (2.4))':
    ItemReceitaEstadualTipos23.TOTAL_DESTINADO_FUNDEB,
  '6- VALOR MÍNIMO A SER APLICADO ALÉM DO VALOR DESTINADO AO FUNDEB - 5% DE ((1.1 - 3.1) + (1.2) + (1.3 - 3.2) + (2.1) + (2.2 - 3.3) + (2.4)) + 25% DE (1.4 + 2.3)':
    ItemReceitaEstadualTipos23.VALOR_MINIMO_MDE_ALEM_FUNDEB,
  '7- RECEITAS DO FUNDEB RECEBIDAS':
    ItemReceitaEstadualTipos23.TOTAL_DAS_RECEITAS_DO_FUNDEB_RECEBIDAS,
  '7.1- FUNDEB - Impostos e Transferências de Impostos':
    ItemReceitaEstadualTipos23.FUNDEB_IMPOSTOS_E_TRANSFERENCIAS_DE_IMPOSTOS,
  '7.1.1- Principal': ItemReceitaEstadualTipos23.FUNDEB_PRINCIPAL,
  '7.1.2- Rendimento de Aplicação Financeira':
    ItemReceitaEstadualTipos23.FUNDEB_RENDIMENTOS_DE_APLICACAO_FINANCEIRA,
  '7.1.3- Ressarcimento de recursos do Fundeb':
    ItemReceitaEstadualTipos23.FUNDEB_RESSARCIMENTO_DE_RECURSOS_DO_FUNDEB,
  '7.2- FUNDEB - Complementação da União - VAAF':
    ItemReceitaEstadualTipos23.FUNDEB_COMPLEMENTACAO_DA_UNIAO_VAAF,
  '7.2.1- Principal': ItemReceitaEstadualTipos23.FUNDEB_VAAF_PRINCIPAL,
  '7.2.2- Rendimento de Aplicação Financeira':
    ItemReceitaEstadualTipos23.FUNDEB_VAAF_RENDIMENTOS_APLICACAO_FINANCEIRA,
  '7.2.3- Ressarcimento de recursos do Fundeb':
    ItemReceitaEstadualTipos23.FUNDEB__VAAF_RESSARCIMENTO_FUNDEB,
  '7.3- FUNDEB - Complementação da União - VAAT':
    ItemReceitaEstadualTipos23.FUNDEB_COMPLEMENTACAO_DA_UNIAO_VAAT,
  '7.3.1- Principal': ItemReceitaEstadualTipos23.FUNDEB_VAAT_PRINCIPAL,
  '7.3.2- Rendimento de Aplicação Financeira':
    ItemReceitaEstadualTipos23.FUNDEB_VAAT_RENDIMENTOS_APLICACAO_FINANCEIRA,
  '7.3.3- Ressarcimento de recursos do Fundeb':
    ItemReceitaEstadualTipos23.FUNDEB_VAAT_RESSARCIMENTO_FUNDEB,
  '7.4- FUNDEB - Complementação da União - VAAR':
    ItemReceitaEstadualTipos23.FUNDEB_COMPLEMENTACAO_DA_UNIAO_VAAR,
  '7.4.1- Principal': ItemReceitaEstadualTipos23.FUNDEB_VAAR_PRINCIPAL,
  '7.4.2- Rendimento de Aplicação Financeira':
    ItemReceitaEstadualTipos23.FUNDEB_VAAR_RENDIMENTO_APLICACAO_FINANCEIRA,
  '7.4.3- Ressarcimento de recursos do Fundeb':
    ItemReceitaEstadualTipos23.FUNDEB_VAAR_RESSARCIMENTO_FUNDEB,
  '8- RESULTADO LÍQUIDO DAS TRANSFERÊNCIAS DO FUNDEB (7.1.1 – 5)':
    ItemReceitaEstadualTipos23.RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB,
  '30- TOTAL DAS RECEITAS ADICIONAIS PARA FINANCIAMENTO DO ENSINO':
    ItemReceitaEstadualTipos23.TOTAL_DAS_RECEITAS_ADICIONAIS_PARA_FINANCIAMENTO_DO_ENSINO,
  '30.1- RECEITA DE TRANSFERÊNCIAS DO FNDE (INCLUINDO RENDIMENTOS DE APLICAÇÃO FINANCEIRA)':
    ItemReceitaEstadualTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE,
  '30.1.1- Salário-Educação':
    ItemReceitaEstadualTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_SALARIO_EDUCACAO,
  '30.1.2- PDDE':
    ItemReceitaEstadualTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_PDDE,
  '30.1.3- PNAE':
    ItemReceitaEstadualTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_PNAE,
  '30.1.4- PNATE':
    ItemReceitaEstadualTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_PNATE,
  '30.1.5- Outras Transferências do FNDE':
    ItemReceitaEstadualTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_OUTRAS_TRANSFERENCIAS,
  '30.2- RECEITA DE TRANSFERÊNCIAS DE CONVÊNIOS':
    ItemReceitaEstadualTipos23.RECEITA_DE_TRANSFERENCIAS_DE_CONVENIOS,
  '30.3- RECEITA DE ROYALTIES DESTINADOS À EDUCAÇÃO':
    ItemReceitaEstadualTipos23.RECEITA_DE_ROYALTIES_DESTINADOS_A_EDUCACAO,
  '30.4- RECEITA DE OPERAÇÕES DE CRÉDITO VINCULADAS À EDUCAÇÃO':
    ItemReceitaEstadualTipos23.RECEITA_DE_OPERACOES_DE_CREDITO_VINCULADAS_A_EDUCACAO,
  '30.5- OUTRAS RECEITAS PARA FINANCIAMENTO DO ENSINO':
    ItemReceitaEstadualTipos23.OUTRAS_RECEITAS_PARA_FINANCIAMENTO_DO_ENSINO,
};
export const mapeamentoDespesasEstadual23: {
  [key: string]: ItemDespesaEstadualTipos23;
} = {
  '11- TOTAL DAS DESPESAS COM RECURSOS DO FUNDEB':
    ItemDespesaEstadualTipos23.TOTAL_DAS_DESPESAS_COM_RECURSOS_DO_FUNDEB,
  '11.1- PROFISSIONAIS DA EDUCAÇÃO BÁSICA':
    ItemDespesaEstadualTipos23.PROFISSIONAIS_DA_EDUCACAO_BASICA,
  '11.1.1- Ensino Fundamental':
    ItemDespesaEstadualTipos23.PROFISSIONAIS_DA_EDUCACAO_BASICA_ENSINO_FUNDAMENTAL,
  '11.1.2- Ensino Médio':
    ItemDespesaEstadualTipos23.PROFISSIONAIS_DA_EDUCACAO_BASICA_ENSINO_MEDIO,
  '11.1.3- Educação de Jovens e Adultos':
    ItemDespesaEstadualTipos23.PROFISSIONAIS_DA_EDUCACAO_BASICA_EDUCACAO_DE_JOVENS_ADULTOS,
  '11.1.4- Educação Especial':
    ItemDespesaEstadualTipos23.PROFISSIONAIS_DA_EDUCACAO_BASICA_EDUCACAO_ESPECIAL,
  '11.1.5- Administração Geral':
    ItemDespesaEstadualTipos23.PROFISSIONAIS_DA_EDUCACAO_BASICA_ADMINISTRACAO_GERAL,
  '11.2- OUTRAS DESPESAS': ItemDespesaEstadualTipos23.OUTRAS_DESPESAS,
  '11.2.1- Ensino Fundamental':
    ItemDespesaEstadualTipos23.OUTRAS_DESPESAS_EDUCACAO_INFANTIL,
  '11.2.2- Ensino Médio':
    ItemDespesaEstadualTipos23.OUTRAS_DESPESAS_ENSINO_FUNDAMENTAL,
  '11.2.3- Educação de Jovens e Adultos':
    ItemDespesaEstadualTipos23.OUTRAS_DESPESAS_EDUCACAO_DE_JOVENS_E_ADULTOS,
  '11.2.4- Educação Especial':
    ItemDespesaEstadualTipos23.OUTRAS_DESPESAS_EDUCACAO_ESPECIAL,
  '11.2.5- Administração Geral':
    ItemDespesaEstadualTipos23.OUTRAS_DESPESAS_ADMINISTRACAO_GERAL,
  '11.2.6- Transporte (Escolar)':
    ItemDespesaEstadualTipos23.OUTRAS_DESPESAS_TRANSPORTE_ESCOLAR,
  '11.2.7- Outras': ItemDespesaEstadualTipos23.OUTRAS_DESPESAS_OUTRAS,
  '19- TOTAL DAS DESPESAS COM AÇÕES TÍPICAS DE MDE CUSTEADAS COM RECEITAS DE IMPOSTOS':
    ItemDespesaEstadualTipos23.TOTAL_DESPESAS_MDE_CUSTEADAS_COM_RECEITAS_IMPOSTOS,
  '19.1- EDUCAÇÃO INFANTIL':
    ItemDespesaEstadualTipos23.MDE_COM_RECEITAS_IMPOSTOS_EDUCACAO_INFANTIL,
  '19.2- ENSINO FUNDAMENTAL':
    ItemDespesaEstadualTipos23.MDE_COM_RECEITAS_IMPOSTOS_ENSINO_FUNDAMENTAL,
  '19.3- ENSINO MÉDIO':
    ItemDespesaEstadualTipos23.MDE_COM_RECEITAS_IMPOSTOS_ENSINO_MEDIO,
  '19.4- ENSINO SUPERIOR':
    ItemDespesaEstadualTipos23.MDE_COM_RECEITAS_IMPOSTOS_ENSINO_SUPERIOR,
  '19.5- ENSINO PROFISSIONAL':
    ItemDespesaEstadualTipos23.MDE_COM_RECEITAS_IMPOSTOS_ENSINO_PROFISSIONAL,
  '19.6- EDUCAÇÃO DE JOVENS E ADULTOS':
    ItemDespesaEstadualTipos23.MDE_COM_RECEITAS_IMPOSTOS_EDUCACAO_DE_JOVENS_E_ADULTOS,
  '19.7- EDUCAÇÃO ESPECIAL':
    ItemDespesaEstadualTipos23.MDE_COM_RECEITAS_IMPOSTOS_EDUCACAO_ESPECIAL,
  '19.8- ADMINISTRAÇÃO GERAL':
    ItemDespesaEstadualTipos23.MDE_COM_RECEITAS_IMPOSTOS_ADMINISTRACAO_GERAL,
  '19.9- TRANSPORTE (Escolar)':
    ItemDespesaEstadualTipos23.MDE_COM_RECEITAS_IMPOSTOS_TRANSPORTE_ESCOLAR,
  '19.10- OUTRAS': ItemDespesaEstadualTipos23.MDE_COM_RECEITAS_IMPOSTOS_OUTRAS,
  '20- TOTAL DAS DESPESAS COM AÇÕES TÍPICAS DE MDE CUSTEADAS COM RECEITAS DE IMPOSTOS E FUNDEB':
    ItemDespesaEstadualTipos23.TOTAL_DESPESAS_COM_ACOES_TIPICAS_MDE_CUSTEADAS_IMPOSTOS_FUNDEB,
  '20.1- EDUCAÇÃO INFANTIL':
    ItemDespesaEstadualTipos23.ACOES_TIPICAS_MDE_EDUCACAO_INFANTIL,
  '20.1.1- Creche': ItemDespesaEstadualTipos23.ACOES_TIPICAS_MDE_CRECHE,
  '20.1.2- Pré-escola': ItemDespesaEstadualTipos23.ACOES_TIPICAS_MDE_PRE_ESCOLA,
  '20.2- ENSINO FUNDAMENTAL':
    ItemDespesaEstadualTipos23.ACOES_TIPICAS_MDE_ENSINO_FUNDAMENTAL,
  '20.3- ENSINO MÉDIO':
    ItemDespesaEstadualTipos23.ACOES_TIPICAS_MDE_ENSINO_MEDIO,
  '20.4- ENSINO SUPERIOR':
    ItemDespesaEstadualTipos23.ACOES_TIPICAS_MDE_ENSINO_SUPERIOR,
  '20.5- ENSINO PROFISSIONAL NÃO INTEGRADO AO ENSINO REGULAR':
    ItemDespesaEstadualTipos23.ACOES_TIPICAS_MDE_ENSINO_PROFISSIONAL_NAO_INTEGRADO,
  '31- TOTAL DAS OUTRAS DESPESAS COM EDUCAÇÃO':
    ItemDespesaEstadualTipos23.TOTAL_OUTRAS_DESPESAS_COM_EDUCACAO,
  '31.1 EDUCAÇÃO INFANTIL':
    ItemDespesaEstadualTipos23.TOTAL_OUTRAS_DESPESAS_EDUCACAO_INFANTIL,
  '31.2- ENSINO FUNDAMENTAL':
    ItemDespesaEstadualTipos23.TOTAL_OUTRAS_DESPESAS_ENSINO_FUNDAMENTAL,
  '31.3- ENSINO MÉDIO':
    ItemDespesaEstadualTipos23.TOTAL_OUTRAS_DESPESAS_ENSINO_MEDIO,
  '31.4- ENSINO SUPERIOR':
    ItemDespesaEstadualTipos23.TOTAL_OUTRAS_DESPESAS_ENSINO_SUPERIOR,
  '31.5- ENSINO PROFISSIONAL':
    ItemDespesaEstadualTipos23.TOTAL_OUTRAS_DESPESAS_ENSINO_PROFISSIONAL,
  '31.6- EDUCAÇÃO DE JOVENS E ADULTOS':
    ItemDespesaEstadualTipos23.TOTAL_OUTRAS_DESPESAS_ENSINO_DE_JOVENS_E_ADULTOS,
  '31.7- EDUCAÇÃO ESPECIAL':
    ItemDespesaEstadualTipos23.TOTAL_OUTRAS_DESPESAS_EDUCACAO_ESPECIAL,
  '31.8- OUTRAS': ItemDespesaEstadualTipos23.TOTAL_OUTRAS_DESPESAS_OUTRAS,
  '32- TOTAL GERAL DAS DESPESAS COM EDUCAÇÃO (11 + 19 + 31)':
    ItemDespesaEstadualTipos23.TOTAL_GERAL_DESPESAS_COM_EDUCACAO,
  '32.1- Despesas Correntes': ItemDespesaEstadualTipos23.DESPESAS_CORRENTES,
  '32.1.1- Pessoal Ativo': ItemDespesaEstadualTipos23.PESSOAL_ATIVO,
  '32.1.2- Pessoal Inativo': ItemDespesaEstadualTipos23.PESSOAL_INATIVO,
  '32.1.3-Transferências às instituições comunitárias, confessionais ou filantrópicas sem fins lucrativos':
    ItemDespesaEstadualTipos23.TRANSFERENCIAS_INSTITUICOES_COMUNITARIAS,
  '32.1.4- Outras Despesas Correntes':
    ItemDespesaEstadualTipos23.OUTRAS_DESPESAS_CORRENTES,
  '32.2- Despesas de Capital': ItemDespesaEstadualTipos23.DESPESAS_DE_CAPITAL,
  '32.2.1- Transferências às instituições comunitárias, confessionais ou filantrópicas sem fins lucrativos':
    ItemDespesaEstadualTipos23.TRANSFERENCIAS_INSTITUICOES_COMUNITARIAS_CAPITAL,
  '32.2.2- Outras Despesas Capital':
    ItemDespesaEstadualTipos23.OUTRAS_DESPESAS_CAPITAL,
};

export const mapeamentoRecursosRecebidosNaoUtilizadosEstadual23: {
  [key: string]: RecursosRecebidosNaoUtilizadosEstadualTipos23;
} = {
  '9- TOTAL DOS RECURSOS DE SUPERÁVIT':
    RecursosRecebidosNaoUtilizadosEstadualTipos23.TOTAL_RECURSOS_SUPERAVIT,
  '9.1- SUPERÁVIT DO EXERCÍCIO IMEDIATAMENTE ANTERIOR':
    RecursosRecebidosNaoUtilizadosEstadualTipos23.SUPERAVIT_EXERCICIO_ANTERIOR,
  '9.2- SUPERÁVIT RESIDUAL DE OUTROS EXERCÍCIOS':
    RecursosRecebidosNaoUtilizadosEstadualTipos23.SUPERAVIT_RESIDUAL_OUTROS_EXERCICIOS,
  '10- TOTAL DOS RECURSOS DO FUNDEB DISPONÍVEIS PARA UTILIZAÇÃO (7 + 9)':
    RecursosRecebidosNaoUtilizadosEstadualTipos23.TOTAL_RECURSOS_FUNDEB_DISPONIVEIS,
};
export const mapeamentoDespesasCusteadasFundebExercicioEstadual23: {
  [key: string]: DespesasCusteadasFundebExercicioEstadualTipos23;
} = {
  '12- TOTAL DAS DESPESAS CUSTEADAS COM RECURSOS DO FUNDEB RECEBIDAS NO EXERCÍCIO':
    DespesasCusteadasFundebExercicioEstadualTipos23.TOTAL_DESPESAS_FUNDEB_RECEBIDAS,
  '12.1- Total das Despesas custeadas com FUNDEB - Impostos e Transferências de Impostos':
    DespesasCusteadasFundebExercicioEstadualTipos23.TOTAL_DESPESAS_CUSTEADAS_FUNDEB_IMPOSTOS_TRANSFERENCIAS,
  '12.2- Total das Despesas custeadas com FUNDEB - Complementação da União - VAAF':
    DespesasCusteadasFundebExercicioEstadualTipos23.TOTAL_DESPESAS_CUSTEADAS_FUNDEB_COMPLEMENTACAO_UNIAO_VAAF,
  '12.3- Total das Despesas custeadas com FUNDEB - Complementação da União - VAAT':
    DespesasCusteadasFundebExercicioEstadualTipos23.TOTAL_DESPESAS_CUSTEADAS_FUNDEB_COMPLEMENTACAO_UNIAO_VAAT,
  '12.4- Total das Despesas custeadas com FUNDEB - Complementação da União - VAAR':
    DespesasCusteadasFundebExercicioEstadualTipos23.TOTAL_DESPESAS_CUSTEADAS_FUNDEB_COMPLEMENTACAO_UNIAO_VAAR,
  '13- TOTAL DAS DESPESAS DO FUNDEB COM PROFISSIONAIS DA EDUCAÇÃO BÁSICA':
    DespesasCusteadasFundebExercicioEstadualTipos23.TOTAL_DESPESAS_FUNDEB_PROFISSIONAIS_EDUCACAO_BASICA,
  '14- TOTAL DAS DESPESAS CUSTEADAS COM FUNDEB - COMPLEMENTAÇÃO DA UNIÃO - VAAT APLICADAS EM DESPESA DE CAPITAL':
    DespesasCusteadasFundebExercicioEstadualTipos23.TOTAL_DESPESAS_CUSTEADAS_FUNDEB_VAAT_DESPESA_CAPITAL,
};

export const mapeamentoIndicadoresArt212Estadual23: {
  [key: string]: IndicadoresArt212EstadualTipos23;
} = {
  '15- Mínimo de 70% do FUNDEB na Remuneração dos Profissionais da Educação Básica':
    IndicadoresArt212EstadualTipos23.MINIMO_70_PORCENTO_FUNDEB_PROFISSIONAIS_EDUCACAO_BASICA,
  '16- Mínimo de 15% da Complementação da União ao FUNDEB - VAAT em Despesas de Capital':
    IndicadoresArt212EstadualTipos23.MINIMO_15_PORCENTO_FUNDEB_VAAT_DESPESAS_CAPITAL,
};

export const mapeamentoIndicadorArt25Maximo10PorCentoDeSuperavitEstadual23: {
  [key: string]: IndicadorArt25Maximo10PorCentoDeSuperavitEstadualTipos23;
} = {
  '17- Total da Receita Recebida e não Aplicada no Exercício':
    IndicadorArt25Maximo10PorCentoDeSuperavitEstadualTipos23.TOTAL_RECEITA_RECEBIDA_NAO_APLICADA_EXERCICIO,
};

export const mapeamentoIndicadorArt25AplicacaoSuperavitEstadual23: {
  [key: string]: IndicadorArt25AplicacaoSuperavitEstadualTipos23;
} = {
  '18- Total das Despesas custeadas com Superávit do FUNDEB':
    IndicadorArt25AplicacaoSuperavitEstadualTipos23.TOTAL_DESPESAS_CUSTEADAS_COM_SUPERAVIT_FUNDEB,
  '18.1- Total das Despesas custeadas com FUNDEB - Impostos e Transferências de Impostos':
    IndicadorArt25AplicacaoSuperavitEstadualTipos23.TOTAL_DESPESAS_CUSTEADAS_FUNDEB_IMPOSTOS_TRANSFERENCIAS,
  '18.2- Total das Despesas custeadas com FUNDEB - Complementação da União (VAAF + VAAT + VAAR)':
    IndicadorArt25AplicacaoSuperavitEstadualTipos23.TOTAL_DESPESAS_CUSTEADAS_FUNDEB_COMPLEMENTACAO_UNIAO,
};

export const mapeamentoApuracaoDespesasLimiteMinimoConstitucionalEstadual23: {
  [key: string]: ApuracaoDespesasLimiteMinimoConstitucionalEstadualTipos23;
} = {
  '21- TOTAL DAS DESPESAS DE MDE CUSTEADAS COM RECURSOS DE IMPOSTOS = (L19(d ou e))':
    ApuracaoDespesasLimiteMinimoConstitucionalEstadualTipos23.TOTAL_DESPESAS_MDE_CUSTEADAS_RECURSOS_IMPOSTOS,
  '22- TOTAL DAS RECEITAS TRANSFERIDAS AO FUNDEB = (L5)':
    ApuracaoDespesasLimiteMinimoConstitucionalEstadualTipos23.TOTAL_RECEITAS_TRANSFERIDAS_FUNDEB,
  '23- (-) RECEITAS DO FUNDEB NÃO UTILIZADAS NO EXERCÍCIO, EM VALOR SUPERIOR A 10% = (L17q)':
    ApuracaoDespesasLimiteMinimoConstitucionalEstadualTipos23.RECEITAS_FUNDEB_NAO_UTILIZADAS_EXERCICIO_SUPERIOR_10_PORCENTO,
  '24- (+) VALOR APLICADO ATÉ O PRIMEIRO QUADRIMESTRE QUE INTEGRARÁ O LIMITE CONSTITUCIONAL = (L18.1(x))':
    ApuracaoDespesasLimiteMinimoConstitucionalEstadualTipos23.VALOR_APLICADO_PRIMEIRO_QUADRIMESTRE_LIMITE_CONSTITUCIONAL,
  '25 (-) RESTOS A PAGAR NÃO PROCESSADOS INSCRITOS NO EXERCÍCIO SEM DISPONIBILIDADE FINANCEIRA DE RECURSOS DE IMPOSTOS4':
    ApuracaoDespesasLimiteMinimoConstitucionalEstadualTipos23.RESTOS_PAGAR_DISPONIBILIDADE_FINANCEIRA_RECURSOS_IMPOSTOS,
  '26 (-) CANCELAMENTO, NO EXERCÍCIO, DE RESTOS A PAGAR INSCRITOS COM DISPONIBILIDADE FINANCEIRA DE RECURSOS DE IMPOSTOS VINCULADOS AO ENSINO = (L29.1(af) + L29.2(af))':
    ApuracaoDespesasLimiteMinimoConstitucionalEstadualTipos23.CANCELAMENTO_RESTOS_PAGAR_RECURSOS_IMPOSTOS_VINCULADOS_ENSINO,
  '27- TOTAL DAS DESPESAS PARA FINS DE LIMITE ((21 + 22 + 24) - (23 + 25 + 26))':
    ApuracaoDespesasLimiteMinimoConstitucionalEstadualTipos23.TOTAL_DESPESAS_PARA_FINS_LIMITE,
};

export const mapeamentoApuracaoLimiteMinimoConstitucionalEstadual23: {
  [key: string]: ApuracaoLimiteMinimoConstitucionalEstadualTipos23;
} = {
  '28- APLICAÇÃO EM MDE SOBRE A RECEITA LÍQUIDA DE IMPOSTOS':
    ApuracaoLimiteMinimoConstitucionalEstadualTipos23.APLICACAO_EM_MDE_SOBRE_RECEITA_LIQUIDA_DE_IMPOSTOS,
};

export const mapeamentoRestosAPagarParaCumprimentoDoLimiteEstadual23: {
  [key: string]: RestosAPagarParaCumprimentoDoLimiteEstadualTipos23;
} = {
  '29- RESTOS A PAGAR DE DESPESAS COM MDE':
    RestosAPagarParaCumprimentoDoLimiteEstadualTipos23.RESTOS_A_PAGAR_DESPESAS_MDE,
  '29.1 - Executadas com Recursos de Impostos e Transferências de Impostos':
    RestosAPagarParaCumprimentoDoLimiteEstadualTipos23.EXECUTADAS_RECURSOS_IMPOSTOS_TRANSFERENCIAS_IMPOSTOS,
  '29.2 - Executadas com Recursos do FUNDEB - Impostos':
    RestosAPagarParaCumprimentoDoLimiteEstadualTipos23.EXECUTADAS_RECURSOS_FUNDEB_IMPOSTOS,
  '29.3 - Executadas com Recursos do FUNDEB - Complementação da União (VAAT + VAAF + VAAR)':
    RestosAPagarParaCumprimentoDoLimiteEstadualTipos23.EXECUTADAS_RECURSOS_FUNDEB_COMPLEMENTACAO_UNIAO,
};
export const mapeamentoControleDisponibilidadeFinanceiraEstadual23: {
  [key: string]: ControleDisponibilidadeFinanceiraEstadualTipos23;
} = {
  '33- DISPONIBILIDADE FINANCEIRA EM 31 DE DEZEMBRO DE 2022':
    ControleDisponibilidadeFinanceiraEstadualTipos23.DISPONIBILIDADE_FINANCEIRA_EM_31_DE_DEZEMBRO_ANO_ANTERIOR,
  '34- (+) INGRESSO DE RECURSOS ATÉ O BIMESTRE (orçamentário)':
    ControleDisponibilidadeFinanceiraEstadualTipos23.INGRESSO_RECURSOS_ATE_BIMESTRE,
  '35- (-) PAGAMENTOS EFETUADOS ATÉ O BIMESTRE (orçamentário e restos a pagar)':
    ControleDisponibilidadeFinanceiraEstadualTipos23.PAGAMENTOS_EFETUADOS_ATE_BIMESTRE,
  '36- (=) DISPONIBILIDADE FINANCEIRA ATÉ O BIMESTRE':
    ControleDisponibilidadeFinanceiraEstadualTipos23.DISPONIBILIDADE_FINANCEIRA_ATE_BIMESTRE,
  '37- (+) AJUSTES POSITIVOS ( RETENÇÕES E OUTROS VALORES EXTRAORÇAMENTÁRIOS)':
    ControleDisponibilidadeFinanceiraEstadualTipos23.AJUSTES_POSITIVOS,
  '38- (-) AJUSTES NEGATIVOS (OUTROS VALORES EXTRAORÇAMENTÁRIOS)':
    ControleDisponibilidadeFinanceiraEstadualTipos23.AJUSTES_NEGATIVOS,
  '39- (=) SALDO FINANCEIRO CONCILIADO (Saldo Bancário)':
    ControleDisponibilidadeFinanceiraEstadualTipos23.SALDO_FINANCEIRO_CONCILIADO,
};

export const mapeamentoEmendaConstitucionalExclusivoSiopeEstadual23: {
  [key: string]: EmendaConstitucionalExclusivoSiopeEstadualTipos23;
} = {
  '40 - DIFERENÇA ENTRE O VALOR EXIGIDO E O APLICADO EM 2020':
    EmendaConstitucionalExclusivoSiopeEstadualTipos23.DIFERENCA_ENTRE_VALOR_EXIGIDO_E_APLICADO_2020,
  '41 - DIFERENÇA ENTRE O VALOR EXIGIDO E O APLICADO EM 2021':
    EmendaConstitucionalExclusivoSiopeEstadualTipos23.DIFERENCA_ENTRE_VALOR_EXIGIDO_E_APLICADO_2021,
  '42 - DIFERENÇA A MENOR ENTRE O VALOR APLICADO E O EXIGIDO EM 2020 E 2021':
    EmendaConstitucionalExclusivoSiopeEstadualTipos23.DIFERENCA_A_MENOR_ENTRE_VALOR_APLICADO_E_EXIGIDO_2020_2021,
  '43 - VALOR COMPLEMENTADO NA APLICAÇÃO EM MDE EM 2022':
    EmendaConstitucionalExclusivoSiopeEstadualTipos23.VALOR_COMPLEMENTADO_APLICACAO_MDE_2022,
  '44 - VALOR NÃO COMPLEMENTADO DO TOTAL NÃO APLICADO EM MDE EM 2020 E 2021':
    EmendaConstitucionalExclusivoSiopeEstadualTipos23.VALOR_NAO_COMPLEMENTADO_TOTAL_NAO_APLICADO_MDE_2020_2021,
};
