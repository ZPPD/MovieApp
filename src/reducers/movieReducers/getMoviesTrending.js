import { GET_TRENDING } from "../../actions/types";

const initialState = {
  output: []
};

const fetchMoviesTrending = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRENDING:
      return {
        ...state,
        output: action.payload
      };
    default:
      return state;
  }
};

export default fetchMoviesTrending;
