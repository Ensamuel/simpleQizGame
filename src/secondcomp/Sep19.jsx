import React from 'react'
import { BsArrowDownShort } from 'react-icons/bs'
import './sep19.css'
const Sep19 = () => {
  return (
    <div>
      <div className='sep-19'>
        <h2 className='sep-19-1'>SEP 19</h2>
       


        <div className='sep-port-div'>
          <p className='sep-port-val'> Portfolio Value </p>
          <p>$ 7453.45</p>
          <p className='sep-19-arrow'> <BsArrowDownShort /> 134.23 (-8.34%)</p>
        </div>
      </div>
    </div>
  )
}

export default Sep19