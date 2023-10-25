import React from 'react'
import CustomLine from './CustomLine'
import { BsArrowUpShort } from 'react-icons/bs'
import './Oct19.css'
const Oct19 = () => {
  return (
    <div>
       <div className='oct-19'>
      <h2  className='oct-19-1'>OCT 19</h2>
      <CustomLine/>


      <div className='oct-port-div'>
        <p className='oct-port-val'> Portfolio Value </p>
        <p>$ 9 864.34</p>
        <p className='oct-19-arrow'> <BsArrowUpShort /> 143.56 (15.43%)</p>
      </div>
    </div>
    </div>
  )
}

export default Oct19