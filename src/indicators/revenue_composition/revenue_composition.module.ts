import { Module } from '@nestjs/common';
import { RevenueCompositionService } from './revenue_composition.service';
import { RevenueCompositionController } from './revenue_composition.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RevenueCompositionController],
  providers: [RevenueCompositionService],
})
export class RevenueCompositionModule {}
