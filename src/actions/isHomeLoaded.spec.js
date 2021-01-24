import { IS_HOME_LOADED } from "./constants";
import { isHomeLoaded } from "./isHomeLoaded";

describe("isHomeLoaded actions", () => {
	it("should create action for isHomeLoaded", function () {
		const payload = true;
    const expectedAction = {
      type: IS_HOME_LOADED,
      payload
		};
		
    expect(isHomeLoaded(payload)).toEqual(expectedAction);
	});
});