import {
  SELECT_MATERIAL_TYPE,
  SELECT_COLOR,
  SELECT_TAG,
  IS_IN_FAVORITES_MODE,
  SET_ALL_FILTERS,
  SET_SEARCH_QUERY,
  RESET_ALL_FILTERS
} from "../actions/constants";

const initialState = {
  selectedMaterialTypes: [],
  selectedColors: [],
  selectedTags: [],
  searchQuery: "",
  isInFavoritesMode: false
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
    case SET_ALL_FILTERS:
      return {
        ...state,
        selectedTags: action.payload.tags,
        selectedColors: action.payload.colors,
        selectedMaterialTypes: action.payload.types,
        searchQuery: action.payload.searchQuery,
        isInFavoritesMode: action.payload.favoritesMode
      };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload
      };
    case RESET_ALL_FILTERS:
      return initialState;
    case IS_IN_FAVORITES_MODE:
      return {
        ...state,
        isInFavoritesMode: action.payload
      };
    default:
      return state;
  }
};
