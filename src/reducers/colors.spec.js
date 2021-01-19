import colors from "./colors";
import { ADD_COLORS } from "../actions/constants";

describe("colors reducers", () => {
  it("should return initial state", function () {
    expect(colors(undefined, {})).toEqual([]);
  });

  it("should handle ADD_COLORS", function () {
    const mockColors = [{ id: 1 }, { id: 2 }];
    expect(
      colors(undefined, {
        type: ADD_COLORS,
        payload: mockColors
      })
    ).toEqual(mockColors);
  });
});
