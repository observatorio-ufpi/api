/*
  Warnings:

  - A unique constraint covering the columns `[tipo,ano,localidade_id]` on the table `DadoEducacaoBasica` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "DadoEducacaoBasica_tipo_ano_localidade_id_dependencia_id_et_key";

-- CreateIndex
CREATE UNIQUE INDEX "DadoEducacaoBasica_tipo_ano_localidade_id_key" ON "DadoEducacaoBasica"("tipo", "ano", "localidade_id");
