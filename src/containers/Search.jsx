import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Search } from "../components/materials/Search/index";

import { setSearchQuery } from "../actions/search";

const mapStateToProps = (state) => {
  return {
    searchQuery: state.searchQuery
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
