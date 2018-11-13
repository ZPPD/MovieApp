import { combineReducers } from "redux";
import getMoviesTrending from "./movieReducers/getMoviesTrending";

const rootReducer = combineReducers({
  trending: getMoviesTrending
});

export default rootReducer;
