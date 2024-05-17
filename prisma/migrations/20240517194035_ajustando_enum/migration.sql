/*
  Warnings:

  - The values [SALDO_FINANCEIRO_NO_EXERCICIO_ATUAL] on the enum `ControleDisponibilidadeFinanceiraTipo1718` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ControleDisponibilidadeFinanceiraTipo1718_new" AS ENUM ('SALDO_FINANCEIRO_31_DE_DEZEMBRO_ANO_ANTERIOR', 'INGRESSO_RECURSOS_ATE_BIM', 'PAGAMENTOS_EFETUADOS_ATE_BIM', 'ORCAMENTO_DO_EXERCICIO', 'RESTOS_A_PAGAR', 'RECEITA_APLICACAO_FINANCEIRA_DOS_RECURSOS_ATE_BIM', 'DISPONIBILIDADE_FINANCEIRA_ATE_O_BIM', 'AJUSTES', 'RETENCOES', 'CONCILIACAO_BANCARIA', 'SALDO_FINANCEIRO_CONCILIADO');
ALTER TABLE "ControleDisponibilidadeFinanceira1718" ALTER COLUMN "tipo" TYPE "ControleDisponibilidadeFinanceiraTipo1718_new" USING ("tipo"::text::"ControleDisponibilidadeFinanceiraTipo1718_new");
ALTER TYPE "ControleDisponibilidadeFinanceiraTipo1718" RENAME TO "ControleDisponibilidadeFinanceiraTipo1718_old";
ALTER TYPE "ControleDisponibilidadeFinanceiraTipo1718_new" RENAME TO "ControleDisponibilidadeFinanceiraTipo1718";
DROP TYPE "ControleDisponibilidadeFinanceiraTipo1718_old";
COMMIT;
