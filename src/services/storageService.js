class StorageService {
  static isUserAuthenticated() {
    return localStorage.getItem("token") !== null;
  }

  static clear() {
    localStorage.clear();
  }

  static saveUserInfo(user) {
    const userString = JSON.stringify(user);
    try {
      JSON.parse(userString);
    } catch (e) {
      localStorage.removeItem("user");
      return;
    }
    localStorage.setItem("user", userString);
  }

  static getToken() {
    return localStorage.getItem("token");
  }

  static saveToken(token) {
    return localStorage.setItem("token", token);
  }

  static getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default StorageService;
