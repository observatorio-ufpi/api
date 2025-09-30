
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
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

exports.Prisma.CensoEscolarInfraestruturaScalarFieldEnum = {
  id: 'id',
  ANO: 'ANO',
  IN_LOCAL_FUNC_PREDIO_ESCOLAR: 'IN_LOCAL_FUNC_PREDIO_ESCOLAR',
  TP_OCUPACAO_PREDIO_ESCOLAR: 'TP_OCUPACAO_PREDIO_ESCOLAR',
  IN_LOCAL_FUNC_SALAS_EMPRESA: 'IN_LOCAL_FUNC_SALAS_EMPRESA',
  IN_LOCAL_FUNC_SOCIOEDUCATIVO: 'IN_LOCAL_FUNC_SOCIOEDUCATIVO',
  IN_LOCAL_FUNC_UNID_PRISIONAL: 'IN_LOCAL_FUNC_UNID_PRISIONAL',
  IN_LOCAL_FUNC_PRISIONAL_SOCIO: 'IN_LOCAL_FUNC_PRISIONAL_SOCIO',
  IN_LOCAL_FUNC_TEMPLO_IGREJA: 'IN_LOCAL_FUNC_TEMPLO_IGREJA',
  IN_LOCAL_FUNC_CASA_PROFESSOR: 'IN_LOCAL_FUNC_CASA_PROFESSOR',
  IN_LOCAL_FUNC_GALPAO: 'IN_LOCAL_FUNC_GALPAO',
  TP_OCUPACAO_GALPAO: 'TP_OCUPACAO_GALPAO',
  IN_LOCAL_FUNC_SALAS_OUTRA_ESC: 'IN_LOCAL_FUNC_SALAS_OUTRA_ESC',
  IN_LOCAL_FUNC_OUTROS: 'IN_LOCAL_FUNC_OUTROS',
  IN_PREDIO_COMPARTILHADO: 'IN_PREDIO_COMPARTILHADO',
  IN_AGUA_POTAVEL: 'IN_AGUA_POTAVEL',
  IN_AGUA_FILTRADA: 'IN_AGUA_FILTRADA',
  IN_AGUA_REDE_PUBLICA: 'IN_AGUA_REDE_PUBLICA',
  IN_AGUA_POCO_ARTESIANO: 'IN_AGUA_POCO_ARTESIANO',
  IN_AGUA_CACIMBA: 'IN_AGUA_CACIMBA',
  IN_AGUA_FONTE_RIO: 'IN_AGUA_FONTE_RIO',
  IN_AGUA_INEXISTENTE: 'IN_AGUA_INEXISTENTE',
  IN_AGUA_CARRO_PIPA: 'IN_AGUA_CARRO_PIPA',
  IN_ENERGIA_REDE_PUBLICA: 'IN_ENERGIA_REDE_PUBLICA',
  IN_ENERGIA_GERADOR: 'IN_ENERGIA_GERADOR',
  IN_ENERGIA_GERADOR_FOSSIL: 'IN_ENERGIA_GERADOR_FOSSIL',
  IN_ENERGIA_RENOVAVEL: 'IN_ENERGIA_RENOVAVEL',
  IN_ENERGIA_OUTROS: 'IN_ENERGIA_OUTROS',
  IN_ENERGIA_INEXISTENTE: 'IN_ENERGIA_INEXISTENTE',
  IN_ESGOTO_REDE_PUBLICA: 'IN_ESGOTO_REDE_PUBLICA',
  IN_ESGOTO_FOSSA: 'IN_ESGOTO_FOSSA',
  IN_ESGOTO_FOSSA_SEPTICA: 'IN_ESGOTO_FOSSA_SEPTICA',
  IN_ESGOTO_FOSSA_COMUM: 'IN_ESGOTO_FOSSA_COMUM',
  IN_ESGOTO_INEXISTENTE: 'IN_ESGOTO_INEXISTENTE',
  IN_LIXO_SERVICO_COLETA: 'IN_LIXO_SERVICO_COLETA',
  IN_LIXO_QUEIMA: 'IN_LIXO_QUEIMA',
  IN_LIXO_ENTERRA: 'IN_LIXO_ENTERRA',
  IN_LIXO_DESTINO_FINAL_PUBLICO: 'IN_LIXO_DESTINO_FINAL_PUBLICO',
  IN_LIXO_JOGA_OUTRA_AREA: 'IN_LIXO_JOGA_OUTRA_AREA',
  IN_LIXO_DESCARTA_OUTRA_AREA: 'IN_LIXO_DESCARTA_OUTRA_AREA',
  IN_LIXO_RECICLA: 'IN_LIXO_RECICLA',
  IN_LIXO_OUTROS: 'IN_LIXO_OUTROS',
  IN_TRATAMENTO_LIXO_SEPARACAO: 'IN_TRATAMENTO_LIXO_SEPARACAO',
  IN_TRATAMENTO_LIXO_REUTILIZA: 'IN_TRATAMENTO_LIXO_REUTILIZA',
  IN_TRATAMENTO_LIXO_RECICLAGEM: 'IN_TRATAMENTO_LIXO_RECICLAGEM',
  IN_TRATAMENTO_LIXO_INEXISTENTE: 'IN_TRATAMENTO_LIXO_INEXISTENTE',
  IN_BANHEIRO: 'IN_BANHEIRO',
  IN_BANHEIRO_FORA_PREDIO: 'IN_BANHEIRO_FORA_PREDIO',
  IN_BANHEIRO_DENTRO_PREDIO: 'IN_BANHEIRO_DENTRO_PREDIO',
  IN_BANHEIRO_PNE: 'IN_BANHEIRO_PNE',
  IN_BANHEIRO_EI: 'IN_BANHEIRO_EI',
  IN_BANHEIRO_FUNCIONARIOS: 'IN_BANHEIRO_FUNCIONARIOS',
  IN_BANHEIRO_CHUVEIRO: 'IN_BANHEIRO_CHUVEIRO',
  IN_DEPENDENCIAS_PNE: 'IN_DEPENDENCIAS_PNE',
  IN_ACESSIBILIDADE_INEXISTENTE: 'IN_ACESSIBILIDADE_INEXISTENTE',
  IN_ACESSIBILIDADE_CORRIMAO: 'IN_ACESSIBILIDADE_CORRIMAO',
  IN_ACESSIBILIDADE_ELEVADOR: 'IN_ACESSIBILIDADE_ELEVADOR',
  IN_ACESSIBILIDADE_PISOS_TATEIS: 'IN_ACESSIBILIDADE_PISOS_TATEIS',
  IN_ACESSIBILIDADE_VAO_LIVRE: 'IN_ACESSIBILIDADE_VAO_LIVRE',
  IN_ACESSIBILIDADE_RAMPAS: 'IN_ACESSIBILIDADE_RAMPAS',
  IN_ACESSIBILIDADE_SINAL_SONORO: 'IN_ACESSIBILIDADE_SINAL_SONORO',
  IN_ACESSIBILIDADE_SINAL_TATIL: 'IN_ACESSIBILIDADE_SINAL_TATIL',
  IN_ACESSIBILIDADE_SINAL_VISUAL: 'IN_ACESSIBILIDADE_SINAL_VISUAL',
  IN_BIBLIOTECA_SALA_LEITURA: 'IN_BIBLIOTECA_SALA_LEITURA',
  IN_BIBLIOTECA: 'IN_BIBLIOTECA',
  IN_SALA_LEITURA: 'IN_SALA_LEITURA',
  IN_COZINHA: 'IN_COZINHA',
  IN_LABORATORIO_CIENCIAS: 'IN_LABORATORIO_CIENCIAS',
  IN_LABORATORIO_INFORMATICA: 'IN_LABORATORIO_INFORMATICA',
  IN_LABORATORIO_EDUC_PROF: 'IN_LABORATORIO_EDUC_PROF',
  IN_QUADRA_ESPORTES_COBERTA: 'IN_QUADRA_ESPORTES_COBERTA',
  IN_QUADRA_ESPORTES_DESCOBERTA: 'IN_QUADRA_ESPORTES_DESCOBERTA',
  IN_QUADRA_ESPORTES: 'IN_QUADRA_ESPORTES',
  IN_SALA_ATENDIMENTO_ESPECIAL: 'IN_SALA_ATENDIMENTO_ESPECIAL',
  IN_AUDITORIO: 'IN_AUDITORIO',
  IN_PATIO_COBERTO: 'IN_PATIO_COBERTO',
  IN_PATIO_DESCOBERTO: 'IN_PATIO_DESCOBERTO',
  IN_PISCINA: 'IN_PISCINA',
  IN_SALA_DIRETORIA: 'IN_SALA_DIRETORIA',
  IN_SALA_PROFESSOR: 'IN_SALA_PROFESSOR',
  IN_SALA_SECRETARIA: 'IN_SALA_SECRETARIA',
  IN_REFEITORIO: 'IN_REFEITORIO',
  IN_ALMOXARIFADO: 'IN_ALMOXARIFADO',
  IN_DESPENSA: 'IN_DESPENSA',
  IN_AREA_VERDE: 'IN_AREA_VERDE',
  IN_BERCARIO: 'IN_BERCARIO',
  IN_DORMITORIO_ALUNO: 'IN_DORMITORIO_ALUNO',
  IN_PARQUE_INFANTIL: 'IN_PARQUE_INFANTIL',
  IN_SALA_ATELIE_ARTES: 'IN_SALA_ATELIE_ARTES',
  IN_SALA_MUSICA_CORAL: 'IN_SALA_MUSICA_CORAL',
  IN_SALA_ESTUDIO_DANCA: 'IN_SALA_ESTUDIO_DANCA',
  IN_SALA_MULTIUSO: 'IN_SALA_MULTIUSO',
  IN_SALA_ESTUDIO_GRAVACAO: 'IN_SALA_ESTUDIO_GRAVACAO',
  IN_SALA_OFICINAS_EDUC_PROF: 'IN_SALA_OFICINAS_EDUC_PROF',
  IN_SALA_REPOUSO_ALUNO: 'IN_SALA_REPOUSO_ALUNO',
  IN_TERREIRAO: 'IN_TERREIRAO',
  IN_VIVEIRO: 'IN_VIVEIRO',
  QT_SALAS_EXISTENTES: 'QT_SALAS_EXISTENTES',
  QT_SALAS_UTILIZADAS: 'QT_SALAS_UTILIZADAS',
  QT_SALAS_UTILIZADAS_DENTRO: 'QT_SALAS_UTILIZADAS_DENTRO',
  QT_SALAS_UTILIZADAS_FORA: 'QT_SALAS_UTILIZADAS_FORA',
  QT_SALAS_UTILIZA_CLIMATIZADAS: 'QT_SALAS_UTILIZA_CLIMATIZADAS',
  QT_SALAS_UTILIZADAS_ACESSIVEIS: 'QT_SALAS_UTILIZADAS_ACESSIVEIS',
  IN_EQUIP_TV: 'IN_EQUIP_TV',
  IN_EQUIP_VIDEOCASSETE: 'IN_EQUIP_VIDEOCASSETE',
  IN_EQUIP_DVD: 'IN_EQUIP_DVD',
  IN_EQUIP_PARABOLICA: 'IN_EQUIP_PARABOLICA',
  IN_EQUIP_COPIADORA: 'IN_EQUIP_COPIADORA',
  IN_EQUIP_RETROPROJETOR: 'IN_EQUIP_RETROPROJETOR',
  IN_EQUIP_IMPRESSORA: 'IN_EQUIP_IMPRESSORA',
  IN_EQUIP_IMPRESSORA_MULT: 'IN_EQUIP_IMPRESSORA_MULT',
  IN_EQUIP_SOM: 'IN_EQUIP_SOM',
  IN_EQUIP_PROJETOR: 'IN_EQUIP_PROJETOR',
  IN_EQUIP_MULTIMIDIA: 'IN_EQUIP_MULTIMIDIA',
  IN_EQUIP_FAX: 'IN_EQUIP_FAX',
  IN_EQUIP_FOTO: 'IN_EQUIP_FOTO',
  IN_EQUIP_SCANNER: 'IN_EQUIP_SCANNER',
  IN_EQUIP_NENHUM: 'IN_EQUIP_NENHUM',
  IN_EQUIP_LOUSA_DIGITAL: 'IN_EQUIP_LOUSA_DIGITAL',
  QT_EQUIP_TV: 'QT_EQUIP_TV',
  QT_EQUIP_VIDEOCASSETE: 'QT_EQUIP_VIDEOCASSETE',
  QT_EQUIP_DVD: 'QT_EQUIP_DVD',
  QT_EQUIP_PARABOLICA: 'QT_EQUIP_PARABOLICA',
  QT_EQUIP_COPIADORA: 'QT_EQUIP_COPIADORA',
  QT_EQUIP_RETROPROJETOR: 'QT_EQUIP_RETROPROJETOR',
  QT_EQUIP_IMPRESSORA: 'QT_EQUIP_IMPRESSORA',
  QT_EQUIP_IMPRESSORA_MULT: 'QT_EQUIP_IMPRESSORA_MULT',
  QT_EQUIP_SOM: 'QT_EQUIP_SOM',
  QT_EQUIP_PROJETOR: 'QT_EQUIP_PROJETOR',
  QT_EQUIP_MULTIMIDIA: 'QT_EQUIP_MULTIMIDIA',
  QT_EQUIP_FAX: 'QT_EQUIP_FAX',
  QT_EQUIP_FOTO: 'QT_EQUIP_FOTO',
  QT_EQUIP_LOUSA_DIGITAL: 'QT_EQUIP_LOUSA_DIGITAL',
  IN_COMPUTADOR: 'IN_COMPUTADOR',
  QT_COMPUTADOR: 'QT_COMPUTADOR',
  QT_COMP_ADMINISTRATIVO: 'QT_COMP_ADMINISTRATIVO',
  QT_COMP_ALUNO: 'QT_COMP_ALUNO',
  IN_DESKTOP_ALUNO: 'IN_DESKTOP_ALUNO',
  QT_DESKTOP_ALUNO: 'QT_DESKTOP_ALUNO',
  IN_COMP_PORTATIL_ALUNO: 'IN_COMP_PORTATIL_ALUNO',
  QT_COMP_PORTATIL_ALUNO: 'QT_COMP_PORTATIL_ALUNO',
  IN_TABLET_ALUNO: 'IN_TABLET_ALUNO',
  QT_TABLET_ALUNO: 'QT_TABLET_ALUNO',
  IN_INTERNET: 'IN_INTERNET',
  IN_INTERNET_APRENDIZAGEM: 'IN_INTERNET_APRENDIZAGEM',
  IN_INTERNET_ADMINISTRATIVO: 'IN_INTERNET_ADMINISTRATIVO',
  IN_INTERNET_ALUNOS: 'IN_INTERNET_ALUNOS',
  IN_INTERNET_COMUNIDADE: 'IN_INTERNET_COMUNIDADE',
  IN_ACESSO_INTERNET_COMPUTADOR: 'IN_ACESSO_INTERNET_COMPUTADOR',
  IN_ACESSO_INTERNET_DISP_PESSOAIS: 'IN_ACESSO_INTERNET_DISP_PESSOAIS',
  TP_REDE_LOCAL: 'TP_REDE_LOCAL',
  IN_BANDA_LARGA: 'IN_BANDA_LARGA',
  IN_MATERIAL_ESP_NAO_UTILIZA: 'IN_MATERIAL_ESP_NAO_UTILIZA',
  IN_MATERIAL_ESP_PEDAGOGICO: 'IN_MATERIAL_ESP_PEDAGOGICO',
  IN_MATERIAL_ESP_ARTES: 'IN_MATERIAL_ESP_ARTES',
  IN_MATERIAL_ESP_AUDIOVISUAIS: 'IN_MATERIAL_ESP_AUDIOVISUAIS',
  IN_MATERIAL_ESP_AUDITIVOS: 'IN_MATERIAL_ESP_AUDITIVOS',
  IN_MATERIAL_ESP_BIOLOGIA: 'IN_MATERIAL_ESP_BIOLOGIA',
  IN_MATERIAL_ESP_BRINQUEDOS: 'IN_MATERIAL_ESP_BRINQUEDOS',
  IN_MATERIAL_ESP_CIENCIAS: 'IN_MATERIAL_ESP_CIENCIAS',
  IN_MATERIAL_ESP_CINEMA: 'IN_MATERIAL_ESP_CINEMA',
  IN_MATERIAL_ESP_DISCIPLINAR: 'IN_MATERIAL_ESP_DISCIPLINAR',
  IN_MATERIAL_ESP_FISICA: 'IN_MATERIAL_ESP_FISICA',
  IN_MATERIAL_ESP_FOTO: 'IN_MATERIAL_ESP_FOTO',
  IN_MATERIAL_ESP_INFORMATICA: 'IN_MATERIAL_ESP_INFORMATICA',
  IN_MATERIAL_ESP_JOGOS: 'IN_MATERIAL_ESP_JOGOS',
  IN_MATERIAL_ESP_JORNAIS: 'IN_MATERIAL_ESP_JORNAIS',
  IN_MATERIAL_ESP_LIVROS_DIDAT: 'IN_MATERIAL_ESP_LIVROS_DIDAT',
  IN_MATERIAL_ESP_LIVROS_LITER: 'IN_MATERIAL_ESP_LIVROS_LITER',
  IN_MATERIAL_ESP_MAPAS: 'IN_MATERIAL_ESP_MAPAS',
  IN_MATERIAL_ESP_MUSICA: 'IN_MATERIAL_ESP_MUSICA',
  IN_MATERIAL_ESP_OUTROS: 'IN_MATERIAL_ESP_OUTROS',
  IN_MATERIAL_ESP_QUIMICA: 'IN_MATERIAL_ESP_QUIMICA',
  IN_MATERIAL_ESP_REVISTAS: 'IN_MATERIAL_ESP_REVISTAS',
  IN_MATERIAL_ESP_QUILOMBOLA: 'IN_MATERIAL_ESP_QUILOMBOLA',
  IN_MATERIAL_ESP_INDIGENA: 'IN_MATERIAL_ESP_INDIGENA',
  IN_MATERIAL_PED_MULTIMIDIA: 'IN_MATERIAL_PED_MULTIMIDIA',
  IN_MATERIAL_PED_INFANTIL: 'IN_MATERIAL_PED_INFANTIL',
  IN_MATERIAL_PED_CIENTIFICO: 'IN_MATERIAL_PED_CIENTIFICO',
  IN_MATERIAL_PED_DIFUSAO: 'IN_MATERIAL_PED_DIFUSAO',
  IN_MATERIAL_PED_MUSICAL: 'IN_MATERIAL_PED_MUSICAL',
  IN_MATERIAL_PED_JOGOS: 'IN_MATERIAL_PED_JOGOS',
  IN_MATERIAL_PED_ARTISTICAS: 'IN_MATERIAL_PED_ARTISTICAS',
  IN_MATERIAL_PED_PROFISSIONAL: 'IN_MATERIAL_PED_PROFISSIONAL',
  IN_MATERIAL_PED_DESPORTIVA: 'IN_MATERIAL_PED_DESPORTIVA',
  IN_MATERIAL_PED_INDIGENA: 'IN_MATERIAL_PED_INDIGENA',
  IN_MATERIAL_PED_ETNICO: 'IN_MATERIAL_PED_ETNICO',
  IN_MATERIAL_PED_CAMPO: 'IN_MATERIAL_PED_CAMPO',
  IN_MATERIAL_PED_BIL_SURDOS: 'IN_MATERIAL_PED_BIL_SURDOS',
  IN_MATERIAL_PED_QUILOMBOLA: 'IN_MATERIAL_PED_QUILOMBOLA',
  IN_MATERIAL_PED_AGRICOLA: 'IN_MATERIAL_PED_AGRICOLA',
  IN_MATERIAL_PED_EDU_ESP: 'IN_MATERIAL_PED_EDU_ESP',
  IN_MATERIAL_PED_NENHUM: 'IN_MATERIAL_PED_NENHUM',
  IN_ALIMENTACAO: 'IN_ALIMENTACAO',
  IN_ATIV_COMPLEMENTAR: 'IN_ATIV_COMPLEMENTAR',
  IN_FUNDEB: 'IN_FUNDEB',
  IN_REGULAR_CLASSE_COMUM: 'IN_REGULAR_CLASSE_COMUM',
  IN_REGULAR_CLASSE_ESP: 'IN_REGULAR_CLASSE_ESP',
  IN_ESP_CLASSE_COMUM: 'IN_ESP_CLASSE_COMUM',
  IN_ESP_CLASSE_ESP: 'IN_ESP_CLASSE_ESP',
  IN_EJA_CLASSE_COMUM: 'IN_EJA_CLASSE_COMUM',
  IN_EJA_CLASSE_ESP: 'IN_EJA_CLASSE_ESP',
  CO_LINGUA_INDIGENA_1: 'CO_LINGUA_INDIGENA_1',
  CO_LINGUA_INDIGENA_2: 'CO_LINGUA_INDIGENA_2',
  CO_LINGUA_INDIGENA_3: 'CO_LINGUA_INDIGENA_3',
  IN_AREA_PLANTIO: 'IN_AREA_PLANTIO',
  IN_DEPENDENCIAS_OUTRAS: 'IN_DEPENDENCIAS_OUTRAS',
  IN_DORMITORIO_PROFESSOR: 'IN_DORMITORIO_PROFESSOR',
  IN_EDUCACAO_INDIGENA: 'IN_EDUCACAO_INDIGENA',
  IN_LAVANDERIA: 'IN_LAVANDERIA',
  TP_AEE: 'TP_AEE',
  TP_ATIVIDADE_COMPLEMENTAR: 'TP_ATIVIDADE_COMPLEMENTAR',
  TP_INDIGENA_LINGUA: 'TP_INDIGENA_LINGUA',
  IN_MEDIACAO_PRESENCIAL: 'IN_MEDIACAO_PRESENCIAL',
  IN_MEDIACAO_SEMIPRESENCIAL: 'IN_MEDIACAO_SEMIPRESENCIAL',
  IN_MEDIACAO_EAD: 'IN_MEDIACAO_EAD',
  IN_QUADRA_ESPORTES_PNE: 'IN_QUADRA_ESPORTES_PNE',
  IN_SANITARIO_PNE: 'IN_SANITARIO_PNE',
  IN_SANITARIO: 'IN_SANITARIO',
  IN_SANITARIO_FORA_PREDIO: 'IN_SANITARIO_FORA_PREDIO',
  IN_SANITARIO_DENTRO_PREDIO: 'IN_SANITARIO_DENTRO_PREDIO',
  IN_SANITARIO_CHUVEIRO: 'IN_SANITARIO_CHUVEIRO',
  IN_PROF_CLASSE_COMUM: 'IN_PROF_CLASSE_COMUM',
  IN_PROF_CLASSE_ESP: 'IN_PROF_CLASSE_ESP',
  NO_ENTIDADE: 'NO_ENTIDADE',
  CO_MUNICIPIO: 'CO_MUNICIPIO',
  NO_MUNICIPIO: 'NO_MUNICIPIO',
  CO_UF: 'CO_UF',
  SG_UF: 'SG_UF',
  TP_DEPENDENCIA: 'TP_DEPENDENCIA',
  TP_LOCALIZACAO: 'TP_LOCALIZACAO'
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
  ImportacaoAPI: 'ImportacaoAPI',
  CensoEscolarInfraestrutura: 'CensoEscolarInfraestrutura'
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
