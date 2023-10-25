import React from 'react'
import { BsArrowUpShort } from 'react-icons/bs'
import { BiSolidCheckbox } from 'react-icons/bi'
import './portfolio.css'

const Portfolio = () => {
  return (
    <div>
      <div className='portfolio-value-div'>
        <p className='portfolio-value'> Portfolio Value </p>
        <h1 className='portfolio-digit'>$ 9 864.34</h1>
        <p className='portfolio-increase'> <BsArrowUpShort /> 234.23 (30.34%)</p>
      </div>


      <div className='pdetf'>
        <p><BiSolidCheckbox className='box-port'/> Portfolio
        </p>
        <p><BiSolidCheckbox className='box-doll'/> Dollar
        </p>
        <p><BiSolidCheckbox className='box-etfs' /> ETFs</p>
      </div>
    </div>
  )
}

export default Portfolio