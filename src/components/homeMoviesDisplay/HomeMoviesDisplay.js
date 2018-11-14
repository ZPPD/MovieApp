import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./HomeMoviesDisplay.css";

class HomeMoviesDisplay extends Component {
  render() {
    console.log(this.props.items);
    console.log(this.props.title);
    return (
      <section className="home-results">
        <h2 className="nowPlaying">Trending Movies</h2>
        <div className="playing">
          {this.props.items.map(movie => (
            <div key={movie.id} className="playing-grid">
              <div className="playing-card">
                <Link to={`details/${movie.type}/${movie.id}`}>
                  <img
                    className="playing-img"
                    src={`https://image.tmdb.org/t/p/original${
                      movie.poster_path
                    }`}
                    alt="Trending Now Movies"
                  />
                  <h3 className="playingMovie-name">{movie.title}</h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default HomeMoviesDisplay;
