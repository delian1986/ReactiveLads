import { addFavorite, initFavorites, removeFavorite } from "../actions/favorites";
import favorites from "./favorites";

describe("favorites reducer", () => {
  it("should return state by default", function () {
		const state = [{id: 123}];
    expect(favorites(state, {})).toEqual(state);
	});

  it("should return return the payload array", function () {
		const payload = [{id: 123}, {id: 121}];
    expect(favorites([], initFavorites(payload))).toEqual(payload);
	});

  it("should add the payload to the state array and return the new state", function () {
		const itemInState = {id: 123};
		const itemInPayload = {id: 121};
		const expectedResult = [itemInState, itemInPayload];
    expect(favorites([itemInState], addFavorite(itemInPayload))).toEqual(expectedResult);
	});

  it("should remove the item with id matching the payload from the state array and return the new state", function () {
		const payload = 121;
		const remainingItem = {id: 123};
		const state = [remainingItem, {id: 121}];
		const expectedResult = [remainingItem];
    expect(favorites(state, removeFavorite(payload))).toEqual(expectedResult);
	});
});