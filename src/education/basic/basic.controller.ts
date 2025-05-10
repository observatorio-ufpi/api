import { Controller, Get, Query } from '@nestjs/common';
import { BasicService } from './basic.service';

@Controller('basicEducation')
export class BasicController {
  constructor(private readonly basicService: BasicService) {}

  @Get('enrollment')
  getEnrollment(@Query('dims') dims: string, @Query('filter') filter: string) {
    return this.basicService.getEnrollment(dims, filter);
  }

  @Get('enrollmentAggregate')
  getEnrollmentAggregate(
    @Query('dims') dims: string,
    @Query('filter') filter: string,
  ) {
    return this.basicService.getEnrollmentAggregate(dims, filter);
  }

  @Get('school/count')
  getSchoolCount(@Query('dims') dims: string, @Query('filter') filter: string) {
    return this.basicService.getSchoolCount(dims, filter);
  }

  @Get('class')
  getClass(@Query('dims') dims: string, @Query('filter') filter: string) {
    return this.basicService.getClass(dims, filter);
  }

  @Get('teacher')
  getTeacher(@Query('dims') dims: string, @Query('filter') filter: string) {
    return this.basicService.getTeacher(dims, filter);
  }

  @Get('auxiliar')
  getAuxiliar(@Query('dims') dims: string, @Query('filter') filter: string) {
    return this.basicService.getAuxiliar(dims, filter);
  }

  @Get('employees')
  getEmployees(@Query('dims') dims: string, @Query('filter') filter: string) {
    return this.basicService.getEmployees(dims, filter);
  }

  @Get('out_of_school')
  getOutOfSchool(@Query('dims') dims: string, @Query('filter') filter: string) {
    return this.basicService.getOutOfSchool(dims, filter);
  }

  @Get('liquid_enrollment_ratio')
  getLiquidEnrollmentRatio(
    @Query('dims') dims: string,
    @Query('filter') filter: string,
  ) {
    return this.basicService.getLiquidEnrollmentRatio(dims, filter);
  }

  @Get('gloss_enrollment_ratio')
  getGlossEnrollmentRatio(
    @Query('dims') dims: string,
    @Query('filter') filter: string,
  ) {
    return this.basicService.getGlossEnrollmentRatio(dims, filter);
  }

  @Get('rate_school_new')
  getRateSchoolNew(
    @Query('dims') dims: string,
    @Query('filter') filter: string,
  ) {
    return this.basicService.getRateSchoolNew(dims, filter);
  }
}
