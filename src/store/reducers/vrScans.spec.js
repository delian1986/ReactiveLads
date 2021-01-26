import vrScans from "./vrScans";
import { ADD_VR_SCANS, RESET_VR_SCANS } from "../actions/constants";

describe("vrScans reducers", () => {
  it("should return initial state", function () {
    expect(vrScans(undefined, {})).toEqual([]);
  });

  it("should handle ADD_TAGS", function () {
    const mockScans = [{ id: 1 }, { id: 2 }];
    expect(
      vrScans(undefined, {
        type: ADD_VR_SCANS,
        payload: mockScans
      })
    ).toEqual(mockScans);
  });

  it("should handle RESET_VR_SCANS", function () {
    const mockScans = [{ id: 1 }, { id: 2 }];
    expect(
      vrScans(mockScans, {
        type: RESET_VR_SCANS
      })
    ).toEqual([]);
  });
});
