import { addVrScans } from "../actions/vrScans";
import StorageService from "./storageService";
const API_BASE_URL = process.env.API_BASE_URL;
import { setPage } from "../actions/page";

const token = StorageService.getToken();

export const fetchVrScansThunk = () => async (dispatch, getState) => {
  const state = getState();

  const pageToLoad = state.page + 1;

  let filter = "";
  if (state.filters.selectedColors.length) {
    filter += state.selectedColors.map((c) => `colors=${c}&`);
  }

  const pagination = `_page=${pageToLoad}&_limit=18&`;

  const data = await fetch(`${API_BASE_URL}/vrscans?${filter}${pagination}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const scans = await data.json();

  await new Promise((resolve) => setTimeout(resolve, 200));

  dispatch(setPage(pageToLoad));
  dispatch(addVrScans(scans));
};

export default fetchVrScansThunk;
