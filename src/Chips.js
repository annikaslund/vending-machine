import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Chips.css";

class Chips extends Component {
  render() {
    return (
      <div className="Chips">
            <p>Chips!</p>
            <Link to="/">Go Back</Link>
      </div>
    );
  }
}

export default Chips;