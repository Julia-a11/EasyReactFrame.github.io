import React from 'react';
import classes from './styles/app.scss'
import logo from '/src/img/irlixLogo.png'

const Header = () => {

    return (
        <header className={classes.header}>
            <div className={classes.header__img}>
                <img src={logo} alt="logo"/>
            </div>
        </header>
    );
};

export default Header;