/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `EtapaEnsinoBasicaApos23` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "EtapaEnsinoBasicaApos23_nome_key" ON "EtapaEnsinoBasicaApos23"("nome");
