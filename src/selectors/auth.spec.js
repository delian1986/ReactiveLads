import { getIsAuthPending, getLoggedInStatus } from "./auth";

describe("auth selectors", () => {
  it("should return getLoggedInStatus", function () {
    const mockParams = {
      isLoggedIn: true
    };

    const selected = getLoggedInStatus.resultFunc(mockParams);
    expect(selected).toEqual(mockParams);
  });

  it("should return getIsAuthPending", function () {
    const mockParams = {
      isPending: true
    };

    const selected = getIsAuthPending.resultFunc(mockParams);
    expect(selected).toEqual(mockParams);
  });
});
