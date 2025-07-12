export interface BaseEducationData {
  year: number;
  total: number;
}

export interface DetailedEducationData extends BaseEducationData {
  education_level_mod_id?: number;
  education_level_mod_name?: string;
  adm_dependency_detailed_id?: number;
  adm_dependency_detailed_name?: string;
  location_id?: number;
  location_name?: string;
  contract_type_id?: number;
  contract_type_name?: string;
  original_tipo?: string;
}

export interface EducationResponse {
  result: DetailedEducationData[];
  pagination?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
  metadata?: {
    filters: Record<string, any>;
    dimensions: string[];
    source: string;
    lastUpdated?: Date;
  };
}

export interface FilterParams {
  years: number[];
  state: string;
  city?: string;
  isHistorical?: boolean;
}

export interface ResponseMapper {
  mapToStandardFormat(
    data: any[],
    filterParams: FilterParams,
    dimensions: string[],
  ): EducationResponse;
}

export enum DataSourceType {
  DADOS_EDUCACAO_BASICA = 'dados_educacao_basica',
  DADOS_EDUCACAO_BASICA_APOS23 = 'dados_educacao_basica_apos23',
}

export interface MappingContext {
  tipo: string;
  filterParams: FilterParams;
  dimensions: string[];
  dataSource: DataSourceType;
}
