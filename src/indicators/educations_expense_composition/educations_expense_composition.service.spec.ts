import { Test, TestingModule } from '@nestjs/testing';
import { EducationsExpenseCompositionService } from './educations_expense_composition.service';

describe('EducationsExpenseCompositionService', () => {
  let service: EducationsExpenseCompositionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EducationsExpenseCompositionService],
    }).compile();

    service = module.get<EducationsExpenseCompositionService>(EducationsExpenseCompositionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
