import { SET_SEARCH_QUERY } from "./constants";
import { setSearchQuery } from "./search";

describe("search actions", () => {
  it("should create action for setSearchQuery", function () {
    const searchQuery = "mockQuery";

    const expectedAction = {
      type: SET_SEARCH_QUERY,
      payload: searchQuery
    };
    expect(setSearchQuery(searchQuery)).toEqual(expectedAction);
  });
});
