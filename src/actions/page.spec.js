import { SET_PAGE } from "./constants";
import { setPage } from "./page";

describe("page actions", () => {
  it("should create action for setPage", function () {
    const page = { page: 1 };

    const expectedAction = {
      type: SET_PAGE,
      payload: page
    };
    expect(setPage(page)).toEqual(expectedAction);
  });
});
