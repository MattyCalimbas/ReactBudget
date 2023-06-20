import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    // Method of setting state for multiple inputs
    const [titleInput, setTitleInput] = useState('');
    const [amountInput, setAmountInput] = useState('');
    const [dateInput, setDateInput] = useState('')

    // Alternative example below of setting state with single state object
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (event) => {
        setTitleInput(event.target.value)

        // Alternative example adhering to single state method above
        // safest method to update state
        // takes snapshot of previous userInput state before updating ensuring latest state data is being used
        // setUserInput((userInput) => {
        //     return { ...userInput, enteredTitle: event.target.value }
        // })
    };

    const amountChangeHandler = (event) => {
        setAmountInput(event.target.value)

        // setUserInput((userInput) => {
        //     return { ...userInput, enteredAmount: event.target.value }
        // })
    };
    const dateChangeHandler = (event) => {
        setDateInput(event.target.value)

        // setUserInput((userInput) => {
        //     return { ...userInput, enteredDate: event.target.value }
        // })
    };

    const submitHandler = (event) => {
        event.preventDefault()

        // expense data object
        const expenseData = {
            title: titleInput,
            amount: amountInput,
            date: new Date(dateInput)
        }

        console.log(expenseData)

        // Taking advantage of two-way binding to clear inputs
        // Using useState to reset the state of the inputs which will then reflect in the value attribute
        setTitleInput('')
        setAmountInput('')
        setDateInput('')
        
    }

    return (
        // Listen to onSubmit on the form element to event listen over all the inputs
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>

                    {/* Two-way binding is achieved with value attribute */}
                    {/* When state is changed, value of input element reflects change */}
                    {/* Use two-way binding for forms */}
                    <input type="text" value={titleInput} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="O.O1" step="0.01" value={amountInput} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="01-01-2023" max="12-31-2024" value={dateInput} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__action">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;