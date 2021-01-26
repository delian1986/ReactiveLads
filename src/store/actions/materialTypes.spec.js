import { ADD_MATERIAL_TYPES } from "./constants";
import { addMaterialTypes } from "./materialTypes";

describe("materialTypes actions", () => {
  it("should create action for addMaterialTypes", function () {
    const materialTypes = [];

    const expectedAction = {
      type: ADD_MATERIAL_TYPES,
      payload: materialTypes
    };
    expect(addMaterialTypes(materialTypes)).toEqual(expectedAction);
  });
});
