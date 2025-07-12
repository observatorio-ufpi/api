import { Test, TestingModule } from '@nestjs/testing';
import { EducationExpenseCompositionController } from './education_expense_composition.controller';

describe('EducationExpenseCompositionController', () => {
  let controller: EducationExpenseCompositionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EducationExpenseCompositionController],
    }).compile();

    controller = module.get<EducationExpenseCompositionController>(
      EducationExpenseCompositionController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
