import { Module } from '@nestjs/common';
import { PrismaEducacaoModule } from '../prisma-educacao.module';
import { BasicController } from './basic.controller';
import { BasicService } from './basic.service';

@Module({
  imports: [PrismaEducacaoModule],
  controllers: [BasicController],
  providers: [BasicService],
})
export class BasicModule {}
