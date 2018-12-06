import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";

import searchMovies from "../../actions/searchMovies";
import HomeHeader from "../homeHeader/HomeHeader";
import Footer from "../footer/Footer";

import "./SearchResults.css";

class SearchResults extends Component {
  state = {
    searchOutput: null,
    page: 1
  };

  componentDidMount() {
    this.searchResultsMovies();
    const config = {
      origin: "top",
      duration: 2000,
      delay: 100,
      distance: "100px",
      scale: 0.85,
      easing: "ease"
    };
    ScrollReveal().reveal(this.refs.scroll, config);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      const apiKey = process.env.REACT_APP_API_KEY;
      this.props.searchMovies(
        `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${
          nextProps.match.params.id
        }&page=${this.state.page}&include_adult=false`
      );
    }
  }
  searchResultsMovies() {
    const apiKey = process.env.REACT_APP_API_KEY;
    console.log(this.props.match.params.id);
    this.props.searchMovies(
      `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${
        this.props.match.params.id
      }&page=${this.state.page}&include_adult=false`
    );
  }

  // handle pagination
  handlePagination = pageTransition => {
    if (this.state.page === 1 && pageTransition === "-") {
      this.setState({ page: 1 });
    } else if (pageTransition === "+") {
      this.setState({ page: this.state.page + 1 });
    } else if (pageTransition === "-") {
      this.setState({ page: this.state.page - 1 });
    }
    // call the fetch function
    const apiKey = process.env.REACT_APP_API_KEY;
    this.props.searchMovies(
      `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${
        this.props.match.params.id
      }&page=${this.state.page}&include_adult=false`
    );
  };

  render() {
    return (
      <React.Fragment>
        <HomeHeader />
        <main className="main">
          {/* {console.log(this.props.searchResults)}{" "} */}
          <section className="searchResults">
            <h1 className="searchHeader" ref="scroll">
              Search Results for {this.props.match.params.id}
            </h1>
            <hr className="search-divider" />
            <section className="movieDiv">
              {this.props.searchResults.length > 0
                ? this.props.searchResults.map(item => (
                    <Link
                      key={item.id}
                      to={`/details/${item.media_type}/${item.id}`}
                    >
                      <div className="card-movie">
                        <img
                          className="searchMovie-img"
                          src={`https://image.tmdb.org/t/p/original/${
                            item.poster_path
                          }`}
                          alt={
                            item.media_type === "tv" ? item.name : item.title
                          }
                        />
                        <h2 className="searchMovie-title">
                          {item.media_type === "tv" ? item.name : item.title}
                        </h2>
                        <h3 className="media-type">{item.media_type}</h3>
                      </div>
                    </Link>
                  ))
                : null
              // <h1 className="alert">Please enter a search word or phrase</h1>
              }
            </section>
          </section>
          <section className="pagination">
            <button
              className="prev-page page"
              onClick={() => this.handlePagination("-")}
            >
              <i className="fas fa-arrow-circle-left" /> Previous
            </button>
            <button
              className="next-page page"
              onClick={() => this.handlePagination("+")}
            >
              Next <i className="fas fa-arrow-circle-right" />
            </button>
          </section>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  searchResults: state.searchMovies.output
});

const mapDispatchToProps = dispatch => ({
  searchMovies: url => dispatch(searchMovies(url))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
