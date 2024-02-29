import React, { useState, useEffect } from 'react';
import SecondsCounter from './components/SecondsCounter';
import './App.css';

function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <SecondsCounter seconds={seconds} />
    </div>
  );
}

export default App;
