-- AlterTable
ALTER TABLE "DadoEducacaoBasicaApos23" ADD COLUMN     "entidade_id" INTEGER;

-- CreateTable
CREATE TABLE "Entidade" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Entidade_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Entidade_codigo_key" ON "Entidade"("codigo");

-- AddForeignKey
ALTER TABLE "DadoEducacaoBasicaApos23" ADD CONSTRAINT "DadoEducacaoBasicaApos23_entidade_id_fkey" FOREIGN KEY ("entidade_id") REFERENCES "Entidade"("id") ON DELETE SET NULL ON UPDATE CASCADE;
