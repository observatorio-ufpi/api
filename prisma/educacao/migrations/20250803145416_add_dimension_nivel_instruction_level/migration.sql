-- AlterTable
ALTER TABLE "Taxas" ADD COLUMN     "nivel_instrucao_id" INTEGER;

-- CreateTable
CREATE TABLE "NivelInstrucao" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "NivelInstrucao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Taxas_nivel_instrucao_id_idx" ON "Taxas"("nivel_instrucao_id");

-- AddForeignKey
ALTER TABLE "Taxas" ADD CONSTRAINT "Taxas_nivel_instrucao_id_fkey" FOREIGN KEY ("nivel_instrucao_id") REFERENCES "NivelInstrucao"("id") ON DELETE SET NULL ON UPDATE CASCADE;
