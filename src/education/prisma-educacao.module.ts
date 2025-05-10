import { Module } from '@nestjs/common';
import { PrismaEducacaoService } from './prisma-educacao.service';

@Module({
  providers: [PrismaEducacaoService],
  exports: [PrismaEducacaoService],
})
export class PrismaEducacaoModule {}
