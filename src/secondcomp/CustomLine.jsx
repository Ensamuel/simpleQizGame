import React from 'react'
import './CustomLine.css'
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

import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

const CustomLine = () => {

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [4, 6, 7, 4, 6, 7, 8, 9, 3, 6, 4, 7],
                borderColor: 'aqua',
                pointRadius: 0,


            },



        ]
    }

    const options = {
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false, // Hide x-axis grid lines
                },

                display: false, // Hide x-axis labels

            },
            y: {
                grid: {
                    display: false, // Hide x-axis grid lines
                },

                display: false, // Hide x-axis labels

            }
        },
        elements: {
            line: {
                tension: 0.4  // smooth lines
            },
        },
        plugins: {
            legend: {
                display: false, // Hide the legend
            }
        }

    }
    return (
        <div className='line-chart'>
            <Line data={data} options={options} />
        </div>
    )
}

export default CustomLine