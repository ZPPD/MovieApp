import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import setItemType from "../../actions/setItemType";

import "./HomeMoviesDisplay.css";

class HomeMoviesDisplay extends Component {
  state = {
    page: 1
  };
  // // this goes for search
  //   // handle pagination
  // handlePagination = pageTransition => {
  //   if (this.state.page === 1 && pageTransition === "-") {
  //     this.setState({ page: 1 });
  //   } else if (pageTransition === "+") {
  //     this.setState({ page: this.state.page + 1 });
  //   } else if (pageTransition === "-") {
  //     this.setState({ page: this.state.page - 1 });
  //   }
  //   // call the fetch function
  //   this.props.trendingMovies();
  //   this.props.onShowClick();
  // };

  // get data-get
  // getHeading = data => {
  //   const transform = data.replace(/\_/g, " ");
  //   console.log(transform);
  //   return transform;
  // };
  render() {
    // console.log(this.props.items);
    // console.log("in movies display", this.props.itemType);

    return (
      <section className="home-results">
        <h2 className="nowPlaying">Trending Movies</h2>
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

// export default HomeMoviesDisplay;
