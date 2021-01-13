import { Component } from "react";

export class MaterialType extends Component {
  render() {
    return (
      <div>
        <label>
          <input type="checkbox" className="mr-2" />
          {this.props.materialType.name}
        </label>
      </div>
    );
  }
}
