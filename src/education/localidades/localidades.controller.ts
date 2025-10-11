
import { Controller, Get } from '@nestjs/common';
import { LocalidadesService } from './localidades.service';

@Controller('localidades')
export class LocalidadesController {
  constructor(private readonly localidadesService: LocalidadesService) {}

  @Get('opcoes-filtro')
  getFilterOptions() {
    return this.localidadesService.getFilterOptions();
  }
}
