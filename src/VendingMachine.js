import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./VendingMachine.css"

class VendingMachine extends Component {
  render() {
    return (
      <div className="VendingMachine">
        <div className="VendingMachine-items">
            <p><Link to="/coke">Coke</Link></p>
            <p><Link to="/chips">Chips</Link></p>
            <p><Link to="/sardines">Sardines</Link></p>
        </div>
      </div>
    );
  }
}

export default VendingMachine;