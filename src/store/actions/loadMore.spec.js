import { LOAD_MORE_DISABLE, LOAD_MORE_ENABLE } from "./constants";
import { loadMoreDisable, loadMoreEnable } from "./loadMore";

describe("loadMore actions", () => {
  it("should create action for loadMoreEnable", function () {
    const expectedAction = {
      type: LOAD_MORE_ENABLE
    };

    expect(loadMoreEnable()).toEqual(expectedAction);
  });

  it("should create action for loadMoreDisable", function () {
    const expectedAction = {
      type: LOAD_MORE_DISABLE
    };

    expect(loadMoreDisable()).toEqual(expectedAction);
  });
});
