import { combineReducers } from "redux";
import fetchMoviesTrending from "./movieReducers/getMoviesTrending";
import fetchMoviesNowPlaying from "./movieReducers/getMoviesNowPlaying";

const rootReducer = combineReducers({
  trending: fetchMoviesTrending,
  nowPlaying: fetchMoviesNowPlaying
});

export default rootReducer;
