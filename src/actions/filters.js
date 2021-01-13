import { SELECT_MATERIAL_TYPE } from "./constants";

export const selectMaterialType = (material) => {
  return {
    type: SELECT_MATERIAL_TYPE,
    payload: material
  };
};
