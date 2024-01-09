import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';



const Qst1TenSecondCountdown = () => {
  const [seconds, setSeconds] = useState(7);
  const history = useHistory();

  useEffect(() => {
    const timer =
      seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);

    if (seconds === 0) {
      clearInterval(timer);
      // Navigate to the next page after the countdown
      history.push('/qst2'); // Replace '/next-page' with your actual route
    }

    return () => clearInterval(timer);
  }, [seconds, history]);

  return (
    <div>
      <h1>{seconds === 0 ? (
        <span>Incorrect</span>
      ) : (
        <span> Countdown: {seconds}</span>
      )}</h1>
    </div>
  );
};

export default Qst1TenSecondCountdown;
