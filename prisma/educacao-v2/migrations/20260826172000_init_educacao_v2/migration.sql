-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "educacao_v2";

-- CreateTable
CREATE TABLE "educacao_v2"."localidade" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "uf" CHAR(2),
    "codigo_ibge" TEXT,
    "territorio_desenvolvimento" TEXT,
    "aglomerado" TEXT,
    "gerencia_regional" TEXT,
    "populacao_2022" INTEGER,
    "faixa_populacional" TEXT,
    "latitude" DECIMAL(18,12),
    "longitude" DECIMAL(18,12),

    CONSTRAINT "localidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "educacao_v2"."basica_matricula" (
    "id" SERIAL NOT NULL,
    "localidade_id" INTEGER NOT NULL,
    "ano" INTEGER NOT NULL,
    "total" DECIMAL(15,2) NOT NULL,

    CONSTRAINT "basica_matricula_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "educacao_v2"."basica_matricula_por_etapa" (
    "id" SERIAL NOT NULL,
    "localidade_id" INTEGER NOT NULL,
    "ano" INTEGER NOT NULL,
    "etapa" TEXT NOT NULL,
    "total" DECIMAL(15,2) NOT NULL,

    CONSTRAINT "basica_matricula_por_etapa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "educacao_v2"."basica_turma" (
    "id" SERIAL NOT NULL,
    "localidade_id" INTEGER NOT NULL,
    "ano" INTEGER NOT NULL,
    "total" DECIMAL(15,2) NOT NULL,

    CONSTRAINT "basica_turma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "educacao_v2"."basica_escola" (
    "id" SERIAL NOT NULL,
    "localidade_id" INTEGER NOT NULL,
    "ano" INTEGER NOT NULL,
    "total" DECIMAL(15,2) NOT NULL,

    CONSTRAINT "basica_escola_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "educacao_v2"."basica_funcionario" (
    "id" SERIAL NOT NULL,
    "localidade_id" INTEGER NOT NULL,
    "ano" INTEGER NOT NULL,
    "total" DECIMAL(15,2) NOT NULL,

    CONSTRAINT "basica_funcionario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "educacao_v2"."basica_docente" (
    "id" SERIAL NOT NULL,
    "localidade_id" INTEGER NOT NULL,
    "ano" INTEGER NOT NULL,
    "total" DECIMAL(15,2) NOT NULL,

    CONSTRAINT "basica_docente_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "localidade_codigo_ibge_key" ON "educacao_v2"."localidade"("codigo_ibge");

CREATE UNIQUE INDEX "bmat_uk" ON "educacao_v2"."basica_matricula"("localidade_id", "ano");
CREATE INDEX "basica_matricula_localidade_id_ano_idx" ON "educacao_v2"."basica_matricula"("localidade_id", "ano");
CREATE INDEX "basica_matricula_ano_idx" ON "educacao_v2"."basica_matricula"("ano");

CREATE UNIQUE INDEX "bmat_etapa_uk" ON "educacao_v2"."basica_matricula_por_etapa"("localidade_id", "ano", "etapa");
CREATE INDEX "basica_matricula_por_etapa_localidade_id_ano_idx" ON "educacao_v2"."basica_matricula_por_etapa"("localidade_id", "ano");
CREATE INDEX "basica_matricula_por_etapa_ano_idx" ON "educacao_v2"."basica_matricula_por_etapa"("ano");

CREATE UNIQUE INDEX "btur_uk" ON "educacao_v2"."basica_turma"("localidade_id", "ano");
CREATE INDEX "basica_turma_localidade_id_ano_idx" ON "educacao_v2"."basica_turma"("localidade_id", "ano");
CREATE INDEX "basica_turma_ano_idx" ON "educacao_v2"."basica_turma"("ano");

CREATE UNIQUE INDEX "besc_uk" ON "educacao_v2"."basica_escola"("localidade_id", "ano");
CREATE INDEX "basica_escola_localidade_id_ano_idx" ON "educacao_v2"."basica_escola"("localidade_id", "ano");
CREATE INDEX "basica_escola_ano_idx" ON "educacao_v2"."basica_escola"("ano");

CREATE UNIQUE INDEX "bfun_uk" ON "educacao_v2"."basica_funcionario"("localidade_id", "ano");
CREATE INDEX "basica_funcionario_localidade_id_ano_idx" ON "educacao_v2"."basica_funcionario"("localidade_id", "ano");
CREATE INDEX "basica_funcionario_ano_idx" ON "educacao_v2"."basica_funcionario"("ano");

CREATE UNIQUE INDEX "bdoc_uk" ON "educacao_v2"."basica_docente"("localidade_id", "ano");
CREATE INDEX "basica_docente_localidade_id_ano_idx" ON "educacao_v2"."basica_docente"("localidade_id", "ano");
CREATE INDEX "basica_docente_ano_idx" ON "educacao_v2"."basica_docente"("ano");

ALTER TABLE "educacao_v2"."basica_matricula" ADD CONSTRAINT "basica_matricula_localidade_id_fkey" FOREIGN KEY ("localidade_id") REFERENCES "educacao_v2"."localidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "educacao_v2"."basica_matricula_por_etapa" ADD CONSTRAINT "basica_matricula_por_etapa_localidade_id_fkey" FOREIGN KEY ("localidade_id") REFERENCES "educacao_v2"."localidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "educacao_v2"."basica_turma" ADD CONSTRAINT "basica_turma_localidade_id_fkey" FOREIGN KEY ("localidade_id") REFERENCES "educacao_v2"."localidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "educacao_v2"."basica_escola" ADD CONSTRAINT "basica_escola_localidade_id_fkey" FOREIGN KEY ("localidade_id") REFERENCES "educacao_v2"."localidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "educacao_v2"."basica_funcionario" ADD CONSTRAINT "basica_funcionario_localidade_id_fkey" FOREIGN KEY ("localidade_id") REFERENCES "educacao_v2"."localidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "educacao_v2"."basica_docente" ADD CONSTRAINT "basica_docente_localidade_id_fkey" FOREIGN KEY ("localidade_id") REFERENCES "educacao_v2"."localidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
