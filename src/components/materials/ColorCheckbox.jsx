import { Component } from "react";

export class ColorCheckbox extends Component {
  constructor() {
    super();

    this.state = {
      outline: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      outline: !this.state.outline
    });
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
          outline: this.state.outline ? "auto" : "none"
        }}
        onClick={this.handleChange}
      />
    );
  }
}
