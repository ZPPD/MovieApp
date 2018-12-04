import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import getDiscover from "../../actions/discover";

import HomeHeader from "../homeHeader/HomeHeader";

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
  };
  render() {
    return (
      <div>
        <HomeHeader />
        <header className="discover-header">
          <h1 className="discover-title">Discover New Movies</h1>
          <form
            className="discover-form"
            method="GET"
            action="/"
            onChange={e => {
              e.preventDefault();
              this.handleDiscover();
            }}
          >
            <div className="form-container">
              <input
                className="discover-input"
                onChange={e => this.setState({ year: e.target.value })}
                type="number"
                name="year"
              />
              <select
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

              <select
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

              <input
                className="discover-input"
                onChange={e => this.setState({ voteAverage: e.target.value })}
                type="number"
                name="vote_average"
                placeHolder="Average Rating"
              />
              <input
                className="discover-input"
                onChange={e => this.setState({ withKeywords: e.target.value })}
                type="text"
                name="with_keywords"
                placeHolder="Keywords"
              />
            </div>
          </form>
        </header>
        <main className="discover-main">
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
                  <h2 className="searchMovie-title">
                    {item.media_type === "tv" ? item.name : item.title}
                  </h2>
                  <h3 className="media-type">{item.media_type}</h3>
                  <p>
                    <i class="fas fa-star" />
                    {`${item.vote_average}`}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <h2>No results found</h2>
          )}
        </main>
      </div>
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
