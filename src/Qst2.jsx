import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import Qst2TenSecondCountdown from './Qst2TenSecondCountdown'



const Qst2 = ({ incrementCorrectClicks }) => {
  return (
    <div className='qst2'>
      <Qst2TenSecondCountdown/>
      <h3 className='qst2-qst'>What is the second 
      most popular microsoft office tool</h3>
      <div className='qst2-btns'>
        <button><Link to = '/Qst2Wrong'>A. Microsoft Word</Link></button>
        <button><Link to = '/Qst2Wrong'>B. Microsoft Excel</Link></button>
        <button onClick={incrementCorrectClicks}><Link to = '/Qst2Correct'>C. Microsoft Powerpoint</Link></button>
        <button><Link to = '/Qst2Wrong'>D. Microsoft Access</Link></button>
      </div>


    </div>
  )
}

export default Qst2