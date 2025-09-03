-- CreateTable
CREATE TABLE "FaixaEtariaTaxaConcEdlSupEAnafal" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "idade_inicial" INTEGER,
    "idade_final" INTEGER,

    CONSTRAINT "FaixaEtariaTaxaConcEdlSupEAnafal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FaixaEtariaTaxaConclEdBasica" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "idade_inicial" INTEGER,
    "idade_final" INTEGER,

    CONSTRAINT "FaixaEtariaTaxaConclEdBasica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Taxas" (
    "id" SERIAL NOT NULL,
    "ano" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "total" DECIMAL(15,2) NOT NULL,
    "data_atualizacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "localidade_id" INTEGER,
    "localizacao_id" INTEGER,
    "faixa_etaria_taxas_concl_sup_e_anafal_id" INTEGER,
    "faixa_etaria_taxas_concl_ed_basica_id" INTEGER,

    CONSTRAINT "Taxas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Taxas_tipo_ano_localidade_id_idx" ON "Taxas"("tipo", "ano", "localidade_id");

-- CreateIndex
CREATE INDEX "Taxas_ano_idx" ON "Taxas"("ano");

-- CreateIndex
CREATE INDEX "Taxas_localidade_id_idx" ON "Taxas"("localidade_id");

-- CreateIndex
CREATE INDEX "Taxas_localizacao_id_idx" ON "Taxas"("localizacao_id");

-- CreateIndex
CREATE INDEX "Taxas_faixa_etaria_taxas_concl_sup_e_anafal_id_idx" ON "Taxas"("faixa_etaria_taxas_concl_sup_e_anafal_id");

-- CreateIndex
CREATE INDEX "Taxas_faixa_etaria_taxas_concl_ed_basica_id_idx" ON "Taxas"("faixa_etaria_taxas_concl_ed_basica_id");

-- AddForeignKey
ALTER TABLE "Taxas" ADD CONSTRAINT "Taxas_localidade_id_fkey" FOREIGN KEY ("localidade_id") REFERENCES "Localidade"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Taxas" ADD CONSTRAINT "Taxas_localizacao_id_fkey" FOREIGN KEY ("localizacao_id") REFERENCES "Localizacao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Taxas" ADD CONSTRAINT "Taxas_faixa_etaria_taxas_concl_sup_e_anafal_id_fkey" FOREIGN KEY ("faixa_etaria_taxas_concl_sup_e_anafal_id") REFERENCES "FaixaEtariaTaxaConcEdlSupEAnafal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Taxas" ADD CONSTRAINT "Taxas_faixa_etaria_taxas_concl_ed_basica_id_fkey" FOREIGN KEY ("faixa_etaria_taxas_concl_ed_basica_id") REFERENCES "FaixaEtariaTaxaConclEdBasica"("id") ON DELETE SET NULL ON UPDATE CASCADE;
