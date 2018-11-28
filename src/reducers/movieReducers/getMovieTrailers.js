import { GET_MOVIE_TRAILERS } from "../../actions/types";

const initialState = {
  output: []
};

const fetchMovieTrailers = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_TRAILERS:
      return {
        ...state,
        output: action.payload
      };
    default:
      return state;
  }
};

export default fetchMovieTrailers;
