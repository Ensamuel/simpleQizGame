import React from 'react'
import { BsArrowRightSquareFill } from 'react-icons/bs'

import './upgrade.css'
const Upgrade = () => {
    return (
        <>
            <div className='upgrade'>
                <div className='upgrade-acct'>
                    <h3>Upgrade your Account</h3>
                </div>
                <div className='upgrade-text-arrow'>
                <p className='upgrade-text'>Access many other
                    <br />features and helpful<br /> insights</p><br />
                    <p className='upgrade-arrow'><BsArrowRightSquareFill /></p>
                </div>
               

                <div className='upgrade-vector'>
                    <img src="man.png" alt="man" className='upgrade-image'/>


                </div>
            </div>

            <div>

            </div>
        </>
    )
}

export default Upgrade