import xlsx from 'xlsx';
import { PrismaClient } from './prisma/educacao/generated/educacao-client/index.js';

const prisma = new PrismaClient();

const etapasMatriculas = [
  { col: 'QT_MAT_INF_CRE', nome: 'Creche' },
  { col: 'QT_MAT_INF_PRE', nome: 'Pré-Escola' },
  { col: 'QT_MAT_FUND_AI', nome: 'Ensino Fundamental - Anos Iniciais' },
  { col: 'QT_MAT_FUND_AF', nome: 'Ensino Fundamental - Anos Finais' },
  { col: 'QT_MAT_MED_PROP', nome: 'Ensino Médio - Propedêutico' },
  { col: 'QT_MAT_MED_CT', nome: 'Ensino Médio - Curso técnico' },
  { col: 'QT_MAT_PROF', nome: 'Educação Profissional' },
  { col: 'QT_MAT_EJA_FUND', nome: 'EJA - Ensino Fundamental' },
  { col: 'QT_MAT_EJA_MED', nome: 'EJA - Ensino Médio' },
  //{ col: 'QT_MAT_ESP', nome: 'Educação Especial' },
];
const etapasDocentes = [
  { col: 'QT_DOC_INF_CRE', nome: 'Creche' },
  { col: 'QT_DOC_INF_PRE', nome: 'Pré-Escola' },
  { col: 'QT_DOC_FUND_AI', nome: 'Ensino Fundamental - Anos Iniciais' },
  { col: 'QT_DOC_FUND_AF', nome: 'Ensino Fundamental - Anos Finais' },
  { col: 'QT_DOC_MED', nome: 'Ensino Médio' },
  { col: 'QT_DOC_PROF', nome: 'Educação Profissional' },
  { col: 'QT_DOC_EJA_FUND', nome: 'EJA - Ensino Fundamental' },
  { col: 'QT_DOC_EJA_MED', nome: 'EJA - Ensino Médio' },
];

const etapasTurmas = [
  { col: 'QT_TUR_INF_CRE', nome: 'Creche' },
  { col: 'QT_TUR_INF_PRE', nome: 'Pré-Escola' },
  { col: 'QT_TUR_FUND_AI', nome: 'Ensino Fundamental - Anos Iniciais' },
  { col: 'QT_TUR_FUND_AF', nome: 'Ensino Fundamental - Anos Finais' },
  { col: 'QT_TUR_MED', nome: 'Ensino Médio' },
  { col: 'QT_TUR_PROF', nome: 'Educação Profissional' },
  { col: 'QT_TUR_EJA_FUND', nome: 'EJA - Ensino Fundamental' },
  { col: 'QT_TUR_EJA_MED', nome: 'EJA - Ensino Médio' },
];

async function main() {
  const workbook = xlsx.readFile(
    'D:/BACKUP ARQUIVOS/Documents/UFPI/ObservatorioProjetoExt/exemplos de tabelas/matriculas.xlsx',
  );
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = xlsx.utils.sheet_to_json(sheet);

  for (const row of data) {
    // Garante que a entidade (escola) existe e pega o id
    const entidade = await prisma.entidade.upsert({
      where: { codigo: String(row.CO_ENTIDADE) },
      update: { nome: row.NO_ENTIDADE },
      create: {
        codigo: String(row.CO_ENTIDADE),
        nome: row.NO_ENTIDADE,
      },
    });

    // Busca Localidade pelo código IBGE
    const localidade = await prisma.localidade.findFirst({
      where: { codigo_ibge: String(row.CO_MUNICIPIO) },
    });

    // Busca Dependência pelo ID (do Excel)
    const dependencia = await prisma.dependenciaAdministrativaBasica.findUnique(
      {
        where: { id: Number(row.TP_DEPENDENCIA) },
      },
    );

    // Busca Localização pelo ID (do Excel)
    const localizacao = await prisma.localizacao.findUnique({
      where: { id: Number(row.TP_LOCALIZACAO) },
    });

    await processarMatriculas(
      row,
      localidade,
      dependencia,
      localizacao,
      entidade,
    );
    await processarDocentes(
      row,
      localidade,
      dependencia,
      localizacao,
      entidade,
    );
    await processarTurmas(row, localidade, dependencia, localizacao, entidade);
  }
}

async function processarMatriculas(
  row,
  localidade,
  dependencia,
  localizacao,
  entidade,
) {
  const promises = etapasMatriculas.map(async (etapa) => {
    const valor = row[etapa.col];
    if (valor != null) {
      const etapaDb = await prisma.etapaEnsinoBasicaApos23.findFirst({
        where: { nome: etapa.nome },
      });
      if (etapaDb && localidade && dependencia && localizacao && entidade) {
        return prisma.dadoEducacaoBasicaApos23.create({
          data: {
            tipo: 'enrollment',
            ano: 2024,
            total: Number(valor),
            localidade_id: localidade.id,
            dependencia_id: dependencia.id,
            etapa_id: etapaDb.id,
            localizacao_id: localizacao.id,
            entidade_id: entidade.id,
          },
        });
      }
    }
    return null;
  });
  await Promise.all(promises);
}

