import { GET_PEOPLE_COMBINED_CREDITS } from "../types";

const savePersonCredits = payload => ({
  type: GET_PEOPLE_COMBINED_CREDITS,
  payload
});

const fetchPersonCredits = url => {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(savePersonCredits(data.results)))
      .catch(error => console.log(error));
  };
};

export default fetchPersonCredits;
