// Result.js
import React, { useState } from 'react';

const Result = ({ remainingTime }) => {
  return (
    <div>
      <h2>Result</h2>
      <p>Remaining time: {remainingTime} seconds</p>
    </div>
  );
};

export default Result;
