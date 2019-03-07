import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import { reducer } from "./store/reducers/map.js";
import { watchMap } from "./store/sagas/index";

import App from "./containers/App/App";

const sagaMiddleware = createSagaMiddleware();
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

let store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    reduxDevTools
  )
);

sagaMiddleware.run(watchMap);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
