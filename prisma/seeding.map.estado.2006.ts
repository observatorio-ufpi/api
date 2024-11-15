import {
  CompensacaoRestosAPagarEstadoTipo06,
  ControleRestosAPagarVinculadosEducacaoEstadoTipo06,
  DeducoesDaDespesaEstadoTipo06,
  ItemDespesaEstadoTipos06,
  ItemReceitaEstadoTipos06,
  PerdaGanhoTransferenciasFundebEstadoTipo06,
  SaldoFinanceiroFundefEstadoTipo06,
  TabelaCumprimentoLimitesConstitucionaisEstadoTipo06,
} from '@prisma/client';

export const mapeamentoReceitasEstadual06: {
  [key: string]: ItemReceitaEstadoTipos06;
} = {
  'RECEITA RESULTANTE DE IMPOSTOS (I)':
    ItemReceitaEstadoTipos06.RECEITA_RESULTANTE_DE_IMPOSTOS,
  'Receitas de Impostos': ItemReceitaEstadoTipos06.RECEITAS_DE_IMPOSTOS,
  'Receita Resultante do ICMS':
    ItemReceitaEstadoTipos06.RECEITA_RESULTANTE_DO_ICMS,
  ICMS: ItemReceitaEstadoTipos06.ICMS,
  'Dívida Ativa do ICMS': ItemReceitaEstadoTipos06.DIVIDA_ATIVA_DO_ICMS,
  'Multas Juros de Mora e Outros Encargos do ICMS e da Dívida Ativa do ICMS':
    ItemReceitaEstadoTipos06.MULTAS_JUROS_MORA_OUTROS_ENCARGOS_E_DIVIDA_ATIVA_ICMS,
  'Parcela da Receita Resultante do ICMS Destinada à Formação do FUNDEF (II)':
    ItemReceitaEstadoTipos06.PARCELA_RECEITA_RESULTANTE_ICMS_DESTINADA_FUNDEB,
  'Receita Resultante de Outros Impostos':
    ItemReceitaEstadoTipos06.RECEITA_RESULTANTE_DE_OUTROS_IMPOSTOS,
  'ITR (Exclusivo do DF)': ItemReceitaEstadoTipos06.ITR,
  'IPTU (Exclusivo do DF)': ItemReceitaEstadoTipos06.IPTU,
  ITCD: ItemReceitaEstadoTipos06.ITCD,
  IPVA: ItemReceitaEstadoTipos06.IPVA,
  IRRF: ItemReceitaEstadoTipos06.IRRF,
  'ITBI (Exclusivo do DF)': ItemReceitaEstadoTipos06.ITBI,
  'ISS (Exclusivo do DF)': ItemReceitaEstadoTipos06.ISS,
  'ISS/ICMS Simples (Exclusivo do DF)':
    ItemReceitaEstadoTipos06.ISS_ICMS_SIMPLES,
  'Dívida Ativa do ITCD, IPVA e IRRF':
    ItemReceitaEstadoTipos06.DIVIDA_ATIVA_DO_ITCD_IPVA_IRRF,
  'Multas, Juros de Mora e Outros Encargos do ITCD, IPVA e IRRF e da Dívida Ativa':
    ItemReceitaEstadoTipos06.MULTAS_JUROS_MORA_OUTROS_ENCARGOS_ITCD_IPVA_IRRF,
  'Receitas de Transferências Constitucionais e Legais':
    ItemReceitaEstadoTipos06.RECEITAS_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAL,
  'Cota-Parte FPE (85%)': ItemReceitaEstadoTipos06.COTA_PARTE_FPE_85_PORCENTO,
  'Cota-Parte FPM (Exclusivo do DF) (100%)':
    ItemReceitaEstadoTipos06.COTA_PARTE_FPM_100_PORCENTO,
  'Cota-Parte do ITR (Exclusivo do DF) (100%)':
    ItemReceitaEstadoTipos06.COTA_PARTE_ITR_100_PORCENTO,
  'Transferência Financeira ICMS-Desoneração - LC nº 87/96 (85%)':
    ItemReceitaEstadoTipos06.TRANSFERENCIA_FINANCEIRA_ICMS_DESONERACAO,
  'Cota-Parte IPI-Exportação (85%)':
    ItemReceitaEstadoTipos06.COTA_PARTE_IPI_EXPORTACAO_85_PORCENTO,
  'Parcela das Transferências Destinadas a Formação do FUNDEF (II)':
    ItemReceitaEstadoTipos06.PARCELA_TRANSFERENCIAS_DESTINADAS_A_FORMACAO_DO_FUNDEF,
  'Cota-Parte IOF-Ouro (100%)':
    ItemReceitaEstadoTipos06.COTA_PARTE_IOF_OURO_100_PORCENTO,
  '(-) Transferências Constitucionais':
    ItemReceitaEstadoTipos06.TRANSFERENCIAS_CONSTITUCIONAIS,
  'RECEITAS VINCULADAS AO ENSINO (III)':
    ItemReceitaEstadoTipos06.RECEITAS_VINCULADAS_AO_ENSINO,
  'Transferências Multigovernamentais do FUNDEF (IV)':
    ItemReceitaEstadoTipos06.TRANSFERENCIAS_MULTIGOVERNAMENTAIS_DO_FUNDEF,
  'Transferências de Recursos do FUNDEF (V)':
    ItemReceitaEstadoTipos06.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEF,
  'Complementação da União ao FUNDEF':
    ItemReceitaEstadoTipos06.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEF,
  'Transferências do FNDE': ItemReceitaEstadoTipos06.TRANSFERENCIAS_DO_FNDE,
  'Transferências do Salário-Educação':
    ItemReceitaEstadoTipos06.TRANSFERENCIAS_DO_SALARIO_EDUCACAO,
  'Outras Transferências do FNDE':
    ItemReceitaEstadoTipos06.OUTRAS_TRANSFERENCIAS_DO_FNDE,
  'Transferências de Convênios Destinadas a Programas de Educação':
    ItemReceitaEstadoTipos06.TRANSFERENCIAS_DESTINADAS_A_PROGRAMAS_DE_EDUCACAO,
  'Receita de Operações de Crédito destinada a Educação':
    ItemReceitaEstadoTipos06.RECEITA_DE_OPERACOES_DE_CREDITO_DESTINADAS_A_EDUCACAO,
  'Outras Receitas Destinadas à Educação':
    ItemReceitaEstadoTipos06.OUTRAS_RECEITAS_DESTINADAS_EDUCACAO,
  'TOTAL DAS RECEITAS (VI) = (I + III)':
    ItemReceitaEstadoTipos06.TOTAL_RECEITAS,
};

