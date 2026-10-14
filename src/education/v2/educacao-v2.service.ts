import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  findSerieComposta,
  findSerieQuebrada,
  INDICADORES,
  labelDimensao,
  SERIES_COMPOSTAS,
  SERIES_QUEBRADAS,
  TOTAL_RECORTE,
  totalBaseDims,
} from './catalogo.config';
import { PrismaEducacaoV2Service } from './prisma-educacao-v2.service';

export interface FatosParams {
  indicador: string;
  recorte: string;
  anoInicio?: number;
  anoFim?: number;
  /** IDs IBGE separados por vírgula. Vazio = todos os municípios. */
  localidades?: string;
  /** Soma os totais das localidades filtradas (agregação territorial). */
  agregar?: boolean;
  /** Para séries quebradas: consultar só uma era ("classico" | "moderno"). */
  era?: string;
  limite?: number;
}

export interface DadoFato {
  ano: number;
  localidade?: { id: number; codigoIbge: string; nome: string };
  dim1: { dimensao: string; label: string; valor: string };
  dim2?: { dimensao: string; label: string; valor: string };
  total: number;
}

/**
 * Proveniência (debug): de qual diretório do dataset vieram os fatos de uma
 * consulta. Reconstruído de referencia + dims originais, conforme o README:
 * <raiz 1D|2D>/<referencia>/<ano>/<pasta da dimensão>/<ibge>_<MUNICIPIO>.json
 */
export interface FonteDataset {
  tipo: '1D' | '2D';
  referencia: string;
  /** Slug dims ORIGINAL do fato (ex.: gender_entity), não o canônico. */
  dims: string;
  anoMin: number;
  anoMax: number;
  fatos: number;
  /** Caminho do diretório no dataset, com {ano} como placeholder. */
  diretorio: string;
}

const RAIZ_1D = 'datasets/dados_educacionais_basicos';
const RAIZ_2D =
  'datasets/dados_educacionais_basicos_microdados (2)/dados_educacionais_basicos_microdados';

const LIMITE_PADRAO = 20000;

@Injectable()
export class EducacaoV2Service {
  constructor(private readonly prisma: PrismaEducacaoV2Service) {}

  getIndicadores() {
    return INDICADORES;
  }

  // ---------------------------------------------------------------- catálogo

  async getCatalogo(indicador?: string) {
    if (indicador && !INDICADORES.some((i) => i.id === indicador)) {
      throw new NotFoundException(`Indicador desconhecido: ${indicador}`);
    }

    const [grupos, nomesCanonicos] = await Promise.all([
      this.prisma.fatoEducacao.groupBy({
        by: ['indicador', 'dims_canonico'],
        where: indicador ? { indicador } : {},
        _min: { ano: true },
        _max: { ano: true },
        _count: { _all: true },
      }),
      this.nomesDimensoesCanonicas(),
    ]);

    const recortes = grupos.map((g: any) => {
      const dims = this.splitDims(g.dims_canonico, nomesCanonicos);
      return {
        indicador: g.indicador,
        recorte: g.dims_canonico,
        label: dims.map(labelDimensao).join(' × '),
        dimensoes: dims.map((d) => ({ nome: d, label: labelDimensao(d) })),
        anoMin: g._min.ano,
        anoMax: g._max.ano,
        fatos: g._count._all,
        tipoSerie: 'continua' as const,
      };
    });

    const compostas = SERIES_COMPOSTAS.filter(
      (s) => !indicador || s.indicador === indicador,
    ).map((s) => ({
      indicador: s.indicador,
      recorte: s.recorte,
      label: s.label,
      dimensoes: [{ nome: s.recorte, label: s.dimensaoLabel }],
      anoMin: Math.min(...s.componentes.map((c) => c.anoMin)),
      anoMax: Math.max(...s.componentes.map((c) => c.anoMax)),
      tipoSerie: 'composta' as const,
      composicao: s.componentes.map((c) => ({
        recorte: c.dims_canonico,
        de: c.anoMin,
        ate: c.anoMax,
      })),
      nota: s.nota,
    }));

    // Recorte virtual "total": derivado da dimensão base do indicador, que
    // particiona o todo sem dupla contagem (location, ou gender para docentes)
    const totais = recortes
      .filter((r) => r.recorte === totalBaseDims(r.indicador))
      .map((r) => ({
        indicador: r.indicador,
        recorte: TOTAL_RECORTE,
        label: 'Total',
        dimensoes: [{ nome: TOTAL_RECORTE, label: 'Total' }],
        anoMin: r.anoMin,
        anoMax: r.anoMax,
        tipoSerie: 'continua' as const,
        nota: 'Número total do indicador, sem recorte por dimensão.',
      }));

    const quebradas = SERIES_QUEBRADAS.filter(
      (s) => !indicador || s.indicador === indicador,
    ).map((s) => ({
      indicador: s.indicador,
      recorte: s.recorte,
      label: s.label,
      dimensoes: [{ nome: s.recorte, label: s.label }],
      anoMin: Math.min(...s.eras.map((e) => e.de)),
      anoMax: Math.max(...s.eras.map((e) => e.ate)),
      tipoSerie: 'quebrada' as const,
      eras: s.eras.map((e) => ({
        id: e.id,
        label: e.label,
        de: e.de,
        ate: e.ate,
        recorte: e.dims_canonico,
        nota: e.nota,
      })),
      nota: s.nota,
    }));

    const todos = [...totais, ...recortes, ...compostas, ...quebradas].sort((a, b) =>
      a.indicador === b.indicador
        ? a.label.localeCompare(b.label, 'pt-BR')
        : a.indicador.localeCompare(b.indicador),
    );

    return { recortes: todos };
  }

