import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeHeader from "./components/homeHeader/HomeHeader";
import HomeTable from "./components/homeTable/HomeTable";

import { Provider } from "react-redux";
import { store } from "./store";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <HomeHeader />
            <HomeTable />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
