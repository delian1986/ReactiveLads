import {
  login,
  loginFailed,
  logout,
  register,
  registerFailed,
  startPending,
  stopPending
} from "../actions/auth";
import StorageService from "./storageService";
import history from "./history";
import { clearMessage, setMessage } from "../actions/message";
const API_BASE_URL = process.env.API_BASE_URL;
const PUBLIC_BASE_PATH = process.env.PUBLIC_BASE_PATH;

export const loginThunk = ({ email, password }) => async (dispatch) => {
  dispatch(startPending());

  await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
    .then((data) => data.json())
    .then((data) => {
      dispatch(stopPending());
      if (data.accessToken) {
        const token = data.accessToken;
        dispatch(login({ email, token }));
        StorageService.saveToken(token);
        StorageService.saveUserInfo({ email: email });
        history.push(PUBLIC_BASE_PATH);
      } else {
        throw new Error(data);
      }
    })
    .catch((error) => {
      const message = error.message || error;
      dispatch(loginFailed());
      dispatch(setMessage(message));
      setTimeout(() => {
        dispatch(clearMessage());
      }, 3000);
    });
};

export const registerThunk = ({ email, password }) => async (dispatch) => {
  dispatch(startPending());

  await fetch(`${API_BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
    .then((data) => data.json())
    .then((data) => {
      dispatch(stopPending());
      if (data.accessToken) {
        const token = data.accessToken;
        dispatch(register({ email, token }));
        StorageService.saveToken(token);
        StorageService.saveUserInfo({ email: email });
        history.push(PUBLIC_BASE_PATH);
      } else {
        throw new Error(data);
      }
    })
    .catch((error) => {
      const message = error.message || error;
      dispatch(registerFailed());
      dispatch(setMessage(message));
      setTimeout(() => {
        dispatch(clearMessage());
      }, 3000);
    });
};

export const logoutThunk = () => async (dispatch) => {
  dispatch(logout());
  StorageService.clear();
  history.push(`${PUBLIC_BASE_PATH}login`);
};
