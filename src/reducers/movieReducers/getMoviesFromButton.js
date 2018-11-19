import { GET_MOVIES_FROM_BUTTON } from "../../actions/types";

const initialState = {
  output: []
};

const fetchMoviesFromButton = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_FROM_BUTTON:
      return {
        ...state,
        output: action.payload
      };
    default:
      return state;
  }
};

export default fetchMoviesFromButton;
