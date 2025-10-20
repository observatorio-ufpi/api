// Script para atualizar CO_ENTIDADE (como Int)

import { PrismaClient } from './generated/educacao-client'; // Verifique o caminho
import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse'; // npm install csv-parse

const prisma = new PrismaClient();

const PASTA_VALIDACAO = 'C:/teste_salvamento/validacao/';
const ANOS = [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]; // Ajuste conforme necessário

interface EntidadeValidacao {
  CO_ENTIDADE: number; // ✅ TIPO CORRETO (number)
  NO_ENTIDADE: string;
  CO_MUNICIPIO: string;
  TP_DEPENDENCIA?: number;
  TP_LOCALIZACAO?: number;
}

async function lerValidacao(ano: number): Promise<Map<string, EntidadeValidacao>> {
  const arquivoValidacao = path.join(PASTA_VALIDACAO, `validacao_${ano}_piaui.csv`);
  const mapa = new Map<string, EntidadeValidacao>();

  if (!fs.existsSync(arquivoValidacao)) {
    console.log(`  ⚠ Arquivo não encontrado: ${arquivoValidacao}`);
    return mapa;
  }

  const parser = fs.createReadStream(arquivoValidacao)
    .pipe(parse({ 
      delimiter: ';',
      columns: true,
      trim: true,
      bom: true
    }));

  for await (const row of parser) {
    const chave = `${row['NO_ENTIDADE']}|${row['CO_MUNICIPIO']}|${row['TP_DEPENDENCIA']}|${row['TP_LOCALIZACAO']}`;
    
    mapa.set(chave, {
      CO_ENTIDADE: parseInt(row['CO_ENTIDADE'], 10), // ✅ LÓGICA CORRETA (parseInt)
      NO_ENTIDADE: row['NO_ENTIDADE'],
      CO_MUNICIPIO: row['CO_MUNICIPIO'],
      TP_DEPENDENCIA: parseInt(row['TP_DEPENDENCIA'], 10),
      TP_LOCALIZACAO: parseInt(row['TP_LOCALIZACAO'], 10)
    });
  }

  return mapa;
}

async function atualizarCO_ENTIDADE(ano: number, mapaValidacao: Map<string, EntidadeValidacao>) {
  console.log(`\n📝 Atualizando CO_ENTIDADE para registros de ${ano}...`);

  let atualizados = 0;
  let naoEncontrados = 0;
  let jaPopulados = 0;

  const registros = await prisma.censoEscolarInfraestrutura.findMany({
    where: {
      ANO: ano,
      CO_ENTIDADE: null
    },
    select: {
      id: true,
      NO_ENTIDADE: true,
      CO_MUNICIPIO: true,
      TP_DEPENDENCIA: true,
      TP_LOCALIZACAO: true,
      ANO: true
    }
  });

  console.log(`  Encontrados ${registros.length} registros sem CO_ENTIDADE`);

  for (const registro of registros) {
    const chave = `${registro.NO_ENTIDADE}|${registro.CO_MUNICIPIO}|${registro.TP_DEPENDENCIA}|${registro.TP_LOCALIZACAO}`;
    const entidadeValidacao = mapaValidacao.get(chave);

    if (!entidadeValidacao) {
      naoEncontrados++;
      console.warn(`  ⚠ Não encontrado: "${registro.NO_ENTIDADE}" | ${registro.CO_MUNICIPIO}`);
      continue;
    }

    try {
      await prisma.censoEscolarInfraestrutura.update({
        where: { id: registro.id },
        data: { CO_ENTIDADE: entidadeValidacao.CO_ENTIDADE } // ✅ AQUI VAI O NÚMERO
      });
      atualizados++;

      if (atualizados % 100 === 0) {
        console.log(`  ✓ ${atualizados} registros atualizados...`);
      }
    } catch (error) {
      console.error(`  ✗ Erro ao atualizar ID ${registro.id}:`, error);
    }
  }

  const comCO = await prisma.censoEscolarInfraestrutura.count({
    where: {
      ANO: ano,
      CO_ENTIDADE: { not: null }
    }
  });
  jaPopulados = comCO;

  console.log(`\n  📊 Resumo ${ano}:`);
  console.log(`      ✓ Atualizados: ${atualizados}`);
  console.log(`      ⚠ Não encontrados: ${naoEncontrados}`);
  console.log(`      ℹ Já populados: ${jaPopulados}`);
  console.log(`      ℹ Total de registros do ano: ${registros.length + jaPopulados}`);

  return { atualizados, naoEncontrados, jaPopulados };
}

async function main() {
  console.log('\n╔════════════════════════════════════════════════════════════╗');
  console.log('║ ATUALIZANDO CO_ENTIDADE NOS DADOS EXISTENTES                 ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');

  let totalAtualizados = 0;
  let totalNaoEncontrados = 0;

  for (const ano of ANOS) {
    console.log(`\n--- Processando ano: ${ano} ---`);
    
    console.log(`  📖 Carregando dados de validação...`);
    const mapaValidacao = await lerValidacao(ano);
    console.log(`  ✓ ${mapaValidacao.size} entidades únicas carregadas`);

    if (mapaValidacao.size === 0) {
      console.log(`  ⚠ Nenhum dado de validação para ${ano}. Pulando.`);
      continue;
    }

    const resultado = await atualizarCO_ENTIDADE(ano, mapaValidacao);
    totalAtualizados += resultado.atualizados;
    totalNaoEncontrados += resultado.naoEncontrados;
  }

  console.log('\n╔════════════════════════════════════════════════════════════╗');
  console.log('║ ✅ ATUALIZAÇÃO FINALIZADA!                                 ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');
  console.log(`Total de registros atualizados: ${totalAtualizados}`);
  if (totalNaoEncontrados > 0) {
    console.log(`⚠ Registros não encontrados: ${totalNaoEncontrados}`);
  }
}

main()
  .catch((e) => {
    console.error('❌ Ocorreu um erro:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });