import React from 'react';
import './Card.css'

// Reuseable component with card specific css
const Card = (props) => {
    const classes = `card ${props.className}`
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Card;