const { getMessage } = require("./message");

describe("message selectors", () => {
  it("should return getMessage", function () {
    const mockParams = {
      message: "secret_message"
    };

    const selected = getMessage.resultFunc(mockParams);
    expect(selected).toEqual(mockParams);
  });
});
