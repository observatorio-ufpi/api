-- CreateEnum
CREATE TYPE "ItemReceitaEstadualTipos21" AS ENUM ('RECEITA_DE_IMPOSTOS', 'RECEITA_ICMS', 'RECEITA_ICMS_PRINCIPAL_ENCARGOS', 'RECEITA_ICMS_ADICIONAL_FUNDO_COMBATE_POBREZA', 'RECEITA_ITCD', 'RECEITA_IPVA', 'RECEITA_IRRF', 'RECEITA_TRANSFERENCIAS_CONSTITUCIONAIS_LEGAIS', 'RECEITA_FPE', 'RECEITA_IPI_EXPORTACAO', 'RECEITA_IOF_OURO', 'RECEITA_COMPENSACOES_FINANCEIRAS', 'DEDUCOES_TRANSFERENCIAS_CONSTITUCIONAIS_MUNICIPIOS', 'DEDUCAO_ICMS_MUNICIPIOS', 'DEDUCAO_IPVA_MUNICIPIOS', 'DEDUCAO_IPI_EXPORTACAO_MUNICIPIOS', 'RECEITA_LIQUIDA_RESULTANTE_IMPOSTOS', 'TOTAL_DESTINADO_FUNDEB', 'VALOR_MINIMO_MDE_ALEM_FUNDEB', 'RECEITAS_RECEBIDAS_FUNDEB', 'RECEITA_FUNDEB_IMPOSTOS_TRANSFERENCIAS', 'RECEITA_FUNDEB_IMPOSTOS_PRINCIPAL', 'RECEITA_FUNDEB_IMPOSTOS_RENDIMENTO_APLICACAO', 'RECEITA_FUNDEB_COMPLEMENTACAO_UNIAO_VAAF', 'RECEITA_FUNDEB_COMPLEMENTACAO_UNIAO_VAAF_PRINCIPAL', 'RECEITA_FUNDEB_COMPLEMENTACAO_UNIAO_VAAF_RENDIMENTO_APLICACAO', 'RECEITA_FUNDEB_COMPLEMENTACAO_UNIAO_VAAT', 'RECEITA_FUNDEB_COMPLEMENTACAO_UNIAO_VAAT_PRINCIPAL', 'RECEITA_FUNDEB_COMPLEMENTACAO_UNIAO_VAAT_RENDIMENTO_APLICACAO', 'RESULTADO_LIQUIDO_TRANSFERENCIAS_FUNDEB', 'RECEITA_TRANSFERENCIAS_FNDE', 'RECEITA_FNDE_SALARIO_EDUCACAO', 'RECEITA_FNDE_PDDE', 'RECEITA_FNDE_PNAE', 'RECEITA_FNDE_PNATE', 'RECEITA_FNDE_OUTRAS_TRANSFERENCIAS', 'RECEITA_TRANSFERENCIAS_CONVENIOS', 'RECEITA_ROYALTIES_EDUCACAO', 'RECEITA_OPERACOES_CREDITO_EDUCACAO', 'OUTRAS_RECEITAS_FINANCIAMENTO_ENSINO', 'RECEITAS_ADICIONAIS_FINANCIAMENTO_ENSINO');

