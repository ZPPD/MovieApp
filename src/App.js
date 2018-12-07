import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/home/Home";
import SearchResults from "./components/searchResults/SearchResults";
import ItemDetails from "./components/movieDetails/ItemDetails";
import Discover from "./components/discover/Discover";
import NotFound from "./components/notFound/NotFound";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/search-results/:id"
                component={SearchResults}
              />
              <Route exact path="/details/:type/:id" component={ItemDetails} />
              <Route exact path="/discover" component={Discover} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