export const mapeamentoDespesasEstadual06: {
  [key: string]: ItemDespesaEstadoTipos06;
} = {
  'DESPESAS VINCULADAS ÀS RECEITAS RESULTANTES DE IMPOSTOS (VII)':
    ItemDespesaEstadoTipos06.DESPESAS_VINCULADAS_RECEITAS_RESULTANTES_DE_IMPOSTOS,
  'Despesas com Ensino Fundamental (VIII)':
    ItemDespesaEstadoTipos06.DESPESAS_COM_ENSINO_FUNDAMENTAL,
  'Despesas com Ensino Médio':
    ItemDespesaEstadoTipos06.DESPESAS_COM_ENSINO_MEDIO,
  'Outras Despesas com Ensino':
    ItemDespesaEstadoTipos06.OUTRAS_DESPESAS_COM_ENSINO,
  'DESPESAS VINCULADAS AO FUNDEF, NO ENSINO FUNDAMENTAL (IX)':
    ItemDespesaEstadoTipos06.DESPESAS_VINCULADAS_AO_FUNDEF_NO_ENSINO_FUNDAMENTAL,
  'Pagamento dos Profissionais do Magistério do Ensino Fundamental (X)':
    ItemDespesaEstadoTipos06.PAGAMENTO_PROFISSIONAIS_MAGISTERIO_DO_ENSINO_FUNDAMENTAL,
  'Outras Despesas no Ensino Fundamental':
    ItemDespesaEstadoTipos06.OUTRAS_DESPESAS_NO_ENSINO_FUNDAMENTAL,
  'VINCULADAS À CONTRIBUIÇÃO SOCIAL DO SALÁRIO-EDUCAÇÃO':
    ItemDespesaEstadoTipos06.VINCULADAS_A_CONTRIBUICAO_SOCIAL_DO_SALARIO_EDUCACAO,
  'FINANCIADAS COM RECURSOS DE OPERAÇÕES DE CRÉDITO':
    ItemDespesaEstadoTipos06.FINANCIADAS_COM_RECURSOS_DE_OPERACOES_DE_CREDITO,
  'FINANCIADAS COM OUTROS RECURSOS VINCULADOS À EDUCAÇÃO':
    ItemDespesaEstadoTipos06.FINANCIADAS_COM_OUTROS_RECURSOS_VINCULADOS_A_EDUCACAO,
  'TOTAL DAS DESPESAS COM ENSINO (XI)':
    ItemDespesaEstadoTipos06.TOTAL_DAS_DESPESAS_COM_ENSINO,
  'ENSINO FUNDAMENTAL': ItemDespesaEstadoTipos06.ENSINO_FUNDAMENTAL,
  'ENSINO MÉDIO': ItemDespesaEstadoTipos06.ENSINO_MEDIO,
  'ENSINO PROFISSIONAL': ItemDespesaEstadoTipos06.ENSINO_PROFISSIONAL,
  'ENSINO SUPERIOR': ItemDespesaEstadoTipos06.ENSINO_SUPERIOR,
  'EDUCAÇÃO INFANTIL': ItemDespesaEstadoTipos06.EDUCACAO_INFANTIL,
  'EDUCAÇÃO DE JOVENS E ADULTOS':
    ItemDespesaEstadoTipos06.EDUCACAO_DE_JOVENS_E_ADULTOS,
  'EDUCAÇÃO ESPECIAL': ItemDespesaEstadoTipos06.EDUCACAO_ESPECIAL,
  'Outras Subfunções': ItemDespesaEstadoTipos06.OUTRAS_SUBFUNCOES,
  'TOTAL DAS DESPESAS COM ENSINO':
    ItemDespesaEstadoTipos06.TOTAL_DAS_DESPESAS_COM_ENSINO_POR_SUBFUNCAO,
};

