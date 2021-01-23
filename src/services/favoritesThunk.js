import { handleResponse } from "./handleResponse";
import { addFavorite, removeFavorite } from "../actions/favorites";
import { getToken } from "../selectors";

const API_BASE_URL = process.env.API_BASE_URL;

export const addFavoritesThunk = ({ vrscanId, userId }) => async (
  dispatch,
  getState
) => {
  const state = getState();
  const token = getToken(state);
  await fetch(`${API_BASE_URL}/favorites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ vrscanId, userId })
  })
    .then(handleResponse)
    .then((data) => {
      dispatch(addFavorite(data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const removeFavoritesThunk = (id) => async (dispatch, getState) => {
  const state = getState();
  const token = getToken(state);
  await fetch(`${API_BASE_URL}/favorites/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(handleResponse)
    .then(() => {
      dispatch(removeFavorite(id));
    })
    .catch((err) => {
      console.log(err);
    });
};
