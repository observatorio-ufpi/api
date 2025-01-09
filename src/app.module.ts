import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ResearchesModule } from './researches/researches.module';
import { IndicatorsModule } from './indicators/revenue_composition/indicators.module';
import { FinancingCapacityController } from './indicators/financing_capacity/financing_capacity.controller';
import { FinancingCapacityService } from './indicators/financing_capacity/financing_capacity.service';
import { RpebCompositionController } from './indicators/rpeb_composition/rpeb_composition.controller';
import { RpebCompositionService } from './indicators/rpeb_composition/rpeb_composition.service';
import { ResourcesApplicationControlController } from './indicators/resources_application_control/resources_application_control.controller';
import { ResourcesApplicationControlService } from './indicators/resources_application_control/resources_application_control.service';
import { EducationExpenseCompositionController } from './indicators/education_expense_composition/education_expense_composition.controller';
import { EducationsExpenseCompositionService } from './indicators/educations_expense_composition/educations_expense_composition.service';

@Module({
  imports: [PrismaModule, ResearchesModule, IndicatorsModule],
  controllers: [
    AppController,
    FinancingCapacityController,
    RpebCompositionController,
    ResourcesApplicationControlController,
    EducationExpenseCompositionController,
  ],
  providers: [
    AppService,
    FinancingCapacityService,
    RpebCompositionService,
    ResourcesApplicationControlService,
    EducationsExpenseCompositionService,
  ],
})
export class AppModule {}
