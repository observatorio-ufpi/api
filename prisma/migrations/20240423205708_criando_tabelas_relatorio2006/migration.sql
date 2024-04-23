-- CreateEnum
CREATE TYPE "ItemReceitaTipos06" AS ENUM ('RECEITA_RESULTANTE_DE_IMPOSTOS', 'RECEITAS_DE_IMPOSTOS', 'IMPOSTOS', 'DIVIDA_ATIVA_DOS_IMPOSTOS', 'MULTAS_JUROS_MORA_IMPOSTOS_E_DIVIDA', 'RECEITAS_DE_TRANSFERENCIAS_CONSTITUCIONAIS_E_LEGAL', 'COTA_PARTE_FPM_85_PORCENTO', 'TRANSFERENCIA_FINANCEIRA_ICMS_DESONERACAO', 'COTA_PARTE_ICMS_85_PORCENTO', 'COTA_PARTE_IPI_EXPORTACAO_85_PORCENTO', 'PARCELA_TRANSFERENCIAS_DESTINADAS_A_FORMACAO_DO_FUNDEF', 'COTA_PARTE_ITR_100_PORCENTO', 'COTA_PARTE_IOF_OURO_100_PORCENTO', 'COTA_PARTE_IPVA_100_PORCENTO', 'RECEITAS_VINCULADAS_AD_ENSINO', 'TRANSFERENCIAS_MULTIGOVERNAMENTAIS_DO_FUNDEF', 'TRANSFERENCIAS_DE_RECURSOS_DO_FUNDEF', 'COMPLEMENTACAO_DA_UNIAO_AO_FUNDEF', 'TRANSFERENCIAS_DO_FNDE', 'TRANSFERENCIAS_DO_SALARIO_EDUCACAO', 'OUTRAS_TRANSFERENCIAS_DO_FNDE', 'TRANSFERENCIAS_DESTINADAS_A_PROGRAMAS_DE_EDUCACAO', 'RECEITA_DE_OPERACOES_DE_CREDITO_DESTINADAS_A_EDUCACAO', 'OUTRAS_RECEITAS_DESTINADAS_EDUCACAO', 'TOTAL_RECEITAS');

-- CreateEnum
CREATE TYPE "ItemDespesaTipos06" AS ENUM ('DESPESAS_VINCULADAS_RECEITAS_RESULTANTES_DE_IMPOSTOS', 'DESPESAS_COM_ENSINO_FUNDAMENTAL', 'DESPESAS_COM_EDUCACAO_INFANTIL_CRECHES_E_PRE_ESCOLAS', 'OUTRAS_DESPESAS_COM_ENSINO', 'DESPESAS_VINCULADAS_AO_FUNDEF_NO_ENSINO_FUNDAMENTAL', 'PAGAMENTO_PROFISSIONAIS_MAGISTERIO_DO_ENSINO_FUNDAMENTAL', 'OUTRAS_DESPESAS_NO_ENSINO_FUNDAMENTAL', 'VINCULADAS_A_CONTRIBUICAO_SOCIAL_DO_SALARIO_EDUCACAO', 'FINANCIADAS_COM_RECURSOS_DE_OPERACOES_DE_CREDITO', 'FINANCIADAS_COM_OUTROS_RECURSOS_VINCULADOS_A_EDUCACAO', 'TOTAL_DAS_DESPESAS_COM_ENSINO', 'ENSINO_FUNDAMENTAL', 'ENSINO_MEDIO', 'ENSINO_PROFISSIONAL', 'ENSINO_SUPERIOR', 'EDUCACAO_INFANTIL', 'EDUCACAO_DE_JOVENS_E_ADULTOS', 'EDUCACAO_ESPECIAL', 'OUTRAS_SUBFUNCOES', 'TOTAL_DAS_DESPESAS_COM_ENSINO_POR_SUBFUNCAO');

-- CreateEnum
CREATE TYPE "PerdaGanhoTransferenciasFundebTipo06" AS ENUM ('PERDA_NAS_TRANSFERENCIAS_DO_FUNDEF', 'GANHO_NAS_TRANSFERENCIAS_DO_FUNDEF');

-- CreateEnum
CREATE TYPE "DeducoesDaDespesaTipo06" AS ENUM ('PARCELA_GANHO_DO_FUNDEF_APLICADA_NO_EXERCICIO', 'RESTOS_A_PAGAR_INSCRITOS_SEM_DISPONIBILIDADE_FINANCEIRA', 'DESPESAS_COM_ENSINO_FUNDAMENTAL', 'DESPESAS_COM_EDUCACAO_INFANTIL_CRECHES_E_PRE_ESCOLAS', 'DESPESAS_VINCULADAS_SUPERAVIT_FINANCEIRO_DO_GANHO_FUNDEF', 'TOTAL');

-- CreateEnum
CREATE TYPE "ControleRestosAPagarVinculadosEducacaoTipo06" AS ENUM ('RESTOS_A_PAGAR_DE_DESPESAS_COM_MANUTENCAO_ENSINO', 'RESTOS_A_PAGAR_DE_DESPESAS_COM_ENSINO_FUNDAMENTAL');

-- CreateEnum
CREATE TYPE "CompensacaoRestosAPagarTipo06" AS ENUM ('MANUTENCAO_DESENVOLVIMENTO_DO_ENSINO', 'ENSINO_FUNDAMENTAL', 'TOTAL_DAS_DESPESAS_PARA_FINS_LIMITE_CONSTITUCIONAL');

-- CreateEnum
CREATE TYPE "SaldoFinanceiroFundefTipo06" AS ENUM ('SALDO_FINANCEIRO_DO_FUNDEF');

