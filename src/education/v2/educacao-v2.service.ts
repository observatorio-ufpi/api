import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
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
interface CatalogoGrupo {
  indicador: string;
  dims_canonico: string;
  anoMin: number;
  anoMax: number;
  fatos: number;
}

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

const LIMITE_DETALHE = 50000;
const TOP_ESCOLAS = 50;
const CATALOGO_TTL_MS = 6 * 60 * 60 * 1000;

@Injectable()
export class EducacaoV2Service {
  private catalogoCache = new Map<
    string,
    { expira: number; grupos: CatalogoGrupo[] }
  >();

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
      this.gruposCatalogo(indicador),
      this.nomesDimensoesCanonicas(),
    ]);

    const recortes = grupos.map((g) => {
      const dims = this.splitDims(g.dims_canonico, nomesCanonicos);
      return {
        indicador: g.indicador,
        recorte: g.dims_canonico,
        label: dims.map(labelDimensao).join(' × '),
        dimensoes: dims.map((d) => ({ nome: d, label: labelDimensao(d) })),
        anoMin: g.anoMin,
        anoMax: g.anoMax,
        fatos: g.fatos,
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
    const { dados, fontes, nota } = await this.buscarFatos(
      params.recorte,
      params,
    );

    return {
      meta: {
        indicador: params.indicador,
        recorte: params.recorte,
        tipoSerie: 'continua',
        agregado: !!params.agregar,
        fontes,
        ...(nota ? { nota } : {}),
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
   * Consulta fatos via SQL agregado. Com agregar=true (Piauí / grupo
   * territorial) o SUM acontece no banco — não materializa uma linha por
   * município. Proveniência sai de um GROUP BY referencia/dims à parte.
   */
  private async buscarFatos(
    dimsCanonico: string,
    params: FatosParams,
  ): Promise<{ dados: DadoFato[]; fontes: FonteDataset[]; nota?: string }> {
    const anoInicio = params.anoInicio ?? 2007;
    const anoFim = params.anoFim ?? 2024;
    const localidadeIds = this.parseLocalidades(params.localidades);
    const agregar = !!params.agregar;
    const filtro = this.sqlFiltro(params.indicador, dimsCanonico, anoInicio, anoFim, localidadeIds);

    const [rows, fontesAgg, nomesCanonicos] = await Promise.all([
      agregar
        ? this.consultarAgregado(filtro)
        : this.consultarDetalhe(filtro, params.limite ?? LIMITE_DETALHE),
      this.consultarFontes(filtro),
      this.nomesDimensoesCanonicas(),
    ]);

    let dados = rows.map((r) => this.rowParaDado(r, agregar));
    let nota: string | undefined;

    const dims = this.splitDims(dimsCanonico, nomesCanonicos);
    const municipioUnico = localidadeIds.length === 1 && !agregar;
    if (dims.includes('school') && !municipioUnico) {
      const { dados: cortados, removidas } = this.topEscolas(dados, dims);
      dados = cortados;
      if (removidas > 0) {
        nota =
          `Recorte por escola sem município específico: exibindo as ${TOP_ESCOLAS} ` +
          `escolas de maior total (${removidas} omitidas). Selecione um município ` +
          `para ver a lista completa.`;
      }
    }

    return {
      dados,
      fontes: await this.montarFontes(fontesAgg),
      nota,
    };
  }

  private parseLocalidades(localidades?: string): number[] {
    return (localidades || '')
      .split(',')
      .map((s) => parseInt(s.trim(), 10))
      .filter((n) => !isNaN(n));
  }

  private sqlFiltro(
    indicador: string,
    dimsCanonico: string,
    anoInicio: number,
    anoFim: number,
    localidadeIds: number[],
  ): Prisma.Sql {
    const loc = localidadeIds.length
      ? Prisma.sql`AND f.localidade_id IN (${Prisma.join(localidadeIds)})`
      : Prisma.empty;
    return Prisma.sql`
      f.indicador = ${indicador}
      AND f.dims_canonico = ${dimsCanonico}
      AND f.ano >= ${anoInicio} AND f.ano <= ${anoFim}
      ${loc}
    `;
  }

  private async consultarAgregado(filtro: Prisma.Sql): Promise<any[]> {
    return this.prisma.$queryRaw(Prisma.sql`
      SELECT f.ano,
             COALESCE(cv1.nome, v1.nome) AS dim1_valor,
             COALESCE(d1.nome_canonico, d1.nome) AS dim1_nome,
             CASE WHEN f.valor_dim2_id = 0 THEN NULL
                  ELSE COALESCE(cv2.nome, v2.nome) END AS dim2_valor,
             CASE WHEN f.valor_dim2_id = 0 THEN NULL
                  ELSE COALESCE(d2.nome_canonico, d2.nome) END AS dim2_nome,
             SUM(f.total)::float AS total
      FROM educacao_v2."FatoEducacao" f
      JOIN educacao_v2."ValorDimensao" v1 ON v1.id = f.valor_dim1_id
      JOIN educacao_v2."Dimensao" d1 ON d1.id = v1.dimensao_id
      LEFT JOIN educacao_v2."ValorDimensao" cv1 ON cv1.id = v1.valor_canonico_id
      LEFT JOIN educacao_v2."ValorDimensao" v2 ON v2.id = f.valor_dim2_id
      LEFT JOIN educacao_v2."Dimensao" d2 ON d2.id = v2.dimensao_id
      LEFT JOIN educacao_v2."ValorDimensao" cv2 ON cv2.id = v2.valor_canonico_id
      WHERE ${filtro}
      GROUP BY 1, 2, 3, 4, 5
    `);
  }

  private async consultarDetalhe(
    filtro: Prisma.Sql,
    limite: number,
  ): Promise<any[]> {
    return this.prisma.$queryRaw(Prisma.sql`
      SELECT f.ano,
             l.id AS loc_id, l.codigo_ibge AS loc_ibge, l.nome AS loc_nome,
             COALESCE(cv1.nome, v1.nome) AS dim1_valor,
             COALESCE(d1.nome_canonico, d1.nome) AS dim1_nome,
             CASE WHEN f.valor_dim2_id = 0 THEN NULL
                  ELSE COALESCE(cv2.nome, v2.nome) END AS dim2_valor,
             CASE WHEN f.valor_dim2_id = 0 THEN NULL
                  ELSE COALESCE(d2.nome_canonico, d2.nome) END AS dim2_nome,
             f.total::float AS total
      FROM educacao_v2."FatoEducacao" f
      JOIN educacao_v2."Localidade" l ON l.id = f.localidade_id
      JOIN educacao_v2."ValorDimensao" v1 ON v1.id = f.valor_dim1_id
      JOIN educacao_v2."Dimensao" d1 ON d1.id = v1.dimensao_id
      LEFT JOIN educacao_v2."ValorDimensao" cv1 ON cv1.id = v1.valor_canonico_id
      LEFT JOIN educacao_v2."ValorDimensao" v2 ON v2.id = f.valor_dim2_id
      LEFT JOIN educacao_v2."Dimensao" d2 ON d2.id = v2.dimensao_id
      LEFT JOIN educacao_v2."ValorDimensao" cv2 ON cv2.id = v2.valor_canonico_id
      WHERE ${filtro}
      ORDER BY f.ano, l.nome
      LIMIT ${limite}
    `);
  }

  private async consultarFontes(filtro: Prisma.Sql): Promise<any[]> {
    return this.prisma.$queryRaw(Prisma.sql`
      SELECT f.referencia, f.dims,
             MIN(f.ano)::int AS "anoMin",
             MAX(f.ano)::int AS "anoMax",
             COUNT(*)::int AS fatos
      FROM educacao_v2."FatoEducacao" f
      WHERE ${filtro}
      GROUP BY f.referencia, f.dims
    `);
  }

  private rowParaDado(r: any, agregar: boolean): DadoFato {
    const dado: DadoFato = {
      ano: Number(r.ano),
      dim1: {
        dimensao: r.dim1_nome,
        label: labelDimensao(r.dim1_nome),
        valor: r.dim1_valor,
      },
      total: Number(r.total),
    };
    if (!agregar && r.loc_id != null) {
      dado.localidade = {
        id: Number(r.loc_id),
        codigoIbge: r.loc_ibge,
        nome: r.loc_nome,
      };
    }
    if (r.dim2_valor != null) {
      dado.dim2 = {
        dimensao: r.dim2_nome,
        label: labelDimensao(r.dim2_nome),
        valor: r.dim2_valor,
      };
    }
    return dado;
  }

  /** Mantém as N escolas de maior total; o resto é omitido. */
  private topEscolas(
    dados: DadoFato[],
    dims: string[],
  ): { dados: DadoFato[]; removidas: number } {
    const schoolEhDim2 = dims[1] === 'school';
    const chave = (d: DadoFato) =>
      schoolEhDim2 ? (d.dim2?.valor ?? '') : d.dim1.valor;

    const totais = new Map<string, number>();
    for (const d of dados) {
      const k = chave(d);
      totais.set(k, (totais.get(k) || 0) + d.total);
    }

    if (totais.size <= TOP_ESCOLAS) return { dados, removidas: 0 };

    const keep = new Set(
      [...totais.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, TOP_ESCOLAS)
        .map(([k]) => k),
    );
    const filtrados = dados.filter((d) => keep.has(chave(d)));
    return { dados: filtrados, removidas: totais.size - TOP_ESCOLAS };
  }

  /**
   * Reconstrói o diretório do dataset a partir dos grupos (referencia, dims).
   * 1D -> <RAIZ_1D>/<referencia>/<ano>/<dims>/
   * 2D -> <RAIZ_2D>/<referencia>/<ano>/<dimA_X_dimB>/
   */
  private async montarFontes(grupos: any[]): Promise<FonteDataset[]> {
    if (!grupos.length) return [];

    const nomesOriginais = await this.nomesDimensoesOriginais();
    const fontes: FonteDataset[] = grupos.map((g) => {
      const partes = this.splitDims(g.dims, nomesOriginais);
      const ehCruzamento = partes.length === 2;
      const pasta = ehCruzamento ? partes.join('_X_') : g.dims;
      return {
        tipo: ehCruzamento ? '2D' : '1D',
        referencia: g.referencia,
        dims: g.dims,
        anoMin: Number(g.anoMin),
        anoMax: Number(g.anoMax),
        fatos: Number(g.fatos),
        diretorio: `${ehCruzamento ? RAIZ_2D : RAIZ_1D}/${g.referencia}/{ano}/${pasta}`,
      };
    });

    return this.ordenarFontes(fontes);
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

  private async gruposCatalogo(indicador?: string): Promise<CatalogoGrupo[]> {
    const chave = indicador ?? '__all__';
    const hit = this.catalogoCache.get(chave);
    if (hit && hit.expira > Date.now()) return hit.grupos;

    const grupos: CatalogoGrupo[] = indicador
      ? await this.prisma.$queryRaw(Prisma.sql`
          SELECT f.indicador, f.dims_canonico,
                 MIN(f.ano)::int AS "anoMin",
                 MAX(f.ano)::int AS "anoMax",
                 COUNT(*)::int AS fatos
          FROM educacao_v2."FatoEducacao" f
          WHERE f.indicador = ${indicador}
          GROUP BY f.indicador, f.dims_canonico
        `)
      : await this.prisma.$queryRaw(Prisma.sql`
          SELECT f.indicador, f.dims_canonico,
                 MIN(f.ano)::int AS "anoMin",
                 MAX(f.ano)::int AS "anoMax",
                 COUNT(*)::int AS fatos
          FROM educacao_v2."FatoEducacao" f
          GROUP BY f.indicador, f.dims_canonico
        `);

    this.catalogoCache.set(chave, {
      expira: Date.now() + CATALOGO_TTL_MS,
      grupos,
    });
    return grupos;
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
