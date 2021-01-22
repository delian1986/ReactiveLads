class StorageService {
  static isUserAuthenticated() {
    return localStorage.getItem("token") !== null;
  }

  static clear() {
    localStorage.clear();
  }

  static saveUserInfo(user) {
    localStorage.setItem("user", JSON.stringify(user));
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
