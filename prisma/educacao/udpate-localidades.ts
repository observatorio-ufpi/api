import { PrismaClient } from './generated/educacao-client';
import * as fs from 'fs';
import * as path from 'path';

import { parse } from 'csv-parse/sync';

const prisma = new PrismaClient();

async function main() {
  const csvFilePath = process.argv[2];

  if (!csvFilePath) {
    console.error('Erro: informe o caminho do arquivo CSV como argumento.');
    process.exit(1);
  }

  // Lê o CSV e faz o parse
  const fileContent = fs.readFileSync(path.resolve(csvFilePath), 'utf-8');
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  });

  let totalAtualizados = 0;

  for (const record of records) {
    const codigoIbge = String(record['codigo_ibge']); // nome correto
    const nomeMunicipio = record['Nome_Município'];
    const territorio = record['Territórios de Desenvolvimento'];
    const aglomerado = record['Aglomerado'] ? String(record['Aglomerado']) : null;
    const gre = record['Gerência Regional de Ensino GRE'];
    const populacao = record['População em 2022 IBGE'] ? parseInt(record['População em 2022 IBGE']) : null;
    const faixaPop = record['Faixa populacional'];

    try {
      const updated = await prisma.localidade.updateMany({
        where: { codigo_ibge: codigoIbge },
        data: {
          nome: nomeMunicipio,
          territorio_desenvolvimento: territorio,
          aglomerado,
          gerencia_regional: gre,
          populacao_2022: populacao,
          faixa_populacional: faixaPop,
        },
      });

      if (updated.count > 0) {
        totalAtualizados += updated.count;
        console.log(`✅ Município ${nomeMunicipio} (${codigoIbge}) atualizado.`);
      } else {
        console.warn(`⚠️  Nenhum registro encontrado para código IBGE ${codigoIbge}.`);
      }
    } catch (err) {
      console.error(`Erro ao atualizar município ${nomeMunicipio} (${codigoIbge}):`, err);
    }
  }

  console.log(`\n✅ Atualização concluída. Total de municípios atualizados: ${totalAtualizados}`);
  await prisma.$disconnect();
}

main().catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
