import { ADD_VR_SCANS, RESET_VR_SCANS } from "./constants";
const API_BASE_URL = process.env.API_BASE_URL;
const VRSCANS_PER_PAGE = process.env.VRSCANS_PER_PAGE;
import { setPage } from "./page";
import { getIsInFavoritesMode, getPage, getToken } from "../selectors/index";
import { loadMoreDisable } from "./loadMore";
import { handleResponse } from "../../services/handleResponse";
import { isVrScansLoaded } from "./isVrScansLoaded";

export const addVrScans = (vrScans) => {
  return {
    type: ADD_VR_SCANS,
    payload: vrScans
  };
};

export const resetVrScans = () => {
  return {
    type: RESET_VR_SCANS
  };
};

export const fetchVrScansAsync = () => async (dispatch, getState) => {
  const state = getState();
  const token = getToken(state);
  const currPage = getPage(state);
  const isInFavoritesMode = getIsInFavoritesMode(state);
  const favorites = state.favorites;
  const pageToLoad = currPage + 1;

  let filter = "";
  if (state.filters.searchQuery !== "") {
    filter += `name_like=${state.filters.searchQuery}&`;
  }

  if (isInFavoritesMode) {
    if (favorites.length === 0) {
      return dispatch(resetVrScans());
    }

    state.favorites.forEach((f) => {
      filter += `id=${f.vrscanId}&`;
    });
  }
  state.filters.selectedMaterialTypes.forEach((c) => {
    filter += `materialTypeId=${c}&`;
  });
  state.filters.selectedColors.forEach((c) => {
    filter += `colors_like=(^|,)${c}(,|$)&`;
  });
  state.filters.selectedTags.forEach((c) => {
    filter += `tags_like=(^|,)${c}(,|$)&`;
  });

  dispatch(isVrScansLoaded(false));

  const pagination = `_page=${pageToLoad}&_limit=${VRSCANS_PER_PAGE}`;

  const data = await fetch(`${API_BASE_URL}/vrscans?${filter}${pagination}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const scans = await handleResponse(data);

  await new Promise((resolve) => setTimeout(resolve, 200));

  if (scans.length < VRSCANS_PER_PAGE) {
    dispatch(loadMoreDisable());
  }
  dispatch(setPage(pageToLoad));
  dispatch(addVrScans(scans));
  dispatch(isVrScansLoaded(true));
};

export default fetchVrScansAsync;
