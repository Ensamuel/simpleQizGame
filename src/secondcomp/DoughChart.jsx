import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './DoughChart.css'

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['yellow', 'purple', 'red', 'white', 'aqua', 'green', 'lime'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 4, 5],
      backgroundColor: [
        'yellow', 'purple', 'red', 'white', 'aqua', 'green', 'lime'
      ],

      borderWidth: 0,
    },
  ],
}

const options = {
  maintainAspectRatio: false,
  cutout: '80%',
  plugins: {
    legend: {
      display: false, // Hide the legend
    }
  }
}

export default function DoughChart() {
  return (
    <div className='dough-chart'>
      <p className='ind'>07<br/>INDUSTRIES</p>
      <div className='doughnut'>
      <Doughnut data={data} options={options} />;
      </div>
      
    </div>
  )

}