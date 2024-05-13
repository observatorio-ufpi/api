import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ResearchesModule } from './researches/researches.module';

@Module({
  imports: [PrismaModule, ResearchesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
