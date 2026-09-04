#!/usr/bin/env bash
# Importa backups/backup-educacao.sql no Postgres de educação.
# Uso (pasta api/): npm run import:dump
#    ou: bash scripts/import-educacao-dump.sh

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DUMP="$ROOT/backups/backup-educacao.sql"
CONTAINER="observatorio_educacao_container"
DB_USER="root"
DB_NAME="educacao-database"

echo "=== Import do dump de educação ==="
echo

if ! command -v docker >/dev/null 2>&1; then
  echo "Docker não encontrado. Instale o Docker e tente de novo."
  exit 1
fi

if [ ! -f "$DUMP" ]; then
  echo "Arquivo não encontrado: $DUMP"
  echo "Peça backup-educacao.sql para o time e coloque em api/backups/"
  exit 1
fi

if ! docker inspect "$CONTAINER" >/dev/null 2>&1; then
  echo "Container $CONTAINER não está no ar. Subindo os bancos..."
  (cd "$ROOT" && npm run db:up)
fi

echo "Aguardando o Postgres responder..."
for i in $(seq 1 30); do
  if docker exec "$CONTAINER" pg_isready -U "$DB_USER" -d "$DB_NAME" >/dev/null 2>&1; then
    break
  fi
  if [ "$i" -eq 30 ]; then
    echo "O banco não ficou pronto. Rode: npm run db:up"
    exit 1
  fi
  sleep 2
done

echo "Limpando schemas public e educacao_v2..."
docker exec "$CONTAINER" psql -U "$DB_USER" -d "$DB_NAME" -v ON_ERROR_STOP=1 -c \
  "DROP SCHEMA IF EXISTS educacao_v2 CASCADE; DROP SCHEMA IF EXISTS public CASCADE; CREATE SCHEMA public; GRANT ALL ON SCHEMA public TO $DB_USER; GRANT ALL ON SCHEMA public TO public;"

echo "Importando $(basename "$DUMP") (pode levar alguns minutos)..."
docker exec -i "$CONTAINER" psql -U "$DB_USER" -d "$DB_NAME" -v ON_ERROR_STOP=1 < "$DUMP" >/dev/null

echo
echo "Conferindo educacao_v2..."
docker exec "$CONTAINER" psql -U "$DB_USER" -d "$DB_NAME" -c '\dt educacao_v2.*'

echo
echo "Pronto. Dump importado."
