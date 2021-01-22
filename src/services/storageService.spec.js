import StorageService from "./storageService";

describe("StorageService", () => {
  describe("User storage", () => {
    const userData = { email: "123", token: "123" };
    beforeEach(() => {
      StorageService.saveUserInfo(userData);
    });

    it("should save user token", () => {
      StorageService.saveToken(userData.token);
      expect(StorageService.getToken()).toBe(userData.token);
    });

    it("should save email", () => {
      expect(StorageService.getUser()).toStrictEqual(userData);
    });

    it("should be authenticated", () => {
      expect(StorageService.isUserAuthenticated()).toBe(true);
    });

    it("should clear", () => {
      expect(StorageService.clear()).toBe(undefined);
    });
  });
});
