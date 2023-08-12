import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
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

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {/* Experiment: Derived State Feature */}
                {/* <p>Data for years {filterInfoText} is hidden.</p> */}
                {expenses.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />)}
            </Card>
        </div>
    )
}

export default Expenses;