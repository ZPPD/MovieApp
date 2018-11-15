import React, { Component } from "react";
import { connect } from "react-redux";

import fetchMoviesNowPlaying from "../../actions/movieActions/getMoviesNowPlaying";

import "./HomeTable.css";

class HomeTable extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  onShowClick = e => {
    this.setState({ active: true });
    let className = "btns";
    className += " active";
    const apiKey = process.env.REACT_APP_API_KEY;
    this.props.fetchMoviesNowPlaying(
      `https://api.themoviedb.org/3/movie/now_playing/day?api_key=${apiKey}&language=en-US&page=1`
    );
  };

  render() {
    // let className = "btns";
    // if (this.props.isActive) {
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
              className={className}
              data-get="now_playing"
              data-type="movie"
              onClick={this.onShowClick}
            >
              Now Playing
            </button>
            <button
              name="getHome"
              type="button"
              className={className}
              data-get="popular"
              data-type="movie"
              onClick={this.onCllick}
            >
              Popular
            </button>
            <button
              name="getHome"
              type="button"
              className={className}
              data-get="upcoming"
              data-type="movie"
              onClick={this.onCllick}
            >
              Upcoming
            </button>
            <button
              name="getHome"
              type="button"
              className={className}
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
              className={className}
              data-get="airing_today"
              data-type="tv"
              onClick={this.onCllick}
            >
              Airing Today
            </button>
            <button
              name="getHome"
              type="button"
              className={className}
              data-get="popular"
              data-type="tv"
              onClick={this.onCllick}
            >
              Popular
            </button>
            <button
              name="getHome"
              type="button"
              className={className}
              data-get="on_the_air"
              data-type="tv"
              onClick={this.onCllick}
            >
              On The Air
            </button>
            <button
              name="getHome"
              type="button"
              className={className}
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
