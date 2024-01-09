import React, { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Qst1Correct from './Qst1Correct'
import Qst1Wrong from './Qst1Wrong'
import Home from './Home';
import Ready from './Ready';

import Qst1 from './Qst1';

import Qst2 from './Qst2'
import HowToPlay from './HowToPlay';
import Qst2Correct from './Qst2Correct'
import Qst2Wrong from './Qst2Wrong'

import Qst3 from './Qst3'
import ZlastPage from './ZlastPage';
import Qst3Wrong from './Qst3Wrong';
import Qst3Correct from './Qst3Correct';



const App = (props) => {
  const [correctClicks, setCorrectClicks] = useState(0);

  const incrementCorrectClicks = () => {
    setCorrectClicks(correctClicks + 1);
  };

  return (
    <Router>
      <div className='body'>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/Ready" >
            <Ready />
          </Route>
          <Route path="/HowToPlay">
            <HowToPlay />
          </Route>
          <Route path="/qst1">
            <Qst1 
            incrementCorrectClicks={incrementCorrectClicks}
            
            />
          </Route>
          <Route path="/qst1Correct">
            <Qst1Correct />
          </Route>
          <Route path="/qst1Wrong">
            <Qst1Wrong />
          </Route>
          <Route path="/qst2">
            <Qst2 incrementCorrectClicks={incrementCorrectClicks}/>
          </Route>
          <Route path="/qst2Correct">
            <Qst2Correct />
          </Route>
          <Route path="/qst2Wrong">
            <Qst2Wrong />
          </Route>
          <Route path="/qst3">
            <Qst3 incrementCorrectClicks={incrementCorrectClicks}/>
          </Route>
          <Route path="/qst3Correct">
            <Qst3Correct />
          </Route>
          <Route path="/qst3Wrong">
            <Qst3Wrong />
          </Route>

          <Route path="/zlastpage">
            <ZlastPage correctClicks={correctClicks}/>
          </Route>

        </Switch>
      </div>
    </Router>
  )
}

export default App



