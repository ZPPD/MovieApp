import { SEARCH_MOVIES } from "./types";

const saveMovies = payload => ({
  type: SEARCH_MOVIES,
  payload
});

const searchMovies = url => {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveMovies(data)))
      .catch(error => console.log(error));
  };
};

export default searchMovies;
