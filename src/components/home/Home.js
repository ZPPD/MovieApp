import React, { Component } from "react";
import { connect } from "react-redux";

import fetchMoviesTrending from "../../actions/movieActions/getMovieTrending";
import fetchMoviesNowPlaying from "../../actions/movieActions/getMoviesNowPlaying";

import HomeHeader from "../homeHeader/HomeHeader";
import HomeTable from "../homeTable/HomeTable";
import HomeMoviesDisplay from "../homeMoviesDisplay/HomeMoviesDisplay";
import Footer from "../footer/Footer";

class Home extends Component {
  componentDidMount() {
    this.trendingMovies();
  }

  //fetch Trending movie data
  trendingMovies = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    this.props.fetchMoviesTrending(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&language=en-US&page=1`
    );
  };

  // change displayed movies on btn click
  componentDidUpdate() {
    this.buttonMovies();
  }

  buttonMovies = () => {
    this.setState(state => {
      return { movies: state.movies };
    });
  };
  render() {
    return (
      <React.Fragment>
        <HomeHeader />
        <div className="main">
          <HomeTable />
          <HomeMoviesDisplay
            items={this.props.moviesTrending}
            onChange={this.buttonMovies}
          />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  moviesTrending: state.trending.output,
  moviesNowPlaying: state.nowPlaying.output
});

const mapDispatchToProps = dispatch => ({
  fetchMoviesTrending: url => dispatch(fetchMoviesTrending(url)),
  fetchMoviesNowPlaying: url => dispatch(fetchMoviesNowPlaying(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
  // { fetchMoviesTrending }
)(Home);
