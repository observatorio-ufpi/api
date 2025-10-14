/*
  Warnings:

  - A unique constraint covering the columns `[codigo_ibge]` on the table `Localidade` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Localidade" ADD COLUMN     "aglomerado" TEXT,
ADD COLUMN     "faixa_populacional" TEXT,
ADD COLUMN     "gerencia_regional" TEXT,
ADD COLUMN     "populacao_2022" INTEGER,
ADD COLUMN     "territorio_desenvolvimento" TEXT;

-- AlterTable
ALTER TABLE "censo_escolar_infraestrutura" ALTER COLUMN "CO_MUNICIPIO" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Localidade_codigo_ibge_key" ON "Localidade"("codigo_ibge");

-- AddForeignKey
ALTER TABLE "censo_escolar_infraestrutura" ADD CONSTRAINT "censo_escolar_infraestrutura_CO_MUNICIPIO_fkey" FOREIGN KEY ("CO_MUNICIPIO") REFERENCES "Localidade"("codigo_ibge") ON DELETE SET NULL ON UPDATE CASCADE;
