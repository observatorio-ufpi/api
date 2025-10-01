/*
  Warnings:

  - The `CO_MUNICIPIO` column on the `censo_escolar_infraestrutura` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `NO_MUNICIPIO` column on the `censo_escolar_infraestrutura` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "censo_escolar_infraestrutura" DROP COLUMN "CO_MUNICIPIO",
ADD COLUMN     "CO_MUNICIPIO" INTEGER,
DROP COLUMN "NO_MUNICIPIO",
ADD COLUMN     "NO_MUNICIPIO" INTEGER;
