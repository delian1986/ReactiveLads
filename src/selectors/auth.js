import { createSelector } from "reselect";

const isLoggedIn = (state) => state.auth.isLoggedIn;

export const getLoggedInStatus = createSelector(
  [isLoggedIn],
  (authState) => authState
);
