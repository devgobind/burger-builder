import React, { Component } from "react";
import Auxillary from "../../hoc/Auxillary";
import classes from './Layout.module.css'
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer : false});
    }

    sideDrawerOpenedHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }
    render() {
        return (
        <Auxillary>
            <Toolbar opened={this.sideDrawerOpenedHandler}/>
            <SideDrawer open={this.state.showSideDrawer} closed = {this.sideDrawerClosedHandler}/>
            <main className={classes.Content}>{this.props.children}</main>
        </Auxillary>);  
    }
}

export default Layout;
