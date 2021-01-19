import { createSelector } from "reselect";

const isLoggedIn = (state) => state.auth.isLoggedIn;
const isPending = (state) => state.auth.isPending;
const tokenSelector = (state) => state.auth.token;

export const getLoggedInStatus = createSelector(
  [isLoggedIn],
  (authState) => authState
);

export const getIsAuthPending = createSelector([isPending], (pending) => pending);

export const getToken = createSelector(tokenSelector, (token) => token);
