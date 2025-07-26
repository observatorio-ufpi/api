import { Module } from '@nestjs/common';
import { RateService } from './rate.service';
import { RateController } from './rate.controller';
import { PrismaEducacaoModule } from '../prisma-educacao.module';

@Module({
  imports: [PrismaEducacaoModule],
  controllers: [RateController],
  providers: [RateService],
})
export class RateModule {}
