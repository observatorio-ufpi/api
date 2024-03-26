/*
  Warnings:

  - A unique constraint covering the columns `[relatorioMunicialId,tipo]` on the table `ControleUtilizacaoRecursos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[relatorioMunicialId,tipo]` on the table `DeducoesFundebMagisterio` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[relatorioMunicialId,tipo]` on the table `DeducoesParaFinsDeLimitesConstitucional` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[relatorioMunicialId,tipo]` on the table `FluxoFinanceiroDeRecursos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[relatorioMunicialId,tipo]` on the table `RestosAPagarInscritosDisponibilidadesFinanceira` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ControleUtilizacaoRecursos_relatorioMunicialId_tipo_key" ON "ControleUtilizacaoRecursos"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "DeducoesFundebMagisterio_relatorioMunicialId_tipo_key" ON "DeducoesFundebMagisterio"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "DeducoesParaFinsDeLimitesConstitucional_relatorioMunicialId_key" ON "DeducoesParaFinsDeLimitesConstitucional"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "FluxoFinanceiroDeRecursos_relatorioMunicialId_tipo_key" ON "FluxoFinanceiroDeRecursos"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "RestosAPagarInscritosDisponibilidadesFinanceira_relatorioMu_key" ON "RestosAPagarInscritosDisponibilidadesFinanceira"("relatorioMunicialId", "tipo");
