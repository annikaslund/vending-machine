import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Coke extends Component {
  render() {
    return (
      <div className="Coke">
            <p>Coke!</p>
            <Link to="/">Go Back</Link>
      </div>
    );
  }
}

export default Coke;