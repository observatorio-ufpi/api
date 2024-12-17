/*
  Warnings:

  - You are about to drop the `RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEstadua` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `tipo` on table `ControleDisponibilidadeFinanceiraEConciliacaoBancaria23` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEstadua" DROP CONSTRAINT "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEs_fkey";

-- AlterTable
ALTER TABLE "ControleDisponibilidadeFinanceiraEConciliacaoBancaria23" ALTER COLUMN "tipo" SET NOT NULL;

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
