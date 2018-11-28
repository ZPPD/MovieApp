import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import fetchMovieDetails from "../../actions/movieActions/getMovieDetails";
import fetchMovieCredits from "../../actions/movieActions/getMovieCredits";
import fetchMovieTrailers from "../../actions/movieActions/getMovieTrailers";

import fetchPersonDetails from "../../actions/personActions/getPersonDetails";
import fetchPersonPhotos from "../../actions/personActions/getPersonPhotos";
import fetchPersonCredits from "../../actions/personActions/getPersonCredits";

import Footer from "../footer/Footer";

import "./ItemDetails.css";

class ItemDetails extends Component {
  componentDidMount() {
    this.fetchData(this.props.match.params.id);
  }
  fetchData(id, type = this.props.match.params.type) {
    const apiKey = process.env.REACT_APP_API_KEY;
    if (type === "movie" || type === "tv") {
      this.props.fetchMovieDetails(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&language=en-US`
      );
      this.props.fetchMovieCredits(
        `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${apiKey}&language=en-US`
      );
      this.props.fetchMovieTrailers(
        `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${apiKey}&language=en-US`
      );
    } else if (type === "person") {
      this.props.fetchPersonDetails(
        `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=en-US`
      );
      this.props.fetchPersonPhotos(
        `https://api.themoviedb.org/3/person/${id}/images?api_key=${apiKey}&language=en-US`
      );
      this.props.fetchPersonCredits(
        `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${apiKey}&language=en-US`
      );
    }
  }

  ItemDetailsHeader = type => {
    if (type === "movie" || type === "tv") {
      return (
        <React.Fragment>
          <header className="header">
            <div
              className="details-header"
              style={{
                backgroundImage: `url(
                https://image.tmdb.org/t/p/original${
                  this.props.movieDetails.backdrop_path
                }
              )`
              }}
            >
              {/* @To-Do work on arrow func, use history property */}
              <a className="back-arrow" href="#!" />
              <section className="details-title">
                <h1>
                  {type === "movie"
                    ? this.props.movieDetails.original_title
                    : this.props.movieDetails.name}
                </h1>
                <p>
                  {this.props.movieDetails.status} |{" "}
                  {this.props.movieDetails.original_language}
                </p>
                {/* @To-Do: genres undefined */}
                {/* <p>
                {type === "movie" 
                  ? `${this.props.movieDetails.genres[0].name}`
                  : `${this.props.movieDetails.genres[0].name} | ${
                      this.props.movieDetails.number_of_seasons
                    } Seasons`}
              </p> */}
              </section>
            </div>
          </header>
          <section className="summary-detail main-detail">
            <h2>Summary</h2>
            <p>{this.props.movieDetails.overview}</p>
          </section>
        </React.Fragment>
      );
    }
  };
  render() {
    return (
      <React.Fragment>
        {this.ItemDetailsHeader(this.props.match.params.type)}
        <Footer />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  movieDetails: state.movieDetails.output,
  movieCredits: state.movieCredits.output,
  movieTrailers: state.movieTrailers.output,

  personDetails: state.personDetails.output,
  personPhotos: state.personPhotos.output,
  personCredits: state.personCredits.output
});

const mapDispatchToProps = dispatch => ({
  fetchMovieDetails: url => dispatch(fetchMovieDetails(url)),
  fetchMovieCredits: url => dispatch(fetchMovieCredits(url)),
  fetchMovieTrailers: url => dispatch(fetchMovieTrailers(url)),

  fetchPersonDetails: url => dispatch(fetchPersonDetails(url)),
  fetchPersonPhotos: url => dispatch(fetchPersonPhotos(url)),
  fetchPersonCredits: url => dispatch(fetchPersonCredits(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetails);
