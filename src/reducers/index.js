import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import materialTypes from "./materialTypes";
import colors from "./colors";
import filters from "./filters";
import tags from "./tags";

export default combineReducers({
  auth,
  message,
  materialTypes,
  colors,
  tags,
  filters
});
