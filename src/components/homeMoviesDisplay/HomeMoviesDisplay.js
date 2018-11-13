import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeMoviesDisplay extends Component {
  render() {
    return (
      <div className="home-results">
        <h2 className="nowPlaying">Trending Movies</h2>
        <div className="playing">
          {this.props.items.forEach(movie => {
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
            </div>;
          })}
        </div>
      </div>
    );
  }
}

export default HomeMoviesDisplay;