-- CreateEnum
CREATE TYPE "TabelaCumprimentoLimitesConstitucionaisTipo06" AS ENUM ('MINIMO_DE_25_PORCENTO_DAS_RECEITAS_RESULTANTES_DE_IMPOSTOS', 'MINIMO_60_PORCENTO_DOS_RECURSOS_COM_MDE_ENSINO_FUNDAMENTAL', 'MINIMO_60_PORCENTO_DO_FUNDEF_NA_REMUNERACAO_ENSINO_FUNDAMENTAL');

-- CreateTable
CREATE TABLE "RelatorioMunicipal06" (
    "id" SERIAL NOT NULL,
    "ano" TEXT NOT NULL,
    "codigoMunicipio" TEXT NOT NULL,

    CONSTRAINT "RelatorioMunicipal06_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Receita06" (
    "id" SERIAL NOT NULL,
    "tipo" "ItemReceitaTipos06" NOT NULL,
    "previsaoInicial" DOUBLE PRECISION NOT NULL,
    "previsaoAtualizada" DOUBLE PRECISION NOT NULL,
    "receitasRealizadasNoAno" DOUBLE PRECISION NOT NULL,
    "receitasRealizadasPercentual" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "Receita06_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Despesa06" (
    "id" SERIAL NOT NULL,
    "tipo" "ItemDespesaTipos06" NOT NULL,
    "dotacaoInicial" DOUBLE PRECISION NOT NULL,
    "dotacaoAtualizada" DOUBLE PRECISION NOT NULL,
    "depesasLiquidadasNoAno" DOUBLE PRECISION NOT NULL,
    "depesasLiquidadasPercentual" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "Despesa06_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PerdaGanhoTransferenciasFundeb" (
    "id" SERIAL NOT NULL,
    "tipo" "PerdaGanhoTransferenciasFundebTipo06" NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "PerdaGanhoTransferenciasFundeb_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeducoesDaDespesa" (
    "id" SERIAL NOT NULL,
    "tipo" "DeducoesDaDespesaTipo06" NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "DeducoesDaDespesa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ControleRestosAPagarVinculadosEducacao" (
    "id" SERIAL NOT NULL,
    "tipo" "ControleRestosAPagarVinculadosEducacaoTipo06" NOT NULL,
    "aplicacaoMinimaAnoAnterior" DOUBLE PRECISION NOT NULL,
    "aplicacaoApuradaAnoAnterior" DOUBLE PRECISION NOT NULL,
    "restosAPagarAnoAnterior" DOUBLE PRECISION NOT NULL,
    "restosAPagarCanceladaAnoAtul" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "ControleRestosAPagarVinculadosEducacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompensacaoRestosAPagar" (
    "id" SERIAL NOT NULL,
    "tipo" "CompensacaoRestosAPagarTipo06" NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "CompensacaoRestosAPagar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SaldoFinanceiroFundef" (
    "id" SERIAL NOT NULL,
    "tipo" "SaldoFinanceiroFundefTipo06" NOT NULL,
    "anoAnterior" DOUBLE PRECISION NOT NULL,
    "anoAtual" INTEGER NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "SaldoFinanceiroFundef_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TabelaCumprimentoLimitesConstitucionais" (
    "id" SERIAL NOT NULL,
    "tipo" "TabelaCumprimentoLimitesConstitucionaisTipo06" NOT NULL,
    "porcentagem" DOUBLE PRECISION NOT NULL,
    "relatorioMunicialId" INTEGER NOT NULL,

    CONSTRAINT "TabelaCumprimentoLimitesConstitucionais_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Receita06_relatorioMunicialId_tipo_key" ON "Receita06"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "Despesa06_relatorioMunicialId_tipo_key" ON "Despesa06"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "PerdaGanhoTransferenciasFundeb_relatorioMunicialId_tipo_key" ON "PerdaGanhoTransferenciasFundeb"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "DeducoesDaDespesa_relatorioMunicialId_tipo_key" ON "DeducoesDaDespesa"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "ControleRestosAPagarVinculadosEducacao_relatorioMunicialId__key" ON "ControleRestosAPagarVinculadosEducacao"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "CompensacaoRestosAPagar_relatorioMunicialId_tipo_key" ON "CompensacaoRestosAPagar"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "SaldoFinanceiroFundef_relatorioMunicialId_tipo_key" ON "SaldoFinanceiroFundef"("relatorioMunicialId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "TabelaCumprimentoLimitesConstitucionais_relatorioMunicialId_key" ON "TabelaCumprimentoLimitesConstitucionais"("relatorioMunicialId", "tipo");

-- AddForeignKey
ALTER TABLE "Receita06" ADD CONSTRAINT "Receita06_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal06"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Despesa06" ADD CONSTRAINT "Despesa06_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal06"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PerdaGanhoTransferenciasFundeb" ADD CONSTRAINT "PerdaGanhoTransferenciasFundeb_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal06"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeducoesDaDespesa" ADD CONSTRAINT "DeducoesDaDespesa_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal06"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ControleRestosAPagarVinculadosEducacao" ADD CONSTRAINT "ControleRestosAPagarVinculadosEducacao_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal06"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompensacaoRestosAPagar" ADD CONSTRAINT "CompensacaoRestosAPagar_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal06"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SaldoFinanceiroFundef" ADD CONSTRAINT "SaldoFinanceiroFundef_relatorioMunicialId_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal06"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TabelaCumprimentoLimitesConstitucionais" ADD CONSTRAINT "TabelaCumprimentoLimitesConstitucionais_relatorioMunicialI_fkey" FOREIGN KEY ("relatorioMunicialId") REFERENCES "RelatorioMunicipal06"("id") ON DELETE CASCADE ON UPDATE CASCADE;
