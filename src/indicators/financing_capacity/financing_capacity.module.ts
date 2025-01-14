import { Module } from '@nestjs/common';
import { FinancingCapacityService } from './financing_capacity.service';
import { FinancingCapacityController } from './financing_capacity.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [FinancingCapacityController],
  providers: [FinancingCapacityService],
})
export class FinancingCapacityModule {}
