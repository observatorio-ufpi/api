/*
  Warnings:

  - You are about to drop the column `IN_PREDIO_COMPARTILhado` on the `censo_escolar_infraestrutura` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "censo_escolar_infraestrutura" DROP COLUMN "IN_PREDIO_COMPARTILhado",
ADD COLUMN     "IN_PREDIO_COMPARTILHADO" INTEGER;
