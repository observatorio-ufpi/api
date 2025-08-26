-- CreateTable
CREATE TABLE "CursosSuperior" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "CursosSuperior_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FaixaEtariaSuperior" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "FaixaEtariaSuperior_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrganizacaoAcademicaSuperior" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "OrganizacaoAcademicaSuperior_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoriaAdministrativaSuperior" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "CategoriaAdministrativaSuperior_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModalidadeEnsinoSuperior" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "ModalidadeEnsinoSuperior_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DadoEducacaoSuperior" (
    "id" SERIAL NOT NULL,
    "ano" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "total" DECIMAL(15,2) NOT NULL,
    "data_atualizacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "localidade_id" INTEGER,
    "cursos_id" INTEGER,
    "faixa_etaria_id" INTEGER,
    "organizacao_academica_id" INTEGER,
    "categoria_administrativa_id" INTEGER,
    "modalidade_ensino_id" INTEGER,

    CONSTRAINT "DadoEducacaoSuperior_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CursosSuperior_codigo_key" ON "CursosSuperior"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "FaixaEtariaSuperior_codigo_key" ON "FaixaEtariaSuperior"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "OrganizacaoAcademicaSuperior_codigo_key" ON "OrganizacaoAcademicaSuperior"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "CategoriaAdministrativaSuperior_codigo_key" ON "CategoriaAdministrativaSuperior"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "ModalidadeEnsinoSuperior_codigo_key" ON "ModalidadeEnsinoSuperior"("codigo");

-- CreateIndex
CREATE INDEX "DadoEducacaoSuperior_tipo_ano_localidade_id_cursos_id_faixa_idx" ON "DadoEducacaoSuperior"("tipo", "ano", "localidade_id", "cursos_id", "faixa_etaria_id", "organizacao_academica_id", "categoria_administrativa_id", "modalidade_ensino_id");

-- CreateIndex
CREATE INDEX "DadoEducacaoSuperior_tipo_ano_localidade_id_idx" ON "DadoEducacaoSuperior"("tipo", "ano", "localidade_id");

-- CreateIndex
CREATE INDEX "DadoEducacaoSuperior_ano_idx" ON "DadoEducacaoSuperior"("ano");

-- CreateIndex
CREATE INDEX "DadoEducacaoSuperior_localidade_id_idx" ON "DadoEducacaoSuperior"("localidade_id");

-- CreateIndex
CREATE INDEX "DadoEducacaoSuperior_cursos_id_idx" ON "DadoEducacaoSuperior"("cursos_id");

-- CreateIndex
CREATE INDEX "DadoEducacaoSuperior_faixa_etaria_id_idx" ON "DadoEducacaoSuperior"("faixa_etaria_id");

-- CreateIndex
CREATE INDEX "DadoEducacaoSuperior_organizacao_academica_id_idx" ON "DadoEducacaoSuperior"("organizacao_academica_id");

-- CreateIndex
CREATE INDEX "DadoEducacaoSuperior_categoria_administrativa_id_idx" ON "DadoEducacaoSuperior"("categoria_administrativa_id");

-- CreateIndex
CREATE INDEX "DadoEducacaoSuperior_modalidade_ensino_id_idx" ON "DadoEducacaoSuperior"("modalidade_ensino_id");

-- AddForeignKey
ALTER TABLE "DadoEducacaoSuperior" ADD CONSTRAINT "DadoEducacaoSuperior_localidade_id_fkey" FOREIGN KEY ("localidade_id") REFERENCES "Localidade"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DadoEducacaoSuperior" ADD CONSTRAINT "DadoEducacaoSuperior_cursos_id_fkey" FOREIGN KEY ("cursos_id") REFERENCES "CursosSuperior"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DadoEducacaoSuperior" ADD CONSTRAINT "DadoEducacaoSuperior_faixa_etaria_id_fkey" FOREIGN KEY ("faixa_etaria_id") REFERENCES "FaixaEtariaSuperior"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DadoEducacaoSuperior" ADD CONSTRAINT "DadoEducacaoSuperior_organizacao_academica_id_fkey" FOREIGN KEY ("organizacao_academica_id") REFERENCES "OrganizacaoAcademicaSuperior"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DadoEducacaoSuperior" ADD CONSTRAINT "DadoEducacaoSuperior_categoria_administrativa_id_fkey" FOREIGN KEY ("categoria_administrativa_id") REFERENCES "CategoriaAdministrativaSuperior"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DadoEducacaoSuperior" ADD CONSTRAINT "DadoEducacaoSuperior_modalidade_ensino_id_fkey" FOREIGN KEY ("modalidade_ensino_id") REFERENCES "ModalidadeEnsinoSuperior"("id") ON DELETE SET NULL ON UPDATE CASCADE;
