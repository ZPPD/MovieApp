import React, { Component } from "react";
import "./HomeTable.css";

class HomeTable extends Component {
  // state={
  //   movies: []
  // };
  // onClick = async (data-type, data-get, apiKey) => {
  //   const res = await axios
  //   .get(`https://api.themoviedb.org/3/${type}/${getData}?api_key=${apiKey}&language=en-US&page=1`);
  //   this.setState({ movies: res.data });
  // };

  render() {
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
              onClick={this.onCllick}
            >
              Now Playing
            </button>
            <button
              name="getHome"
              type="button"
              className="btns"
              data-get="popular"
              data-type="movie"
              onClick={this.onCllick}
            >
              Popular
            </button>
            <button
              name="getHome"
              type="button"
              className="btns"
              data-get="upcoming"
              data-type="movie"
              onClick={this.onCllick}
            >
              Upcoming
            </button>
            <button
              name="getHome"
              type="button"
              className="btns"
              data-get="top_rated"
              data-type="movie"
              onClick={this.onCllick}
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
              onClick={this.onCllick}
            >
              Airing Today
            </button>
            <button
              name="getHome"
              type="button"
              className="btns"
              data-get="popular"
              data-type="tv"
              onClick={this.onCllick}
            >
              Popular
            </button>
            <button
              name="getHome"
              type="button"
              className="btns"
              data-get="on_the_air"
              data-type="tv"
              onClick={this.onCllick}
            >
              On The Air
            </button>
            <button
              name="getHome"
              type="button"
              className="btns"
              data-get="top_rated"
              data-type="tv"
              onClick={this.onCllick}
            >
              Top Rated
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeTable;
