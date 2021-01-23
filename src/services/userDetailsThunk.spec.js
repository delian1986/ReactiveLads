import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { userDetailsThunk } from "./userDetailsThunk";
import { UPDATE_USER } from "../actions/constants";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const API_BASE_URL = process.env.API_BASE_URL;

describe("async auth actions", () => {
  afterEach(() => {
    fetchMock.restore();
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
    return store.dispatch(userDetailsThunk(user)).then(() => {
      const actualActions = store.getActions().map((action) => action.type);
      expect(actualActions).toEqual(expectedActions);
    });
  });
});
