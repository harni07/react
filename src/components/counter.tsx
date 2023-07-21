import React from "react";
import styles from "./counter.module.scss"
import Button from 'react-bootstrap/Button';

interface ICounterProp {
    number: number;
    index: number;
    onIncrease: (index: number) => void;
    onDecrease: (index: number) => void;
}

const Counter = ({onIncrease, onDecrease, number, index}: ICounterProp) => {

    const handleInc = () => {
        onIncrease(index);
    }

    const handleDec = () => {
        onDecrease(index);

    }

    return (
        <div className={styles.counter}>
            <div>{number}</div>
            <Button variant="primary" onClick={handleInc}>Add one</Button>
            <Button variant="secondary" onClick={handleDec} disabled={number===0}>Remove one</Button>
        </div>
    );
};

export default Counter;
