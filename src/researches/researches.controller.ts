import { Controller, Get } from '@nestjs/common';
import { ResearchesService } from './researches.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('researches')
@Controller('researches')
export class ResearchesController {
  constructor(private readonly researchesService: ResearchesService) {}

  @Get('/ct-revenue')
  constitutionalTransfersRevenue() {
    return this.researchesService.constitutionalTransfersRevenue();
  }
}
