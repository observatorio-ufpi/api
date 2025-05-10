import { Injectable } from '@nestjs/common';
import { PrismaEducacaoService } from '../prisma-educacao.service';

@Injectable()
export class BasicService {
  constructor(private prisma: PrismaEducacaoService) {}

  async getEnrollment(dims: string, filter: string) {
    return this.queryData('enrollment', dims, filter);
  }

  async getEnrollmentAggregate(dims: string, filter: string) {
    return this.queryData('enrollment', dims, filter);
  }

  async getSchoolCount(dims: string, filter: string) {
    return this.queryData('school/count', dims, filter);
  }

  async getClass(dims: string, filter: string) {
    return this.queryDataTwoDimensions('class', dims, filter);
  }

  async getTeacher(dims: string, filter: string) {
    return this.queryData('teacher', dims, filter);
  }

  async getAuxiliar(dims: string, filter: string) {
    return this.queryData('auxiliar', dims, filter);
  }

  async getEmployees(dims: string, filter: string) {
    return this.queryData('employees', dims, filter);
  }

  async getOutOfSchool(dims: string, filter: string) {
    return this.queryData('out_of_school', dims, filter);
  }

  async getLiquidEnrollmentRatio(dims: string, filter: string) {
    return this.queryData('liquid_enrollment_ratio', dims, filter);
  }

  async getGlossEnrollmentRatio(dims: string, filter: string) {
    return this.queryData('gloss_enrollment_ratio', dims, filter);
  }

  async getRateSchoolNew(dims: string, filter: string) {
    return this.queryData('rate_school_new', dims, filter);
  }

  async getHistoricalSeries(tipo: string, dims: string, filter: string) {
    return this.serieHistorica(tipo, dims, filter);
  }

  private async queryDataTwoDimensions(
    tipo: string,
    dims: string,
    filter: string,
  ) {
    const filterParams = this.parseFilter(filter);
    const dimensions = this.parseDims(dims); // array com 0, 1 ou 2 dimensões

    // Definir quais relacionamentos incluir com base nas dimensões passadas
    const include: any = {
      dependencia: true,
      etapa: true,
      localizacao: true,
    };

    try {
      // Buscar todos os registros do tipo/ano/localidade
      const results = await this.prisma.dadoEducacaoBasica.findMany({
        where: {
          tipo,
          ano: { in: filterParams.years },
          localidade_id: filterParams.city
            ? Number(filterParams.city)
            : Number(filterParams.state),
        },
        include,
      });

      // Mapear os dados
      const mappedResults = results.map((item) => ({
        year: item.ano,
        total: Number(item.total),
        adm_dependency_detailed_id: item.dependencia?.id ?? null,
        adm_dependency_detailed_name: item.dependencia?.nome ?? null,
        education_level_mod_id: item.etapa?.id ?? null,
        education_level_mod_name: item.etapa?.nome ?? null,
        location_id: item.localizacao?.id ?? null,
        location_name: item.localizacao?.nome ?? null,
      }));

      // --- Sem nenhuma dimensão ---
      if (dimensions.length === 0) {
        // Escolher uma combinação fixa (ex: a primeira encontrada)
        // Aqui, por exemplo, education_level_mod_id + adm_dependency_detailed_id
        // Você pode escolher qualquer combinação, mas deve ser consistente!
        // Vamos escolher education_level_mod_id + adm_dependency_detailed_id
        const filtered = mappedResults.filter(
          (item) =>
            item.education_level_mod_id !== null &&
            item.adm_dependency_detailed_id !== null,
        );
        // Agrupar por ano
        const totalPorAno = {};
        for (const item of filtered) {
          totalPorAno[item.year] = (totalPorAno[item.year] || 0) + item.total;
        }
        return {
          result: Object.entries(totalPorAno).map(([year, total]) => ({
            year: Number(year),
            total,
          })),
        };
      }

      // --- Com uma dimensão ---
      if (dimensions.length === 1) {
        const dim = dimensions[0];

        // Escolha uma segunda dimensão fixa para a combinação
        let fixedCombo: [string, string];
        if (dim === 'education_level_mod') {
          fixedCombo = ['education_level_mod_id', 'adm_dependency_detailed_id'];
        } else if (dim === 'adm_dependency_detailed') {
          fixedCombo = ['adm_dependency_detailed_id', 'education_level_mod_id'];
        } else {
          fixedCombo = ['location_id', 'education_level_mod_id'];
        }

        const [mainDim, otherDim] = fixedCombo;
        const mainName = mainDim.replace('_id', '_name');

        // Filtrar registros onde ambas as dimensões da combinação estão presentes
        const filtered = mappedResults.filter(
          (item) => item[mainDim] !== null && item[otherDim] !== null,
        );

        // Agrupar por ano + valor da dimensão desejada
        const groupMap = new Map();
        for (const item of filtered) {
          const key = `${item.year}|${item[mainDim]}`;
          if (!groupMap.has(key)) {
            groupMap.set(key, {
              year: item.year,
              [mainDim]: item[mainDim],
              [mainName]: item[mainName],
              total: 0,
            });
          }
          groupMap.get(key).total += item.total;
        }
        return { result: Array.from(groupMap.values()) };
      }

      // --- Com duas dimensões ---
      if (dimensions.length === 2) {
        const [dim1, dim2] = dimensions;
        const dimField1 =
          dim1 === 'adm_dependency_detailed'
            ? 'adm_dependency_detailed_id'
            : dim1 === 'education_level_mod'
              ? 'education_level_mod_id'
              : 'location_id';
        const dimField2 =
          dim2 === 'adm_dependency_detailed'
            ? 'adm_dependency_detailed_id'
            : dim2 === 'education_level_mod'
              ? 'education_level_mod_id'
              : 'location_id';
        const dimName1 = dimField1.replace('_id', '_name');
        const dimName2 = dimField2.replace('_id', '_name');

        // Filtrar registros onde ambas as dimensões estão presentes
        const filtered = mappedResults.filter(
          (item) => item[dimField1] !== null && item[dimField2] !== null,
        );

        // Agrupar por ano + valor das duas dimensões
        const groupMap = new Map();
        for (const item of filtered) {
          const key = `${item.year}|${item[dimField1]}|${item[dimField2]}`;
          if (!groupMap.has(key)) {
            groupMap.set(key, {
              year: item.year,
              [dimField1]: item[dimField1],
              [dimName1]: item[dimName1],
              [dimField2]: item[dimField2],
              [dimName2]: item[dimName2],
              total: 0,
            });
          }
          groupMap.get(key).total += item.total;
        }
        return { result: Array.from(groupMap.values()) };
      }

      // Caso não caia em nenhum caso acima
      return { result: [] };
    } catch (error) {
      console.error(`Erro ao consultar dados de ${tipo}:`, error);
      return { result: [] };
    }
  }

