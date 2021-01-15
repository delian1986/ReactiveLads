import { FETCH_COLORS } from "../actions/constants";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_COLORS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
