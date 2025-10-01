/*
  Warnings:

  - Added the required column `CO_ESCOLA` to the `censo_escolar_infraestrutura` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CO_MUNICIPIO` to the `censo_escolar_infraestrutura` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CO_UF` to the `censo_escolar_infraestrutura` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "censo_escolar_infraestrutura" ADD COLUMN     "CO_ESCOLA" TEXT NOT NULL,
ADD COLUMN     "CO_MUNICIPIO" TEXT NOT NULL,
ADD COLUMN     "CO_UF" INTEGER NOT NULL,
ADD COLUMN     "NO_ESCOLA" TEXT,
ADD COLUMN     "NO_MUNICIPIO" TEXT,
ADD COLUMN     "SG_UF" TEXT,
ADD COLUMN     "TP_DEPENDENCIA" INTEGER,
ADD COLUMN     "TP_LOCALIZACAO" INTEGER;
