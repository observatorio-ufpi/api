-- CreateIndex
CREATE INDEX "DadoEducacaoBasicaApos23_tipo_ano_localidade_id_idx" ON "DadoEducacaoBasicaApos23"("tipo", "ano", "localidade_id");

-- CreateIndex
CREATE INDEX "DadoEducacaoBasicaApos23_ano_idx" ON "DadoEducacaoBasicaApos23"("ano");

-- CreateIndex
CREATE INDEX "DadoEducacaoBasicaApos23_localidade_id_idx" ON "DadoEducacaoBasicaApos23"("localidade_id");

-- CreateIndex
CREATE INDEX "DadoEducacaoBasicaApos23_dependencia_id_idx" ON "DadoEducacaoBasicaApos23"("dependencia_id");

-- CreateIndex
CREATE INDEX "DadoEducacaoBasicaApos23_etapa_id_idx" ON "DadoEducacaoBasicaApos23"("etapa_id");

-- CreateIndex
CREATE INDEX "DadoEducacaoBasicaApos23_localizacao_id_idx" ON "DadoEducacaoBasicaApos23"("localizacao_id");

-- CreateIndex
CREATE INDEX "DadoEducacaoBasicaApos23_entidade_id_idx" ON "DadoEducacaoBasicaApos23"("entidade_id");
