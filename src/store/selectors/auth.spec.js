import { getEmail, getIsAuthPending, getLoggedInStatus, getPhotoUrl } from "./auth";

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

  it("should return userEmail", function () {
    const mockParams = {
      email: "test@test.bg"
    };

    const selected = getEmail.resultFunc(mockParams);
    expect(selected).toEqual(mockParams);
  });

  it("should return userPhotoUrl", function () {
    const mockParams = {
      photoUrl: "mock.me"
    };

    const selected = getPhotoUrl.resultFunc(mockParams);
    expect(selected).toEqual(mockParams);
  });
});
