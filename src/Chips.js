import React, { Component } from 'react';
import { Link } from "react-router-dom";

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