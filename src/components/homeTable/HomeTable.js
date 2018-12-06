import React, { Component } from "react";
import { connect } from "react-redux";
import ScrollReveal from "scrollreveal";

import setItemType from "../../actions/setItemType";

import fetchMoviesFromButton from "../../actions/movieActions/getMoviesFromButton";

import "./HomeTable.css";

class HomeTable extends Component {
  componentDidMount() {
    const config = {
      origin: "top",
      duration: 2000,
      delay: 20,
      distance: "100px",
      scale: 0.85,
      easing: "ease"
    };
    ScrollReveal().reveal(this.refs.scroll1, config);
    ScrollReveal().reveal(this.refs.scroll2, config);
  }

  onShowClick = e => {
    e.preventDefault();
    this.props.onButtonChange();

    const setType = e.target.dataset.type.toUpperCase();
    //console.log("buttontype", setType);
    this.props.setItemType(`${setType}`);
    // console.log(this.props.itemType);

    const type = e.target.dataset.type;
    //console.log(type);
    const getData = e.target.dataset.get;
    //console.log(getData);

    const transform = getData.replace(/_/g, " ");
    this.props.getHeading(transform);

    const apiKey = process.env.REACT_APP_API_KEY;
    this.props.fetchMoviesFromButton(
      `https://api.themoviedb.org/3/${type}/${getData}?api_key=${apiKey}&language=en-US&page=1`
    );
  };

  render() {
    // apply active class
    const btns = document.querySelectorAll("button");

    btns.forEach(btn =>
      btn.addEventListener("click", function(e) {
        btns.forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");
      })
    );

    return (
      <section className="table">
        <div className="grid-table-top">
          <h2 ref="scroll1">Movies</h2>
          <h2 ref="scroll2">TV</h2>
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
