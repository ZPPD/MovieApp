import { combineReducers } from "redux";
import fetchMoviesTrending from "./movieReducers/getMoviesTrending";
import fetchMoviesFromButton from "./movieReducers/getMoviesFromButton";
import setItemType from "./setItemType";

const rootReducer = combineReducers({
  trending: fetchMoviesTrending,
  nowPlaying: fetchMoviesFromButton,
  setItemType
});

export default rootReducer;
