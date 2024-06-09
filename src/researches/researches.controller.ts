import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ResearchesService } from './researches.service';

@ApiTags('researches')
@Controller('researches')
export class ResearchesController {
  constructor(private readonly researchesService: ResearchesService) {}

  @Get('/mot-revenue')
  municipalOwnTaxesRevenues() {
    return this.researchesService.municipalOwnTaxesRevenue();
  }

  @Get('/ct-revenue')
  constitutionalTransfersRevenue() {
    return this.researchesService.constitutionalTransfersRevenue();
  }

  @Get('/mt-revenue')
  municipalTaxesRevenues() {
    return this.researchesService.municipalTaxesRevenue();
  }

  @Get('/addtional-education-revenue')
  additionalMunicipalEducationRevenue() {
    return this.researchesService.additionalMunicipalEducationRevenue();
  }

  @Get('/mfc-revenue')
  municipalFundebFundefComposition() {
    return this.researchesService.municipalFundebFundefComposition();
  }

  @Get('/cf-revenue')
  complementationFundebFundef() {
    return this.researchesService.complementationFundebFundef();
  }

  @Get('/mc-limit-revenue')
  municipalConstitutionalLimitMde() {
    return this.researchesService.municipalConstitutionalLimitMde();
  }

  @Get('/basic-education-expense')
  expensesBasicEducationFundeb() {
    return this.researchesService.expensesBasicEducationFundeb();
  }

  @Get('/areas-activity-expense')
  expensesAreasOfActivityMde() {
    return this.researchesService.expensesAreasOfActivityMde();
  }

  @Get('/basic-education-minimal-potential-revenue')
  municipalBasicEducationMinimalPotentialRevenue() {
    return this.researchesService.municipalBasicEducationMinimalPotentialRevenue();
  }
}
