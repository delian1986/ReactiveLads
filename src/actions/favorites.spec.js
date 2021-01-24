import { ADD_FAVORITE, INIT_FAVORITES, REMOVE_FAVORITE } from "./constants";
import { addFavorite, initFavorites, removeFavorite } from "./favorites";

describe("favorites actions", () => {
	it("should create action for initFavorites", function () {
    const favorites = [{test: "test"}];
    const expectedAction = {
      type: INIT_FAVORITES,
      payload: favorites
		};
		
    expect(initFavorites(favorites)).toEqual(expectedAction);
	});
	
	it("should create action for addFavorite", function () {
    const favorite = {test: "test"};
    const expectedAction = {
      type: ADD_FAVORITE,
      payload: favorite
		};
		
    expect(addFavorite(favorite)).toEqual(expectedAction);
  });
	
	it("should create action for removeFavorite", function () {
    const favorite = {test: "test"};
    const expectedAction = {
      type: REMOVE_FAVORITE,
      payload: favorite
		};
		
    expect(removeFavorite(favorite)).toEqual(expectedAction);
  });
});