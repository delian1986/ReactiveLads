import { Component } from "react";
import PropTypes from "prop-types";

export class TagFilter extends Component {
  render() {
    const { id, name, selectTag, isSelected } = this.props;
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={isSelected}
            className="mr-2"
            onChange={() => selectTag(id)}
          />
          {name}
        </label>
      </div>
    );
  }
}

TagFilter.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  selectTag: PropTypes.func.isRequired,
  isSelected: PropTypes.bool
};
