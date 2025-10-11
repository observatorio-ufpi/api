import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';

import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    try {
      console.log('Tentando conectar no banco principal...');
      await this.$connect();
      console.log('✅ Conectado no banco principal com sucesso!');
    } catch (error) {
      console.error('❌ Erro ao conectar no banco principal:', error);
      throw error;
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
