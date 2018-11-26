import React, { Component } from "react";
import { connect } from "react-redux";

import setItemType from "../../actions/setItemType";

import fetchMoviesFromButton from "../../actions/movieActions/getMoviesFromButton";

import "./HomeTable.css";

class HomeTable extends Component {
  onShowClick = e => {
    e.preventDefault();
    this.props.onButtonChange();

    const setType = e.target.dataset.type.toUpperCase();
    console.log("buttontype", setType);
    this.props.setItemType(`${setType}`);
    // console.log(this.props.itemType);

    // activeClass += " active";
    // if (!e.target.classList.contains("active")) {
    //   e.target.classList.add("active");
    // } else {
    //   e.target.;
    // }

    // console.log(activeClass);
    // activeClass += " active";

    // let className = this.state.className;
    // if (className !== "btns active") {
    //   className = className + " active";
    //   this.setState({ className });
    //   console.log(className);
    // } else {
    //   return false;
    // }

    // get data-get
    this.props.getHeading = getData => {
      const transform = getData.replace(/\_/g, " ").toUpperCase();
      console.log(transform);
      return transform;
    };
    const type = e.target.dataset.type;
    //console.log(type);
    const getData = e.target.dataset.get;
    //console.log(getData);
    const apiKey = process.env.REACT_APP_API_KEY;
    this.props.fetchMoviesFromButton(
      `https://api.themoviedb.org/3/${type}/${getData}?api_key=${apiKey}&language=en-US&page=1`
    );
  };

  render() {
    // @To-Do this active class selection has to be changed
    const btns = document.querySelectorAll("button");

    btns.forEach(btn =>
      btn.addEventListener("click", function(e) {
        btns.forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");
      })
    );
    // let className = "btns";
    // if (this.state.isActive) {
    //   className += " active";
    // }
    return (
      <section className="table">
        <div className="grid-table-top">
          <h2>Movies</h2>
          <h2>TV</h2>
        </div>
        <div className="grid-table-bottom">
          <div className="table-flex">
            <button
              name="getHome"
              type="button"
              className="btns"
              data-get="now_playing"
              data-type="movie"
              onClick={this.onShowClick}
            >
              Now Playing
            </button>
            <button
              name="getHome"
              type="button"
              className="btns"
              data-get="popular"
              data-type="movie"
              onClick={this.onShowClick}
            >
              Popular
            </button>
            <button
              name="getHome"
              type="button"
              className="btns"
              data-get="upcoming"
              data-type="movie"
              onClick={this.onShowClick}
            >
              Upcoming
            </button>
            <button
              name="getHome"
              type="button"
              className="btns"
              data-get="top_rated"
              data-type="movie"
              onClick={this.onShowClick}
            >
              Top Rated
            </button>
          </div>
          <div className="table-flex">
            <button
              name="getHome"
              type="button"
              className="btns"
              data-get="airing_today"
              data-type="tv"
              onClick={this.onShowClick}
            >
              Airing Today
            </button>
            <button
              name="getHome"
              type="button"
              className="btns"
              data-get="popular"
              data-type="tv"
              onClick={this.onShowClick}
            >
              Popular
            </button>
            <button
              name="getHome"
              type="button"
              className="btns"
              data-get="on_the_air"
              data-type="tv"
              onClick={this.onShowClick}
            >
              On The Air
            </button>
            <button
              name="getHome"
              type="button"
              className="btns"
              data-get="top_rated"
              data-type="tv"
              onClick={this.onShowClick}
            >
              Top Rated
            </button>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => ({
  moviesFromButton: state.nowPlaying.output,
  itemType: state.setItemType.itemType
});
export default connect(
  mapStateToProps,
  { fetchMoviesFromButton, setItemType }
)(HomeTable);
