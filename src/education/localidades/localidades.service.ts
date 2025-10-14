
import { Injectable } from '@nestjs/common';
import { PrismaEducacaoService } from '../prisma-educacao.service'; // CORRETO
@Injectable()
export class LocalidadesService {
  constructor(private readonly prisma: PrismaEducacaoService) {}

  async getFilterOptions() {
    const territorios = await this.prisma.localidade.findMany({
      distinct: ['territorio_desenvolvimento'],
      where: {
        territorio_desenvolvimento: {
          not: null,
        },
      },
      select: {
        territorio_desenvolvimento: true,
      },
      orderBy: {
        territorio_desenvolvimento: 'asc',
      },
    });

    const gres = await this.prisma.localidade.findMany({
      distinct: ['gerencia_regional'],
      where: {
        gerencia_regional: {
          not: null,
        },
      },
      select: {
        gerencia_regional: true,
      },
      orderBy: {
        gerencia_regional: 'asc',
      },
    });

    const aglomerados = await this.prisma.localidade.findMany({
      distinct: ['aglomerado'], // CORRIGIDO
      where: {
        aglomerado: { not: null }, // CORRIGIDO
      },
      select: {
        aglomerado: true, // CORRIGIDO
      },
      orderBy: {
        aglomerado: 'asc', // CORRIGIDO
      },
    });

    const faixasPopulacionais = await this.prisma.localidade.findMany({
      distinct: ['faixa_populacional'],
      where: {
        faixa_populacional: {
          not: null,
        },
      },
      select: {
        faixa_populacional: true,
      },
      orderBy: {
        faixa_populacional: 'asc',
      },
    });

    return {
      territorios: territorios.map((t) => ({
        label: t.territorio_desenvolvimento,
        value: t.territorio_desenvolvimento,
      })),
      gres: gres.map((g) => ({
        label: g.gerencia_regional,
        value: g.gerencia_regional,
      })),
      aglomerados: aglomerados.map((a) => ({
        label: a.aglomerado_urbano,
        value: a.aglomerado_urbano,
      })),
      faixasPopulacionais: faixasPopulacionais.map((f) => ({
        label: f.faixa_populacional,
        value: f.faixa_populacional,
      })),
    };
  }
}
