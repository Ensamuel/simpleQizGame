import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const ZlastPage = ({correctClicks, remainingTime}) => {
  

  return (
    <div>
     Congrats {correctClicks}<br/>
     <p>Remaining time: {remainingTime}  seconds</p>
     <button><Link to = '/'> Play Again </Link> </button>
     
    </div>
  )
}

export default ZlastPage


