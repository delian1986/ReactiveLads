import { ADD_TAGS } from "./constants";
import { addTags } from "./tags";

describe("tags actions", () => {
  it("should create action for addTags", function () {
    const tags = [];

    const expectedAction = {
      type: ADD_TAGS,
      payload: tags
    };
    expect(addTags(tags)).toEqual(expectedAction);
  });
});
