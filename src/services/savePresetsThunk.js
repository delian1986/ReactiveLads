import { getToken } from "../selectors";
import { handleResponse } from "./handleResponse";
import { addSavePreset, removeSavePreset } from "../actions/savePresets";

const API_BASE_URL = process.env.API_BASE_URL;

export const addPresetThink = (title) => async (dispatch, getState) => {
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

export const removePresetThunk = (id) => async (dispatch, getState) => {
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
