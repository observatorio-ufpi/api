import { Test, TestingModule } from '@nestjs/testing';
import { HigherService } from './higher.service';

describe('HigherService', () => {
  let service: HigherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HigherService],
    }).compile();

    service = module.get<HigherService>(HigherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
