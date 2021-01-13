import { Component } from "react";
import { MaterialType } from "../MaterialType";

export class MaterialTypes extends Component {
  componentDidMount() {
    console.log("component did mount");
    this.props.fetchMaterialTypes();
  }

  render() {
    console.log(this.props);
    return this.props.materialTypes.length > 0 ? (
      <div>
        <h5>Material Types</h5>
        {this.props.materialTypes.map((materialType) => (
          <MaterialType key={materialType.id} materialType={materialType} />
        ))}
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}
