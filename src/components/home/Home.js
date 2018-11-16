import React, { Component } from "react";
import { connect } from "react-redux";

import fetchMoviesTrending from "../../actions/movieActions/getMovieTrending";
import fetchMoviesNowPlaying from "../../actions/movieActions/getMoviesNowPlaying";

import HomeHeader from "../homeHeader/HomeHeader";
import HomeTable from "../homeTable/HomeTable";
import HomeMoviesDisplay from "../homeMoviesDisplay/HomeMoviesDisplay";
import Footer from "../footer/Footer";

class Home extends Component {
  state = {
    showTrending: true,
    showButtonMovies: false
  };
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
  // componentDidUpdate() {
  //   this.buttonMovies();
  // }

  // buttonMovies = () => {
  //   this.setState(state => {
  //     showTrending: !this.state.showTrending
  //   });
  // };
  render() {
    const { showButtonMovies, showTrending } = this.state;
    const btnMovies = "";

    // if button movies state is true, hide trending and show btn movies
    if (showButtonMovies) {
      btnMovies = this.props.moviesTrending;
    } else {
    }
    return (
      <React.Fragment>
        <HomeHeader />
        <div className="main">
          <HomeTable
            onClick={() =>
              this.setState({
                showTrending: !this.state.showTrending,
                showButtonMovies: !this.state.showButtonMovies
              })
            }
          />
          <HomeMoviesDisplay items={this.props.moviesTrending} />
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
