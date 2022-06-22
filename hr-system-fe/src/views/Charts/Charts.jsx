import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";
import calcAvgSalaryPerIndustry from "./avgSalaryPerIndustrySelector";
import './charts.scss'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const getOptions = (title) => {
    return {
        responsive: true,
        plugins: {
            legend: {
            display: false,
            },
            title: {
            display: true,
            text: title,
            },
        },
    }
}

const getData = (labels, data, color) => {
    return {
        labels,
        datasets: [
            {
                data: data,
                backgroundColor: color,
            }
        ]
    }
} 

const Charts = () => {
  const avgSalarPerIndustry = calcAvgSalaryPerIndustry();

  return (
    <div className="chart-container">
      <Bar options={getOptions('Avarage salary per industry')} data={getData(avgSalarPerIndustry?.labels, avgSalarPerIndustry?.data, 'red')} />
    </div>
  );
};

export default Charts;