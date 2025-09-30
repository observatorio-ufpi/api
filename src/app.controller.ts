import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaEducacaoService } from './education/prisma-educacao.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prismaEducacaoService: PrismaEducacaoService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('infra/teste')
  async testeInfra() {
    // Use o Prisma Client da educação para a consulta
    return this.prismaEducacaoService.censoEscolarInfraestrutura.findFirst();
  }
}