  //Método para retornar serie historica
  private async serieHistorica(tipo: string, dims: string, filter: string) {
    const filterParams = this.parseFilter(filter);
    const dimensions = this.parseDims(dims);

    // Verificar se há no máximo uma dimensão
    if (dimensions.length > 1) {
      throw new Error('Série histórica suporta no máximo uma dimensão');
    }

    try {
      // Buscar os dados
      const results = await this.prisma.dadoEducacaoBasica.findMany({
        where: {
          tipo,
          ano: { in: filterParams.years },
          localidade_id: filterParams.city
            ? Number(filterParams.city)
            : Number(filterParams.state),
        },
        include: {
          dependencia: dimensions.includes('adm_dependency_detailed'),
          etapa: dimensions.includes('education_level_mod'),
          localizacao: dimensions.includes('location'),
          localidade: true, // Sempre incluir a localidade
        },
      });

      // Se não há dimensão adicional, agregar apenas por ano
      if (dimensions.length === 0) {
        // Agrupar por ano
        const aggregatedByYear = new Map();

        results.forEach((item) => {
          const year = item.ano;
          if (!aggregatedByYear.has(year)) {
            aggregatedByYear.set(year, {
              total: Number(item.total),
              name: item.localidade?.nome || 'Brasil',
              year,
            });
          } else {
            const existing = aggregatedByYear.get(year);
            existing.total = (
              Number(existing.total) + Number(item.total)
            ).toString();
          }
        });

        // Converter o mapa para array e ordenar por ano
        return {
          result: Array.from(aggregatedByYear.values()).sort(
            (a, b) => a.year - b.year,
          ),
        };
      }

      // Se há uma dimensão, agregar por ano e dimensão
      const dimension = dimensions[0];
      const aggregatedData = new Map();

      results.forEach((item) => {
        const year = item.ano;
        let dimensionId = null;
        let dimensionName = null;

        // Determinar os valores da dimensão
        if (dimension === 'adm_dependency_detailed' && item.dependencia) {
          dimensionId = item.dependencia.id;
          dimensionName = item.dependencia.nome;
        } else if (dimension === 'education_level_mod' && item.etapa) {
          dimensionId = item.etapa.id;
          dimensionName = item.etapa.nome;
        } else if (dimension === 'location' && item.localizacao) {
          dimensionId = item.localizacao.id;
          dimensionName = item.localizacao.nome;
        }

        // Se não tiver valor para a dimensão, ignorar este item
        if (dimensionId === null) return;

        // Criar chave para o mapa: ano + dimensão
        const key = `${year}|${dimensionId}`;

        if (!aggregatedData.has(key)) {
          aggregatedData.set(key, {
            total: Number(item.total).toString(),
            name: item.localidade?.nome || 'Brasil',
            year,
            [`${dimension}_id`]: dimensionId,
            [`${dimension}_name`]: dimensionName,
          });
        } else {
          const existing = aggregatedData.get(key);
          existing.total = (
            Number(existing.total) + Number(item.total)
          ).toString();
        }
      });

      // Converter o mapa para array e ordenar por ano e depois por dimensão
      return {
        result: Array.from(aggregatedData.values()).sort((a, b) =>
          a.year === b.year
            ? a[`${dimension}_id`] - b[`${dimension}_id`]
            : a.year - b.year,
        ),
      };
    } catch (error) {
      console.error(`Erro ao consultar série histórica de ${tipo}:`, error);
      return { result: [] };
    }
  }

