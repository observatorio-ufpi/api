-- AlterTable
ALTER TABLE "DadoEducacaoBasica" ADD COLUMN     "etapa_turma_id" INTEGER;

-- CreateTable
CREATE TABLE "EtapaTurma" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "EtapaTurma_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DadoEducacaoBasica_etapa_turma_id_idx" ON "DadoEducacaoBasica"("etapa_turma_id");

-- AddForeignKey
ALTER TABLE "DadoEducacaoBasica" ADD CONSTRAINT "DadoEducacaoBasica_etapa_turma_id_fkey" FOREIGN KEY ("etapa_turma_id") REFERENCES "EtapaTurma"("id") ON DELETE SET NULL ON UPDATE CASCADE;
