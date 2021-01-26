import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Search } from "../components/materials/Search/index";
import { setSearchQuery } from "../store/actions/filters";

const mapStateToProps = (state) => {
  return {
    searchQuery: state.filters.searchQuery
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setSearchQuery: setSearchQuery
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Search);
