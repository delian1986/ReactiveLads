import { ADD_TAGS } from "./constants";

export const addTags = (tags) => {
  return {
    type: ADD_TAGS,
    payload: tags
  };
};
