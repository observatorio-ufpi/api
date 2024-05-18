import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ResearchesService } from './researches.service';

@ApiTags('researches')
@Controller('researches')
export class ResearchesController {
  constructor(private readonly researchesService: ResearchesService) {}

  @Get('/mt-revenue')
  municipalTaxesRevenues() {
    return this.researchesService.municipalTaxesRevenue();
  }

  @Get('/ct-revenue')
  constitutionalTransfersRevenue() {
    return this.researchesService.constitutionalTransfersRevenue();
  }

  @Get('/cf-revenue')
  complementationFundeb() {
    return this.researchesService.complementationFundeb();
  }

  @Get('/mf-revenue')
  municipalFundeb() {
    return this.researchesService.municipalFundeb();
  }

  @Get('/municipal-revenue')
  municipalRevenue() {
    return this.researchesService.municipalRevenue();
  }
}
