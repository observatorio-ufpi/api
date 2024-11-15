/*
  Warnings:

  - The values [ICMS,ITCD,IPVA,IRRF] on the enum `ItemReceitaEstadoTipos06` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEstadua` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ItemReceitaEstadoTipos06_new" AS ENUM ('RECEITA_RESULTANTE_DE_IMPOSTOS', 'RECEITAS_DE_IMPOSTOS', 'RECEITA_RESULTANTE_DO_ICMS', 'ITEM_ICMS', 'DIVIDA_ATIVA_DO_ICMS', 'MULTAS_JUROS_MORA_OUTROS_ENCARGOS_E_DIVIDA_ATIVA_ICMS', 'PARCELA_RECEITA_RESULTANTE_ICMS_DESTINADA_FUNDEB', 'RECEITA_RESULTANTE_DE_OUTROS_IMPOSTOS', 'ITR', 'IPTU', 'ITEM_ITCD', 'ITEM_IPVA', 'ITEM_IRRF', 'ITBI', 'ISS', 'ISS_ICMS_SIMPLES', 'DIVIDA_ATIVA_DO_ITCD_IPVA_IRRF', 'MULTAS_JUROS_MORA_OUTROS_ENCARGOS_ITCD_IPVA_IRRF', 'RECEITAS_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAL', 'COTA_PARTE_FPE_85_PORCENTO', 'COTA_PARTE_FPM_100_PORCENTO', 'COTA_PARTE_ITR_100_PORCENTO', 'TRANSFERENCIA_FINANCEIRA_ICMS_DESONERACAO', 'COTA_PARTE_IPI_EXPORTACAO_85_PORCENTO', 'PARCELA_TRANSFERENCIAS_DESTINADAS_A_FORMACAO_DO_FUNDEF', 'COTA_PARTE_IOF_OURO_100_PORCENTO', 'TRANSFERENCIAS_CONSTITUCIONAIS', 'RECEITAS_VINCULADAS_AO_ENSINO', 'TRANSFERENCIAS_MULTIGOVERNAMENTAIS_DO_FUNDEF', 'TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEF', 'COMPLEMENTACAO_DA_UNIAO_AO_FUNDEF', 'TRANSFERENCIAS_DO_FNDE', 'TRANSFERENCIAS_DO_SALARIO_EDUCACAO', 'OUTRAS_TRANSFERENCIAS_DO_FNDE', 'TRANSFERENCIAS_DESTINADAS_A_PROGRAMAS_DE_EDUCACAO', 'RECEITA_DE_OPERACOES_DE_CREDITO_DESTINADAS_A_EDUCACAO', 'OUTRAS_RECEITAS_DESTINADAS_EDUCACAO', 'TOTAL_RECEITAS');
ALTER TABLE "ReceitaEstado06" ALTER COLUMN "tipo" TYPE "ItemReceitaEstadoTipos06_new" USING ("tipo"::text::"ItemReceitaEstadoTipos06_new");
ALTER TYPE "ItemReceitaEstadoTipos06" RENAME TO "ItemReceitaEstadoTipos06_old";
ALTER TYPE "ItemReceitaEstadoTipos06_new" RENAME TO "ItemReceitaEstadoTipos06";
DROP TYPE "ItemReceitaEstadoTipos06_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEstadua" DROP CONSTRAINT "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEs_fkey";

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

-- AddForeignKey
ALTER TABLE "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEstadual21" ADD CONSTRAINT "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEs_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES "RelatorioEstadual21"("id") ON DELETE CASCADE ON UPDATE CASCADE;
