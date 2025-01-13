import { Test, TestingModule } from '@nestjs/testing';
import { FinancingCapacityService } from './financing_capacity.service';

describe('FinancingCapacityService', () => {
  let service: FinancingCapacityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinancingCapacityService],
    }).compile();

    service = module.get<FinancingCapacityService>(FinancingCapacityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
