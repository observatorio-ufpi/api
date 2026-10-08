# CLAUDE.md — api

@../../CLAUDE.md

Este arquivo cobre só o que é específico do backend. Leia o `CLAUDE.md` da raiz primeiro (acima) — ele tem a visão geral, armadilhas e fluxo de trabalho que valem pra todo o workspace.

## Stack

NestJS 10 + Prisma, **dois** schemas/bancos independentes:
- `prisma/schema.prisma` → banco financeiro (RREO, MDE, Fundeb). `DATABASE_URL`.
- `prisma/educacao/schema.educacao.prisma` → banco educacional (Censo, taxas, ensino superior). `DATABASE_URL_EDUCACAO`.

Depois de mexer em qualquer schema: `pnpm prisma:generate` (gera os dois clients) antes de rodar a API.

## Onde procurar

- `src/researches/researches.controller.ts` + `.service.ts` — endpoints das tabelas financeiras T1–T11 (RREO). É aqui que ficam os cálculos derivados (ex.: "Valor exigido em MDE" = 0,25 × `TOTAL_RECEITA_IMPOSTOS`, não é campo de banco).
- `src/indicators/` — indicadores educacionais e de capacidade de financiamento.
- `src/education/` — Censo Escolar e dados educacionais.
- `src/utils/filter-builder.ts`, `groupFunctions.ts` — filtros e agrupamentos usados pelos services financeiros.
- `prisma/*.cjs` — scripts de correção pontual de dados (ver `documentacao/09-importacao-e-manutencao.md` → "Correção pontual de dados"). Sempre dry-run → backup → `--apply` → validação.
- `api/scripts/` — importadores de carga inicial (educação básica, taxas, superior), diferentes dos `.cjs` de correção.

## Comandos

```bash
pnpm install
docker compose up -d database database_educacao   # bancos locais
pnpm prisma:generate
pnpm start:dev          # porta 3003
pnpm lint                # eslint --fix
pnpm format               # prettier
pnpm test / pnpm test:e2e
```

## Armadilhas específicas da API

- **Push em `main` dispara deploy automático** (`.github/workflows/deploy.yml`). Não dar push em `main` com correções de dados ou código ainda não validado — combinado com o usuário que a sincronização de dados pra produção só acontece depois que todas as Tabelas 1–11 estiverem corrigidas localmente.
- Models Prisma são **um por período do RREO** (`relatorioMunicipal06`, `...0708`, `...0912`, `...1314`, `...1516`, `...1718`, `...1920`, `...21`, `...23`) — cada um com seus próprios delegates de receita/despesa/deduções (`receita1920`, `despesa1920`, etc). Não existe uma tabela única "relatorioMunicipal".
- `.env` tem `DATABASE_URL` **e** `DATABASE_URL_EDUCACAO` — scripts que só carregam um dos dois vão falhar silenciosamente nas queries do outro banco.
