import { GET_MOVIE_CREDITS } from "../types";

const saveMovieCredits = payload => ({
  type: GET_MOVIE_CREDITS,
  payload
});

const fetchMovieCredits = url => {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveMovieCredits(data.cast)))
      .catch(error => console.log(error));
  };
};

export default fetchMovieCredits;
