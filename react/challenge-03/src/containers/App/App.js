import React, { Component } from "react";
//import { Link, Route, Switch } from 'react-router-dom';
import "./App.css";
import Map from "../../components/Map/Map";

class App extends Component {
  state = {
    viewport: {
      width: "100vw",
      height: "100vh",
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.updateMapDimensions);
  };

  updateMapDimensions = () => {
    const viewport = this.state.viewport;
    viewport.width = "100vw";
    viewport.height = "100vh";

    this.setState({ viewport });
  };

  onViewportChange = viewport => {
    this.setState({ viewport });
  };

  render() {
    return (
      <div>
        <Map
          onViewportChange={this.onViewportChange}
          {...this.state.viewport}
        />
      </div>
    );
  }
}

export default App;
