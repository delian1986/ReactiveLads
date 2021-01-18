import { createSelector } from "reselect";

const isLoggedIn = (state) => state.auth.isLoggedIn;
const tokenSelector = (state) => state.auth.token;

export const getLoggedInStatus = createSelector(
  [isLoggedIn],
  (authState) => authState
);

export const getToken = createSelector(tokenSelector, (token) => token);
