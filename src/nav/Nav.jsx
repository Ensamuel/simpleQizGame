import React from 'react'
import './Nav.css'
import { PiSunLight } from 'react-icons/pi'
import { AiOutlineBell } from 'react-icons/ai'
import { IoMdAddCircle } from 'react-icons/io'
const Nav = () => {
  return (
    <nav className='nav-head'>
      <li><PiSunLight /> US Stock market opens in 3 hours </li>
      <div className='nav-head-end'> 
        <select>
          <option>Main Wallet</option>
        </select>
        <li className='nav-notif'><AiOutlineBell /></li>
        <li className='nav-add'><IoMdAddCircle /></li>
      </div>

    </nav>
  )
}

export default Nav