-- DropIndex
DROP INDEX "DadoEducacaoBasica_tipo_ano_idx";

-- DropIndex
DROP INDEX "DadoEducacaoBasica_tipo_ano_localidade_id_key";

-- CreateIndex
CREATE INDEX "DadoEducacaoBasica_tipo_ano_localidade_id_idx" ON "DadoEducacaoBasica"("tipo", "ano", "localidade_id");

-- CreateIndex
CREATE INDEX "DadoEducacaoBasica_ano_idx" ON "DadoEducacaoBasica"("ano");
