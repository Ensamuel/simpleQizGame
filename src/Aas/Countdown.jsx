// Countdown.js
import React, { useEffect, useState, useRef } from 'react';

const Countdown = ({ updateRemainingTime }) => {
  const [seconds, setSeconds] = useState(10);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          clearInterval(intervalRef.current);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    updateRemainingTime(seconds);
  };

  return (
    <div>
      <h2>Countdown</h2>
      <p>Time remaining: {seconds} seconds</p>
      <button onClick={pauseTimer}>Pause</button>
    </div>
  );
};

export default Countdown;
