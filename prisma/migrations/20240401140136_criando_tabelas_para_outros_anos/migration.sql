/*
  Warnings:

  - You are about to drop the column `receitasRealizadaAteBimestre` on the `Despesa1014` table. All the data in the column will be lost.
  - You are about to drop the column `receitasRealizadaBimestre` on the `Despesa1014` table. All the data in the column will be lost.
  - Added the required column `despesasLiquidadasAteBimestre` to the `Despesa1014` table without a default value. This is not possible if the table is not empty.
  - Added the required column `despesasLiquidadasBimestre` to the `Despesa1014` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ItemReceitaTipos1520" AS ENUM ('RECEITA_DE_IMPOSTOS', 'IPTU_RECEITA_RESULTANTE', 'IPTU', 'IPTU_MULTAS_JUROS_MORA', 'IPTU_DIVIDA_ATIVA', 'IPTU_MULTAS_JUROS_MORA_DIVIDA_ATIVA', 'IPTU_DEDUCOES_RECEITA', 'ITBI_RECEITA_RESULTANTE', 'ITBI', 'ITBI_MULTAS_JUROS_MORA', 'ITBI_DIVIDA_ATIVA', 'ITBI_MULTAS_JUROS_MORA_DIVIDA_ATIVA', 'ITBI_DEDUCOES_RECEITA', 'ISS_RECEITA_RESULTANTE', 'ISS', 'ISS_MULTAS_JUROS_MORA', 'ISS_DIVIDA_ATIVA', 'ISS_MULTAS_JUROS_MORA_DIVIDA_ATIVA', 'ISS_DEDUCOES_RECEITA', 'IRRF_RECEITA_RESULTANTE', 'IRRF', 'IRRF_MULTAS_JUROS_MORA', 'IRRF_DIVIDA_ATIVA', 'IRRF_MULTAS_JUROS_MORA_DIVIDA_ATIVA', 'IRRF_DEDUCOES_RECEITA', 'ITR_RECEITA_RESULTANTE', 'ITR', 'ITR_MULTAS_JUROS_MORA', 'ITR_DIVIDA_ATIVA', 'ITR_MULTAS_JUROS_MORA_DIVIDA_ATIVA', 'ITR_DEDUCOES_RECEITA', 'RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS', 'COTA_PARTE_FPM', 'COTA_PARTE_FPM_PARCELA_CF_ART_159_I_ALINEA_B', 'COTA_PARTE_FPM_PARCELA_CF_ART_159_I_ALINEA_D', 'COTA_PARTE_ICMS', 'ICMS_DESONERACAO_LC_87_1996', 'COTA_PARTE_IPI_EXPORTACAO', 'COTA_PARTE_ITR', 'COTA_PARTE_IPVA', 'COTA_PARTE_IOF_OURO', 'TOTAL_RECEITA_IMPOSTOS', 'RECEITA_APLICACAO_FINANCEIRA', 'RECEITA_TRANSFERENCIAS_FNDE', 'TRANSFERENCIAS_SALARIO_EDUCACAO', 'TRANSFERENCIAS_DIRETAS_PDDE', 'TRANSFERENCIAS_DIRETAS_PNAE', 'TRANSFERENCIAS_DIRETAS_PNATE', 'OUTRAS_TRANSFERENCIAS_FNDE', 'APLICACAO_FINANCEIRA_FNDE', 'RECEITA_TRANSFERENCIAS_CONVENIOS', 'TRANSFERENCIAS_CONVENIOS', 'APLICACAO_FINANCEIRA_CONVENIOS', 'RECEITA_OPERACOES_CREDITO', 'OUTRAS_RECEITAS_FINANCIAMENTO_ENSINO', 'TOTAL_RECEITAS_ADICIONAIS_FINANCIAMENTO_ENSINO', 'RECEITAS_DESTINADAS_AO_FUNDEB', 'COTA_PARTE_FPM_DESTINADA_AO_FUNDEB', 'COTA_PARTE_ICMS_DESTINADA_AO_FUNDEB', 'ICMS_DESONERACAO_DESTINADA_AO_FUNDEB', 'COTA_PARTE_IPI_EXPORTACAO_DESTINADA_AO_FUNDEB', 'COTA_PARTE_ITR_OU_ITR_ARRECADADOS_DESTINADOS_AO_FUNDEB', 'COTA_PARTE_IPVA_DESTINADA_AO_FUNDEB', 'RECEITAS_RECEBIDAS_DO_FUNDEB', 'TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB', 'COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB', 'RECEITA_DE_APLICACAO_FINANCEIRA_DOS_RECURSOS_DO_FUNDEB', 'RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB', 'IMPOSTOS_E_TRANSFERENCIAS_DESTINADAS_MDE');

-- CreateEnum
CREATE TYPE "ItemDespesaTipos1520" AS ENUM ('FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO', 'FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO_EDUCACAO_INFANTIL', 'FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO_ENSINO_FUNDAMENTAL', 'FUNDEB_OUTRAS_DESPESAS', 'FUNDEB_OUTRAS_DESPESAS_EDUCACAO_INFANTIL', 'FUNDEB_OUTRAS_DESPESAS_ENSINO_FUNDAMENTAL', 'FUNDEB_TOTAL_DESPESAS_FUNDEB', 'MDE_DESPESAS_EDUCACAO_INFANTIL', 'MDE_DESPESAS_EDUCACAO_INFANTIL_CRECHE', 'MDE_EDUCACAO_INFANTIL_CRECHE_DESPESAS_CUSTEADAS_FUNDEB', 'MDE_EDUCACAO_INFANTIL_CRECHE_DESPESAS_CUSTEADAS_OUTROS_IMPOSTOS', 'MDE_DESPESAS_EDUCACAO_INFANTIL_PRE_ESCOLA', 'MDE_EDUCACAO_INFANTIL_PRE_ESCOLA_DESPESAS_CUSTEADAS_FUNDEB', 'MDE_EDUCACAO_INFANTIL_PRE_ESCOLA_DESPESAS_CUSTEADAS_IMPOSTOS', 'MDE_DESPESAS_ENSINO_FUNDAMENTAL', 'MDE_ENSINO_FUNDAMENTAL_DESPESAS_CUSTEADAS_FUNDEB', 'MDE_ENSINO_FUNDAMENTAL_DESPESAS_CUSTEADAS_OUTROS_IMPOSTOS', 'MDE_DESPESAS_ENSINO_MEDIO', 'MDE_DESPESAS_ENSINO_SUPERIOR', 'MDE_DESPESAS_ENSINO_PROFISSIONAL_NAO_INTEGRADO_ENSINO_REGULAR', 'MDE_OUTRAS_DESPESAS', 'MDE_TOTAL_DESPESAS_ACOES_TIPICAS', 'DESPESAS_CUSTEADAS_APLICACAO_FINANCEIRA_VINCULADAS_ENSINO', 'DESPESAS_CUSTEADAS_CONTRIBUICAO_SOCIAL_SALARIO_EDUCACAO', 'DESPESAS_CUSTEADAS_OPERACOES_CREDITO', 'DESPESAS_CUSTEADAS_OUTRAS_RECEITAS_FINANCIAMENTO_ENSINO', 'TOTAL_OUTRAS_DESPESAS_CUSTEADAS_FINANCIAMENTO_ENSINO', 'TOTAL_GERAL_DESPESAS_MDE');

-- CreateEnum
CREATE TYPE "DeducoesFinsLimiteFundebTipo1520" AS ENUM ('RESTOS_A_PAGAR_SEM_DISPONIBILIDADE_FINANCEIRA', 'RESTOS_A_PAGAR_SEM_DISPONIBILIDADE_FINANCEIRA_60_PORCENTO', 'RESTOS_A_PAGAR_SEM_DISPONIBILIDADE_FINANCEIRA_40_PORCENTO', 'DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR', 'DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR_60_PORCENTO', 'DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR_40_PORCENTO', 'TOTAL_DEDUCOES_PARA_FINS_LIMITE');

-- CreateEnum
CREATE TYPE "IndicadoresFundebTipo1520" AS ENUM ('TOTAL_DE_DESPESAS_FUNDEB_PARA_FINS_DE_LIMITE', 'MINIMO_60_PORCENTO_FUNDEB_REMUNERACAO_MAGISTERIO', 'MAXIMO_40_PORCENTO_DESPESAS_MDE', 'MAXIMO_5_PORCENTO_NAO_APLICADO_NO_EXERCICIO');

-- CreateEnum
CREATE TYPE "ControleRecursosNoExercicioSubsequenteTipo1520" AS ENUM ('RECURSOS_RECEBIDOS_FUNDEB_NAO_UTILIZADOS', 'DESPESAS_CUSTEADAS_C_SALDO_FUNDEB_N_UTILIZADOS_1_TRIM_ATUAL');

-- CreateEnum
CREATE TYPE "DeducoesParaFinsDeLimitesConstitucionalTipo1520" AS ENUM ('RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB', 'DESPESAS_CUSTEADAS_A_COMPLEMENTACAO_DO_FUNDEB_NO_EXERCICIO', 'RECEITA_DE_APLICACAO_FINANCEIRA_DOS_RECURSOS_DO_FUNDEB_ATE_BIM', 'DESPESAS_CUSTEADAS_SUPERAVIT_FINANCEIRO_DO_EXERCICIO_ANTERIOR', 'DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR_OUTROS_IMPOSTOS', 'RESTOS_A_PAGAR_INSCRITOS_SEM_DISPONIBILIDADE_FINANCEIRA', 'CANCELAMENTO_RESTOS_PAGAR_INSCRITOS_DISPONIBILIDADE_FINANCEIRA', 'TOTAL_DE_DEDUCOES_PARA_FINS_DE_LIMITE_CONSTITUCIONAL', 'TOTAL_DE_DESPESAS_PARA_FINS_DE_LIMITE', 'MINIMO_DE_25_PORCENTO_DAS_RECEITAS_RESULTANTES_DE_IMPOSTOS_MDE');

-- CreateEnum
CREATE TYPE "FluxoFinanceiroDeRecursosFundebTipo1520" AS ENUM ('SALDO_FINANCEIRO_31_DE_DEZEMBRO_ANO_ANTERIOR', 'INGRESSO_RECURSOS_ATE_BIM', 'PAGAMENTOS_EFETUADOS_ATE_BIM', 'ORCAMENTO_DO_EXERCICIO', 'RESTOS_A_PAGAR', 'RECEITA_APLICACAO_FINANCEIRA_DOS_RECURSOS_ATE_BIM', 'SALDO_FINANCEIRO_NO_EXERCICIO_ATUAL');

-- CreateEnum
CREATE TYPE "RestosAPagarInscritosDisponibilidadesFinanceiraTipo1520" AS ENUM ('RESTOS_A_PAGAR_DE_DESPESA_MDE', 'EXECUTADAS_COM_RECURSOS_DE_IMPOSTOS_ENSINO', 'EXECUTADAS_COM_RECURSOS_FUNDEB');

-- CreateEnum
CREATE TYPE "ItemReceitaTipos21" AS ENUM ('RECEITA_DE_IMPOSTOS', 'RECEITA_IPTU', 'RECEITA_ITBI', 'RECEITA_ISS', 'RECEITA_IRRF', 'RECEITA_TRANSFERENCIAS_CONSTITUCIONAIS', 'COTA_PARTE_FPM', 'COTA_PARTE_FPM_PARCELA_CF_B', 'OTA_PARTE_FPM_PARCELA_CF_D_E', 'COTA_PARTE_ICMS', 'COTA_PARTE_IPI_EXPORTACAO', 'COTA_PARTE_ITR', 'COTA_PARTE_IPVA', 'COTA_PARTE_IOF_OURO', 'COMPENSACOES_FINANCEIRAS', 'TOTAL_RECEITA_IMPOSTOS', 'TOTAL_DESTINADO_FUNDEB', 'VALOR_MINIMO_APLICADO_MDE', 'RECEITAS_RECEBIDAS_FUNDEB', 'FUNDEB_IMPOSTOS_TRANSFERENCIAS', 'FUNDEB_PRINCIPAL_6_1_1', 'FUNDEB_RENDIMENTO_APLICACAO_FINCANCEIRA_6_1_2', 'FUNDEB_COMPLEMENTACAO_UNIAO_VAAF', 'FUNDEB_PRINCIPAL_6_2_1', 'FUNDEB_RENDIMENTO_APLICACAO_FINCANCEIRA_6_2_2', 'FUNDEB_COMPLEMENTACAO_UNIAO_VAAT', 'FUNDEB_PRINCIPAL_6_3_1', 'FUNDEB_RENDIMENTO_APLICACAO_FINCANCEIRA_6_3_3', 'RESULTADO_LIQUIDO_TRANSFERENCIAS_FUNDEB', 'FIN_ENSINO_RECEITA_TRANSFERENCIAS_FNDE', 'FIN_ENSINO_SALARIO_EDUCACAO', 'FIN_ENSINO_PDDE', 'FIN_ENSINO_PNAE', 'FIN_ENSINO_PNATE', 'FIN_ENSINO_OUTRAS_TRANSFERENCIAS_FNDE', 'FIN_ENSINO_RECEITA_TRANSFERENCIAS_CONVENIOS', 'FIN_ENSINO_RECEITA_ROYALTIES_DESTINADOS_EDUCACAO', 'FIN_ENSINO_RECEITA_OPERACOES_CREDITO_EDUCACAO', 'FIN_ENSINO_OUTRAS_RECEITAS', 'FIN_ENSINO_TOTAL_RECEITAS_ADICIONAIS');

-- CreateEnum
CREATE TYPE "ItemDespesasTipos21" AS ENUM ('FUNDEB_PROFISSIONAIS_EDUCACAO_BASICA', 'FUNDEB_EDUCACAO_INFANTIL', 'FUNDEB_CRECHE', 'FUNDEB_PRE_ESCOLA', 'FUNDEB_ENSINO_FUNDAMENTAL', 'FUNDEB_OUTRAS_DESPESAS', 'FUNDEB_OUTRAS_DESPESAS_EDUCACAO_INFANTIL', 'FUNDEB_OUTRAS_DESPESAS_EDUCACAO_CRECHE', 'FUNDEB_OUTRAS_DESPESAS_PRE_ESCOLA', 'FUNDEB_OUTRAS_DESPESAS_ENSINO_FUNDAMENTAL', 'TOTAL_DESPESAS_FUNDEB', 'MDE_EDUCACAO_INFANTIL', 'MDE_CRECHE', 'MDE_PRE_ESCOLA', 'MDE_ENSINO_FUNDAMENTAL', 'TOTAL_ACOES_TIPICAS_MDE', 'OUTRAS_DESPESAS_EDUCACAO_INFANTIL', 'OUTRAS_DESPESAS_CRECHE', 'OUTRAS_DESPESAS_PRE_ESCOLA', 'OUTRAS_DESPESAS_ENSINO_FUNDAMENTAL', 'OUTRAS_DESPESAS_ENSINO_MEDIO', 'OUTRAS_DESPESAS_ENSINO_SUPERIOR', 'OUTRAS_DESPESAS_ENSINO_PROFISSIONAL_NAO_INTEGRADO', 'TOTAL_OUTRAS_DESPESAS_EDUCACAO', 'TOTAL_GERAL_DESPESAS_EDUCACAO', 'DESPESAS_CORRENTES', 'PESSOAL_ATIVO', 'PESSOAL_INATIVO', 'TRANSFERENCIAS_INSTITUICOES_47_1_3', 'OUTRAS_DESPESAS_CORRENTES', 'DESPESAS_DE_CAPITAL', 'TRANSFERENCIAS_INSTITUICOES_47_2_1', 'OUTRAS_DESPESAS_CAPITAL');

-- CreateEnum
CREATE TYPE "DespesasCusteadasFundebExercicioTipos21" AS ENUM ('TOTAL_DESPESAS_FUNDEB_PROFISSIONAIS_EDUCACAO_BASICA', 'TOTAL_DESPESAS_FUNDEB_IMPOSTOS_TRANSFERENCIAS', 'TOTAL_DESPESAS_FUNDEB_UNIAO_VAAF', 'TOTAL_DESPESAS_FUNDEB_UNIAO_VAAT', 'TOTAL_DESPESAS_FUNDEB_UNIAO_VAAT_EDUCACAO_INFANTIL', 'TOTAL_DESPESAS_FUNDEB_UNIAO_VAAT_DESPESA_CAPITAL');

-- CreateEnum
CREATE TYPE "RecursosRecebidosNaoUtilizadosTipos21" AS ENUM ('TOTAL_RECURSOS_SUPERAVIT', 'SUPERAVIT_EXERCICIO_ANTERIOR', 'SUPERAVIT_RESIDUAL_OUTROS_EXERCICIOS');

-- CreateEnum
CREATE TYPE "IndicadoresTipos21Art212" AS ENUM ('MINIMO_70_FUNDEB_REMUNERACAO_PROFESSORES', 'PERCENTUAL_50_COMPLEMENTACAO_UNIAO_VAAT_EDUCACAO_INFANTIL', 'MINIMO_15_COMPLEMENTACAO_UNIAO_VAAT_DESPESAS_CAPITAL');

-- CreateEnum
CREATE TYPE "IndicadorTipos21Art25MaximoDeSuperavit" AS ENUM ('TOTAL_RECEITA_RECEBIDA_NAO_APLICADA_EXERCICIO');

-- CreateEnum
CREATE TYPE "IndicadorTipos21Art25AplicacaoSuperavit" AS ENUM ('TOTAL_DESPESAS_CUSTEADAS_COM_SUPERAVIT_FUNDEB', 'TOTAL_DESPESAS_CUSTEADAS_COM_FUNDEB_IMPOSTOS_TRANSFERENCIAS', 'TOTAL_DESPESAS_CUSTEADAS_COM_FUNDEB_COMPLEMENTACAO_UNIAO');

-- CreateEnum
CREATE TYPE "AplicacaoDespesasFinsLimiteMinimoConstitucionalTipos21" AS ENUM ('TOTAL_DESPESAS_MDE_CUSTEADAS_COM_RECURSOS_IMPOSTOS', 'RESULTADO_LIQUIDO_TRANSFERENCIAS_FUNDEB', 'RESTOS_A_PAGAR_NAO_PROCESSADOS_S_DISPONIB_FUNDEB_IMPOSTOS', 'RESTOS_A_PAGAR_NAO_PROCESSADOS_S_DISPONIB_IMPOSTOS', 'CANCELAMENTO_RESTOS_A_PAGAR_COM_DISPONIB_IMPOSTOS', 'TOTAL_DESPESAS_PARA_FINS_LIMITE');

-- CreateEnum
CREATE TYPE "ApuracaoLimiteMinimoConstitucionalTipos21" AS ENUM ('APLICACAO_EM_MDE_SOBRE_RECEITA_DE_IMPOSTOS');

-- CreateEnum
CREATE TYPE "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebTipos21" AS ENUM ('RESTOS_A_PAGAR_DE_DESPESAS_COM_MDE', 'EXECUTADAS_COM_RECURSOS_IMPOSTOS_TRANSFERENCIAS_IMPOSTO', 'EXECUTADAS_COM_RECURSOS_FUNDEB_IMPOSTOS', 'EXECUTADAS_COM_RECURSOS_FUNDEB_COMPLEMENTACAO_UNIAO');

-- CreateEnum
CREATE TYPE "ControleDisponibildadeFinanceiraConciliacaoBancariaTipos21" AS ENUM ('DISPONIBILIDADE_FINANCEIRA_EM_31_DE_DEZEMBRO_ANO_ANTERIOR', 'INGRESSO_DE_RECURSOS_ATE_O_BIM_ORCAMENTARIO', 'PAGAMENTOS_EFETUADOS_ATE_O_BIM_ORCAMENTARIO_E_RESTOS_A_PAGAR', 'DISPONIBILIDADE_FINANCEIRA_ATE_O_BIM', 'AJUSTES_POSITIVOS_RETENCOES_E_OUTROS_VALORES_EXTRAORCAMENTARIOS', 'AJUSTES_NEGATIVOS_OUTROS_VALORES_EXTRAORCAMENTARIOS', 'SALDO_FINANCEIRO_CONCILIADO_SALDO_BANCARIO');

-- AlterTable
ALTER TABLE "Despesa1014" DROP COLUMN "receitasRealizadaAteBimestre",
DROP COLUMN "receitasRealizadaBimestre",
ADD COLUMN     "despesasLiquidadasAteBimestre" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "despesasLiquidadasBimestre" DOUBLE PRECISION NOT NULL;

-- CreateTable
CREATE TABLE "RelatorioMunicipal1520" (
    "id" SERIAL NOT NULL,
    "ano" TEXT NOT NULL,
    "codigoMunicipio" TEXT NOT NULL,

    CONSTRAINT "RelatorioMunicipal1520_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RelatorioMunicipal21" (
    "id" SERIAL NOT NULL,
    "ano" TEXT NOT NULL,
    "codigoMunicipio" TEXT NOT NULL,

    CONSTRAINT "RelatorioMunicipal21_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Receita1520" (
    "id" SERIAL NOT NULL,
    "tipo" "ItemReceitaTipos1520" NOT NULL,
    "previsaoInicial" DOUBLE PRECISION NOT NULL,
    "previsaoAtualizada" DOUBLE PRECISION NOT NULL,
    "receitasRealizadaAteBimestre" DOUBLE PRECISION NOT NULL,
    "percentual" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "Receita1520_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Despesa1520" (
    "id" SERIAL NOT NULL,
    "tipo" "ItemDespesaTipos1520" NOT NULL,
    "dotacaoInicial" DOUBLE PRECISION NOT NULL,
    "dotacaoAtualizada" DOUBLE PRECISION NOT NULL,
    "despesasEmpenhadasAteBimestre" DOUBLE PRECISION NOT NULL,
    "despesasEmpenhadasPercentual" DOUBLE PRECISION NOT NULL,
    "despesasLiquidadasAteBimestre" DOUBLE PRECISION NOT NULL,
    "despesasLiquidadasPercentual" DOUBLE PRECISION NOT NULL,
    "inscritasRestosPagar" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "Despesa1520_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeducoesFinsLimiteFundeb1520" (
    "id" SERIAL NOT NULL,
    "tipo" "DeducoesFinsLimiteFundebTipo1520" NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "DeducoesFinsLimiteFundeb1520_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IndicadoresFundeb1520" (
    "id" SERIAL NOT NULL,
    "tipo" "IndicadoresFundebTipo1520" NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "IndicadoresFundeb1520_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ControleRecursosNoExercicioSubsequente1520" (
    "id" SERIAL NOT NULL,
    "tipo" "ControleRecursosNoExercicioSubsequenteTipo1520" NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "ControleRecursosNoExercicioSubsequente1520_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeducoesParaFinsDeLimitesConstitucional1520" (
    "id" SERIAL NOT NULL,
    "tipo" "DeducoesParaFinsDeLimitesConstitucionalTipo1520" NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "DeducoesParaFinsDeLimitesConstitucional1520_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FluxoFinanceiroDeRecursosFundeb1520" (
    "id" SERIAL NOT NULL,
    "tipo" "FluxoFinanceiroDeRecursosFundebTipo1520" NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "FluxoFinanceiroDeRecursosFundeb1520_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RestosAPagarInscritosDisponibilidadesFinanceira1520" (
    "id" SERIAL NOT NULL,
    "tipo" "RestosAPagarInscritosDisponibilidadesFinanceiraTipo1520" NOT NULL,
    "saldoAteBimestre" DOUBLE PRECISION NOT NULL,
    "canceladoNoAno" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "RestosAPagarInscritosDisponibilidadesFinanceira1520_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Receita21" (
    "id" SERIAL NOT NULL,
    "tipo" "ItemReceitaTipos21" NOT NULL,
    "previsaoAtualizada" DOUBLE PRECISION NOT NULL,
    "receitasRealizadaAteBimestre" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "Receita21_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Despesa21" (
    "id" SERIAL NOT NULL,
    "tipo" "ItemDespesasTipos21" NOT NULL,
    "dotacaoAtualizada" DOUBLE PRECISION NOT NULL,
    "despesasEmpenhadasAteBimestre" DOUBLE PRECISION NOT NULL,
    "despesasLiquidadasAteBimestre" DOUBLE PRECISION NOT NULL,
    "despesasPagasAteBimestre" DOUBLE PRECISION NOT NULL,
    "inscritosEmRestosAPagarNaoProcessados" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "Despesa21_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DespesasCusteadasFundebExercicio21" (
    "id" SERIAL NOT NULL,
    "tipo" "DespesasCusteadasFundebExercicioTipos21" NOT NULL,
    "despesasEmpenhadasAteBimestre" DOUBLE PRECISION NOT NULL,
    "despesasLiquidadasAteBimestre" DOUBLE PRECISION NOT NULL,
    "despesasPagasAteBimestre" DOUBLE PRECISION NOT NULL,
    "inscritosEmRestosAPagarNaoProcessados" DOUBLE PRECISION NOT NULL,
    "inscritosEmRestosAPagarNaoProcessadosSemCaixa" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "DespesasCusteadasFundebExercicio21_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecursosRecebidosNaoUtilizados21" (
    "id" SERIAL NOT NULL,
    "tipo" "RecursosRecebidosNaoUtilizadosTipos21" NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "RecursosRecebidosNaoUtilizados21_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Indicadores21Art212" (
    "id" SERIAL NOT NULL,
    "tipo" "IndicadoresTipos21Art212" NOT NULL,
    "valorExigido" DOUBLE PRECISION NOT NULL,
    "valorAplicado" DOUBLE PRECISION NOT NULL,
    "valorConsideradoAposDeducoes" DOUBLE PRECISION NOT NULL,
    "percentualAplicado" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "Indicadores21Art212_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Indicador21Art25MaximoDeSuperavit" (
    "id" SERIAL NOT NULL,
    "tipo" "IndicadorTipos21Art25MaximoDeSuperavit" NOT NULL,
    "valorPermitido" DOUBLE PRECISION NOT NULL,
    "valorNaoAplicado" DOUBLE PRECISION NOT NULL,
    "valorNaoAplicadoAposDeducoes" DOUBLE PRECISION NOT NULL,
    "percentualNaoAplicado" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "Indicador21Art25MaximoDeSuperavit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Indicador21Art25AplicacaoSuperavit" (
    "id" SERIAL NOT NULL,
    "tipo" "IndicadorTipos21Art25AplicacaoSuperavit" NOT NULL,
    "valorSuperavitPermitidoExercicioAnterior" DOUBLE PRECISION NOT NULL,
    "valorNaoAplicadoExercicioAnterior" DOUBLE PRECISION NOT NULL,
    "valorSuperavitAplicadoAtePrimeiroQuadrim" DOUBLE PRECISION NOT NULL,
    "valorAplicadoAposPrimeiroQuadrim" DOUBLE PRECISION NOT NULL,
    "valorNaoAplicado" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "Indicador21Art25AplicacaoSuperavit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AplicacaoDespesasFinsLimiteMinimoConstitucional21" (
    "id" SERIAL NOT NULL,
    "tipo" "AplicacaoDespesasFinsLimiteMinimoConstitucionalTipos21" NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "AplicacaoDespesasFinsLimiteMinimoConstitucional21_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApuracaoLimiteMinimoConstitucional21" (
    "id" SERIAL NOT NULL,
    "tipo" "ApuracaoLimiteMinimoConstitucionalTipos21" NOT NULL,
    "valorExigido" DOUBLE PRECISION NOT NULL,
    "valorAplicado" DOUBLE PRECISION NOT NULL,
    "percentualAplicado" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "ApuracaoLimiteMinimoConstitucional21_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundeb21" (
    "id" SERIAL NOT NULL,
    "tipo" "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebTipos21" NOT NULL,
    "saldoInicial" DOUBLE PRECISION NOT NULL,
    "rpLiquidados" DOUBLE PRECISION NOT NULL,
    "rpPagos" DOUBLE PRECISION NOT NULL,
    "rpCancelados" DOUBLE PRECISION NOT NULL,
    "saldoFinal" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundeb21_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ControleDisponibildadeFinanceiraConciliacaoBancaria21" (
    "id" SERIAL NOT NULL,
    "tipo" "ControleDisponibildadeFinanceiraConciliacaoBancariaTipos21" NOT NULL,
    "fundeb" DOUBLE PRECISION NOT NULL,
    "salarioEducacao" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "ControleDisponibildadeFinanceiraConciliacaoBancaria21_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Receita1520_relatorioMunicialId_tipo_key" ON "Receita1520"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "Despesa1520_relatorioMunicialId_tipo_key" ON "Despesa1520"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "DeducoesFinsLimiteFundeb1520_relatorioMunicialId_tipo_key" ON "DeducoesFinsLimiteFundeb1520"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "IndicadoresFundeb1520_relatorioMunicialId_tipo_key" ON "IndicadoresFundeb1520"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "ControleRecursosNoExercicioSubsequente1520_relatorioMunicia_key" ON "ControleRecursosNoExercicioSubsequente1520"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "DeducoesParaFinsDeLimitesConstitucional1520_relatorioMunici_key" ON "DeducoesParaFinsDeLimitesConstitucional1520"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "FluxoFinanceiroDeRecursosFundeb1520_relatorioMunicialId_tip_key" ON "FluxoFinanceiroDeRecursosFundeb1520"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "RestosAPagarInscritosDisponibilidadesFinanceira1520_relator_key" ON "RestosAPagarInscritosDisponibilidadesFinanceira1520"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "Receita21_relatorioMunicialId_tipo_key" ON "Receita21"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "Despesa21_relatorioMunicialId_tipo_key" ON "Despesa21"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "DespesasCusteadasFundebExercicio21_relatorioMunicialId_tipo_key" ON "DespesasCusteadasFundebExercicio21"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "RecursosRecebidosNaoUtilizados21_relatorioMunicialId_tipo_key" ON "RecursosRecebidosNaoUtilizados21"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "Indicadores21Art212_relatorioMunicialId_tipo_key" ON "Indicadores21Art212"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "Indicador21Art25MaximoDeSuperavit_relatorioMunicialId_tipo_key" ON "Indicador21Art25MaximoDeSuperavit"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "Indicador21Art25AplicacaoSuperavit_relatorioMunicialId_tipo_key" ON "Indicador21Art25AplicacaoSuperavit"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "AplicacaoDespesasFinsLimiteMinimoConstitucional21_relatorio_key" ON "AplicacaoDespesasFinsLimiteMinimoConstitucional21"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "ApuracaoLimiteMinimoConstitucional21_relatorioMunicialId_ti_key" ON "ApuracaoLimiteMinimoConstitucional21"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundeb21__key" ON "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundeb21"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "ControleDisponibildadeFinanceiraConciliacaoBancaria21_relat_key" ON "ControleDisponibildadeFinanceiraConciliacaoBancaria21"("relatorioMunicialId", "tipo");

-- AddForeignKey
ALTER TABLE "Receita1520" ADD CONSTRAINT "Receita1520_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal1520"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Despesa1520" ADD CONSTRAINT "Despesa1520_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal1520"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeducoesFinsLimiteFundeb1520" ADD CONSTRAINT "DeducoesFinsLimiteFundeb1520_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal1520"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndicadoresFundeb1520" ADD CONSTRAINT "IndicadoresFundeb1520_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal1520"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ControleRecursosNoExercicioSubsequente1520" ADD CONSTRAINT "ControleRecursosNoExercicioSubsequente1520_relatorioMunici_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal1520"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeducoesParaFinsDeLimitesConstitucional1520" ADD CONSTRAINT "DeducoesParaFinsDeLimitesConstitucional1520_relatorioMunic_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal1520"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FluxoFinanceiroDeRecursosFundeb1520" ADD CONSTRAINT "FluxoFinanceiroDeRecursosFundeb1520_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal1520"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestosAPagarInscritosDisponibilidadesFinanceira1520" ADD CONSTRAINT "RestosAPagarInscritosDisponibilidadesFinanceira1520_relato_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal1520"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Receita21" ADD CONSTRAINT "Receita21_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal21"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Despesa21" ADD CONSTRAINT "Despesa21_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal21"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DespesasCusteadasFundebExercicio21" ADD CONSTRAINT "DespesasCusteadasFundebExercicio21_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal21"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecursosRecebidosNaoUtilizados21" ADD CONSTRAINT "RecursosRecebidosNaoUtilizados21_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal21"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Indicadores21Art212" ADD CONSTRAINT "Indicadores21Art212_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal21"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Indicador21Art25MaximoDeSuperavit" ADD CONSTRAINT "Indicador21Art25MaximoDeSuperavit_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal21"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Indicador21Art25AplicacaoSuperavit" ADD CONSTRAINT "Indicador21Art25AplicacaoSuperavit_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal21"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AplicacaoDespesasFinsLimiteMinimoConstitucional21" ADD CONSTRAINT "AplicacaoDespesasFinsLimiteMinimoConstitucional21_relatori_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal21"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApuracaoLimiteMinimoConstitucional21" ADD CONSTRAINT "ApuracaoLimiteMinimoConstitucional21_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal21"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundeb21" ADD CONSTRAINT "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundeb21_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal21"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ControleDisponibildadeFinanceiraConciliacaoBancaria21" ADD CONSTRAINT "ControleDisponibildadeFinanceiraConciliacaoBancaria21_rela_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal21"("id") ON DELETE CASCADE ON UPDATE CASCADE;
