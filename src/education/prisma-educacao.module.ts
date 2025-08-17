import { Module } from '@nestjs/common';
import { PrismaEducacaoService } from './prisma-educacao.service';
import { HigherModule } from './higher/higher.module';

@Module({
  providers: [PrismaEducacaoService],
  exports: [PrismaEducacaoService],
  imports: [HigherModule],
})
export class PrismaEducacaoModule {}
