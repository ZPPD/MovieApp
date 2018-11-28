import { GET_MOVIE_CREDITS } from "../../actions/types";

const initialState = {
  output: []
};

const fetchMovieCredits = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_CREDITS:
      return {
        ...state,
        output: action.payload
      };
    default:
      return state;
  }
};

export default fetchMovieCredits;
