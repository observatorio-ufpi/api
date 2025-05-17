-- AlterTable
ALTER TABLE "DadoEducacaoBasica" ADD COLUMN     "dependencia_teacher_id" INTEGER;

-- CreateTable
CREATE TABLE "DependenciaAdministrativaBasicaTeacher" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" TEXT,

    CONSTRAINT "DependenciaAdministrativaBasicaTeacher_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DadoEducacaoBasica" ADD CONSTRAINT "DadoEducacaoBasica_dependencia_teacher_id_fkey" FOREIGN KEY ("dependencia_teacher_id") REFERENCES "DependenciaAdministrativaBasicaTeacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;
