import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGIN_FAIL,
  REGISTER_FAIL,
  START_PENDING,
  STOP_PENDING
} from "./constants";

export const register = (user) => {
  return {
    type: REGISTER_SUCCESS,
    payload: user
  };
};

export const login = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user
  };
};

export const startPending = () => {
  return {
    type: START_PENDING
  };
};

export const stopPending = () => {
  return {
    type: STOP_PENDING
  };
};

export const registerFailed = () => {
  return {
    type: REGISTER_FAIL
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};

export const loginFailed = () => {
  return {
    type: LOGIN_FAIL
  };
};
