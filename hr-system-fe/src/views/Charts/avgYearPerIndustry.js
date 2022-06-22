import tableData from "static/tableData.json";
import moment from "moment";

const avgYearPerIndustry = () => {
  const datasets = {};

  tableData?.forEach((row) => {
    const date = row?.date_of_birth?.split("/");
    const newDate = `${date[1]}/${date[0]}/${date[2]}`;
    const diff = moment(new Date()).diff(moment(new Date(newDate)), "years");
    const industry = row?.industry;

    if (industry) {
      datasets[industry] = {
        count: datasets[industry]?.count ? datasets[industry]?.count + 1 : 1,
        totalYearSum: datasets[industry]?.totalYearSum ? datasets[industry]?.totalYearSum + diff : diff,
      };
    }
  });

  const result = { labels: [], data: [] };
  Object?.entries(datasets)?.forEach(([key, value]) => {
    result?.labels?.push(key);
    result?.data?.push(value?.totalYearSum / value?.count);
  });

  return result;
};

export default avgYearPerIndustry;
