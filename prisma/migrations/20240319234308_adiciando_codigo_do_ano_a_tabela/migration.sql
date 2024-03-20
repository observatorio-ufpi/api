/*
  Warnings:

  - You are about to drop the `ItemDespesa` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ItemReceita` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `dotacaoAtualizada` to the `Despesa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dotacaoInicial` to the `Despesa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `percentual` to the `Despesa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receitasRealizadaAteBimestre` to the `Despesa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receitasRealizadaBimestre` to the `Despesa` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `tipo` on the `Despesa` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `percentual` to the `Receita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `previsaoAtualizada` to the `Receita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `previsaoInicial` to the `Receita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receitasRealizadaAteBimestre` to the `Receita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receitasRealizadaBimestre` to the `Receita` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `tipo` on the `Receita` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `codigoMunicipio` to the `RelatorioMunicipal` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ItemDespesa" DROP CONSTRAINT "ItemDespesa_despesaId_fkey";

-- DropForeignKey
ALTER TABLE "ItemReceita" DROP CONSTRAINT "ItemReceita_receitaId_fkey";

-- AlterTable
ALTER TABLE "Despesa" ADD COLUMN     "dotacaoAtualizada" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "dotacaoInicial" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "percentual" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "receitasRealizadaAteBimestre" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "receitasRealizadaBimestre" DOUBLE PRECISION NOT NULL,
DROP COLUMN "tipo",
ADD COLUMN     "tipo" "ItemDespesaTipos" NOT NULL;

-- AlterTable
ALTER TABLE "Receita" ADD COLUMN     "percentual" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "previsaoAtualizada" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "previsaoInicial" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "receitasRealizadaAteBimestre" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "receitasRealizadaBimestre" DOUBLE PRECISION NOT NULL,
DROP COLUMN "tipo",
ADD COLUMN     "tipo" "ItemReceitaTipos" NOT NULL;

-- AlterTable
ALTER TABLE "RelatorioMunicipal" ADD COLUMN     "codigoMunicipio" TEXT NOT NULL;

-- DropTable
DROP TABLE "ItemDespesa";

-- DropTable
DROP TABLE "ItemReceita";
