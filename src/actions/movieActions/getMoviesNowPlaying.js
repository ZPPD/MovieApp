import { GET_MOVIES_NOWPLAYING } from "../types";

const saveMoviesNowPlaying = payload => ({
  type: GET_MOVIES_NOWPLAYING,
  payload
});

const fetchMoviesNowPlaying = url => {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveMoviesNowPlaying(data.results)))
      .catch(error => console.log(error));
  };
};

export default fetchMoviesNowPlaying;
