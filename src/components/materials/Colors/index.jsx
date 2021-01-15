import { Component } from "react";
import { ColorCheckbox } from "../ColorCheckbox";

export class Colors extends Component {
  componentDidMount() {
    this.props.fetchColors();
  }

  render() {
    return this.props.colors.length > 0 ? (
      <div style={{ display: "flow-root" }}>
        <h5>Colors</h5>
        {this.props.colors.map((color) => (
          <ColorCheckbox
            key={color.id}
            id={color.id}
            hex={color.hex}
            selectColor={this.props.selectColor}
          />
        ))}
      </div>
    ) : (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
}
