import { Component } from "react";

export class TagFilter extends Component {
  render() {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            className="mr-2"
            onClick={() => this.props.selectTag(this.props.id)}
          />
          {this.props.name}
        </label>
      </div>
    );
  }
}
