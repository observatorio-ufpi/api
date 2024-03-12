/*
  Warnings:

  - You are about to drop the column `topicoId` on the `ItemDespesa` table. All the data in the column will be lost.
  - You are about to drop the column `topicoId` on the `ItemReceita` table. All the data in the column will be lost.
  - Added the required column `despesaId` to the `ItemDespesa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receitaId` to the `ItemReceita` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ItemDespesa" DROP CONSTRAINT "ItemDespesa_topicoId_fkey";

-- DropForeignKey
ALTER TABLE "ItemReceita" DROP CONSTRAINT "ItemReceita_topicoId_fkey";

-- AlterTable
ALTER TABLE "ItemDespesa" DROP COLUMN "topicoId",
ADD COLUMN     "despesaId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ItemReceita" DROP COLUMN "topicoId",
ADD COLUMN     "receitaId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ItemReceita" ADD CONSTRAINT "ItemReceita_receitaId_fkey" FOREIGN KEY ("receitaId") REFERENCES "Receita"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemDespesa" ADD CONSTRAINT "ItemDespesa_despesaId_fkey" FOREIGN KEY ("despesaId") REFERENCES "Despesa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
