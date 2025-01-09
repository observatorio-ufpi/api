import { Test, TestingModule } from '@nestjs/testing';
import { RpebCompositionService } from './rpeb_composition.service';

describe('RpebCompositionService', () => {
  let service: RpebCompositionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RpebCompositionService],
    }).compile();

    service = module.get<RpebCompositionService>(RpebCompositionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
