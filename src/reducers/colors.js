import { ADD_COLORS } from "../actions/constants";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_COLORS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
