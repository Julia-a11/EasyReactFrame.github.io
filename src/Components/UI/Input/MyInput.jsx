import React  from 'react';
import classes from './input.module.scss'

const MyInput = (props) => {
    return (
        <div className={classes.myInput}>
            <input {...props} />
        </div>
    );
};

export default MyInput;