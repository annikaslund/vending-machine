import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Sardines.css";

class Sardines extends Component {
  render() {
    return (
      <div className="Sardines">
            <p>Sardines eat you!</p>
            <Link to="/">Go Back</Link>
      </div>
    );
  }
}

export default Sardines;