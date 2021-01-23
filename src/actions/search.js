import { SET_SEARCH_QUERY } from "./constants";

export const setSearchQuery = (value) => ({
  type: SET_SEARCH_QUERY,
  payload: value
});
