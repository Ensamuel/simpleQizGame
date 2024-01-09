import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
const Qst1Correct = () => {
  return (
    <div>
       <h3> Correct! </h3> 
        
        <button> 
          <Link to = '/qst2'>
            Next Question</Link>
          </button>

    </div>
  )
}

export default Qst1Correct