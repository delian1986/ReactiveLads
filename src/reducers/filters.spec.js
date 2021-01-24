import filters from "./filters";
import {
  SELECT_MATERIAL_TYPE,
  SELECT_COLOR,
  SELECT_TAG,
  SET_SEARCH_QUERY,
  IS_IN_FAVORITES_MODE,
  SET_ALL_FILTERS,
  RESET_ALL_FILTERS
} from "../actions/constants";

describe("filters reducers", () => {
  let mockedState;
  beforeEach(() => {
    mockedState = {
      selectedColors: [],
      selectedMaterialTypes: [],
      selectedTags: [],
      isInFavoritesMode: false,
      searchQuery: ""
    };
  });

  it("should return initial state", function () {
    expect(filters(undefined, {})).toEqual({
      selectedColors: [],
      selectedMaterialTypes: [],
      selectedTags: [],
      isInFavoritesMode: false,
      searchQuery: ""
    });
  });

  it("should handle SELECT_MATERIAL_TYPE when material is already added", function () {
    const typeId = 1;
    const mockedInitialState = {...mockedState};
    mockedInitialState.selectedMaterialTypes = [typeId];
    expect(
      filters(mockedInitialState, {
        type: SELECT_MATERIAL_TYPE,
        payload: typeId
      })
    ).toEqual(mockedState);
  });

  it("should handle SELECT_MATERIAL_TYPE when material is not added", function () {
    const typeId = 1;
    mockedState.selectedMaterialTypes.push(typeId);
    expect(
      filters(undefined, {
        type: SELECT_MATERIAL_TYPE,
        payload: typeId
      })
    ).toEqual(mockedState);
  });

  it("should handle SELECT_COLOR when color is already added", function () {
    const colorId = 1;
    const mockedInitialState = {...mockedState};
    mockedInitialState.selectedColors = [colorId];
    expect(
      filters(mockedInitialState, {
        type: SELECT_COLOR,
        payload: colorId
      })
    ).toEqual(mockedState);
  });

  it("should handle SELECT_COLOR when color is not added", function () {
    const colorId = 1;
    mockedState.selectedColors.push(colorId);
    expect(
      filters(undefined, {
        type: SELECT_COLOR,
        payload: colorId
      })
    ).toEqual(mockedState);
  });

  it("should handle SELECT_TAG when tag is already added", function () {
    const tagId = 1;
    const mockedInitialState = {...mockedState};
    mockedInitialState.selectedTags = [tagId];
    expect(
      filters(mockedInitialState, {
        type: SELECT_TAG,
        payload: tagId
      })
    ).toEqual(mockedState);
  });

  it("should handle SELECT_TAG when tag is not added", function () {
    const tagId = 1;
    mockedState.selectedTags.push(tagId);
    expect(
      filters(undefined, {
        type: SELECT_TAG,
        payload: tagId
      })
    ).toEqual(mockedState);
  });

  it("should handle IS_IN_FAVORITES_MODE", function () {
    const payload = true;
    mockedState.isInFavoritesMode = payload;
    expect(
      filters(undefined, {
        type: IS_IN_FAVORITES_MODE,
        payload
      })
    ).toEqual(mockedState);
  });

  it("should handle SET_ALL_FILTERS", function () {
    const payload = {
      tags: [1, 2],
      colors: [3, 4],
      types: [5, 6],
      searchQuery: "7, 8",
      favoritesMode: false
    };
    mockedState.selectedTags = payload.tags;
    mockedState.selectedColors = payload.colors;
    mockedState.selectedMaterialTypes = payload.types;
    mockedState.searchQuery = payload.searchQuery;
    mockedState.isInFavoritesMode = payload.favoritesMode;
    expect(
      filters(undefined, {
        type: SET_ALL_FILTERS,
        payload
      })
    ).toEqual(mockedState);
  });

  it("should handle RESET_ALL_FILTERS", function () {
    expect(
      filters(undefined, {
        type: RESET_ALL_FILTERS
      })
    ).toEqual(mockedState);
  });

  it("should handle SET_SEARCH_QUERY", function () {
    const mockQuery = "mockQuery";
    expect(
      filters(undefined, {
        type: SET_SEARCH_QUERY,
        payload: mockQuery
      })
    ).toEqual({
      isInFavoritesMode: false,
      searchQuery: mockQuery,
      selectedColors: [],
      selectedMaterialTypes: [],
      selectedTags: []
    });
  });
});
