import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import {
  LOGIN_FAIL,
  LOGOUT,
  REGISTER_FAIL,
  SET_MESSAGE,
  START_PENDING,
  STOP_PENDING
} from "../actions/constants";
import { loginThunk, logoutThunk, registerThunk } from "./authThunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const API_BASE_URL = process.env.API_BASE_URL;

describe("async auth actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates actions on login fail", function () {
    const userCredentials = { email: "invalid@invalid.bg", password: "123" };
    const store = mockStore({ auth: {} });
    const expectedActions = [START_PENDING, STOP_PENDING, LOGIN_FAIL, SET_MESSAGE];

    fetchMock.postOnce(`${API_BASE_URL}/login`, {
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userCredentials)
    });
    return store.dispatch(loginThunk(userCredentials)).then(() => {
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
      body: JSON.stringify(userCredentials)
    });
    return store.dispatch(registerThunk(userCredentials)).then(() => {
      const actualActions = store.getActions().map((action) => action.type);
      expect(actualActions).toEqual(expectedActions);
    });
  });

  it("creates actions on logout", function () {
    const store = mockStore({ auth: {} });
    const expectedActions = [LOGOUT];

    store.dispatch(logoutThunk());
    const actualActions = store.getActions().map((action) => action.type);
    expect(actualActions).toEqual(expectedActions);
  });
});
