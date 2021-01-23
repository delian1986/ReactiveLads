import { getEmail, getPage, getToken } from "../selectors";
import { handleResponse } from "./handleResponse";
import { addMaterialTypes } from "../actions/materialTypes";
import { addColors } from "../actions/colors";
import { addTags } from "../actions/tags";
import { addVrScans } from "../actions/vrScans";
import { setPage } from "../actions/page";
import { isHomeLoaded } from "../actions/isHomeLoaded";
import { updateUser } from "../actions/auth";
import StorageService from "./storageService";
import { initFavorites } from "../actions/favorites";
import { isVrScansLoaded } from "../actions/isVrScansLoaded";
import { initSavePresets } from "../actions/savePresets";
const VRSCANS_PER_PAGE = process.env.VRSCANS_PER_PAGE;
const API_BASE_URL = process.env.API_BASE_URL;

export const homeInitThunk = () => async (dispath, getState) => {
  const state = getState();
  const token = getToken(state);
  const email = getEmail(state);
  const page = getPage(state);

  await fetch(
    `${API_BASE_URL}/index?email=${email}&vrscansLimit=${VRSCANS_PER_PAGE}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
    .then(handleResponse)
    .then((data) => {
      data.materials && dispath(addMaterialTypes(data.materials));
      data.colors && dispath(addColors(data.colors));
      data.tags && dispath(addTags(data.tags));
      data.savePresets && dispath(initSavePresets(data.savePresets));
      data.vrscans && dispath(addVrScans(data.vrscans));
      dispath(setPage(page + 1));

      data.user && dispath(updateUser(data.user));
      data.favorites && dispath(initFavorites(data.favorites));
      StorageService.saveUserInfo(data.user);

      dispath(isHomeLoaded(true));
      dispath(isVrScansLoaded(true));
    })
    .catch((err) => {
      console.log(err);
    });
};
