import React, { Component } from "react";
import { connect } from "react-redux";
//import { Link, Route, Switch } from 'react-router-dom';
import { fetchGithubRepoStart } from "../../store/actions/index";
import "./App.css";

import Map from "../../components/Map/Map";
import List from "../../components/List/List";

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
    this.props.onFetchGithubRepoStart();
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
        <List />
        <Map
          onViewportChange={this.onViewportChange}
          {...this.state.viewport}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchGithubRepoStart: user =>
      dispatch(fetchGithubRepoStart({ user: "test" }))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
