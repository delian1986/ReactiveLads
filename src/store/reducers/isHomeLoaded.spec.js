import { isHomeLoaded } from "../actions/isHomeLoaded";
import isHomeLoadedReducer from "./isHomeLoaded";

describe("isHomeLoaded reducer", () => {
  it("should return false by default", function () {
    expect(isHomeLoadedReducer(undefined, {})).toEqual(false);
  });

  it("should return return the payload boolean", function () {
    const payload = true;
    expect(isHomeLoadedReducer(undefined, isHomeLoaded(payload))).toEqual(payload);
  });
});
