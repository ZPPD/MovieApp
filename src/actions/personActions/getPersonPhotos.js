import { GET_PEOPLE_PHOTOS } from "../types";

const savePersonPhotos = payload => ({
  type: GET_PEOPLE_PHOTOS,
  payload
});

const fetchPersonPhotos = url => {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(savePersonPhotos(data.results)))
      .catch(error => console.log(error));
  };
};

export default fetchPersonPhotos;
