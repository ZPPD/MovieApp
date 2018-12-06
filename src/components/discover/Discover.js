import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";

import getDiscover from "../../actions/discover";

import HomeHeader from "../homeHeader/HomeHeader";
import Footer from "../footer/Footer";

import "./Discover.css";

class Discover extends Component {
  state = {
    sortBy: "popularity.desc",
    voteAverage: null,
    withGenres: null,
    withKeywords: null,
    year: 2018,
    page: 1
  };

  componentDidMount() {
    this.handleDiscover();
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

  //handle discover
  handleDiscover = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    this.props.getDiscover(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=${
        this.state.sortBy
      }&include_adult=false&include_video=false&page=${this.state.page}&${
        this.state.voteAverage
          ? "vote_average.gte=" + this.state.voteAverage + "&"
          : ""
      }${
        this.state.withGenres
          ? "with_genres=" + this.state.withGenres + "&"
          : ""
      }${
        this.state.withKeywords
          ? "with_keywords=" + this.state.withKeywords + "&"
          : ""
      }${this.state.year}`
    );
  };

  // handle pagination
  handlePagination = pageTransition => {
    if (this.state.page === 1 && pageTransition === "-") {
      this.setState({ page: 1 });
    } else if (pageTransition === "+") {
      this.setState({ page: this.state.page + 1 });
    } else if (pageTransition === "-") {
      this.setState({ page: this.state.page - 1 });
    }
    this.handleDiscover();
  };
  render() {
    return (
      <React.Fragment>
        <HomeHeader />
        <header className="discover-header">
          <h1 className="discover-title-header" ref="scroll">
            Discover New Movies
          </h1>
          <div className="overlay" />
          <form className="discover-form" method="GET" action="/">
            <div className="form-container">
              <span className="discover-span">
                <label htmlFor="year" className="discover-label">
                  Year
                </label>
                <input
                  id="year"
                  className="discover-input"
                  onChange={e => this.setState({ year: e.target.value })}
                  type="number"
                  name="year"
                  placeholder="2018"
                />
              </span>

              <span className="discover-span">
                <label htmlFor="sortBy" className="discover-label">
                  Sort By
                </label>
                <select
                  id="sortBy"
                  className="discover-select"
                  onChange={e => this.setState({ sortBy: e.target.value })}
                  name="sort-by"
                >
                  <option className="discover-option" value="popularity.desc">
                    Popularity Descending
                  </option>
                  <option className="discover-option" value="popularity.asc">
                    Popularity Ascending
                  </option>
                  <option className="discover-option" value="release_date.desc">
                    Release Date Descending
                  </option>
                  <option className="discover-option" value="release_date.asc">
                    Release Date Ascending
                  </option>
                  <option className="discover-option" value="revenue.desc">
                    Revenue Descending
                  </option>
                  <option className="discover-option" value="revenue.asc">
                    Revenue Ascending
                  </option>
                  <option className="discover-option" value="vote_average.desc">
                    Vote Average Descending
                  </option>
                  <option className="discover-option" value="vote_average.asc">
                    Vote Average Ascending
                  </option>
                </select>
              </span>

              <span className="discover-span">
                <label htmlFor="genres" className="discover-label">
                  Genres
                </label>
                <select
                  id="genres"
                  className="discover-select"
                  onChange={e => this.setState({ withGenres: e.target.value })}
                  name="with_genres"
                >
                  <option className="discover-option" value="28">
                    Action
                  </option>
                  <option className="discover-option" value="12">
                    Adventure
                  </option>
                  <option className="discover-option" value="16">
                    Animation
                  </option>
                  <option className="discover-option" value="35">
                    Comedy
                  </option>
                  <option className="discover-option" value="80">
                    Crime{" "}
                  </option>
                  <option className="discover-option" value="99">
                    Documentary
                  </option>
                  <option className="discover-option" value="18">
                    Drama
                  </option>
                  <option className="discover-option" value="10751">
                    Family
                  </option>
                  <option className="discover-option" value="14">
                    Fantasy
                  </option>
                  <option className="discover-option" value="36">
                    Horror
                  </option>
                  <option className="discover-option" value="10749">
                    Music
                  </option>
                  <option className="discover-option" value="9648">
                    Mystery
                  </option>
                  <option className="discover-option" value="10749">
                    Romance
                  </option>
                  <option className="discover-option" value="878">
                    Science Fiction
                  </option>
                  <option className="discover-option" value="10770">
                    TV Movie
                  </option>
                  <option className="discover-option" value="53">
                    Thriller
                  </option>
                  <option className="discover-option" value="10752">
                    War
                  </option>
                  <option className="discover-option" value="37">
                    Western
                  </option>
                </select>
              </span>

              <span className="discover-span">
                <label htmlFor="vote" className="discover-label">
                  Average Vote
                </label>
                <input
                  id="vote"
                  className="discover-input"
                  onChange={e => this.setState({ voteAverage: e.target.value })}
                  type="number"
                  name="vote_average"
                  placeholder="Average Rating"
                />
              </span>

              <span className="discover-span">
                <label htmlFor="keywords" className="discover-label">
                  Keywords
                </label>
                <input
                  id="keywords"
                  className="discover-input"
                  onChange={e =>
                    this.setState({ withKeywords: e.target.value })
                  }
                  type="text"
                  name="with_keywords"
                  placeholder="Keywords"
                />
              </span>
            </div>
            <button
              className="discover-button"
              onClick={e => {
                e.preventDefault();
                this.handleDiscover();
              }}
            >
              Search
            </button>
          </form>
        </header>
        <main className="main">
          <section className="discover-output">
            {this.props.discover.length > 0 ? (
              this.props.discover.map(item => (
                <Link
                  key={item.id}
                  to={`/details/${item.name ? "tv" : "movie"}/${item.id}`}
                >
                  <div className="card-movie">
                    <img
                      className="searchMovie-img"
                      src={`https://image.tmdb.org/t/p/original/${
                        item.poster_path
                      }`}
                      alt={item.media_type === "tv" ? item.name : item.title}
                    />
                    <h2 className="discover-title">
                      {item.media_type === "tv" ? item.name : item.title}
                    </h2>
                    <p>{item.release_date}</p>
                    <p>
                      <i className="fas fa-star discover-vote" />{" "}
                      {`${item.vote_average}`}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <h2>No results found</h2>
            )}
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
  discover: state.getDiscover.output
});

const mapDispatchToProps = dispatch => ({
  getDiscover: url => dispatch(getDiscover(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
