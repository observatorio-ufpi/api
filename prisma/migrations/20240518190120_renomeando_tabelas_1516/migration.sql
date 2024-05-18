/*
  Warnings:

  - You are about to drop the `ControleRecursosNoExercicioSubsequente1516e1920` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DeducoesFinsLimiteFundeb1516e1920` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DeducoesParaFinsDeLimitesConstitucional1516e1920` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Despesa1516e1920` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FluxoFinanceiroDeRecursosFundeb1516e1920` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `IndicadoresFundeb1516e1920` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Receita1516e1920` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RelatorioMunicipal1516e1920` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RestosAPagarInscritosDisponibilidadesFinanceira1516e1920` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ItemReceitaTipos1516" AS ENUM ('RECEITA_DE_IMPOSTOS', 'IPTU_RECEITA_RESULTANTE', 'IPTU', 'IPTU_MULTAS_JUROS_MORA', 'IPTU_DIVIDA_ATIVA', 'IPTU_MULTAS_JUROS_MORA_DIVIDA_ATIVA', 'IPTU_DEDUCOES_RECEITA', 'ITBI_RECEITA_RESULTANTE', 'ITBI', 'ITBI_MULTAS_JUROS_MORA', 'ITBI_DIVIDA_ATIVA', 'ITBI_MULTAS_JUROS_MORA_DIVIDA_ATIVA', 'ITBI_DEDUCOES_RECEITA', 'ISS_RECEITA_RESULTANTE', 'ISS', 'ISS_MULTAS_JUROS_MORA', 'ISS_DIVIDA_ATIVA', 'ISS_MULTAS_JUROS_MORA_DIVIDA_ATIVA', 'ISS_DEDUCOES_RECEITA', 'IRRF_RECEITA_RESULTANTE', 'IRRF', 'IRRF_MULTAS_JUROS_MORA', 'IRRF_DIVIDA_ATIVA', 'IRRF_MULTAS_JUROS_MORA_DIVIDA_ATIVA', 'IRRF_DEDUCOES_RECEITA', 'ITR_RECEITA_RESULTANTE', 'ITR', 'ITR_MULTAS_JUROS_MORA', 'ITR_DIVIDA_ATIVA', 'ITR_MULTAS_JUROS_MORA_DIVIDA_ATIVA', 'ITR_DEDUCOES_RECEITA', 'RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS', 'COTA_PARTE_FPM', 'COTA_PARTE_FPM_PARCELA_CF_ART_159_I_ALINEA_B', 'COTA_PARTE_FPM_PARCELA_CF_ART_159_I_ALINEA_D', 'COTA_PARTE_FPM_PARCELA_CF_ART_159_I_ALINEA_E', 'COTA_PARTE_ICMS', 'ICMS_DESONERACAO_LC_87_1996', 'COTA_PARTE_IPI_EXPORTACAO', 'COTA_PARTE_ITR', 'COTA_PARTE_IPVA', 'COTA_PARTE_IOF_OURO', 'TOTAL_RECEITA_IMPOSTOS', 'RECEITA_APLICACAO_FINANCEIRA', 'RECEITA_TRANSFERENCIAS_FNDE', 'TRANSFERENCIAS_SALARIO_EDUCACAO', 'TRANSFERENCIAS_DIRETAS_PDDE', 'TRANSFERENCIAS_DIRETAS_PNAE', 'TRANSFERENCIAS_DIRETAS_PNATE', 'OUTRAS_TRANSFERENCIAS_FNDE', 'APLICACAO_FINANCEIRA_FNDE', 'RECEITA_TRANSFERENCIAS_CONVENIOS', 'TRANSFERENCIAS_CONVENIOS', 'APLICACAO_FINANCEIRA_CONVENIOS', 'RECEITA_OPERACOES_CREDITO', 'OUTRAS_RECEITAS_FINANCIAMENTO_ENSINO', 'TOTAL_RECEITAS_ADICIONAIS_FINANCIAMENTO_ENSINO', 'RECEITAS_DESTINADAS_AO_FUNDEB', 'COTA_PARTE_FPM_DESTINADA_AO_FUNDEB', 'COTA_PARTE_ICMS_DESTINADA_AO_FUNDEB', 'ICMS_DESONERACAO_DESTINADA_AO_FUNDEB', 'COTA_PARTE_IPI_EXPORTACAO_DESTINADA_AO_FUNDEB', 'COTA_PARTE_ITR_OU_ITR_ARRECADADOS_DESTINADOS_AO_FUNDEB', 'COTA_PARTE_IPVA_DESTINADA_AO_FUNDEB', 'RECEITAS_RECEBIDAS_DO_FUNDEB', 'TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB', 'COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB', 'RECEITA_DE_APLICACAO_FINANCEIRA_DOS_RECURSOS_DO_FUNDEB', 'RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB', 'IMPOSTOS_E_TRANSFERENCIAS_DESTINADAS_MDE');

-- CreateEnum
CREATE TYPE "ItemDespesaTipos1516" AS ENUM ('FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO', 'FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO_EDUCACAO_INFANTIL', 'FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO_ENSINO_FUNDAMENTAL', 'FUNDEB_OUTRAS_DESPESAS', 'FUNDEB_OUTRAS_DESPESAS_EDUCACAO_INFANTIL', 'FUNDEB_OUTRAS_DESPESAS_ENSINO_FUNDAMENTAL', 'FUNDEB_TOTAL_DESPESAS_FUNDEB', 'MDE_DESPESAS_EDUCACAO_INFANTIL', 'MDE_DESPESAS_EDUCACAO_INFANTIL_CRECHE', 'MDE_EDUCACAO_INFANTIL_CRECHE_DESPESAS_CUSTEADAS_FUNDEB', 'MDE_EDUCACAO_INFANTIL_CRECHE_DESPESAS_CUSTEADAS_OUTROS_IMPOSTOS', 'MDE_DESPESAS_EDUCACAO_INFANTIL_PRE_ESCOLA', 'MDE_EDUCACAO_INFANTIL_PRE_ESCOLA_DESPESAS_CUSTEADAS_FUNDEB', 'MDE_EDUCACAO_INFANTIL_PRE_ESCOLA_DESPESAS_CUSTEADAS_IMPOSTOS', 'MDE_DESPESAS_ENSINO_FUNDAMENTAL', 'MDE_ENSINO_FUNDAMENTAL_DESPESAS_CUSTEADAS_FUNDEB', 'MDE_ENSINO_FUNDAMENTAL_DESPESAS_CUSTEADAS_OUTROS_IMPOSTOS', 'MDE_DESPESAS_ENSINO_MEDIO', 'MDE_DESPESAS_ENSINO_SUPERIOR', 'MDE_DESPESAS_ENSINO_PROFISSIONAL_NAO_INTEGRADO_ENSINO_REGULAR', 'MDE_OUTRAS_DESPESAS', 'MDE_TOTAL_DESPESAS_ACOES_TIPICAS', 'DESPESAS_CUSTEADAS_APLICACAO_FINANCEIRA_VINCULADAS_ENSINO', 'DESPESAS_CUSTEADAS_CONTRIBUICAO_SOCIAL_SALARIO_EDUCACAO', 'DESPESAS_CUSTEADAS_OPERACOES_CREDITO', 'DESPESAS_CUSTEADAS_OUTRAS_RECEITAS_FINANCIAMENTO_ENSINO', 'TOTAL_OUTRAS_DESPESAS_CUSTEADAS_FINANCIAMENTO_ENSINO', 'TOTAL_GERAL_DESPESAS_MDE');

-- CreateEnum
CREATE TYPE "DeducoesFinsLimiteFundebTipo1516" AS ENUM ('RESTOS_A_PAGAR_SEM_DISPONIBILIDADE_FINANCEIRA', 'RESTOS_A_PAGAR_SEM_DISPONIBILIDADE_FINANCEIRA_60_PORCENTO', 'RESTOS_A_PAGAR_SEM_DISPONIBILIDADE_FINANCEIRA_40_PORCENTO', 'DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR', 'DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR_60_PORCENTO', 'DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR_40_PORCENTO', 'TOTAL_DEDUCOES_PARA_FINS_LIMITE');

-- CreateEnum
CREATE TYPE "IndicadoresFundebTipo1516" AS ENUM ('TOTAL_DE_DESPESAS_FUNDEB_PARA_FINS_DE_LIMITE', 'MINIMO_60_PORCENTO_FUNDEB_REMUNERACAO_MAGISTERIO', 'MAXIMO_40_PORCENTO_DESPESAS_MDE', 'MAXIMO_5_PORCENTO_NAO_APLICADO_NO_EXERCICIO');

-- CreateEnum
CREATE TYPE "ControleRecursosNoExercicioSubsequenteTipo1516" AS ENUM ('RECURSOS_RECEBIDOS_FUNDEB_NAO_UTILIZADOS', 'DESPESAS_CUSTEADAS_C_SALDO_FUNDEB_N_UTILIZADOS_1_TRIM_ATUAL');

-- CreateEnum
CREATE TYPE "DeducoesParaFinsDeLimitesConstitucionalTipo1516" AS ENUM ('RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB', 'DESPESAS_CUSTEADAS_A_COMPLEMENTACAO_DO_FUNDEB_NO_EXERCICIO', 'RECEITA_DE_APLICACAO_FINANCEIRA_DOS_RECURSOS_DO_FUNDEB_ATE_BIM', 'DESPESAS_CUSTEADAS_SUPERAVIT_FINANCEIRO_DO_EXERCICIO_ANTERIOR', 'DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR_OUTROS_IMPOSTOS', 'RESTOS_A_PAGAR_INSCRITOS_SEM_DISPONIBILIDADE_FINANCEIRA', 'CANCELAMENTO_RESTOS_PAGAR_INSCRITOS_DISPONIBILIDADE_FINANCEIRA', 'TOTAL_DE_DEDUCOES_PARA_FINS_DE_LIMITE_CONSTITUCIONAL', 'TOTAL_DE_DESPESAS_PARA_FINS_DE_LIMITE', 'MINIMO_DE_25_PORCENTO_DAS_RECEITAS_RESULTANTES_DE_IMPOSTOS_MDE');

-- CreateEnum
CREATE TYPE "FluxoFinanceiroDeRecursosFundebTipo1516" AS ENUM ('SALDO_FINANCEIRO_31_DE_DEZEMBRO_ANO_ANTERIOR', 'INGRESSO_RECURSOS_ATE_BIM', 'PAGAMENTOS_EFETUADOS_ATE_BIM', 'ORCAMENTO_DO_EXERCICIO', 'RESTOS_A_PAGAR', 'RECEITA_APLICACAO_FINANCEIRA_DOS_RECURSOS_ATE_BIM', 'SALDO_FINANCEIRO_NO_EXERCICIO_ATUAL');

-- CreateEnum
CREATE TYPE "RestosAPagarInscritosDisponibilidadesFinanceiraTipo1516" AS ENUM ('RESTOS_A_PAGAR_DE_DESPESA_MDE', 'EXECUTADAS_COM_RECURSOS_DE_IMPOSTOS_ENSINO', 'EXECUTADAS_COM_RECURSOS_FUNDEB');

-- DropForeignKey
ALTER TABLE "ControleRecursosNoExercicioSubsequente1516e1920" DROP CONSTRAINT "ControleRecursosNoExercicioSubsequente1516e1920_relatorioM_fkey";

-- DropForeignKey
ALTER TABLE "DeducoesFinsLimiteFundeb1516e1920" DROP CONSTRAINT "DeducoesFinsLimiteFundeb1516e1920_relatorioMunicialId_fkey";

-- DropForeignKey
ALTER TABLE "DeducoesParaFinsDeLimitesConstitucional1516e1920" DROP CONSTRAINT "DeducoesParaFinsDeLimitesConstitucional1516e1920_relatorio_fkey";

-- DropForeignKey
ALTER TABLE "Despesa1516e1920" DROP CONSTRAINT "Despesa1516e1920_relatorioMunicialId_fkey";

-- DropForeignKey
ALTER TABLE "FluxoFinanceiroDeRecursosFundeb1516e1920" DROP CONSTRAINT "FluxoFinanceiroDeRecursosFundeb1516e1920_relatorioMunicial_fkey";

-- DropForeignKey
ALTER TABLE "IndicadoresFundeb1516e1920" DROP CONSTRAINT "IndicadoresFundeb1516e1920_relatorioMunicialId_fkey";

-- DropForeignKey
ALTER TABLE "Receita1516e1920" DROP CONSTRAINT "Receita1516e1920_relatorioMunicialId_fkey";

-- DropForeignKey
ALTER TABLE "RestosAPagarInscritosDisponibilidadesFinanceira1516e1920" DROP CONSTRAINT "RestosAPagarInscritosDisponibilidadesFinanceira1516e1920_r_fkey";

-- DropTable
DROP TABLE "ControleRecursosNoExercicioSubsequente1516e1920";

-- DropTable
DROP TABLE "DeducoesFinsLimiteFundeb1516e1920";

-- DropTable
DROP TABLE "DeducoesParaFinsDeLimitesConstitucional1516e1920";

-- DropTable
DROP TABLE "Despesa1516e1920";

-- DropTable
DROP TABLE "FluxoFinanceiroDeRecursosFundeb1516e1920";

-- DropTable
DROP TABLE "IndicadoresFundeb1516e1920";

-- DropTable
DROP TABLE "Receita1516e1920";

-- DropTable
DROP TABLE "RelatorioMunicipal1516e1920";

-- DropTable
DROP TABLE "RestosAPagarInscritosDisponibilidadesFinanceira1516e1920";

-- DropEnum
DROP TYPE "ControleRecursosNoExercicioSubsequenteTipo1516e1920";

-- DropEnum
DROP TYPE "DeducoesFinsLimiteFundebTipo1516e1920";

-- DropEnum
DROP TYPE "DeducoesParaFinsDeLimitesConstitucionalTipo1516e1920";

-- DropEnum
DROP TYPE "FluxoFinanceiroDeRecursosFundebTipo1516e1920";

-- DropEnum
DROP TYPE "IndicadoresFundebTipo1516e1920";

-- DropEnum
DROP TYPE "ItemDespesaTipos1516e1920";

-- DropEnum
DROP TYPE "ItemReceitaTipos1516e1920";

-- DropEnum
DROP TYPE "RestosAPagarInscritosDisponibilidadesFinanceiraTipo1516e1920";

-- CreateTable
CREATE TABLE "RelatorioMunicipal1516" (
    "id" SERIAL NOT NULL,
    "ano" TEXT NOT NULL,
    "codigoMunicipio" TEXT NOT NULL,

    CONSTRAINT "RelatorioMunicipal1516_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Receita1516" (
    "id" SERIAL NOT NULL,
    "tipo" "ItemReceitaTipos1516" NOT NULL,
    "previsaoInicial" DOUBLE PRECISION NOT NULL,
    "previsaoAtualizada" DOUBLE PRECISION NOT NULL,
    "receitasRealizadaAteBimestre" DOUBLE PRECISION NOT NULL,
    "percentual" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "Receita1516_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Despesa1516" (
    "id" SERIAL NOT NULL,
    "tipo" "ItemDespesaTipos1516" NOT NULL,
    "dotacaoInicial" DOUBLE PRECISION NOT NULL,
    "dotacaoAtualizada" DOUBLE PRECISION NOT NULL,
    "despesasEmpenhadasAteBimestre" DOUBLE PRECISION NOT NULL,
    "despesasEmpenhadasPercentual" DOUBLE PRECISION NOT NULL,
    "despesasLiquidadasAteBimestre" DOUBLE PRECISION NOT NULL,
    "despesasLiquidadasPercentual" DOUBLE PRECISION NOT NULL,
    "inscritasRestosPagar" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "Despesa1516_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeducoesFinsLimiteFundeb1516" (
    "id" SERIAL NOT NULL,
    "tipo" "DeducoesFinsLimiteFundebTipo1516" NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "DeducoesFinsLimiteFundeb1516_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IndicadoresFundeb1516" (
    "id" SERIAL NOT NULL,
    "tipo" "IndicadoresFundebTipo1516" NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "IndicadoresFundeb1516_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ControleRecursosNoExercicioSubsequente1516" (
    "id" SERIAL NOT NULL,
    "tipo" "ControleRecursosNoExercicioSubsequenteTipo1516" NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "ControleRecursosNoExercicioSubsequente1516_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeducoesParaFinsDeLimitesConstitucional1516" (
    "id" SERIAL NOT NULL,
    "tipo" "DeducoesParaFinsDeLimitesConstitucionalTipo1516" NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "DeducoesParaFinsDeLimitesConstitucional1516_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FluxoFinanceiroDeRecursosFundeb1516" (
    "id" SERIAL NOT NULL,
    "tipo" "FluxoFinanceiroDeRecursosFundebTipo1516" NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "FluxoFinanceiroDeRecursosFundeb1516_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RestosAPagarInscritosDisponibilidadesFinanceira1516" (
    "id" SERIAL NOT NULL,
    "tipo" "RestosAPagarInscritosDisponibilidadesFinanceiraTipo1516" NOT NULL,
    "saldoAteBimestre" DOUBLE PRECISION NOT NULL,
    "canceladoNoAno" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "RestosAPagarInscritosDisponibilidadesFinanceira1516_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Receita1516_relatorioMunicialId_tipo_key" ON "Receita1516"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "Despesa1516_relatorioMunicialId_tipo_key" ON "Despesa1516"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "DeducoesFinsLimiteFundeb1516_relatorioMunicialId_tipo_key" ON "DeducoesFinsLimiteFundeb1516"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "IndicadoresFundeb1516_relatorioMunicialId_tipo_key" ON "IndicadoresFundeb1516"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "ControleRecursosNoExercicioSubsequente1516_relatorioMunicia_key" ON "ControleRecursosNoExercicioSubsequente1516"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "DeducoesParaFinsDeLimitesConstitucional1516_relatorioMunici_key" ON "DeducoesParaFinsDeLimitesConstitucional1516"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "FluxoFinanceiroDeRecursosFundeb1516_relatorioMunicialId_tip_key" ON "FluxoFinanceiroDeRecursosFundeb1516"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "RestosAPagarInscritosDisponibilidadesFinanceira1516_relator_key" ON "RestosAPagarInscritosDisponibilidadesFinanceira1516"("relatorioMunicialId", "tipo");

-- AddForeignKey
ALTER TABLE "Receita1516" ADD CONSTRAINT "Receita1516_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal1516"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Despesa1516" ADD CONSTRAINT "Despesa1516_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal1516"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeducoesFinsLimiteFundeb1516" ADD CONSTRAINT "DeducoesFinsLimiteFundeb1516_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal1516"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndicadoresFundeb1516" ADD CONSTRAINT "IndicadoresFundeb1516_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal1516"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ControleRecursosNoExercicioSubsequente1516" ADD CONSTRAINT "ControleRecursosNoExercicioSubsequente1516_relatorioMunici_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal1516"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeducoesParaFinsDeLimitesConstitucional1516" ADD CONSTRAINT "DeducoesParaFinsDeLimitesConstitucional1516_relatorioMunic_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal1516"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FluxoFinanceiroDeRecursosFundeb1516" ADD CONSTRAINT "FluxoFinanceiroDeRecursosFundeb1516_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal1516"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestosAPagarInscritosDisponibilidadesFinanceira1516" ADD CONSTRAINT "RestosAPagarInscritosDisponibilidadesFinanceira1516_relato_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal1516"("id") ON DELETE CASCADE ON UPDATE CASCADE;
