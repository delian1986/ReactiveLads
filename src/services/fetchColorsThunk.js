import { addColors } from "../actions/colors";
const API_BASE_URL = process.env.API_BASE_URL;
import { getToken } from "../selectors/index";

const fetchColorsThunk = () => async (dispatch, getState) => {
  const state = getState();
  const token = getToken(state);

  await fetch(`${API_BASE_URL}/colors`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((data) => data.json())
    .then((data) => data && dispatch(addColors(data)))
    .catch((error) => console.log(error));
};

export default fetchColorsThunk;
