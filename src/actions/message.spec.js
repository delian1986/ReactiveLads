import { CLEAR_MESSAGE, SET_MESSAGE } from "./constants";
import { clearMessage, setMessage } from "./message";

describe("message actions", () => {
  it("should create action for setMessage", function () {
    const message = { message: "mock message" };

    const expectedAction = {
      type: SET_MESSAGE,
      payload: message
    };
    expect(setMessage(message)).toEqual(expectedAction);
  });

  it("should create action for clearMessage", function () {
    const expectedAction = {
      type: CLEAR_MESSAGE
    };
    expect(clearMessage()).toEqual(expectedAction);
  });
});
