import { ADD_VR_SCANS, RESET_VR_SCANS } from "./constants";
import { addVrScans, resetVrScans } from "./vrScans";

describe("vrScans actions", () => {
  it("should create action for addVrScans", function () {
    const vrScans = [];

    const expectedAction = {
      type: ADD_VR_SCANS,
      payload: vrScans
    };
    expect(addVrScans(vrScans)).toEqual(expectedAction);
  });

  it("should create action for resetVrScans", function () {
    const expectedAction = {
      type: RESET_VR_SCANS
    };
    expect(resetVrScans()).toEqual(expectedAction);
  });
});
