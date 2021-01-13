import { Component } from "react";

export class MaterialType extends Component {
  render() {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            className="mr-2"
            onClick={() => this.props.selectMaterialType(this.props.id)}
          />
          {this.props.name}
        </label>
      </div>
    );
  }
}
