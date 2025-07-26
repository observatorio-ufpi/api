import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasicModule } from './education/basic/basic.module';
import { RateModule } from './education/rate/rate.module';
import { EducationExpenseCompositionModule } from './indicators/education_expense_composition/education_expense_composition.module';
import { FinancingCapacityModule } from './indicators/financing_capacity/financing_capacity.module';
import { ResourcesApplicationControlModule } from './indicators/resources_application_control/resources_application_control.module';
import { RevenueCompositionModule } from './indicators/revenue_composition/revenue_composition.module';
import { RpebCompositionModule } from './indicators/rpeb_composition/rpeb_composition.module';
import { PrismaModule } from './prisma/prisma.module';
import { ResearchesModule } from './researches/researches.module';

@Module({
  imports: [
    PrismaModule,
    ResearchesModule,
    RevenueCompositionModule,
    RpebCompositionModule,
    FinancingCapacityModule,
    ResourcesApplicationControlModule,
    EducationExpenseCompositionModule,
    BasicModule,
    RateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
