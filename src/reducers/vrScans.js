import { ADD_VR_SCANS, RESET_VR_SCANS } from "../actions/constants";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_VR_SCANS:
      return [...state, ...action.payload];
    case RESET_VR_SCANS:
      return [];
    default:
      return state;
  }
};
