import { Component } from "react";
import { MaterialType } from "../MaterialType";
import PropTypes from "prop-types";

export class MaterialTypes extends Component {
  render() {
    const {
      materialTypes,
      selectMaterialType,
      selectedMaterialsFilter
    } = this.props;
    return (
      <>
        <h5>Material Types</h5>
        {materialTypes.length > 0 ? (
          <div>
            {materialTypes.map((materialType) => (
              <MaterialType
                key={materialType.id}
                id={materialType.id}
                name={materialType.name}
                selectMaterialType={selectMaterialType}
                isSelected={selectedMaterialsFilter.some(
                  (typeId) => typeId === materialType.id
                )}
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

MaterialTypes.propTypes = {
  materialTypes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      selectMaterialType: PropTypes.func
    })
  ),
  selectMaterialType: PropTypes.func.isRequired,
  selectedMaterialsFilter: PropTypes.array
};
