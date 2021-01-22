import { IS_VRSCANS_LOADED } from "../actions/constants";

export default (state = false, action) => {
  switch (action.type) {
    case IS_VRSCANS_LOADED:
      return action.payload;
    default:
      return state;
  }
};
