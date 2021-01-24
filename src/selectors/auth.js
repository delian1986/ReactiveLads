import { createSelector } from "reselect";

const isLoggedIn = (state) => state.auth.isLoggedIn;
const isPending = (state) => state.auth.isPending;
const tokenSelector = (state) => state.auth.token;
const emailSelector = (state) => state.auth.email;
const photoUrlSelector = (state) => state.auth.photoUrl;

export const getLoggedInStatus = createSelector(
  [isLoggedIn],
  (authState) => authState
);

export const getIsAuthPending = createSelector([isPending], (pending) => pending);

export const getToken = createSelector(tokenSelector, (token) => token);

export const getEmail = createSelector(emailSelector, (email) => email);

export const getPhotoUrl = createSelector(photoUrlSelector, (photoUrl) => photoUrl);
