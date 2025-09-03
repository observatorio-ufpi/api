import { Test, TestingModule } from '@nestjs/testing';
import { HigherController } from './higher.controller';
import { HigherService } from './higher.service';

describe('HigherController', () => {
  let controller: HigherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HigherController],
      providers: [HigherService],
    }).compile();

    controller = module.get<HigherController>(HigherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