export const mapeamentoPerdaGanhoTransferenciasFundebEstadual06: {
  [key: string]: PerdaGanhoTransferenciasFundebEstadoTipo06;
} = {
  'PERDA NAS TRANSFERÊNCIAS DO FUNDEF (XII)':
    PerdaGanhoTransferenciasFundebEstadoTipo06.PERDA_NAS_TRANSFERENCIAS_DO_FUNDEF,
  'GANHO NAS TRANSFERÊNCIAS DO FUNDEF':
    PerdaGanhoTransferenciasFundebEstadoTipo06.GANHO_NAS_TRANSFERENCIAS_DO_FUNDEF,
};

export const mapeamentoDeducoesDaDespesaEstadual06: {
  [key: string]: DeducoesDaDespesaEstadoTipo06;
} = {
  'PARCELA DO GANHO/COMPLEMENTAÇÃO DO FUNDEF APLICADA NO EXERCÍCIO (XIII)':
    DeducoesDaDespesaEstadoTipo06.PARCELA_GANHO_DO_FUNDEF_APLICADA_NO_EXERCICIO,
  'RESTOS A PAGAR INSCRITOS NO EXERCÍCIO, SEM DISPONIBILIDADE FINANCEIRA VINCULADA DE RECURSOS PRÓPRIOS1':
    DeducoesDaDespesaEstadoTipo06.RESTOS_A_PAGAR_INSCRITOS_SEM_DISPONIBILIDADE_FINANCEIRA,
  'Despesas com Ensino Fundamental (XIV)':
    DeducoesDaDespesaEstadoTipo06.DESPESAS_COM_ENSINO_FUNDAMENTAL,
  'Outras Despesas com Ensino':
    DeducoesDaDespesaEstadoTipo06.OUTRAS_DESPESAS_COM_ENSINO,
  'DESPESAS VINCULADAS AO SUPERÁVIT FINANCEIRO DO GANHO/COMPLEMENTAÇÃO DO FUNDEF DO EXERCÍCIO ANTERIOR (XV)':
    DeducoesDaDespesaEstadoTipo06.DESPESAS_VINCULADAS_SUPERAVIT_FINANCEIRO_DO_GANHO_FUNDEF,
  'TOTAL (XVI)': DeducoesDaDespesaEstadoTipo06.TOTAL,
};

