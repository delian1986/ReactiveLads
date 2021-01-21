import { createSelector } from "reselect";

const currPage = (state) => state.page;

export const getPage = createSelector([currPage], (page) => page);
