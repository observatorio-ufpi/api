/*
  Warnings:

  - Added the required column `valorAplicadoAtePrimQuarLimiteConst` to the `Indicador21Art25AplicacaoSuperavit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Indicador21Art25AplicacaoSuperavit" ADD COLUMN     "valorAplicadoAtePrimQuarLimiteConst" DOUBLE PRECISION NOT NULL;
