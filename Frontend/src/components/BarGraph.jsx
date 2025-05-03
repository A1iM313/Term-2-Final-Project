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
        data: [65, 59, 80, 81, 56, 55, 40, 33, 27],
        fill: false,
        borderColor: 'rgb(69, 190, 190)',
        tension: 0.1
      }]};
      return <div style={{ width: '50vw', height: '40vh'}}><Bar options={options} labels={labels} data={data} /> </div>
}