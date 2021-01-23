import {
  ADD_SAVE_PRESET,
  INIT_SAVE_PRESETS,
  REMOVE_SAVE_PRESET,
  SET_PRESET_ID
} from "../actions/constants";

const initialState = {
  presetId: 0,
  presetsCollection: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_SAVE_PRESETS:
      return {
        ...state,
        presetsCollection: action.payload
      };
    case ADD_SAVE_PRESET:
      return {
        ...state,
        presetsCollection: state.presetsCollection.concat(action.payload)
      };
    case REMOVE_SAVE_PRESET:
      return {
        ...state,
        presetsCollection: state.presetsCollection.filter(
          (fav) => fav.id !== action.payload
        )
      };
    case SET_PRESET_ID:
      return {
        ...state,
        presetId: action.payload
      };
    default:
      return state;
  }
};
