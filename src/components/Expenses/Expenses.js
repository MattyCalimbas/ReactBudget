import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

// Using array destructuring to seperate props from props.expenses
const Expenses = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    // Depricated function for setting up a state that is dependant on a value of another state variable
    // const [filterInfoText, setFilterInfoText] = useState('2019, 2021 & 2022')

    // computed value derived from the value of the above state 
    // let filterInfoText = '2019,2021, & 2022'

    // Experiment: Derived State Feature
    // State is depenedant upon filteredYear variable so rather than updating a seperate state variables, we simply compute the value of the filteredYear variable

    // if (filteredYear === '2019') {
    //     filterInfoText = '2020, 2021 & 2022';
    // } else if (filteredYear === '2021') {
    //     filterInfoText = '2019, 2020 & 2022';
    // } else {
    //     filterInfoText = '2019, 2020 & 2021';
    // }

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    // filter functions creates new array from call back function. filter returns true or false according to given parameter.  Any items that return true are kept in returned array
    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })


    return (
        <div>
            <Card className="expenses">
                {/* Experiment: Derived State Feature */}
                {/* <p>Data for years {filterInfoText} is hidden.</p> */}

                {/* Conditional content rendering: Ternary expression for years without data, condition to ? then logic for if condition is met, then a colon representing for the else case     */}
                {/* {filteredExpenses.length === 0 ? <p> No Expenses Found </p> : filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)} */}

                {/* Restructure of Ternary conditional rendering; using AND operator instead. If first condition in front of AND operator is true, value after AND operator is returned */}
                {/* {filteredExpenses.length === 0 && <p> No Expenses Found </p>}
                {filteredExpenses.length > 0 && filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)} */}

                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {/* Variable holding conditional JSX content is called and rendered below resulting in leaner JSX snippet */}
                {/* {expensesContent} */}

                {/* Refactor of expensesContent to new ExpenseList component */}
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;