import React, { Component } from "react";
import HomeHeader from "./components/HomeHeader/HomeHeader";
import HomeTable from "./components/HomeTable/HomeTable";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeHeader />
        <HomeTable />
      </div>
    );
  }
}

export default App;
