import search from "./search";
import { SET_SEARCH_QUERY } from "../actions/constants";

describe("search reducers", () => {
  it("should return initial state", function () {
    expect(search(undefined, {})).toEqual("");
  });

  it("should handle SET_SEARCH_QUERY", function () {
    const mockQuery = "mockQuery";
    expect(
      search(undefined, {
        type: SET_SEARCH_QUERY,
        payload: mockQuery
      })
    ).toEqual(mockQuery);
  });
});
