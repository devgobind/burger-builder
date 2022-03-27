import React, { Component } from "react";
import Auxillary from "../Auxillary";
import Modal from "../../components/UI/Modal/Modal";
// import axios from "../../axios-order";

const withErrorHandler = ( WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: false,
            message: ''
        }

       componentWillMount() {
           this.reqinterceptors = axios.interceptors.request.use(req => {
               this.setState({error: null});
               return req;
           })
           this.resinterceptors = axios.interceptors.response.use(res =>res, err => {
            this.setState({error: true, message: err.message})
            });
       }

       componentWillUnmount () {
           console.log('Unmounted', this.reqinterceptors, this.resinterceptors);
           axios.interceptors.request.eject(this.reqinterceptors);
           axios.interceptors.response.eject(this.resinterceptors);
       }

       errorConfirmed = () => {
           this.setState({error: false});
       }
        render() {
            return (
                <Auxillary>
                    <Modal show = {this.state.error} modalClosed = {this.errorConfirmed}>
                       {this.state.error ? this.state.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Auxillary>
            );
        }
    }
}

export default withErrorHandler;