import React, { useState, useReducer } from 'react';
import Card from '../UI/Card/Card';
import styles from './Counter.module.css';

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
    
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment' :
            return { count: state.count + 1}
        case 'decrement' :
            return { count: state.count - 1}
            default:
                return state
    }
     
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, {count: 0})
    const [count, setCount] = useState(0);

    const decrementCount = () => {
        dispatch( { type: ACTIONS.DECREMENT });
    }
    const incrementCount = () => {
        dispatch( { type: ACTIONS.INCREMENT });
    }
    return (
        <Card>
        <div className={styles.counter}>
        <button className={styles.button} onClick={decrementCount}> - </button>
        <span> {state.count} </span>
        <button className={styles.button} onClick={incrementCount}> + </button>
        </div>
        </Card>
    );
}

export default Counter;