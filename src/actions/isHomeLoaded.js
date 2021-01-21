import { IS_HOME_LOADED } from "./constants";

export const isHomeLoaded = (isLoaded) => ({
  type: IS_HOME_LOADED,
  payload: isLoaded
});
