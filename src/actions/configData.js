import { CONFIG_DATA } from "./types.js";

const saveConfigData = payload => ({
  type: CONFIG_DATA,
  payload
});

export const fetchConfigData = url => {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch(saveConfigData(data)))
      .catch(error => console.log(error));
  };
};
