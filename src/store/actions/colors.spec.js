import { ADD_COLORS } from "./constants";
import { addColors } from "./colors";

describe("colors actions", () => {
  it("should create action for addColors", function () {
    const colors = [];

    const expectedAction = {
      type: ADD_COLORS,
      payload: colors
    };
    expect(addColors(colors)).toEqual(expectedAction);
  });
});
