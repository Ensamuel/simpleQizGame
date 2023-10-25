import React from 'react';
import Sidenav from './sidenav/sidenav';
import Nav from './nav/Nav';
import SecondComp from './secondcomp/SecondComp';
import FirstComp from './firstcomp/firstcomp';
import './App.css'
import ThirdComp from './thirdcomp/ThirdComp';

function App() {
  return (
    <div className='app-page'>
      <div className='sidenav-app'>
        <Sidenav />
      </div>
      <div className='full-app'>
        <div className='full-app1'>
          <Nav />
          <FirstComp />
        </div>

        <SecondComp />
        <ThirdComp />
      </div>
    </div>
  );
}

export default App;