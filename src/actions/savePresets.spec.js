import { ADD_SAVE_PRESET, INIT_SAVE_PRESETS, REMOVE_SAVE_PRESET, SET_PRESET_ID } from "./constants";
import { addSavePreset, initSavePresets, removeSavePreset, setPresetId } from "./savePresets";

describe("savePresets actions", () => {
	it("should create action for initSavePresets", function () {
		const payload = { presetsCollection: [] };
    const expectedAction = {
      type: INIT_SAVE_PRESETS,
      payload
		};
		
    expect(initSavePresets(payload)).toEqual(expectedAction);
	});

	it("should create action for setPresetId", function () {
		const presetId = 1;
    const expectedAction = {
      type: SET_PRESET_ID,
      payload: presetId
		};
		
    expect(setPresetId(presetId)).toEqual(expectedAction);
	});

	it("should create action for addSavePreset", function () {
		const payload = { id: 1 };
    const expectedAction = {
      type: ADD_SAVE_PRESET,
      payload
		};
		
    expect(addSavePreset(payload)).toEqual(expectedAction);
	});

	it("should create action for removeSavePreset", function () {
		const id = 1;
    const expectedAction = {
      type: REMOVE_SAVE_PRESET,
      payload: id
		};
		
    expect(removeSavePreset(id)).toEqual(expectedAction);
	});
});