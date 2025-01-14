import { Module } from '@nestjs/common';
import { RpebCompositionService } from './rpeb_composition.service';
import { RpebCompositionController } from './rpeb_composition.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RpebCompositionController],
  providers: [RpebCompositionService],
})
export class RpebCompositionModule {}
