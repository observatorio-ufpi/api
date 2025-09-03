/**
 * TESTE DA SÉRIE HISTÓRICA COM DADOS DE 2024
 *
 * Execute este teste para verificar se a implementação está funcionando:
 *
 * 1. Salve este arquivo na pasta raiz da API
 * 2. Ajuste os imports conforme necessário
 * 3. Execute: node teste_serie_historica_2024.js
 */

// Exemplo de como importar o service (ajustar conforme sua estrutura)
// const { BasicService } = require('./src/education/basic/basic.service');
// const { PrismaEducacaoService } = require('./src/education/prisma-educacao.service');

async function testeSerieHistorica2024() {
  console.log('🚀 Iniciando teste da Série Histórica com dados de 2024...\n');

  // Configurar services (ajustar conforme necessário)
  // const prismaEducacao = new PrismaEducacaoService();
  // const basicService = new BasicService(prismaEducacao);

  // TESTE 1: Dados simples de 2020-2024
  console.log('📊 TESTE 1: Matrículas 2020-2024 (sem dimensões)');
  try {
    const filter1 = 'min_year:"2020",max_year:"2024",state:"22"';
    const dims1 = '';

    console.log(`   Filter: ${filter1}`);
    console.log(`   Dimensions: ${dims1 || '(nenhuma)'}`);

    // const resultado1 = await basicService.getEnrollment(dims1, filter1);
    // console.log(`   ✅ Resultado: ${resultado1.result.length} registros`);
    // console.log(`   📈 Anos encontrados: ${resultado1.result.map(r => r.year).join(', ')}\n`);

    console.log('   ⏭️  Execute o código comentado para ver resultados reais\n');
  } catch (error) {
    console.log(`   ❌ Erro: ${error.message}\n`);
  }

  // TESTE 2: Com dimensão de dependência administrativa
  console.log('📊 TESTE 2: Matrículas 2022-2024 por Dependência Administrativa');
  try {
    const filter2 = 'min_year:"2022",max_year:"2024",state:"22"';
    const dims2 = 'adm_dependency_detailed';

    console.log(`   Filter: ${filter2}`);
    console.log(`   Dimensions: ${dims2}`);

    // const resultado2 = await basicService.getEnrollmentAggregate(dims2, filter2);
    // console.log(`   ✅ Resultado: ${resultado2.result.length} registros`);
    // if (resultado2.result.length > 0) {
    //   console.log(`   📝 Exemplo de registro:`, resultado2.result[0]);
    // }

    console.log('   ⏭️  Execute o código comentado para ver resultados reais\n');
  } catch (error) {
    console.log(`   ❌ Erro: ${error.message}\n`);
  }

  // TESTE 3: Contagem de escolas
  console.log('📊 TESTE 3: Contagem de Escolas 2023-2024');
  try {
    const filter3 = 'min_year:"2023",max_year:"2024",state:"22"';
    const dims3 = 'arrangement';

    console.log(`   Filter: ${filter3}`);
    console.log(`   Dimensions: ${dims3}`);

    // const resultado3 = await basicService.getSchoolCount(dims3, filter3);
    // console.log(`   ✅ Resultado: ${resultado3.result.length} registros`);

    console.log('   ⏭️  Execute o código comentado para ver resultados reais\n');
  } catch (error) {
    console.log(`   ❌ Erro: ${error.message}\n`);
  }

  // TESTE 4: Apenas 2024
  console.log('📊 TESTE 4: Apenas dados de 2024');
  try {
    const filter4 = 'min_year:"2024",max_year:"2024",state:"22"';
    const dims4 = '';

    console.log(`   Filter: ${filter4}`);
    console.log(`   Dimensions: ${dims4 || '(nenhuma)'}`);

    // const resultado4 = await basicService.getEnrollment(dims4, filter4);
    // console.log(`   ✅ Resultado: ${resultado4.result.length} registros`);

    console.log('   ⏭️  Execute o código comentado para ver resultados reais\n');
  } catch (error) {
    console.log(`   ❌ Erro: ${error.message}\n`);
  }

  console.log('✨ Teste concluído!');
  console.log('💡 Para executar os testes reais, descomente as linhas com await e configure os imports.');
}

// Executar o teste
testeSerieHistorica2024().catch(console.error);

// EXEMPLO DE RETORNO ESPERADO:
/*
{
  "result": [
    {
      "year": 2020,
      "total": 850000,
      "name": "Piauí"
    },
    {
      "year": 2021,
      "total": 840000,
      "name": "Piauí"
    },
    {
      "year": 2022,
      "total": 835000,
      "name": "Piauí"
    },
    {
      "year": 2023,
      "total": 830000,
      "name": "Piauí"
    },
    {
      "year": 2024,
      "total": 825000,
      "name": "Piauí"
    }
  ]
}
*/

module.exports = { testeSerieHistorica2024 };