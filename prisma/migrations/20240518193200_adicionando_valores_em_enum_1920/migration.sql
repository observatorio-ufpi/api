-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "ControleDisponibilidadeFinanceiraTipo1920" ADD VALUE 'VALOR_A_RECUPERAR';
ALTER TYPE "ControleDisponibilidadeFinanceiraTipo1920" ADD VALUE 'OUTROS_VALORES_EXTRA_ORCAMENTARIO';
