import React, { Component } from "react";
import { connect } from "react-redux";

import setItemType from "../../actions/setItemType";

import fetchMoviesTrending from "../../actions/movieActions/getMovieTrending";
import fetchMoviesFromButton from "../../actions/movieActions/getMoviesFromButton";
// import fetchMoviesPopular from "../../actions/movieActions/getMoviesPopular";

import HomeHeader from "../homeHeader/HomeHeader";
import HomeTable from "../homeTable/HomeTable";
import HomeMoviesDisplay from "../homeMoviesDisplay/HomeMoviesDisplay";
import Footer from "../footer/Footer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { showButtonMovies: false };
  }

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
    console.log("in home", this.props.itemType);
    return (
      <React.Fragment>
        <HomeHeader />
        <div className="main">
          <HomeTable
            type={this.props.itemType}
            onButtonChange={() =>
              this.setState({
                showButtonMovies: true
              })
            }
          />
          <HomeMoviesDisplay
            heading={this.props.getHeading}
            type={this.props.itemType}
            items={
              this.state.showButtonMovies
                ? this.props.moviesFromButton
                : this.props.moviesTrending
            }
          />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  moviesTrending: state.trending.output,
  moviesFromButton: state.nowPlaying.output,
  itemType: state.setItemType.itemType
  // moviesPopular: state.popularMovies.output
});

const mapDispatchToProps = dispatch => ({
  setItemType: type => dispatch(setItemType(type)),

  fetchMoviesTrending: url => dispatch(fetchMoviesTrending(url)),
  fetchMoviesFromButton: url => dispatch(fetchMoviesFromButton(url))
  // fetchMoviesPopular: url => dispatch(fetchMoviesPopular(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
  // { fetchMoviesTrending }
)(Home);
