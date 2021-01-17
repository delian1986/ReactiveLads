import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  START_PENDING,
  STOP_PENDING
} from "../actions/constants";
import StorageService from "../services/storageService";

const email = StorageService.getEmail();
const token = StorageService.getToken();

const initialState = token
  ? { isLoggedIn: true, email, token, isPending: false }
  : { isLoggedIn: false, email: null, token: null, isPending: false };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        email: payload.email,
        token: payload.token
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        email: null,
        token: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        email: payload.email,
        token: payload.token
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        email: null,
        token: null
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        email: null,
        token: null
      };
    case START_PENDING:
      return {
        ...state,
        isPending: true
      };
    case STOP_PENDING:
      return {
        ...state,
        isPending: false
      };
    default:
      return state;
  }
}
