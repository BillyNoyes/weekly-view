import React, { useState } from 'react';
import './form.css';

function Form({ setInputText, inputText, setSelectDay, selectDay, todos, setTodos }) {
    const [errorMessage, setErrorMessage] = useState("");

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const selectDayHandler = (e) => {
        setSelectDay(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        // Checks if the input fields contain data
        if (inputText === "" || selectDay === "") {
            setErrorMessage("No inputs can be left empty");
        } else {
            // if the input fields contain data, the Todos state is set with the original data spread across the arrary, with the additional fields
            setTodos([
                ...todos, {text: inputText, completed: false, day: selectDay, id: Math.random() * 1000 },
            ]);
            // Sets the states of the inputs to empty strings
            setErrorMessage('');
            setInputText('');
            setSelectDay('');
        }
        
    }

    return (
        <form className="form">
            <div className="form__inputs">
                <input value={inputText} onChange={inputTextHandler} type="text" placeholder="Enter a task" />
                <select value={selectDay} onChange={selectDayHandler} name="days" id="days">
                    <option value="" selected disabled hidden>Choose the Day Here</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                    <option value="saturday">Saturday</option>
                    <option value="sunday">Sunday</option>
                </select>
                <button onClick={submitTodoHandler} type="submit">
                    ➕
                </button>
            </div>
            <p className="form__errorMessage">{errorMessage}</p>
        </form>
        
    )
}

export default Form
