import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

class NavBar extends Component {
    render(){
        const activeStyle = {
            fontWeight: "bold",
            color: "tomato"
        }
        return(
            <nav>
                <p><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></p>
                <p><NavLink exact to="/coke" activeStyle={activeStyle}>Coke</NavLink></p>
                <p><NavLink exact to="/chips" activeStyle={activeStyle}>Chips</NavLink></p>
                <p><NavLink exact to="/sardines" activeStyle={activeStyle}>Sardines</NavLink></p>
            </nav>
        );
    }
}

export default NavBar;