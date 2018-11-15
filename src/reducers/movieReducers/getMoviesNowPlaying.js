import { GET_MOVIES_NOWPLAYING } from "../../actions/types";

const initialState = {
  output: []
};

const fetchMoviesNowPlaying = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_NOWPLAYING:
      return {
        ...state,
        output: action.payload
      };
    default:
      return state;
  }
};

export default fetchMoviesNowPlaying;
