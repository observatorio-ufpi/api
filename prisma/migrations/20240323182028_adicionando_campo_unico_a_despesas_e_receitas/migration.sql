/*
  Warnings:

  - A unique constraint covering the columns `[relatorioMunicialId,tipo]` on the table `Despesa` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[relatorioMunicialId,tipo]` on the table `Receita` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Despesa_relatorioMunicialId_tipo_key" ON "Despesa"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "Receita_relatorioMunicialId_tipo_key" ON "Receita"("relatorioMunicialId", "tipo");
