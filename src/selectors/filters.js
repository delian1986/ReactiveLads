import { createSelector } from "reselect";

const isInFavMode = (state) => state.filters.isInFavoritesMode;

export const getIsInFavoritesMode = createSelector(
  isInFavMode,
  (favMode) => favMode
);
