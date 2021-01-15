import { SELECT_MATERIAL_TYPE, SELECT_COLOR, SELECT_TAG } from "./constants";

export const selectMaterialType = (material) => {
  return {
    type: SELECT_MATERIAL_TYPE,
    payload: material
  };
};

export const selectColor = (color) => {
  return {
    type: SELECT_COLOR,
    payload: color
  };
};

export const selectTag = (tag) => {
  return {
    type: SELECT_TAG,
    payload: tag
  };
};
