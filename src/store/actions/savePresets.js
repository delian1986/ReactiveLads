import {
  ADD_SAVE_PRESET,
  INIT_SAVE_PRESETS,
  REMOVE_SAVE_PRESET,
  SET_PRESET_ID
} from "./constants";
import { getToken } from "../selectors";
import { handleResponse } from "../../services/handleResponse";

const API_BASE_URL = process.env.API_BASE_URL;

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

export const addPresetAsync = (title) => async (dispatch, getState) => {
  const state = getState();
  const token = getToken(state);
  const presetData = {
    title,
    search: state.filters.searchQuery || "",
    userId: state.auth.id,
    tags: state.filters.selectedTags || [],
    colors: state.filters.selectedColors || [],
    materialTypes: state.filters.selectedMaterialTypes || []
  };

  await fetch(`${API_BASE_URL}/savePresets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(presetData)
  })
    .then(handleResponse)
    .then((data) => {
      dispatch(addSavePreset(data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const removePresetAsync = (id) => async (dispatch, getState) => {
  const state = getState();
  const token = getToken(state);

  await fetch(`${API_BASE_URL}/savePresets/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(handleResponse)
    .then(() => {
      dispatch(removeSavePreset(id));
    })
    .catch((err) => {
      console.log(err);
    });
};
