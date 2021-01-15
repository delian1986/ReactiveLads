import { addMaterialTypes } from "../actions/materialTypes";
import StorageService from "../services/storageService";
const API_BASE_URL = process.env.API_BASE_URL;

const token = StorageService.getToken();

const fetchMaterialTypesThunk = () => async (dispatch) => {
  await fetch(`${API_BASE_URL}/materials`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((data) => data.json())
    .then((data) => data && dispatch(addMaterialTypes(data)))
    .catch((error) => console.log(error));
};

export default fetchMaterialTypesThunk;
