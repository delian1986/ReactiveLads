import { ADD_FAVORITE, INIT_FAVORITES, REMOVE_FAVORITE } from "./constants";

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
