import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { MaterialTypes } from "../components/materials/MaterialTypes";
import { selectMaterialType } from "../store/actions/filters";

const mapStateToProps = (state) => {
  return {
    materialTypes: state.materialTypes,
    selectedMaterialsFilter: state.filters.selectedMaterialTypes
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      selectMaterialType: selectMaterialType
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MaterialTypes);
