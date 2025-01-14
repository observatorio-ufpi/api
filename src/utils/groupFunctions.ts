export function groupByMunicipio(
  revenueDataSets: { key: string; data: any[] }[],
): object {
  const groupedRevenues = {};

  revenueDataSets.forEach(({ key, data }) => {
    data.forEach((revenue) => {
      const { codigoMunicipio } = revenue;
      if (!groupedRevenues[codigoMunicipio]) {
        groupedRevenues[codigoMunicipio] = {};
      }
      if (!groupedRevenues[codigoMunicipio][key]) {
        groupedRevenues[codigoMunicipio][key] = [];
      }
      groupedRevenues[codigoMunicipio][key].push(revenue);
    });
  });

  return groupedRevenues;
}

export function groupByAno(
  revenueDataSets: { key: string; data: any[] }[],
): object {
  const groupedRevenues: { [ano: string]: { [key: string]: any[] } } = {};

  revenueDataSets.forEach(({ key, data }) => {
    data.forEach((revenue) => {
      const { ano } = revenue;
      if (!groupedRevenues[ano]) {
        groupedRevenues[ano] = {};
      }
      if (!groupedRevenues[ano][key]) {
        groupedRevenues[ano][key] = [];
      }
      groupedRevenues[ano][key].push(revenue);
    });
  });

  return groupedRevenues;
}
