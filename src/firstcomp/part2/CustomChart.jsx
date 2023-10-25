import React from 'react'
import './CustomChart.css'
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const CustomChart = () => {

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [4, 6, 7, 4, 6, 7, 8, 9, 3, 6, 4, 7],
                backgroundColor: 'blue',
                borderWidth: 1,
                barPercentage: 0.4,

            },

            {
                label: 'Dataset 1',
                data: [4, 6, 7, 4, 6, 7, 8, 9, 3, 6, 4, 7],
                backgroundColor: 'aqua',
                borderWidth: 1,
                barPercentage: 0.4,
            },

            {
                label: 'Dataset 1',
                data: [4, 6, 7, 4, 6, 7, 8, 9, 3, 6, 4, 7],
                backgroundColor: 'red',
                borderWidth: 1,
                barPercentage: 0.5,
            },



        ]
    }

    const options = {
        maintainAspectRatio: false, // Set maintainAspectRatio to false
        scales: {
            x: {
                stacked: true,
                grid: {
                    display: false, // Hide x-axis grid lines
                },
                ticks: {
                    font: {
                        size: 8, //this change the font size
                        style: 'normal',
                    }
                }
            },
            y: {
                stacked: true,
                grid: {
                    display: false, // Hide x-axis grid lines
                },

                display: false, // Hide x-axis labels

            }
        },
        elements: {
            bar: {
                borderRadius: 10 // Set the border radius for the bars
            }
        },

        plugins: {
            legend: {
                display: false, // Hide the legend
            }
        }

    }
    return (
        <>
         <div className='bar-chart'>
            <Bar data={data} options={options} />
        </div>
        </>
       
    )
}

export default CustomChart