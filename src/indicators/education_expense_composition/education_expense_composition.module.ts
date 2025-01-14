import { Module } from '@nestjs/common';
import { EducationExpenseCompositionService } from './education_expense_composition.service';
import { EducationExpenseCompositionController } from './education_expense_composition.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EducationExpenseCompositionController],
  providers: [EducationExpenseCompositionService],
})
export class EducationExpenseCompositionModule {}
