import tableData from 'static/tableData.json';
import moment from 'moment';
import { datasets, result } from 'interfaces/interfaces';

const avgYearPerIndustry = () => {
  const datasets: datasets = {};

  tableData?.forEach((row) => {
    const date = row?.date_of_birth?.split('/');
    const newDate = `${date[1]}/${date[0]}/${date[2]}`;
    const diff = moment(new Date()).diff(moment(new Date(newDate)), 'years');
    const industry = row?.industry;

    if (industry) {
      datasets[industry] = {
        count: datasets[industry]?.count ? datasets[industry]?.count + 1 : 1,
        total: datasets[industry]?.total ? datasets[industry]?.total + diff : diff
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

export default avgYearPerIndustry;
