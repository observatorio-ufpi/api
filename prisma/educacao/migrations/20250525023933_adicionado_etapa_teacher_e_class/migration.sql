-- AlterTable
ALTER TABLE "DadoEducacaoBasicaApos23" ADD COLUMN     "etapa_teacher_class_id" INTEGER;

-- CreateTable
CREATE TABLE "EtapaEnsinoBasicaApos23TeacherClass" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "EtapaEnsinoBasicaApos23TeacherClass_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EtapaEnsinoBasicaApos23TeacherClass_nome_key" ON "EtapaEnsinoBasicaApos23TeacherClass"("nome");

-- AddForeignKey
ALTER TABLE "DadoEducacaoBasicaApos23" ADD CONSTRAINT "DadoEducacaoBasicaApos23_etapa_teacher_class_id_fkey" FOREIGN KEY ("etapa_teacher_class_id") REFERENCES "EtapaEnsinoBasicaApos23TeacherClass"("id") ON DELETE SET NULL ON UPDATE CASCADE;
