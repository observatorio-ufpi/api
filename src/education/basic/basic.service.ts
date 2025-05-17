import { Injectable } from '@nestjs/common';
import { PrismaEducacaoService } from '../prisma-educacao.service';

@Injectable()
export class BasicService {
  constructor(private prisma: PrismaEducacaoService) {}

  async getEnrollment(dims: string, filter: string) {
    return this.queryData('enrollment', dims, filter);
  }

  async getEnrollmentAggregate(dims: string, filter: string) {
    return this.queryDataTwoDimensions('enrollmentAggregate', dims, filter);
  }

  async getSchoolCount(dims: string, filter: string) {
    return this.queryDataTwoDimensions('school/count', dims, filter);
  }

  async getClass(dims: string, filter: string) {
    return this.queryDataTwoDimensions('class', dims, filter);
  }

  async getTeacher(dims: string, filter: string) {
    return this.queryDataTwoDimensions('teacher', dims, filter);
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

    if (filterParams.isHistorical) {
      return this.serieHistoricaTwoDimensions(tipo, dims, filter);
    }

    // Definir quais relacionamentos incluir com base nas dimensões passadas
    const include: any = {
      dependencia: true,
      dependencia_teacher: true,
      etapa: true,
      etapa_school: true,
      etapa_teacher: true,
      localizacao: true,
    };

    try {
      if (tipo === 'teacher' && filterParams.years.some((y) => y >= 2021))
        tipo = 'federativeEntity';
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
      let mappedResults = results.map((item) => {
        if (
          tipo === 'federativeEntity' &&
          filterParams.years.some((y) => y >= 2021)
        ) {
          return {
            year: item.ano,
            total: Number(item.total),
            education_level_mod_id: item.etapa_teacher?.id ?? null,
            education_level_mod_name: item.etapa_teacher?.nome ?? null,
            adm_dependency_detailed_id: item.dependencia_teacher?.id ?? null,
            adm_dependency_detailed_name:
              item.dependencia_teacher?.nome ?? null,
            location_id: item.localizacao?.id ?? null,
            location_name: item.localizacao?.nome ?? null,
            contract_type_id: item.contrato?.id ?? null,
            contract_type_name: item.contrato?.nome ?? null,
          };
        } else if (tipo === 'enrollmentAggregate') {
          return {
            year: item.ano,
            total: Number(item.total),
            education_level_mod_agg_id: item.etapa?.id ?? null,
            education_level_mod_agg_name: item.etapa?.nome ?? null,
            location_id: item.localizacao?.id ?? null,
            location_name: item.localizacao?.nome ?? null,
            adm_dependency_detailed_id: item.dependencia?.id ?? null,
            adm_dependency_detailed_name: item.dependencia?.nome ?? null,
          };
        } else if (tipo === 'school/count') {
          return {
            year: item.ano,
            total: Number(item.total),
            arrangement_id: item.etapa_school?.id ?? null,
            arrangement_name: item.etapa_school?.nome ?? null,
            adm_dependency_detailed_id: item.dependencia?.id ?? null,
            adm_dependency_detailed_name: item.dependencia?.nome ?? null,
            location_id: item.localizacao?.id ?? null,
            location_name: item.localizacao?.nome ?? null,
          };
        }
        return {
          year: item.ano,
          total: Number(item.total),
          adm_dependency_detailed_id: item.dependencia?.id ?? null,
          adm_dependency_detailed_name: item.dependencia?.nome ?? null,
          education_level_mod_id: item.etapa?.id ?? null,
          education_level_mod_name: item.etapa?.nome ?? null,
          location_id: item.localizacao?.id ?? null,
          location_name: item.localizacao?.nome ?? null,
        };
      });

      // Remove etapa com id 11
      mappedResults = mappedResults.filter(
        (item) => item.education_level_mod_agg_id !== 11,
      );

      // --- Sem nenhuma dimensão ---
      if (dimensions.length === 0) {
        if (
          (tipo === 'teacher' || tipo === 'federativeEntity') &&
          filterParams.years.some((y) => y >= 2021)
        ) {
          // escolher uma dimensão para agrupar
          const totalPorAno = {};
          for (const item of mappedResults) {
            if (item.location_id !== null) {
              totalPorAno[item.year] =
                (totalPorAno[item.year] || 0) + item.total;
            }
          }
          return {
            result: Object.entries(totalPorAno).map(([year, total]) => ({
              year: Number(year),
              total,
            })),
          };
        }
        // Escolher uma combinação fixa (ex: a primeira encontrada)
        // Aqui, por exemplo, arrangement_id + adm_dependency_detailed_id para school/count
        // ou education_level_mod_id + adm_dependency_detailed_id para os demais

        // Lógica padrão para os outros tipos
        let filtered;
        if (tipo === 'school/count') {
          filtered = mappedResults.filter(
            (item) =>
              item.arrangement_id !== null &&
              item.adm_dependency_detailed_id !== null,
          );
        } else if (tipo === 'enrollmentAggregate') {
          filtered = mappedResults.filter(
            (item) =>
              item.adm_dependency_detailed_id !== null &&
              item.location_id !== null,
          );
        } else {
          filtered = mappedResults.filter(
            (item) =>
              item.education_level_mod_id !== null &&
              item.adm_dependency_detailed_id !== null,
          );
        }
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

        // Escolha a dimensão principal
        let mainDim, mainName;
        if (
          tipo === 'federativeEntity' &&
          filterParams.years.some((y) => y >= 2021)
        ) {
          // Para teacher >= 2021, só existe uma dimensão por linha
          if (dim === 'education_level_mod') {
            mainDim = 'education_level_mod_id';
            mainName = 'education_level_mod_name';
          } else if (dim === 'adm_dependency_detailed') {
            mainDim = 'adm_dependency_detailed_id';
            mainName = 'adm_dependency_detailed_name';
          } else if (dim === 'location') {
            mainDim = 'location_id';
            mainName = 'location_name';
          } else if (dim === 'contract_type') {
            mainDim = 'contract_type_id';
            mainName = 'contract_type_name';
          }
          // Filtrar apenas pela dimensão principal
          const filtered = mappedResults.filter(
            (item) => item[mainDim] !== null,
          );
          // Agrupar por ano + valor da dimensão
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
        } else {
          // ... lógica padrão para os outros tipos ...
          // (mantém o filtro com mainDim && otherDim)
          let fixedCombo: [string, string];
          if (tipo === 'school/count') {
            if (dim === 'arrangement') {
              fixedCombo = ['arrangement_id', 'adm_dependency_detailed_id'];
            } else if (dim === 'adm_dependency_detailed') {
              fixedCombo = ['adm_dependency_detailed_id', 'arrangement_id'];
            } else {
              fixedCombo = ['location_id', 'arrangement_id'];
            }
          } else if (tipo === 'enrollmentAggregate') {
            if (dim === 'education_level_mod_agg') {
              fixedCombo = [
                'education_level_mod_agg_id',
                'adm_dependency_detailed_id',
              ];
            } else if (dim === 'adm_dependency_detailed') {
              fixedCombo = [
                'adm_dependency_detailed_id',
                'education_level_mod_agg_id',
              ];
            } else {
              fixedCombo = ['location_id', 'education_level_mod_agg_id'];
            }
          } else {
            if (dim === 'education_level_mod') {
              fixedCombo = [
                'education_level_mod_id',
                'adm_dependency_detailed_id',
              ];
            } else if (dim === 'adm_dependency_detailed') {
              fixedCombo = [
                'adm_dependency_detailed_id',
                'education_level_mod_id',
              ];
            } else {
              fixedCombo = ['location_id', 'education_level_mod_id'];
            }
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
      }

      // --- Com duas dimensões ---
      if (dimensions.length === 2) {
        const [dim1, dim2] = dimensions;
        let dimField1, dimField2;
        if (tipo === 'school/count') {
          dimField1 =
            dim1 === 'adm_dependency_detailed'
              ? 'adm_dependency_detailed_id'
              : dim1 === 'arrangement'
                ? 'arrangement_id'
                : 'location_id';
          dimField2 =
            dim2 === 'adm_dependency_detailed'
              ? 'adm_dependency_detailed_id'
              : dim2 === 'arrangement'
                ? 'arrangement_id'
                : 'location_id';
        } else if (tipo === 'enrollmentAggregate') {
          dimField1 =
            dim1 === 'adm_dependency_detailed'
              ? 'adm_dependency_detailed_id'
              : dim1 === 'education_level_mod_agg'
                ? 'education_level_mod_agg_id'
                : 'location_id';
          dimField2 =
            dim2 === 'adm_dependency_detailed'
              ? 'adm_dependency_detailed_id'
              : dim2 === 'education_level_mod_agg'
                ? 'education_level_mod_agg_id'
                : 'location_id';
        } else {
          dimField1 =
            dim1 === 'adm_dependency_detailed'
              ? 'adm_dependency_detailed_id'
              : dim1 === 'education_level_mod'
                ? 'education_level_mod_id'
                : 'location_id';
          dimField2 =
            dim2 === 'adm_dependency_detailed'
              ? 'adm_dependency_detailed_id'
              : dim2 === 'education_level_mod'
                ? 'education_level_mod_id'
                : 'location_id';
        }
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

      // Antes de retornar, fazer um segundo agrupamento por ano + dimensão primária
      const finalAggregation = new Map();

      for (const [, value] of aggregatedData.entries()) {
        const year = value.year;
        const dimField =
          dimension === 'arrangement' && tipo === 'school/count'
            ? 'arrangement'
            : dimension;
        const dimId = value[`${dimField}_id`];

        // Chave para agrupamento final: ano + id da dimensão primária
        const finalKey = `${year}|${dimId}`;

        if (!finalAggregation.has(finalKey)) {
          // Primeira ocorrência para esta combinação de ano + dimensão
          finalAggregation.set(finalKey, { ...value });
        } else {
          // Somar ao registro existente
          const existing = finalAggregation.get(finalKey);
          existing.total = (
            Number(existing.total) + Number(value.total)
          ).toString();
        }
      }

      // Converter o mapa para array e ordenar por ano e depois por dimensão
      return {
        result: Array.from(finalAggregation.values()).sort((a, b) =>
          a.year === b.year
            ? a[
                `${dimension === 'arrangement' && tipo === 'school/count' ? 'arrangement' : dimension}_id`
              ] -
              b[
                `${dimension === 'arrangement' && tipo === 'school/count' ? 'arrangement' : dimension}_id`
              ]
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

    if (tipo === 'teacher') tipo = 'federativeEntity';

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
          etapa_school: true,
          etapa_teacher: true,
          localizacao: true,
          vinculo: true,
          dependencia_teacher: true,
          localidade: true, // Sempre incluir a localidade
        },
      });

      // Se não há dimensão adicional, agregar apenas por ano
      if (dimensions.length === 0) {
        // Agrupar por ano, mas considerar apenas uma combinação específica de dimensões
        // para evitar qualquer risco de dupla contagem
        const aggregatedByYear = new Map();

        results.forEach((item) => {
          const year = item.ano;

          // Escolher uma combinação específica com base no tipo
          let shouldConsider = false;

          if (tipo === 'school/count') {
            // Para school/count, considerar APENAS quando arrangement E adm_dependency estão preenchidos
            shouldConsider =
              item.etapa_school?.id != null && item.dependencia?.id != null;
          } else if (tipo === 'teacher' || tipo === 'federativeEntity') {
            // Para teacher >= 2021, considerar APENAS quando etapa_teacher E dependencia estão preenchidos
            if (filterParams.years.some((y) => y >= 2021)) {
              shouldConsider = item.etapa_teacher?.id != null;
            } else {
              // Para teacher < 2021, considerar APENAS quando etapa E dependencia estão preenchidos
              shouldConsider =
                item.etapa?.id != null && item.dependencia_teacher?.id != null;
            }
          } else if (tipo === 'enrollmentAggregate') {
            shouldConsider =
              item.localizacao?.id != null && item.dependencia?.id != null;
          } else {
            // Para outros tipos, considerar APENAS quando etapa E dependencia estão preenchidos
            shouldConsider =
              item.etapa?.id != null && item.dependencia?.id != null;
          }

          if (shouldConsider) {
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

      results.forEach((item) => {
        const year = item.ano;
        let dimensionId = null;
        let dimensionName = null;
        let otherDimensionId = null;

        // Determinar os valores das dimensões
        if (tipo === 'school/count') {
          if (dimension === 'arrangement') {
            dimensionId = item.etapa_school?.id ?? null;
            dimensionName = item.etapa_school?.nome ?? null;
            otherDimensionId = item.dependencia?.id ?? null;
          } else if (
            dimension === 'adm_dependency_detailed' &&
            item.dependencia
          ) {
            dimensionId = item.dependencia.id;
            dimensionName = item.dependencia.nome;
            otherDimensionId = item.etapa_school?.id ?? null;
          } else if (dimension === 'location' && item.localizacao) {
            dimensionId = item.localizacao.id;
            dimensionName = item.localizacao.nome;
            otherDimensionId = item.etapa_school?.id ?? null;
          }
        } else if (tipo === 'enrollmentAggregate') {
          if (
            dimension === 'education_level_mod_agg' &&
            item.etapa &&
            item.etapa.id !== 11
          ) {
            dimensionId = item.etapa.id;
            dimensionName = item.etapa.nome;
            otherDimensionId = item.dependencia?.id ?? null;
          } else if (
            dimension === 'adm_dependency_detailed' &&
            item.dependencia
          ) {
            dimensionId = item.dependencia.id;
            dimensionName = item.dependencia.nome;
            otherDimensionId = item.localizacao?.id ?? null;
          } else if (dimension === 'location' && item.localizacao) {
            dimensionId = item.localizacao.id;
            dimensionName = item.localizacao.nome;
            otherDimensionId = item.dependencia?.id ?? null;
          }
        } else {
          if (dimension === 'adm_dependency_detailed' && item.dependencia) {
            dimensionId = item.dependencia.id;
            dimensionName = item.dependencia.nome;
            otherDimensionId = item.etapa?.id ?? null;
          }

          if (dimension === 'education_level_mod' && item.etapa) {
            dimensionId = item.etapa.id;
            dimensionName = item.etapa.nome;
            otherDimensionId = item.dependencia?.id ?? null;
          }

          if (dimension === 'location' && item.localizacao) {
            dimensionId = item.localizacao.id;
            dimensionName = item.localizacao.nome;
            otherDimensionId = item.etapa?.id ?? null;
          }

          // Casos específicos de federativeEntity
          if (tipo === 'federativeEntity') {
            if (
              dimension === 'adm_dependency_detailed' &&
              item.dependencia_teacher
            ) {
              dimensionId = item.dependencia_teacher.id;
              dimensionName = item.dependencia_teacher.nome;
            } else if (
              dimension === 'education_level_mod' &&
              item.etapa_teacher
            ) {
              dimensionId = item.etapa_teacher.id;
              dimensionName = item.etapa_teacher.nome;
            } else if (dimension === 'contract_type' && item.vinculo) {
              dimensionId = item.vinculo.id;
              dimensionName = item.vinculo.nome;
            }
          }
        }

        // Se não tiver valor para a dimensão principal, ignorar este item
        if (dimensionId === null) return;

        // Se não tiver valor para a dimensão secundária, ignorar este item
        if (tipo != 'federativeEntity') if (otherDimensionId === null) return;

        // Criar chave para o mapa: ano + dimensão principal + dimensão secundária
        const key = `${year}|${dimensionId}|${otherDimensionId}`;

        if (!aggregatedData.has(key)) {
          aggregatedData.set(key, {
            total: Number(item.total).toString(),
            name: item.localidade?.nome || 'Brasil',
            year,
            [`${dimension === 'arrangement' && tipo === 'school/count' ? 'arrangement' : dimension}_id`]:
              dimensionId,
            [`${dimension === 'arrangement' && tipo === 'school/count' ? 'arrangement' : dimension}_name`]:
              dimensionName,
          });
        } else {
          const existing = aggregatedData.get(key);
          existing.total = (
            Number(existing.total) + Number(item.total)
          ).toString();
        }
      });

      // Antes de retornar, fazer um segundo agrupamento por ano + dimensão primária
      const finalAggregation = new Map();

      for (const [, value] of aggregatedData.entries()) {
        const year = value.year;
        const dimField =
          dimension === 'arrangement' && tipo === 'school/count'
            ? 'arrangement'
            : dimension;
        const dimId = value[`${dimField}_id`];

        // Chave para agrupamento final: ano + id da dimensão primária
        const finalKey = `${year}|${dimId}`;

        if (!finalAggregation.has(finalKey)) {
          // Primeira ocorrência para esta combinação de ano + dimensão
          finalAggregation.set(finalKey, { ...value });
        } else {
          // Somar ao registro existente
          const existing = finalAggregation.get(finalKey);
          existing.total = (
            Number(existing.total) + Number(value.total)
          ).toString();
        }
      }

      // Converter o mapa para array e ordenar por ano e depois por dimensão
      return {
        result: Array.from(finalAggregation.values()).sort((a, b) =>
          a.year === b.year
            ? a[
                `${dimension === 'arrangement' && tipo === 'school/count' ? 'arrangement' : dimension}_id`
              ] -
              b[
                `${dimension === 'arrangement' && tipo === 'school/count' ? 'arrangement' : dimension}_id`
              ]
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
