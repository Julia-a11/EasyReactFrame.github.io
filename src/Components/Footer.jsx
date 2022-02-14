import React from 'react';
import classes from './styles/app.scss'
import logo from "../img/irlixLogo.png";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.footer__img}>
                <img src={logo} alt="logo"/>
            </div>
        </footer>
    );
};

export default Footer;