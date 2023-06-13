import React , { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    // const [titleInput, setTitleInput] = useState('');
    // const [amountInput, setAmountInput] = useState('');
    // const [dateInput, setDateInput] = useState('')

    const [userInput, setUserInput] = useState({
        enteredTitle:'',
        enteredAmount: '',
        enteredDate:''
    })

    const titleChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        })
    };
    
    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        })
    };
    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        })
    };

 return (
    <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="O.O1" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="01-01-2023" max="12-31-2024" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__action">
            <button type="submit">Add Expense</button>
        </div>
    </form>
 )
};

export default ExpenseForm;