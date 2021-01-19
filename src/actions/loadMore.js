import { LOAD_MORE_DISABLE, LOAD_MORE_ENABLE } from "./constants";

export const loadMoreEnable = () => ({
  type: LOAD_MORE_ENABLE
});
export const loadMoreDisable = () => ({
  type: LOAD_MORE_DISABLE
});
