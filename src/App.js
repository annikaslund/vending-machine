import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import VendingMachine from './VendingMachine';
import NavBar from './NavBar';
import Chips from "./Chips";
import Coke from "./Coke";
import Sardines from "./Sardines";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" render={() => <VendingMachine />} />
            <Route exact path="/coke" render={() => <Coke />} />
            <Route exact path="/chips" render={() => <Chips />} />
            <Route exact path="/sardines" render={() => <Sardines />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
