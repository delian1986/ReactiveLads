import { addVrScans } from "../actions/vrScans";
const API_BASE_URL = process.env.API_BASE_URL;
const VRSCANS_PER_PAGE = process.env.VRSCANS_PER_PAGE;
import { setPage } from "../actions/page";
import { getToken } from "../selectors/index";
import { loadMoreDisable } from "../actions/loadMore";

export const fetchVrScansThunk = () => async (dispatch, getState) => {
  const state = getState();
  const token = getToken(state);

  const pageToLoad = state.page + 1;

  let filter = "";
  state.filters.selectedMaterialTypes.forEach((c) => {
    filter += `materialTypeId=${c}&`;
  });
  state.filters.selectedColors.forEach((c) => {
    filter += `colors_like=(^|,)${c}(,|$)&`;
  });
  state.filters.selectedTags.forEach((c) => {
    filter += `tags_like=(^|,)${c}(,|$)&`;
  });

  const pagination = `_page=${pageToLoad}&_limit=${VRSCANS_PER_PAGE}&`;

  const data = await fetch(`${API_BASE_URL}/vrscans?${filter}${pagination}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const scans = await data.json();

  await new Promise((resolve) => setTimeout(resolve, 200));

  console.log("VRSCANS_PER_PAGE", VRSCANS_PER_PAGE);
  if (scans.length < VRSCANS_PER_PAGE) {
    dispatch(loadMoreDisable());
  }
  dispatch(setPage(pageToLoad));
  dispatch(addVrScans(scans));
};

export default fetchVrScansThunk;
