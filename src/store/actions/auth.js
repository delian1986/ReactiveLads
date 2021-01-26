import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGIN_FAIL,
  REGISTER_FAIL,
  START_PENDING,
  STOP_PENDING,
  UPDATE_USER
} from "./constants";
import StorageService from "../../services/storageService";
import history from "../../services/history";
import { clearMessage, setMessage } from "./message";
const API_BASE_URL = process.env.API_BASE_URL;
const PUBLIC_BASE_PATH = process.env.PUBLIC_BASE_PATH;

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

export const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    payload: user
  };
};

export const loginAsync = ({ email, password }) => async (dispatch) => {
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

export const registerAsync = ({ email, password }) => async (dispatch) => {
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

export const logoutAsync = () => async (dispatch) => {
  dispatch(logout());
  StorageService.clear();
  history.push(`${PUBLIC_BASE_PATH}login`);
};

export const getUserDetailsAsync = ({
  id,
  firstName,
  lastName,
  photoUrl,
  email,
  password
}) => async (dispatch) => {
  //update user details
  await fetch(`${API_BASE_URL}/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      firstName,
      lastName,
      photoUrl,
      email,
      password
    })
  })
    .then((data) => data.json())
    .then((user) => {
      StorageService.saveUserInfo(user);
      dispatch(updateUser(user));
    });
};
