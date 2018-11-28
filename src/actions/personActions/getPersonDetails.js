import { GET_PEOPLE_DETAILS } from "../types";

const savePersonDetails = payload => ({
  type: GET_PEOPLE_DETAILS,
  payload
});

const fetchPersonDetails = url => {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(savePersonDetails(data.results)))
      .catch(error => console.log(error));
  };
};

export default fetchPersonDetails;
