import { GET_PEOPLE_COMBINED_CREDITS } from "../../actions/types";

const initialState = {
  output: []
};

const fetchPersonCredits = (state = initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE_COMBINED_CREDITS:
      return {
        ...state,
        output: action.payload
      };
    default:
      return state;
  }
};

export default fetchPersonCredits;
