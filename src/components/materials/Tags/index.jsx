import { Component } from "react";
import { TagFilter } from "../TagFilter";
import PropTypes from "prop-types";

export class Tags extends Component {
  render() {
    const { tags, selectTag, selectedTagsFilter } = this.props;
    return (
      <>
        <h5>Tags</h5>
        {tags.length > 0 ? (
          <div>
            {tags.map((tag) => (
              <TagFilter
                key={tag.id}
                id={tag.id}
                name={tag.name}
                selectTag={selectTag}
                isSelected={selectedTagsFilter.some((tagId) => tagId === tag.id)}
              />
            ))}
          </div>
        ) : (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </>
    );
  }
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      selectMaterialType: PropTypes.func
    })
  ),
  selectTag: PropTypes.func,
  fetchTags: PropTypes.func,
  selectedTagsFilter: PropTypes.array
};
