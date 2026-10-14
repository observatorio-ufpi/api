import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { EducacaoV2Service } from './educacao-v2.service';

@ApiTags('Educação Básica v2')
@Controller('v2/educacao')
export class EducacaoV2Controller {
  constructor(private readonly service: EducacaoV2Service) {}

  @Get('indicadores')
  @ApiOperation({
    summary: 'Listar indicadores',
    description:
      'Indicadores disponíveis no schema educacao_v2: matriculas, docentes, turmas, escolas, funcionarios, auxiliares.',
  })
  getIndicadores() {
    return this.service.getIndicadores();
  }

  @Get('catalogo')
  @ApiOperation({
    summary: 'Catálogo de recortes',
    description:
      'Para cada recorte (indicador + dims_canonico): dimensões componentes, anos disponíveis e tipo de série ' +
      '(continua = série única 2007-2024; composta = unificada pela API com soma de categorias; ' +
      'quebrada = metodologias incompatíveis, consulta segmentada por era). ' +
      'O filtro de ano do front deve ser dirigido por este catálogo.',
  })
  @ApiQuery({
    name: 'indicador',
    required: false,
    description: 'Filtrar recortes de um indicador (ex.: docentes)',
    example: 'docentes',
  })
  getCatalogo(@Query('indicador') indicador?: string) {
    return this.service.getCatalogo(indicador);
  }

  @Get('dimensoes/:nome/valores')
  @ApiOperation({
    summary: 'Valores de uma dimensão',
    description:
      'Valores canônicos de uma dimensão (ex.: gender -> Feminino, Masculino).',
  })
  getValoresDimensao(@Param('nome') nome: string) {
    return this.service.getValoresDimensao(nome);
  }

  @Get('fatos')
  @ApiOperation({
    summary: 'Consultar fatos',
    description:
      'Consulta por indicador + recorte (1D ou 2D) + intervalo de anos + localidades. ' +
      'Séries "composta" são unificadas internamente (retorno em dados); ' +
      'séries "quebrada" retornam em segmentos por era, nunca emendadas.',
  })
  @ApiQuery({ name: 'indicador', required: true, example: 'matriculas' })
  @ApiQuery({
    name: 'recorte',
    required: true,
    description: 'dims_canonico do catálogo (ex.: ethnic_group_gender)',
    example: 'ethnic_group_gender',
  })
  @ApiQuery({ name: 'anoInicio', required: false, example: '2015' })
  @ApiQuery({ name: 'anoFim', required: false, example: '2024' })
  @ApiQuery({
    name: 'localidades',
    required: false,
    description: 'IDs IBGE separados por vírgula (vazio = todos os municípios)',
    example: '2211001',
  })
  @ApiQuery({
    name: 'agregar',
    required: false,
    description: 'true = somar os totais das localidades filtradas',
  })
  @ApiQuery({
    name: 'era',
    required: false,
    description: 'Para séries quebradas: "classico" ou "moderno"',
  })
  @ApiQuery({ name: 'limite', required: false, example: '20000' })
  getFatos(
    @Query('indicador') indicador: string,
    @Query('recorte') recorte: string,
    @Query('anoInicio') anoInicio?: string,
    @Query('anoFim') anoFim?: string,
    @Query('localidades') localidades?: string,
    @Query('agregar') agregar?: string,
    @Query('era') era?: string,
    @Query('limite') limite?: string,
  ) {
    return this.service.getFatos({
      indicador,
      recorte,
      anoInicio: anoInicio ? parseInt(anoInicio, 10) : undefined,
      anoFim: anoFim ? parseInt(anoFim, 10) : undefined,
      localidades,
      agregar: agregar === 'true' || agregar === '1',
      era,
      limite: limite ? parseInt(limite, 10) : undefined,
    });
  }
}
