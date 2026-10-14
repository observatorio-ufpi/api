import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { join } from 'path';

// Client Prisma do schema educacao_v2 (prisma/educacao-v2/schema.prisma)
const prismaClientPath = join(
  __dirname,
  '..',
  '..',
  '..',
  '..',
  'prisma',
  'educacao-v2',
  'generated',
  'educacao-v2-client',
);

@Injectable()
export class PrismaEducacaoV2Service implements OnModuleInit, OnModuleDestroy {
  private prismaClient: any;

  constructor() {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { PrismaClient } = require(prismaClientPath);
      this.prismaClient = new PrismaClient({
        datasources: {
          dbEducacaoV2: {
            url: process.env.DATABASE_URL_EDUCACAO_V2,
          },
        },
      });
    } catch (error) {
      console.error('Erro ao importar o Prisma Client (educacao-v2):', error);
      throw error;
    }
  }

  async onModuleInit() {
    await this.prismaClient.$connect();
    console.log('✅ Conectado no schema educacao_v2 com sucesso!');
  }

  async onModuleDestroy() {
    await this.prismaClient?.$disconnect();
  }

  get $queryRaw() {
    return this.prismaClient?.$queryRaw.bind(this.prismaClient);
  }

  get fatoEducacao() {
    return this.prismaClient?.fatoEducacao;
  }

  get dimensao() {
    return this.prismaClient?.dimensao;
  }

  get valorDimensao() {
    return this.prismaClient?.valorDimensao;
  }

  get localidade() {
    return this.prismaClient?.localidade;
  }
}
