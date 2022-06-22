import tableData from "static/tableData.json";

const calcAvgSalaryPerIndustry = () => {
  const datasets = {};

  tableData?.forEach((row) => {
    const industry = row?.industry;
    if (industry) {
      datasets[industry] = {
        count: datasets[industry]?.count ? datasets[industry]?.count + 1 : 1,
        salarySum: datasets[industry]?.salarySum ? datasets[industry]?.salarySum + row?.salary : row?.salary,
      };
    }
  });

  const result = { labels: [], data: [] };
  Object?.entries(datasets)?.forEach(([key, value]) => {
    result?.labels?.push(key);
    result?.data?.push(value?.salarySum / value?.count);
  });

  return result;
};

export default calcAvgSalaryPerIndustry;
