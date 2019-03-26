import React, { Component } from 'react';
import Snack from './Snack';
import { BrowserRouter, Route, Switch } from "react-router-dom";

class VendingMachine extends Component {
  render() {
    return (
      <div className="VendingMachine">
        <Snack />
      </div>
    );
  }
}

export default VendingMachine;