import tableData from "static/tableData.json";

const calcAvgSalaryPerExper = () => {
  const datasets = {};

  tableData?.forEach((row) => {
    const exp = row?.years_of_experience;

    if (exp) {
      datasets[exp] = {
        count: datasets[exp]?.count ? datasets[exp]?.count + 1 : 1,
        totalSalary: datasets[exp]?.totalSalary ? datasets[exp]?.totalSalary + row?.salary : row?.salary,
      };
    }
  });

  const result = { labels: [], data: [] };
  Object?.entries(datasets)?.forEach(([key, value]) => {
    result?.labels?.push(key);
    result?.data?.push(value?.totalSalary / value?.count);
  });

  return result;
};

export default calcAvgSalaryPerExper;
