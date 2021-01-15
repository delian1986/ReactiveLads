import { addTags } from "../actions/tags";
import StorageService from "./storageService";
const API_BASE_URL = process.env.API_BASE_URL;

const token = StorageService.getToken();

const fetchTagsThunk = () => async (dispatch) => {
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
