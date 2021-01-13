import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { MaterialTypes } from "../components/materials/MaterialTypes/index.jsx";

import fetchMaterialTypesThunk from "../services/fetchMaterialTypesThunk";
import { selectMaterialType } from "../actions/filters";

const mapStateToProps = (state) => {
  return {
    materialTypes: state.materialTypes
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchMaterialTypes: fetchMaterialTypesThunk,
      selectMaterialType: selectMaterialType
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MaterialTypes);
