import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  START_PENDING,
  STOP_PENDING,
  UPDATE_USER
} from "../actions/constants";
import StorageService from "../../services/storageService";

const user = StorageService.getUser();
const token = StorageService.getToken();

const initialState =
  token && user
    ? {
        isLoggedIn: true,
        email: user.email,
        token,
        isPending: false,
        firstName: user.firstName,
        lastName: user.lastName,
        photoUrl: user.photoUrl,
        id: user.id
      }
    : {
        isLoggedIn: false,
        email: null,
        token: null,
        isPending: false,
        firstName: null,
        lastName: null,
        photoUrl: null,
        id: null
      };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token: payload.token,
        email: payload.email
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        email: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token: payload.token,
        email: payload.email
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        email: null
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        email: null,
        token: null,
        id: null,
        firstName: null,
        lastName: null,
        photoUrl: null
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
    case UPDATE_USER: {
      return {
        ...state,
        firstName: payload.firstName,
        lastName: payload.lastName,
        photoUrl: payload.photoUrl,
        id: payload.id
      };
    }
    default:
      return state;
  }
}
