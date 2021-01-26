import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleFavoritesMode } from "../store/actions/filters";
import { Favorites } from "../components/materials/Favorites";

const mapStateToProps = (state) => {
  return {
    isInFavoritesMode: state.filters.isInFavoritesMode
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      toggleFavoritesMode: toggleFavoritesMode
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
