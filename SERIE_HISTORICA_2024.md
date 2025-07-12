# Série Histórica com Dados de 2024

## Implementação Concluída ✅

A implementação para incluir dados de 2024 na série histórica foi concluída. O sistema agora combina automaticamente dados das duas tabelas:

- **Dados ≤ 2023**: Tabela `DadoEducacaoBasica`
- **Dados > 2023**: Tabela `DadoEducacaoBasicaApos23`

## Como Usar

### Exemplo 1: Série Histórica Simples (2020-2024)

```javascript
// Para buscar matrículas de 2020 a 2024 no Piauí
const filter = 'min_year:"2020",max_year:"2024",state:"22"';
const dims = ''; // sem dimensões específicas

const resultado = await basicService.getEnrollment(dims, filter);
```

### Exemplo 2: Com Dimensão (Dependência Administrativa)

```javascript
// Para buscar matrículas por dependência administrativa de 2021 a 2024
const filter = 'min_year:"2021",max_year:"2024",state:"22"';
const dims = 'adm_dependency_detailed';

const resultado = await basicService.getEnrollmentAggregate(dims, filter);
```

### Exemplo 3: Dados de Escolas

```javascript
// Para buscar contagem de escolas de 2022 a 2024
const filter = 'min_year:"2022",max_year:"2024",state:"22"';
const dims = 'arrangement'; // arranjo das escolas

const resultado = await basicService.getSchoolCount(dims, filter);
```

## Modificações Realizadas

### 1. Método `serieHistorica`

- ✅ Separa anos em dois grupos (≤2023 e >2023)
- ✅ Busca dados das duas tabelas quando necessário
- ✅ Combina resultados de forma consistente
- ✅ Mantém formatação uniforme dos dados

### 2. Método `serieHistoricaTwoDimensions`

- ✅ Implementa mesma lógica de separação de anos
- ✅ **CORRIGIDO**: Para dados > 2023, usa lógica simplificada do `queryDataApos23`
- ✅ Trata diferenças de schema entre as tabelas corretamente
- ✅ Adapta campos específicos (ex: `etapa_school` vs `etapa`, `etapa_teacher_class`)
- ✅ Mantém compatibilidade com dados legacy

### 3. Tratamento de Schemas Diferentes

- ✅ **Dados ≤ 2023**: Usa campos específicos como `etapa_school`, `dependencia_teacher`, etc.
- ✅ **Dados > 2023**: Usa campos simplificados (`etapa`, `dependencia`, etc.)
- ✅ Fallback automático entre campos equivalentes

## Tipos de Dados Suportados

| Tipo                  | ≤ 2023 | > 2023 | Observações                        |
| --------------------- | ------ | ------ | ---------------------------------- |
| `enrollment`          | ✅     | ✅     |                                    |
| `enrollmentAggregate` | ✅     | ✅     | Mapeado para `enrollment` em >2023 |
| `school/count`        | ✅     | ✅     | Usa `entidade_id` em >2023         |
| `teacher`             | ✅     | ✅     |                                    |
| `class`               | ✅     | ✅     |                                    |
| `auxiliar`            | ✅     | ✅     |                                    |
| `employees`           | ✅     | ✅     |                                    |

## Dimensões Suportadas

| Dimensão                  | ≤ 2023 | > 2023 | Campo Original | Campo Pós-2023 |
| ------------------------- | ------ | ------ | -------------- | -------------- |
| `adm_dependency_detailed` | ✅     | ✅     | `dependencia`  | `dependencia`  |
| `education_level_mod`     | ✅     | ✅     | `etapa`        | `etapa`        |
| `education_level_mod_agg` | ✅     | ✅     | `etapa`        | `etapa`        |
| `arrangement`             | ✅     | ✅     | `etapa_school` | `etapa`        |
| `location`                | ✅     | ✅     | `localizacao`  | `localizacao`  |

## Exemplo de Resposta

```json
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
```

## Performance

- ✅ Duas consultas paralelas quando necessário
- ✅ Cache de municípios do Piauí para consultas estaduais
- ✅ Includes otimizados baseados nas dimensões solicitadas
- ✅ Agregação eficiente em memória

## Limitações

1. **Série histórica**: Máximo 1 dimensão (limitação existente mantida)
2. **Compatibilidade**: Alguns campos específicos só existem em dados ≤2023 (ex: `federativeEntity`, `contract_type`)
3. **Schema**: Diferenças de relacionamentos entre as tabelas são tratadas com fallbacks

## Testando a Implementação

Para testar se a implementação está funcionando corretamente:

1. **Teste simples**: Busque dados de um único ano (2024)
2. **Teste de transição**: Busque dados que cruzem 2023 (ex: 2022-2024)
3. **Teste com dimensões**: Use diferentes dimensões para verificar compatibilidade
4. **Teste de performance**: Monitore tempo de resposta para consultas estaduais

## ⚡ Correção Aplicada

**Problema identificado**: Para dados após 2023, a série histórica estava tentando usar a lógica complexa de duas dimensões, mas a tabela `DadoEducacaoBasicaApos23` tem uma estrutura mais simples.

**Solução implementada**:

- ✅ Criado método `queryDataApos23TwoDimensionsHelper` que usa lógica simplificada
- ✅ Para anos > 2023, os dados são buscados usando a estrutura correta da tabela pós-2023
- ✅ Mapeamento correto de campos: `etapa_teacher_class` para teacher/class, `entidade_id` para school/count
- ✅ Compatibilidade mantida entre as duas estruturas de tabela

**Resultado**: Agora **todos os tipos de dados** (enrollment, teacher, class, school/count, etc.) aparecem corretamente na série histórica incluindo 2024!

## Próximos Passos (Opcionais)

- [ ] Adicionar cache para consultas frequentes de série histórica
- [ ] Implementar índices compostos otimizados para a tabela pós-2023
- [ ] Criar endpoint específico para dados agregados multi-anos
- [ ] Adicionar validação de disponibilidade de dados por ano
