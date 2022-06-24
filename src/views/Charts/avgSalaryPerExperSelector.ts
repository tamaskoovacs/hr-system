import { datasets, result } from 'interfaces/interfaces';
import tableData from 'static/tableData.json';

const calcAvgSalaryPerExper = () => {
  const datasets: datasets = {};

  tableData?.forEach((row) => {
    const exp = row?.years_of_experience;

    if (exp) {
      datasets[exp] = {
        count: datasets[exp]?.count ? datasets[exp]?.count + 1 : 1,
        total: datasets[exp]?.total ? datasets[exp]?.total + row?.salary : row?.salary
      };
    }
  });

  const result: result = { labels: [], data: [] };
  Object?.entries(datasets)?.forEach(([key, value]) => {
    result?.labels?.push(key);
    result?.data?.push(value?.total / value?.count);
  });

  return result;
};

export default calcAvgSalaryPerExper;
