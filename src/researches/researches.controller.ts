import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ResearchesService } from './researches.service';

@ApiTags('researches')
@Controller('researches')
export class ResearchesController {
  constructor(private readonly researchesService: ResearchesService) {}

  @Get('/mot-revenue')
  municipalTaxesRevenues() {
    return this.researchesService.municipalOwnTaxesRevenue();
  }

  @Get('/ct-revenue')
  constitutionalTransfersRevenue() {
    return this.researchesService.constitutionalTransfersRevenue();
  }

  @Get('/mf-revenue')
  municipalFundeb() {
    return this.researchesService.municipalFundebFundefComposition();
  }

  @Get('/cf-revenue')
  complementationFundeb() {
    return this.researchesService.complementationFundebFundef();
  }

  @Get('/mt-revenue')
  municipalRevenue() {
    return this.researchesService.municipalTaxesRevenue();
  }
}
