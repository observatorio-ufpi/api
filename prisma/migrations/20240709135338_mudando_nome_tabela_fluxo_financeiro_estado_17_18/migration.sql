/*
  Warnings:

  - You are about to drop the `FluxoFinanceiroRecursos1718` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FluxoFinanceiroRecursos1718" DROP CONSTRAINT "FluxoFinanceiroRecursos1718_relatorioEstadualId_fkey";

-- DropTable
DROP TABLE "FluxoFinanceiroRecursos1718";

-- CreateTable
CREATE TABLE "FluxoFinanceiroRecursosEstadual1718" (
    "id" SERIAL NOT NULL,
    "tipo" "FluxoFinanceiroRecursosEstadualTipos1718" NOT NULL,
    "fundeb" DOUBLE PRECISION NOT NULL,
    "salarioEducacao" DOUBLE PRECISION NOT NULL,
    "relatorioEstadualId" INTEGER NOT NULL,

    CONSTRAINT "FluxoFinanceiroRecursosEstadual1718_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FluxoFinanceiroRecursosEstadual1718_relatorioEstadualId_tip_key" ON "FluxoFinanceiroRecursosEstadual1718"("relatorioEstadualId", "tipo");

-- AddForeignKey
ALTER TABLE "FluxoFinanceiroRecursosEstadual1718" ADD CONSTRAINT "FluxoFinanceiroRecursosEstadual1718_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES "RelatorioEstadual1718"("id") ON DELETE CASCADE ON UPDATE CASCADE;
