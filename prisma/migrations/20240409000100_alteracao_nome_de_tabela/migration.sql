/*
  Warnings:

  - You are about to drop the `ControleDisponibildadeFinanceiraConciliacaoBancaria21` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ControleDisponibildadeFinanceiraConciliacaoBancaria21" DROP CONSTRAINT "ControleDisponibildadeFinanceiraConciliacaoBancaria21_rela_fkey";

-- DropTable
DROP TABLE "ControleDisponibildadeFinanceiraConciliacaoBancaria21";

-- CreateTable
CREATE TABLE "ControleDisponibilidadeFinanceiraConciliacaoBancaria21" (
    "id" SERIAL NOT NULL,
    "tipo" "ControleDisponibildadeFinanceiraConciliacaoBancariaTipos21" NOT NULL,
    "fundeb" DOUBLE PRECISION NOT NULL,
    "salarioEducacao" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "ControleDisponibilidadeFinanceiraConciliacaoBancaria21_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ControleDisponibilidadeFinanceiraConciliacaoBancaria21_rela_key" ON "ControleDisponibilidadeFinanceiraConciliacaoBancaria21"("relatorioMunicialId", "tipo");

-- AddForeignKey
ALTER TABLE "ControleDisponibilidadeFinanceiraConciliacaoBancaria21" ADD CONSTRAINT "ControleDisponibilidadeFinanceiraConciliacaoBancaria21_rel_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal21"("id") ON DELETE CASCADE ON UPDATE CASCADE;
