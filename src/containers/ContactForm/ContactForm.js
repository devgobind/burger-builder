import React, { Component } from "react";
import Button from "../../components/UI/Button/Button";
import classes from './ContactForm.module.css'
class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalcode: ''
        }
    }
    render() {
        return(
            <div className={classes.ContactForm}>
                <h4>Enter your contact details</h4>
                <form>
                    <input className={classes.Input} type='text' name="name" placeholder="Your Name" />
                    <input type='email' name="email" placeholder="Your email" />
                    <input type='text' name="street" placeholder="Street" />
                    <input type='text' name="postal" placeholder="Postal Code" />
                    <Button btnType='Success'>ORDER</Button>
                </form>
            </div>
        )
    }
}

export default ContactForm;