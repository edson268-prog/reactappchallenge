import { useState, useEffect } from 'react';
import './UseEffectExample.css';

const UseEffectExample = () => {
  const [message, setMessage] = useState('Hola!');
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Componente montado");
    const timer = setTimeout(() => setMessage('¡Bienvenido al ejemplo de useEffect!'), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleText = (e: any) => {
    setText(e.target.value);
  }

  useEffect(() => {
    return () => {
      console.log("Texto modificado");
    }
  }, [text]) //Solo cuando el valor de text sufre algun cambio

  return (
    <div className="use-effect">
      <h1>useEffect</h1>
      <p>{message}</p>

      <div>
        <input type="text" onChange={handleText} />
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default UseEffectExample;