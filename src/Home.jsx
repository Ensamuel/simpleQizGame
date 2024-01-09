import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Home = () => {

const [username, setUsername] = useState('')



function handleUsername(e){
    setUsername(e.target.value)
}



  return (
    <div className='home-page'>
        <h4>Enter Your Name:</h4>
        <input type="text" name="username" 
        id="username" 
        placeholder='enter your username' 
        onChange={handleUsername}  
        value={username}     
        />

<button><Link to = '/Ready'> Play! </Link> </button>


    </div>
  )
}

export default Home