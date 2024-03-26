-- DropForeignKey
ALTER TABLE "ControleUtilizacaoRecursos" DROP CONSTRAINT "ControleUtilizacaoRecursos_relatorioMunicialId_fkey";

-- DropForeignKey
ALTER TABLE "DeducoesFundebMagisterio" DROP CONSTRAINT "DeducoesFundebMagisterio_relatorioMunicialId_fkey";

-- DropForeignKey
ALTER TABLE "DeducoesParaFinsDeLimitesConstitucional" DROP CONSTRAINT "DeducoesParaFinsDeLimitesConstitucional_relatorioMunicialI_fkey";

-- DropForeignKey
ALTER TABLE "Despesa" DROP CONSTRAINT "Despesa_relatorioMunicialId_fkey";

-- DropForeignKey
ALTER TABLE "FluxoFinanceiroDeRecursos" DROP CONSTRAINT "FluxoFinanceiroDeRecursos_relatorioMunicialId_fkey";

-- DropForeignKey
ALTER TABLE "Receita" DROP CONSTRAINT "Receita_relatorioMunicialId_fkey";

-- DropForeignKey
ALTER TABLE "RestosAPagarInscritosDisponibilidadesFinanceira" DROP CONSTRAINT "RestosAPagarInscritosDisponibilidadesFinanceira_relatorioM_fkey";

-- AddForeignKey
ALTER TABLE "Receita" ADD CONSTRAINT "Receita_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Despesa" ADD CONSTRAINT "Despesa_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeducoesFundebMagisterio" ADD CONSTRAINT "DeducoesFundebMagisterio_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ControleUtilizacaoRecursos" ADD CONSTRAINT "ControleUtilizacaoRecursos_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeducoesParaFinsDeLimitesConstitucional" ADD CONSTRAINT "DeducoesParaFinsDeLimitesConstitucional_relatorioMunicialI_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestosAPagarInscritosDisponibilidadesFinanceira" ADD CONSTRAINT "RestosAPagarInscritosDisponibilidadesFinanceira_relatorioM_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FluxoFinanceiroDeRecursos" ADD CONSTRAINT "FluxoFinanceiroDeRecursos_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal"("id") ON DELETE CASCADE ON UPDATE CASCADE;
