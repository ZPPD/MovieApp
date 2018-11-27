import { combineReducers } from "redux";
import fetchMoviesTrending from "./movieReducers/getMoviesTrending";
import fetchMoviesFromButton from "./movieReducers/getMoviesFromButton";
import setItemType from "./setItemType";
import searchMovies from "./searchMovies";

const rootReducer = combineReducers({
  trending: fetchMoviesTrending,
  nowPlaying: fetchMoviesFromButton,
  setItemType,
  searchMovies
});

export default rootReducer;