-- CreateEnum
CREATE TYPE "ItemDespesasEstadualTipos21" AS ENUM ('PROFISSIONAIS_EDUCACAO_BASICA', 'PROFISSIONAIS_EDUCACAO_BASICA_ENSINO_FUNDAMENTAL', 'PROFISSIONAIS_EDUCACAO_BASICA_ENSINO_MEDIO', 'OUTRAS_DESPESAS', 'OUTRAS_DESPESAS_ENSINO_FUNDAMENTAL', 'OUTRAS_DESPESAS_ENSINO_MEDIO', 'TOTAL_DESPESAS_RECURSOS_FUNDEB', 'EDUCACAO_INFANTIL', 'EDUCACAO_INFANTIL_CRECHE', 'EDUCACAO_INFANTIL_PRE_ESCOLA', 'ENSINO_FUNDAMENTAL', 'ENSINO_MEDIO', 'ENSINO_SUPERIOR', 'ENSINO_PROFISSIONAL_NAO_INTEGRADO', 'TOTAL_DESPESAS_ACOES_TIPICAS_MDE', 'OUTRAS_DESPESAS_C_EDUCACAO_EDUCACAO_INFANTIL', 'OUTRAS_DESPESAS_C_EDUCACAO_CRECHE', 'OUTRAS_DESPESAS_C_EDUCACAO_PRE_ESCOLA', 'OUTRAS_DESPESAS_C_EDUCACAO_ENSINO_FUNDAMENTAL', 'OUTRAS_DESPESAS_C_EDUCACAO_ENSINO_MEDIO', 'OUTRAS_DESPESAS_C_EDUCACAO_ENSINO_SUPERIOR', 'OUTRAS_DESPESAS_C_EDUCACAO_ENS_PROFISSIONAL_NAO_INTEGRADO', 'TOTAL_OUTRAS_DESPESAS_EDUCACAO', 'TOTAL_DESPESAS_EDUCACAO', 'TOTAL_DESPESAS_EDUCACAO_DESPESAS_CORRENTES', 'TOTAL_DESPESAS_EDUCACAO_DESPESAS_CORRENTES_PESSOAL_ATIVO', 'TOTAL_DESPESAS_EDUCACAO_DESPESAS_CORRENTES_PESSOAL_INATIVO', 'TOTAL_DESPESAS_EDUCACAO_DESPESAS_CORRENTES_TRANSFERENCIAS', 'TOTAL_DESPESAS_EDUCACAO_DESPESAS_CORRENTES_OUTRAS', 'TOTAL_DESPESAS_EDUCACAO_DESPESAS_CAPITAL', 'TOTAL_DESPESAS_EDUCACAO_DESPESAS_CAPITAL_TRANSFERENCIAS', 'TOTAL_DESPESAS_EDUCACAO_DESPESAS_CAPITAL_OUTRAS');

-- CreateEnum
CREATE TYPE "DespesasCusteadasFundebExercicioEstadualTipos21" AS ENUM ('TOTAL_DESPESAS_FUNDEB_PROFISSIONAIS_EDUCACAO_BASICA', 'TOTAL_DESPESAS_FUNDEB_IMPOSTOS_TRANSFERENCIAS', 'TOTAL_DESPESAS_FUNDEB_UNIAO_VAAF', 'TOTAL_DESPESAS_FUNDEB_UNIAO_VAAT', 'TOTAL_DESPESAS_FUNDEB_UNIAO_VAAT_EDUCACAO_INFANTIL', 'TOTAL_DESPESAS_FUNDEB_UNIAO_VAAT_DESPESA_CAPITAL');

-- CreateEnum
CREATE TYPE "RecursosRecebidosNaoUtilizadosEstadualTipos21" AS ENUM ('TOTAL_RECURSOS_SUPERAVIT', 'SUPERAVIT_EXERCICIO_ANTERIOR', 'SUPERAVIT_RESIDUAL_OUTROS_EXERCICIOS', 'TOTAL_RECURSOS_FUNDEB_DISPONIVEIS_UTILIZACAO');

-- CreateEnum
CREATE TYPE "IndicadoresTipos21Art212Estadual" AS ENUM ('MINIMO_70_FUNDEB_REMUNERACAO_PROFESSORES', 'MINIMO_15_COMPLEMENTACAO_UNIAO_VAAT_DESPESAS_CAPITAL');

-- CreateEnum
CREATE TYPE "IndicadorTipos21Art25MaximoDeSuperavitEstadual" AS ENUM ('TOTAL_RECEITA_RECEBIDA_NAO_APLICADA_EXERCICIO');

