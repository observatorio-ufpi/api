/*
  Warnings:

  - You are about to drop the `DadoEducacional` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DependenciaAdministrativa` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EtapaEnsino` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DadoEducacional" DROP CONSTRAINT "DadoEducacional_dependencia_id_fkey";

-- DropForeignKey
ALTER TABLE "DadoEducacional" DROP CONSTRAINT "DadoEducacional_etapa_id_fkey";

-- DropForeignKey
ALTER TABLE "DadoEducacional" DROP CONSTRAINT "DadoEducacional_faixa_etaria_id_fkey";

-- DropForeignKey
ALTER TABLE "DadoEducacional" DROP CONSTRAINT "DadoEducacional_formacao_id_fkey";

-- DropForeignKey
ALTER TABLE "DadoEducacional" DROP CONSTRAINT "DadoEducacional_localidade_id_fkey";

-- DropForeignKey
ALTER TABLE "DadoEducacional" DROP CONSTRAINT "DadoEducacional_localizacao_id_fkey";

-- DropForeignKey
ALTER TABLE "DadoEducacional" DROP CONSTRAINT "DadoEducacional_vinculo_id_fkey";

-- DropTable
DROP TABLE "DadoEducacional";

-- DropTable
DROP TABLE "DependenciaAdministrativa";

-- DropTable
DROP TABLE "EtapaEnsino";

-- CreateTable
CREATE TABLE "DependenciaAdministrativaBasica" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" TEXT,

    CONSTRAINT "DependenciaAdministrativaBasica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EtapaEnsinoBasica" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "nome_curto" TEXT,

    CONSTRAINT "EtapaEnsinoBasica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DadoEducacaoBasica" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "total" DECIMAL(15,2) NOT NULL,
    "data_atualizacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "localidade_id" INTEGER,
    "dependencia_id" INTEGER,
    "etapa_id" INTEGER,
    "localizacao_id" INTEGER,
    "vinculo_id" INTEGER,
    "formacao_id" INTEGER,
    "faixa_etaria_id" INTEGER,

    CONSTRAINT "DadoEducacaoBasica_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DadoEducacaoBasica_tipo_ano_idx" ON "DadoEducacaoBasica"("tipo", "ano");

-- CreateIndex
CREATE INDEX "DadoEducacaoBasica_localidade_id_idx" ON "DadoEducacaoBasica"("localidade_id");

-- CreateIndex
CREATE INDEX "DadoEducacaoBasica_dependencia_id_idx" ON "DadoEducacaoBasica"("dependencia_id");

-- CreateIndex
CREATE INDEX "DadoEducacaoBasica_etapa_id_idx" ON "DadoEducacaoBasica"("etapa_id");

-- CreateIndex
CREATE INDEX "DadoEducacaoBasica_localizacao_id_idx" ON "DadoEducacaoBasica"("localizacao_id");

-- CreateIndex
CREATE UNIQUE INDEX "DadoEducacaoBasica_tipo_ano_localidade_id_dependencia_id_et_key" ON "DadoEducacaoBasica"("tipo", "ano", "localidade_id", "dependencia_id", "etapa_id", "localizacao_id", "vinculo_id", "formacao_id", "faixa_etaria_id");

-- AddForeignKey
ALTER TABLE "DadoEducacaoBasica" ADD CONSTRAINT "DadoEducacaoBasica_localidade_id_fkey" FOREIGN KEY ("localidade_id") REFERENCES "Localidade"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DadoEducacaoBasica" ADD CONSTRAINT "DadoEducacaoBasica_dependencia_id_fkey" FOREIGN KEY ("dependencia_id") REFERENCES "DependenciaAdministrativaBasica"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DadoEducacaoBasica" ADD CONSTRAINT "DadoEducacaoBasica_etapa_id_fkey" FOREIGN KEY ("etapa_id") REFERENCES "EtapaEnsinoBasica"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DadoEducacaoBasica" ADD CONSTRAINT "DadoEducacaoBasica_localizacao_id_fkey" FOREIGN KEY ("localizacao_id") REFERENCES "Localizacao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DadoEducacaoBasica" ADD CONSTRAINT "DadoEducacaoBasica_vinculo_id_fkey" FOREIGN KEY ("vinculo_id") REFERENCES "VinculoFuncional"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DadoEducacaoBasica" ADD CONSTRAINT "DadoEducacaoBasica_formacao_id_fkey" FOREIGN KEY ("formacao_id") REFERENCES "FormacaoDocente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DadoEducacaoBasica" ADD CONSTRAINT "DadoEducacaoBasica_faixa_etaria_id_fkey" FOREIGN KEY ("faixa_etaria_id") REFERENCES "FaixaEtaria"("id") ON DELETE SET NULL ON UPDATE CASCADE;
