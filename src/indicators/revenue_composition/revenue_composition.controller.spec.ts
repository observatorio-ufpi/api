import { Test, TestingModule } from '@nestjs/testing';
import { RevenueCompositionController } from './revenue_composition.controller';

describe('RevenueCompositionController', () => {
  let controller: RevenueCompositionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RevenueCompositionController],
    }).compile();

    controller = module.get<RevenueCompositionController>(
      RevenueCompositionController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
