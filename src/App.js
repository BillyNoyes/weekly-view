import React, { useState } from 'react'
import './App.css';
import Form from './Form';
import Tasks from './Tasks';

function App() {
  const [inputText, setInputText] = useState("");
  const [selectDay, setSelectDay] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="app">
      <h1>Weekly Planner</h1>
      <Form todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText} setSelectDay={setSelectDay} selectDay={selectDay} />
      <Tasks todos={todos} setTodos={setTodos}  />
    </div>
  );
}

export default App;
