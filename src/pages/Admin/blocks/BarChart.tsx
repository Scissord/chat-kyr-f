import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Revenue',
      data: [500, 700, 800, 600, 900, 1000],
      backgroundColor: '#f0f0f0f0',
      borderRadius: 10,  // Закругленные края столбцов
      borderSkipped: false,  // Убираем границы сверху
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
      labels: {
        color: '#fff',  // Цвет текста легенды
        font: {
          size: 14,
          weight: 'bold',
        },
      },
    },
    title: {
      display: true,
      text: 'Monthly Revenue',
      color: '#fff',
      font: {
        size: 18,
        weight: 'bold',
      },
      padding: {
        top: 10,
        bottom: 20,
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,  // Отключаем сетку по оси X
      },
      ticks: {
        color: '#fff',  // Цвет подписей по оси X
      },
    },
    y: {
      grid: {
        color: 'rgba(200, 200, 200, 0.2)',  // Полупрозрачная сетка по оси Y
      },
      ticks: {
        color: '#fff',  // Цвет подписей по оси Y
      },
    },
  },
};

const BarChart = () => {
  return (
    <div className="w-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center p-4 rounded-lg shadow-lg">
      <Bar data={data} options={options} />
    </div>
  )
};

export default BarChart;
