import React from "react";
import classes from './MenuToggler.module.css'
const MenuToggler = (props) => (
    <div className={classes.MenuToggler} onClick={props.toggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default MenuToggler;