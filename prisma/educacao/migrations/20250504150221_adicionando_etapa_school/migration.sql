-- AlterTable
ALTER TABLE "DadoEducacaoBasica" ADD COLUMN     "etapa_school_id" INTEGER;

-- CreateTable
CREATE TABLE "EtapaEnsinoBasicaSchool" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "EtapaEnsinoBasicaSchool_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DadoEducacaoBasica" ADD CONSTRAINT "DadoEducacaoBasica_etapa_school_id_fkey" FOREIGN KEY ("etapa_school_id") REFERENCES "EtapaEnsinoBasicaSchool"("id") ON DELETE SET NULL ON UPDATE CASCADE;
