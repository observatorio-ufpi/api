import { Module } from '@nestjs/common';
import { PrismaEducacaoService } from '../prisma-educacao.service';
import { HigherController } from './higher.controller';
import { HigherService } from './higher.service';

@Module({
  controllers: [HigherController],
  providers: [HigherService, PrismaEducacaoService],
})
export class HigherModule {}
