import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import materialTypes from "./materialTypes";
import colors from "./colors";
import filters from "./filters";
import tags from "./tags";
import vrScans from "./vrScans";
import page from "./page";

export default combineReducers({
  auth,
  message,
  materialTypes,
  colors,
  tags,
  filters,
  vrScans,
  page
});
