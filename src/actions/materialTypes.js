import { FETCH_MATERIAL_TYPES } from "./constants";

export const fetchMaterialTypes = (materials) => {
  return {
    type: FETCH_MATERIAL_TYPES,
    payload: materials
  };
};
