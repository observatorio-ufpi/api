/*
  Warnings:

  - A unique constraint covering the columns `[codigo_ies,codigo]` on the table `CursosSuperior` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `codigo_ies` to the `CursosSuperior` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "CursosSuperior_codigo_key";

-- AlterTable
ALTER TABLE "CursosSuperior" ADD COLUMN     "codigo_ies" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CursosSuperior_codigo_ies_codigo_key" ON "CursosSuperior"("codigo_ies", "codigo");
