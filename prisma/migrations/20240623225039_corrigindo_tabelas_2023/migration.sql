/*
  Warnings:

  - You are about to drop the column `porcentagemAplicado` on the `ApuracaoLimiteMinimoConstitucional23` table. All the data in the column will be lost.
  - You are about to drop the column `inscritasRestosAPagarNaoProcessados` on the `Despesa23` table. All the data in the column will be lost.
  - You are about to drop the column `inscritasRestosAPagarNaoProcessados` on the `DespesasCusteadasFundebExercicio23` table. All the data in the column will be lost.
  - You are about to drop the column `inscritasRestosAPagarSemCaixa` on the `DespesasCusteadasFundebExercicio23` table. All the data in the column will be lost.
  - You are about to drop the column `porcentagemNaoAplicado` on the `Indicador23Art25Maximo10PorCentoDeSuperavit` table. All the data in the column will be lost.
  - You are about to drop the column `porcentagemAplicado` on the `Indicadores23Art212` table. All the data in the column will be lost.
  - Added the required column `percentualAplicado` to the `ApuracaoLimiteMinimoConstitucional23` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inscritosEmRestosAPagarNaoProcessados` to the `Despesa23` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inscritasEmRestosAPagarSemCaixa` to the `DespesasCusteadasFundebExercicio23` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inscritosEmRestosAPagarNaoProcessados` to the `DespesasCusteadasFundebExercicio23` table without a default value. This is not possible if the table is not empty.
  - Added the required column `percentualNaoAplicado` to the `Indicador23Art25Maximo10PorCentoDeSuperavit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `percentualAplicado` to the `Indicadores23Art212` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ApuracaoLimiteMinimoConstitucional23" DROP COLUMN "porcentagemAplicado",
ADD COLUMN     "percentualAplicado" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Despesa23" DROP COLUMN "inscritasRestosAPagarNaoProcessados",
ADD COLUMN     "inscritosEmRestosAPagarNaoProcessados" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "DespesasCusteadasFundebExercicio23" DROP COLUMN "inscritasRestosAPagarNaoProcessados",
DROP COLUMN "inscritasRestosAPagarSemCaixa",
ADD COLUMN     "inscritasEmRestosAPagarSemCaixa" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "inscritosEmRestosAPagarNaoProcessados" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Indicador23Art25Maximo10PorCentoDeSuperavit" DROP COLUMN "porcentagemNaoAplicado",
ADD COLUMN     "percentualNaoAplicado" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Indicadores23Art212" DROP COLUMN "porcentagemAplicado",
ADD COLUMN     "percentualAplicado" DOUBLE PRECISION NOT NULL;
