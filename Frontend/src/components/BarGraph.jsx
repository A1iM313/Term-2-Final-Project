import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarGraph() {
    const labels = ["Clear", "Clouds", "Rain", "Thunderstorm", "Drizzle", "Fog", "Mist", "Haze", "Snow"]
    const options = {};
    const data = {
        labels: labels,
        datasets: [{
        label: 'My First Dataset',
        data: [5041, 4489, 264, 1667, 6082, 2982, 4210, 3300, 827],
        fill: false,
        borderColor: 'rgb(69, 190, 190)',
        tension: 0.1
      }]};
      return <div style={{ width: '50vw', height: '40vh'}}><Bar options={options} labels={labels} data={data} /> </div>
}