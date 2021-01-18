import { Component } from "react";
import PropTypes from "prop-types";

export class MaterialType extends Component {
  render() {
    const { id, name, selectMaterialType } = this.props;

    return (
      <div>
        <label>
          <input
            type="checkbox"
            className="mr-2"
            onClick={() => selectMaterialType(id)}
          />
          {name}
        </label>
      </div>
    );
  }
}

MaterialType.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  selectMaterialType: PropTypes.func.isRequired
};
