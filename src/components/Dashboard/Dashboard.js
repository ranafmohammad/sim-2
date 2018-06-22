import React, { Component } from "react";
import axios from "axios";
import House from "../House/House";


// import { HashRouter as Router, Link } from 'react-router-dom';
// import {Provider} from 'react-redux';

// import routes from './route'

class Dashboard extends Component {
  constructor() {
    super();
    // this.state () {
    //   houses: []
    // }
  }
  componentDidMount() {
    axios.get("/api/houses").then(response => {
      this.setState("houses", response.data);
    });
  }

  render() {
    return (
      <div>
        Dashboard
        <button>Add New Property</button>
      </div>
    );
  }
}

export default Dashboard;
