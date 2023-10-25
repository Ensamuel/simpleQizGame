import React from 'react'
import { AiOutlineUser } from 'react-icons/ai';
import { RiDashboard3Line } from 'react-icons/ri';
import { BiBarChart } from 'react-icons/bi';
import { AiOutlineWallet } from 'react-icons/ai';
import { FiPower } from 'react-icons/fi'
import './sidenav.css'
const Sidenav = () => {
  return (
    <div className='sidenav'>
      <div className='sidenav-user'>
        <h1 className='user-pic'><img src="user.PNG" alt="user" /></h1>
        <div className='user-profile'>
          <p className='user-profile-name'>Kristen Ramos</p>
          <p className='user-profile-email'> kristen.ramos@email.com</p>
        </div>
      </div>

      <div className='sidenav-nav'>
        <div className='sidenav-dashboard'><RiDashboard3Line/> <p>Dashboard</p><br/></div>
        <div className='sidenav-dashboard'><AiOutlineWallet/> <p>Holdings</p><br/></div>
        <div className='sidenav-dashboard'><BiBarChart/> <p>performance</p><br/></div>
        
        
      </div>

      <div className='sidenav-logout'>
       <p className='sidenav-logout-btn'><FiPower /></p><p>logout</p> 
      </div>

    </div>
  )
}

export default Sidenav