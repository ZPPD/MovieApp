import React, { Component } from "react";
import { connect } from "react-redux";

import fetchMoviesNowPlaying from "../../actions/movieActions/getMoviesNowPlaying";

import "./HomeTable.css";

class HomeTable extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false
    };
  }

  onShowClick = e => {
    e.preventDefault();
    this.setState({ isActive: !this.state.isActive });
    let btns = e.target.className;
    // activeClass += " active";
    // if (!e.target.classList.contains("active")) {
    //   e.target.classList.add("active");
    // } else {
    //   e.target.;
    // }

    // console.log(activeClass);
    // activeClass += " active";

    // let className = this.state.className;
    // if (className !== "btns active") {
    //   className = className + " active";
    //   this.setState({ className });
    //   console.log(className);
    // } else {
    //   return false;
    // }
    const type = e.target.dataset.type;
    //console.log(type);
    const getData = e.target.dataset.get;
    //console.log(getData);
    const apiKey = process.env.REACT_APP_API_KEY;
    this.props.fetchMoviesNowPlaying(
      `https://api.themoviedb.org/3/${type}/${getData}?api_key=${apiKey}&language=en-US&page=1`
    );
  };

  render() {
    // let className = "btns";
    // if (this.state.isActive) {
    //   className += " active";
    // }
    return (
      <section className="table">
        <div className="grid-table-top">
          <h2>Movies</h2>
          <h2>TV</h2>
        </div>
        <div className="grid-table-bottom">
          <div className="table-flex">
            <button
              name="getHome"
              type="button"
              className="btns"
              data-get="now_playing"
              data-type="movie"
              onClick={this.onShowClick}
            >
              Now Playing
            </button>
            <button
              name="getHome"
              type="button"
              className="btns"
              data-get="popular"
              data-type="movie"
              onClick={this.onShowClick}
            >
              Popular
            </button>
            <button
              name="getHome"
              type="button"
              className="btns"
              data-get="upcoming"
              data-type="movie"
              onClick={this.onCllick}
            >
              Upcoming
            </button>
            <button
              name="getHome"
              type="button"
              className="btns"
              data-get="top_rated"
              data-type="movie"
              onClick={this.onCllick}
            >
              Top Rated
            </button>
          </div>
          <div className="table-flex">
            <button
              name="getHome"
              type="button"
              className="btns"
              data-get="airing_today"
              data-type="tv"
              onClick={this.onCllick}
            >
              Airing Today
            </button>
            <button
              name="getHome"
              type="button"
              className="btns"
              data-get="popular"
              data-type="tv"
              onClick={this.onCllick}
            >
              Popular
            </button>
            <button
              name="getHome"
              type="button"
              className="btns"
              data-get="on_the_air"
              data-type="tv"
              onClick={this.onCllick}
            >
              On The Air
            </button>
            <button
              name="getHome"
              type="button"
              className="btns"
              data-get="top_rated"
              data-type="tv"
              onClick={this.onCllick}
            >
              Top Rated
            </button>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => ({
  moviesNowPlaying: state.nowPlaying.output
});
export default connect(
  mapStateToProps,
  { fetchMoviesNowPlaying }
)(HomeTable);
