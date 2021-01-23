import {
  SELECT_MATERIAL_TYPE,
  SELECT_COLOR,
  SELECT_TAG,
  IS_IN_FAVORITES_MODE,
  SET_ALL_FILTERS,
  SET_SEARCH_QUERY,
  RESET_ALL_FILTERS
} from "./constants";

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

export const setAllFilters = (presets) => {
  return {
    type: SET_ALL_FILTERS,
    payload: presets
  };
};

export const toggleFavoritesMode = (mode) => {
  return {
    type: IS_IN_FAVORITES_MODE,
    payload: mode
  };
};

export const setSearchQuery = (value) => ({
  type: SET_SEARCH_QUERY,
  payload: value
});

export const resetAllFilters = () => ({
  type: RESET_ALL_FILTERS
});
