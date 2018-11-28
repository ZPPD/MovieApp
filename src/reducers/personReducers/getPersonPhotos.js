import { GET_PEOPLE_PHOTOS } from "../../actions/types";

const initialState = {
  output: []
};

const fetchPersonPhotos = (state = initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE_PHOTOS:
      return {
        ...state,
        output: action.payload
      };
    default:
      return state;
  }
};

export default fetchPersonPhotos;
