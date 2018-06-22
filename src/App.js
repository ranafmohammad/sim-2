import React, { Component } from "react";
import { Link } from "react-router-dom";
import store from './redux/store'

import routes from "./routes";
// import Dashboard from "./components/Dashboard/Dashboard";
// import Wizard from "./components/Wizard/Wizard";
// import Header from "./components/Header/Header";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      //<Router>
      <div className="App">
        {/* <Link to="/Dashboard">All New Properties</Link> */}
        {/* <Link to="/Wizard">Add New Properties</Link> */}
        <header />
        {routes}
      </div>
      // {routes}
      //</Router>
    );
  }
}

export default App;
