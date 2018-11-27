import { SEARCH_MOVIES } from "../actions/types";

const initialState = {
  output: []
};

const searchMovies = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        output: action.payload
      };
    default:
      return state;
  }
};

export default searchMovies;
