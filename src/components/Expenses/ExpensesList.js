import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

const ExpensesList = (props) => {

    // Final Variation of Conditional Rendering: Function sits outside of return, hold JSX within variable(s) and call when appropriate
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found No Expenses.</h2>
    }

    return (
        <ul className="expenses-list">
            {props.items.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)}
        </ul>
    )
}

export default ExpensesList;