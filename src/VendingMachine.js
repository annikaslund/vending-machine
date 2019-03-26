import React, { Component } from 'react';
import { Link } from "react-router-dom";

class VendingMachine extends Component {
  render() {
    return (
      <div className="VendingMachine">
        <p><Link to="/coke">Coke</Link></p>
        <p><Link to="/chips">Chips</Link></p>
        <p><Link to="/sardines">Sardines</Link></p>
      </div>
    );
  }
}

export default VendingMachine;