import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const Ready = () => {
  return (
    <div>
        <h3 className='ready-benjamin'>Ready To Beat Benjamin?</h3>
        <div className='ready-buttons'>
            <button>No</button>
            <button><Link to = '/HowToPlay'>Yes!</Link></button>
        </div>
    </div>
  )
}

export default Ready