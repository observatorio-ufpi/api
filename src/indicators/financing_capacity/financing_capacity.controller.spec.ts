import { Test, TestingModule } from '@nestjs/testing';
import { FinancingCapacityController } from './financing_capacity.controller';

describe('FinancingCapacityController', () => {
  let controller: FinancingCapacityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinancingCapacityController],
    }).compile();

    controller = module.get<FinancingCapacityController>(
      FinancingCapacityController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
