-- DropIndex
DROP INDEX "DadoEducacaoSuperior_tipo_ano_localidade_id_cursos_id_faixa_idx";

-- AlterTable
ALTER TABLE "DadoEducacaoSuperior" ADD COLUMN     "formacao_docente_id" INTEGER,
ADD COLUMN     "instituicao_ensino_id" INTEGER,
ADD COLUMN     "regime_docente_id" INTEGER;

-- CreateTable
CREATE TABLE "RegimeDocenteEnsinoSuperior" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "RegimeDocenteEnsinoSuperior_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FormacaoDocenteEnsinoSuperior" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "FormacaoDocenteEnsinoSuperior_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InstituicaoEnsinoSuperior" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "InstituicaoEnsinoSuperior_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RegimeDocenteEnsinoSuperior_codigo_key" ON "RegimeDocenteEnsinoSuperior"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "FormacaoDocenteEnsinoSuperior_codigo_key" ON "FormacaoDocenteEnsinoSuperior"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "InstituicaoEnsinoSuperior_codigo_key" ON "InstituicaoEnsinoSuperior"("codigo");

-- CreateIndex
CREATE INDEX "DadoEducacaoSuperior_tipo_ano_localidade_id_cursos_id_faixa_idx" ON "DadoEducacaoSuperior"("tipo", "ano", "localidade_id", "cursos_id", "faixa_etaria_id", "organizacao_academica_id", "categoria_administrativa_id", "modalidade_ensino_id", "formacao_docente_id", "regime_docente_id");

-- CreateIndex
CREATE INDEX "DadoEducacaoSuperior_formacao_docente_id_idx" ON "DadoEducacaoSuperior"("formacao_docente_id");

-- CreateIndex
CREATE INDEX "DadoEducacaoSuperior_regime_docente_id_idx" ON "DadoEducacaoSuperior"("regime_docente_id");

-- AddForeignKey
ALTER TABLE "DadoEducacaoSuperior" ADD CONSTRAINT "DadoEducacaoSuperior_instituicao_ensino_id_fkey" FOREIGN KEY ("instituicao_ensino_id") REFERENCES "InstituicaoEnsinoSuperior"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DadoEducacaoSuperior" ADD CONSTRAINT "DadoEducacaoSuperior_formacao_docente_id_fkey" FOREIGN KEY ("formacao_docente_id") REFERENCES "FormacaoDocenteEnsinoSuperior"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DadoEducacaoSuperior" ADD CONSTRAINT "DadoEducacaoSuperior_regime_docente_id_fkey" FOREIGN KEY ("regime_docente_id") REFERENCES "RegimeDocenteEnsinoSuperior"("id") ON DELETE SET NULL ON UPDATE CASCADE;
