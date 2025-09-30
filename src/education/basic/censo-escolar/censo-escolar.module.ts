import { Module } from '@nestjs/common';
import { PrismaEducacaoModule } from '../../prisma-educacao.module';
import { CensoEscolarController } from './censo-escolar.controller';
import { CensoEscolarService } from './censo-escolar.service';

import { CensoEscolarMapper } from './mappers/censo-escolar.mapper';

@Module({
  imports: [PrismaEducacaoModule],
  controllers: [CensoEscolarController],
  providers: [CensoEscolarService, CensoEscolarMapper],
})
export class CensoEscolarModule {}
