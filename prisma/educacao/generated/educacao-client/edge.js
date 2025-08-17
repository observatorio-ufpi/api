
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.11.0
 * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
 */
Prisma.prismaVersion = {
  client: "5.11.0",
  engine: "5a9203d0590c951969e85a7d07215503f4672eb9"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.LocalidadeScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  tipo: 'tipo',
  uf: 'uf',
  codigo_ibge: 'codigo_ibge'
};

exports.Prisma.DependenciaAdministrativaBasicaScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  tipo: 'tipo'
};

exports.Prisma.DependenciaAdministrativaBasicaTeacherScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  tipo: 'tipo'
};

exports.Prisma.DependenciaAdministrativaBasicaApos23ScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  tipo: 'tipo'
};

exports.Prisma.EtapaEnsinoBasicaScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  nome_curto: 'nome_curto'
};

exports.Prisma.EtapaTurmaScalarFieldEnum = {
  id: 'id',
  nome: 'nome'
};

exports.Prisma.EtapaMatriculaAte2020ScalarFieldEnum = {
  id: 'id',
  nome: 'nome'
};

exports.Prisma.EtapaEnsinoBasicaSchoolScalarFieldEnum = {
  id: 'id',
  nome: 'nome'
};

exports.Prisma.EtapaEnsinoBasicaTeacher21ScalarFieldEnum = {
  id: 'id',
  nome: 'nome'
};

exports.Prisma.EtapaEnsinoBasicaApos23ScalarFieldEnum = {
  id: 'id',
  nome: 'nome'
};

exports.Prisma.EtapaEnsinoBasicaApos23TeacherClassScalarFieldEnum = {
  id: 'id',
  nome: 'nome'
};

exports.Prisma.LocalizacaoScalarFieldEnum = {
  id: 'id',
  nome: 'nome'
};

exports.Prisma.VinculoFuncionalScalarFieldEnum = {
  id: 'id',
  nome: 'nome'
};

exports.Prisma.FormacaoDocenteScalarFieldEnum = {
  id: 'id',
  nome: 'nome'
};

exports.Prisma.FaixaEtariaScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  idade_inicial: 'idade_inicial',
  idade_final: 'idade_final'
};

exports.Prisma.FaixaEtariaTaxasScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  idade_inicial: 'idade_inicial',
  idade_final: 'idade_final'
};

exports.Prisma.FaixaEtariaTaxaConcEdlSupEAnafalScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  idade_inicial: 'idade_inicial',
  idade_final: 'idade_final'
};

exports.Prisma.FaixaEtariaTaxaConclEdBasicaScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  idade_inicial: 'idade_inicial',
  idade_final: 'idade_final'
};

exports.Prisma.NivelInstrucaoScalarFieldEnum = {
  id: 'id',
  nome: 'nome'
};

exports.Prisma.EntidadeScalarFieldEnum = {
  id: 'id',
  codigo: 'codigo',
  nome: 'nome'
};

exports.Prisma.CursosSuperiorScalarFieldEnum = {
  id: 'id',
  codigo_ies: 'codigo_ies',
  codigo: 'codigo',
  nome: 'nome'
};

exports.Prisma.FaixaEtariaSuperiorScalarFieldEnum = {
  id: 'id',
  codigo: 'codigo',
  nome: 'nome'
};

exports.Prisma.OrganizacaoAcademicaSuperiorScalarFieldEnum = {
  id: 'id',
  codigo: 'codigo',
  nome: 'nome'
};

exports.Prisma.CategoriaAdministrativaSuperiorScalarFieldEnum = {
  id: 'id',
  codigo: 'codigo',
  nome: 'nome'
};

exports.Prisma.ModalidadeEnsinoSuperiorScalarFieldEnum = {
  id: 'id',
  codigo: 'codigo',
  nome: 'nome'
};

exports.Prisma.RegimeDocenteEnsinoSuperiorScalarFieldEnum = {
  id: 'id',
  codigo: 'codigo',
  nome: 'nome'
};

exports.Prisma.FormacaoDocenteEnsinoSuperiorScalarFieldEnum = {
  id: 'id',
  codigo: 'codigo',
  nome: 'nome'
};

exports.Prisma.InstituicaoEnsinoSuperiorScalarFieldEnum = {
  id: 'id',
  codigo: 'codigo',
  nome: 'nome'
};

exports.Prisma.DadoEducacaoBasicaScalarFieldEnum = {
  id: 'id',
  tipo: 'tipo',
  ano: 'ano',
  total: 'total',
  data_atualizacao: 'data_atualizacao',
  localidade_id: 'localidade_id',
  dependencia_id: 'dependencia_id',
  dependencia_teacher_id: 'dependencia_teacher_id',
  etapa_id: 'etapa_id',
  etapa_school_id: 'etapa_school_id',
  etapa_teacher_id: 'etapa_teacher_id',
  etapa_turma_id: 'etapa_turma_id',
  etapa_matricula_ate2020_id: 'etapa_matricula_ate2020_id',
  localizacao_id: 'localizacao_id',
  vinculo_id: 'vinculo_id',
  formacao_id: 'formacao_id',
  faixa_etaria_id: 'faixa_etaria_id'
};

