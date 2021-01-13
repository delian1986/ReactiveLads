import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import materialTypes from "./materialTypes";

export default combineReducers({
  auth,
  message,
  materialTypes
});
