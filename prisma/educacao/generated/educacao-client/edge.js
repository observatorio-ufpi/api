
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

exports.Prisma.EntidadeScalarFieldEnum = {
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
  EtapaEnsinoBasicaSchool: 'EtapaEnsinoBasicaSchool',
  EtapaEnsinoBasicaTeacher21: 'EtapaEnsinoBasicaTeacher21',
  EtapaEnsinoBasicaApos23: 'EtapaEnsinoBasicaApos23',
  EtapaEnsinoBasicaApos23TeacherClass: 'EtapaEnsinoBasicaApos23TeacherClass',
  Localizacao: 'Localizacao',
  VinculoFuncional: 'VinculoFuncional',
  FormacaoDocente: 'FormacaoDocente',
  FaixaEtaria: 'FaixaEtaria',
  Entidade: 'Entidade',
  DadoEducacaoBasica: 'DadoEducacaoBasica',
  DadoEducacaoBasicaApos23: 'DadoEducacaoBasicaApos23',
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
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL_EDUCACAO",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\r\n    provider = \"prisma-client-js\"\r\n    output   = \"./generated/educacao-client\"\r\n}\r\n\r\ndatasource db {\r\n    provider = \"postgresql\"\r\n    url      = env(\"DATABASE_URL_EDUCACAO\")\r\n}\r\n\r\n// Dimensões compartilhadas\r\nmodel Localidade {\r\n    id          Int     @id\r\n    nome        String\r\n    tipo        String // \"estado\" ou \"municipio\"\r\n    uf          String? @db.Char(2)\r\n    codigo_ibge String?\r\n\r\n    // Relações\r\n    dados_basica        DadoEducacaoBasica[]\r\n    dados_basica_apos23 DadoEducacaoBasicaApos23[]\r\n}\r\n\r\n// Dimensões específicas da educação básica\r\nmodel DependenciaAdministrativaBasica {\r\n    id   Int     @id\r\n    nome String\r\n    tipo String? // \"federal\", \"estadual\", \"municipal\", \"privada\"\r\n\r\n    // Relações\r\n    dados DadoEducacaoBasica[]\r\n}\r\n\r\nmodel DependenciaAdministrativaBasicaTeacher {\r\n    id   Int     @id\r\n    nome String\r\n    tipo String? // \"federal\", \"estadual\", \"municipal\", \"privada\"\r\n\r\n    // Relações\r\n    dados DadoEducacaoBasica[]\r\n}\r\n\r\nmodel DependenciaAdministrativaBasicaApos23 {\r\n    id   Int     @id\r\n    nome String\r\n    tipo String? // \"federal\", \"estadual\", \"municipal\", \"privada\"\r\n\r\n    // Relações\r\n    dados DadoEducacaoBasicaApos23[]\r\n}\r\n\r\nmodel EtapaEnsinoBasica {\r\n    id         Int     @id\r\n    nome       String\r\n    nome_curto String?\r\n\r\n    // Relações\r\n    dados DadoEducacaoBasica[]\r\n}\r\n\r\nmodel EtapaEnsinoBasicaSchool {\r\n    id   Int    @id\r\n    nome String\r\n\r\n    // Relações\r\n    dados DadoEducacaoBasica[]\r\n}\r\n\r\nmodel EtapaEnsinoBasicaTeacher21 {\r\n    id   Int    @id\r\n    nome String\r\n\r\n    // Relações\r\n    dados DadoEducacaoBasica[]\r\n}\r\n\r\nmodel EtapaEnsinoBasicaApos23 {\r\n    id   Int    @id\r\n    nome String @unique\r\n\r\n    // Relações\r\n    dados DadoEducacaoBasicaApos23[]\r\n}\r\n\r\nmodel EtapaEnsinoBasicaApos23TeacherClass {\r\n    id   Int    @id\r\n    nome String @unique\r\n\r\n    // Relações\r\n    dados DadoEducacaoBasicaApos23[]\r\n}\r\n\r\nmodel Localizacao {\r\n    id   Int    @id\r\n    nome String // \"Urbana\" ou \"Rural\"\r\n\r\n    // Relações\r\n    dados_basica        DadoEducacaoBasica[]\r\n    dados_basica_apos23 DadoEducacaoBasicaApos23[]\r\n}\r\n\r\nmodel VinculoFuncional {\r\n    id   Int    @id\r\n    nome String\r\n\r\n    // Relações\r\n    dados DadoEducacaoBasica[]\r\n}\r\n\r\nmodel FormacaoDocente {\r\n    id   Int    @id\r\n    nome String\r\n\r\n    // Relações\r\n    dados DadoEducacaoBasica[]\r\n}\r\n\r\nmodel FaixaEtaria {\r\n    id            Int    @id\r\n    nome          String\r\n    idade_inicial Int?\r\n    idade_final   Int?\r\n\r\n    // Relações\r\n    dados DadoEducacaoBasica[]\r\n}\r\n\r\nmodel Entidade {\r\n    id     Int    @id @default(autoincrement())\r\n    codigo String @unique\r\n    nome   String\r\n\r\n    // Relação com os fatos\r\n    dados DadoEducacaoBasicaApos23[]\r\n}\r\n\r\n// Tabela de fatos\r\nmodel DadoEducacaoBasica {\r\n    id               Int      @id @default(autoincrement())\r\n    tipo             String // \"enrollment\", \"school/count\", \"class\", \"teacher\", \"auxiliar\", \"employees\", \"out_of_school\", \"liquid_enrollment_ratio\", \"gloss_enrollment_ratio\", \"rate_school_new\"\r\n    ano              Int\r\n    total            Decimal  @db.Decimal(15, 2)\r\n    data_atualizacao DateTime @default(now())\r\n\r\n    // Dimensões (todas opcionais)\r\n    localidade_id Int?\r\n    localidade    Localidade? @relation(fields: [localidade_id], references: [id])\r\n\r\n    dependencia_id Int?\r\n    dependencia    DependenciaAdministrativaBasica? @relation(fields: [dependencia_id], references: [id])\r\n\r\n    dependencia_teacher_id Int?\r\n    dependencia_teacher    DependenciaAdministrativaBasicaTeacher? @relation(fields: [dependencia_teacher_id], references: [id])\r\n\r\n    etapa_id Int?\r\n    etapa    EtapaEnsinoBasica? @relation(fields: [etapa_id], references: [id])\r\n\r\n    etapa_school_id Int?\r\n    etapa_school    EtapaEnsinoBasicaSchool? @relation(fields: [etapa_school_id], references: [id])\r\n\r\n    etapa_teacher_id Int?\r\n    etapa_teacher    EtapaEnsinoBasicaTeacher21? @relation(fields: [etapa_teacher_id], references: [id])\r\n\r\n    localizacao_id Int?\r\n    localizacao    Localizacao? @relation(fields: [localizacao_id], references: [id])\r\n\r\n    vinculo_id Int?\r\n    vinculo    VinculoFuncional? @relation(fields: [vinculo_id], references: [id])\r\n\r\n    formacao_id Int?\r\n    formacao    FormacaoDocente? @relation(fields: [formacao_id], references: [id])\r\n\r\n    faixa_etaria_id Int?\r\n    faixa_etaria    FaixaEtaria? @relation(fields: [faixa_etaria_id], references: [id])\r\n\r\n    // Índices e chaves únicas\r\n    @@index([tipo, ano, localidade_id])\r\n    @@index([ano])\r\n    @@index([localidade_id])\r\n    @@index([dependencia_id])\r\n    @@index([etapa_id])\r\n    @@index([localizacao_id])\r\n}\r\n\r\nmodel DadoEducacaoBasicaApos23 {\r\n    id               Int      @id @default(autoincrement())\r\n    ano              Int\r\n    tipo             String // \"enrollment\", \"school/count\", \"class\", \"teacher\", \"auxiliar\", \"employees\", \"out_of_school\", \"liquid_enrollment_ratio\", \"gloss_enrollment_ratio\", \"rate_school_new\"\r\n    total            Decimal  @db.Decimal(15, 2)\r\n    data_atualizacao DateTime @default(now())\r\n\r\n    localidade_id Int?\r\n    localidade    Localidade? @relation(fields: [localidade_id], references: [id])\r\n\r\n    dependencia_id Int?\r\n    dependencia    DependenciaAdministrativaBasicaApos23? @relation(fields: [dependencia_id], references: [id])\r\n\r\n    etapa_id Int?\r\n    etapa    EtapaEnsinoBasicaApos23? @relation(fields: [etapa_id], references: [id])\r\n\r\n    etapa_teacher_class_id Int?\r\n    etapa_teacher_class    EtapaEnsinoBasicaApos23TeacherClass? @relation(fields: [etapa_teacher_class_id], references: [id])\r\n\r\n    // pode ser a mesma tabela pos so tem urbana e rural\r\n    localizacao_id Int?\r\n    localizacao    Localizacao? @relation(fields: [localizacao_id], references: [id])\r\n\r\n    entidade_id Int?\r\n    entidade    Entidade? @relation(fields: [entidade_id], references: [id])\r\n}\r\n\r\n// Controle de importações\r\nmodel ImportacaoAPI {\r\n    id                Int      @id @default(autoincrement())\r\n    data_importacao   DateTime @default(now())\r\n    tipo_dado         String\r\n    anos_importados   Int[]\r\n    filtros_aplicados Json?\r\n    total_registros   Int\r\n    status            String // \"sucesso\", \"erro\", \"parcial\"\r\n    mensagem_erro     String?\r\n}\r\n",
  "inlineSchemaHash": "d9b30b02b6956cffe1cf59688fafc5e4f3ed057238e6562442b81a1fbee714a9",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Localidade\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uf\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codigo_ibge\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados_basica\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasica\",\"relationName\":\"DadoEducacaoBasicaToLocalidade\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados_basica_apos23\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasicaApos23\",\"relationName\":\"DadoEducacaoBasicaApos23ToLocalidade\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DependenciaAdministrativaBasica\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasica\",\"relationName\":\"DadoEducacaoBasicaToDependenciaAdministrativaBasica\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DependenciaAdministrativaBasicaTeacher\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasica\",\"relationName\":\"DadoEducacaoBasicaToDependenciaAdministrativaBasicaTeacher\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DependenciaAdministrativaBasicaApos23\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasicaApos23\",\"relationName\":\"DadoEducacaoBasicaApos23ToDependenciaAdministrativaBasicaApos23\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EtapaEnsinoBasica\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome_curto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasica\",\"relationName\":\"DadoEducacaoBasicaToEtapaEnsinoBasica\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EtapaEnsinoBasicaSchool\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasica\",\"relationName\":\"DadoEducacaoBasicaToEtapaEnsinoBasicaSchool\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EtapaEnsinoBasicaTeacher21\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasica\",\"relationName\":\"DadoEducacaoBasicaToEtapaEnsinoBasicaTeacher21\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EtapaEnsinoBasicaApos23\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasicaApos23\",\"relationName\":\"DadoEducacaoBasicaApos23ToEtapaEnsinoBasicaApos23\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EtapaEnsinoBasicaApos23TeacherClass\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasicaApos23\",\"relationName\":\"DadoEducacaoBasicaApos23ToEtapaEnsinoBasicaApos23TeacherClass\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Localizacao\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados_basica\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasica\",\"relationName\":\"DadoEducacaoBasicaToLocalizacao\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados_basica_apos23\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasicaApos23\",\"relationName\":\"DadoEducacaoBasicaApos23ToLocalizacao\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"VinculoFuncional\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasica\",\"relationName\":\"DadoEducacaoBasicaToVinculoFuncional\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FormacaoDocente\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasica\",\"relationName\":\"DadoEducacaoBasicaToFormacaoDocente\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FaixaEtaria\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idade_inicial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idade_final\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasica\",\"relationName\":\"DadoEducacaoBasicaToFaixaEtaria\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Entidade\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codigo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DadoEducacaoBasicaApos23\",\"relationName\":\"DadoEducacaoBasicaApos23ToEntidade\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DadoEducacaoBasica\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ano\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data_atualizacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"localidade_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"localidade\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Localidade\",\"relationName\":\"DadoEducacaoBasicaToLocalidade\",\"relationFromFields\":[\"localidade_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dependencia_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dependencia\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DependenciaAdministrativaBasica\",\"relationName\":\"DadoEducacaoBasicaToDependenciaAdministrativaBasica\",\"relationFromFields\":[\"dependencia_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dependencia_teacher_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dependencia_teacher\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DependenciaAdministrativaBasicaTeacher\",\"relationName\":\"DadoEducacaoBasicaToDependenciaAdministrativaBasicaTeacher\",\"relationFromFields\":[\"dependencia_teacher_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etapa_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etapa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EtapaEnsinoBasica\",\"relationName\":\"DadoEducacaoBasicaToEtapaEnsinoBasica\",\"relationFromFields\":[\"etapa_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etapa_school_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etapa_school\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EtapaEnsinoBasicaSchool\",\"relationName\":\"DadoEducacaoBasicaToEtapaEnsinoBasicaSchool\",\"relationFromFields\":[\"etapa_school_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etapa_teacher_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etapa_teacher\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EtapaEnsinoBasicaTeacher21\",\"relationName\":\"DadoEducacaoBasicaToEtapaEnsinoBasicaTeacher21\",\"relationFromFields\":[\"etapa_teacher_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"localizacao_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"localizacao\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Localizacao\",\"relationName\":\"DadoEducacaoBasicaToLocalizacao\",\"relationFromFields\":[\"localizacao_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vinculo_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vinculo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"VinculoFuncional\",\"relationName\":\"DadoEducacaoBasicaToVinculoFuncional\",\"relationFromFields\":[\"vinculo_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"formacao_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"formacao\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FormacaoDocente\",\"relationName\":\"DadoEducacaoBasicaToFormacaoDocente\",\"relationFromFields\":[\"formacao_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"faixa_etaria_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"faixa_etaria\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FaixaEtaria\",\"relationName\":\"DadoEducacaoBasicaToFaixaEtaria\",\"relationFromFields\":[\"faixa_etaria_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DadoEducacaoBasicaApos23\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ano\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data_atualizacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"localidade_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"localidade\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Localidade\",\"relationName\":\"DadoEducacaoBasicaApos23ToLocalidade\",\"relationFromFields\":[\"localidade_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dependencia_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dependencia\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DependenciaAdministrativaBasicaApos23\",\"relationName\":\"DadoEducacaoBasicaApos23ToDependenciaAdministrativaBasicaApos23\",\"relationFromFields\":[\"dependencia_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etapa_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etapa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EtapaEnsinoBasicaApos23\",\"relationName\":\"DadoEducacaoBasicaApos23ToEtapaEnsinoBasicaApos23\",\"relationFromFields\":[\"etapa_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etapa_teacher_class_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etapa_teacher_class\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EtapaEnsinoBasicaApos23TeacherClass\",\"relationName\":\"DadoEducacaoBasicaApos23ToEtapaEnsinoBasicaApos23TeacherClass\",\"relationFromFields\":[\"etapa_teacher_class_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"localizacao_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"localizacao\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Localizacao\",\"relationName\":\"DadoEducacaoBasicaApos23ToLocalizacao\",\"relationFromFields\":[\"localizacao_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entidade_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entidade\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Entidade\",\"relationName\":\"DadoEducacaoBasicaApos23ToEntidade\",\"relationFromFields\":[\"entidade_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ImportacaoAPI\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data_importacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_dado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"anos_importados\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"filtros_aplicados\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_registros\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mensagem_erro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
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

