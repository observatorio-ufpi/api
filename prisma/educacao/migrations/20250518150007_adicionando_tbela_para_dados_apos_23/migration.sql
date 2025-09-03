-- CreateTable
CREATE TABLE "DependenciaAdministrativaBasicaApos23" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" TEXT,

    CONSTRAINT "DependenciaAdministrativaBasicaApos23_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EtapaEnsinoBasicaApos23" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "EtapaEnsinoBasicaApos23_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DadoEducacaoBasicaApos23" (
    "id" SERIAL NOT NULL,
    "ano" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "total" DECIMAL(15,2) NOT NULL,
    "data_atualizacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "localidade_id" INTEGER,
    "dependencia_id" INTEGER,
    "etapa_id" INTEGER,
    "localizacao_id" INTEGER,

    CONSTRAINT "DadoEducacaoBasicaApos23_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DadoEducacaoBasicaApos23" ADD CONSTRAINT "DadoEducacaoBasicaApos23_localidade_id_fkey" FOREIGN KEY ("localidade_id") REFERENCES "Localidade"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DadoEducacaoBasicaApos23" ADD CONSTRAINT "DadoEducacaoBasicaApos23_dependencia_id_fkey" FOREIGN KEY ("dependencia_id") REFERENCES "DependenciaAdministrativaBasicaApos23"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DadoEducacaoBasicaApos23" ADD CONSTRAINT "DadoEducacaoBasicaApos23_etapa_id_fkey" FOREIGN KEY ("etapa_id") REFERENCES "EtapaEnsinoBasicaApos23"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DadoEducacaoBasicaApos23" ADD CONSTRAINT "DadoEducacaoBasicaApos23_localizacao_id_fkey" FOREIGN KEY ("localizacao_id") REFERENCES "Localizacao"("id") ON DELETE SET NULL ON UPDATE CASCADE;
