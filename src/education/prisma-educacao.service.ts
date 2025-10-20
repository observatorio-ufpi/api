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
    // Inicialização síncrona no construtor
    try {
      console.log('DATABASE_URL_EDUCACAO:', process.env.DATABASE_URL_EDUCACAO);
      const { PrismaClient } = require(prismaClientPath);
      this.prismaClient = new PrismaClient({
        datasources: {
          dbEducacao: {
            url: process.env.DATABASE_URL_EDUCACAO,
          },
        },
      });
    } catch (error) {
      console.error('Erro ao importar o Prisma Client:', error);
      throw error;
    }
  }

  async onModuleInit() {
    if (this.prismaClient) {
      // Tentar conectar com retry
      let attempts = 0;
      const maxAttempts = 5;

      while (attempts < maxAttempts) {
        try {
          console.log(
            `Tentando conectar no banco de educação... (tentativa ${attempts + 1}/${maxAttempts})`,
          );
          await this.prismaClient.$connect();
          console.log('✅ Conectado no banco de educação com sucesso!');
          return;
        } catch (error) {
          attempts++;
          console.error(
            `❌ Erro ao conectar no banco de educação (tentativa ${attempts}):`,
            error.message,
          );

          if (attempts < maxAttempts) {
            console.log(
              `⏳ Aguardando 3 segundos antes da próxima tentativa...`,
            );
            await new Promise((resolve) => setTimeout(resolve, 3000));
          } else {
            console.error(
              '❌ Falha ao conectar no banco de educação após todas as tentativas',
            );
            throw error;
          }
        }
      }
    }
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

  get dadoEducacaoBasicaApos23() {
    return this.prismaClient?.dadoEducacaoBasicaApos23;
  }

  // Educação Superior
  get dadoEducacaoSuperior() {
    return this.prismaClient?.dadoEducacaoSuperior;
  }

  get instituicaoEnsinoSuperior() {
    return this.prismaClient?.instituicaoEnsinoSuperior;
  }

  get localidade() {
    return this.prismaClient?.localidade;
  }

  get entidade() {
    return this.prismaClient?.entidade;
  }

  get taxasPorFaixaEtaria() {
    return this.prismaClient?.taxasPorFaixaEtaria;
  }

  get taxas() {
    return this.prismaClient?.taxas;
  }

  get censoEscolarInfraestrutura() {
    return this.prismaClient?.censoEscolarInfraestrutura;
  }

  // Add other needed properties/methods here
}
