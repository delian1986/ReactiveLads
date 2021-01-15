//import { FETCH_VR_SCANS, RESET_VR_SCANS } from "../actions/constants";

export default (state = 0, action) => {
  switch (action.type) {
    case "SET_PAGE":
      return action.payload;
    default:
      return state;
  }
};
