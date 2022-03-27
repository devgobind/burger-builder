import React from "react";
import Button from "../../UI/Button/Button";
import Auxillary from "../../../hoc/Auxillary";
import { Link } from "react-router-dom";

const OrderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
        return (
            <li key={igKey}>
                <span style={{ textTransform: "capitalize" }}>{igKey}:</span>
                {props.ingredients[igKey]}
            </li>
        );
    });

    return (
        <Auxillary>
            <h3>Your Order</h3>
            <p>Delicious Burger</p>
            <ul>{ingredientsSummary}</ul>
            <strong>
                <span>Total Price:{props.price.toFixed(2)}</span>
            </strong>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>
                CANCEL
            </Button>
            <Link to="/checkout" state={{from: {ingredients: props.ingredients}}} >
                <Button btnType="Success" clicked={props.purchaseContinued}>
                    CONTINUE
                </Button>
            </Link>
        </Auxillary>
    );
};

export default OrderSummary;
