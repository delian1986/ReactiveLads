import {
  ADD_SAVE_PRESET,
  INIT_SAVE_PRESETS,
  REMOVE_SAVE_PRESET,
  SET_PRESET_ID
} from "./constants";

export const initSavePresets = (presets) => {
  return {
    type: INIT_SAVE_PRESETS,
    payload: presets
  };
};

export const setPresetId = (presetId) => {
  return {
    type: SET_PRESET_ID,
    payload: presetId
  };
};

export const addSavePreset = (preset) => {
  return {
    type: ADD_SAVE_PRESET,
    payload: preset
  };
};

export const removeSavePreset = (preset) => {
  return {
    type: REMOVE_SAVE_PRESET,
    payload: preset
  };
};
