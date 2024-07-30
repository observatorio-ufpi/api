/*
  Warnings:

  - The values [VALE_DOS_RIOS_PIAUI_E_ITAUERIAS] on the enum `Regioes` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEstadua` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Regioes_new" AS ENUM ('CHAPADA_VALE_DO_RIO_ITAIM', 'ENTRE_RIOS', 'VALE_DO_RIO_GUARIBAS', 'CHAPADA_DAS_MANGABEIRAS', 'SERRA_DA_CAPIVARA', 'TABULEIROS_DO_ALTO_PARNAIBA', 'VALE_DO_SAMBITO', 'VALE_DOS_RIOS_PIAUI_E_ITAUEIRAS', 'CARNAUBAIS', 'COCAIS', 'VALE_DO_CANINDE', 'PLANICIE_LITORANEA');
ALTER TABLE "RelatorioMunicipal06" ALTER COLUMN "territorioDeDesenvolvimentoMunicipio" TYPE "Regioes_new" USING ("territorioDeDesenvolvimentoMunicipio"::text::"Regioes_new");
ALTER TABLE "RelatorioMunicipal0708" ALTER COLUMN "territorioDeDesenvolvimentoMunicipio" TYPE "Regioes_new" USING ("territorioDeDesenvolvimentoMunicipio"::text::"Regioes_new");
ALTER TABLE "RelatorioMunicipal0912" ALTER COLUMN "territorioDeDesenvolvimentoMunicipio" TYPE "Regioes_new" USING ("territorioDeDesenvolvimentoMunicipio"::text::"Regioes_new");
ALTER TABLE "RelatorioMunicipal1314" ALTER COLUMN "territorioDeDesenvolvimentoMunicipio" TYPE "Regioes_new" USING ("territorioDeDesenvolvimentoMunicipio"::text::"Regioes_new");
ALTER TABLE "RelatorioMunicipal1516" ALTER COLUMN "territorioDeDesenvolvimentoMunicipio" TYPE "Regioes_new" USING ("territorioDeDesenvolvimentoMunicipio"::text::"Regioes_new");
ALTER TABLE "RelatorioMunicipal1718" ALTER COLUMN "territorioDeDesenvolvimentoMunicipio" TYPE "Regioes_new" USING ("territorioDeDesenvolvimentoMunicipio"::text::"Regioes_new");
ALTER TABLE "RelatorioMunicipal1920" ALTER COLUMN "territorioDeDesenvolvimentoMunicipio" TYPE "Regioes_new" USING ("territorioDeDesenvolvimentoMunicipio"::text::"Regioes_new");
ALTER TABLE "RelatorioMunicipal21" ALTER COLUMN "territorioDeDesenvolvimentoMunicipio" TYPE "Regioes_new" USING ("territorioDeDesenvolvimentoMunicipio"::text::"Regioes_new");
ALTER TABLE "RelatorioMunicipal23" ALTER COLUMN "territorioDeDesenvolvimentoMunicipio" TYPE "Regioes_new" USING ("territorioDeDesenvolvimentoMunicipio"::text::"Regioes_new");
ALTER TYPE "Regioes" RENAME TO "Regioes_old";
ALTER TYPE "Regioes_new" RENAME TO "Regioes";
DROP TYPE "Regioes_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEstadua" DROP CONSTRAINT "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEs_fkey";

-- DropTable
DROP TABLE "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEstadua";

-- CreateTable
CREATE TABLE "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEstadual21" (
    "id" SERIAL NOT NULL,
    "tipo" "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebTipos21" NOT NULL,
    "saldoInicial" DOUBLE PRECISION NOT NULL,
    "rpLiquidados" DOUBLE PRECISION NOT NULL,
    "rpPagos" DOUBLE PRECISION NOT NULL,
    "rpCancelados" DOUBLE PRECISION NOT NULL,
    "saldoFinal" DOUBLE PRECISION NOT NULL,
    "relatorioEstadualId" INTEGER NOT NULL,

    CONSTRAINT "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEst_key" ON "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEstadual21"("relatorioEstadualId", "tipo");

-- AddForeignKey
ALTER TABLE "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEstadual21" ADD CONSTRAINT "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEs_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES "RelatorioEstadual21"("id") ON DELETE CASCADE ON UPDATE CASCADE;
