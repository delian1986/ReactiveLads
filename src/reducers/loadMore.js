import { LOAD_MORE_DISABLE, LOAD_MORE_ENABLE } from "../actions/constants";

export default (state = true, action) => {
  switch (action.type) {
    case LOAD_MORE_ENABLE:
      return true;
    case LOAD_MORE_DISABLE:
      return false;
    default:
      return state;
  }
};
