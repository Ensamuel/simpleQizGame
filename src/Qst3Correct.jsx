import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
const Qst3Correct = () => {
  return (
    <div>
       <h3> Correct! </h3> 
        
        <button> 
          <Link to = '/ZlastPage'>
            Next Question</Link>
          </button>

    </div>
  )
}

export default Qst3Correct