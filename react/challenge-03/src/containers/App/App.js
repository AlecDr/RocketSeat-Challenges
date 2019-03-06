import React, { Component, lazy, Suspense } from "react";
//import { Link, Route, Switch } from 'react-router-dom';
import "./App.css";

import logo from "../../assets/images/react-logo.png";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Start building something amazing!</h1>
        <img src={logo} />
      </div>
    );
  }
}

export default App;
