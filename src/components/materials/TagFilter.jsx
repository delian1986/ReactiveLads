import { Component } from "react";

export class TagFilter extends Component {
  render() {
    return (
      <div>
        <label>
          <input type="checkbox" className="mr-2" />
          TagFilter
        </label>
      </div>
    );
  }
}
