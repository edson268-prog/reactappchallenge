import React, { useState, useEffect } from 'react';
import './UseEffectExample.css';

const UseEffectExample = () => {
  const [message, setMessage] = useState('Hola!');

  useEffect(() => {
    const timer = setTimeout(() => setMessage('¡Bienvenido al ejemplo de useEffect!'), 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="use-effect">
      <h1>useEffect</h1>
      <p>{message}</p>
    </div>
  );
};

export default UseEffectExample;