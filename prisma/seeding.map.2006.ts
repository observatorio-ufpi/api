import {
  CompensacaoRestosAPagarTipo06,
  ControleRestosAPagarVinculadosEducacaoTipo06,
  DeducoesDaDespesaTipo06,
  ItemDespesaTipos06,
  ItemReceitaTipos06,
  PerdaGanhoTransferenciasFundebTipo06,
  SaldoFinanceiroFundefTipo06,
  TabelaCumprimentoLimitesConstitucionaisTipo06,
} from '@prisma/client';

export const mapeamentoReceitas06: {
  [key: string]: ItemReceitaTipos06;
} = {
  'RECEITA RESULTANTE DE IMPOSTOS (I)':
    ItemReceitaTipos06.RECEITA_RESULTANTE_DE_IMPOSTOS,
  'Receitas de Impostos': ItemReceitaTipos06.RECEITAS_DE_IMPOSTOS,
  Impostos: ItemReceitaTipos06.IMPOSTOS,
  'Dívida Ativa dos Impostos': ItemReceitaTipos06.DIVIDA_ATIVA_DOS_IMPOSTOS,
  'Multas, Juros de Mora e Outros Encargos de Impostos e da Dívida de Impostos':
    ItemReceitaTipos06.MULTAS_JUROS_MORA_IMPOSTOS_E_DIVIDA,
  'Receitas de Transferências Constitucionais e Legais':
    ItemReceitaTipos06.RECEITAS_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAL,
  'Cota-Parte FPM (85%)': ItemReceitaTipos06.COTA_PARTE_FPM_85_PORCENTO,
  'Transferência Financeira ICMS-Desoneração - LC no 87/96 (85%)':
    ItemReceitaTipos06.TRANSFERENCIA_FINANCEIRA_ICMS_DESONERACAO,
  'Cota-Parte ICMS (85%)': ItemReceitaTipos06.COTA_PARTE_ICMS_85_PORCENTO,
  'Cota-Parte IPI-Exportação (85%)':
    ItemReceitaTipos06.COTA_PARTE_IPI_EXPORTACAO_85_PORCENTO,
  'Parcela das Transferências Destinadas à Formação do FUNDEF (II)':
    ItemReceitaTipos06.PARCELA_TRANSFERENCIAS_DESTINADAS_A_FORMACAO_DO_FUNDEF,
  'Cota-Parte ITR (100%)': ItemReceitaTipos06.COTA_PARTE_ITR_100_PORCENTO,
  'Cota-Parte IOF-Ouro (100%)':
    ItemReceitaTipos06.COTA_PARTE_IOF_OURO_100_PORCENTO,
  'Cota-Parte IPVA (100%)': ItemReceitaTipos06.COTA_PARTE_IPVA_100_PORCENTO,
  'RECEITAS VINCULADAS AO ENSINO (III)':
    ItemReceitaTipos06.RECEITAS_VINCULADAS_AD_ENSINO,
  'Transferências Multigovernamentais do FUNDEF (IV)':
    ItemReceitaTipos06.TRANSFERENCIAS_MULTIGOVERNAMENTAIS_DO_FUNDEF,
  'Transferências de Recursos do FUNDEF (V)':
    ItemReceitaTipos06.TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEF,
  'Complementação da União ao FUNDEF':
    ItemReceitaTipos06.COMPLEMENTACAO_DA_UNIAO_AO_FUNDEF,
  'Transferências do FNDE': ItemReceitaTipos06.TRANSFERENCIAS_DO_FNDE,
  'Transferências do Salário-Educação':
    ItemReceitaTipos06.TRANSFERENCIAS_DO_SALARIO_EDUCACAO,
  'Outras Transferências do FNDE':
    ItemReceitaTipos06.OUTRAS_TRANSFERENCIAS_DO_FNDE,
  'Transferências Destinadas a Programas de Educação':
    ItemReceitaTipos06.TRANSFERENCIAS_DESTINADAS_A_PROGRAMAS_DE_EDUCACAO,
  'Receita de Operações de Crédito Destinadas à Educação':
    ItemReceitaTipos06.RECEITA_DE_OPERACOES_DE_CREDITO_DESTINADAS_A_EDUCACAO,
  'Outras Receitas Destinadas à Educação':
    ItemReceitaTipos06.OUTRAS_RECEITAS_DESTINADAS_EDUCACAO,
  'TOTAL DAS RECEITAS (VI)': ItemReceitaTipos06.TOTAL_RECEITAS,
};

