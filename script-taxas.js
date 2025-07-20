import axios from 'axios';
import { PrismaClient } from './prisma/educacao/generated/educacao-client/index.js';

const prisma = new PrismaClient();
const URL_BASE = 'https://simcaq.c3sl.ufpr.br/api/v1/';
const ESTADO_PIAUI = 22;

const FAIXAS_ETARIAS = [
  { id: 1, nome: '0 a 3 anos', idade_inicial: 0, idade_final: 3 },
  { id: 2, nome: '4 a 5 anos', idade_inicial: 4, idade_final: 5 },
  { id: 3, nome: '6 a 10 anos', idade_inicial: 6, idade_final: 10 },
  { id: 4, nome: '11 a 14 anos', idade_inicial: 11, idade_final: 14 },
  { id: 5, nome: '15 a 17 anos', idade_inicial: 15, idade_final: 17 },
  { id: 6, nome: '18 a 24 anos', idade_inicial: 18, idade_final: 24 },
  { id: 7, nome: 'Acima de 24 anos', idade_inicial: 25, idade_final: null },
];

async function preencherFaixaEtariaTaxas() {
  for (const faixa of FAIXAS_ETARIAS) {
    await prisma.faixaEtariaTaxas.upsert({
      where: { id: faixa.id },
      create: faixa,
      update: faixa,
    });
  }
  console.log('Dimensão FaixaEtariaTaxas preenchida!');
}

function construirUrl(ano) {
  const dims = 'dims=age_range_pop_school';
  const filter = `min_year:%22${ano}%22,max_year:%22${ano}%22,state:%22${ESTADO_PIAUI}%22`;
  return `${URL_BASE}pop_out_school?${dims}&filter=${filter}`;
}

async function importarTaxasAno(ano) {
  const url = construirUrl(ano);
  console.log('Buscando:', url);
  const response = await axios.get(url);
  const dados = response.data.result || [];
  let count = 0;
  for (const item of dados) {
    // Verificar se o registro já existe
    const registroExistente = await prisma.taxasPorFaixaEtaria.findFirst({
      where: {
        tipo: 'pop_out_school',
        ano: ano,
        localidade_id: ESTADO_PIAUI,
        faixa_etaria_taxas_id: item.age_range_pop_school_id,
      },
    });

    const dadosParaSalvar = {
      tipo: 'pop_out_school',
      ano: ano,
      total: Number(item.total),
      denominador: item.denominator ? Number(item.denominator) : null,
      numerador: item.pop_total ? Number(item.pop_total) : null,
      localidade_id: ESTADO_PIAUI,
      faixa_etaria_taxas_id: item.age_range_pop_school_id,
    };

    if (registroExistente) {
      // Atualizar registro existente
      await prisma.taxasPorFaixaEtaria.update({
        where: { id: registroExistente.id },
        data: {
          total: dadosParaSalvar.total,
          denominador: dadosParaSalvar.denominador,
          numerador: dadosParaSalvar.numerador,
        },
      });
    } else {
      // Criar novo registro
      await prisma.taxasPorFaixaEtaria.create({
        data: dadosParaSalvar,
      });
    }
    count++;
  }
  console.log(`Ano ${ano}: ${count} registros importados.`);
}

async function main() {
  await preencherFaixaEtariaTaxas();
  for (let ano = 2019; ano <= 2023; ano++) {
    await importarTaxasAno(ano);
  }
  await prisma.$disconnect();
  console.log('Importação concluída!');
}

main().catch((e) => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
