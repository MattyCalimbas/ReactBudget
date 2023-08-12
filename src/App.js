import React, {useState} from 'react'
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense"

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2023, 1, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2023, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2023, 3, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2023, 5, 12),
  },
];

const App = () => {
  // References item array above and sets it as state variable
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  // most common pattern to pass props upward
  // create custom prop and function on component that handles data being passed upward
  // data is now argument to setExpenses useState function to dynamically add new item to list
  const addExpenseHandler = (expense) => {
    setExpenses(prevExpense => [expense, ...prevExpense])
  }

  return (
    <div>
      {/* use custom prop to call function that will handle data being sent upward from NewExpense */}
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
