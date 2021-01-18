import { Component } from "react";
import { ColorCheckbox } from "../ColorCheckbox";
import PropTypes from "prop-types";

export class Colors extends Component {
  componentDidMount() {
    this.props.fetchColors();
  }

  render() {
    const { colors, selectColor } = this.props;
    return (
      <>
        <h5>Colors</h5>
        {colors.length > 0 ? (
          <div style={{ display: "flow-root" }}>
            <h5>Colors</h5>
            {colors.map((color) => (
              <ColorCheckbox
                key={color.id}
                id={color.id}
                hex={color.hex}
                selectColor={selectColor}
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

Colors.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      hex: PropTypes.string,
      selectColor: PropTypes.func
    })
  ),
  fetchColors: PropTypes.func.isRequired,
  selectColor: PropTypes.func.isRequired
};
