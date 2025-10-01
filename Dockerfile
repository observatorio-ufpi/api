# Dockerfile para o Backend NestJS
FROM node:18-alpine AS builder

# Instalar dependências do sistema necessárias para o Prisma
RUN apk add --no-cache openssl libc6-compat

WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar código fonte
COPY . .

# Gerar Prisma client para ambos os schemas
RUN npm run prisma:generate

# Build da aplicação
RUN npm run build

# Estágio de produção
FROM node:18-alpine AS production

# Instalar dependências do sistema necessárias para o Prisma
RUN apk add --no-cache openssl libc6-compat

WORKDIR /app

# Copiar package.json e instalar apenas dependências de produção
COPY package*.json ./
RUN npm install --only=production

# Copiar código buildado
COPY --from=builder /app/dist ./dist

# Copiar schemas do Prisma
COPY --from=builder /app/prisma ./prisma

# Copiar node_modules do Prisma (gerado)
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

# Copiar clientes do Prisma gerados
COPY --from=builder /app/prisma/educacao/generated ./prisma/educacao/generated

# Pasta de backups será montada via volume no docker-compose

# Criar usuário não-root para segurança
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nestjs -u 1001

# Dar permissões para o usuário nestjs
RUN chown -R nestjs:nodejs /app
USER nestjs

# Expor a porta
EXPOSE 3003

# Comando para iniciar a aplicação
CMD ["node", "dist/src/main.js"]