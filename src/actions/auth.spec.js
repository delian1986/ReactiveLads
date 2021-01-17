import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  START_PENDING,
  STOP_PENDING
} from "./constants";
import {
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
