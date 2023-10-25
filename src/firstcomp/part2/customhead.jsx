import React from 'react'
import './customhead.css'
import { PiCurrencyCircleDollarBold } from 'react-icons/pi'
const Customhead = () => {
  return (
    <div>
      <div className='firstcomp-head'>
        <ul className='firstcomp-ul'>
          <li>1D</li>
          <li>1W</li>
          <li>1M</li>
          <li>1Y</li>
          <li>All</li>
        </ul>

        <div><PiCurrencyCircleDollarBold /></div>

      </div>
    </div>
  )
}

export default Customhead