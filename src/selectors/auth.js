import { createSelector } from "reselect";

const isLoggedIn = (state) => state.auth.isLoggedIn;
const isPending = (state) => state.auth.isPending;

export const getLoggedInStatus = createSelector(
  [isLoggedIn],
  (authState) => authState
);

export const getIsAuthPending = createSelector([isPending], (pending) => pending);
