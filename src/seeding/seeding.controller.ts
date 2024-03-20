import { Controller, Post } from '@nestjs/common';
import { SeedingService } from './seeding.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('seeding')
@Controller('seeding')
export class SeedingController {
  constructor(private readonly seedingService: SeedingService) {}

  @Post()
  async seedDatabase() {
    await this.seedingService.seedDatabaseTenToFourteen();
  }
}
