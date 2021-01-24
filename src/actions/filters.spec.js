import {
  SELECT_MATERIAL_TYPE,
  SELECT_TAG,
  SELECT_COLOR,
  SET_SEARCH_QUERY,
  SET_ALL_FILTERS,
  IS_IN_FAVORITES_MODE,
  RESET_ALL_FILTERS
} from "./constants";
import {
  selectMaterialType,
  selectTag,
  selectColor,
  setSearchQuery,
  setAllFilters,
  toggleFavoritesMode,
  resetAllFilters
} from "./filters";

describe("filters actions", () => {
  it("should create action for selectMaterialType", function () {
    const materialType = { id: 1 };

    const expectedAction = {
      type: SELECT_MATERIAL_TYPE,
      payload: materialType
    };
    expect(selectMaterialType(materialType)).toEqual(expectedAction);
  });

  it("should create action for selectTag", function () {
    const tag = { id: 1 };

    const expectedAction = {
      type: SELECT_TAG,
      payload: tag
    };
    expect(selectTag(tag)).toEqual(expectedAction);
  });

  it("should create action for selectColor", function () {
    const color = { id: 1 };

    const expectedAction = {
      type: SELECT_COLOR,
      payload: color
    };
    expect(selectColor(color)).toEqual(expectedAction);
  });

  it("should create action for toggleFavoritesMode", function () {
    const payload = { isInFavoritesMode: true };

    const expectedAction = {
      type: IS_IN_FAVORITES_MODE,
      payload
    };
    expect(toggleFavoritesMode(payload)).toEqual(expectedAction);
  });

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

  describe("presets actions", () => {
    it("should create action for setAllFilters", function () {
      const filters = {selectedTags: []};

      const expectedAction = {
        type: SET_ALL_FILTERS,
        payload: filters
      };
      expect(setAllFilters(filters)).toEqual(expectedAction);
    });

    it("should create action for resetAllFilters", function () {
      const expectedAction = {
        type: RESET_ALL_FILTERS
      };
      expect(resetAllFilters()).toEqual(expectedAction);
    });
  });
});
