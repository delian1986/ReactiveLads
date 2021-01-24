import {
  addSavePreset,
  initSavePresets,
  removeSavePreset,
  setPresetId
} from "../actions/savePresets";
import savePresetsReducer from "./savePresets";

describe("savePresets reducer", () => {
  let mockState;
  beforeEach(() => {
    mockState = {
      presetId: 0,
      presetsCollection: []
    };
  });

  it("should return state by default", function () {
    expect(savePresetsReducer(mockState, {})).toEqual(mockState);
  });

  it("should return state after replacing its presetsCollection with the payload array", function () {
    const payload = [1, 2];
    mockState.presetsCollection = payload;

    expect(savePresetsReducer(undefined, initSavePresets(payload))).toEqual(
      mockState
    );
  });

  it("should return state after setting its presetId to the payload's id and adding the payload object to its presetsCollection array", function () {
    const payload = { id: 1 };
    mockState.presetId = payload.id;
    mockState.presetsCollection.push(payload);

    expect(savePresetsReducer(undefined, addSavePreset(payload))).toEqual(mockState);
  });

  it("should return state after removing the object with an id that matches the payload from its presetsCollection array", function () {
    const payload = 1;
    const mockInitialState = { ...mockState, presetsCollection: [{ id: 1 }] };

    expect(savePresetsReducer(mockInitialState, removeSavePreset(payload))).toEqual(
      mockState
    );
  });

  it("should return state after replacing its presetId with the payload", function () {
    const payload = 1;
    mockState.presetId = payload;

    expect(savePresetsReducer(undefined, setPresetId(payload))).toEqual(mockState);
  });
});