  // Método para retornar série histórica com duas dimensões
  private async serieHistoricaTwoDimensions(
    tipo: string,
    dims: string,
    filter: string,
  ) {
    const filterParams = this.parseFilter(filter);
    const dimensions = this.parseDims(dims);

    // Verificar se há no máximo uma dimensão
    if (dimensions.length > 1) {
      throw new Error('Série histórica suporta no máximo uma dimensão');
    }

    try {
      // Buscar os dados
      const results = await this.prisma.dadoEducacaoBasica.findMany({
        where: {
          tipo,
          ano: { in: filterParams.years },
          localidade_id: filterParams.city
            ? Number(filterParams.city)
            : Number(filterParams.state),
        },
        include: {
          dependencia: true,
          etapa: true,
          localizacao: true,
          localidade: true, // Sempre incluir a localidade
        },
      });

      // Se não há dimensão adicional, agregar apenas por ano
      if (dimensions.length === 0) {
        // Agrupar por ano
        const aggregatedByYear = new Map();

        results.forEach((item) => {
          const year = item.ano;
          if (!aggregatedByYear.has(year)) {
            aggregatedByYear.set(year, {
              total: Number(item.total),
              name: item.localidade?.nome || 'Brasil',
              year,
            });
          } else {
            const existing = aggregatedByYear.get(year);
            existing.total = (
              Number(existing.total) + Number(item.total)
            ).toString();
          }
        });

        // Converter o mapa para array e ordenar por ano
        return {
          result: Array.from(aggregatedByYear.values()).sort(
            (a, b) => a.year - b.year,
          ),
        };
      }

      // Se há uma dimensão, precisamos escolher uma combinação fixa
      const dimension = dimensions[0];
      const aggregatedData = new Map();

      // Definir a combinação fixa baseada na dimensão escolhida
      let fixedCombo: [string, string];
      if (dimension === 'education_level_mod') {
        fixedCombo = ['education_level_mod_id', 'adm_dependency_detailed_id'];
      } else if (dimension === 'adm_dependency_detailed') {
        fixedCombo = ['adm_dependency_detailed_id', 'education_level_mod_id'];
      } else {
        fixedCombo = ['location_id', 'education_level_mod_id'];
      }

      results.forEach((item) => {
        const year = item.ano;
        let dimensionId = null;
        let dimensionName = null;
        let otherDimensionId = null;
        let otherDimensionName = null;

        // Determinar os valores das dimensões
        if (dimension === 'adm_dependency_detailed' && item.dependencia) {
          dimensionId = item.dependencia.id;
          dimensionName = item.dependencia.nome;
          if (item.etapa) {
            otherDimensionId = item.etapa.id;
            otherDimensionName = item.etapa.nome;
          }
        } else if (dimension === 'education_level_mod' && item.etapa) {
          dimensionId = item.etapa.id;
          dimensionName = item.etapa.nome;
          if (item.dependencia) {
            otherDimensionId = item.dependencia.id;
            otherDimensionName = item.dependencia.nome;
          }
        } else if (dimension === 'location' && item.localizacao) {
          dimensionId = item.localizacao.id;
          dimensionName = item.localizacao.nome;
          if (item.etapa) {
            otherDimensionId = item.etapa.id;
            otherDimensionName = item.etapa.nome;
          }
        }

        // Se não tiver valor para a dimensão principal, ignorar este item
        if (dimensionId === null) return;

        // Criar chave para o mapa: ano + dimensão principal
        const key = `${year}|${dimensionId}`;

        if (!aggregatedData.has(key)) {
          aggregatedData.set(key, {
            total: Number(item.total).toString(),
            name: item.localidade?.nome || 'Brasil',
            year,
            [`${dimension}_id`]: dimensionId,
            [`${dimension}_name`]: dimensionName,
            [`${fixedCombo[1]}`]: otherDimensionId,
            [`${fixedCombo[1].replace('_id', '_name')}`]: otherDimensionName,
          });
        } else {
          const existing = aggregatedData.get(key);
          existing.total = (
            Number(existing.total) + Number(item.total)
          ).toString();
        }
      });

      // Converter o mapa para array e ordenar por ano e depois por dimensão
      return {
        result: Array.from(aggregatedData.values()).sort((a, b) =>
          a.year === b.year
            ? a[`${dimension}_id`] - b[`${dimension}_id`]
            : a.year - b.year,
        ),
      };
    } catch (error) {
      console.error(`Erro ao consultar série histórica de ${tipo}:`, error);
      return { result: [] };
    }
  }

