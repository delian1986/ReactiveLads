import { addVrScans } from "../actions/vrScans";
const API_BASE_URL = process.env.API_BASE_URL;
import { setPage } from "../actions/page";
import { getToken } from "../selectors/index";

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
