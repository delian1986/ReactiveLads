import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Tags } from "../components/materials/Tags";

import { selectTag } from "../store/actions/filters";

const mapStateToProps = (state) => {
  return {
    tags: state.tags,
    selectedTagsFilter: state.filters.selectedTags
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      selectTag: selectTag
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Tags);
