import { combineReducers } from "redux";
import fetchMoviesTrending from "./movieReducers/getMoviesTrending";

const rootReducer = combineReducers({
  trending: fetchMoviesTrending
});

export default rootReducer;
