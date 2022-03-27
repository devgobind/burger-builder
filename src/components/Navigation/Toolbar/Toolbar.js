import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import MenuToggler from "../MenuToggler/MenuToggler";
const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <MenuToggler toggle={props.opened}/>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.Desktoponly}>
            <NavigationItems />   
        </nav>
    </header>
);

export default Toolbar;
