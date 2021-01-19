import { SELECT_MATERIAL_TYPE, SELECT_TAG, SELECT_COLOR } from "./constants";
import { selectMaterialType, selectTag, selectColor } from "./filters";

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
});
