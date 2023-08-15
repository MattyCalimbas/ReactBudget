import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    // most common pattern to pass props upward
    // create custom prop and function on component that handles data being passed upward
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        setIsEditing(false)
        // call custom prop from parent component (App.js) and pass the data
        props.onAddExpense(expenseData)
    };
    const startEditingHandler = () => {
        setIsEditing(true)
    }
    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    let editEl;

    if(!isEditing){
        editEl = <button onClick={startEditingHandler}>Add New Expense</button>
    } else {
        editEl = <ExpenseForm clickStopHandler={stopEditingHandler} onSaveExpenseData={onSaveExpenseDataHandler} />
    }

    return (
        <div className="new-expense">
            {/* use custom prop to call function that will handle data being sent upward from ExpenseForm */}
            {/* <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} /> */}
            {editEl}
        </div>
    )
};

export default NewExpense;