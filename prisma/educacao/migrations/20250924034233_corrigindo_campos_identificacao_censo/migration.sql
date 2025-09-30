/*
  Warnings:

  - You are about to drop the column `NO_ESCOLA` on the `censo_escolar_infraestrutura` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "censo_escolar_infraestrutura" DROP COLUMN "NO_ESCOLA",
ADD COLUMN     "NO_ENTIDADE" TEXT;
