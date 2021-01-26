import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  SET_MESSAGE,
  START_PENDING,
  STOP_PENDING,
  UPDATE_USER
} from "./constants";
import {
  getUserDetailsAsync,
  login,
  loginFailed,
  logout,
  register,
  registerFailed,
  startPending,
  stopPending
} from "./auth";

describe("auth actions", () => {
  it("should create an action to register success", function () {
    const user = { authToken: "mocked_token" };
    const expectedAction = {
      type: REGISTER_SUCCESS,
      payload: user
    };
    expect(register(user)).toEqual(expectedAction);
  });

  it("should create an action to register fail", function () {
    const expectedAction = {
      type: REGISTER_FAIL
    };
    expect(registerFailed()).toEqual(expectedAction);
  });

  it("should create an action to login success", function () {
    const user = { authToken: "mocked_token" };
    const expectedAction = {
      type: LOGIN_SUCCESS,
      payload: user
    };
    expect(login(user)).toEqual(expectedAction);
  });

  it("should create an action to login fail", function () {
    const expectedAction = {
      type: LOGIN_FAIL
    };
    expect(loginFailed()).toEqual(expectedAction);
  });

  it("should create an action to logout", function () {
    const expectedAction = {
      type: LOGOUT
    };
    expect(logout()).toEqual(expectedAction);
  });

  it("should create an action to start pending", function () {
    const expectedAction = {
      type: START_PENDING
    };
    expect(startPending()).toEqual(expectedAction);
  });

  it("should create an action to stop pending", function () {
    const expectedAction = {
      type: STOP_PENDING
    };
    expect(stopPending()).toEqual(expectedAction);
  });
});

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { loginAsync, logoutAsync, registerAsync } from "./auth";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const API_BASE_URL = process.env.API_BASE_URL;

describe("async auth actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates actions on login success", function () {
    const userCredentials = { email: "valid@valid.bg", password: "1234" };
    const store = mockStore({ auth: {} });
    const expectedActions = [START_PENDING, STOP_PENDING, LOGIN_SUCCESS];

    fetchMock.postOnce(`${API_BASE_URL}/login`, {
      headers: {
        "Content-Type": "application/json"
      },
      accessToken: "successful_auth"
    });
    return store.dispatch(loginAsync(userCredentials)).then(() => {
      const actualActions = store.getActions().map((action) => action.type);
      expect(actualActions).toEqual(expectedActions);
    });
  });

  it("creates actions on login fail", function () {
    const userCredentials = { email: "invalid@invalid.bg", password: "123" };
    const store = mockStore({ auth: {} });
    const expectedActions = [START_PENDING, STOP_PENDING, LOGIN_FAIL, SET_MESSAGE];

    fetchMock.postOnce(`${API_BASE_URL}/login`, {
      headers: {
        "Content-Type": "application/json"
      },
      message: "Login fail"
    });
    return store.dispatch(loginAsync(userCredentials)).then(() => {
      const actualActions = store.getActions().map((action) => action.type);
      expect(actualActions).toEqual(expectedActions);
    });
  });

  it("set message action on login fail", function () {
    const userCredentials = { email: "invalid@invalid.bg", password: "123" };
    const store = mockStore({ auth: {} });
    const expectedActions = "SET_MESSAGE";

    fetchMock.postOnce(`${API_BASE_URL}/login`, {
      headers: {
        "Content-Type": "application/json"
      },
      message: "Login fail"
    });
    return store.dispatch(loginAsync(userCredentials)).then(() => {
      jest.useFakeTimers();
      setTimeout(() => {
        const actualActions = store.getActions().map((action) => action.type);
        expect(actualActions[3]).toEqual(expectedActions);
      }, 3000);
      jest.runAllTimers();
    });
  });

  it("creates actions on register success", function () {
    const userCredentials = { email: "valid@valid.bg", password: "1233" };
    const store = mockStore({ auth: {} });
    const expectedActions = [START_PENDING, STOP_PENDING, REGISTER_SUCCESS];

    fetchMock.postOnce(`${API_BASE_URL}/register`, {
      headers: {
        "Content-Type": "application/json"
      },
      accessToken: "successful_auth"
    });
    return store.dispatch(registerAsync(userCredentials)).then(() => {
      const actualActions = store.getActions().map((action) => action.type);
      expect(actualActions).toEqual(expectedActions);
    });
  });

  it("creates actions on register fail", function () {
    const userCredentials = { email: "invalid@invalid.bg", password: "123" };
    const store = mockStore({ auth: {} });
    const expectedActions = [
      START_PENDING,
      STOP_PENDING,
      REGISTER_FAIL,
      SET_MESSAGE
    ];

    fetchMock.postOnce(`${API_BASE_URL}/register`, {
      headers: {
        "Content-Type": "application/json"
      },
      message: "register fail"
    });
    return store.dispatch(registerAsync(userCredentials)).then(() => {
      const actualActions = store.getActions().map((action) => action.type);
      expect(actualActions).toEqual(expectedActions);
    });
  });

  it("creates actions on logout", function () {
    const store = mockStore({ auth: {} });
    const expectedActions = [LOGOUT];

    store.dispatch(logoutAsync());
    const actualActions = store.getActions().map((action) => action.type);
    expect(actualActions).toEqual(expectedActions);
  });

  it("should update user", function () {
    const user = {
      id: 1,
      firstName: "fn",
      lastName: "ln",
      photoUrl: "pu",
      email: "em",
      password: "ps"
    };
    const store = mockStore({ auth: {} });
    const expectedActions = [UPDATE_USER];

    fetchMock.patchOnce(`${API_BASE_URL}/users/1`, {
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    return store.dispatch(getUserDetailsAsync(user)).then(() => {
      const actualActions = store.getActions().map((action) => action.type);
      expect(actualActions).toEqual(expectedActions);
    });
  });
});
