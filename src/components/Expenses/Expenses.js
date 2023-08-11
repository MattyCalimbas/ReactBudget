import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

// Using array destructuring to seperate props from props.expenses
const Expenses = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const [filterInfoText, setFilterInfoText] = useState('2019, 2021, & 2022')

    // Experiment: Derived State Feature
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
        if(selectedYear === '2019') {
            setFilterInfoText('2020, 2021 & 2022')
        } else if (selectedYear === '2020' ){
            setFilterInfoText('2019, 2021 & 2022')
        } else if (selectedYear === '2021'){
            setFilterInfoText('2019, 2020 & 2022')
        } else {
            setFilterInfoText('2019, 2020 & 2021')
        }
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                {/* Experiment: Derived State Feature */}
                <p>Data for years {filterInfoText} is hidden.</p>
                <ExpenseItem
                    title={expenses[0].title}
                    amount={expenses[0].amount}
                    date={expenses[0].date}>
                </ExpenseItem>
                <ExpenseItem
                    title={expenses[1].title}
                    amount={expenses[1].amount}
                    date={expenses[1].date}>
                </ExpenseItem>
                <ExpenseItem
                    title={expenses[2].title}
                    amount={expenses[2].amount}
                    date={expenses[2].date}>
                </ExpenseItem>
                <ExpenseItem
                    title={expenses[3].title}
                    amount={expenses[3].amount}
                    date={expenses[3].date}>
                </ExpenseItem>
            </Card>
        </div>
    )
}

export default Expenses;