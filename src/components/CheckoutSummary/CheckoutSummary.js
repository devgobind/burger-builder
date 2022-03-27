import React from "react";
import { useLocation, useNavigate, } from "react-router";
import Burger from "../Burger/Burger";
import Button from "../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";
const CheckoutSummary = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    let contact_form = false;
    const checkoutForm  = () => {
        contact_form = true
    }
    return (
        <div className={classes.CheckoutSummary}>
            <h1> We hope it tastes well</h1>
            <div style={{ width: "100%", margin: "auto" }}>
                <Burger ingredients={location.state.from.ingredients} />
            </div>
            <Button btnType="Danger" clicked={() => navigate(-1)}>
                CANCEL
            </Button>
            <Button
                btnType="Success"
                clicked={() => navigate("/checkout/contact-info")}
            >
                CONTINUE
            </Button>
        </div>
    );
};

export default CheckoutSummary;
