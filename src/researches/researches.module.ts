import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ResearchesController } from './researches.controller';
import { ResearchesService } from './researches.service';

@Module({
  imports: [PrismaModule],
  controllers: [ResearchesController],
  providers: [ResearchesService],
})
export class ResearchesModule {}