  // Método genérico para consultar os dados com base no tipo
  private async queryData(tipo: string, dims: string, filter: string) {
    // Analisar o filtro usando uma função personalizada
    const filterParams = this.parseFilter(filter);

    // Se for uma série histórica, usar o método específico
    if (filterParams.isHistorical) {
      // Verificar se é um tipo que usa duas dimensões
      const twoDimensionsTypes = ['class'];
      if (twoDimensionsTypes.includes(tipo)) {
        return this.serieHistoricaTwoDimensions(tipo, dims, filter);
      }
      return this.serieHistorica(tipo, dims, filter);
    }

    const dimensions = this.parseDims(dims);

    try {
      const results = await this.prisma.dadoEducacaoBasica.findMany({
        where: {
          tipo,
          ano: { in: filterParams.years },
          localidade_id: filterParams.city
            ? Number(filterParams.city)
            : Number(filterParams.state),
        },
        include: {
          dependencia: dimensions.includes('adm_dependency_detailed'),
          etapa: dimensions.includes('education_level_mod'),
          localizacao: dimensions.includes('location'),
        },
      });

      console.log(results);

      // Mapear os resultados para o formato esperado pelo frontend
      const mappedResults = results.map((item) => ({
        year: item.ano,
        total: Number(item.total),
        ...(item.dependencia
          ? {
              adm_dependency_detailed_id: item.dependencia.id,
              adm_dependency_detailed_name: item.dependencia.nome,
            }
          : {}),
        ...(item.etapa
          ? {
              education_level_mod_id: item.etapa.id,
              education_level_mod_name: item.etapa.nome,
            }
          : {}),
        ...(item.localizacao
          ? {
              location_id: item.localizacao.id,
              location_name: item.localizacao.nome,
            }
          : {}),
      }));

      // Agrupar resultados por combinações únicas de dimensões selecionadas
      const aggregatedMap = new Map();

      mappedResults.forEach((item) => {
        // Criar uma chave única com base nas dimensões selecionadas
        const keys = ['year'];
        if (dimensions.includes('adm_dependency_detailed'))
          keys.push('adm_dependency_detailed_id');
        if (dimensions.includes('location')) keys.push('location_id');
        if (dimensions.includes('education_level_mod')) {
          keys.push('education_level_mod_id');
        }
        // Se não há dimensões selecionadas, usar apenas o ano como chave
        const mapKey = keys.map((key) => `${key}:${item[key]}`).join('|');

        // Agregar os totais
        if (!aggregatedMap.has(mapKey)) {
          aggregatedMap.set(mapKey, { ...item });
        } else {
          const existingItem = aggregatedMap.get(mapKey);
          existingItem.total += item.total;
        }
      });

      // Converter o mapa de volta para um array
      const aggregatedResults = Array.from(aggregatedMap.values());

      return {
        result: aggregatedResults,
      };
    } catch (error) {
      console.error(`Erro ao consultar dados de ${tipo}:`, error);
      return { result: [] };
    }
  }

  // Função auxiliar para analisar o filtro no formato específico
  private parseFilter(filter: string): {
    years: number[];
    state: string;
    city?: string;
    isHistorical?: boolean;
  } {
    try {
      const yearPattern = /min_year:"(\d+)",max_year:"(\d+)"/;
      const statePattern = /state:"(\d+)"/;
      const cityPattern = /city:"(\d+)"/;

      const yearMatch = filter.match(yearPattern);
      const stateMatch = filter.match(statePattern);
      const cityMatch = filter.match(cityPattern);

      const minYear = yearMatch?.[1] ? parseInt(yearMatch[1]) : 2022;
      const maxYear = yearMatch?.[2] ? parseInt(yearMatch[2]) : 2022;
      const years = [];
      for (let year = minYear; year <= maxYear; year++) {
        years.push(year);
      }

      return {
        years,
        state: stateMatch?.[1] || '22',
        city: cityMatch?.[1],
        isHistorical: minYear !== maxYear,
      };
    } catch (error) {
      console.error('Erro ao analisar filtro:', error);
      return { years: [2022], state: '22', isHistorical: false };
    }
  }

  // Função auxiliar para analisar as dimensões
  private parseDims(dims: string): string[] {
    return dims ? dims.split(',') : [];
  }
}
