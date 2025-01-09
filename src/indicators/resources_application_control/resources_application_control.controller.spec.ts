import { Test, TestingModule } from '@nestjs/testing';
import { ResourcesApplicationControlController } from './resources_application_control.controller';

describe('ResourcesApplicationControlController', () => {
  let controller: ResourcesApplicationControlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResourcesApplicationControlController],
    }).compile();

    controller = module.get<ResourcesApplicationControlController>(ResourcesApplicationControlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
