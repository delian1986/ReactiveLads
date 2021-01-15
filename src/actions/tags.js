import { FETCH_TAGS } from "./constants";

export const fetchTags = (tags) => {
  return {
    type: FETCH_TAGS,
    payload: tags
  };
};
