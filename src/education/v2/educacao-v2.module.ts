import { Module } from '@nestjs/common';
import { EducacaoV2Controller } from './educacao-v2.controller';
import { EducacaoV2Service } from './educacao-v2.service';
import { PrismaEducacaoV2Service } from './prisma-educacao-v2.service';

@Module({
  controllers: [EducacaoV2Controller],
  providers: [EducacaoV2Service, PrismaEducacaoV2Service],
})
export class EducacaoV2Module {}
