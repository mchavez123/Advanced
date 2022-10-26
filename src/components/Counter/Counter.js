import React, { useState } from 'react';
import Card from '../UI/Card/Card';
import styles from './Counter.module.css';

function Counter(props) {
    const [count, setCount] = useState(0);

    const decrementCount = () => {
        setCount(prevCount => prevCount -1);
    }
    const incrementCount = () => {
        setCount(prevCount => prevCount +1);
    }
    return (
        <Card>
        <div className={styles.counter}>
        <button className={styles.button} onClick={decrementCount}> - </button>
        <span> {count} </span>
        <button className={styles.button} onClick={incrementCount}> + </button>
        </div>
        </Card>
    );
}

export default Counter;