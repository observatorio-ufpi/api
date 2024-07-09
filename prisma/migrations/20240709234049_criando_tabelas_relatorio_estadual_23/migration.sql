/*
  Warnings:

  - You are about to drop the `RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEstadua` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `tipo` on the `ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadual21` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ItemReceitaEstadualTipos23" AS ENUM ('RECEITA_DE_IMPOSTOS', 'RECEITA_ICMS', 'RECEITA_ICMS_PRINCIPAL_ENCARGOS', 'RECEITA_ICMS_ADICIONAL_FUNDO_COMBATE_POBREZA', 'RECEITA_ITCD', 'RECEITA_IPVA', 'RECEITA_IRRF', 'RECEITA_TRANSFERENCIAS_CONSTITUCIONAIS_LEGAIS', 'RECEITA_FPE', 'RECEITA_IPI_EXPORTACAO', 'RECEITA_IOF_OURO', 'RECEITA_COMPENSACOES_FINANCEIRAS', 'DEDUCOES_TRANSFERENCIAS_CONSTITUCIONAIS_MUNICIPIOS', 'DEDUCAO_ICMS_MUNICIPIOS', 'DEDUCAO_IPVA_MUNICIPIOS', 'DEDUCAO_IPI_EXPORTACAO_MUNICIPIOS', 'RECEITA_LIQUIDA_RESULTANTE_IMPOSTOS', 'TOTAL_DESTINADO_FUNDEB', 'VALOR_MINIMO_MDE_ALEM_FUNDEB', 'TOTAL_DAS_RECEITAS_DO_FUNDEB_RECEBIDAS', 'FUNDEB_IMPOSTOS_E_TRANSFERENCIAS_DE_IMPOSTOS', 'FUNDEB_PRINCIPAL', 'FUNDEB_RENDIMENTOS_DE_APLICACAO_FINANCEIRA', 'FUNDEB_RESSARCIMENTO_DE_RECURSOS_DO_FUNDEB', 'FUNDEB_COMPLEMENTACAO_DA_UNIAO_VAAF', 'FUNDEB_VAAF_PRINCIPAL', 'FUNDEB_VAAF_RENDIMENTOS_APLICACAO_FINANCEIRA', 'FUNDEB__VAAF_RESSARCIMENTO_FUNDEB', 'FUNDEB_COMPLEMENTACAO_DA_UNIAO_VAAT', 'FUNDEB_VAAT_PRINCIPAL', 'FUNDEB_VAAT_RENDIMENTOS_APLICACAO_FINANCEIRA', 'FUNDEB_VAAT_RESSARCIMENTO_FUNDEB', 'FUNDEB_COMPLEMENTACAO_DA_UNIAO_VAAR', 'FUNDEB_VAAR_PRINCIPAL', 'FUNDEB_VAAR_RENDIMENTO_APLICACAO_FINANCEIRA', 'FUNDEB_VAAR_RESSARCIMENTO_FUNDEB', 'RESULTADO_LIQUIDO_DAS_TRANSFERENCIAS_DO_FUNDEB', 'TOTAL_DAS_RECEITAS_ADICIONAIS_PARA_FINANCIAMENTO_DO_ENSINO', 'RECEITA_DE_TRANSFERENCIAS_DO_FNDE', 'RECEITA_DE_TRANSFERENCIAS_DO_FNDE_SALARIO_EDUCACAO', 'RECEITA_DE_TRANSFERENCIAS_DO_FNDE_PDDE', 'RECEITA_DE_TRANSFERENCIAS_DO_FNDE_PNAE', 'RECEITA_DE_TRANSFERENCIAS_DO_FNDE_PNATE', 'RECEITA_DE_TRANSFERENCIAS_DO_FNDE_OUTRAS_TRANSFERENCIAS', 'RECEITA_DE_TRANSFERENCIAS_DE_CONVENIOS', 'RECEITA_DE_ROYALTIES_DESTINADOS_A_EDUCACAO', 'RECEITA_DE_OPERACOES_DE_CREDITO_VINCULADAS_A_EDUCACAO', 'OUTRAS_RECEITAS_PARA_FINANCIAMENTO_DO_ENSINO');

-- CreateEnum
CREATE TYPE "ItemDespesaEstadualTipos23" AS ENUM ('TOTAL_DAS_DESPESAS_COM_RECURSOS_DO_FUNDEB', 'PROFISSIONAIS_DA_EDUCACAO_BASICA', 'PROFISSIONAIS_DA_EDUCACAO_BASICA_EDUCACAO_INFANTIL', 'PROFISSIONAIS_DA_EDUCACAO_BASICA_ENSINO_FUNDAMENTAL', 'PROFISSIONAIS_DA_EDUCACAO_BASICA_EDUCACAO_DE_JOVENS_ADULTOS', 'PROFISSIONAIS_DA_EDUCACAO_BASICA_EDUCACAO_ESPECIAL', 'PROFISSIONAIS_DA_EDUCACAO_BASICA_ADMINISTRACAO_GERAL', 'OUTRAS_DESPESAS', 'OUTRAS_DESPESAS_EDUCACAO_INFANTIL', 'OUTRAS_DESPESAS_ENSINO_FUNDAMENTAL', 'OUTRAS_DESPESAS_EDUCACAO_DE_JOVENS_E_ADULTOS', 'OUTRAS_DESPESAS_EDUCACAO_ESPECIAL', 'OUTRAS_DESPESAS_ADMINISTRACAO_GERAL', 'OUTRAS_DESPESAS_TRANSPORTE_ESCOLAR', 'OUTRAS_DESPESAS_OUTRAS', 'TOTAL_DESPESAS_MDE_CUSTEADAS_COM_RECEITAS_IMPOSTOS', 'MDE_COM_RECEITAS_IMPOSTOS_EDUCACAO_INFANTIL', 'MDE_COM_RECEITAS_IMPOSTOS_ENSINO_FUNDAMENTAL', 'MDE_COM_RECEITAS_IMPOSTOS_ENSINO_MEDIO', 'MDE_COM_RECEITAS_IMPOSTOS_ENSINO_SUPERIOR', 'MDE_COM_RECEITAS_IMPOSTOS_ENSINO_PROFISSIONAL', 'MDE_COM_RECEITAS_IMPOSTOS_EDUCACAO_DE_JOVENS_E_ADULTOS', 'MDE_COM_RECEITAS_IMPOSTOS_EDUCACAO_ESPECIAL', 'MDE_COM_RECEITAS_IMPOSTOS_ADMINISTRACAO_GERAL', 'MDE_COM_RECEITAS_IMPOSTOS_TRANSPORTE_ESCOLAR', 'MDE_COM_RECEITAS_IMPOSTOS_OUTRAS', 'TOTAL_DESPESAS_COM_ACOES_TIPICAS_MDE_CUSTEADAS_IMPOSTOS_FUNDEB', 'ACOES_TIPICAS_MDE_EDUCACAO_INFANTIL', 'ACOES_TIPICAS_MDE_CRECHE', 'ACOES_TIPICAS_MDE_PRE_ESCOLA', 'ACOES_TIPICAS_MDE_ENSINO_FUNDAMENTAL', 'ACOES_TIPICAS_MDE_ENSINO_MEDIO', 'ACOES_TIPICAS_MDE_ENSINO_SUPERIOR', 'ACOES_TIPICAS_MDE_ENSINO_PROFISSIONAL_NAO_INTEGRADO', 'TOTAL_OUTRAS_DESPESAS_COM_EDUCACAO', 'TOTAL_OUTRAS_DESPESAS_ENSINO_FUNDAMENTAL', 'TOTAL_OUTRAS_DESPESAS_EDUCACAO_INFANTIL', 'TOTAL_OUTRAS_DESPESAS_ENSINO_MEDIO', 'TOTAL_OUTRAS_DESPESAS_ENSINO_SUPERIOR', 'TOTAL_OUTRAS_DESPESAS_ENSINO_PROFISSIONAL_NAO_INTEGRADO', 'TOTAL_OUTRAS_DESPESAS_ENSINO_DE_JOVENS_E_ADULTOS', 'TOTAL_OUTRAS_DESPESAS_EDUCACAO_ESPECIAL', 'TOTAL_OUTRAS_DESPESAS_OUTRAS', 'TOTAL_GERAL_DESPESAS_COM_EDUCACAO', 'DESPESAS_CORRENTES', 'PESSOAL_ATIVO', 'PESSOAL_INATIVO', 'TRANSFERENCIAS_INSTITUICOES_COMUNITARIAS', 'OUTRAS_DESPESAS_CORRENTES', 'DESPESAS_DE_CAPITAL', 'TRANSFERENCIAS_INSTITUICOES_COMUNITARIAS_CAPITAL', 'OUTRAS_DESPESAS_CAPITAL');

-- CreateEnum
CREATE TYPE "RecursosRecebidosNaoUtilizadosEstadualTipos23" AS ENUM ('TOTAL_RECURSOS_SUPERAVIT', 'SUPERAVIT_EXERCICIO_ANTERIOR', 'SUPERAVIT_RESIDUAL_OUTROS_EXERCICIOS', 'TOTAL_RECURSOS_FUNDEB_DISPONIVEIS');

-- CreateEnum
CREATE TYPE "DespesasCusteadasFundebExercicioEstadualTipos23" AS ENUM ('TOTAL_DESPESAS_FUNDEB_RECEBIDAS', 'TOTAL_DESPESAS_CUSTEADAS_FUNDEB_IMPOSTOS_TRANSFERENCIAS', 'TOTAL_DESPESAS_CUSTEADAS_FUNDEB_COMPLEMENTACAO_UNIAO_VAAF', 'TOTAL_DESPESAS_CUSTEADAS_FUNDEB_COMPLEMENTACAO_UNIAO_VAAT', 'TOTAL_DESPESAS_CUSTEADAS_FUNDEB_COMPLEMENTACAO_UNIAO_VAAR', 'TOTAL_DESPESAS_FUNDEB_PROFISSIONAIS_EDUCACAO_BASICA', 'TOTAL_DESPESAS_CUSTEADAS_FUNDEB_VAAT_DESPESA_CAPITAL');

-- CreateEnum
CREATE TYPE "IndicadoresArt212EstadualTipos23" AS ENUM ('MINIMO_70_PORCENTO_FUNDEB_PROFISSIONAIS_EDUCACAO_BASICA', 'MINIMO_15_PORCENTO_FUNDEB_VAAT_DESPESAS_CAPITAL');

-- CreateEnum
CREATE TYPE "IndicadorArt25AplicacaoSuperavitEstadualTipos23" AS ENUM ('TOTAL_DESPESAS_CUSTEADAS_COM_SUPERAVIT_FUNDEB', 'TOTAL_DESPESAS_CUSTEADAS_FUNDEB_IMPOSTOS_TRANSFERENCIAS', 'TOTAL_DESPESAS_CUSTEADAS_FUNDEB_COMPLEMENTACAO_UNIAO');

-- CreateEnum
CREATE TYPE "IndicadorArt25Maximo10PorCentoDeSuperavitEstadualTipos23" AS ENUM ('TOTAL_RECEITA_RECEBIDA_NAO_APLICADA_EXERCICIO');

-- CreateEnum
CREATE TYPE "ApuracaoDespesasLimiteMinimoConstitucionalEstadualTipos23" AS ENUM ('TOTAL_DESPESAS_MDE_CUSTEADAS_RECURSOS_IMPOSTOS', 'TOTAL_RECEITAS_TRANSFERIDAS_FUNDEB', 'RECEITAS_FUNDEB_NAO_UTILIZADAS_EXERCICIO_SUPERIOR_10_PORCENTO', 'VALOR_APLICADO_PRIMEIRO_QUADRIMESTRE_LIMITE_CONSTITUCIONAL', 'RESTOS_PAGAR_DISPONIBILIDADE_FINANCEIRA_RECURSOS_IMPOSTOS', 'CANCELAMENTO_RESTOS_PAGAR_RECURSOS_IMPOSTOS_VINCULADOS_ENSINO', 'TOTAL_DESPESAS_PARA_FINS_LIMITE');

-- CreateEnum
CREATE TYPE "ApuracaoLimiteMinimoConstitucionalEstadualTipos23" AS ENUM ('APLICACAO_EM_MDE_SOBRE_RECEITA_LIQUIDA_DE_IMPOSTOS');

-- CreateEnum
CREATE TYPE "RestosAPagarParaCumprimentoDoLimiteEstadualTipos23" AS ENUM ('RESTOS_A_PAGAR_DESPESAS_MDE', 'EXECUTADAS_RECURSOS_IMPOSTOS_TRANSFERENCIAS_IMPOSTOS', 'EXECUTADAS_RECURSOS_FUNDEB_IMPOSTOS', 'EXECUTADAS_RECURSOS_FUNDEB_COMPLEMENTACAO_UNIAO');

-- CreateEnum
CREATE TYPE "ControleDisponibilidadeFinanceiraEConciliacaoBancariaEstadualTipos23" AS ENUM ('DISPONIBILIDADE_FINANCEIRA_EM_31_DE_DEZEMBRO_ANO_ANTERIOR', 'INGRESSO_RECURSOS_ATE_BIMESTRE', 'PAGAMENTOS_EFETUADOS_ATE_BIMESTRE', 'DISPONIBILIDADE_FINANCEIRA_ATE_BIMESTRE', 'AJUSTES_POSITIVOS', 'AJUSTES_NEGATIVOS', 'SALDO_FINANCEIRO_CONCILIADO');

-- CreateEnum
CREATE TYPE "EmendaConstitucionalExclusivoSiopeEstadualTipos23" AS ENUM ('DIFERENCA_ENTRE_VALOR_EXIGIDO_E_APLICADO_2020', 'DIFERENCA_ENTRE_VALOR_EXIGIDO_E_APLICADO_2021', 'DIFERENCA_A_MENOR_ENTRE_VALOR_APLICADO_E_EXIGIDO_2020_2021', 'VALOR_COMPLEMENTADO_APLICACAO_MDE_2022', 'VALOR_NAO_COMPLEMENTADO_TOTAL_NAO_APLICADO_MDE_2020_2021');

-- DropForeignKey
ALTER TABLE "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEstadua" DROP CONSTRAINT "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEs_fkey";

-- AlterTable
ALTER TABLE "ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadual21" DROP COLUMN "tipo",
ADD COLUMN     "tipo" "ControleDisponibildadeFinanceiraConciliacaoBancariaTipos21" NOT NULL;

-- DropTable
DROP TABLE "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEstadua";

-- DropEnum
DROP TYPE "ControleDisponibildadeFinanceiraConciliacaoBancariaEstadualTipo";

-- CreateTable
CREATE TABLE "RelatorioEstadual23" (
    "id" SERIAL NOT NULL,
    "ano" TEXT NOT NULL,
    "codigoMunicipio" TEXT NOT NULL,

    CONSTRAINT "RelatorioEstadual23_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "ReceitaEstadual23" (
    "id" SERIAL NOT NULL,
    "tipo" "ItemReceitaEstadualTipos23" NOT NULL,
    "previsaoAtualizada" DOUBLE PRECISION NOT NULL,
    "receitasRealizadasAteBimestre" DOUBLE PRECISION NOT NULL,
    "relatorioEstadualId" INTEGER NOT NULL,

    CONSTRAINT "ReceitaEstadual23_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecursosRecebidosNaoUtilizadosEstadual23" (
    "id" SERIAL NOT NULL,
    "tipo" "RecursosRecebidosNaoUtilizadosEstadualTipos23" NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "relatorioEstadualId" INTEGER NOT NULL,

    CONSTRAINT "RecursosRecebidosNaoUtilizadosEstadual23_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DespesaEstadual23" (
    "id" SERIAL NOT NULL,
    "tipo" "ItemDespesaEstadualTipos23" NOT NULL,
    "dotacaoAtualizada" DOUBLE PRECISION NOT NULL,
    "despesasEmpenhadasAteBimestre" DOUBLE PRECISION NOT NULL,
    "despesasLiquidadasAteBimestre" DOUBLE PRECISION NOT NULL,
    "despesasPagasAteBimestre" DOUBLE PRECISION NOT NULL,
    "inscritosEmRestosAPagarNaoProcessados" DOUBLE PRECISION NOT NULL,
    "relatorioEstadualId" INTEGER NOT NULL,

    CONSTRAINT "DespesaEstadual23_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DespesasCusteadasFundebExercicioEstadual23" (
    "id" SERIAL NOT NULL,
    "tipo" "DespesasCusteadasFundebExercicioEstadualTipos23" NOT NULL,
    "despesasEmpenhadasAteBimestre" DOUBLE PRECISION NOT NULL,
    "despesasLiquidadasAteBimestre" DOUBLE PRECISION NOT NULL,
    "despesasPagasAteBimestre" DOUBLE PRECISION NOT NULL,
    "inscritosEmRestosAPagarNaoProcessados" DOUBLE PRECISION NOT NULL,
    "inscritasEmRestosAPagarSemCaixa" DOUBLE PRECISION NOT NULL,
    "despesasSuperiorAoTotalDasReceitas" DOUBLE PRECISION NOT NULL,
    "relatorioEstadualId" INTEGER NOT NULL,

    CONSTRAINT "DespesasCusteadasFundebExercicioEstadual23_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Indicadores23Art212Estadual" (
    "id" SERIAL NOT NULL,
    "tipo" "IndicadoresArt212EstadualTipos23" NOT NULL,
    "valorExigido" DOUBLE PRECISION NOT NULL,
    "valorAplicado" DOUBLE PRECISION NOT NULL,
    "valorConsideradoAposDeducoes" DOUBLE PRECISION NOT NULL,
    "percentualAplicado" DOUBLE PRECISION NOT NULL,
    "relatorioEstadualId" INTEGER NOT NULL,

    CONSTRAINT "Indicadores23Art212Estadual_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Indicador23Art25AplicacaoSuperavitEstadual" (
    "id" SERIAL NOT NULL,
    "tipo" "IndicadorArt25AplicacaoSuperavitEstadualTipos23" NOT NULL,
    "valorSuperavitExercicioAnterior" DOUBLE PRECISION NOT NULL,
    "valorNaoAplicadoExercicioAnterior" DOUBLE PRECISION NOT NULL,
    "valorSuperavitAplicadoAtePrimeiroQuadrimestre" DOUBLE PRECISION NOT NULL,
    "valorAplicadoAtePrimeiroQuadrimestre" DOUBLE PRECISION NOT NULL,
    "valorTotalSuperavitNaoAplicadoAteFinalExercicio" DOUBLE PRECISION NOT NULL,
    "valorAplicadoAtePrimeiroQuadrimestreLimiteConstitucional" DOUBLE PRECISION NOT NULL,
    "relatorioEstadualId" INTEGER NOT NULL,

    CONSTRAINT "Indicador23Art25AplicacaoSuperavitEstadual_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Indicador23Art25Maximo10PorCentoDeSuperavitEstadual" (
    "id" SERIAL NOT NULL,
    "tipo" "IndicadorArt25Maximo10PorCentoDeSuperavitEstadualTipos23" NOT NULL,
    "valorMaximoPermitido" DOUBLE PRECISION NOT NULL,
    "valorNaoAplicado" DOUBLE PRECISION NOT NULL,
    "valorNaoAplicadoAposAjuste" DOUBLE PRECISION NOT NULL,
    "valorNaoAplicadoExcedenteMaximoPermitido" DOUBLE PRECISION NOT NULL,
    "percentualNaoAplicado" DOUBLE PRECISION NOT NULL,
    "relatorioEstadualId" INTEGER NOT NULL,

    CONSTRAINT "Indicador23Art25Maximo10PorCentoDeSuperavitEstadual_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApuracaoDespesasLimiteMinimoConstitucionalEstadual23" (
    "id" SERIAL NOT NULL,
    "tipo" "ApuracaoDespesasLimiteMinimoConstitucionalEstadualTipos23" NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "relatorioEstadualId" INTEGER NOT NULL,

    CONSTRAINT "ApuracaoDespesasLimiteMinimoConstitucionalEstadual23_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApuracaoLimiteMinimoConstitucionalEstadual23" (
    "id" SERIAL NOT NULL,
    "tipo" "ApuracaoLimiteMinimoConstitucionalEstadualTipos23" NOT NULL,
    "valorExigido" DOUBLE PRECISION NOT NULL,
    "valorAplicado" DOUBLE PRECISION NOT NULL,
    "percentualAplicado" DOUBLE PRECISION NOT NULL,
    "relatorioEstadualId" INTEGER NOT NULL,

    CONSTRAINT "ApuracaoLimiteMinimoConstitucionalEstadual23_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RestosAPagarParaCumprimentoDoLimiteEstadual23" (
    "id" SERIAL NOT NULL,
    "tipo" "RestosAPagarParaCumprimentoDoLimiteEstadualTipos23" NOT NULL,
    "saldoInicial" DOUBLE PRECISION NOT NULL,
    "rpLiquidados" DOUBLE PRECISION NOT NULL,
    "rpPagos" DOUBLE PRECISION NOT NULL,
    "rpCancelados" DOUBLE PRECISION NOT NULL,
    "saldoFinal" DOUBLE PRECISION NOT NULL,
    "relatorioEstadualId" INTEGER NOT NULL,

    CONSTRAINT "RestosAPagarParaCumprimentoDoLimiteEstadual23_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ControleDisponibilidadeFinanceiraEConciliacaoBancariaEstadual23" (
    "id" SERIAL NOT NULL,
    "tipo" "ControleDisponibilidadeFinanceiraEConciliacaoBancariaEstadualTipos23" NOT NULL,
    "fundeb" DOUBLE PRECISION NOT NULL,
    "salarioEducacao" DOUBLE PRECISION NOT NULL,
    "relatorioEstadualId" INTEGER NOT NULL,

    CONSTRAINT "ControleDisponibilidadeFinanceiraEConciliacaoBancariaEstad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmendaConstitucionalExclusivoSiopeEstadual23" (
    "id" SERIAL NOT NULL,
    "tipo" "EmendaConstitucionalExclusivoSiopeEstadualTipos23" NOT NULL,
    "valorExigido" DOUBLE PRECISION NOT NULL,
    "valorAplicado" DOUBLE PRECISION NOT NULL,
    "diferencaCompensacao" DOUBLE PRECISION NOT NULL,
    "relatorioEstadualId" INTEGER NOT NULL,

    CONSTRAINT "EmendaConstitucionalExclusivoSiopeEstadual23_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEst_key" ON "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEstadual21"("relatorioEstadualId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "ReceitaEstadual23_relatorioEstadualId_tipo_key" ON "ReceitaEstadual23"("relatorioEstadualId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "RecursosRecebidosNaoUtilizadosEstadual23_relatorioEstadualI_key" ON "RecursosRecebidosNaoUtilizadosEstadual23"("relatorioEstadualId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "DespesaEstadual23_relatorioEstadualId_tipo_key" ON "DespesaEstadual23"("relatorioEstadualId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "DespesasCusteadasFundebExercicioEstadual23_relatorioEstadua_key" ON "DespesasCusteadasFundebExercicioEstadual23"("relatorioEstadualId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "Indicadores23Art212Estadual_relatorioEstadualId_tipo_key" ON "Indicadores23Art212Estadual"("relatorioEstadualId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "Indicador23Art25AplicacaoSuperavitEstadual_relatorioEstadua_key" ON "Indicador23Art25AplicacaoSuperavitEstadual"("relatorioEstadualId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "Indicador23Art25Maximo10PorCentoDeSuperavitEstadual_relator_key" ON "Indicador23Art25Maximo10PorCentoDeSuperavitEstadual"("relatorioEstadualId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "ApuracaoDespesasLimiteMinimoConstitucionalEstadual23_relato_key" ON "ApuracaoDespesasLimiteMinimoConstitucionalEstadual23"("relatorioEstadualId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "ApuracaoLimiteMinimoConstitucionalEstadual23_relatorioEstad_key" ON "ApuracaoLimiteMinimoConstitucionalEstadual23"("relatorioEstadualId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "RestosAPagarParaCumprimentoDoLimiteEstadual23_relatorioEsta_key" ON "RestosAPagarParaCumprimentoDoLimiteEstadual23"("relatorioEstadualId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "ControleDisponibilidadeFinanceiraEConciliacaoBancariaEstadu_key" ON "ControleDisponibilidadeFinanceiraEConciliacaoBancariaEstadual23"("relatorioEstadualId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "EmendaConstitucionalExclusivoSiopeEstadual23_relatorioEstad_key" ON "EmendaConstitucionalExclusivoSiopeEstadual23"("relatorioEstadualId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadua_key" ON "ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadual21"("relatorioEstadualId", "tipo");

-- AddForeignKey
ALTER TABLE "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEstadual21" ADD CONSTRAINT "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEs_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES "RelatorioEstadual21"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReceitaEstadual23" ADD CONSTRAINT "ReceitaEstadual23_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES "RelatorioEstadual23"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecursosRecebidosNaoUtilizadosEstadual23" ADD CONSTRAINT "RecursosRecebidosNaoUtilizadosEstadual23_relatorioEstadual_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES "RelatorioEstadual23"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DespesaEstadual23" ADD CONSTRAINT "DespesaEstadual23_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES "RelatorioEstadual23"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DespesasCusteadasFundebExercicioEstadual23" ADD CONSTRAINT "DespesasCusteadasFundebExercicioEstadual23_relatorioEstadu_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES "RelatorioEstadual23"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Indicadores23Art212Estadual" ADD CONSTRAINT "Indicadores23Art212Estadual_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES "RelatorioEstadual23"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Indicador23Art25AplicacaoSuperavitEstadual" ADD CONSTRAINT "Indicador23Art25AplicacaoSuperavitEstadual_relatorioEstadu_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES "RelatorioEstadual23"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Indicador23Art25Maximo10PorCentoDeSuperavitEstadual" ADD CONSTRAINT "Indicador23Art25Maximo10PorCentoDeSuperavitEstadual_relato_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES "RelatorioEstadual23"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApuracaoDespesasLimiteMinimoConstitucionalEstadual23" ADD CONSTRAINT "ApuracaoDespesasLimiteMinimoConstitucionalEstadual23_relat_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES "RelatorioEstadual23"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApuracaoLimiteMinimoConstitucionalEstadual23" ADD CONSTRAINT "ApuracaoLimiteMinimoConstitucionalEstadual23_relatorioEsta_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES "RelatorioEstadual23"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestosAPagarParaCumprimentoDoLimiteEstadual23" ADD CONSTRAINT "RestosAPagarParaCumprimentoDoLimiteEstadual23_relatorioEst_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES "RelatorioEstadual23"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ControleDisponibilidadeFinanceiraEConciliacaoBancariaEstadual23" ADD CONSTRAINT "ControleDisponibilidadeFinanceiraEConciliacaoBancariaEstad_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES "RelatorioEstadual23"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmendaConstitucionalExclusivoSiopeEstadual23" ADD CONSTRAINT "EmendaConstitucionalExclusivoSiopeEstadual23_relatorioEsta_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES "RelatorioEstadual23"("id") ON DELETE CASCADE ON UPDATE CASCADE;
