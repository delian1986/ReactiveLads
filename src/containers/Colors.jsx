import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Colors } from "../components/materials/Colors";

import { selectColor } from "../store/actions/filters";

const mapStateToProps = (state) => {
  return {
    colors: state.colors,
    selectedColorsFilter: state.filters.selectedColors
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      selectColor: selectColor
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Colors);
