import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const HowToPlay = () => {
  return (
    <div className='yes-body'>
        <h1>HOW TO PLAY</h1>
        <p>
            There are several questions to answer from.
            Choose the correct answer as fast as
            possible.
            in the end, your score will be the cummulation
            of the number of correct answers you got
            and the speed in answering them. Goodluck
        </p>
       
        <button><Link to = '/qst1'> Play Game </Link></button>
    </div>
  )
}

export default HowToPlay