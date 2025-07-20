
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
  Entidade: 'Entidade',
  DadoEducacaoBasica: 'DadoEducacaoBasica',
  DadoEducacaoBasicaApos23: 'DadoEducacaoBasicaApos23',
  TaxasPorFaixaEtaria: 'TaxasPorFaixaEtaria',
  ImportacaoAPI: 'ImportacaoAPI'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
