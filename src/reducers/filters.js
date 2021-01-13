import { SELECT_MATERIAL_TYPE } from "../actions/constants";

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
    default:
      return state;
  }
};