  async getValoresDimensao(nome: string) {
    const valores = await this.prisma.valorDimensao.findMany({
      where: {
        valor_canonico_id: null,
        dimensao: {
          OR: [{ nome_canonico: nome }, { nome, nome_canonico: null }],
        },
      },
      orderBy: { nome: 'asc' },
      select: { id: true, codigo_api: true, nome: true },
    });

    if (!valores.length) {
      throw new NotFoundException(`Dimensão desconhecida: ${nome}`);
    }

    return {
      dimensao: nome,
      label: labelDimensao(nome),
      valores,
    };
  }

  // ------------------------------------------------------------------- fatos

  async getFatos(params: FatosParams) {
    const { indicador, recorte } = params;
    if (!indicador || !recorte) {
      throw new BadRequestException(
        'Parâmetros obrigatórios: indicador e recorte',
      );
    }

    const quebrada = findSerieQuebrada(indicador, recorte);
    if (quebrada) {
      return this.getFatosQuebrada(params, quebrada);
    }

    const composta = findSerieComposta(indicador, recorte);
    if (composta) {
      return this.getFatosComposta(params, composta);
    }

    if (recorte === TOTAL_RECORTE) {
      return this.getFatosTotal(params);
    }

    return this.getFatosContinua(params);
  }

  /**
   * Total do indicador (sem dimensão): soma os valores da dimensão base do
   * indicador, que particiona o universo sem dupla contagem
   * (location = Urbana + Rural; para docentes, gender).
   */
  private async getFatosTotal(params: FatosParams) {
    const { dados: brutos, fontes } = await this.buscarFatos(
      totalBaseDims(params.indicador),
      params,
    );

    const colapsados = brutos.map((d) => ({
      ...d,
      dim1: { dimensao: TOTAL_RECORTE, label: 'Total', valor: 'Total' },
      dim2: undefined,
    }));

    // soma Urbana + Rural por ano+localidade
    const dados = this.somar(colapsados, false);

    return {
      meta: {
        indicador: params.indicador,
        recorte: TOTAL_RECORTE,
        tipoSerie: 'continua',
        agregado: !!params.agregar,
        nota: 'Total do indicador, sem recorte por dimensão.',
        fontes,
      },
      dados: this.posProcessar(dados, params),
    };
  }

  private async getFatosContinua(params: FatosParams) {
    const { dados, fontes } = await this.buscarFatos(params.recorte, params);

    return {
      meta: {
        indicador: params.indicador,
        recorte: params.recorte,
        tipoSerie: 'continua',
        agregado: !!params.agregar,
        fontes,
      },
      dados: this.posProcessar(dados, params),
    };
  }

  private async getFatosComposta(params: FatosParams, composta: any) {
    // Busca cada componente no intervalo pedido e unifica os nomes dos valores
    const porComponente = await Promise.all(
      composta.componentes.map(async (c: any) => {
        const anoInicio = Math.max(params.anoInicio ?? c.anoMin, c.anoMin);
        const anoFim = Math.min(params.anoFim ?? c.anoMax, c.anoMax);
        if (anoInicio > anoFim) return { dados: [], fontes: [] };

        const { dados, fontes } = await this.buscarFatos(c.dims_canonico, {
          ...params,
          anoInicio,
          anoFim,
        });

        return {
          fontes,
          dados: dados.map((d) => ({
            ...d,
            dim1: {
              dimensao: composta.recorte,
              label: composta.dimensaoLabel,
              valor: c.mapearValor(d.dim1.valor),
            },
          })),
        };
      }),
    );

    const fontes = this.ordenarFontes(
      porComponente.flatMap((p) => p.fontes),
    );

    // Soma categorias mapeadas para o mesmo nome (ex.: Privada*) por
    // ano+localidade+valor — é isso que emenda a série.
    const somados = this.somar(
      porComponente.flatMap((p) => p.dados),
      false,
    );

    return {
      meta: {
        indicador: params.indicador,
        recorte: composta.recorte,
        tipoSerie: 'composta',
        agregado: !!params.agregar,
        composicao: composta.componentes.map((c: any) => ({
          recorte: c.dims_canonico,
          de: c.anoMin,
          ate: c.anoMax,
        })),
        nota: composta.nota,
        fontes,
      },
      dados: this.posProcessar(somados, params),
    };
  }

