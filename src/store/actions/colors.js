import { ADD_COLORS } from "./constants";

export const addColors = (colors) => {
  return {
    type: ADD_COLORS,
    payload: colors
  };
};
