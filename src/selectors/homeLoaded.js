import { createSelector } from "reselect";

const isLoaded = (state) => state.isHomeLoaded;

export const getIsHomeLoaded = createSelector([isLoaded], (loaded) => loaded);
