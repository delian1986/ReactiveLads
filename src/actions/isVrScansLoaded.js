import { IS_VRSCANS_LOADED } from "./constants";

export const isVrScansLoaded = (isLoaded) => ({
  type: IS_VRSCANS_LOADED,
  payload: isLoaded
});
