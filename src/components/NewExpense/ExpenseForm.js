import React from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {
 return (
    <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text"/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="O.O1" step="0.01"/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="01-01-2023" max="12-31-2024"/>
            </div>
        </div>
        <div className="new-expense__action">
            <button type="submit">Add Expense</button>
        </div>
    </form>
 )
}

export default ExpenseForm;