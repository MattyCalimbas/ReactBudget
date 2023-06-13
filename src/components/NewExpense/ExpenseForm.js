import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    // Alternative method of setting state for multiple inputs
    // const [titleInput, setTitleInput] = useState('');
    // const [amountInput, setAmountInput] = useState('');
    // const [dateInput, setDateInput] = useState('')

    // Example of setting state with single state object
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const titleChangeHandler = (event) => {
        // takes snapshot of previous state before updating ensuring latest state data is being used
        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value }
        })
    };

    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredAmount: event.target.value }
        })
    };
    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredDate: event.target.value }
        })
    };

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="O.O1" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="01-01-2023" max="12-31-2024" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__action">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;