import { GET_MOVIE_DETAILS } from "../types";

const saveMovieDetails = payload => ({
  type: GET_MOVIE_DETAILS,
  payload
});

const fetchMovieDetails = url => {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveMovieDetails(data.results)))
      .catch(error => console.log(error));
  };
};

export default fetchMovieDetails;
