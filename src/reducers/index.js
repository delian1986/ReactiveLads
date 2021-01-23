import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import materialTypes from "./materialTypes";
import colors from "./colors";
import filters from "./filters";
import tags from "./tags";
import vrScans from "./vrScans";
import page from "./page";
import loadMore from "./loadMore";
import isHomeLoaded from "./isHomeLoaded";
import favorites from "./favorites";
import search from "./search";
import isVrScansLoaded from "./isVrScansLoaded";

const appReducer = combineReducers({
  auth,
  message,
  materialTypes,
  colors,
  tags,
  filters,
  vrScans,
  page,
  loadMore,
  isHomeLoaded,
  favorites,
  search,
  isVrScansLoaded
});

export default (state, action) => {
  if (action.type === "LOGOUT") return appReducer(undefined, action);
  return appReducer(state, action);
};
