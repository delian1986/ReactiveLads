import { Component } from "react";
import { MaterialType } from "../MaterialType";

export class MaterialTypes extends Component {
  componentDidMount() {
    this.props.fetchMaterialTypes();
  }

  render() {
    return this.props.materialTypes.length > 0 ? (
      <div>
        <h5>Material Types</h5>
        {this.props.materialTypes.map((materialType) => (
          <MaterialType
            key={materialType.id}
            id={materialType.id}
            name={materialType.name}
            selectMaterialType={this.props.selectMaterialType}
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
