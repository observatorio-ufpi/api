/*
  Warnings:

  - You are about to drop the `ControleUtilizacaoRecursos1012` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DeducoesFundebMagisterio1012` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DeducoesParaFinsDeLimitesConstitucional1012` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Despesa1012` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FluxoFinanceiroDeRecursos1012` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Receita1012` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RelatorioMunicipal1012` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RestosAPagarInscritosDisponibilidadesFinanceira1012` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ReceitaTipos0912" AS ENUM ('RECEITAS_DE_IMPOSTO', 'RECEITAS_FINANCIAMENTO_DO_ENSINO', 'RECEITAS_DO_FUNDEB', 'RECEITAS_ACOES_MDE');

-- CreateEnum
CREATE TYPE "DespesaTipos0912" AS ENUM ('DESPESAS_DO_FUNDEB', 'DESPESAS_ACOES_MDE', 'DESPESAS_CUSTEADAS_RECEITAS_ADICIONAIS_FINANCIAMENTO_ENSINO');

-- CreateEnum
CREATE TYPE "ItemReceitaTipos0912" AS ENUM ('RECEITA_DE_IMPOSTOS', 'IPTU_RECEITA_RESULTANTE', 'IPTU', 'IPTU_MULTAS_JUROS_MORA', 'IPTU_DIVIDA_ATIVA', 'IPTU_MULTAS_JUROS_MORA_DIVIDA_ATIVA', 'IPTU_DEDUCOES_RECEITA', 'ITBI_RECEITA_RESULTANTE', 'ITBI', 'ITBI_MULTAS_JUROS_MORA', 'ITBI_DIVIDA_ATIVA', 'ITBI_MULTAS_JUROS_MORA_DIVIDA_ATIVA', 'ITBI_DEDUCOES_RECEITA', 'ISS_RECEITA_RESULTANTE', 'ISS', 'ISS_MULTAS_JUROS_MORA', 'ISS_DIVIDA_ATIVA', 'ISS_MULTAS_JUROS_MORA_DIVIDA_ATIVA', 'ISS_DEDUCOES_RECEITA', 'IRRF_RECEITA_RESULTANTE', 'IRRF', 'IRRF_MULTAS_JUROS_MORA', 'IRRF_DIVIDA_ATIVA', 'IRRF_MULTAS_JUROS_MORA_DIVIDA_ATIVA', 'IRRF_DEDUCOES_RECEITA', 'ITR_RECEITA_RESULTANTE', 'ITR', 'ITR_MULTAS_JUROS_MORA', 'ITR_DIVIDA_ATIVA', 'ITR_MULTAS_JUROS_MORA_DIVIDA_ATIVA', 'ITR_DEDUCOES_RECEITA', 'RECEITA_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAIS', 'COTA_PARTE_FPM', 'COTA_PARTE_FPM_PARCELA_CF_ART_159_I_ALINEA_B', 'COTA_PARTE_FPM_PARCELA_CF_ART_159_I_ALINEA_D', 'COTA_PARTE_ICMS', 'ICMS_DESONERACAO_LC_87_1996', 'COTA_PARTE_IPI_EXPORTACAO', 'COTA_PARTE_ITR', 'COTA_PARTE_IPVA', 'COTA_PARTE_IOF_OURO', 'TOTAL_RECEITA_IMPOSTOS', 'RECEITA_APLICACAO_FINANCEIRA', 'RECEITA_TRANSFERENCIAS_FNDE', 'TRANSFERENCIAS_SALARIO_EDUCACAO', 'OUTRAS_TRANSFERENCIAS_FNDE', 'APLICACAO_FINANCEIRA_FNDE', 'RECEITA_TRANSFERENCIAS_CONVENIOS', 'TRANSFERENCIAS_CONVENIOS', 'APLICACAO_FINANCEIRA_CONVENIOS', 'RECEITA_OPERACOES_CREDITO', 'OUTRAS_RECEITAS_FINANCIAMENTO_ENSINO', 'TOTAL_RECEITAS_ADICIONAIS_FINANCIAMENTO_ENSINO', 'RECEITAS_DESTINADAS_AO_FUNDEB', 'COTA_PARTE_FPM_DESTINADA_AO_FUNDEB', 'COTA_PARTE_ICMS_DESTINADA_AO_FUNDEB', 'ICMS_DESONERACAO_DESTINADA_AO_FUNDEB', 'COTA_PARTE_IPI_EXPORTACAO_DESTINADA_AO_FUNDEB', 'COTA_PARTE_ITR_OU_ITR_ARRECADADOS_DESTINADOS_AO_FUNDEB', 'COTA_PARTE_IPVA_DESTINADA_AO_FUNDEB', 'RECEITAS_RECEBIDAS_DO_FUNDEB', 'TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEB', 'COMPLEMENTACAO_DA_UNIAO_AO_FUNDEB', 'RECEITA_DE_APLICACAO_FINANCEIRA_DOS_RECURSOS_DO_FUNDEB', 'RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB', 'IMPOSTOS_E_TRANSFERENCIAS_DESTINADAS_MDE');

-- CreateEnum
CREATE TYPE "ItemDespesaTipos0912" AS ENUM ('FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO', 'FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO_EDUCACAO_INFANTIL', 'FUNDEB_PAGAMENTO_PROFISSIONAIS_MAGISTERIO_ENSINO_FUNDAMENTAL', 'FUNDEB_OUTRAS_DESPESAS', 'FUNDEB_OUTRAS_DESPESAS_EDUCACAO_INFANTIL', 'FUNDEB_OUTRAS_DESPESAS_ENSINO_FUNDAMENTAL', 'FUNDEB_TOTAL_DESPESAS_FUNDEB', 'MDE_DESPESAS_EDUCACAO_INFANTIL', 'MDE_EDUCACAO_INFANTIL_DESPESAS_CUSTEADAS_FUNDEB', 'MDE_EDUCACAO_INFANTIL_DESPESAS_CUSTEADAS_OUTROS_IMPOSTOS', 'MDE_DESPESAS_ENSINO_FUNDAMENTAL', 'MDE_ENSINO_FUNDAMENTAL_DESPESAS_CUSTEADAS_FUNDEB', 'MDE_ENSINO_FUNDAMENTAL_DESPESAS_CUSTEADAS_OUTROS_IMPOSTOS', 'MDE_DESPESAS_ENSINO_MEDIO', 'MDE_DESPESAS_ENSINO_SUPERIOR', 'MDE_DESPESAS_ENSINO_PROFISSIONAL_NAO_INTEGRADO_ENSINO_REGULAR', 'MDE_OUTRAS_DESPESAS', 'MDE_TOTAL_DESPESAS_ACOES_TIPICAS', 'DESPESAS_CUSTEADAS_APLICACAO_FINANCEIRA_VINCULADAS_ENSINO', 'DESPESAS_CUSTEADAS_CONTRIBUICAO_SOCIAL_SALARIO_EDUCACAO', 'DESPESAS_CUSTEADAS_OPERACOES_CREDITO', 'DESPESAS_CUSTEADAS_OUTRAS_RECEITAS_FINANCIAMENTO_ENSINO', 'TOTAL_OUTRAS_DESPESAS_CUSTEADAS_FINANCIAMENTO_ENSINO', 'TOTAL_GERAL_DESPESAS_MDE');

-- CreateEnum
CREATE TYPE "DeducoesFundebMagisterioTipo0912" AS ENUM ('RESTOS_A_PAGAR_SEM_DISPONIBILIDADE_FINANCEIRA_FUNDEB', 'DESPESAS_SUPERAVIT_FINANCEIRO_EXERCICIO_ANTERIOR_FUNDEB', 'TOTAL_DEDUCOES_PARA_FINS_LIMITE_FUNDEB', 'MINIMO_60_PORCENTO_FUNDEB_REMUNERACAO_MAGISTERIO_EDUCACAO');

-- CreateEnum
CREATE TYPE "ControleUtilizacaoRecursosTipo0912" AS ENUM ('RECURSOS_NAO_UTILIZADOS_FUNDEB_ANO_ANTERIOR', 'DESPESAS_CUSTEADAS_COM_FUNDEB_ANO_ANTERIOR_ATE_1_TRIM_ATUAL');

-- CreateEnum
CREATE TYPE "DeducoesParaFinsDeLimitesConstitucionalTipo0912" AS ENUM ('RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB', 'DESPESAS_CUSTEADAS_A_COMPLEMENTACAO_DO_FUNDEB_NO_EXERCICIO', 'RECEITA_DE_APLICACAO_FINANCEIRA_DOS_RECURSOS_DO_FUNDEB_ATE_BIM', 'DESPESAS_CUSTEADAS_SUPERAVIT_FINANCEIRO_DO_EXERCICIO_ANTERIOR', 'DESPESAS_CUSTEADAS_SUPERAVIT_EXERCICIO_ANTERIOR_OUTROS_IMPOSTOS', 'RESTOS_A_PAGAR_INSCRITOS_SEM_DISPONIBILIDADE_FINANCEIRA', 'CANCELAMENTO_RESTOS_PAGAR_INSCRITOS_DISPONIBILIDADE_FINANCEIRA', 'TOTAL_DE_DEDUCOES_PARA_FINS_DE_LIMITE_CONSTITUCIONAL', 'TOTAL_DE_DESPESAS_PARA_FINS_DE_LIMITE', 'MINIMO_DE_25_PORCENTO_DAS_RECEITAS_RESULTANTES_DE_IMPOSTOS_MDE');

-- CreateEnum
CREATE TYPE "RestosAPagarInscritosDisponibilidadesFinanceiraTipo0912" AS ENUM ('RESTOS_A_PAGAR_DE_DESPESA_MDE');

-- CreateEnum
CREATE TYPE "FluxoFinanceiroDeRecursosTipos0912" AS ENUM ('SALDO_FINANCEIRO_31_DE_DEZEMBRO_ANO_ANTERIOR', 'INGRESSO_RECURSOS_ATE_BIM', 'PAGAMENTOS_EFETUADOS_ATE_BIM', 'RECEITA_APLICACAO_FINANCEIRA_DOS_RECURSOS_ATE_BIM', 'SALDO_FINANCEIRO_NO_EXERCICIO_ATUAL');

-- DropForeignKey
ALTER TABLE "ControleUtilizacaoRecursos1012" DROP CONSTRAINT "ControleUtilizacaoRecursos1012_relatorioMunicialId_fkey";

-- DropForeignKey
ALTER TABLE "DeducoesFundebMagisterio1012" DROP CONSTRAINT "DeducoesFundebMagisterio1012_relatorioMunicialId_fkey";

-- DropForeignKey
ALTER TABLE "DeducoesParaFinsDeLimitesConstitucional1012" DROP CONSTRAINT "DeducoesParaFinsDeLimitesConstitucional1012_relatorioMunic_fkey";

-- DropForeignKey
ALTER TABLE "Despesa1012" DROP CONSTRAINT "Despesa1012_relatorioMunicialId_fkey";

-- DropForeignKey
ALTER TABLE "FluxoFinanceiroDeRecursos1012" DROP CONSTRAINT "FluxoFinanceiroDeRecursos1012_relatorioMunicialId_fkey";

-- DropForeignKey
ALTER TABLE "Receita1012" DROP CONSTRAINT "Receita1012_relatorioMunicialId_fkey";

-- DropForeignKey
ALTER TABLE "RestosAPagarInscritosDisponibilidadesFinanceira1012" DROP CONSTRAINT "RestosAPagarInscritosDisponibilidadesFinanceira1012_relato_fkey";

-- DropTable
DROP TABLE "ControleUtilizacaoRecursos1012";

-- DropTable
DROP TABLE "DeducoesFundebMagisterio1012";

-- DropTable
DROP TABLE "DeducoesParaFinsDeLimitesConstitucional1012";

-- DropTable
DROP TABLE "Despesa1012";

-- DropTable
DROP TABLE "FluxoFinanceiroDeRecursos1012";

-- DropTable
DROP TABLE "Receita1012";

-- DropTable
DROP TABLE "RelatorioMunicipal1012";

-- DropTable
DROP TABLE "RestosAPagarInscritosDisponibilidadesFinanceira1012";

-- DropEnum
DROP TYPE "ControleUtilizacaoRecursosTipo1012";

-- DropEnum
DROP TYPE "DeducoesFundebMagisterioTipo1012";

-- DropEnum
DROP TYPE "DeducoesParaFinsDeLimitesConstitucionalTipo1012";

-- DropEnum
DROP TYPE "DespesaTipos1012";

-- DropEnum
DROP TYPE "FluxoFinanceiroDeRecursosTipos1012";

-- DropEnum
DROP TYPE "ItemDespesaTipos1012";

-- DropEnum
DROP TYPE "ItemReceitaTipos1012";

-- DropEnum
DROP TYPE "ReceitaTipos1012";

-- DropEnum
DROP TYPE "RestosAPagarInscritosDisponibilidadesFinanceiraTipo1012";

-- CreateTable
CREATE TABLE "RelatorioMunicipal0912" (
    "id" SERIAL NOT NULL,
    "ano" TEXT NOT NULL,
    "codigoMunicipio" TEXT NOT NULL,

    CONSTRAINT "RelatorioMunicipal0912_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Receita0912" (
    "id" SERIAL NOT NULL,
    "tipo" "ItemReceitaTipos0912" NOT NULL,
    "previsaoInicial" DOUBLE PRECISION NOT NULL,
    "previsaoAtualizada" DOUBLE PRECISION NOT NULL,
    "receitasRealizadaBimestre" DOUBLE PRECISION NOT NULL,
    "receitasRealizadaAteBimestre" DOUBLE PRECISION NOT NULL,
    "percentual" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "Receita0912_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Despesa0912" (
    "id" SERIAL NOT NULL,
    "tipo" "ItemDespesaTipos0912" NOT NULL,
    "dotacaoInicial" DOUBLE PRECISION NOT NULL,
    "dotacaoAtualizada" DOUBLE PRECISION NOT NULL,
    "despesasLiquidadasBimestre" DOUBLE PRECISION NOT NULL,
    "despesasLiquidadasAteBimestre" DOUBLE PRECISION NOT NULL,
    "percentual" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "Despesa0912_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeducoesFundebMagisterio0912" (
    "id" SERIAL NOT NULL,
    "tipo" "DeducoesFundebMagisterioTipo0912" NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "DeducoesFundebMagisterio0912_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ControleUtilizacaoRecursos0912" (
    "id" SERIAL NOT NULL,
    "tipo" "ControleUtilizacaoRecursosTipo0912" NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "ControleUtilizacaoRecursos0912_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeducoesParaFinsDeLimitesConstitucional0912" (
    "id" SERIAL NOT NULL,
    "tipo" "DeducoesParaFinsDeLimitesConstitucionalTipo0912" NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "DeducoesParaFinsDeLimitesConstitucional0912_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RestosAPagarInscritosDisponibilidadesFinanceira0912" (
    "id" SERIAL NOT NULL,
    "tipo" "RestosAPagarInscritosDisponibilidadesFinanceiraTipo0912" NOT NULL,
    "saldoAteBimestre" DOUBLE PRECISION NOT NULL,
    "canceladoNoAnoAtual" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "RestosAPagarInscritosDisponibilidadesFinanceira0912_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FluxoFinanceiroDeRecursos0912" (
    "id" SERIAL NOT NULL,
    "tipo" "FluxoFinanceiroDeRecursosTipos0912" NOT NULL,
    "valorFundeb" DOUBLE PRECISION NOT NULL,
    "valorFundef" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "FluxoFinanceiroDeRecursos0912_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Receita0912_relatorioMunicialId_tipo_key" ON "Receita0912"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "Despesa0912_relatorioMunicialId_tipo_key" ON "Despesa0912"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "DeducoesFundebMagisterio0912_relatorioMunicialId_tipo_key" ON "DeducoesFundebMagisterio0912"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "ControleUtilizacaoRecursos0912_relatorioMunicialId_tipo_key" ON "ControleUtilizacaoRecursos0912"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "DeducoesParaFinsDeLimitesConstitucional0912_relatorioMunici_key" ON "DeducoesParaFinsDeLimitesConstitucional0912"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "RestosAPagarInscritosDisponibilidadesFinanceira0912_relator_key" ON "RestosAPagarInscritosDisponibilidadesFinanceira0912"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "FluxoFinanceiroDeRecursos0912_relatorioMunicialId_tipo_key" ON "FluxoFinanceiroDeRecursos0912"("relatorioMunicialId", "tipo");

-- AddForeignKey
ALTER TABLE "Receita0912" ADD CONSTRAINT "Receita0912_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal0912"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Despesa0912" ADD CONSTRAINT "Despesa0912_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal0912"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeducoesFundebMagisterio0912" ADD CONSTRAINT "DeducoesFundebMagisterio0912_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal0912"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ControleUtilizacaoRecursos0912" ADD CONSTRAINT "ControleUtilizacaoRecursos0912_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal0912"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeducoesParaFinsDeLimitesConstitucional0912" ADD CONSTRAINT "DeducoesParaFinsDeLimitesConstitucional0912_relatorioMunic_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal0912"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestosAPagarInscritosDisponibilidadesFinanceira0912" ADD CONSTRAINT "RestosAPagarInscritosDisponibilidadesFinanceira0912_relato_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal0912"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FluxoFinanceiroDeRecursos0912" ADD CONSTRAINT "FluxoFinanceiroDeRecursos0912_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal0912"("id") ON DELETE CASCADE ON UPDATE CASCADE;
