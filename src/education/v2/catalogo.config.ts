/**
 * Configuração do catálogo de recortes do schema educacao_v2.
 *
 * A fonte de verdade dos recortes disponíveis é o próprio banco
 * (GROUP BY indicador, dims_canonico). Este arquivo adiciona o que o banco
 * não sabe sozinho: labels em português, e a classificação das séries que
 * atravessam a mudança metodológica clássico (2007-2020) / moderno (2021+):
 *
 * - "continua": série única já unificada pela camada canônica (maioria);
 * - "composta": série montada pela API somando categorias finas do clássico
 *   nas categorias grossas do moderno (emenda validada no banco);
 * - "quebrada": agregações incompatíveis — NUNCA emendar; a consulta é
 *   segmentada por era.
 *
 * Ver prisma/educacao-v2/README.md, seções 4 e 5.
 */

export interface Indicador {
  id: string;
  label: string;
}

export const INDICADORES: Indicador[] = [
  { id: 'matriculas', label: 'Matrículas' },
  { id: 'docentes', label: 'Docentes' },
  { id: 'turmas', label: 'Turmas' },
  { id: 'escolas', label: 'Escolas' },
  { id: 'funcionarios', label: 'Funcionários' },
  { id: 'auxiliares', label: 'Pessoal Auxiliar' },
];

/** Labels das dimensões canônicas (fallback: o próprio nome). */
export const DIMENSAO_LABELS: Record<string, string> = {
  adm_dependency_detailed: 'Dependência Administrativa (detalhada)',
  adm_dependency_entity: 'Dependência Administrativa',
  adm_dependency_entity_agg: 'Dependência Administrativa (agregada)',
  age_range_aggregate: 'Faixa Etária',
  age_range_all: 'Faixa Etária (detalhada)',
  age_range_entity: 'Faixa Etária do Docente',
  arrangement: 'Arranjo de Etapas da Escola',
  contract_type: 'Vínculo Funcional',
  diff_location: 'Localidade Diferenciada',
  education_degree_entity: 'Escolaridade do Docente (2021+)',
  education_level_mod: 'Etapa de Ensino',
  education_level_mod_entity_agg: 'Etapa de Ensino (2021+, detalhada)',
  education_level_mod_entity_seg: 'Etapa de Ensino (2021+, segmentos)',
  education_type: 'Escolaridade do Docente',
  ethnic_group: 'Cor/Raça',
  function: 'Função',
  gender: 'Sexo',
  government_agreement: 'Convênio com Poder Público',
  integral_time: 'Tempo Integral',
  location: 'Localização (Urbana/Rural)',
  modality_integral_time: 'Etapa (Tempo Integral)',
  pee: 'Educação Especial (PEE)',
  pee_por_categoria: 'Educação Especial por Categoria',
  period: 'Turno',
  post_graduation_entity: 'Pós-Graduação do Docente',
  school: 'Escola',
  special_class: 'Classe Especial',
  special_education: 'Educação Especial (Exclusiva/Inclusiva)',
};

export function labelDimensao(nome: string): string {
  return DIMENSAO_LABELS[nome] || nome;
}

/**
 * Recorte virtual "total" (sem dimensão): o número absoluto do indicador.
 * O dataset não tem esse total pronto; ele é derivado somando os valores de
 * uma dimensão que particiona o todo sem dupla contagem.
 *
 * Para a maioria dos indicadores, "location" (Urbana/Rural) particiona
 * corretamente (validado contra a API do simcaq). Para DOCENTES, não: um
 * docente que atua em escolas urbanas E rurais aparece nas duas categorias,
 * inflando a soma. Nesse caso usamos "gender" (cada docente tem exatamente um
 * valor), cuja soma bate com o total oficial do simcaq em todos os anos
 * testados (2008–2023).
 */
export const TOTAL_RECORTE = 'total';
export const TOTAL_BASE_DIMS = 'location';
export const TOTAL_BASE_DIMS_POR_INDICADOR: Record<string, string> = {
  docentes: 'gender',
};

/** Dimensão-base usada para derivar o total virtual de um indicador. */
export function totalBaseDims(indicador: string): string {
  return TOTAL_BASE_DIMS_POR_INDICADOR[indicador] ?? TOTAL_BASE_DIMS;
}

/** Componente de uma série composta: um recorte de origem + regra de mapeamento de valores. */
export interface ComponenteComposto {
  dims_canonico: string;
  anoMin: number;
  anoMax: number;
  /** Mapeia o nome do valor da origem para o nome unificado da série. */
  mapearValor: (nome: string) => string;
}

export interface SerieComposta {
  recorte: string; // slug sintético exposto no catálogo
  indicador: string;
  label: string;
  dimensaoLabel: string;
  componentes: ComponenteComposto[];
  nota: string;
}

const FAIXAS_18_MAIS = new Set([
  '18 a 24 anos',
  '25 a 29 anos',
  '30 a 40 anos',
  '41 a 50 anos',
  '51 a 64 anos',
  'Mais que 64 anos',
]);

