import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
//import { Link, Route, Switch } from 'react-router-dom';
import {
  fetchGithubRepoStart,
  onOpenModal,
  onCloseModal,
  removeUser
} from "../../store/actions/index";

import "./App.module.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-toastify/dist/ReactToastify.css";

import Map from "../../components/Map/Map";
import List from "../../components/List/List";
import Modal from "../../components/Modal/Modal";
import Backdrop from "../../components/Backdrop/Backdrop";

class App extends Component {
  state = {
    viewport: {
      width: "100vw",
      height: "100vh",
      latitude: -28.652653,
      longitude: -55.996042,
      zoom: 10
    },
    searchText: ""
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.updateMapDimensions);
  };

  updateMapDimensions = () => {
    const viewport = Object.assign({}, this.state.viewport);
    viewport.width = "100vw";
    viewport.height = "100vh";

    this.setState({ viewport });
  };

  onViewportChange = viewport => {
    this.setState({ viewport });
  };

  onMapClickHandler = event => {
    this.setState({ searchText: "" });
    this.props.onOpenModal(event.lngLat);
  };

  onChangeSearchTextHandler = event => {
    this.setState({ searchText: event.target.value });
  };

  onFetchFormSubmitHandler = event => {
    event.preventDefault();
    this.props.onFetchGithubRepoStart(
      this.state.searchText,
      this.props.selectedCoords
    );
  };

  onRemoveUserHandler = user => {
    this.props.onRemoveUser(user);
  };

  onFocusUserHandler = user => {
    let { latitude, longitude } = this.state.viewport;
    latitude = user.latitude;
    longitude = user.longitude;

    this.setState({
      viewport: { ...this.state.viewport, latitude, longitude }
    });
  };

  render() {
    return (
      <div>
        {this.props.modalIsOpened ? (
          <div>
            <Backdrop onCloseModal={this.props.onCloseModal} />
            <Modal
              loading={this.props.loading}
              onSubmit={this.onFetchFormSubmitHandler}
              onChangeSearchTextHandler={this.onChangeSearchTextHandler}
              searchText={this.state.searchText}
              onCloseModal={this.props.onCloseModal}
            />
          </div>
        ) : null}
        <List
          onRemoveUser={this.onRemoveUserHandler}
          onFocusUserHandler={this.onFocusUserHandler}
          users={this.props.users}
        />
        <Map
          users={this.props.users}
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
    users: state.users,
    loading: state.loading,
    modalIsOpened: state.modalIsOpened,
    selectedCoords: state.selectedCoords
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchGithubRepoStart: (userName, coords) =>
      dispatch(fetchGithubRepoStart(userName, coords)),
    onOpenModal: coords => dispatch(onOpenModal(coords)),
    onCloseModal: () => dispatch(onCloseModal()),
    onRemoveUser: user => dispatch(removeUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
