import { ADD_MATERIAL_TYPES } from "./constants";

export const addMaterialTypes = (materials) => {
  return {
    type: ADD_MATERIAL_TYPES,
    payload: materials
  };
};