async function processarDocentes(
  row,
  localidade,
  dependencia,
  localizacao,
  entidade,
) {
  const promises = etapasDocentes.map(async (etapa) => {
    const valor = row[etapa.col];
    if (valor != null) {
      const etapaDb =
        await prisma.etapaEnsinoBasicaApos23TeacherClass.findFirst({
          where: { nome: etapa.nome },
        });
      if (etapaDb && localidade && dependencia && localizacao && entidade) {
        return prisma.dadoEducacaoBasicaApos23.create({
          data: {
            tipo: 'teacher',
            ano: 2024,
            total: Number(valor),
            localidade_id: localidade.id,
            dependencia_id: dependencia.id,
            etapa_teacher_class_id: etapaDb.id,
            localizacao_id: localizacao.id,
            entidade_id: entidade.id,
          },
        });
      }
    }
    return null;
  });
  await Promise.all(promises);
}

async function processarTurmas(
  row,
  localidade,
  dependencia,
  localizacao,
  entidade,
) {
  const promises = etapasTurmas.map(async (etapa) => {
    const valor = row[etapa.col];
    if (valor != null) {
      const etapaDb =
        await prisma.etapaEnsinoBasicaApos23TeacherClass.findFirst({
          where: { nome: etapa.nome },
        });
      if (etapaDb) {
        await prisma.dadoEducacaoBasicaApos23.create({
          data: {
            tipo: 'class',
            ano: 2024,
            total: Number(valor),
            localidade_id: localidade.id,
            dependencia_id: dependencia.id,
            etapa_teacher_class_id: etapaDb.id,
            localizacao_id: localizacao.id,
            entidade_id: entidade.id,
          },
        });
      }
    }
    return null;
  });
  await Promise.all(promises);
}

async function seedDimensoes() {
  // Dependências
  const dependencias = [
    { id: 1, nome: 'Federal', tipo: 'federal' },
    { id: 2, nome: 'Estadual', tipo: 'estadual' },
    { id: 3, nome: 'Municipal', tipo: 'municipal' },
    { id: 4, nome: 'Privada', tipo: 'privada' },
  ];
  for (const dep of dependencias) {
    await prisma.dependenciaAdministrativaBasicaApos23.upsert({
      where: { id: dep.id },
      update: {},
      create: dep,
    });
  }

  // Localizações
  const localizacoes = [
    { id: 1, nome: 'Urbana' },
    { id: 2, nome: 'Rural' },
  ];
  for (const loc of localizacoes) {
    await prisma.localizacao.upsert({
      where: { id: loc.id },
      update: {},
      create: loc,
    });
  }

  // Etapas
  const etapasBancoMatriculas = [
    { id: 1, nome: 'Creche' },
    { id: 2, nome: 'Pré-Escola' },
    { id: 3, nome: 'Ensino Fundamental - Anos Iniciais' },
    { id: 4, nome: 'Ensino Fundamental - Anos Finais' },
    { id: 5, nome: 'Ensino Médio - Propedêutico' },
    { id: 6, nome: 'Ensino Médio - Curso técnico' },
    { id: 7, nome: 'Educação Profissional' },
    { id: 8, nome: 'EJA - Ensino Fundamental' },
    { id: 9, nome: 'EJA - Ensino Médio' },
    //{ id: 10, nome: 'Educação Especial' },
  ];
  for (const etapa of etapasBancoMatriculas) {
    await prisma.etapaEnsinoBasicaApos23.upsert({
      where: { nome: etapa.nome },
      update: {},
      create: { nome: etapa.nome, id: etapa.id },
    });
  }

  const etapasBancoDocentesClasses = [
    { id: 1, nome: 'Creche' },
    { id: 2, nome: 'Pré-Escola' },
    { id: 3, nome: 'Ensino Fundamental - Anos Iniciais' },
    { id: 4, nome: 'Ensino Fundamental - Anos Finais' },
    { id: 5, nome: 'Ensino Médio' },
    { id: 6, nome: 'Educação Profissional' },
    { id: 7, nome: 'EJA - Ensino Fundamental' },
    { id: 8, nome: 'EJA - Ensino Médio' },
  ];
  for (const etapa of etapasBancoDocentesClasses) {
    await prisma.etapaEnsinoBasicaApos23TeacherClass.upsert({
      where: { nome: etapa.nome },
      update: {},
      create: { nome: etapa.nome, id: etapa.id },
    });
  }

  console.log('Dimensões preenchidas!');
}

// Executa seedDimensoes primeiro, depois main
seedDimensoes()
  .then(() => main())
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
