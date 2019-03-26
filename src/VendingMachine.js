import React, { Component } from 'react';
import NavBar from './NavBar';
import Chips from "./Chips";
import Coke from "./Coke";
import Sardines from "./Sardines";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class VendingMachine extends Component {
  render() {
    return (
      <div className="VendingMachine">
      <BrowserRouter>
            <NavBar />
        <Switch>
            <Route exact path="/coke" render={() => <Coke />}/>
            <Route exact path="/chips" render={() => <Chips />}/>
            <Route exact path="/sardines" render={() => <Sardines />}/>
        </Switch>
        
      </BrowserRouter>

      </div>
    );
  }
}

export default VendingMachine;