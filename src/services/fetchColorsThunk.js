import { addColors } from "../actions/colors";
import StorageService from "./storageService";
const API_BASE_URL = process.env.API_BASE_URL;

const token = StorageService.getToken();

const fetchColorsThunk = () => async (dispatch) => {
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
