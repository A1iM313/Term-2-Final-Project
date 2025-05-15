// Import the Chart.js components
import {
    Chart as ChartJS,
    CategoryScale,    // For x-axis categories
    LinearScale,      // For y-axis numeric values
    PointElement,     // For data points
    LineElement,      // For the lines
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  // Import the Line component from react-chartjs-2
  import { Line } from 'react-chartjs-2';
  
  // Register the components
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


export default function LineGraph() {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'];
    const options = {};
    const data = {
          labels: labels,
          datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 47, 63, 66],
          fill: false,
          borderColor: 'rgb(69, 190, 190)',
          tension: 0.1
        }]};

    return <div style={{ width: '50vw', height: '50vh'}}><Line options={options} labels={labels} data={data} /></div>;
}