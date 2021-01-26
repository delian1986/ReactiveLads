import { ADD_FAVORITE, INIT_FAVORITES, REMOVE_FAVORITE } from "./constants";
import { handleResponse } from "../../services/handleResponse";
import { getToken } from "../selectors";
const API_BASE_URL = process.env.API_BASE_URL;

export const initFavorites = (favs) => {
  return {
    type: INIT_FAVORITES,
    payload: favs
  };
};

export const addFavorite = (fav) => {
  return {
    type: ADD_FAVORITE,
    payload: fav
  };
};

export const removeFavorite = (fav) => {
  return {
    type: REMOVE_FAVORITE,
    payload: fav
  };
};

export const addFavoritesAsync = ({ vrscanId, userId }) => async (
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

export const removeFavoritesAsync = (id) => async (dispatch, getState) => {
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
