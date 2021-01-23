import { updateUser } from "../actions/auth";
import StorageService from "../services/storageService";
const API_BASE_URL = process.env.API_BASE_URL;

export const userDetailsThunk = ({
  id,
  firstName,
  lastName,
  photoUrl,
  email,
  password
}) => async (dispatch) => {
  //update user details
  await fetch(`${API_BASE_URL}/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      firstName,
      lastName,
      photoUrl,
      email,
      password
    })
  })
    .then((data) => data.json())
    .then((user) => {
      dispatch(updateUser(user));
      StorageService.saveUserInfo(user);
    });
};
