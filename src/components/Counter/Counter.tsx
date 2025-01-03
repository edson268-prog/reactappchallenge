import { useState } from 'react';
import './Counter.css';
import { Button } from '../Button/Button';
import { User } from '../User/User';
import { Card } from '../Card/Card';

const Counter = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Pedro")
    const [show, setShow] = useState(true)

    function handleShow() {
        setShow(!show);
    }

    const countMore = () => {
        setCount((count) => count + 1)
    }

    const countMinus = () => {
        setCount((count) => count - 1)
    }

    const changeName = () => {
        setName("Edson");
    }

    return (
        <>
            <User name="Edson" age={31} nationality="Bolivia" />
            <User name="Maria" age={25} nationality="Argentina" />

            <Button label={show === true ? "Hide" : "Show"} parentMethod={handleShow} />
            {show === true && <Card />}

            <div className="counter">
                {/* <Button label={`Count is ${count}`} parentMethod={countMore} /> */}
                <Button label={"Add"} parentMethod={countMore} />
                <Button label={"Minus"} parentMethod={countMinus} />
                <h2>{count}</h2>
                <hr />
                <Button label="Change Name" parentMethod={changeName} />
                <p>{name}</p>
            </div>
        </>
    )
};

export default Counter;