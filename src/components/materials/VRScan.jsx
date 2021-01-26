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
    let favoriteClass, favoriteOnClick;
    if (favoriteData.length > 0) {
      favoriteClass = "bi-suit-heart-fill";
      favoriteOnClick = () => removeFromFavorites(favoriteData);
    } else {
      favoriteClass = "bi-suit-heart";
      favoriteOnClick = () => pushToFavorites(id);
    }

    return (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" ref={thisRef}>
        <div className="card h-100">
          <div className="card-body p-2">
            <img src={thumb} alt="vrScan image" className="card-img-top" />
            <h5 className="card-title pt-2 mb-0">{name}</h5>
            <div className="card-text">{fileName}</div>
            <i
              className={`bi ${favoriteClass} position-absolute`}
              style={{ top: 0, left: 5 }}
              onClick={favoriteOnClick}
            />
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
