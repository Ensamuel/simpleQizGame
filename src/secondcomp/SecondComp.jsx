import React from 'react'
import Nov19 from './Nov19'
import Oct19 from './Oct19'
import Sep19 from './Sep19'
import DoughChart from './DoughChart'
import './SecondComp.css'

const SecondComp = () => {
    return (
        <div>
            <div className='secondComp-head'>
                <p>Porfolio History</p>
                <p>For Industry</p>
            </div>

            <div className='secondComp-body'>
                <Nov19 />
                <Oct19 />
                <Sep19 />
                <DoughChart />
            </div>

        </div>
    )
}

export default SecondComp