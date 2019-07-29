import { SEARCH_MOVIES } from "../actions/types";

const initialState = {
  output: [],
  total: 0
};

const searchMovies = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        output: action.payload.results,
        total: action.payload.total_pages
      };
    default:
      return state;
  }
};

export default searchMovies;
