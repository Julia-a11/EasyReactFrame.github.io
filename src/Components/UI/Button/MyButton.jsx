import React from 'react';
import classes from './button.module.scss'

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myButton}>
            {children}
        </button>
    );
};

export default MyButton;