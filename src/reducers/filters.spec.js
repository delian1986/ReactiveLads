import filters from "./filters";
import {
  SELECT_MATERIAL_TYPE,
  SELECT_COLOR,
  SELECT_TAG
} from "../actions/constants";

describe("filters reducers", () => {
  let mockedState;
  beforeEach(() => {
    mockedState = {
      selectedColors: [],
      selectedMaterialTypes: [],
      selectedTags: [],
      isInFavoritesMode: false
    };
  });

  it("should return initial state", function () {
    expect(filters(undefined, {})).toEqual({
      selectedColors: [],
      selectedMaterialTypes: [],
      selectedTags: [],
      isInFavoritesMode: false
    });
  });

  it("should handle SELECT_MATERIAL_TYPE when material is already added", function () {
    const typeId = 1;
    mockedState.selectedMaterialTypes.push(typeId);
    expect(
      filters(undefined, {
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
    mockedState.selectedColors.push(colorId);
    expect(
      filters(undefined, {
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
    mockedState.selectedTags.push(tagId);
    expect(
      filters(undefined, {
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
});
