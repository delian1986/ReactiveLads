import { ADD_FAVORITE, INIT_FAVORITES, REMOVE_FAVORITE } from "../actions/constants";

export default (state = [], action) => {
  switch (action.type) {
    case INIT_FAVORITES:
      return [...state, ...action.payload];
    case ADD_FAVORITE:
      return [...state, ...action.payload];
    case REMOVE_FAVORITE:
      return [...state.filter((fav) => fav !== action.payload)];
    default:
      return state;
  }
};
