import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import { Link, Route, Switch } from 'react-router-dom';
import {
  fetchGithubRepoStart,
  onOpenModal,
  onCloseModal
} from "../../store/actions/index";
import "./App.module.css";

import Map from "../../components/Map/Map";
import List from "../../components/List/List";
import Modal from "../../components/Modal/Modal";
import Backdrop from "../../components/Backdrop/Backdrop";

class App extends Component {
  state = {
    viewport: {
      width: "100vw",
      height: "100vh",
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    },
    searchText: ""
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

  onMapClickHandler = event => {
    console.log(event);
    // this.setState({
    //   viewport: {
    //     ...this.state.viewport,
    //     latitude: event.lngLat[1],
    //     longitude: event.lngLat[0],
    //     zoom: 8
    //   }
    // });
    this.props.onOpenModal();
    this.setState({ searchText: "" });
  };

  onChangeSearchTextHandler = event => {
    this.setState({ searchText: event.target.value });
  };

  render() {
    return (
      <div>
        {this.props.modalIsOpened ? (
          <div>
            <Backdrop />{" "}
            <Modal
              onChangeSearchTextHandler={this.onChangeSearchTextHandler}
              searchText={this.state.searchText}
              onFetchGithubRepoStart={this.props.onFetchGithubRepoStart}
              onCloseModal={this.props.onCloseModal}
            />{" "}
          </div>
        ) : null}
        <List />
        <Map
          onMapClickHandler={this.onMapClickHandler}
          onViewportChange={this.onViewportChange}
          {...this.state.viewport}
        />
        <ToastContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    modalIsOpened: state.modalIsOpened
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchGithubRepoStart: (userName, coords) =>
      dispatch(fetchGithubRepoStart(userName, coords)),
    onOpenModal: () => dispatch(onOpenModal()),
    onCloseModal: () => dispatch(onCloseModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
