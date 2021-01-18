import { addTags } from "../actions/tags";
const API_BASE_URL = process.env.API_BASE_URL;
import { getToken } from "../selectors/index";

const fetchTagsThunk = () => async (dispatch, getState) => {
  const state = getState();
  const token = getToken(state);

  await fetch(`${API_BASE_URL}/tags`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((data) => data.json())
    .then((data) => data && dispatch(addTags(data)))
    .catch((error) => console.log(error));
};

export default fetchTagsThunk;
