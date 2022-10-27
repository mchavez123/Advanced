import React, { useState, useReducer } from 'react';
import Card from '../UI/Card/Card';
import styles from './Todo.module.css';
import ToDoList from './ToDoList';

const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo'
}

const newTodo = (name) => {
    return { id: Date.now(), name: name, complete: false}
}

const reducer = (todos, action) => {   
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete } 
                }
                return todo
            })
    }
}

function Todo() {
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch ({ type: ACTIONS.ADD_TODO, payload: { name: name } })
        setName('');
    }
    console.log( todos );

    return (
        <Card>
        <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={e => setName (e.target.value)} />
        </form>
        {todos.map(todo => {
            return <ToDoList key={todo.id} todo={todo} />
        })}
        </Card>
    );
}

export default Todo;