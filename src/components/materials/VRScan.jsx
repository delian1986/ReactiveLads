import { Component } from "react";

export class VRScan extends Component {
  render() {
    return (
      <div className="col mb-3">
        <div className="card">
          <div className="card-body p-2">
            <img src={this.props.thumb} alt="Cnv82" className="card-img-top" />
            <h5 className="card-title pt-2 mb-0">{this.props.name}</h5>
            <div className="card-text">{this.props.fileName}</div>
          </div>
        </div>
      </div>
    );
  }
}
