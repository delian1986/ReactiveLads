import { loadMoreDisable, loadMoreEnable } from "../actions/loadMore";
import loadMore from "./loadMore";

describe("loadMore reducer", () => {
  it("should return state by default", function () {
		const state = false;
    expect(loadMore(state, {})).toEqual(state);
	});

  it("should return true for loadMoreEnable", function () {
    expect(loadMore(undefined, loadMoreEnable())).toEqual(true);
	});

  it("should return false for loadMoreDisable", function () {
    expect(loadMore(undefined, loadMoreDisable())).toEqual(false);
	});
});