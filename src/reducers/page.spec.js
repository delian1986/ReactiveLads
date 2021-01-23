import page from "./page";
import { SET_PAGE } from "../actions/constants";

describe("page reducers", () => {
  it("should return initial state", function () {
    expect(page(0, "")).toEqual(0);
  });

  it("should handle SET_PAGE", function () {
    const mockPage = 2;
    expect(
      page(
        {},
        {
          type: SET_PAGE,
          payload: mockPage
        }
      )
    ).toEqual(mockPage);
  });
});
