import { isVrScansLoaded } from "../actions/isVrScansLoaded";
import isVrScansLoadedReducer from "./isVrScansLoaded";

describe("isVrScansLoaded reducer", () => {
  it("should return false by default", function () {
    expect(isVrScansLoadedReducer(undefined, {})).toEqual(false);
  });

  it("should return return the payload boolean", function () {
    const payload = true;
    expect(isVrScansLoadedReducer(undefined, isVrScansLoaded(payload))).toEqual(
      payload
    );
  });
});
