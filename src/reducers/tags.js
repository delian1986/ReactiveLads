import { ADD_TAGS } from "../actions/constants";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TAGS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
