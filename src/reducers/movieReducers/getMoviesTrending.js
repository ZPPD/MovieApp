import { GET_TRENDING } from "../../actions/types";

const initialState = {
  results: []
};

const getMoviesTrending = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRENDING:
      return {
        ...action.payload
      };
    default:
      return state;
  }
};

export default getMoviesTrending;
