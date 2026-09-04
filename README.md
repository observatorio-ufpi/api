# API — Observatório UFPI

Para ter o banco de educação na máquina, importe o dump atual.

O dump é `backups/backup-educacao.sql` (v1 em `public` + schema `educacao_v2`). O arquivo é grande e **não vai no git**. Peça a cópia mais recente para o time.

---

## Pré-requisitos

- [Docker](https://docs.docker.com/get-docker/)
- Node.js 18+ e npm

```bash
docker --version
node --version
npm --version
```

---

## 1. Ambiente

Na pasta `api/`:

```bash
cp .env-example .env
```

Os scripts assumem os valores do exemplo (`root` / `teste`, banco `educacao-database`, porta 5438).

---

## 2. Colocar o dump

Copie `backup-educacao.sql` para `api/backups/`.

---

## 3. Importar

```bash
npm run import:dump
```

O script sobe o Postgres se precisar, apaga `public` e `educacao_v2` e carrega o dump.

Conferir:

```bash
docker exec -it observatorio_educacao_container psql -U root -d educacao-database -c '\dt educacao_v2.*'
```

Você deve ver `localidade`, os consolidados e as fatias de matrícula.

---

## Se algo quebrar

| Sintoma | O que checar |
|---|---|
| Docker não encontrado | Instale o Docker e abra o terminal de novo |
| `Arquivo não encontrado` | `backups/backup-educacao.sql` está nessa pasta |
| Banco não ficou pronto | `npm run db:up` e se a porta **5438** está livre |
| `\dt educacao_v2.*` vazio | o import terminou sem erro |

| Comando | Faz o quê |
|---|---|
| `npm run db:up` | Sobe o Postgres de educação |
| `npm run db:down` | Derruba os containers |
| `npm run import:dump` | Sobe o banco se preciso, zera educação e importa o dump |
