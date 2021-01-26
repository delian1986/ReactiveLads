import { SET_PAGE } from "../actions/constants";

export default (state = 0, action) => {
  switch (action.type) {
    case SET_PAGE:
      return action.payload;
    default:
      return state;
  }
};