  private async getFatosQuebrada(params: FatosParams, quebrada: any) {
    const eras = params.era
      ? quebrada.eras.filter((e: any) => e.id === params.era)
      : quebrada.eras;

    if (!eras.length) {
      throw new BadRequestException(
        `Era desconhecida: ${params.era}. Disponíveis: ${quebrada.eras
          .map((e: any) => e.id)
          .join(', ')}`,
      );
    }

    const segmentos = await Promise.all(
      eras.map(async (era: any) => {
        const anoInicio = Math.max(params.anoInicio ?? era.de, era.de);
        const anoFim = Math.min(params.anoFim ?? era.ate, era.ate);

        const { dados, fontes } =
          anoInicio > anoFim
            ? { dados: [], fontes: [] }
            : await this.buscarFatos(era.dims_canonico, {
                ...params,
                anoInicio,
                anoFim,
              });

        return {
          era: {
            id: era.id,
            label: era.label,
            de: era.de,
            ate: era.ate,
            recorte: era.dims_canonico,
            nota: era.nota,
          },
          fontes,
          dados: this.posProcessar(dados, params),
        };
      }),
    );

    return {
      meta: {
        indicador: params.indicador,
        recorte: quebrada.recorte,
        label: quebrada.label,
        tipoSerie: 'quebrada',
        agregado: !!params.agregar,
        nota: quebrada.nota,
        fontes: this.ordenarFontes(segmentos.flatMap((s) => s.fontes)),
      },
      segmentos,
    };
  }

  // --------------------------------------------------------------- auxiliares

  /**
   * Busca fatos crus de um dims_canonico e converte para o formato da API.
   * Também agrega a proveniência (fontes): de quais diretórios do dataset
   * (referencia + dims originais) vieram os fatos retornados.
   */
  private async buscarFatos(
    dimsCanonico: string,
    params: FatosParams,
  ): Promise<{ dados: DadoFato[]; fontes: FonteDataset[] }> {
    const where: any = {
      indicador: params.indicador,
      dims_canonico: dimsCanonico,
    };

    if (params.anoInicio || params.anoFim) {
      where.ano = {};
      if (params.anoInicio) where.ano.gte = params.anoInicio;
      if (params.anoFim) where.ano.lte = params.anoFim;
    }

    const localidadeIds = (params.localidades || '')
      .split(',')
      .map((s) => parseInt(s.trim(), 10))
      .filter((n) => !isNaN(n));

    if (localidadeIds.length) {
      where.localidade_id = { in: localidadeIds };
    }

    const rows = await this.prisma.fatoEducacao.findMany({
      where,
      include: {
        localidade: true,
        valor_dim1: { include: { dimensao: true, valor_canonico: true } },
        valor_dim2: { include: { dimensao: true, valor_canonico: true } },
      },
      orderBy: [{ ano: 'asc' }, { localidade_id: 'asc' }],
      take: params.limite ?? LIMITE_PADRAO,
    });

    const dados = rows.map((r: any) => {
      const dado: DadoFato = {
        ano: r.ano,
        localidade: {
          id: r.localidade.id,
          codigoIbge: r.localidade.codigo_ibge,
          nome: r.localidade.nome,
        },
        dim1: this.mapearValorDimensao(r.valor_dim1),
        total: Number(r.total),
      };

      // valor_dim2_id = 0 é o sentinela "TOTAL" dos recortes 1D
      if (r.valor_dim2_id !== 0) {
        dado.dim2 = this.mapearValorDimensao(r.valor_dim2);
      }

      return dado;
    });

    return { dados, fontes: await this.montarFontes(rows) };
  }