-- CreateEnum
CREATE TYPE "IndicadorTipos21Art25AplicacaoSuperavitEstadual" AS ENUM ('TOTAL_DESPESAS_CUSTEADAS_COM_SUPERAVIT_FUNDEB', 'TOTAL_DESPESAS_CUSTEADAS_COM_FUNDEB_IMPOSTOS_TRANSFERENCIAS', 'TOTAL_DESPESAS_CUSTEADAS_COM_FUNDEB_COMPLEMENTACAO_UNIAO');

-- CreateEnum
CREATE TYPE "AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadualTipos21" AS ENUM ('TOTAL_DESPESAS_MDE_CUSTEADAS_COM_RECURSOS_IMPOSTOS', 'RESULTADO_LIQUIDO_TRANSFERENCIAS_FUNDEB', 'RESTOS_A_PAGAR_NAO_PROCESSADOS_S_DISPONIB_FUNDEB_IMPOSTOS', 'RESTOS_A_PAGAR_NAO_PROCESSADOS_S_DISPONIB_IMPOSTOS', 'CANCELAMENTO_RESTOS_A_PAGAR_COM_DISPONIB_IMPOSTOS', 'TOTAL_DESPESAS_PARA_FINS_LIMITE');

-- CreateEnum
CREATE TYPE "ApuracaoLimiteMinimoConstitucionalEstadualTipos21" AS ENUM ('APLICACAO_EM_MDE_SOBRE_RECEITA_DE_IMPOSTOS');

-- CreateEnum
CREATE TYPE "ControleDisponibildadeFinanceiraConciliacaoBancariaEstadualTipos21" AS ENUM ('DISPONIBILIDADE_FINANCEIRA_EM_31_DE_DEZEMBRO_ANO_ANTERIOR', 'INGRESSO_DE_RECURSOS_ATE_O_BIM_ORCAMENTARIO', 'PAGAMENTOS_EFETUADOS_ATE_O_BIM_ORCAMENTARIO_E_RESTOS_A_PAGAR', 'DISPONIBILIDADE_FINANCEIRA_ATE_O_BIM', 'AJUSTES_POSITIVOS_RETENCOES_E_OUTROS_VALORES_EXTRAORCAMENTARIOS', 'AJUSTES_NEGATIVOS_OUTROS_VALORES_EXTRAORCAMENTARIOS', 'SALDO_FINANCEIRO_CONCILIADO_SALDO_BANCARIO');

-- DropEnum
DROP TYPE "ReceitaTipos0912";

