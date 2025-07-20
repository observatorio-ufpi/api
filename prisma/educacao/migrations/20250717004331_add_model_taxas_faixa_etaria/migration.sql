-- CreateTable
CREATE TABLE "FaixaEtariaTaxas" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "idade_inicial" INTEGER,
    "idade_final" INTEGER,

    CONSTRAINT "FaixaEtariaTaxas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaxasPorFaixaEtaria" (
    "id" SERIAL NOT NULL,
    "ano" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "total" DECIMAL(15,2) NOT NULL,
    "denominador" INTEGER,
    "numerador" INTEGER,
    "data_atualizacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "localidade_id" INTEGER,
    "faixa_etaria_taxas_id" INTEGER,

    CONSTRAINT "TaxasPorFaixaEtaria_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TaxasPorFaixaEtaria_tipo_ano_localidade_id_faixa_etaria_tax_idx" ON "TaxasPorFaixaEtaria"("tipo", "ano", "localidade_id", "faixa_etaria_taxas_id");

-- CreateIndex
CREATE INDEX "TaxasPorFaixaEtaria_ano_idx" ON "TaxasPorFaixaEtaria"("ano");

-- CreateIndex
CREATE INDEX "TaxasPorFaixaEtaria_localidade_id_idx" ON "TaxasPorFaixaEtaria"("localidade_id");

-- CreateIndex
CREATE INDEX "TaxasPorFaixaEtaria_faixa_etaria_taxas_id_idx" ON "TaxasPorFaixaEtaria"("faixa_etaria_taxas_id");

-- AddForeignKey
ALTER TABLE "TaxasPorFaixaEtaria" ADD CONSTRAINT "TaxasPorFaixaEtaria_localidade_id_fkey" FOREIGN KEY ("localidade_id") REFERENCES "Localidade"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaxasPorFaixaEtaria" ADD CONSTRAINT "TaxasPorFaixaEtaria_faixa_etaria_taxas_id_fkey" FOREIGN KEY ("faixa_etaria_taxas_id") REFERENCES "FaixaEtariaTaxas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