export const mapeamentoDespesas06: {
  [key: string]: ItemDespesaTipos06;
} = {
  'DESPESAS VINCULADAS ÀS RECEITAS RESULTANTES DE IMPOSTOS (VII)':
    ItemDespesaTipos06.DESPESAS_VINCULADAS_RECEITAS_RESULTANTES_DE_IMPOSTOS,
  'Despesas com Ensino Fundamental (VIII)':
    ItemDespesaTipos06.DESPESAS_COM_ENSINO_FUNDAMENTAL,
  'Despesas com Educação Infantil em Creches e Pré-Escolas (IX)':
    ItemDespesaTipos06.DESPESAS_COM_EDUCACAO_INFANTIL_CRECHES_E_PRE_ESCOLAS,
  'Outras Despesas com Ensino': ItemDespesaTipos06.OUTRAS_DESPESAS_COM_ENSINO,
  'DESPESAS VINCULADAS AO FUNDEF, NO ENSINO FUNDAMENTAL (X)':
    ItemDespesaTipos06.DESPESAS_VINCULADAS_AO_FUNDEF_NO_ENSINO_FUNDAMENTAL,
  'Pagamento dos Profissionais do Magistério do Ensino Fundamental (XI)':
    ItemDespesaTipos06.PAGAMENTO_PROFISSIONAIS_MAGISTERIO_DO_ENSINO_FUNDAMENTAL,
  'Outras Despesas no Ensino Fundamental':
    ItemDespesaTipos06.OUTRAS_DESPESAS_NO_ENSINO_FUNDAMENTAL,
  'VINCULADAS À CONTRIBUIÇÃO SOCIAL DO SALÁRIO-EDUCAÇÃO':
    ItemDespesaTipos06.VINCULADAS_A_CONTRIBUICAO_SOCIAL_DO_SALARIO_EDUCACAO,
  'FINANCIADAS COM RECURSOS DE OPERAÇÕES DE CRÉDITO':
    ItemDespesaTipos06.FINANCIADAS_COM_RECURSOS_DE_OPERACOES_DE_CREDITO,
  'FINANCIADAS COM OUTROS RECURSOS VINCULADOS À EDUCAÇÃO':
    ItemDespesaTipos06.FINANCIADAS_COM_OUTROS_RECURSOS_VINCULADOS_A_EDUCACAO,
  'TOTAL DAS DESPESAS COM ENSINO (XII)':
    ItemDespesaTipos06.TOTAL_DAS_DESPESAS_COM_ENSINO,
  'ENSINO FUNDAMENTAL': ItemDespesaTipos06.ENSINO_FUNDAMENTAL,
  'ENSINO MÉDIO': ItemDespesaTipos06.ENSINO_MEDIO,
  'ENSINO PROFISSIONAL': ItemDespesaTipos06.ENSINO_PROFISSIONAL,
  'ENSINO SUPERIOR': ItemDespesaTipos06.ENSINO_SUPERIOR,
  'EDUCAÇÃO INFANTIL': ItemDespesaTipos06.EDUCACAO_INFANTIL,
  'EDUCAÇÃO DE JOVENS E ADULTOS':
    ItemDespesaTipos06.EDUCACAO_DE_JOVENS_E_ADULTOS,
  'EDUCAÇÃO ESPECIAL': ItemDespesaTipos06.EDUCACAO_ESPECIAL,
  'Outras Subfunções': ItemDespesaTipos06.OUTRAS_SUBFUNCOES,
  'TOTAL DAS DESPESAS COM ENSINO POR SUBFUNÇÃO':
    ItemDespesaTipos06.TOTAL_DAS_DESPESAS_COM_ENSINO_POR_SUBFUNCAO,
};

export const mapeamentoSaldoFinanceiroFundef06: {
  [key: string]: SaldoFinanceiroFundefTipo06;
} = {
  'SALDO FINANCEIRO DO FUNDEF':
    SaldoFinanceiroFundefTipo06.SALDO_FINANCEIRO_DO_FUNDEF,
};

export const mapeamentoCumprimentoLimitesConstitucionaisTipo06: {
  [key: string]: TabelaCumprimentoLimitesConstitucionaisTipo06;
} = {
  'MÍNIMO DE 25% DAS RECEITAS RESULTANTES DE IMPOSTOS NA MANUTENÇÃO E DESENVOLVIMENTO DO ENSINO [(XX - XVIII) / I] Caput do artigo 212 da CF/88':
    TabelaCumprimentoLimitesConstitucionaisTipo06.MINIMO_DE_25_PORCENTO_DAS_RECEITAS_RESULTANTES_DE_IMPOSTOS,
  'MÍNIMO DE 60% DOS RECURSOS COM MDE NO ENSINO FUNDAMENTAL [(VIII + X + XIII) - (XIV + XV + XVI + XIX)] / (I X 0,25) Caput do artigo 60 do ADCT':
    TabelaCumprimentoLimitesConstitucionaisTipo06.MINIMO_60_PORCENTO_DOS_RECURSOS_COM_MDE_ENSINO_FUNDAMENTAL,
  'MÍNIMO DE 60% DO FUNDEF NA REMUNERAÇÃO DO MAGISTÉRIO ENSINO FUNDAMENTAL (XI / IV) §5o do artigo 60 do ADCT':
    TabelaCumprimentoLimitesConstitucionaisTipo06.MINIMO_60_PORCENTO_DO_FUNDEF_NA_REMUNERACAO_ENSINO_FUNDAMENTAL,
};

