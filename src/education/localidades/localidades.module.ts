
import { Module } from '@nestjs/common';
import { LocalidadesController } from './localidades.controller';
import { LocalidadesService } from './localidades.service';
import { PrismaEducacaoModule } from '../prisma-educacao.module';
@Module({
  imports: [PrismaEducacaoModule],
  controllers: [LocalidadesController],
  providers: [LocalidadesService],
})
export class LocalidadesModule {}
