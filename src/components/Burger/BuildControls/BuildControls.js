import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from './BuildControls.module.css'
const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'}
];

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        <p><strong>Current Price: {props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label} 
            added={() => props.ingredientsAdded(ctrl.type)}
            removed={()=> props.ingredientsRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}/>
        ))}
        <button className={classes.OrderButton} 
        disabled={!props.purchasable} 
        onClick={props.order}>ORDER NOW
        </button>
    </div>
);

export default BuildControls;