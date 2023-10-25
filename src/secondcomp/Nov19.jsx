import React from 'react'
import './Nov19.css'
import { BsArrowUpShort } from 'react-icons/bs'
const Nov19 = () => {
  return (
    <div className='nov-19'>
      <h2 className='nov-19-1'>NOV 19</h2>

      <div className='nov-port-div'>
        <p className='nov-port-val'> Portfolio Value </p>
        <p className='nov-num'>$ 9 864.34</p>
        <p className='nov-19-arrow'> <BsArrowUpShort /> 234.23 (30.34%)</p>
      </div>
    </div>
  )
}

export default Nov19