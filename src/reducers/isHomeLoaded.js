import { IS_HOME_LOADED } from "../actions/constants";

export default (state = false, action) => {
  switch (action.type) {
    case IS_HOME_LOADED:
      return action.payload;
    default:
      return state;
  }
};
