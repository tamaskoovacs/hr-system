import { datasets, result } from 'interfaces/interfaces';
import tableData from 'static/tableData.json';

const calcAvgSalaryPerIndustry = () => {
  const datasets: datasets = {};

  tableData?.forEach((row) => {
    const industry = row?.industry;
    if (industry) {
      datasets[industry] = {
        count: datasets[industry]?.count ? datasets[industry]?.count + 1 : 1,
        total: datasets[industry]?.total ? datasets[industry]?.total + row?.salary : row?.salary
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

export default calcAvgSalaryPerIndustry;
