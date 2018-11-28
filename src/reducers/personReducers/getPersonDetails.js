import { GET_PEOPLE_DETAILS } from "../../actions/types";

const initialState = {
  output: []
};

const fetchPersonDetails = (state = initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE_DETAILS:
      return {
        ...state,
        output: action.payload
      };
    default:
      return state;
  }
};

export default fetchPersonDetails;
