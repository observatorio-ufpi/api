import { Test, TestingModule } from '@nestjs/testing';
import { ResourcesApplicationControlService } from './resources_application_control.service';

describe('ResourcesApplicationControlService', () => {
  let service: ResourcesApplicationControlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResourcesApplicationControlService],
    }).compile();

    service = module.get<ResourcesApplicationControlService>(
      ResourcesApplicationControlService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
