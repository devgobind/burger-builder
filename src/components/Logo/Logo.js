import React from "react";
import BurgerLogo from './../../assets/images/burger-logo.png'
import classes from './Logo.module.css'
const Logo = (props) => (
    <div className={classes.Logo}>
        <img src={BurgerLogo} alt='My Burger Logo'/>
    </div>
);

export default Logo;