import { CONFIG_DATA } from "../actions/types";

const initialState = {
  apiKey: process.env.REACT_APP_API_KEY
};

const configData = (state = initialState, action) => {
  switch (action.type) {
    case CONFIG_DATA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default configData;
