import { PrismaClient } from './generated/educacao-client';
const prisma = new PrismaClient();

async function clean() {
  console.log('Iniciando a limpeza da tabela censo_escolar_infraestrutura...');
  const { count } = await prisma.censoEscolarInfraestrutura.deleteMany({});
  console.log(`${count} registros foram deletados com sucesso.`);
}

clean()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());