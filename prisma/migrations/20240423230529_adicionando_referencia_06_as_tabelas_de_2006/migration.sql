/*
  Warnings:

  - You are about to drop the `CompensacaoRestosAPagar` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ControleRestosAPagarVinculadosEducacao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DeducoesDaDespesa` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PerdaGanhoTransferenciasFundeb` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SaldoFinanceiroFundef` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TabelaCumprimentoLimitesConstitucionais` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CompensacaoRestosAPagar" DROP CONSTRAINT "CompensacaoRestosAPagar_relatorioMunicialId_fkey";

-- DropForeignKey
ALTER TABLE "ControleRestosAPagarVinculadosEducacao" DROP CONSTRAINT "ControleRestosAPagarVinculadosEducacao_relatorioMunicialId_fkey";

-- DropForeignKey
ALTER TABLE "DeducoesDaDespesa" DROP CONSTRAINT "DeducoesDaDespesa_relatorioMunicialId_fkey";

-- DropForeignKey
ALTER TABLE "PerdaGanhoTransferenciasFundeb" DROP CONSTRAINT "PerdaGanhoTransferenciasFundeb_relatorioMunicialId_fkey";

-- DropForeignKey
ALTER TABLE "SaldoFinanceiroFundef" DROP CONSTRAINT "SaldoFinanceiroFundef_relatorioMunicialId_fkey";

-- DropForeignKey
ALTER TABLE "TabelaCumprimentoLimitesConstitucionais" DROP CONSTRAINT "TabelaCumprimentoLimitesConstitucionais_relatorioMunicialI_fkey";

-- DropTable
DROP TABLE "CompensacaoRestosAPagar";

-- DropTable
DROP TABLE "ControleRestosAPagarVinculadosEducacao";

-- DropTable
DROP TABLE "DeducoesDaDespesa";

-- DropTable
DROP TABLE "PerdaGanhoTransferenciasFundeb";

-- DropTable
DROP TABLE "SaldoFinanceiroFundef";

-- DropTable
DROP TABLE "TabelaCumprimentoLimitesConstitucionais";

-- CreateTable
CREATE TABLE "PerdaGanhoTransferenciasFundeb06" (
    "id" SERIAL NOT NULL,
    "tipo" "PerdaGanhoTransferenciasFundebTipo06" NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "PerdaGanhoTransferenciasFundeb06_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeducoesDaDespesa06" (
    "id" SERIAL NOT NULL,
    "tipo" "DeducoesDaDespesaTipo06" NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "DeducoesDaDespesa06_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ControleRestosAPagarVinculadosEducacao06" (
    "id" SERIAL NOT NULL,
    "tipo" "ControleRestosAPagarVinculadosEducacaoTipo06" NOT NULL,
    "aplicacaoMinimaAnoAnterior" DOUBLE PRECISION NOT NULL,
    "aplicacaoApuradaAnoAnterior" DOUBLE PRECISION NOT NULL,
    "restosAPagarAnoAnterior" DOUBLE PRECISION NOT NULL,
    "restosAPagarCanceladaAnoAtul" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "ControleRestosAPagarVinculadosEducacao06_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompensacaoRestosAPagar06" (
    "id" SERIAL NOT NULL,
    "tipo" "CompensacaoRestosAPagarTipo06" NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "CompensacaoRestosAPagar06_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SaldoFinanceiroFundef06" (
    "id" SERIAL NOT NULL,
    "tipo" "SaldoFinanceiroFundefTipo06" NOT NULL,
    "anoAnterior" DOUBLE PRECISION NOT NULL,
    "anoAtual" INTEGER NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "SaldoFinanceiroFundef06_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TabelaCumprimentoLimitesConstitucionais06" (
    "id" SERIAL NOT NULL,
    "tipo" "TabelaCumprimentoLimitesConstitucionaisTipo06" NOT NULL,
    "porcentagem" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "TabelaCumprimentoLimitesConstitucionais06_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PerdaGanhoTransferenciasFundeb06_relatorioMunicialId_tipo_key" ON "PerdaGanhoTransferenciasFundeb06"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "DeducoesDaDespesa06_relatorioMunicialId_tipo_key" ON "DeducoesDaDespesa06"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "ControleRestosAPagarVinculadosEducacao06_relatorioMunicialI_key" ON "ControleRestosAPagarVinculadosEducacao06"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "CompensacaoRestosAPagar06_relatorioMunicialId_tipo_key" ON "CompensacaoRestosAPagar06"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "SaldoFinanceiroFundef06_relatorioMunicialId_tipo_key" ON "SaldoFinanceiroFundef06"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "TabelaCumprimentoLimitesConstitucionais06_relatorioMunicial_key" ON "TabelaCumprimentoLimitesConstitucionais06"("relatorioMunicialId", "tipo");

-- AddForeignKey
ALTER TABLE "PerdaGanhoTransferenciasFundeb06" ADD CONSTRAINT "PerdaGanhoTransferenciasFundeb06_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal06"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeducoesDaDespesa06" ADD CONSTRAINT "DeducoesDaDespesa06_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal06"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ControleRestosAPagarVinculadosEducacao06" ADD CONSTRAINT "ControleRestosAPagarVinculadosEducacao06_relatorioMunicial_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal06"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompensacaoRestosAPagar06" ADD CONSTRAINT "CompensacaoRestosAPagar06_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal06"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SaldoFinanceiroFundef06" ADD CONSTRAINT "SaldoFinanceiroFundef06_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal06"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TabelaCumprimentoLimitesConstitucionais06" ADD CONSTRAINT "TabelaCumprimentoLimitesConstitucionais06_relatorioMunicia_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal06"("id") ON DELETE CASCADE ON UPDATE CASCADE;
