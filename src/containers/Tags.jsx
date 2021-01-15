import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Tags } from "../components/materials/Tags/index.jsx";

import fetchTagsThunk from "../services/fetchTagsThunk";
import { selectTag } from "../actions/filters";

const mapStateToProps = (state) => {
  return {
    tags: state.tags
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchTags: fetchTagsThunk,
      selectTag: selectTag
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Tags);
