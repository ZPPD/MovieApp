import { combineReducers } from "redux";
import fetchMoviesTrending from "./movieReducers/getMoviesTrending";
import fetchMoviesFromButton from "./movieReducers/getMoviesFromButton";
import fetchMovieDetails from "./movieReducers/getMovieDetails";
import fetchMovieCredits from "./movieReducers/getMovieCredits";
import setItemType from "./setItemType";
import searchMovies from "./searchMovies";

const rootReducer = combineReducers({
  trending: fetchMoviesTrending,
  nowPlaying: fetchMoviesFromButton,
  movieDetails: fetchMovieDetails,
  movieCredits: fetchMovieCredits,
  setItemType,
  searchMovies
});

export default rootReducer;
