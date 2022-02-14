import React from 'react';
import classes from "./styles/app.scss";

const Welcome = () => {
    return (
        <div className={classes.welcome}>
            <div className={classes.welcome__title}>
                <h1>Приветствую!</h1>
            </div>
            <div className={classes.welcome__text}>
                <p>Давай обновим список и начем обучение</p>
            </div>
        </div>
    );
};

export default Welcome;