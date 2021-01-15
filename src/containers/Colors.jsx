import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Colors } from "../components/materials/Colors/index.jsx";

import fetchColorsThunk from "../services/fetchColorsThunk";
import { selectColor } from "../actions/filters";

const mapStateToProps = (state) => {
  return {
    colors: state.colors
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchColors: fetchColorsThunk,
      selectColor: selectColor
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Colors);
