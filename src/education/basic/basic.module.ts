import { Module } from '@nestjs/common';
import { PrismaEducacaoModule } from '../prisma-educacao.module';
import { BasicController } from './basic.controller';
import { BasicService } from './basic.service';
import { EducationResponseMapper } from './mappers/education-response.mapper';

@Module({
  imports: [PrismaEducacaoModule],
  controllers: [BasicController],
  providers: [BasicService, EducationResponseMapper],
})
export class BasicModule {}
