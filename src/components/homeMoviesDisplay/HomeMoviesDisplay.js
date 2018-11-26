import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import setItemType from "../../actions/setItemType";

import "./HomeMoviesDisplay.css";

class HomeMoviesDisplay extends Component {
  render() {
    // console.log(this.props.items);
    console.log(this.props.itemType);
    return (
      <section className="home-results">
        <h2 className="nowPlaying">Trending Movies</h2>
        <div className="playing">
          {this.props.items.map(movie => (
            <div key={movie.id} className="playing-grid">
              <div className="playing-card">
                <Link to={`details/${movie.id}`}>
                  <img
                    className="playing-img"
                    src={`https://image.tmdb.org/t/p/original${
                      movie.poster_path
                    }`}
                    alt={`${movie.title}`}
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
const mapStateToProps = state => ({
  itemType: state.setItemType.itemType
});
export default connect(
  mapStateToProps,
  { setItemType }
)(HomeMoviesDisplay);

// export default HomeMoviesDisplay;
