import auth from "./auth";
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  START_PENDING,
  STOP_PENDING
} from "../actions/constants";

describe("auth reducers", () => {
  const userData = { email: "mail@abv.bg", token: "auth_token" };

  it("should return initial state", function () {
    const initialState = {
      email: null,
      isLoggedIn: false,
      token: null,
      firstName: null,
      id: null,
      lastName: null,
      photoUrl: null,
      isPending: false
    };
    expect(auth(undefined, {})).toEqual(initialState);
  });

  it("should handle REGISTER_SUCCESS", function () {
    expect(
      auth([], {
        type: REGISTER_SUCCESS,
        payload: {
          email: userData.email,
          token: userData.token
        }
      })
    ).toEqual({
      email: userData.email,
      isLoggedIn: true,
      token: userData.token
    });
  });

  it("should handle REGISTER_FAIL", function () {
    expect(
      auth([], {
        type: REGISTER_FAIL
      })
    ).toEqual({
      email: null,
      isLoggedIn: false,
      token: null
    });
  });

  it("should handle LOGIN_SUCCESS", function () {
    expect(
      auth([], {
        type: LOGIN_SUCCESS,
        payload: {
          email: userData.email,
          isLoggedIn: true,
          token: userData.token
        }
      })
    ).toEqual({
      email: userData.email,
      isLoggedIn: true,
      token: userData.token
    });
  });

  it("should handle LOGIN_FAIL", function () {
    expect(
      auth([], {
        type: LOGIN_FAIL
      })
    ).toEqual({
      email: null,
      isLoggedIn: false,
      token: null
    });
  });

  it("should handle LOGOUT", function () {
    expect(
      auth([], {
        type: LOGOUT
      })
    ).toEqual({
      email: null,
      isLoggedIn: false,
      token: null,
      firstName: null,
      id: null,
      lastName: null,
      photoUrl: null
    });
  });

  it("should handle START_PENDING", function () {
    expect(
      auth([], {
        type: START_PENDING
      })
    ).toEqual({
      isPending: true
    });
  });

  it("should handle STOP_PENDING", function () {
    expect(
      auth([], {
        type: STOP_PENDING
      })
    ).toEqual({
      isPending: false
    });
  });
});
