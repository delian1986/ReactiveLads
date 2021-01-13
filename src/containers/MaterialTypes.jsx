import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { MaterialTypes } from "../components/materials/MaterialTypes/index.jsx";

import fetchMaterialTypesThunk from "../services/fetchMaterialTypesThunk";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    materialTypes: state.materialTypes
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchMaterialTypes: fetchMaterialTypesThunk }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MaterialTypes);
