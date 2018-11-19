import { GET_MOVIES_FROM_BUTTON } from "../types";

const saveMoviesFromButton = payload => ({
  type: GET_MOVIES_FROM_BUTTON,
  payload
});

const fetchMoviesFromButton = url => {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveMoviesFromButton(data.results)))
      .catch(error => console.log(error));
  };
};

export default fetchMoviesFromButton;
