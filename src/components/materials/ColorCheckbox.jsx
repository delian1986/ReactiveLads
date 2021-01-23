import { Component } from "react";
import PropTypes from "prop-types";

export class ColorCheckbox extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.selectColor(this.props.id);
  }

  render() {
    return (
      <div
        style={{
          background: this.props.hex,
          height: "25px",
          width: "25px",
          position: "relative",
          float: "left",
          margin: "5px",
          outline: this.props.isSelected ? "auto" : "none"
        }}
        onClick={this.handleChange}
      />
    );
  }
}

ColorCheckbox.propTypes = {
  id: PropTypes.number.isRequired,
  hex: PropTypes.string.isRequired,
  selectColor: PropTypes.func.isRequired,
  isSelected: PropTypes.bool
};
