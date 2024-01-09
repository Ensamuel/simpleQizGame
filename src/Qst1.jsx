import React from 'react'

import Qst1TenSecondCountdown from './Qst1TenSecondCountdown'
import { Link } from 'react-router-dom'
const Qst1 = ({incrementCorrectClicks}) => {


  return (
    <div className='qst1'>
      <Qst1TenSecondCountdown />

      <h3 className='qst1-qst'>Who is the CEO of twitter</h3>
      <div className='qst1-btns'>
        <Link to='/qst1Wrong'>  <button>A. Mark Zuckerberg</button></Link>
        <Link to='/qst1Wrong'>  <button>B. Bill Gates</button></Link>
        <Link to='/qst1Correct'>  <button onClick={incrementCorrectClicks}>C. Elon Musk</button></Link>
        <Link to='/qst1Wrong'>  <button>D. Steve Jobs</button></Link>
      </div>


    </div>
  )
}

export default Qst1