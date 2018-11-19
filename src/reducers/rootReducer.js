import { combineReducers } from "redux";
import fetchMoviesTrending from "./movieReducers/getMoviesTrending";
import fetchMoviesFromButton from "./movieReducers/getMoviesFromButton";

const rootReducer = combineReducers({
  trending: fetchMoviesTrending,
  nowPlaying: fetchMoviesFromButton
});

export default rootReducer;
