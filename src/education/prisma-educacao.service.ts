import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { join } from 'path';

// Caminho correto para o Prisma Client
const prismaClientPath = join(
  __dirname,
  '..',
  '..',
  '..',
  'prisma',
  'educacao',
  'generated',
  'educacao-client',
);

// Use dynamic import
@Injectable()
export class PrismaEducacaoService implements OnModuleInit, OnModuleDestroy {
  private prismaClient: any;

  constructor() {
    const importPrisma = async () => {
      try {
        const { PrismaClient } = await import(prismaClientPath);
        this.prismaClient = new PrismaClient({
          datasources: {
            db: {
              url: process.env.DATABASE_URL_EDUCACAO,
            },
          },
        });
      } catch (error) {
        console.error('Erro ao importar o Prisma Client:', error);
        throw error;
      }
    };

    importPrisma();
  }

  async onModuleInit() {
    await this.prismaClient?.$connect();
  }

  async onModuleDestroy() {
    await this.prismaClient?.$disconnect();
  }

  // Expose methods to access the prisma client
  get $queryRaw() {
    return this.prismaClient?.$queryRaw.bind(this.prismaClient);
  }

  get dadoEducacaoBasica() {
    return this.prismaClient?.dadoEducacaoBasica;
  }

  // Add other needed properties/methods here
}