exports.Prisma.DadoEducacaoBasicaApos23ScalarFieldEnum = {
  id: 'id',
  ano: 'ano',
  tipo: 'tipo',
  total: 'total',
  data_atualizacao: 'data_atualizacao',
  localidade_id: 'localidade_id',
  dependencia_id: 'dependencia_id',
  etapa_id: 'etapa_id',
  etapa_teacher_class_id: 'etapa_teacher_class_id',
  localizacao_id: 'localizacao_id',
  entidade_id: 'entidade_id'
};

exports.Prisma.TaxasPorFaixaEtariaScalarFieldEnum = {
  id: 'id',
  ano: 'ano',
  tipo: 'tipo',
  total: 'total',
  denominador: 'denominador',
  numerador: 'numerador',
  data_atualizacao: 'data_atualizacao',
  localidade_id: 'localidade_id',
  faixa_etaria_taxas_id: 'faixa_etaria_taxas_id'
};

exports.Prisma.TaxasScalarFieldEnum = {
  id: 'id',
  ano: 'ano',
  tipo: 'tipo',
  total: 'total',
  data_atualizacao: 'data_atualizacao',
  localidade_id: 'localidade_id',
  localizacao_id: 'localizacao_id',
  faixa_etaria_taxas_concl_sup_e_anafal_id: 'faixa_etaria_taxas_concl_sup_e_anafal_id',
  faixa_etaria_taxas_concl_ed_basica_id: 'faixa_etaria_taxas_concl_ed_basica_id',
  nivel_instrucao_id: 'nivel_instrucao_id'
};

exports.Prisma.DadoEducacaoSuperiorScalarFieldEnum = {
  id: 'id',
  ano: 'ano',
  tipo: 'tipo',
  total: 'total',
  data_atualizacao: 'data_atualizacao',
  localidade_id: 'localidade_id',
  cursos_id: 'cursos_id',
  faixa_etaria_id: 'faixa_etaria_id',
  organizacao_academica_id: 'organizacao_academica_id',
  categoria_administrativa_id: 'categoria_administrativa_id',
  modalidade_ensino_id: 'modalidade_ensino_id',
  instituicao_ensino_id: 'instituicao_ensino_id',
  formacao_docente_id: 'formacao_docente_id',
  regime_docente_id: 'regime_docente_id'
};

exports.Prisma.ImportacaoAPIScalarFieldEnum = {
  id: 'id',
  data_importacao: 'data_importacao',
  tipo_dado: 'tipo_dado',
  anos_importados: 'anos_importados',
  filtros_aplicados: 'filtros_aplicados',
  total_registros: 'total_registros',
  status: 'status',
  mensagem_erro: 'mensagem_erro'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};


