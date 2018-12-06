import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";

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
    const config = {
      origin: "top",
      duration: 2000,
      delay: 100,
      distance: "100px",
      scale: 0.85,
      easing: "ease-in"
    };
    ScrollReveal().reveal(this.refs.scroll1, config);
    ScrollReveal().reveal(this.refs.scroll2, config);
    ScrollReveal().reveal(this.refs.scroll3, config);
    ScrollReveal().reveal(this.refs.scroll4, config);
    ScrollReveal().reveal(this.refs.scroll5, config);
    ScrollReveal().reveal(this.refs.scroll6, config);
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.fetchData(nextProps.match.params.id, nextProps.match.params.type);
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
              <div
                className="back-arrow"
                onClick={() => this.props.history.goBack()}
              />
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
                <p>
                  {type === "movie"
                    ? `${
                        this.props.movieDetails.genres
                          ? this.props.movieDetails.genres[0].name
                          : ""
                      }`
                    : `${
                        this.props.movieDetails.genres
                          ? this.props.movieDetails.genres[0].name +
                            " | " +
                            this.props.movieDetails.number_of_seasons +
                            " Seasons"
                          : ""
                      }`}
                </p>
              </section>
            </div>
          </header>
          <section className="summary-detail main-detail">
            <h2 ref="scroll1">Summary</h2>
            <p>{this.props.movieDetails.overview}</p>
          </section>
        </React.Fragment>
      );
    }
    if (type === "person") {
      return (
        <React.Fragment>
          <header className="details-person-header">
            <div
              className="back-arrow"
              onClick={() => this.props.history.goBack()}
            />
            <section className="details-title">
              <img
                className="person-img"
                src={`https://image.tmdb.org/t/p/original${
                  this.props.personDetails.profile_path
                }`}
                alt={this.props.personDetails.name}
              />
              <h1>{this.props.personDetails.name}</h1>
              <p>{this.props.personDetails.known_for_department}</p>
              <p>
                Born: {this.props.personDetails.birthday} |{" "}
                {this.props.personDetails.place_of_birth}
              </p>
            </section>
          </header>
          <section className="main-person main-detail">
            <h2 ref="scroll2">Biography</h2>
            <div className="bio">
              <h3 className="biography-person">
                {this.props.personDetails.biography}
              </h3>
            </div>
          </section>
        </React.Fragment>
      );
    }
  };

  ItemDetailsCast = type => {
    if (type === "movie" || type === "tv") {
      return (
        <section className="cast">
          <h2 className="filmCast" ref="scroll3">
            Cast
          </h2>
          <div className="actors">
            {this.props.movieCredits.map(cast => (
              <Link key={cast.id} to={`/details/person/${cast.id}`}>
                <div className="actor-card">
                  <img
                    className="cast-img"
                    src={`https://image.tmdb.org/t/p/original${
                      cast.profile_path
                    }`}
                    alt={cast.name}
                  />
                  <h3 className="cast-name">
                    {cast.name} as {cast.character}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      );
    }
    if (type === "person") {
      return (
        <section className="cast">
          <h2 className="filmPhotos" ref="scroll4">
            Photos
          </h2>
          <div className="photoSection">
            {this.props.personPhotos.map((photo, i) => (
              <div key={i} className="photo-card">
                <img
                  className="photo-image"
                  src={`https://image.tmdb.org/t/p/original${photo.file_path}`}
                  alt="Actor"
                />
              </div>
            ))}
          </div>
        </section>
      );
    }
  };

  ItemDetailsTrailerFilmography = type => {
    if (type === "movie" || type === "tv") {
      return (
        <section className="cast">
          <h2 className="filmTrailer" ref="scroll5">
            Trailer
          </h2>
          <div className="trailers">
            {this.props.movieTrailers.map((trailer, j) => (
              <div key={j} className="trailer-grid">
                <iframe
                  title="trailer"
                  width="420"
                  height="300"
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </section>
      );
    }
    if (type === "person") {
      return (
        <section className="cast">
          <h2 className="filmCredits" ref="scroll6">
            Filmography
          </h2>
          {this.props.personCredits.map(credit => (
            <div key={credit.id} className="card-credit">
              <Link
                to={`/details/${credit.media_type}/${credit.id}`}
                className="credit-flex"
              >
                <div>
                  <img
                    className="credit-img"
                    src={`https://image.tmdb.org/t/p/original${
                      credit.poster_path
                    }`}
                    alt="Filmography"
                  />
                </div>
                <div>
                  <h2 className="credit-title">
                    {credit.media_type === "movie"
                      ? credit.original_title
                      : credit.name}
                  </h2>
                  <p>
                    {credit.media_type === "movie"
                      ? credit.release_date
                      : credit.first_air_date}
                  </p>
                  <h3 className="credit-character">{credit.character}</h3>
                  <p className="credit-overview">{credit.overview}</p>
                </div>
              </Link>
            </div>
          ))}
        </section>
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.ItemDetailsHeader(this.props.match.params.type)}
        <main>
          {this.ItemDetailsCast(this.props.match.params.type)}
          {this.ItemDetailsTrailerFilmography(this.props.match.params.type)}
        </main>
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
