import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { SeedingModule } from './seeding/seeding.module';

@Module({
  imports: [PrismaModule, SeedingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
