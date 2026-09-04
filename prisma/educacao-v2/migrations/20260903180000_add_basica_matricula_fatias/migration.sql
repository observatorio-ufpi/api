-- Fatias de matrícula (1 dimensão) com par clássico/moderno e taxonomia estável.

CREATE TABLE "educacao_v2"."basica_matricula_por_dependencia" (
    "id" SERIAL NOT NULL,
    "localidade_id" INTEGER NOT NULL,
    "ano" INTEGER NOT NULL,
    "dependencia" TEXT NOT NULL,
    "total" DECIMAL(15,2) NOT NULL,

    CONSTRAINT "basica_matricula_por_dependencia_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "educacao_v2"."basica_matricula_por_localizacao" (
    "id" SERIAL NOT NULL,
    "localidade_id" INTEGER NOT NULL,
    "ano" INTEGER NOT NULL,
    "localizacao" TEXT NOT NULL,
    "total" DECIMAL(15,2) NOT NULL,

    CONSTRAINT "basica_matricula_por_localizacao_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "educacao_v2"."basica_matricula_por_sexo" (
    "id" SERIAL NOT NULL,
    "localidade_id" INTEGER NOT NULL,
    "ano" INTEGER NOT NULL,
    "sexo" TEXT NOT NULL,
    "total" DECIMAL(15,2) NOT NULL,

    CONSTRAINT "basica_matricula_por_sexo_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "educacao_v2"."basica_matricula_por_cor_raca" (
    "id" SERIAL NOT NULL,
    "localidade_id" INTEGER NOT NULL,
    "ano" INTEGER NOT NULL,
    "cor_raca" TEXT NOT NULL,
    "total" DECIMAL(15,2) NOT NULL,

    CONSTRAINT "basica_matricula_por_cor_raca_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "bmat_dep_uk" ON "educacao_v2"."basica_matricula_por_dependencia"("localidade_id", "ano", "dependencia");
CREATE INDEX "basica_matricula_por_dependencia_localidade_id_ano_idx" ON "educacao_v2"."basica_matricula_por_dependencia"("localidade_id", "ano");
CREATE INDEX "basica_matricula_por_dependencia_ano_idx" ON "educacao_v2"."basica_matricula_por_dependencia"("ano");

CREATE UNIQUE INDEX "bmat_loc_uk" ON "educacao_v2"."basica_matricula_por_localizacao"("localidade_id", "ano", "localizacao");
CREATE INDEX "basica_matricula_por_localizacao_localidade_id_ano_idx" ON "educacao_v2"."basica_matricula_por_localizacao"("localidade_id", "ano");
CREATE INDEX "basica_matricula_por_localizacao_ano_idx" ON "educacao_v2"."basica_matricula_por_localizacao"("ano");

CREATE UNIQUE INDEX "bmat_sexo_uk" ON "educacao_v2"."basica_matricula_por_sexo"("localidade_id", "ano", "sexo");
CREATE INDEX "basica_matricula_por_sexo_localidade_id_ano_idx" ON "educacao_v2"."basica_matricula_por_sexo"("localidade_id", "ano");
CREATE INDEX "basica_matricula_por_sexo_ano_idx" ON "educacao_v2"."basica_matricula_por_sexo"("ano");

CREATE UNIQUE INDEX "bmat_cor_uk" ON "educacao_v2"."basica_matricula_por_cor_raca"("localidade_id", "ano", "cor_raca");
CREATE INDEX "basica_matricula_por_cor_raca_localidade_id_ano_idx" ON "educacao_v2"."basica_matricula_por_cor_raca"("localidade_id", "ano");
CREATE INDEX "basica_matricula_por_cor_raca_ano_idx" ON "educacao_v2"."basica_matricula_por_cor_raca"("ano");

ALTER TABLE "educacao_v2"."basica_matricula_por_dependencia"
  ADD CONSTRAINT "basica_matricula_por_dependencia_localidade_id_fkey"
  FOREIGN KEY ("localidade_id") REFERENCES "educacao_v2"."localidade"("id")
  ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "educacao_v2"."basica_matricula_por_localizacao"
  ADD CONSTRAINT "basica_matricula_por_localizacao_localidade_id_fkey"
  FOREIGN KEY ("localidade_id") REFERENCES "educacao_v2"."localidade"("id")
  ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "educacao_v2"."basica_matricula_por_sexo"
  ADD CONSTRAINT "basica_matricula_por_sexo_localidade_id_fkey"
  FOREIGN KEY ("localidade_id") REFERENCES "educacao_v2"."localidade"("id")
  ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "educacao_v2"."basica_matricula_por_cor_raca"
  ADD CONSTRAINT "basica_matricula_por_cor_raca_localidade_id_fkey"
  FOREIGN KEY ("localidade_id") REFERENCES "educacao_v2"."localidade"("id")
  ON DELETE RESTRICT ON UPDATE CASCADE;
