import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SopoeaChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.year),
    datasets: [
      {
        label: 'SOPOEA Funding ($M)',
        data: data.map(d => d.amount),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'SOPOEA Annual Funding Trend' },
    },
    scales: {
      y: {
        beginAtZero: false,
        title: { display: true, text: '$ Million' },
        min: 350, // Adjust for better visualization
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default SopoeaChart;