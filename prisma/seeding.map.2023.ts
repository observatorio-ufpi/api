import {
  ApuracaoDespesasLimiteMinimoConstitucionalTipos23,
  ApuracaoLimiteMinimoConstitucionalTipos23,
  ControleDisponibilidadeFinanceiraEConciliacaoBancariaTipos23,
  DespesasCusteadasFundebExercicioTipos23,
  EmendaConstitucionalExclusivoSiopeTipos23,
  IndicadorArt25AplicacaoSuperavitTipos23,
  IndicadorArt25Maximo10PorCentoDeSuperavitTipos23,
  IndicadoresArt212Tipos23,
  ItemDespesaTipos23,
  ItemReceitaTipos23,
  RecursosRecebidosNaoUtilizadosTipos23,
  RestosAPagarParaCumprimentoDoLimiteTipos23,
} from '@prisma/client';

export const mapeamentoReceitas23: {
  [key: string]: ItemReceitaTipos23;
} = {
  '1- RECEITA DE IMPOSTOS': ItemReceitaTipos23.RECEITA_DE_IMPOSTOS,
  '1.1- Receita Resultante do Imposto sobre a Propriedade Predial e Territorial Urbana IPTU':
    ItemReceitaTipos23.RECEITA_RESULTANTE_DO_IPTU,
  '1.2- Receita Resultante do Imposto sobre Transmissão Inter Vivos – ITBI':
    ItemReceitaTipos23.RECEITA_RESULTANTE_DO_ITBI,
  '1.3- Receita Resultante do Imposto sobre Serviços de Qualquer Natureza – ISS':
    ItemReceitaTipos23.RECEITA_RESULTANTE_DO_ISS,
  '1.4- Receita Resultante do Imposto de Renda Retido na Fonte – IRRF':
    ItemReceitaTipos23.RECEITA_RESULTANTE_DO_IRRF,
  '2- RECEITA DE TRANSFERÊNCIAS CONSTITUCIONAIS E LEGAIS':
    ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS,
  '2.1- Cota-Parte FPE': ItemReceitaTipos23.COTA_PARTE_FPE,
  '2.1.1- Parcela referente à CF, art. 159, I, alínea b':
    ItemReceitaTipos23.PARCELA_REFERENTE_A_CF_ART_159_I_ALINEA_B,
  '2.1.2- Parcela referente à CF, art. 159, I, alíneas d e e':
    ItemReceitaTipos23.PARCELA_REFERENTE_A_CF_ART_159_I_ALINEAS_D_E_E,
  '2.2- Cota-Parte ICMS': ItemReceitaTipos23.COTA_PARTE_ICMS,
  '2.3- Cota-Parte IPI-Exportação':
    ItemReceitaTipos23.COTA_PARTE_IPI_EXPORTACAO,
  '2.4- Cota-Parte ITR': ItemReceitaTipos23.COTA_PARTE_ITR,
  '2.5- Cota-Parte IPVA': ItemReceitaTipos23.COTA_PARTE_IPVA,
  '2.6- Cota-Parte IOF-Ouro': ItemReceitaTipos23.COTA_PARTE_IOF_OURO,
  '2.7- Outras Transferências ou Compensações Financeiras Provenientes de Impostos e Transferências Constitucionais':
    ItemReceitaTipos23.OUTRAS_TRANSFERENCIAS_IMPOSTOS_E_TRANSFERENCIAS_CONSTITUCIONAIS,
  '3- TOTAL DA RECEITA RESULTANTE DE IMPOSTOS (1 + 2)':
    ItemReceitaTipos23.TOTAL_DA_RECEITA_RESULTANTE_DE_IMPOSTOS,
  '4- TOTAL DESTINADO AO FUNDEB - equivalente a 20% DE ((2.1.1) + (2.2) + (2.3) + (2.4) + (2.5) + (2.7))1':
    ItemReceitaTipos23.TOTAL_DESTINADO_AO_FUNDEB,
  '5- VALOR MÍNIMO A SER APLICADO ALÉM DO VALOR DESTINADO AO FUNDEB - 5% DE ((2.1.1) + (2.2) + (2.3) + (2.4) + (2.5) + (2.7)) + 25% DE ((1.1) + (1.2) + (1.3) + (1.4) + (2.1.2) + (2.6))':
    ItemReceitaTipos23.VALOR_MINIMO_A_SER_APLICADO_ALEM_DO_VALOR_DESTINADO_AO_FUNDEB,
  '6- TOTAL DAS RECEITAS DO FUNDEB RECEBIDAS':
    ItemReceitaTipos23.TOTAL_DAS_RECEITAS_DO_FUNDEB_RECEBIDAS,
  '6.1- FUNDEB - Impostos e Transferências de Impostos':
    ItemReceitaTipos23.FUNDEB_IMPOSTOS_E_TRANSFERENCIAS_DE_IMPOSTOS,
  '6.1.1- Principal': ItemReceitaTipos23.FUNDEB_PRINCIPAL,
  '6.1.2- Rendimentos de Aplicação Financeira':
    ItemReceitaTipos23.FUNDEB_RENDIMENTOS_DE_APLICACAO_FINANCEIRA,
  '6.1.3- Ressarcimento de recursos do Fundeb':
    ItemReceitaTipos23.FUNDEB_RESSARCIMENTO_DE_RECURSOS_DO_FUNDEB,
  '6.2- FUNDEB - Complementação da União - VAAF':
    ItemReceitaTipos23.FUNDEB_COMPLEMENTACAO_DA_UNIAO_VAAF,
  '6.2.1- Principal': ItemReceitaTipos23.FUNDEB_VAAF_PRINCIPAL,
  '6.2.2- Rendimentos de Aplicação Financeira':
    ItemReceitaTipos23.FUNDEB_VAAF_RENDIMENTOS_APLICACAO_FINANCEIRA,
  '6.2.3- Ressarcimento de recursos do Fundeb':
    ItemReceitaTipos23.FUNDEB__VAAF_RESSARCIMENTO_FUNDEB,
  '6.3- FUNDEB - Complementação da União - VAAT':
    ItemReceitaTipos23.FUNDEB_COMPLEMENTACAO_DA_UNIAO_VAAT,
  '6.3.1- Principal': ItemReceitaTipos23.FUNDEB_VAAT_PRINCIPAL,
  '6.3.2- Rendimentos de Aplicação Financeira':
    ItemReceitaTipos23.FUNDEB_VAAT_RENDIMENTOS_APLICACAO_FINANCEIRA,
  '6.3.3- Ressarcimento de recursos do Fundeb':
    ItemReceitaTipos23.FUNDEB_VAAT_RESSARCIMENTO_FUNDEB,
  '6.4- FUNDEB - Complementação da União - VAAR':
    ItemReceitaTipos23.FUNDEB_COMPLEMENTACAO_DA_UNIAO_VAAR,
  '6.4.1- Principal': ItemReceitaTipos23.FUNDEB_VAAR_PRINCIPAL,
  '6.4.2- Rendimento de Aplicação Financeira':
    ItemReceitaTipos23.FUNDEB_VAAR_RENDIMENTO_APLICACAO_FINANCEIRA,
  '6.4.3- Ressarcimento de recursos do Fundeb':
    ItemReceitaTipos23.FUNDEB_VAAR_RESSARCIMENTO_FUNDEB,
  '7- RESULTADO LÍQUIDO DAS TRANSFERÊNCIAS DO FUNDEB (6.1.1 – 4)':
    ItemReceitaTipos23.RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB,
  '31- TOTAL DAS RECEITAS ADICIONAIS PARA FINANCIAMENTO DO ENSINO':
    ItemReceitaTipos23.TOTAL_DAS_RECEITAS_ADICIONAIS_PARA_FINANCIAMENTO_DO_ENSINO,
  '31.1- RECEITA DE TRANSFERÊNCIAS DO FNDE (INCLUINDO RENDIMENTOS DE APLICAÇÃO FINANCEIRA)':
    ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE,
  '31.1.1- Salário-Educação':
    ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_SALARIO_EDUCACAO,
  '31.1.2- PDDE': ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_PDDE,
  '31.1.3- PNAE': ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_PNAE,
  '31.1.4- PNATE': ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_PNATE,
  '31.1.5- Outras Transferências do FNDE':
    ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DO_FNDE_OUTRAS_TRANSFERENCIAS,
  '31.2- RECEITA DE TRANSFERÊNCIAS DE CONVÊNIOS':
    ItemReceitaTipos23.RECEITA_DE_TRANSFERENCIAS_DE_CONVENIOS,
  '31.3- RECEITA DE ROYALTIES DESTINADOS À EDUCAÇÃO':
    ItemReceitaTipos23.RECEITA_DE_ROYALTIES_DESTINADOS_A_EDUCACAO,
  '31.4- RECEITA DE OPERAÇÕES DE CRÉDITO VINCULADAS À EDUCAÇÃO':
    ItemReceitaTipos23.RECEITA_DE_OPERACOES_DE_CREDITO_VINCULADAS_A_EDUCACAO,
  '31.5- OUTRAS RECEITAS PARA FINANCIAMENTO DO ENSINO':
    ItemReceitaTipos23.OUTRAS_RECEITAS_PARA_FINANCIAMENTO_DO_ENSINO,
};
export const mapeamentoDespesas23: {
  [key: string]: ItemDespesaTipos23;
} = {
  '10- TOTAL DAS DESPESAS COM RECURSOS DO FUNDEB':
    ItemDespesaTipos23.TOTAL_DAS_DESPESAS_COM_RECURSOS_DO_FUNDEB,
  '10.1- PROFISSIONAIS DA EDUCAÇÃO BÁSICA':
    ItemDespesaTipos23.PROFISSIONAIS_DA_EDUCACAO_BASICA,
  '10.1.1 - Educação Infantil':
    ItemDespesaTipos23.PROFISSIONAIS_DA_EDUCACAO_BASICA_EDUCACAO_INFANTIL,
  '10.1.2- Ensino Fundamental':
    ItemDespesaTipos23.PROFISSIONAIS_DA_EDUCACAO_BASICA_ENSINO_FUNDAMENTAL,
  '10.1.3- Educação de Jovens e Adultos':
    ItemDespesaTipos23.PROFISSIONAIS_DA_EDUCACAO_BASICA_EDUCACAO_DE_JOVENS_ADULTOS,
  '10.1.4- Educação Especial':
    ItemDespesaTipos23.PROFISSIONAIS_DA_EDUCACAO_BASICA_EDUCACAO_ESPECIAL,
  '10.1.5- Administração Geral':
    ItemDespesaTipos23.PROFISSIONAIS_DA_EDUCACAO_BASICA_ADMINISTRACAO_GERAL,
  '10.2- OUTRAS DESPESAS': ItemDespesaTipos23.OUTRAS_DESPESAS,
  '10.2.1- Educação Infantil':
    ItemDespesaTipos23.OUTRAS_DESPESAS_EDUCACAO_INFANTIL,
  '10.2.2- Ensino Fundamental':
    ItemDespesaTipos23.OUTRAS_DESPESAS_ENSINO_FUNDAMENTAL,
  '10.2.3- Educação de Jovens e Adultos':
    ItemDespesaTipos23.OUTRAS_DESPESAS_EDUCACAO_DE_JOVENS_E_ADULTOS,
  '10.2.4- Educação Especial':
    ItemDespesaTipos23.OUTRAS_DESPESAS_EDUCACAO_ESPECIAL,
  '10.2.5- Administração Geral':
    ItemDespesaTipos23.OUTRAS_DESPESAS_ADMINISTRACAO_GERAL,
  '10.2.6- Transporte (Escolar)':
    ItemDespesaTipos23.OUTRAS_DESPESAS_TRANSPORTE_ESCOLAR,
  '10.2.7- Outras': ItemDespesaTipos23.OUTRAS_DESPESAS_OUTRAS,
  '20- TOTAL DAS DESPESAS COM AÇÕES TÍPICAS DE MDE CUSTEADAS COM RECEITAS DE IMPOSTOS':
    ItemDespesaTipos23.TOTAL_DESPESAS_MDE_CUSTEADAS_COM_RECEITAS_IMPOSTOS,
  '20.1- Educação Infantil':
    ItemDespesaTipos23.MDE_COM_RECEITAS_IMPOSTOS_EDUCACAO_INFANTIL,
  '20.2- Ensino Fundamental':
    ItemDespesaTipos23.MDE_COM_RECEITAS_IMPOSTOS_ENSINO_FUNDAMENTAL,
  '20.3- Educação de Jovens e Adultos':
    ItemDespesaTipos23.MDE_COM_RECEITAS_IMPOSTOS_EDUCACAO_DE_JOVENS_E_ADULTOS,
  '20.4- Educação Especial':
    ItemDespesaTipos23.MDE_COM_RECEITAS_IMPOSTOS_EDUCACAO_ESPECIAL,
  '20.5- Administração Geral':
    ItemDespesaTipos23.MDE_COM_RECEITAS_IMPOSTOS_ADMINISTRACAO_GERAL,
  '20.6- Transporte (Escolar)':
    ItemDespesaTipos23.MDE_COM_RECEITAS_IMPOSTOS_TRANSPORTE_ESCOLAR,
  '20.7- Outras': ItemDespesaTipos23.MDE_COM_RECEITAS_IMPOSTOS_OUTRAS,
  '21- TOTAL DAS DESPESAS COM AÇÕES TÍPICAS DE MDE CUSTEADAS COM RECEITAS DE IMPOSTOS E FUNDEB':
    ItemDespesaTipos23.TOTAL_DESPESAS_MDE_CUSTEADAS_COM_RECEITAS_IMPOSTOS_E_FUNDEB,
  '21.1- EDUCAÇÃO INFANTIL':
    ItemDespesaTipos23.MDE_COM_RECEITAS_IMPOSTOS_FUNDEB_EDUCACAO_INFANTIL,
  '21.1.1- Creche':
    ItemDespesaTipos23.MDE_COM_RECEITAS_IMPOSTOS_FUNDEB_EDUCACAO_INFANTIL_CRECHE,
  '21.1.2- Pré-escola':
    ItemDespesaTipos23.MDE_COM_RECEITAS_IMPOSTOS_FUNDEB_EDUCACAO_INFANTIL_PRE_ESCOLA,
  '21.2- ENSINO FUNDAMENTAL':
    ItemDespesaTipos23.MDE_COM_RECEITAS_IMPOSTOS_FUNDEB_ENSINO_FUNDAMENTAL,
  '32- TOTAL DAS OUTRAS DESPESAS COM EDUCAÇÃO':
    ItemDespesaTipos23.TOTAL_OUTRAS_DESPESAS_COM_EDUCACAO,
  '32.1 EDUCAÇÃO INFANTIL':
    ItemDespesaTipos23.TOTAL_OUTRAS_DESPESAS_COM_EDUCACAO_EDUCACAO_INFANTIL,
  '32.2- ENSINO FUNDAMENTAL':
    ItemDespesaTipos23.TOTAL_OUTRAS_DESPESAS_COM_EDUCACAO_ENSINO_FUNDAMENTAL,
  '32.3- ENSINO MÉDIO':
    ItemDespesaTipos23.TOTAL_OUTRAS_DESPESAS_COM_EDUCACAO_ENSINO_MEDIO,
  '32.4- ENSINO SUPERIOR':
    ItemDespesaTipos23.TOTAL_OUTRAS_DESPESAS_COM_EDUCACAO_ENSINO_SUPERIOR,
  '32.5- ENSINO PROFISSIONAL':
    ItemDespesaTipos23.TOTAL_OUTRAS_DESPESAS_COM_EDUCACAO_ENSINO_PROFISSIONAL,
  '32.6- EDUCAÇÃO DE JOVENS E ADULTOS':
    ItemDespesaTipos23.TOTAL_OUTRAS_DESPESAS_COM_EDUCACAO_DE_JOVENS_E_ADULTOS,
  '32.7- EDUCAÇÃO ESPECIAL':
    ItemDespesaTipos23.TOTAL_OUTRAS_DESPESAS_COM_EDUCACAO_ESPECIAL,
  '32.8- OUTRAS': ItemDespesaTipos23.TOTAL_OUTRAS_DESPESAS_COM_EDUCACAO_OUTRAS,
  '33- TOTAL GERAL DAS DESPESAS COM EDUCAÇÃO (10 + 20 + 32)':
    ItemDespesaTipos23.TOTAL_GERAL_DAS_DESPESAS_COM_EDUCACAO,
  '33.1- Despesas Correntes': ItemDespesaTipos23.DESPESAS_CORRENTES,
  '33.1.1- Pessoal Ativo': ItemDespesaTipos23.DESPESAS_CORRENTES_PESSOAL_ATIVO,
  '33.1.2- Pessoal Inativo':
    ItemDespesaTipos23.DESPESAS_CORRENTES_PESSOAL_INATIVO,
  '33.1.3-Transferências às instituições comunitárias, confessionais ou filantrópicas sem fins lucrativos':
    ItemDespesaTipos23.DESPESAS_CORRENTES_TRANSFERENCIAS_INSTITUICOES_COMUNITARIAS,
  '33.1.4- Outras Despesas Correntes':
    ItemDespesaTipos23.OUTRAS_DESPESAS_CORRENTES,
  '33.2- Despesas de Capital': ItemDespesaTipos23.DESPESAS_DE_CAPITAL,
  '33.2.1- Transferências às instituições comunitárias, confessionais ou filantrópicas sem fins lucrativos':
    ItemDespesaTipos23.DESPESAS_DE_CAPITAL_TRANSFERENCIAS_INSTITUICOES_COMUNITARIAS,
  '33.2.2- Outras Despesas Capital': ItemDespesaTipos23.OUTRAS_DESPESAS_CAPITAL,
};
export const mapeamentoRecursosRecebidosNaoUtilizados23: {
  [key: string]: RecursosRecebidosNaoUtilizadosTipos23;
} = {
  '8- TOTAL DOS RECURSOS DE SUPERÁVIT':
    RecursosRecebidosNaoUtilizadosTipos23.TOTAL_RECURSOS_SUPERAVIT,
  '8.1- SUPERÁVIT DO EXERCÍCIO IMEDIATAMENTE ANTERIOR':
    RecursosRecebidosNaoUtilizadosTipos23.SUPERAVIT_EXERCICIO_ANTERIOR,
  '8.2- SUPERÁVIT RESIDUAL DE OUTROS EXERCÍCIOS':
    RecursosRecebidosNaoUtilizadosTipos23.SUPERAVIT_RESIDUAL_OUTROS_EXERCICIOS,
  '9- TOTAL DOS RECURSOS DO FUNDEB DISPONÍVEIS PARA UTILIZAÇÃO (6 +8)':
    RecursosRecebidosNaoUtilizadosTipos23.TOTAL_RECURSOS_FUNDEB_DISPONIVEIS,
};
export const mapeamentoDespesasCusteadasFundebExercicio23: {
  [key: string]: DespesasCusteadasFundebExercicioTipos23;
} = {
  '11- TOTAL DAS DESPESAS CUSTEADAS COM RECURSOS DO FUNDEB RECEBIDAS NO EXERCÍCIO':
    DespesasCusteadasFundebExercicioTipos23.TOTAL_DESPESAS_FUNDEB_RECEBIDAS,
  '11.1- Total das Despesas custeadas com FUNDEB Impostos e Transferências de Impostos':
    DespesasCusteadasFundebExercicioTipos23.TOTAL_DESPESAS_CUSTEADAS_FUNDEB_IMPOSTOS_TRANSFERENCIAS,
  '11.2- Total das Despesas custeadas com FUNDEB Complementação da União - VAAF':
    DespesasCusteadasFundebExercicioTipos23.TOTAL_DESPESAS_CUSTEADAS_FUNDEB_COMPLEMENTACAO_UNIAO_VAAF,
  '11.3- Total das Despesas custeadas com FUNDEB Complementação da União - VAAT':
    DespesasCusteadasFundebExercicioTipos23.TOTAL_DESPESAS_CUSTEADAS_FUNDEB_COMPLEMENTACAO_UNIAO_VAAT,
  '11.4- Total das Despesas custeadas com FUNDEB Complementação da União - VAAR':
    DespesasCusteadasFundebExercicioTipos23.TOTAL_DESPESAS_CUSTEADAS_FUNDEB_COMPLEMENTACAO_UNIAO_VAAR,
  '12- TOTAL DAS DESPESAS DO FUNDEB COM PROFISSIONAIS DA EDUCAÇÃO BÁSICA':
    DespesasCusteadasFundebExercicioTipos23.TOTAL_DESPESAS_FUNDEB_PROFISSIONAIS_EDUCACAO_BASICA,
  '13- TOTAL DAS DESPESAS CUSTEADAS COM FUNDEB COMPLEMENTAÇÃO DA UNIÃO - VAAT APLICADAS NA EDUCAÇÃO INFANTIL':
    DespesasCusteadasFundebExercicioTipos23.TOTAL_DESPESAS_CUSTEADAS_FUNDEB_VAAT_EDUCACAO_INFANTIL,
  '14- TOTAL DAS DESPESAS CUSTEADAS COM FUNDEB COMPLEMENTAÇÃO DA UNIÃO - VAAT APLICADAS EM DESPESA DE CAPITAL':
    DespesasCusteadasFundebExercicioTipos23.TOTAL_DESPESAS_CUSTEADAS_FUNDEB_VAAT_DESPESA_CAPITAL,
};
export const mapeamentoIndicadores23Art212: {
  [key: string]: IndicadoresArt212Tipos23;
} = {
  '15- MÍNIMO DE 70% DO FUNDEB NA REMUNERAÇÃO DOS PROFISSIONAIS DA EDUCAÇÃO BÁSICA':
    IndicadoresArt212Tipos23.MINIMO_70_PORCENTO_FUNDEB_PROFISSIONAIS_EDUCACAO_BASICA,
  '16 - PROPORÇÃO DE 50% DA COMPLEMENTAÇÃO DA UNIÃO AO FUNDEB - VAAT NA EDUCAÇÃO INFANTIL(INDICADOR IEI)':
    IndicadoresArt212Tipos23.PROPORCAO_50_PORCENTO_FUNDEB_VAAT_EDUCACAO_INFANTIL,
  '17- MÍNIMO DE 15% DA COMPLEMENTAÇÃO DA UNIÃO AO FUNDEB - VAAT EM DESPESAS DE CAPITAL':
    IndicadoresArt212Tipos23.MINIMO_15_PORCENTO_FUNDEB_VAAT_DESPESAS_CAPITAL,
};
export const mapeamentoIndicadorArt25AplicacaoSuperavit23: {
  [key: string]: IndicadorArt25AplicacaoSuperavitTipos23;
} = {
  '19- TOTAL DAS DESPESAS CUSTEADAS COM SUPERÁVIT DO FUNDEB':
    IndicadorArt25AplicacaoSuperavitTipos23.TOTAL_DESPESAS_CUSTEADAS_COM_SUPERAVIT_FUNDEB,
  '19.1- Total das Despesas custeadas com FUNDEB - Impostos e Transferências de Impostos':
    IndicadorArt25AplicacaoSuperavitTipos23.TOTAL_DESPESAS_CUSTEADAS_FUNDEB_IMPOSTOS_TRANSFERENCIAS,
  '19.2- Total das Despesas custeadas com FUNDEB - Complementação da União (VAAF + VAAT + VAAR)':
    IndicadorArt25AplicacaoSuperavitTipos23.TOTAL_DESPESAS_CUSTEADAS_FUNDEB_COMPLEMENTACAO_UNIAO,
};
export const mapeamentoIndicadorArt25Maximo10PorCentoDeSuperavit23: {
  [key: string]: IndicadorArt25Maximo10PorCentoDeSuperavitTipos23;
} = {
  '18- TOTAL DA RECEITA RECEBIDA E NÃO APLICADA NO EXERCÍCIO':
    IndicadorArt25Maximo10PorCentoDeSuperavitTipos23.TOTAL_RECEITA_RECEBIDA_NAO_APLICADA_EXERCICIO,
};
export const mapeamentoApuracaoDespesasLimiteMinimoConstitucional23: {
  [key: string]: ApuracaoDespesasLimiteMinimoConstitucionalTipos23;
} = {
  '22- TOTAL DAS DESPESAS DE MDE CUSTEADAS COM RECURSOS DE IMPOSTOS = L20(d ou e)':
    ApuracaoDespesasLimiteMinimoConstitucionalTipos23.TOTAL_DESPESAS_MDE_CUSTEADAS_RECURSOS_IMPOSTOS,
  '23- TOTAL DAS RECEITAS TRANSFERIDAS AO FUNDEB = (L4)':
    ApuracaoDespesasLimiteMinimoConstitucionalTipos23.TOTAL_RECEITAS_TRANSFERIDAS_FUNDEB,
  '24- (-) RECEITAS DO FUNDEB NÃO UTILIZADAS NO EXERCÍCIO, EM VALOR SUPERIOR A 10% = L18(q)':
    ApuracaoDespesasLimiteMinimoConstitucionalTipos23.RECEITAS_FUNDEB_NAO_UTILIZADAS_EXERCICIO_SUPERIOR_10_PORCENTO,
  '25- (+) VALOR APLICADO ATÉ O PRIMEIRO QUADRIMESTRE QUE INTEGRARÁ O LIMITE CONSTITUCIONAL = L19.1(x)':
    ApuracaoDespesasLimiteMinimoConstitucionalTipos23.VALOR_APLICADO_PRIMEIRO_QUADRIMESTRE_LIMITE_CONSTITUCIONAL,
  '26- (-) RESTOS A PAGAR NÃO PROCESSADOS INSCRITOS NO EXERCÍCIO SEM DISPONIBILIDADE FINANCEIRA DE RECURSOS DE IMPOSTOS4':
    ApuracaoDespesasLimiteMinimoConstitucionalTipos23.RESTOS_PAGAR_DISPONIBILIDADE_FINANCEIRA_RECURSOS_IMPOSTOS,
  '27- (-) CANCELAMENTO, NO EXERCÍCIO, DE RESTOS A PAGAR INSCRITOS COM DISPONIBILIDADE FINANCEIRA DE RECURSOS DE IMPOSTOS VINCULADOS AO ENSINO = (L30.1(af) + L30.2(af))':
    ApuracaoDespesasLimiteMinimoConstitucionalTipos23.CANCELAMENTO_RESTOS_PAGAR_RECURSOS_IMPOSTOS_VINCULADOS_ENSINO,
  '28- TOTAL DAS DESPESAS PARA FINS DE LIMITE (22 + 23 + 25) - (24 + 26 + 27)':
    ApuracaoDespesasLimiteMinimoConstitucionalTipos23.TOTAL_DESPESAS_PARA_FINS_LIMITE,
};
export const mapeamentoApuracaoLimiteMinimoConstitucional23: {
  [key: string]: ApuracaoLimiteMinimoConstitucionalTipos23;
} = {
  '29- APLICAÇÃO EM MDE SOBRE A RECEITA LÍQUIDA DE IMPOSTOS':
    ApuracaoLimiteMinimoConstitucionalTipos23.APLICACAO_EM_MDE_SOBRE_RECEITA_LIQUIDA_DE_IMPOSTOS,
};
export const mapeamentoRestosAPagarParaCumprimentoDoLimite23: {
  [key: string]: RestosAPagarParaCumprimentoDoLimiteTipos23;
} = {
  '30- RESTOS A PAGAR DE DESPESAS COM MDE':
    RestosAPagarParaCumprimentoDoLimiteTipos23.RESTOS_A_PAGAR_DESPESAS_MDE,
  '30.1 - Executadas com Recursos de Impostos e Transferências de Impostos':
    RestosAPagarParaCumprimentoDoLimiteTipos23.EXECUTADAS_RECURSOS_IMPOSTOS_TRANSFERENCIAS_IMPOSTOS,
  '30.2 - Executadas com Recursos do FUNDEB - Impostos':
    RestosAPagarParaCumprimentoDoLimiteTipos23.EXECUTADAS_RECURSOS_FUNDEB_IMPOSTOS,
  '30.3 - Executadas com Recursos do FUNDEB - Complementação da União (VAAT + VAAF + VAAR)':
    RestosAPagarParaCumprimentoDoLimiteTipos23.EXECUTADAS_RECURSOS_FUNDEB_COMPLEMENTACAO_UNIAO,
};
export const mapeamentoControleDisponibilidadeFinanceiraEConciliacaoBancaria23: {
  [key: string]: ControleDisponibilidadeFinanceiraEConciliacaoBancariaTipos23;
} = {
  '34- DISPONIBILIDADE FINANCEIRA EM 31 DE DEZEMBRO DE 2022':
    ControleDisponibilidadeFinanceiraEConciliacaoBancariaTipos23.DISPONIBILIDADE_FINANCEIRA_EM_31_DE_DEZEMBRO_ANO_ANTERIOR,
  '35- (+) INGRESSO DE RECURSOS ATÉ O BIMESTRE (orçamentário)':
    ControleDisponibilidadeFinanceiraEConciliacaoBancariaTipos23.INGRESSO_RECURSOS_ATE_BIMESTRE,
  '36- (-) PAGAMENTOS EFETUADOS ATÉ O BIMESTRE (orçamentário e restos a pagar)':
    ControleDisponibilidadeFinanceiraEConciliacaoBancariaTipos23.PAGAMENTOS_EFETUADOS_ATE_BIMESTRE,
  '37- (=) DISPONIBILIDADE FINANCEIRA ATÉ O BIMESTRE':
    ControleDisponibilidadeFinanceiraEConciliacaoBancariaTipos23.DISPONIBILIDADE_FINANCEIRA_ATE_BIMESTRE,
  '38- (+) AJUSTES POSITIVOS ( RETENÇÕES E OUTROS VALORES EXTRAORÇAMENTÁRIOS)':
    ControleDisponibilidadeFinanceiraEConciliacaoBancariaTipos23.AJUSTES_POSITIVOS,
  '39- (-) AJUSTES NEGATIVOS (OUTROS VALORES EXTRAORÇAMENTÁRIOS)':
    ControleDisponibilidadeFinanceiraEConciliacaoBancariaTipos23.AJUSTES_NEGATIVOS,
  '40- (=) SALDO FINANCEIRO CONCILIADO (Saldo Bancário)':
    ControleDisponibilidadeFinanceiraEConciliacaoBancariaTipos23.SALDO_FINANCEIRO_CONCILIADO,
};
export const mapeamentoEmendaConstitucionalExclusivoSiope23: {
  [key: string]: EmendaConstitucionalExclusivoSiopeTipos23;
} = {
  '41 - DIFERENÇA ENTRE O VALOR EXIGIDO E O APLICADO EM 2020':
    EmendaConstitucionalExclusivoSiopeTipos23.DIFERENCA_ENTRE_VALOR_EXIGIDO_E_APLICADO_2020,
  '42 - DIFERENÇA ENTRE O VALOR EXIGIDO E O APLICADO EM 2021':
    EmendaConstitucionalExclusivoSiopeTipos23.DIFERENCA_ENTRE_VALOR_EXIGIDO_E_APLICADO_2021,
  '43 - DIFERENÇA A MENOR ENTRE O VALOR APLICADO E O EXIGIDO EM 2020 E 2021':
    EmendaConstitucionalExclusivoSiopeTipos23.DIFERENCA_A_MENOR_ENTRE_VALOR_APLICADO_E_EXIGIDO_2020_2021,
  '44 - VALOR COMPLEMENTADO NA APLICAÇÃO EM MDE EM 2022':
    EmendaConstitucionalExclusivoSiopeTipos23.VALOR_COMPLEMENTADO_APLICACAO_MDE_2022,
  '45 - VALOR NÃO COMPLEMENTADO DO TOTAL NÃO APLICADO EM MDE EM 2020 E 2021':
    EmendaConstitucionalExclusivoSiopeTipos23.VALOR_NAO_COMPLEMENTADO_TOTAL_NAO_APLICADO_MDE_2020_2021,
};