export const mapeamentoControleRestosAPagarVinculadosEducacaoEstadual06: {
  [key: string]: ControleRestosAPagarVinculadosEducacaoEstadoTipo06;
} = {
  'RESTOS A PAGAR DE DESPESAS COM MANUTENÇÃO E DESENVOLVIMENTO DO ENSINO':
    ControleRestosAPagarVinculadosEducacaoEstadoTipo06.RESTOS_A_PAGAR_DE_DESPESAS_COM_MANUTENCAO_ENSINO,
  'RESTOS A PAGAR DE DESPESAS COM ENSINO FUNDAMENTAL':
    ControleRestosAPagarVinculadosEducacaoEstadoTipo06.RESTOS_A_PAGAR_DE_DESPESAS_COM_ENSINO_FUNDAMENTAL,
};

export const mapeamentoCompensacaoRestosAPagarEstadual06: {
  [key: string]: CompensacaoRestosAPagarEstadoTipo06;
} = {
  'MANUTENÇÃO E DESENVOLVIMENTO DO ENSINO (XVII)':
    CompensacaoRestosAPagarEstadoTipo06.MANUTENCAO_DESENVOLVIMENTO_DO_ENSINO,
  'ENSINO FUNDAMENTAL (XVIII)':
    CompensacaoRestosAPagarEstadoTipo06.ENSINO_FUNDAMENTAL,
  'TOTAL DAS DESPESAS CONSIDERADAS PARA FINS DE LIMITE CONSTITUCIONAL (XIX) = [(VII + IX + XII) - XVI]':
    CompensacaoRestosAPagarEstadoTipo06.TOTAL_DAS_DESPESAS_PARA_FINS_LIMITE_CONSTITUCIONAL,
};

export const mapeamentoSaldoFinanceiroFundefEstadual06: {
  [key: string]: SaldoFinanceiroFundefEstadoTipo06;
} = {
  'SALDO FINANCEIRO DO FUNDEF':
    SaldoFinanceiroFundefEstadoTipo06.SALDO_FINANCEIRO_DO_FUNDEF,
};

export const mapeamentoTabelaCumprimentoLimitesConstitucionaisEstadual06: {
  [key: string]: TabelaCumprimentoLimitesConstitucionaisEstadoTipo06;
} = {
  'MÍNIMO DE 25% DAS RECEITAS RESULTANTES DE IMPOSTOS NA MANUTENÇÃO E DESENVOLVIMENTO DO ENSINO [(XIX - XVII) / I] Caput do artigo 212 da CF/88':
    TabelaCumprimentoLimitesConstitucionaisEstadoTipo06.MINIMO_DE_25_PORCENTO_DAS_RECEITAS_RESULTANTES_DE_IMPOSTOS,
  'MÍNIMO DE 60% DOS RECURSOS COM MDE NO ENSINO FUNDAMENTAL [(VIII + IX + XII) - (XIII + XIV + XV + XVIII)] / (I X 0,25) Caput do artigo 60 do ADCT':
    TabelaCumprimentoLimitesConstitucionaisEstadoTipo06.MINIMO_60_PORCENTO_DOS_RECURSOS_COM_MDE_ENSINO_FUNDAMENTAL,
  'MÍNIMO DE 60% DO FUNDEF NA REMUNERAÇÃO DO MAGISTÉRIO ENSINO FUNDAMENTAL (X / IV) §5º do artigo 60 do ADCT':
    TabelaCumprimentoLimitesConstitucionaisEstadoTipo06.MINIMO_60_PORCENTO_DO_FUNDEF_NA_REMUNERACAO_ENSINO_FUNDAMENTAL,
};
