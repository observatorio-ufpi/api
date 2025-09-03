import { Test, TestingModule } from '@nestjs/testing';
import { RpebCompositionController } from './rpeb_composition.controller';

describe('RpebCompositionController', () => {
  let controller: RpebCompositionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RpebCompositionController],
    }).compile();

    controller = module.get<RpebCompositionController>(
      RpebCompositionController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
