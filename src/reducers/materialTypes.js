import { FETCH_MATERIAL_TYPES } from "../actions/constants";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_MATERIAL_TYPES:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
