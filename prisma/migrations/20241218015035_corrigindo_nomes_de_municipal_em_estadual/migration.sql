/*
  Warnings:

  - You are about to drop the column `relatorioMunicialId` on the `DespesasCusteadasFundebExercicioEstadual21` table. All the data in the column will be lost.
  - You are about to drop the column `relatorioMunicipalId` on the `ReceitaEstadual21` table. All the data in the column will be lost.
  - You are about to drop the column `relatorioMunicialId` on the `RecursosRecebidosNaoUtilizadosEstadual21` table. All the data in the column will be lost.
  - You are about to drop the `RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEstadua` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[relatorioEstadualId,tipo]` on the table `DespesasCusteadasFundebExercicioEstadual21` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[relatorioEstadualId,tipo]` on the table `ReceitaEstadual21` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[relatorioEstadualId,tipo]` on the table `RecursosRecebidosNaoUtilizadosEstadual21` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `relatorioEstadualId` to the `DespesasCusteadasFundebExercicioEstadual21` table without a default value. This is not possible if the table is not empty.
  - Added the required column `relatorioEstadualId` to the `ReceitaEstadual21` table without a default value. This is not possible if the table is not empty.
  - Added the required column `relatorioEstadualId` to the `RecursosRecebidosNaoUtilizadosEstadual21` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DespesasCusteadasFundebExercicioEstadual21" DROP CONSTRAINT "DespesasCusteadasFundebExercicioEstadual21_relatorioMunici_fkey";

-- DropForeignKey
ALTER TABLE "ReceitaEstadual21" DROP CONSTRAINT "ReceitaEstadual21_relatorioMunicipalId_fkey";

-- DropForeignKey
ALTER TABLE "RecursosRecebidosNaoUtilizadosEstadual21" DROP CONSTRAINT "RecursosRecebidosNaoUtilizadosEstadual21_relatorioMunicial_fkey";

-- DropForeignKey
ALTER TABLE "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEstadua" DROP CONSTRAINT "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEs_fkey";

-- DropIndex
DROP INDEX "DespesasCusteadasFundebExercicioEstadual21_relatorioMunicia_key";

-- DropIndex
DROP INDEX "ReceitaEstadual21_relatorioMunicipalId_tipo_key";

-- DropIndex
DROP INDEX "RecursosRecebidosNaoUtilizadosEstadual21_relatorioMunicialI_key";

-- AlterTable
ALTER TABLE "DespesasCusteadasFundebExercicioEstadual21" DROP COLUMN "relatorioMunicialId",
ADD COLUMN     "relatorioEstadualId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ReceitaEstadual21" DROP COLUMN "relatorioMunicipalId",
ADD COLUMN     "relatorioEstadualId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "RecursosRecebidosNaoUtilizadosEstadual21" DROP COLUMN "relatorioMunicialId",
ADD COLUMN     "relatorioEstadualId" INTEGER NOT NULL;

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
CREATE UNIQUE INDEX "DespesasCusteadasFundebExercicioEstadual21_relatorioEstadua_key" ON "DespesasCusteadasFundebExercicioEstadual21"("relatorioEstadualId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "ReceitaEstadual21_relatorioEstadualId_tipo_key" ON "ReceitaEstadual21"("relatorioEstadualId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "RecursosRecebidosNaoUtilizadosEstadual21_relatorioEstadualI_key" ON "RecursosRecebidosNaoUtilizadosEstadual21"("relatorioEstadualId", "tipo");

-- AddForeignKey
ALTER TABLE "ReceitaEstadual21" ADD CONSTRAINT "ReceitaEstadual21_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES "RelatorioEstadual21"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DespesasCusteadasFundebExercicioEstadual21" ADD CONSTRAINT "DespesasCusteadasFundebExercicioEstadual21_relatorioEstadu_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES "RelatorioEstadual21"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecursosRecebidosNaoUtilizadosEstadual21" ADD CONSTRAINT "RecursosRecebidosNaoUtilizadosEstadual21_relatorioEstadual_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES "RelatorioEstadual21"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEstadual21" ADD CONSTRAINT "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEs_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES "RelatorioEstadual21"("id") ON DELETE CASCADE ON UPDATE CASCADE;
