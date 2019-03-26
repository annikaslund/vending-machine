import React, { Component } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

class NavBar extends Component {
    render(){
        return(
            <nav>
                <p><NavLink to="/Coke">Coke</NavLink></p>
                <p><NavLink to="/Chips">Chips</NavLink></p>
                <p><NavLink to="/Sardines">Sardines</NavLink></p>
            </nav>
        );
    }
}

export default NavBar;