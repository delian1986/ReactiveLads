import { FETCH_TAGS } from "../actions/constants";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_TAGS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
