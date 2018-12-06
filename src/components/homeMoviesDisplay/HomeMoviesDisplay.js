import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ScrollReveal from "scrollreveal";

import setItemType from "../../actions/setItemType";

import "./HomeMoviesDisplay.css";

class HomeMoviesDisplay extends Component {
  state = {
    page: 1
  };

  componentDidMount() {
    const config = {
      origin: "left",
      duration: 2000,
      delay: 10,
      distance: "50px",
      scale: 1,
      ease: "ease"
    };
    ScrollReveal().reveal(this.refs.scroll, config);
  }

  render() {
    // console.log(this.props.items);
    // console.log("in movies display", this.props.itemType);
    return (
      <section className="home-results">
        <h2 className="nowPlaying" ref="scroll">
          {this.props.header}
        </h2>
        <div className="playing">
          {this.props.items.map(movie => (
            <div key={movie.id} className="playing-grid">
              <div className="playing-card">
                <Link
                  to={`details/${this.props.type.toLowerCase()}/${movie.id}`}
                >
                  <img
                    className="playing-img"
                    src={`https://image.tmdb.org/t/p/original${
                      movie.poster_path
                    }`}
                    alt={
                      this.props.itemType === "TV" ? movie.name : movie.title
                    }
                  />
                  <h3 className="playingMovie-name">
                    {this.props.itemType === "TV" ? movie.name : movie.title}
                  </h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* {movieResult} */}
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
