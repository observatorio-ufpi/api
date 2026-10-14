import {
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
  ServiceUnavailableException,
} from '@nestjs/common';
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

/**
 * Acesso ao schema educacao_v2.
 *
 * Em ambientes onde o client gerado ou a env DATABASE_URL_EDUCACAO_V2 não
 * existem, o serviço NÃO derruba a aplicação: loga o problema e os endpoints
 * /v2/educacao/* passam a responder 503, mantendo a API v1 intacta.
 */
@Injectable()
export class PrismaEducacaoV2Service implements OnModuleInit, OnModuleDestroy {
  private prismaClient: any;
  private indisponivel: string | null = null;

  constructor() {
    if (!process.env.DATABASE_URL_EDUCACAO_V2) {
      this.indisponivel =
        'DATABASE_URL_EDUCACAO_V2 não definida; módulo educacao-v2 desabilitado.';
      console.warn(`⚠️  ${this.indisponivel}`);
      return;
    }

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
      this.indisponivel =
        'Prisma Client do educacao-v2 não encontrado (rode npm run prisma:generate); módulo desabilitado.';
      console.error(`⚠️  ${this.indisponivel}`, error);
    }
  }

  async onModuleInit() {
    if (!this.prismaClient) return;
    try {
      await this.prismaClient.$connect();
      console.log('✅ Conectado no schema educacao_v2 com sucesso!');
    } catch (error) {
      this.indisponivel =
        'Falha ao conectar no schema educacao_v2; módulo desabilitado.';
      console.error(`⚠️  ${this.indisponivel}`, error);
      this.prismaClient = undefined;
    }
  }

  async onModuleDestroy() {
    await this.prismaClient?.$disconnect();
  }

  /** Lança 503 se o módulo estiver desabilitado neste ambiente. */
  private get client() {
    if (!this.prismaClient) {
      throw new ServiceUnavailableException(
        this.indisponivel ?? 'Base educacao_v2 indisponível.',
      );
    }
    return this.prismaClient;
  }

  get $queryRaw() {
    return this.client.$queryRaw.bind(this.client);
  }

  get fatoEducacao() {
    return this.client.fatoEducacao;
  }

  get dimensao() {
    return this.client.dimensao;
  }

  get valorDimensao() {
    return this.client.valorDimensao;
  }

  get localidade() {
    return this.client.localidade;
  }
}
