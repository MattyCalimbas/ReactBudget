import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    // example of useState hook with array destructuring.  
    // hooks can only be called directly within component functions
    // Returns an array of two elements.  
    // First element is state value and second element is a function that alters state value. 
    // const [title, setTitle] = useState(props.title);
    


    return (
        // Sending expense-item class to Card component, can catch attributes with props object
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;