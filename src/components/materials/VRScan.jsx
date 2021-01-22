import { Component } from "react";
import PropTypes from "prop-types";

export class VRScan extends Component {
  render() {
    const {
      id,
      thumb,
      name,
      fileName,
      favoriteData,
      pushToFavorites,
      removeFromFavorites,
      thisRef
    } = this.props;
    return (
      <div className="col mb-3" ref={thisRef}>
        <div className="card">
          <div className="card-body p-2">
            <img src={thumb} alt="vrScan image" className="card-img-top" />
            <h5 className="card-title pt-2 mb-0">{name}</h5>
            <div className="card-text">{fileName}</div>
            {favoriteData.length > 0 ? (
              <i
                className="bi bi-suit-heart-fill"
                onClick={() => removeFromFavorites(favoriteData)}
              />
            ) : (
              <i className="bi bi-suit-heart" onClick={() => pushToFavorites(id)} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

VRScan.propTypes = {
  thumb: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  favoriteData: PropTypes.array,
  pushToFavorites: PropTypes.func,
  removeFromFavorites: PropTypes.func,
  id: PropTypes.number
};
