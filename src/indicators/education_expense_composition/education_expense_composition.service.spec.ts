import { Test, TestingModule } from '@nestjs/testing';
import { EducationExpenseCompositionService } from './education_expense_composition.service';

describe('EducationExpenseCompositionService', () => {
  let service: EducationExpenseCompositionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EducationExpenseCompositionService],
    }).compile();

    service = module.get<EducationExpenseCompositionService>(
      EducationExpenseCompositionService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
