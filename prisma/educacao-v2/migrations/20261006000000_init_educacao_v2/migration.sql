-- CreateTable
CREATE TABLE "Dimensao" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "nome_canonico" TEXT,

    CONSTRAINT "Dimensao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ValorDimensao" (
    "id" SERIAL NOT NULL,
    "dimensao_id" INTEGER NOT NULL,
    "codigo_api" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "valor_canonico_id" INTEGER,

    CONSTRAINT "ValorDimensao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Localidade" (
    "id" INTEGER NOT NULL,
    "codigo_ibge" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "uf" TEXT NOT NULL DEFAULT 'PI',
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,

    CONSTRAINT "Localidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FatoEducacao" (
    "id" SERIAL NOT NULL,
    "referencia" TEXT NOT NULL,
    "indicador" TEXT,
    "dims" TEXT NOT NULL,
    "dims_canonico" TEXT,
    "ano" INTEGER NOT NULL,
    "total" DECIMAL(15,2) NOT NULL,
    "data_importacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "localidade_id" INTEGER NOT NULL,
    "valor_dim1_id" INTEGER NOT NULL,
    "valor_dim2_id" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "FatoEducacao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dimensao_nome_key" ON "Dimensao"("nome");

-- CreateIndex
CREATE INDEX "ValorDimensao_dimensao_id_idx" ON "ValorDimensao"("dimensao_id");

-- CreateIndex
CREATE UNIQUE INDEX "ValorDimensao_dimensao_id_codigo_api_key" ON "ValorDimensao"("dimensao_id", "codigo_api");

-- CreateIndex
CREATE UNIQUE INDEX "Localidade_codigo_ibge_key" ON "Localidade"("codigo_ibge");

-- CreateIndex
CREATE INDEX "FatoEducacao_referencia_ano_localidade_id_idx" ON "FatoEducacao"("referencia", "ano", "localidade_id");

-- CreateIndex
CREATE INDEX "FatoEducacao_referencia_dims_ano_idx" ON "FatoEducacao"("referencia", "dims", "ano");

-- CreateIndex
CREATE INDEX "FatoEducacao_indicador_ano_localidade_id_idx" ON "FatoEducacao"("indicador", "ano", "localidade_id");

-- CreateIndex
CREATE INDEX "FatoEducacao_indicador_dims_canonico_ano_idx" ON "FatoEducacao"("indicador", "dims_canonico", "ano");

-- CreateIndex
CREATE INDEX "FatoEducacao_valor_dim1_id_idx" ON "FatoEducacao"("valor_dim1_id");

-- CreateIndex
CREATE INDEX "FatoEducacao_valor_dim2_id_idx" ON "FatoEducacao"("valor_dim2_id");

-- CreateIndex
CREATE INDEX "FatoEducacao_localidade_id_idx" ON "FatoEducacao"("localidade_id");

-- CreateIndex
CREATE UNIQUE INDEX "FatoEducacao_referencia_ano_localidade_id_valor_dim1_id_val_key" ON "FatoEducacao"("referencia", "ano", "localidade_id", "valor_dim1_id", "valor_dim2_id");

-- AddForeignKey
ALTER TABLE "ValorDimensao" ADD CONSTRAINT "ValorDimensao_dimensao_id_fkey" FOREIGN KEY ("dimensao_id") REFERENCES "Dimensao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ValorDimensao" ADD CONSTRAINT "ValorDimensao_valor_canonico_id_fkey" FOREIGN KEY ("valor_canonico_id") REFERENCES "ValorDimensao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FatoEducacao" ADD CONSTRAINT "FatoEducacao_localidade_id_fkey" FOREIGN KEY ("localidade_id") REFERENCES "Localidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FatoEducacao" ADD CONSTRAINT "FatoEducacao_valor_dim1_id_fkey" FOREIGN KEY ("valor_dim1_id") REFERENCES "ValorDimensao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FatoEducacao" ADD CONSTRAINT "FatoEducacao_valor_dim2_id_fkey" FOREIGN KEY ("valor_dim2_id") REFERENCES "ValorDimensao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

