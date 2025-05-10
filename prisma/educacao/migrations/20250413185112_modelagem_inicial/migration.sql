-- CreateTable
CREATE TABLE "Localidade" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "uf" CHAR(2),
    "codigo_ibge" TEXT,

    CONSTRAINT "Localidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DependenciaAdministrativa" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" TEXT,

    CONSTRAINT "DependenciaAdministrativa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EtapaEnsino" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "nome_curto" TEXT,

    CONSTRAINT "EtapaEnsino_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Localizacao" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Localizacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VinculoFuncional" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "VinculoFuncional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FormacaoDocente" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "FormacaoDocente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FaixaEtaria" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "idade_inicial" INTEGER,
    "idade_final" INTEGER,

    CONSTRAINT "FaixaEtaria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DadoEducacional" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "total" DECIMAL(15,2) NOT NULL,
    "localidade_id" INTEGER,
    "dependencia_id" INTEGER,
    "etapa_id" INTEGER,
    "localizacao_id" INTEGER,
    "vinculo_id" INTEGER,
    "formacao_id" INTEGER,
    "faixa_etaria_id" INTEGER,
    "data_atualizacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DadoEducacional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImportacaoAPI" (
    "id" SERIAL NOT NULL,
    "data_importacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tipo_dado" TEXT NOT NULL,
    "anos_importados" INTEGER[],
    "filtros_aplicados" JSONB,
    "total_registros" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "mensagem_erro" TEXT,

    CONSTRAINT "ImportacaoAPI_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DadoEducacional_tipo_ano_idx" ON "DadoEducacional"("tipo", "ano");

-- CreateIndex
CREATE INDEX "DadoEducacional_localidade_id_idx" ON "DadoEducacional"("localidade_id");

-- CreateIndex
CREATE INDEX "DadoEducacional_dependencia_id_idx" ON "DadoEducacional"("dependencia_id");

-- CreateIndex
CREATE INDEX "DadoEducacional_etapa_id_idx" ON "DadoEducacional"("etapa_id");

-- CreateIndex
CREATE INDEX "DadoEducacional_localizacao_id_idx" ON "DadoEducacional"("localizacao_id");

-- CreateIndex
CREATE UNIQUE INDEX "DadoEducacional_tipo_ano_localidade_id_dependencia_id_etapa_key" ON "DadoEducacional"("tipo", "ano", "localidade_id", "dependencia_id", "etapa_id", "localizacao_id", "vinculo_id", "formacao_id", "faixa_etaria_id");

-- AddForeignKey
ALTER TABLE "DadoEducacional" ADD CONSTRAINT "DadoEducacional_localidade_id_fkey" FOREIGN KEY ("localidade_id") REFERENCES "Localidade"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DadoEducacional" ADD CONSTRAINT "DadoEducacional_dependencia_id_fkey" FOREIGN KEY ("dependencia_id") REFERENCES "DependenciaAdministrativa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DadoEducacional" ADD CONSTRAINT "DadoEducacional_etapa_id_fkey" FOREIGN KEY ("etapa_id") REFERENCES "EtapaEnsino"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DadoEducacional" ADD CONSTRAINT "DadoEducacional_localizacao_id_fkey" FOREIGN KEY ("localizacao_id") REFERENCES "Localizacao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DadoEducacional" ADD CONSTRAINT "DadoEducacional_vinculo_id_fkey" FOREIGN KEY ("vinculo_id") REFERENCES "VinculoFuncional"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DadoEducacional" ADD CONSTRAINT "DadoEducacional_formacao_id_fkey" FOREIGN KEY ("formacao_id") REFERENCES "FormacaoDocente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DadoEducacional" ADD CONSTRAINT "DadoEducacional_faixa_etaria_id_fkey" FOREIGN KEY ("faixa_etaria_id") REFERENCES "FaixaEtaria"("id") ON DELETE SET NULL ON UPDATE CASCADE;