export const mapeamentoCompensacaoRestosAPagarTipo06: {
  [key: string]: CompensacaoRestosAPagarTipo06;
} = {
  'MANUTENÇÃO E DESENVOLVIMENTO DO ENSINO (XVIII)':
    CompensacaoRestosAPagarTipo06.MANUTENCAO_DESENVOLVIMENTO_DO_ENSINO,
  'ENSINO FUNDAMENTAL (XIX)': CompensacaoRestosAPagarTipo06.ENSINO_FUNDAMENTAL,
  'TOTAL DAS DESPESAS CONSIDERADAS PARA FINS DE LIMITE CONSTITUCIONAL (XX) = [(VII + X + XIII) - XVII]':
    CompensacaoRestosAPagarTipo06.TOTAL_DAS_DESPESAS_PARA_FINS_LIMITE_CONSTITUCIONAL,
};

export const mapeamentoControleRestosAPagarVinculadosEducacaoTipo06: {
  [key: string]: ControleRestosAPagarVinculadosEducacaoTipo06;
} = {
  'RESTOS A PAGAR DE DESPESAS COM MANUTENÇÃO E DESENVOLVIMENTO DO ENSINO':
    ControleRestosAPagarVinculadosEducacaoTipo06.RESTOS_A_PAGAR_DE_DESPESAS_COM_MANUTENCAO_ENSINO,
  'RESTOS A PAGAR DE DESPESAS COM ENSINO FUNDAMENTAL':
    ControleRestosAPagarVinculadosEducacaoTipo06.RESTOS_A_PAGAR_DE_DESPESAS_COM_ENSINO_FUNDAMENTAL,
};

export const mapeamentoDeducoesDaDespesaTipo06: {
  [key: string]: DeducoesDaDespesaTipo06;
} = {
  'PARCELA DO GANHO/COMPLEMENTAÇÃO DO FUNDEF APLICADA NO EXERCÍCIO (XIV)':
    DeducoesDaDespesaTipo06.PARCELA_GANHO_DO_FUNDEF_APLICADA_NO_EXERCICIO,
  'RESTOS A PAGAR INSCRITOS NO EXERCÍCIO, SEM DISPONIBILIDADE FINANCEIRA VINCULADA DE RECURSOS PRÓPRIOS':
    DeducoesDaDespesaTipo06.RESTOS_A_PAGAR_INSCRITOS_SEM_DISPONIBILIDADE_FINANCEIRA,
  'Despesas com Ensino Fundamental (XV)':
    DeducoesDaDespesaTipo06.DESPESAS_COM_ENSINO_FUNDAMENTAL,
  'Despesas com Educação Infantil em Creches e Pré-Escolas':
    DeducoesDaDespesaTipo06.DESPESAS_COM_EDUCACAO_INFANTIL_CRECHES_E_PRE_ESCOLAS,
  'DESPESAS VINCULADAS AO SUPERÁVIT FINANCEIRO DO GANHO/COMPLEMENTAÇÃO DO FUNDEF DO EXERCÍCIO ANTERIOR (XVI)':
    DeducoesDaDespesaTipo06.DESPESAS_VINCULADAS_SUPERAVIT_FINANCEIRO_DO_GANHO_FUNDEF,
  'TOTAL (XVII)': DeducoesDaDespesaTipo06.TOTAL,
};

export const mapeamentoPerdaGanhoTransferenciasFundebTipo06: {
  [key: string]: PerdaGanhoTransferenciasFundebTipo06;
} = {
  'PERDA NAS TRANSFERÊNCIAS DO FUNDEF':
    PerdaGanhoTransferenciasFundebTipo06.PERDA_NAS_TRANSFERENCIAS_DO_FUNDEF,
  'GANHO NAS TRANSFERÊNCIAS DO FUNDEF':
    PerdaGanhoTransferenciasFundebTipo06.GANHO_NAS_TRANSFERENCIAS_DO_FUNDEF,
};
