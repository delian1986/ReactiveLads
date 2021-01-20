import StorageService from "./storageService";
const PUBLIC_BASE_PATH = process.env.PUBLIC_BASE_PATH;

export function handleResponse(response) {
  if (401 === response.status) {
    StorageService.clearUser();
    location.replace(`${PUBLIC_BASE_PATH}login`);
  }
  return response.json();
}