exports.Prisma.ModelName = {
  Localidade: 'Localidade',
  DependenciaAdministrativaBasica: 'DependenciaAdministrativaBasica',
  DependenciaAdministrativaBasicaTeacher: 'DependenciaAdministrativaBasicaTeacher',
  DependenciaAdministrativaBasicaApos23: 'DependenciaAdministrativaBasicaApos23',
  EtapaEnsinoBasica: 'EtapaEnsinoBasica',
  EtapaTurma: 'EtapaTurma',
  EtapaMatriculaAte2020: 'EtapaMatriculaAte2020',
  EtapaEnsinoBasicaSchool: 'EtapaEnsinoBasicaSchool',
  EtapaEnsinoBasicaTeacher21: 'EtapaEnsinoBasicaTeacher21',
  EtapaEnsinoBasicaApos23: 'EtapaEnsinoBasicaApos23',
  EtapaEnsinoBasicaApos23TeacherClass: 'EtapaEnsinoBasicaApos23TeacherClass',
  Localizacao: 'Localizacao',
  VinculoFuncional: 'VinculoFuncional',
  FormacaoDocente: 'FormacaoDocente',
  FaixaEtaria: 'FaixaEtaria',
  FaixaEtariaTaxas: 'FaixaEtariaTaxas',
  FaixaEtariaTaxaConcEdlSupEAnafal: 'FaixaEtariaTaxaConcEdlSupEAnafal',
  FaixaEtariaTaxaConclEdBasica: 'FaixaEtariaTaxaConclEdBasica',
  NivelInstrucao: 'NivelInstrucao',
  Entidade: 'Entidade',
  CursosSuperior: 'CursosSuperior',
  FaixaEtariaSuperior: 'FaixaEtariaSuperior',
  OrganizacaoAcademicaSuperior: 'OrganizacaoAcademicaSuperior',
  CategoriaAdministrativaSuperior: 'CategoriaAdministrativaSuperior',
  ModalidadeEnsinoSuperior: 'ModalidadeEnsinoSuperior',
  RegimeDocenteEnsinoSuperior: 'RegimeDocenteEnsinoSuperior',
  FormacaoDocenteEnsinoSuperior: 'FormacaoDocenteEnsinoSuperior',
  InstituicaoEnsinoSuperior: 'InstituicaoEnsinoSuperior',
  DadoEducacaoBasica: 'DadoEducacaoBasica',
  DadoEducacaoBasicaApos23: 'DadoEducacaoBasicaApos23',
  TaxasPorFaixaEtaria: 'TaxasPorFaixaEtaria',
  Taxas: 'Taxas',
  DadoEducacaoSuperior: 'DadoEducacaoSuperior',
  ImportacaoAPI: 'ImportacaoAPI'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\BACKUP ARQUIVOS\\Documents\\UFPI\\ObservatorioProjetoExt\\observatorioProjeto\\api\\prisma\\educacao\\generated\\educacao-client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.11.0",
  "engineVersion": "5a9203d0590c951969e85a7d07215503f4672eb9",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL_EDUCACAO",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n    provider = \"prisma-client-js\"\n    output   = \"./generated/educacao-client\"\n}\n\ndatasource db {\n    provider = \"postgresql\"\n    url      = env(\"DATABASE_URL_EDUCACAO\")\n}\n\n// Dimensões compartilhadas\nmodel Localidade {\n    id          Int     @id\n    nome        String\n    tipo        String // \"estado\" ou \"municipio\"\n    uf          String? @db.Char(2)\n    codigo_ibge String?\n\n    // Relações\n    dados_basica            DadoEducacaoBasica[]\n    dados_basica_apos23     DadoEducacaoBasicaApos23[]\n    taxas_por_faixa_etaria  TaxasPorFaixaEtaria[]\n    taxas                   Taxas[]\n    dados_educacao_superior DadoEducacaoSuperior[]\n}\n\n// Dimensões específicas da educação básica\nmodel DependenciaAdministrativaBasica {\n    id   Int     @id\n    nome String\n    tipo String? // \"federal\", \"estadual\", \"municipal\", \"privada\"\n\n    // Relações\n    dados DadoEducacaoBasica[]\n}\n\nmodel DependenciaAdministrativaBasicaTeacher {\n    id   Int     @id\n    nome String\n    tipo String? // \"federal\", \"estadual\", \"municipal\", \"privada\"\n\n    // Relações\n    dados DadoEducacaoBasica[]\n}\n\nmodel DependenciaAdministrativaBasicaApos23 {\n    id   Int     @id\n    nome String\n    tipo String? // \"federal\", \"estadual\", \"municipal\", \"privada\"\n\n    // Relações\n    dados DadoEducacaoBasicaApos23[]\n}\n\nmodel EtapaEnsinoBasica {\n    id         Int     @id\n    nome       String\n    nome_curto String?\n\n    // Relações\n    dados DadoEducacaoBasica[]\n}\n\nmodel EtapaTurma {\n    id   Int    @id\n    nome String\n\n    // Relações\n    dados DadoEducacaoBasica[]\n}\n\nmodel EtapaMatriculaAte2020 {\n    id   Int    @id\n    nome String\n\n    // Relações\n    dados DadoEducacaoBasica[]\n}\n\nmodel EtapaEnsinoBasicaSchool {\n    id   Int    @id\n    nome String\n\n    // Relações\n    dados DadoEducacaoBasica[]\n}\n\nmodel EtapaEnsinoBasicaTeacher21 {\n    id   Int    @id\n    nome String\n\n    // Relações\n    dados DadoEducacaoBasica[]\n}\n\nmodel EtapaEnsinoBasicaApos23 {\n    id   Int    @id\n    nome String @unique\n\n    // Relações\n    dados DadoEducacaoBasicaApos23[]\n}\n\nmodel EtapaEnsinoBasicaApos23TeacherClass {\n    id   Int    @id\n    nome String @unique\n\n    // Relações\n    dados DadoEducacaoBasicaApos23[]\n}\n\nmodel Localizacao {\n    id   Int    @id\n    nome String // \"Urbana\" ou \"Rural\"\n\n    // Relações\n    dados_basica        DadoEducacaoBasica[]\n    dados_basica_apos23 DadoEducacaoBasicaApos23[]\n    taxas               Taxas[]\n}\n\nmodel VinculoFuncional {\n    id   Int    @id\n    nome String\n\n    // Relações\n    dados DadoEducacaoBasica[]\n}\n\nmodel FormacaoDocente {\n    id   Int    @id\n    nome String\n\n    // Relações\n    dados DadoEducacaoBasica[]\n}\n\nmodel FaixaEtaria {\n    id            Int    @id\n    nome          String\n    idade_inicial Int?\n    idade_final   Int?\n\n    // Relações\n    dados DadoEducacaoBasica[]\n}\n\nmodel FaixaEtariaTaxas {\n    id            Int    @id\n    nome          String\n    idade_inicial Int?\n    idade_final   Int?\n\n    // Relações\n    taxas TaxasPorFaixaEtaria[]\n}\n\nmodel FaixaEtariaTaxaConcEdlSupEAnafal {\n    id            Int    @id\n    nome          String\n    idade_inicial Int?\n    idade_final   Int?\n\n    // Relações\n    taxas Taxas[]\n}\n\nmodel FaixaEtariaTaxaConclEdBasica {\n    id            Int    @id\n    nome          String\n    idade_inicial Int?\n    idade_final   Int?\n\n    // Relações\n    taxas Taxas[]\n}\n\nmodel NivelInstrucao {\n    id   Int    @id\n    nome String\n\n    // Relações\n    taxas Taxas[]\n}\n\nmodel Entidade {\n    id     Int    @id @default(autoincrement())\n    codigo String @unique\n    nome   String\n\n    // Relação com os fatos\n    dados DadoEducacaoBasicaApos23[]\n}\n\nmodel CursosSuperior {\n    id         Int                    @id @default(autoincrement())\n    codigo_ies Int // Código da instituição de ensino superior\n    codigo     String // Código do curso\n    nome       String // Nome do curso\n    dados      DadoEducacaoSuperior[]\n\n    @@unique([codigo_ies, codigo]) // Chave única composta por instituição e curso\n}\n\nmodel FaixaEtariaSuperior {\n    id     Int    @id @default(autoincrement())\n    codigo String @unique\n    nome   String\n\n    // Relação com os fatos\n    dados DadoEducacaoSuperior[]\n}\n\nmodel OrganizacaoAcademicaSuperior {\n    id     Int    @id @default(autoincrement())\n    codigo String @unique\n    nome   String\n\n    // Relação com os fatos\n    dados DadoEducacaoSuperior[]\n}\n\nmodel CategoriaAdministrativaSuperior {\n    id     Int    @id @default(autoincrement())\n    codigo String @unique\n    nome   String\n\n    // Relação com os fatos\n    dados DadoEducacaoSuperior[]\n}\n\nmodel ModalidadeEnsinoSuperior {\n    id     Int    @id @default(autoincrement())\n    codigo String @unique\n    nome   String\n\n    // Relação com os fatos\n    dados DadoEducacaoSuperior[]\n}\n\nmodel RegimeDocenteEnsinoSuperior {\n    id     Int    @id @default(autoincrement())\n    codigo String @unique\n    nome   String\n\n    // Relação com os fatos\n    dados DadoEducacaoSuperior[]\n}\n\nmodel FormacaoDocenteEnsinoSuperior {\n    id     Int    @id @default(autoincrement())\n    codigo String @unique\n    nome   String\n\n    // Relação com os fatos\n    dados DadoEducacaoSuperior[]\n}\n\nmodel InstituicaoEnsinoSuperior {\n    id     Int    @id @default(autoincrement())\n    codigo String @unique\n    nome   String\n\n    // Relação com os fatos\n    dados DadoEducacaoSuperior[]\n}\n\n// Tabela de fatos\nmodel DadoEducacaoBasica {\n    id               Int      @id @default(autoincrement())\n    tipo             String // \"enrollment\", \"school/count\", \"class\", \"teacher\", \"auxiliar\", \"employees\", \"out_of_school\", \"liquid_enrollment_ratio\", \"gloss_enrollment_ratio\", \"rate_school_new\"\n    ano              Int\n    total            Decimal  @db.Decimal(15, 2)\n    data_atualizacao DateTime @default(now())\n\n    // Dimensões (todas opcionais)\n    localidade_id Int?\n    localidade    Localidade? @relation(fields: [localidade_id], references: [id])\n\n    dependencia_id Int?\n    dependencia    DependenciaAdministrativaBasica? @relation(fields: [dependencia_id], references: [id])\n\n    dependencia_teacher_id Int?\n    dependencia_teacher    DependenciaAdministrativaBasicaTeacher? @relation(fields: [dependencia_teacher_id], references: [id])\n\n    etapa_id Int?\n    etapa    EtapaEnsinoBasica? @relation(fields: [etapa_id], references: [id])\n\n    etapa_school_id Int?\n    etapa_school    EtapaEnsinoBasicaSchool? @relation(fields: [etapa_school_id], references: [id])\n\n    etapa_teacher_id Int?\n    etapa_teacher    EtapaEnsinoBasicaTeacher21? @relation(fields: [etapa_teacher_id], references: [id])\n\n    etapa_turma_id Int?\n    etapa_turma    EtapaTurma? @relation(fields: [etapa_turma_id], references: [id])\n\n    etapa_matricula_ate2020_id Int?\n    etapa_matricula_ate2020    EtapaMatriculaAte2020? @relation(fields: [etapa_matricula_ate2020_id], references: [id])\n\n    localizacao_id Int?\n    localizacao    Localizacao? @relation(fields: [localizacao_id], references: [id])\n\n    vinculo_id Int?\n    vinculo    VinculoFuncional? @relation(fields: [vinculo_id], references: [id])\n\n    formacao_id Int?\n    formacao    FormacaoDocente? @relation(fields: [formacao_id], references: [id])\n\n    faixa_etaria_id Int?\n    faixa_etaria    FaixaEtaria? @relation(fields: [faixa_etaria_id], references: [id])\n\n    // Índices e chaves únicas\n    @@index([tipo, ano, localidade_id])\n    @@index([ano])\n    @@index([localidade_id])\n    @@index([dependencia_id])\n    @@index([etapa_id])\n    @@index([etapa_turma_id])\n    @@index([etapa_matricula_ate2020_id])\n    @@index([localizacao_id])\n}\n\nmodel DadoEducacaoBasicaApos23 {\n    id               Int      @id @default(autoincrement())\n    ano              Int\n    tipo             String // \"enrollment\", \"school/count\", \"class\", \"teacher\", \"auxiliar\", \"employees\", \"out_of_school\", \"liquid_enrollment_ratio\", \"gloss_enrollment_ratio\", \"rate_school_new\"\n    total            Decimal  @db.Decimal(15, 2)\n    data_atualizacao DateTime @default(now())\n\n    localidade_id Int?\n    localidade    Localidade? @relation(fields: [localidade_id], references: [id])\n\n    dependencia_id Int?\n    dependencia    DependenciaAdministrativaBasicaApos23? @relation(fields: [dependencia_id], references: [id])\n\n    etapa_id Int?\n    etapa    EtapaEnsinoBasicaApos23? @relation(fields: [etapa_id], references: [id])\n\n    etapa_teacher_class_id Int?\n    etapa_teacher_class    EtapaEnsinoBasicaApos23TeacherClass? @relation(fields: [etapa_teacher_class_id], references: [id])\n\n    // pode ser a mesma tabela pos so tem urbana e rural\n    localizacao_id Int?\n    localizacao    Localizacao? @relation(fields: [localizacao_id], references: [id])\n\n    entidade_id Int?\n    entidade    Entidade? @relation(fields: [entidade_id], references: [id])\n\n    // Índices para otimização de consultas\n    @@index([tipo, ano, localidade_id])\n    @@index([ano])\n    @@index([localidade_id])\n    @@index([dependencia_id])\n    @@index([etapa_id])\n    @@index([localizacao_id])\n    @@index([entidade_id])\n}\n\nmodel TaxasPorFaixaEtaria {\n    id               Int      @id @default(autoincrement())\n    ano              Int\n    tipo             String\n    total            Decimal  @db.Decimal(15, 2)\n    denominador      Int?\n    numerador        Int?\n    data_atualizacao DateTime @default(now())\n\n    localidade_id Int?\n    localidade    Localidade? @relation(fields: [localidade_id], references: [id])\n\n    faixa_etaria_taxas_id Int?\n    faixa_etaria_taxas    FaixaEtariaTaxas? @relation(fields: [faixa_etaria_taxas_id], references: [id])\n\n    // Índices para otimização de consultas\n    @@index([tipo, ano, localidade_id, faixa_etaria_taxas_id])\n    @@index([ano])\n    @@index([localidade_id])\n    @@index([faixa_etaria_taxas_id])\n}\n\nmodel Taxas {\n    id               Int      @id @default(autoincrement())\n    ano              Int\n    tipo             String\n    total            Decimal  @db.Decimal(15, 2)\n    data_atualizacao DateTime @default(now())\n\n    localidade_id Int?\n    localidade    Localidade? @relation(fields: [localidade_id], references: [id])\n\n    localizacao_id Int?\n    localizacao    Localizacao? @relation(fields: [localizacao_id], references: [id])\n\n    faixa_etaria_taxas_concl_sup_e_anafal_id Int?\n    faixa_etaria_taxas_concl_sup_e_anafal    FaixaEtariaTaxaConcEdlSupEAnafal? @relation(fields: [faixa_etaria_taxas_concl_sup_e_anafal_id], references: [id])\n\n    faixa_etaria_taxas_concl_ed_basica_id Int?\n    faixa_etaria_taxas_concl_ed_basica    FaixaEtariaTaxaConclEdBasica? @relation(fields: [faixa_etaria_taxas_concl_ed_basica_id], references: [id])\n\n    nivel_instrucao_id Int?\n    nivel_instrucao    NivelInstrucao? @relation(fields: [nivel_instrucao_id], references: [id])\n\n    // Índices para otimização de consultas\n    @@index([tipo, ano, localidade_id])\n    @@index([ano])\n    @@index([localidade_id])\n    @@index([localizacao_id])\n    @@index([faixa_etaria_taxas_concl_sup_e_anafal_id])\n    @@index([faixa_etaria_taxas_concl_ed_basica_id])\n    @@index([nivel_instrucao_id])\n}\n\nmodel DadoEducacaoSuperior {\n    id               Int      @id @default(autoincrement())\n    ano              Int\n    tipo             String\n    total            Decimal  @db.Decimal(15, 2)\n    data_atualizacao DateTime @default(now())\n\n    localidade_id Int?\n    localidade    Localidade? @relation(fields: [localidade_id], references: [id])\n\n    cursos_id Int?\n    cursos    CursosSuperior? @relation(fields: [cursos_id], references: [id])\n\n    faixa_etaria_id Int?\n    faixa_etaria    FaixaEtariaSuperior? @relation(fields: [faixa_etaria_id], references: [id])\n\n    organizacao_academica_id Int?\n    organizacao_academica    OrganizacaoAcademicaSuperior? @relation(fields: [organizacao_academica_id], references: [id])\n\n    categoria_administrativa_id Int?\n    categoria_administrativa    CategoriaAdministrativaSuperior? @relation(fields: [categoria_administrativa_id], references: [id])\n\n    modalidade_ensino_id Int?\n    modalidade_ensino    ModalidadeEnsinoSuperior? @relation(fields: [modalidade_ensino_id], references: [id])\n\n    instituicao_ensino_id Int?\n    instituicao_ensino    InstituicaoEnsinoSuperior? @relation(fields: [instituicao_ensino_id], references: [id])\n\n    formacao_docente_id Int?\n    formacao_docente    FormacaoDocenteEnsinoSuperior? @relation(fields: [formacao_docente_id], references: [id])\n\n    regime_docente_id Int?\n    regime_docente    RegimeDocenteEnsinoSuperior? @relation(fields: [regime_docente_id], references: [id])\n\n    // Índices para otimização de consultas\n    @@index([tipo, ano, localidade_id, cursos_id, faixa_etaria_id, organizacao_academica_id, categoria_administrativa_id, modalidade_ensino_id, formacao_docente_id, regime_docente_id])\n    @@index([tipo, ano, localidade_id])\n    @@index([ano])\n    @@index([localidade_id])\n    @@index([cursos_id])\n    @@index([faixa_etaria_id])\n    @@index([organizacao_academica_id])\n    @@index([categoria_administrativa_id])\n    @@index([modalidade_ensino_id])\n    @@index([formacao_docente_id])\n    @@index([regime_docente_id])\n}\n\n// Controle de importações\nmodel ImportacaoAPI {\n    id                Int      @id @default(autoincrement())\n    data_importacao   DateTime @default(now())\n    tipo_dado         String\n    anos_importados   Int[]\n    filtros_aplicados Json?\n    total_registros   Int\n    status            String // \"sucesso\", \"erro\", \"parcial\"\n    mensagem_erro     String?\n}\n",
  "inlineSchemaHash": "5ab3cf616724ec974aee4fb1e68bffcd3fa83ce8cc762cc660cbc185ed8c0a83",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Localidade\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uf\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codigo_ibge\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados_basica\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasica\",\"relationName\":\"DadoEducacaoBasicaToLocalidade\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados_basica_apos23\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasicaApos23\",\"relationName\":\"DadoEducacaoBasicaApos23ToLocalidade\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"taxas_por_faixa_etaria\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TaxasPorFaixaEtaria\",\"relationName\":\"LocalidadeToTaxasPorFaixaEtaria\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"taxas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Taxas\",\"relationName\":\"LocalidadeToTaxas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados_educacao_superior\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoSuperior\",\"relationName\":\"DadoEducacaoSuperiorToLocalidade\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DependenciaAdministrativaBasica\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasica\",\"relationName\":\"DadoEducacaoBasicaToDependenciaAdministrativaBasica\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DependenciaAdministrativaBasicaTeacher\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasica\",\"relationName\":\"DadoEducacaoBasicaToDependenciaAdministrativaBasicaTeacher\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DependenciaAdministrativaBasicaApos23\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasicaApos23\",\"relationName\":\"DadoEducacaoBasicaApos23ToDependenciaAdministrativaBasicaApos23\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EtapaEnsinoBasica\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome_curto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasica\",\"relationName\":\"DadoEducacaoBasicaToEtapaEnsinoBasica\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EtapaTurma\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasica\",\"relationName\":\"DadoEducacaoBasicaToEtapaTurma\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EtapaMatriculaAte2020\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasica\",\"relationName\":\"DadoEducacaoBasicaToEtapaMatriculaAte2020\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EtapaEnsinoBasicaSchool\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasica\",\"relationName\":\"DadoEducacaoBasicaToEtapaEnsinoBasicaSchool\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EtapaEnsinoBasicaTeacher21\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasica\",\"relationName\":\"DadoEducacaoBasicaToEtapaEnsinoBasicaTeacher21\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EtapaEnsinoBasicaApos23\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasicaApos23\",\"relationName\":\"DadoEducacaoBasicaApos23ToEtapaEnsinoBasicaApos23\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EtapaEnsinoBasicaApos23TeacherClass\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasicaApos23\",\"relationName\":\"DadoEducacaoBasicaApos23ToEtapaEnsinoBasicaApos23TeacherClass\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Localizacao\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados_basica\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasica\",\"relationName\":\"DadoEducacaoBasicaToLocalizacao\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados_basica_apos23\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasicaApos23\",\"relationName\":\"DadoEducacaoBasicaApos23ToLocalizacao\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"taxas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Taxas\",\"relationName\":\"LocalizacaoToTaxas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"VinculoFuncional\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasica\",\"relationName\":\"DadoEducacaoBasicaToVinculoFuncional\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FormacaoDocente\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasica\",\"relationName\":\"DadoEducacaoBasicaToFormacaoDocente\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FaixaEtaria\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idade_inicial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idade_final\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasica\",\"relationName\":\"DadoEducacaoBasicaToFaixaEtaria\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FaixaEtariaTaxas\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idade_inicial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idade_final\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"taxas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TaxasPorFaixaEtaria\",\"relationName\":\"FaixaEtariaTaxasToTaxasPorFaixaEtaria\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FaixaEtariaTaxaConcEdlSupEAnafal\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idade_inicial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idade_final\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"taxas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Taxas\",\"relationName\":\"FaixaEtariaTaxaConcEdlSupEAnafalToTaxas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FaixaEtariaTaxaConclEdBasica\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idade_inicial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idade_final\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"taxas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Taxas\",\"relationName\":\"FaixaEtariaTaxaConclEdBasicaToTaxas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"NivelInstrucao\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"taxas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Taxas\",\"relationName\":\"NivelInstrucaoToTaxas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Entidade\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codigo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasicaApos23\",\"relationName\":\"DadoEducacaoBasicaApos23ToEntidade\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CursosSuperior\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codigo_ies\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codigo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoSuperior\",\"relationName\":\"CursosSuperiorToDadoEducacaoSuperior\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"codigo_ies\",\"codigo\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"codigo_ies\",\"codigo\"]}],\"isGenerated\":false},\"FaixaEtariaSuperior\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codigo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoSuperior\",\"relationName\":\"DadoEducacaoSuperiorToFaixaEtariaSuperior\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"OrganizacaoAcademicaSuperior\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codigo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoSuperior\",\"relationName\":\"DadoEducacaoSuperiorToOrganizacaoAcademicaSuperior\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CategoriaAdministrativaSuperior\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codigo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoSuperior\",\"relationName\":\"CategoriaAdministrativaSuperiorToDadoEducacaoSuperior\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ModalidadeEnsinoSuperior\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codigo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoSuperior\",\"relationName\":\"DadoEducacaoSuperiorToModalidadeEnsinoSuperior\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RegimeDocenteEnsinoSuperior\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codigo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoSuperior\",\"relationName\":\"DadoEducacaoSuperiorToRegimeDocenteEnsinoSuperior\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FormacaoDocenteEnsinoSuperior\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codigo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoSuperior\",\"relationName\":\"DadoEducacaoSuperiorToFormacaoDocenteEnsinoSuperior\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InstituicaoEnsinoSuperior\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codigo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoSuperior\",\"relationName\":\"DadoEducacaoSuperiorToInstituicaoEnsinoSuperior\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DadoEducacaoBasica\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ano\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data_atualizacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"localidade_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"localidade\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Localidade\",\"relationName\":\"DadoEducacaoBasicaToLocalidade\",\"relationFromFields\":[\"localidade_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dependencia_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dependencia\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DependenciaAdministrativaBasica\",\"relationName\":\"DadoEducacaoBasicaToDependenciaAdministrativaBasica\",\"relationFromFields\":[\"dependencia_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dependencia_teacher_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dependencia_teacher\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DependenciaAdministrativaBasicaTeacher\",\"relationName\":\"DadoEducacaoBasicaToDependenciaAdministrativaBasicaTeacher\",\"relationFromFields\":[\"dependencia_teacher_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etapa_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etapa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EtapaEnsinoBasica\",\"relationName\":\"DadoEducacaoBasicaToEtapaEnsinoBasica\",\"relationFromFields\":[\"etapa_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etapa_school_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etapa_school\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EtapaEnsinoBasicaSchool\",\"relationName\":\"DadoEducacaoBasicaToEtapaEnsinoBasicaSchool\",\"relationFromFields\":[\"etapa_school_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etapa_teacher_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etapa_teacher\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EtapaEnsinoBasicaTeacher21\",\"relationName\":\"DadoEducacaoBasicaToEtapaEnsinoBasicaTeacher21\",\"relationFromFields\":[\"etapa_teacher_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etapa_turma_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etapa_turma\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EtapaTurma\",\"relationName\":\"DadoEducacaoBasicaToEtapaTurma\",\"relationFromFields\":[\"etapa_turma_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etapa_matricula_ate2020_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etapa_matricula_ate2020\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EtapaMatriculaAte2020\",\"relationName\":\"DadoEducacaoBasicaToEtapaMatriculaAte2020\",\"relationFromFields\":[\"etapa_matricula_ate2020_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"localizacao_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"localizacao\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Localizacao\",\"relationName\":\"DadoEducacaoBasicaToLocalizacao\",\"relationFromFields\":[\"localizacao_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vinculo_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vinculo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"VinculoFuncional\",\"relationName\":\"DadoEducacaoBasicaToVinculoFuncional\",\"relationFromFields\":[\"vinculo_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"formacao_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"formacao\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FormacaoDocente\",\"relationName\":\"DadoEducacaoBasicaToFormacaoDocente\",\"relationFromFields\":[\"formacao_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"faixa_etaria_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"faixa_etaria\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FaixaEtaria\",\"relationName\":\"DadoEducacaoBasicaToFaixaEtaria\",\"relationFromFields\":[\"faixa_etaria_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DadoEducacaoBasicaApos23\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ano\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data_atualizacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"localidade_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"localidade\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Localidade\",\"relationName\":\"DadoEducacaoBasicaApos23ToLocalidade\",\"relationFromFields\":[\"localidade_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dependencia_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dependencia\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DependenciaAdministrativaBasicaApos23\",\"relationName\":\"DadoEducacaoBasicaApos23ToDependenciaAdministrativaBasicaApos23\",\"relationFromFields\":[\"dependencia_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etapa_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etapa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EtapaEnsinoBasicaApos23\",\"relationName\":\"DadoEducacaoBasicaApos23ToEtapaEnsinoBasicaApos23\",\"relationFromFields\":[\"etapa_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etapa_teacher_class_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etapa_teacher_class\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EtapaEnsinoBasicaApos23TeacherClass\",\"relationName\":\"DadoEducacaoBasicaApos23ToEtapaEnsinoBasicaApos23TeacherClass\",\"relationFromFields\":[\"etapa_teacher_class_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"localizacao_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"localizacao\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Localizacao\",\"relationName\":\"DadoEducacaoBasicaApos23ToLocalizacao\",\"relationFromFields\":[\"localizacao_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entidade_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entidade\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Entidade\",\"relationName\":\"DadoEducacaoBasicaApos23ToEntidade\",\"relationFromFields\":[\"entidade_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TaxasPorFaixaEtaria\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ano\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"denominador\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numerador\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data_atualizacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"localidade_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"localidade\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Localidade\",\"relationName\":\"LocalidadeToTaxasPorFaixaEtaria\",\"relationFromFields\":[\"localidade_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"faixa_etaria_taxas_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"faixa_etaria_taxas\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FaixaEtariaTaxas\",\"relationName\":\"FaixaEtariaTaxasToTaxasPorFaixaEtaria\",\"relationFromFields\":[\"faixa_etaria_taxas_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Taxas\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ano\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data_atualizacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"localidade_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"localidade\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Localidade\",\"relationName\":\"LocalidadeToTaxas\",\"relationFromFields\":[\"localidade_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"localizacao_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"localizacao\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Localizacao\",\"relationName\":\"LocalizacaoToTaxas\",\"relationFromFields\":[\"localizacao_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"faixa_etaria_taxas_concl_sup_e_anafal_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"faixa_etaria_taxas_concl_sup_e_anafal\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FaixaEtariaTaxaConcEdlSupEAnafal\",\"relationName\":\"FaixaEtariaTaxaConcEdlSupEAnafalToTaxas\",\"relationFromFields\":[\"faixa_etaria_taxas_concl_sup_e_anafal_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"faixa_etaria_taxas_concl_ed_basica_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"faixa_etaria_taxas_concl_ed_basica\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FaixaEtariaTaxaConclEdBasica\",\"relationName\":\"FaixaEtariaTaxaConclEdBasicaToTaxas\",\"relationFromFields\":[\"faixa_etaria_taxas_concl_ed_basica_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nivel_instrucao_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nivel_instrucao\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"NivelInstrucao\",\"relationName\":\"NivelInstrucaoToTaxas\",\"relationFromFields\":[\"nivel_instrucao_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DadoEducacaoSuperior\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ano\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data_atualizacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"localidade_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"localidade\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Localidade\",\"relationName\":\"DadoEducacaoSuperiorToLocalidade\",\"relationFromFields\":[\"localidade_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cursos_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cursos\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CursosSuperior\",\"relationName\":\"CursosSuperiorToDadoEducacaoSuperior\",\"relationFromFields\":[\"cursos_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"faixa_etaria_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"faixa_etaria\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FaixaEtariaSuperior\",\"relationName\":\"DadoEducacaoSuperiorToFaixaEtariaSuperior\",\"relationFromFields\":[\"faixa_etaria_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"organizacao_academica_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"organizacao_academica\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OrganizacaoAcademicaSuperior\",\"relationName\":\"DadoEducacaoSuperiorToOrganizacaoAcademicaSuperior\",\"relationFromFields\":[\"organizacao_academica_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categoria_administrativa_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categoria_administrativa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CategoriaAdministrativaSuperior\",\"relationName\":\"CategoriaAdministrativaSuperiorToDadoEducacaoSuperior\",\"relationFromFields\":[\"categoria_administrativa_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modalidade_ensino_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modalidade_ensino\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModalidadeEnsinoSuperior\",\"relationName\":\"DadoEducacaoSuperiorToModalidadeEnsinoSuperior\",\"relationFromFields\":[\"modalidade_ensino_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instituicao_ensino_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instituicao_ensino\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InstituicaoEnsinoSuperior\",\"relationName\":\"DadoEducacaoSuperiorToInstituicaoEnsinoSuperior\",\"relationFromFields\":[\"instituicao_ensino_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"formacao_docente_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"formacao_docente\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FormacaoDocenteEnsinoSuperior\",\"relationName\":\"DadoEducacaoSuperiorToFormacaoDocenteEnsinoSuperior\",\"relationFromFields\":[\"formacao_docente_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regime_docente_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regime_docente\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RegimeDocenteEnsinoSuperior\",\"relationName\":\"DadoEducacaoSuperiorToRegimeDocenteEnsinoSuperior\",\"relationFromFields\":[\"regime_docente_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ImportacaoAPI\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data_importacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_dado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"anos_importados\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"filtros_aplicados\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_registros\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mensagem_erro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL_EDUCACAO: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL_EDUCACAO'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL_EDUCACAO || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

