import { createSelector } from "reselect";

const storedMessage = (state) => state.message;

export const getMessage = createSelector([storedMessage], (message) => message);
