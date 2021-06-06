import React from 'react';
import './task.css';

function Task({ text, day, todo, todos, setTodos }) {

    const deleteHandler = () => {
        // Removes the task with the matching id from the todos array using the filter function
        setTodos(todos.filter(el => el.id !== todo.id));
    }

    const completeHandler = () => {
        // Maps across the todos array and checks if the item.id matches the current tasks id
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                // If both the ids match, the todos array is set with the completed field negated
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    return (
        <div className="task">
            <p className={todo.completed && 'task__completed'}>{text}</p>
            <button onClick={completeHandler}>
                ✅
            </button>
            <button onClick={deleteHandler}>
                🗑
            </button>
        </div>
    )
}

export default Task
