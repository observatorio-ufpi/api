/*
  Warnings:

  - You are about to drop the column `relatorioEstaduallId` on the `ControleRecursosNoExercicioSubsequenteEstadual1718` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[relatorioEstadualId,tipo]` on the table `ControleRecursosNoExercicioSubsequenteEstadual1718` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `relatorioEstadualId` to the `ControleRecursosNoExercicioSubsequenteEstadual1718` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ControleRecursosNoExercicioSubsequenteEstadual1718" DROP CONSTRAINT "ControleRecursosNoExercicioSubsequenteEstadual1718_relator_fkey";

-- DropIndex
DROP INDEX "ControleRecursosNoExercicioSubsequenteEstadual1718_relatori_key";

-- AlterTable
ALTER TABLE "ControleRecursosNoExercicioSubsequenteEstadual1718" DROP COLUMN "relatorioEstaduallId",
ADD COLUMN     "relatorioEstadualId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ControleRecursosNoExercicioSubsequenteEstadual1718_relatori_key" ON "ControleRecursosNoExercicioSubsequenteEstadual1718"("relatorioEstadualId", "tipo");

-- AddForeignKey
ALTER TABLE "ControleRecursosNoExercicioSubsequenteEstadual1718" ADD CONSTRAINT "ControleRecursosNoExercicioSubsequenteEstadual1718_relator_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES "RelatorioEstadual1718"("id") ON DELETE CASCADE ON UPDATE CASCADE;
