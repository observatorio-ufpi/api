import { Test, TestingModule } from '@nestjs/testing';
import { RevenueCompositionService } from './revenue_composition.service';

describe('RevenueCompositionService', () => {
  let service: RevenueCompositionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RevenueCompositionService],
    }).compile();

    service = module.get<RevenueCompositionService>(RevenueCompositionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
