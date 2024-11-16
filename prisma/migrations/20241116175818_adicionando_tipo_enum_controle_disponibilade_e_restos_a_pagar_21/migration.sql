/*
  Warnings:

  - You are about to drop the `RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEstadua` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `tipo` on the `ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadual21` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "RestosAPagarParaCumprimentoDoLimiteEstadualTipos21" AS ENUM ('RESTOS_A_PAGAR_DESPESAS_MDE', 'EXECUTADAS_RECURSOS_IMPOSTOS_TRANSFERENCIAS_IMPOSTOS', 'EXECUTADAS_RECURSOS_FUNDEB_IMPOSTOS', 'EXECUTADAS_RECURSOS_FUNDEB_COMPLEMENTACAO_UNIAO');

-- CreateEnum
CREATE TYPE "ControleDisponibilidadeFinanceiraEstadualEstadualTipos21" AS ENUM ('DISPONIBILIDADE_FINANCEIRA_EM_31_DE_DEZEMBRO_ANO_ANTERIOR', 'INGRESSO_DE_RECURSOS_ATE_O_BIM_ORCAMENTARIO', 'PAGAMENTOS_EFETUADOS_ATE_O_BIM_ORCAMENTARIO_E_RESTOS_A_PAGAR', 'DISPONIBILIDADE_FINANCEIRA_ATE_O_BIM', 'AJUSTES_POSITIVOS_RETENCOES_E_OUTROS_VALORES_EXTRAORCAMENTARIOS', 'AJUSTES_NEGATIVOS_OUTROS_VALORES_EXTRAORCAMENTARIOS', 'SALDO_FINANCEIRO_CONCILIADO_SALDO_BANCARIO');

-- AlterEnum
ALTER TYPE "ItemReceitaEstadualTipos21" ADD VALUE 'COMPENSACOES_FINANCEIRAS_TRANSFERENCIAS_MUNICIPIOS';

-- DropForeignKey
ALTER TABLE "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEstadua" DROP CONSTRAINT "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEs_fkey";

-- AlterTable
ALTER TABLE "ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadual21" DROP COLUMN "tipo",
ADD COLUMN     "tipo" "ControleDisponibilidadeFinanceiraEstadualEstadualTipos21" NOT NULL;

-- DropTable
DROP TABLE "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEstadua";

-- CreateTable
CREATE TABLE "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEstadual21" (
    "id" SERIAL NOT NULL,
    "tipo" "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebTipos21" NOT NULL,
    "saldoInicial" DOUBLE PRECISION NOT NULL,
    "rpLiquidados" DOUBLE PRECISION NOT NULL,
    "rpPagos" DOUBLE PRECISION NOT NULL,
    "rpCancelados" DOUBLE PRECISION NOT NULL,
    "saldoFinal" DOUBLE PRECISION NOT NULL,
    "relatorioEstadualId" INTEGER NOT NULL,

    CONSTRAINT "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEst_key" ON "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEstadual21"("relatorioEstadualId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadua_key" ON "ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadual21"("relatorioEstadualId", "tipo");

-- AddForeignKey
ALTER TABLE "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEstadual21" ADD CONSTRAINT "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEs_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES "RelatorioEstadual21"("id") ON DELETE CASCADE ON UPDATE CASCADE;
