import { Module } from '@nestjs/common';
import { PrismaEducacaoService } from './prisma-educacao.service';
import { RateModule } from './rate/rate.module';

@Module({
  providers: [PrismaEducacaoService],
  exports: [PrismaEducacaoService],
  imports: [RateModule],
})
export class PrismaEducacaoModule {}
