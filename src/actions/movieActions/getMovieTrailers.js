import { GET_MOVIE_TRAILERS } from "../types";

const saveMovieTrailers = payload => ({
  type: GET_MOVIE_TRAILERS,
  payload
});

const fetchMovieTrailers = url => {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveMovieTrailers(data.results)))
      .catch(error => console.log(error));
  };
};

export default fetchMovieTrailers;
