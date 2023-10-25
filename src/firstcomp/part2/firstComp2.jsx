import React from 'react'
import CustomChart from './CustomChart'
import Portfolio from './portfolio'
import './firstComp2.css'
import Customhead from './customhead'
const FirstComp2 = () => {
  return (
    <div className='first-comp-2'>
      <Customhead /><br />


      <div className='firstcomp2'>
        <CustomChart />
        <Portfolio />
      </div>



    </div>
  )
}

export default FirstComp2