import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import './SecondsCounter.css';

function SecondsCounter(props) {
  const seconds = props.seconds;

  // Función para obtener los dígitos del contador
  const getDigits = (num) => {
    const digits = num.toString().padStart(6, '0').split('');
    return digits.map((digit, index) => (
      <div key={index} className="digit-container">
        <div className="digit">{digit}</div>
      </div>
    ));
  };

  return (
    <div className="seconds-counter-container">
      <div className="clock-icon">
        <FontAwesomeIcon icon={faClock} />
      </div>
      <div className="digits-container">{getDigits(seconds)}</div>
    </div>
  );
}

export default SecondsCounter;
