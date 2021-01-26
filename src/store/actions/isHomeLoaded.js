import { IS_HOME_LOADED } from "./constants";
import { getEmail, getPage, getToken } from "../selectors";
import { handleResponse } from "../../services/handleResponse";
import { addMaterialTypes } from "./materialTypes";
import { addColors } from "./colors";
import { addTags } from "./tags";
import { addVrScans } from "./vrScans";
import { setPage } from "./page";
import { updateUser } from "./auth";
import StorageService from "../../services/storageService";
import { initFavorites } from "./favorites";
import { isVrScansLoaded } from "./isVrScansLoaded";
import { initSavePresets } from "./savePresets";
const VRSCANS_PER_PAGE = process.env.VRSCANS_PER_PAGE;
const API_BASE_URL = process.env.API_BASE_URL;

export const isHomeLoaded = (isLoaded) => ({
  type: IS_HOME_LOADED,
  payload: isLoaded
});

export const homeInitAsync = () => async (dispath, getState) => {
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
