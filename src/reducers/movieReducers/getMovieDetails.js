import { GET_MOVIE_DETAILS } from "../../actions/types";

const initialState = {
  output: []
};

const fetchMovieDetails = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS:
      return {
        ...state,
        output: action.payload
      };
    default:
      return state;
  }
};

export default fetchMovieDetails;
