import { ADD_VR_SCANS, RESET_VR_SCANS } from "./constants";

export const addVrScans = (vrScans) => {
  return {
    type: ADD_VR_SCANS,
    payload: vrScans
  };
};

export const resetVrScans = () => {
  return {
    type: RESET_VR_SCANS
  };
};
