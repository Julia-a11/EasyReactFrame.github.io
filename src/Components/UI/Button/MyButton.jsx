import React from 'react';
import classes from './button.module.scss'

const MyButton = ({children, ...props}) => {
    return (
        <div {...props} className={classes.myButton}>
            {children}
        </div>
    );
};

export default MyButton;