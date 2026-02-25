import { GeneralFiltersDto } from '../dtos/filters.dto';

export function buildFilters(filters: GeneralFiltersDto) {
  console.log('[buildFilters] Input filters:', JSON.stringify(filters));
  const whereClause: any = {};
  const otherFilters: any = {};

  // Separar filtros normais dos filtros especiais
  if (filters.codigoMunicipio) {
    otherFilters.codigoMunicipio = filters.codigoMunicipio;
  }

  if (filters.aglomeradoMunicipio) {
    otherFilters.aglomeradoMunicipio = filters.aglomeradoMunicipio;
  }

  if (filters.faixaPopulacionalMunicipio) {
    otherFilters.faixaPopulacionalMunicipio =
      filters.faixaPopulacionalMunicipio;
  }

  if (filters.territorioDeDesenvolvimentoMunicipio) {
    otherFilters.territorioDeDesenvolvimentoMunicipio =
      filters.territorioDeDesenvolvimentoMunicipio;
  }

  // Se há filtro de gerência, criar uma estrutura OR com os outros filtros
  if (filters.gerenciaRegionalMunicipio) {
    const gerenciaConditions = [
      {
        gerenciaRegionalMunicipio: {
          equals: filters.gerenciaRegionalMunicipio,
        },
      }, // Exato
      {
        gerenciaRegionalMunicipio: {
          startsWith: `${filters.gerenciaRegionalMunicipio},`,
        },
      }, // Início
      {
        gerenciaRegionalMunicipio: {
          contains: `, ${filters.gerenciaRegionalMunicipio},`,
        },
      }, // Meio
      {
        gerenciaRegionalMunicipio: {
          endsWith: `, ${filters.gerenciaRegionalMunicipio}`,
        },
      }, // Final
    ];

    // Se há outros filtros, combiná-los com AND: (OR das gerências) E (outros filtros)
    if (Object.keys(otherFilters).length > 0) {
      whereClause.AND = [
        { OR: gerenciaConditions },
        otherFilters,
      ];
    } else {
      whereClause.OR = gerenciaConditions;
    }
  } else {
    // Se não há filtro de gerência, usar os filtros normais
    Object.assign(whereClause, otherFilters);
  }

  console.log('[buildFilters] Output whereClause:', JSON.stringify(whereClause, null, 2));
  return whereClause;
}
