-- AlterTable
ALTER TABLE "DadoEducacaoBasica" ADD COLUMN     "etapa_matricula_ate2020_id" INTEGER;

-- CreateTable
CREATE TABLE "EtapaMatriculaAte2020" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "EtapaMatriculaAte2020_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DadoEducacaoBasica_etapa_matricula_ate2020_id_idx" ON "DadoEducacaoBasica"("etapa_matricula_ate2020_id");

-- AddForeignKey
ALTER TABLE "DadoEducacaoBasica" ADD CONSTRAINT "DadoEducacaoBasica_etapa_matricula_ate2020_id_fkey" FOREIGN KEY ("etapa_matricula_ate2020_id") REFERENCES "EtapaMatriculaAte2020"("id") ON DELETE SET NULL ON UPDATE CASCADE;
