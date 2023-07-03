import React, { useState }from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    // example of useState hook with array destructuring.  
    // hooks can only be called directly within component functions
    // Returns an array of two elements.  
    // First element is state value and second element is a function that alters state value. 
    const [title, setTitle] = useState(props.title);
    
    const clickHandler = () => {
        setTitle('Updated!')
        // console.log registeres first in console reflecting initial state.
        // setTitle hook isn't called immediately but rather "scheduled"
        // useState cycle: 1. register state with useState. Two values are returned, the value itself and the updating function. 2. Call updating function to change value 3. use first element to output state element.
        // anytime state changes component reloads
        console.log(title)
    };

    return (
        // Sending expense-item class to Card component, can catch attributes with props object
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            {/* onClick calls clickHandler; replaces addEventListener functionality */}
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;