import StorageService from "./storageService";
const PUBLIC_BASE_PATH = process.env.PUBLIC_BASE_PATH;

export function handleResponse(response) {
  if (401 === response.status) {
    StorageService.clear();
    location.replace(PUBLIC_BASE_PATH);
  }
  return response.json();
}
