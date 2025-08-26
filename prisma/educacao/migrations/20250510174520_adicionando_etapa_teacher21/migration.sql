-- AlterTable
ALTER TABLE "DadoEducacaoBasica" ADD COLUMN     "etapa_teacher_id" INTEGER;

-- CreateTable
CREATE TABLE "EtapaEnsinoBasicaTeacher21" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "EtapaEnsinoBasicaTeacher21_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DadoEducacaoBasica" ADD CONSTRAINT "DadoEducacaoBasica_etapa_teacher_id_fkey" FOREIGN KEY ("etapa_teacher_id") REFERENCES "EtapaEnsinoBasicaTeacher21"("id") ON DELETE SET NULL ON UPDATE CASCADE;
