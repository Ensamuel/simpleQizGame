import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
const Qst1Wrong = () => {
  return (
    <div>
        <h3>Incorrect</h3>
        <button><Link to = '/qst3'>Next Question</Link></button>
    </div>
  )
}

export default Qst1Wrong