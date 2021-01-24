import { IS_VRSCANS_LOADED } from "./constants";
import { isVrScansLoaded } from "./isVrScansLoaded";

describe("isHomeLoaded actions", () => {
	it("should create action for isVrScansLoaded", function () {
		const payload = true;
    const expectedAction = {
      type: IS_VRSCANS_LOADED,
      payload
		};
		
    expect(isVrScansLoaded(payload)).toEqual(expectedAction);
	});
});