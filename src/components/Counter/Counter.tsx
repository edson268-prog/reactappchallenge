import React, { useState } from 'react';
import './Counter.css';
import { Button } from '../Button/Button';

const Counter = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Pedro")

    const countMore = () => {
        setCount((count) => count + 1)
    }

    const changeName = () => {
        setName("Edson");
    }

    return (
        <>
            <div className="counter">
                <Button label={`Count is ${count}`} parentMethod={countMore} />
                <p>{name}</p>
                <Button label="Change Name" parentMethod={changeName} />
            </div>
        </>
    )
};

export default Counter;