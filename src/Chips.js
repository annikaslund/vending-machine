import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Chips extends Component {
  render() {
    return (
      <div className="Chips">
            <p>Chips!</p>
            <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Chips;