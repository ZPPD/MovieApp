import { GET_DISCOVER } from "../actions/types";

const initialState = {
  output: []
};

const getDiscover = (state = initialState, action) => {
  switch (action.type) {
    case GET_DISCOVER:
      return {
        ...state,
        output: action.payload
      };
    default:
      return state;
  }
};

export default getDiscover;
