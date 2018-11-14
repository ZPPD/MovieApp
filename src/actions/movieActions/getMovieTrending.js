import { GET_TRENDING } from "../types";

const saveMoviesTrending = payload => ({
  type: GET_TRENDING,
  payload
});

const fetchMoviesTrending = url => {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveMoviesTrending(data.results)))
      .catch(error => console.log(error));
  };
};

export default fetchMoviesTrending;
