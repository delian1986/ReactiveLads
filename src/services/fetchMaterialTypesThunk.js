import { addMaterialTypes } from "../actions/materialTypes";
const API_BASE_URL = process.env.API_BASE_URL;
import { getToken } from "../selectors/index";
import { handleResponse } from "./handleResponse";

const fetchMaterialTypesThunk = () => async (dispatch, getState) => {
  const state = getState();
  const token = getToken(state);

  await fetch(`${API_BASE_URL}/materials`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(handleResponse)
    .then((data) => data && dispatch(addMaterialTypes(data)))
    .catch((error) => console.log(error));
};

export default fetchMaterialTypesThunk;
