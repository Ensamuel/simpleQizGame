// App.js
import React, { useState } from 'react';
import Countdown from './Countdown';
import Result from './Result';

const App = () => {
  const [remainingTime, setRemainingTime] = useState(null);

  const updateRemainingTime = (time) => {
    setRemainingTime(time);
  };

  return (
    <div>
      <Countdown updateRemainingTime={updateRemainingTime} />
      {remainingTime !== null && <Result remainingTime={remainingTime} />}
    </div>
  );
};

export default App;
