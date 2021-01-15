import {
  SELECT_MATERIAL_TYPE,
  SELECT_COLOR,
  SELECT_TAG
} from "../actions/constants";

const initialState = {
  selectedMaterialTypes: [],
  selectedColors: [],
  selectedTags: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_MATERIAL_TYPE:
      if (state.selectedMaterialTypes.includes(action.payload)) {
        return {
          ...state,
          selectedMaterialTypes: state.selectedMaterialTypes.filter(
            (m) => m !== action.payload
          )
        };
      } else {
        return {
          ...state,
          selectedMaterialTypes: [...state.selectedMaterialTypes, action.payload]
        };
      }
    case SELECT_COLOR:
      if (state.selectedColors.includes(action.payload)) {
        return {
          ...state,
          selectedColors: state.selectedColors.filter((c) => c !== action.payload)
        };
      } else {
        return {
          ...state,
          selectedColors: [...state.selectedColors, action.payload]
        };
      }
    case SELECT_TAG:
      if (state.selectedTags.includes(action.payload)) {
        return {
          ...state,
          selectedTags: state.selectedTags.filter((c) => c !== action.payload)
        };
      } else {
        return {
          ...state,
          selectedTags: [...state.selectedTags, action.payload]
        };
      }
    default:
      return state;
  }
};