export const SERIES_COMPOSTAS: SerieComposta[] = [
  {
    recorte: 'adm_dependency',
    indicador: 'docentes',
    label: 'Dependência Administrativa (série completa 2007-2024)',
    dimensaoLabel: 'Dependência Administrativa',
    componentes: [
      {
        dims_canonico: 'adm_dependency_detailed',
        anoMin: 2007,
        anoMax: 2020,
        // As 5 subcategorias de privada do clássico somam na "Privada" do moderno
        mapearValor: (nome) => (nome.startsWith('Privada') ? 'Privada' : nome),
      },
      {
        dims_canonico: 'adm_dependency_entity',
        anoMin: 2021,
        anoMax: 2024,
        mapearValor: (nome) => nome,
      },
    ],
    nota:
      'Série unificada em 4 categorias (Federal, Estadual, Municipal, Privada). ' +
      'Até 2020 as 5 subcategorias de escola privada foram somadas em "Privada". ' +
      'O detalhamento de privadas está disponível no recorte ' +
      '"Dependência Administrativa (detalhada)" (2007-2020).',
  },
  {
    recorte: 'age_range',
    indicador: 'matriculas',
    label: 'Faixa Etária (série completa 2007-2024)',
    dimensaoLabel: 'Faixa Etária',
    componentes: [
      {
        dims_canonico: 'age_range_all',
        anoMin: 2007,
        anoMax: 2020,
        // As 6 faixas de 18+ do clássico somam no "18 anos ou mais" do moderno
        mapearValor: (nome) =>
          FAIXAS_18_MAIS.has(nome) ? '18 anos ou mais' : nome,
      },
      {
        dims_canonico: 'age_range_aggregate',
        anoMin: 2021,
        anoMax: 2024,
        mapearValor: (nome) => nome,
      },
    ],
    nota:
      'Série unificada em 6 faixas. Até 2020 as faixas a partir de 18 anos ' +
      '(18-24, 25-29, 30-40, 41-50, 51-64, 64+) foram somadas em "18 anos ou mais". ' +
      'O detalhamento está disponível no recorte "Faixa Etária (detalhada)" (2007-2020).',
  },
];

/** Era de uma série quebrada: aponta para o recorte real daquele período. */
export interface EraQuebrada {
  id: string; // "classico" | "moderno"
  label: string;
  de: number;
  ate: number;
  dims_canonico: string;
  nota: string;
}

export interface SerieQuebrada {
  recorte: string; // slug sintético exposto no catálogo
  indicador: string;
  label: string;
  eras: EraQuebrada[];
  nota: string;
}

export const SERIES_QUEBRADAS: SerieQuebrada[] = [
  {
    recorte: 'formacao_docente',
    indicador: 'docentes',
    label: 'Escolaridade/Formação do Docente',
    eras: [
      {
        id: 'classico',
        label: '2007-2020 (metodologia antiga)',
        de: 2007,
        ate: 2020,
        dims_canonico: 'education_type',
        nota:
          'Categorias exclusivas que combinam nível e licenciatura ' +
          '(ex.: "Mestrado com licenciatura").',
      },
      {
        id: 'moderno',
        label: '2021-2024 (metodologia nova)',
        de: 2021,
        ate: 2024,
        dims_canonico: 'education_degree_entity',
        nota:
          'Escolaridade máxima sem pós-graduação (a pós-graduação passou a ser ' +
          'um recorte próprio: "Pós-Graduação do Docente").',
      },
    ],
    nota:
      'O Censo mudou a classificação da formação docente em 2021: as categorias ' +
      'dos dois períodos não são comparáveis entre si (na metodologia antiga a ' +
      'pós-graduação era categoria exclusiva; na nova é recorte separado). ' +
      'As séries são exibidas separadamente, nunca emendadas.',
  },
  {
    recorte: 'etapa_atuacao_docente',
    indicador: 'docentes',
    label: 'Etapa de Ensino de Atuação do Docente',
    eras: [
      {
        id: 'classico',
        label: '2007-2020 (metodologia antiga)',
        de: 2007,
        ate: 2020,
        dims_canonico: 'education_level_mod',
        nota: '12 etapas, incluindo EJA e educação profissional detalhadas.',
      },
      {
        id: 'moderno',
        label: '2021-2024 (metodologia nova)',
        de: 2021,
        ate: 2024,
        dims_canonico: 'education_level_mod_entity_seg',
        nota: '7 segmentos agregados (EJA e educação profissional reagrupados).',
      },
    ],
    nota:
      'A partir de 2021 as etapas de atuação do docente foram reagrupadas de ' +
      'forma incompatível com o período anterior (EJA e educação profissional ' +
      'têm cortes diferentes). As séries são exibidas separadamente, nunca emendadas.',
  },
];

export function findSerieComposta(
  indicador: string,
  recorte: string,
): SerieComposta | undefined {
  return SERIES_COMPOSTAS.find(
    (s) => s.indicador === indicador && s.recorte === recorte,
  );
}

export function findSerieQuebrada(
  indicador: string,
  recorte: string,
): SerieQuebrada | undefined {
  return SERIES_QUEBRADAS.find(
    (s) => s.indicador === indicador && s.recorte === recorte,
  );
}
