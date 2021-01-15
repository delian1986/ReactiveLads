import { FETCH_COLORS } from "./constants";

export const fetchColors = (colors) => {
  return {
    type: FETCH_COLORS,
    payload: colors
  };
};
