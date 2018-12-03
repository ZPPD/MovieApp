import { GET_DISCOVER } from "./types";

const saveDiscover = payload => ({
  type: GET_DISCOVER,
  payload
});

const getDiscover = url => {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveDiscover(data.results)))
      .catch(error => console.log(error));
  };
};

export default getDiscover;
