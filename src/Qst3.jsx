import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'

import Qst3TenSecondCountdown from './Qst3TenSecondCountdown'




const Qst3 = ({incrementCorrectClicks}) => {
  return (
    <div className='qst3'>
     <Qst3TenSecondCountdown/>
      <h3 className='qst3-qst'>
      Which of these is not part of the microsoft office suite
      </h3>
      <div className='qst3-btns'>
        <button onClick={incrementCorrectClicks}><Link to = '/Qst3Correct'>A. Microsoft OnLook</Link></button>
        <button><Link to = '/Qst3Wrong'>B. Microsoft Publisher</Link></button>
        <button><Link to = '/Qst3Wrong'>C. Microsoft OneNote</Link></button>
        <button><Link to = '/Qst3Wrong'>D. Microsoft InfoPath</Link></button>
      </div>


    </div>
  )
}

export default Qst3