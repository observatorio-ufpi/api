-- Índice do predicado real da API:
--   indicador + dims_canonico + ano BETWEEN + [localidade IN]
CREATE INDEX "FatoEducacao_indicador_dims_canonico_ano_localidade_id_idx"
ON "FatoEducacao" ("indicador", "dims_canonico", "ano", "localidade_id");
