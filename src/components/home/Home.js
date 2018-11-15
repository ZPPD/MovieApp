import React, { Component } from "react";
import { connect } from "react-redux";

import fetchMoviesTrending from "../../actions/movieActions/getMovieTrending";

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
  render() {
    return (
      <div>
        <HomeHeader />
        <div className="main">
          <HomeTable />
          <HomeMoviesDisplay items={this.props.moviesTrending} />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  moviesTrending: state.trending.output
});

// const mapDispatchToProps = dispatch => ({
//   fetchMoviesTrending: url => dispatch(fetchMoviesTrending(url))
// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  { fetchMoviesTrending }
)(Home);
