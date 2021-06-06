import React from 'react';
import Task from './Task';
import './tasks.css';

function Tasks({ todos, setTodos }) {
    return (
        <div className="tasks">
            <div className="tasks__day">
                <h2>Monday</h2>
                {todos.filter(todo => todo.day === 'monday').map(todo => 
                    <Task setTodos={setTodos} todo={todo} todos={todos} key={todo.id} text={todo.text} day={todo.day} completed={todos.completed} />
                )}
            </div>
            <div className="tasks__day">
                <h2>Tuesday</h2>
                {todos.filter(todo => todo.day === 'tuesday').map(todo => 
                    <Task setTodos={setTodos} todo={todo} todos={todos} key={todo.id} text={todo.text} day={todo.day} completed={todos.completed} />
                )}
            </div>
            <div className="tasks__day">
                <h2>Wednesday</h2>
                {todos.filter(todo => todo.day === 'wednesday').map(todo => 
                    <Task setTodos={setTodos} todo={todo} todos={todos} key={todo.id} text={todo.text} day={todo.day} completed={todos.completed} />
                )}
            </div>
            <div className="tasks__day">
                <h2>Thursday</h2>
                {todos.filter(todo => todo.day === 'thursday').map(todo => 
                    <Task setTodos={setTodos} todo={todo} todos={todos} key={todo.id} text={todo.text} day={todo.day} completed={todos.completed} />
                )}
            </div>
            <div className="tasks__day">
                <h2>Friday</h2>
                {todos.filter(todo => todo.day === 'friday').map(todo => 
                    <Task setTodos={setTodos} todo={todo} todos={todos} key={todo.id} text={todo.text} day={todo.day} completed={todos.completed} />
                )}
            </div>
            <div className="tasks__day">
                <h2>Saturday</h2>
                {todos.filter(todo => todo.day === 'saturday').map(todo => 
                    <Task setTodos={setTodos} todo={todo} todos={todos} key={todo.id} text={todo.text} day={todo.day} completed={todos.completed} />
                )}
            </div>
            <div className="tasks__day">
                <h2>Sunday</h2>
                {todos.filter(todo => todo.day === 'sunday').map(todo => 
                    <Task setTodos={setTodos} todo={todo} todos={todos} key={todo.id} text={todo.text} day={todo.day} completed={todos.completed} />
                )}
            </div>
        </div>
    )
}

export default Tasks
