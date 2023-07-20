import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {
    // most common pattern to pass props upward
    // create custom prop and function on component that handles data being passed upward
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        
        // call custom prop from parent component (App.js) and pass the data
        props.onAddExpense(expenseData)
    };

    return (
        <div className="new-expense">
            {/* use custom prop to call function that will handle data being sent upward from ExpenseForm */}
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
        </div>
    )
};

export default NewExpense;