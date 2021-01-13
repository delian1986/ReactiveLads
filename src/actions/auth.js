import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE
} from "./constants";

import StorageService from "../services/storageService";
import { userService } from "../services/userService";

export const register = ({ email, password }) => (dispatch) => {
  return userService.register({ email, password }).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: {
          token: response.accessToken,
          email
        }
      });

      StorageService.saveUserInfo({
        token: response.accessToken,
        email
      });

      return Promise.resolve();
    },
    (error) => {
      const message = error.message;

      dispatch({
        type: REGISTER_FAIL
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject();
    }
  );
};

export const login = ({ email, password }) => (dispatch) => {
  return userService.login({ email, password }).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token: data.accessToken,
          email
        }
      });

      StorageService.saveUserInfo({
        token: data.accessToken,
        email
      });

      return Promise.resolve();
    },
    (error) => {
      const message = error.message;

      dispatch({
        type: LOGIN_FAIL,
        payload: message
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT
  });

  StorageService.clear();
};