  /**
   * Agrega os fatos retornados por (referencia, dims original) e reconstrói o
   * diretório do dataset de onde cada grupo veio. O caminho é determinístico:
   * 1D -> <RAIZ_1D>/<referencia>/<ano>/<dims>/
   * 2D -> <RAIZ_2D>/<referencia>/<ano>/<dimA_X_dimB>/
   */
  private async montarFontes(rows: any[]): Promise<FonteDataset[]> {
    if (!rows.length) return [];

    const nomesOriginais = await this.nomesDimensoesOriginais();
    const mapa = new Map<string, FonteDataset>();

    for (const r of rows) {
      const chave = `${r.referencia}|${r.dims}`;
      const atual = mapa.get(chave);

      if (atual) {
        atual.fatos += 1;
        if (r.ano < atual.anoMin) atual.anoMin = r.ano;
        if (r.ano > atual.anoMax) atual.anoMax = r.ano;
        continue;
      }

      const partes = this.splitDims(r.dims, nomesOriginais);
      const ehCruzamento = partes.length === 2;
      // No disco, as pastas 2D usam "_X_" entre as dimensões
      // (ethnic_group_gender -> ethnic_group_X_gender)
      const pasta = ehCruzamento ? partes.join('_X_') : r.dims;

      mapa.set(chave, {
        tipo: ehCruzamento ? '2D' : '1D',
        referencia: r.referencia,
        dims: r.dims,
        anoMin: r.ano,
        anoMax: r.ano,
        fatos: 1,
        diretorio: `${ehCruzamento ? RAIZ_2D : RAIZ_1D}/${r.referencia}/{ano}/${pasta}`,
      });
    }

    return this.ordenarFontes(Array.from(mapa.values()));
  }

  private ordenarFontes(fontes: FonteDataset[]): FonteDataset[] {
    return [...fontes].sort(
      (a, b) =>
        a.diretorio.localeCompare(b.diretorio) || a.anoMin - b.anoMin,
    );
  }

  private nomesOriginaisCache?: Set<string>;

  /** Nomes ORIGINAIS das dimensões (gender_entity etc.), para split dos slugs dims. */
  private async nomesDimensoesOriginais(): Promise<Set<string>> {
    if (!this.nomesOriginaisCache) {
      const dims = await this.prisma.dimensao.findMany({
        select: { nome: true },
      });
      this.nomesOriginaisCache = new Set(dims.map((d: any) => d.nome));
    }
    return this.nomesOriginaisCache;
  }

  private mapearValorDimensao(v: any) {
    const dimensao = v.dimensao.nome_canonico ?? v.dimensao.nome;
    return {
      dimensao,
      label: labelDimensao(dimensao),
      valor: v.valor_canonico?.nome ?? v.nome,
    };
  }

  /**
   * Soma totais por chave (ano, [localidade], valor1, valor2).
   * Com removerLocalidade=true faz a agregação territorial (soma municípios).
   */
  private somar(dados: DadoFato[], removerLocalidade: boolean): DadoFato[] {
    const mapa = new Map<string, DadoFato>();

    for (const d of dados) {
      const locKey = removerLocalidade ? '' : (d.localidade?.id ?? '');
      const key = `${d.ano}|${locKey}|${d.dim1.valor}|${d.dim2?.valor ?? ''}`;

      const atual = mapa.get(key);
      if (atual) {
        atual.total += d.total;
      } else {
        const copia: DadoFato = { ...d, dim1: { ...d.dim1 } };
        if (d.dim2) copia.dim2 = { ...d.dim2 };
        if (removerLocalidade) delete copia.localidade;
        mapa.set(key, copia);
      }
    }

    return Array.from(mapa.values());
  }

  /** Aplica agregação territorial (se pedida) e ordena. */
  private posProcessar(dados: DadoFato[], params: FatosParams): DadoFato[] {
    const resultado = params.agregar ? this.somar(dados, true) : dados;

    return resultado.sort(
      (a, b) =>
        a.ano - b.ano ||
        (a.localidade?.nome ?? '').localeCompare(b.localidade?.nome ?? '') ||
        a.dim1.valor.localeCompare(b.dim1.valor, 'pt-BR') ||
        (a.dim2?.valor ?? '').localeCompare(b.dim2?.valor ?? '', 'pt-BR'),
    );
  }

  private async nomesDimensoesCanonicas(): Promise<Set<string>> {
    const dims = await this.prisma.dimensao.findMany({
      select: { nome: true, nome_canonico: true },
    });
    return new Set(dims.map((d: any) => d.nome_canonico ?? d.nome));
  }

  /**
   * Separa um slug dims_canonico nas dimensões componentes.
   * Os nomes contêm "_", então o split é por tentativa contra os nomes reais:
   * "ethnic_group_gender" -> ["ethnic_group", "gender"].
   */
  private splitDims(slug: string, nomes: Set<string>): string[] {
    if (nomes.has(slug)) return [slug];

    const partes = slug.split('_');
    for (let i = 1; i < partes.length; i++) {
      const a = partes.slice(0, i).join('_');
      const b = partes.slice(i).join('_');
      if (nomes.has(a) && nomes.has(b)) return [a, b];
    }

    return [slug];
  }
}
