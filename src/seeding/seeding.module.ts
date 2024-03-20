import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SeedingController } from './seeding.controller';
import { SeedingService } from './seeding.service';

@Module({
  imports: [PrismaModule],
  providers: [SeedingService],
  controllers: [SeedingController],
})
export class SeedingModule {}
