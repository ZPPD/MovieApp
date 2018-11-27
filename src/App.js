import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
// import HomeHeader from "./components/homeHeader/HomeHeader";
// import HomeTable from "./components/homeTable/HomeTable";
import { fetchConfigData } from "./actions/configData";

import Home from "./components/home/Home";
import SearchResults from "./components/searchResults/SearchResults";
import NotFound from "./components/notFound/NotFound";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

class App extends Component {
  // componentWillMount() {
  //   this.props.fetchConfigData(
  //     `https://api.themoviedb.org/3/configuration?api_key=${this.props.apiKey}`
  //   );
  // }
  render() {
    return (
      <Provider store={store}>
        {/* <Provider> */}
        <Router>
          <div className="App">
            {/* <HomeHeader />
            <HomeTable /> */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/search-results/:id"
                component={SearchResults}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
// @To-Do remove config of not using it

// const mapStateToProps = state => ({
//   apiKey: state.configData.apiKey
// });
// const mapDispatchToProps = dispatch => ({
//   fetchConfigData: url => dispatch(fetchConfigData(url))
// });
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);