-- CreateTable
CREATE TABLE "RelatorioEstadual21" (
    "id" SERIAL NOT NULL,
    "ano" TEXT NOT NULL,
    "codigoEstado" TEXT NOT NULL,

    CONSTRAINT "RelatorioEstadual21_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReceitaEstadual21" (
    "id" SERIAL NOT NULL,
    "tipo" "ItemReceitaEstadualTipos21" NOT NULL,
    "previsaoAtualizada" DOUBLE PRECISION NOT NULL,
    "receitasRealizadaAteBimestre" DOUBLE PRECISION NOT NULL,
    "relatorioMunicipalId" INTEGER NOT NULL,

    CONSTRAINT "ReceitaEstadual21_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DespesaEstadual21" (
    "id" SERIAL NOT NULL,
    "tipo" "ItemDespesasEstadualTipos21" NOT NULL,
    "dotacaoAtualizada" DOUBLE PRECISION NOT NULL,
    "despesasEmpenhadasAteBimestre" DOUBLE PRECISION NOT NULL,
    "despesasLiquidadasAteBimestre" DOUBLE PRECISION NOT NULL,
    "despesasPagasAteBimestre" DOUBLE PRECISION NOT NULL,
    "inscritosEmRestosAPagarNaoProcessados" DOUBLE PRECISION NOT NULL,
    "relatorioEstadualId" INTEGER NOT NULL,

    CONSTRAINT "DespesaEstadual21_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DespesasCusteadasFundebExercicioEstadual21" (
    "id" SERIAL NOT NULL,
    "tipo" "DespesasCusteadasFundebExercicioEstadualTipos21" NOT NULL,
    "despesasEmpenhadasAteBimestre" DOUBLE PRECISION NOT NULL,
    "despesasLiquidadasAteBimestre" DOUBLE PRECISION NOT NULL,
    "despesasPagasAteBimestre" DOUBLE PRECISION NOT NULL,
    "inscritosEmRestosAPagarNaoProcessados" DOUBLE PRECISION NOT NULL,
    "inscritosEmRestosAPagarNaoProcessadosSemCaixa" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "DespesasCusteadasFundebExercicioEstadual21_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecursosRecebidosNaoUtilizadosEstadual21" (
    "id" SERIAL NOT NULL,
    "tipo" "RecursosRecebidosNaoUtilizadosEstadualTipos21" NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "RecursosRecebidosNaoUtilizadosEstadual21_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Indicadores21Art212Estadual" (
    "id" SERIAL NOT NULL,
    "tipo" "IndicadoresTipos21Art212Estadual" NOT NULL,
    "valorExigido" DOUBLE PRECISION NOT NULL,
    "valorAplicado" DOUBLE PRECISION NOT NULL,
    "valorConsideradoAposDeducoes" DOUBLE PRECISION NOT NULL,
    "percentualAplicado" DOUBLE PRECISION NOT NULL,
    "relatorioEstadualId" INTEGER NOT NULL,

    CONSTRAINT "Indicadores21Art212Estadual_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Indicador21Art25MaximoDeSuperavitEstadual" (
    "id" SERIAL NOT NULL,
    "tipo" "IndicadorTipos21Art25MaximoDeSuperavitEstadual" NOT NULL,
    "valorPermitido" DOUBLE PRECISION NOT NULL,
    "valorNaoAplicado" DOUBLE PRECISION NOT NULL,
    "valorNaoAplicadoAposDeducoes" DOUBLE PRECISION NOT NULL,
    "percentualNaoAplicado" DOUBLE PRECISION NOT NULL,
    "relatorioEstadualId" INTEGER NOT NULL,

    CONSTRAINT "Indicador21Art25MaximoDeSuperavitEstadual_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Indicador21Art25AplicacaoSuperavitEstadual" (
    "id" SERIAL NOT NULL,
    "tipo" "IndicadorTipos21Art25AplicacaoSuperavitEstadual" NOT NULL,
    "valorSuperavitPermitidoExercicioAnterior" DOUBLE PRECISION NOT NULL,
    "valorNaoAplicadoExercicioAnterior" DOUBLE PRECISION NOT NULL,
    "valorSuperavitAplicadoAtePrimeiroQuadrim" DOUBLE PRECISION NOT NULL,
    "valorAplicadoAtePrimQuarLimiteConst" DOUBLE PRECISION NOT NULL,
    "valorAplicadoAposPrimeiroQuadrim" DOUBLE PRECISION NOT NULL,
    "valorNaoAplicado" DOUBLE PRECISION NOT NULL,
    "relatorioEstadualId" INTEGER NOT NULL,

    CONSTRAINT "Indicador21Art25AplicacaoSuperavitEstadual_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual21" (
    "id" SERIAL NOT NULL,
    "tipo" "AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadualTipos21" NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "relatorioEstadualId" INTEGER NOT NULL,

    CONSTRAINT "AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual21_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApuracaoLimiteMinimoConstitucionalEstadual21" (
    "id" SERIAL NOT NULL,
    "tipo" "ApuracaoLimiteMinimoConstitucionalEstadualTipos21" NOT NULL,
    "valorExigido" DOUBLE PRECISION NOT NULL,
    "valorAplicado" DOUBLE PRECISION NOT NULL,
    "percentualAplicado" DOUBLE PRECISION NOT NULL,
    "relatorioEstadualId" INTEGER NOT NULL,

    CONSTRAINT "ApuracaoLimiteMinimoConstitucionalEstadual21_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadual21" (
    "id" SERIAL NOT NULL,
    "tipo" "ControleDisponibildadeFinanceiraConciliacaoBancariaEstadualTipos21" NOT NULL,
    "fundeb" DOUBLE PRECISION NOT NULL,
    "salarioEducacao" DOUBLE PRECISION NOT NULL,
    "relatorioEstadualId" INTEGER NOT NULL,

    CONSTRAINT "ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadu_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ReceitaEstadual21_relatorioMunicipalId_tipo_key" ON "ReceitaEstadual21"("relatorioMunicipalId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "DespesaEstadual21_relatorioEstadualId_tipo_key" ON "DespesaEstadual21"("relatorioEstadualId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "DespesasCusteadasFundebExercicioEstadual21_relatorioMunicia_key" ON "DespesasCusteadasFundebExercicioEstadual21"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "RecursosRecebidosNaoUtilizadosEstadual21_relatorioMunicialI_key" ON "RecursosRecebidosNaoUtilizadosEstadual21"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "Indicadores21Art212Estadual_relatorioEstadualId_tipo_key" ON "Indicadores21Art212Estadual"("relatorioEstadualId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "Indicador21Art25MaximoDeSuperavitEstadual_relatorioEstadual_key" ON "Indicador21Art25MaximoDeSuperavitEstadual"("relatorioEstadualId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "Indicador21Art25AplicacaoSuperavitEstadual_relatorioEstadua_key" ON "Indicador21Art25AplicacaoSuperavitEstadual"("relatorioEstadualId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual21_r_key" ON "AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual21"("relatorioEstadualId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "ApuracaoLimiteMinimoConstitucionalEstadual21_relatorioEstad_key" ON "ApuracaoLimiteMinimoConstitucionalEstadual21"("relatorioEstadualId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEst_key" ON "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEstadual21"("relatorioEstadualId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadua_key" ON "ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadual21"("relatorioEstadualId", "tipo");

-- AddForeignKey
ALTER TABLE "ReceitaEstadual21" ADD CONSTRAINT "ReceitaEstadual21_relatorioMunicipalId_fkey" FOREIGN KEY ("relatorioMunicipalId") REFERENCES "RelatorioEstadual21"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DespesaEstadual21" ADD CONSTRAINT "DespesaEstadual21_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES "RelatorioEstadual21"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DespesasCusteadasFundebExercicioEstadual21" ADD CONSTRAINT "DespesasCusteadasFundebExercicioEstadual21_relatorioMunici_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioEstadual21"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecursosRecebidosNaoUtilizadosEstadual21" ADD CONSTRAINT "RecursosRecebidosNaoUtilizadosEstadual21_relatorioMunicial_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioEstadual21"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Indicadores21Art212Estadual" ADD CONSTRAINT "Indicadores21Art212Estadual_relatorioEstadualId_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES "RelatorioEstadual21"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Indicador21Art25MaximoDeSuperavitEstadual" ADD CONSTRAINT "Indicador21Art25MaximoDeSuperavitEstadual_relatorioEstadua_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES "RelatorioEstadual21"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Indicador21Art25AplicacaoSuperavitEstadual" ADD CONSTRAINT "Indicador21Art25AplicacaoSuperavitEstadual_relatorioEstadu_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES "RelatorioEstadual21"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual21" ADD CONSTRAINT "AplicacaoDespesasFinsLimiteMinimoConstitucionalEstadual21__fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES "RelatorioEstadual21"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApuracaoLimiteMinimoConstitucionalEstadual21" ADD CONSTRAINT "ApuracaoLimiteMinimoConstitucionalEstadual21_relatorioEsta_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES "RelatorioEstadual21"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEstadual21" ADD CONSTRAINT "RestosAPagarExerciciosAntDisponibilidadeFinanceiraFundebEs_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES "RelatorioEstadual21"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadual21" ADD CONSTRAINT "ControleDisponibilidadeFinanceiraConciliacaoBancariaEstadu_fkey" FOREIGN KEY ("relatorioEstadualId") REFERENCES "RelatorioEstadual21"("id") ON DELETE CASCADE ON UPDATE CASCADE;
