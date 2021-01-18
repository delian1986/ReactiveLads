import message from "./message";
import { CLEAR_MESSAGE, SET_MESSAGE } from "../actions/constants";

describe("message reducers", () => {
  it("should return initial state", function () {
    expect(message(undefined, {})).toEqual({});
  });

  it("should handle SET_MESSAGE", function () {
    const mockMessage = { message: "mock it" };
    expect(
      message(
        {},
        {
          type: SET_MESSAGE,
          payload: mockMessage
        }
      )
    ).toEqual({ message: mockMessage });
  });

  it("should handle CLEAR_MESSAGE", function () {
    expect(
      message(
        {},
        {
          type: CLEAR_MESSAGE
        }
      )
    ).toEqual({ message: "" });
  });
});
