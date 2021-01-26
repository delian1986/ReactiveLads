import materialTypes from "./materialTypes";
import { ADD_MATERIAL_TYPES } from "../actions/constants";

describe("tags reducers", () => {
  it("should return initial state", function () {
    expect(materialTypes(undefined, {})).toEqual([]);
  });

  it("should handle ADD_MATERIAL_TYPES", function () {
    const mockTypes = [{ id: 1 }, { id: 2 }];
    expect(
      materialTypes(undefined, {
        type: ADD_MATERIAL_TYPES,
        payload: mockTypes
      })
    ).toEqual(mockTypes);
  });
});
