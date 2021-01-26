import tags from "./tags";
import { ADD_TAGS } from "../actions/constants";

describe("tags reducers", () => {
  it("should return initial state", function () {
    expect(tags(undefined, {})).toEqual([]);
  });

  it("should handle ADD_TAGS", function () {
    const mockTags = [{ id: 1 }, { id: 2 }];
    expect(
      tags(undefined, {
        type: ADD_TAGS,
        payload: mockTags
      })
    ).toEqual(mockTags);
  });
});
