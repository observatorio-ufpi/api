import path from 'path';
import { fileURLToPath } from 'url';
import { PrismaClient } from '../prisma/educacao/generated/educacao-client/index.js';

const prisma = new PrismaClient();

// Lista de IES: { codigo, nome }
const IES_LIST = [
  { codigo: '385', nome: 'UNIVERSIDADE SALVADOR' },
  { codigo: '466', nome: 'UNIVERSIDADE ANHEMBI MORUMBI' },
  { codigo: '481', nome: 'Universidade Universus Veritas Guarulhos' },
  { codigo: '494', nome: 'UNIVERSIDADE DO SUL DE SANTA CATARINA' },
  { codigo: '663', nome: 'UNIVERSIDADE SALGADO DE OLIVEIRA' },
  { codigo: '712', nome: 'CENTRO UNIVERSITÁRIO IBMR' },
  { codigo: '1414', nome: 'Centro Universitário São Lucas Porto Velho' },
  {
    codigo: '1446',
    nome: 'CENTRO UNIVERSITÁRIO PLANALTO DO DISTRITO FEDERAL - UNIPLAN',
  },
  { codigo: '2950', nome: 'Centro Universitário FADERGS' },
  { codigo: '13812', nome: 'ESCOLA SUPERIOR ABERTA DO BRASIL' },
  { codigo: '23820', nome: 'Faculdade Dunamis' },
];

async function seedIES() {
  console.log('🔧 Iniciando seed de InstituicaoEnsinoSuperior...');
  let ok = 0;
  for (const ies of IES_LIST) {
    try {
      await prisma.instituicaoEnsinoSuperior.upsert({
        where: { codigo: ies.codigo },
        create: { codigo: ies.codigo, nome: ies.nome },
        update: { nome: ies.nome },
      });
      ok++;
    } catch (e) {
      console.error('Erro ao upsert IES', ies, e?.message);
    }
  }
  console.log(
    `✅ Seed finalizado. Registros processados: ${ok}/${IES_LIST.length}`,
  );
}

async function main() {
  try {
    await seedIES();
  } finally {
    await prisma.$disconnect();
  }
}

// Executa se chamado diretamente (comparação robusta de caminhos)
try {
  const scriptPath = fileURLToPath(import.meta.url);
  const executedPath = path.resolve(process.argv[1] || '');
  if (scriptPath === executedPath) {
    main().catch((e) => {
      console.error(e);
      process.exit(1);
    });
  }
} catch (e) {
  // Fallback: tentar executar mesmo assim
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

export { seedIES };

