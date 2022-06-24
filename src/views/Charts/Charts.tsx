import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import calcAvgSalaryPerIndustry from './avgSalaryPerIndustrySelector';
import calcAvgSalaryPerExper from './avgSalaryPerExperSelector';
import calcAvgYearPerIndustry from './avgYearPerIndustry';
import './charts.scss';
import { useNavigate } from 'react-router-dom';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const getOptions = (title: string) => {
  return {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: title
      }
    }
  };
};

const getData = (labels: string[], data: number[], color: string) => {
  return {
    labels,
    datasets: [
      {
        data: data,
        backgroundColor: color
      }
    ]
  };
};

const Charts = () => {
  let navigate = useNavigate();
  const handleChartsClick = () => {
    navigate('/');
  };

  const avgSalarPerIndustry = calcAvgSalaryPerIndustry();
  const avgSalaryPerExper = calcAvgSalaryPerExper();
  const avgYearPerIndustry = calcAvgYearPerIndustry();

  return (
    <div className="chart-container">
      <div className="top-section">
        <h1>Charts</h1>
        <button onClick={handleChartsClick}>Hr System Board</button>
      </div>

      <Bar
        options={getOptions('Avarage salary per industry')}
        data={getData(avgSalarPerIndustry?.labels, avgSalarPerIndustry?.data, 'red')}
      />
      <Bar
        options={getOptions('Avarage salary per year of experience')}
        data={getData(avgSalaryPerExper?.labels, avgSalaryPerExper?.data, 'green')}
      />
      <Bar
        options={getOptions('Avarage year per industry')}
        data={getData(avgYearPerIndustry?.labels, avgYearPerIndustry?.data, 'blue')}
      />
    </div>
  );
};

export default Charts;
