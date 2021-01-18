import { getIsAuthPending, getLoggedInStatus } from "./index";

describe("auth selectors", () => {
  it("should return getLoggedInStatus", function () {
    const mockParams = {
      isLoggedIn: true
    };

    const selected = getLoggedInStatus.resultFunc(mockParams);
    expect(typeof selected.isLoggedIn).toBe("boolean");
  });

  it("should return getIsAuthPending", function () {
    const mockParams = {
      isPending: true
    };

    const selected = getIsAuthPending.resultFunc(mockParams);
    expect(typeof selected.isPending).toBe("boolean");
  });
});
